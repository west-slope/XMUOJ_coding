param(
  [string[]]$ContestId = @(),
  [switch]$AllPublic,
  [int]$Limit = 200,
  [string]$BaseUrl = "http://www.xmuoj.com",
  [string]$ContestPassword = "",
  [string]$Cookie = "",
  [string]$CookieFile = "",
  [string]$SolutionsDir = "",
  [string]$OutFile = ""
)

$ErrorActionPreference = "Stop"
$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$SiteRoot = Resolve-Path (Join-Path $ScriptDir "..")
if (-not $SolutionsDir) { $SolutionsDir = Join-Path $SiteRoot "solutions" }
if (-not $OutFile) { $OutFile = Join-Path $SiteRoot "data.js" }
if ($CookieFile) { $Cookie = Get-Content -Raw -LiteralPath $CookieFile }
$Cookie = $Cookie.Trim()
$Session = New-Object Microsoft.PowerShell.Commands.WebRequestSession

function Invoke-XmuOjApi {
  param(
    [string]$Path,
    [string]$Method = "Get",
    [hashtable]$Query = @{},
    $Body = $null
  )

  $builder = [System.UriBuilder]::new(($BaseUrl.TrimEnd("/") + "/api/" + $Path.TrimStart("/")))
  if ($Query.Count -gt 0) {
    $pairs = foreach ($key in $Query.Keys) {
      if ($null -ne $Query[$key] -and "$($Query[$key])" -ne "") {
        "{0}={1}" -f [uri]::EscapeDataString($key), [uri]::EscapeDataString("$($Query[$key])")
      }
    }
    $builder.Query = ($pairs -join "&")
  }

  $headers = @{}
  if ($Cookie) {
    $headers["Cookie"] = $Cookie
    $csrfMatch = [regex]::Match($Cookie, "(^|;\s*)csrftoken=([^;]+)")
    if ($csrfMatch.Success) {
      $headers["X-CSRFToken"] = [uri]::UnescapeDataString($csrfMatch.Groups[2].Value)
      $headers["Referer"] = "$($BaseUrl.TrimEnd('/'))/"
    }
  }

  $options = @{
    Uri = $builder.Uri.AbsoluteUri
    Headers = $headers
    Method = $Method
    WebSession = $Session
  }
  if ($null -ne $Body) {
    $options["Body"] = ($Body | ConvertTo-Json -Depth 8)
    $options["ContentType"] = "application/json"
  }

  $response = Invoke-RestMethod @options
  if ($null -ne $response.error) {
    throw "XMUOJ API error for $($builder.Uri.AbsoluteUri): $($response.data)"
  }
  return $response.data
}

function Try-XmuOjApi {
  param(
    [string]$Path,
    [string]$Method = "Get",
    [hashtable]$Query = @{},
    $Body = $null
  )
  try {
    return [pscustomobject]@{ ok = $true; data = Invoke-XmuOjApi -Path $Path -Method $Method -Query $Query -Body $Body; error = "" }
  } catch {
    return [pscustomobject]@{ ok = $false; data = $null; error = $_.Exception.Message }
  }
}

function Unlock-Contest {
  param([string]$ContestId)
  if (-not $ContestPassword) { return }
  $result = Try-XmuOjApi -Path "contest/password" -Method "Post" -Body @{ contest_id = $ContestId; password = $ContestPassword }
  if (-not $result.ok) {
    Write-Warning "Contest password unlock failed for $ContestId. If the contest needs login, pass browser Cookie with -Cookie or -CookieFile. Detail: $($result.error)"
  }
}

function Convert-Html {
  param($Value)
  if ($null -eq $Value) { return "" }
  return [string]$Value
}

function Find-Solution {
  param([string]$ContestId, [string]$ProblemId)

  $dir = Join-Path $SolutionsDir $ContestId
  if (-not (Test-Path -LiteralPath $dir)) { return $null }
  $extensions = @(".cpp", ".cc", ".cxx", ".c", ".py", ".java", ".js", ".ts", ".go", ".rs", ".kt")
  $baseNames = @($ProblemId)
  if ($ProblemId -match '^JD(\d+)$') { $baseNames += $Matches[1] }

  foreach ($baseName in $baseNames) {
    foreach ($ext in $extensions) {
      $path = Join-Path $dir ($baseName + $ext)
      if (Test-Path -LiteralPath $path) {
        return [pscustomobject]@{
          path = (Resolve-Path -LiteralPath $path).Path.Replace($SiteRoot.Path + "\", "")
          language = $ext.TrimStart(".")
          code = Get-Content -Raw -LiteralPath $path
        }
      }
    }
  }
  return $null
}

function Normalize-Samples {
  param($Problem)
  $samples = @()
  if ($Problem.samples) {
    foreach ($sample in $Problem.samples) {
      $samples += [pscustomobject]@{ input = [string]($sample.input); output = [string]($sample.output) }
    }
  } elseif ($Problem.sample_input -or $Problem.sample_output) {
    $samples += [pscustomobject]@{ input = [string]($Problem.sample_input); output = [string]($Problem.sample_output) }
  }
  return $samples
}

if (-not $AllPublic -and $ContestId.Count -eq 0) {
  throw "Please provide -ContestId 123,456 or use -AllPublic."
}

if ($AllPublic) {
  $list = Invoke-XmuOjApi -Path "contests" -Query @{ offset = 0; limit = $Limit }
  $ContestId = @($list.results | Where-Object { $_.contest_type -eq "Public" } | ForEach-Object { "$($_.id)" })
  if ($ContestId.Count -eq 0) {
    throw "No public contest found in the first $Limit contests. Use -ContestId or pass -Cookie for login/password contests."
  }
}

$contests = @()
foreach ($cid in $ContestId) {
  Write-Host "Importing contest $cid ..."
  $contest = Invoke-XmuOjApi -Path "contest" -Query @{ id = $cid }
  Unlock-Contest -ContestId $cid
  $problemListResult = Try-XmuOjApi -Path "contest/problem" -Query @{ contest_id = $cid }
  if (-not $problemListResult.ok) {
    Write-Warning "Skipped contest \${cid}: $($problemListResult.error)"
    Write-Warning "Log in in your browser, copy the Cookie header for www.xmuoj.com, then rerun this command with -Cookie."
    continue
  }

  $problems = @()
  foreach ($item in $problemListResult.data) {
    $displayId = [string]$item._id
    if (-not $displayId) { $displayId = [string]$item.id }
    Write-Host "  - $displayId $($item.title)"
    $detailResult = Try-XmuOjApi -Path "contest/problem" -Query @{ contest_id = $cid; problem_id = $displayId }
    if (-not $detailResult.ok) {
      Write-Warning "    skipped problem \${displayId}: $($detailResult.error)"
      continue
    }
    $detail = $detailResult.data
    $solution = Find-Solution -ContestId $cid -ProblemId $displayId
    $title = [string]$detail.title
    if (-not $title) { $title = [string]$item.title }

    $problems += [pscustomobject]@{
      id = $displayId
      title = $title
      url = "$($BaseUrl.TrimEnd('/'))/contest/$cid/problem/$displayId/"
      timeLimit = $detail.time_limit
      memoryLimit = $detail.memory_limit
      description = Convert-Html $detail.description
      inputDescription = Convert-Html $detail.input_description
      outputDescription = Convert-Html $detail.output_description
      hint = Convert-Html $detail.hint
      source = [string]$detail.source
      samples = @(Normalize-Samples $detail)
      solution = $solution
    }
  }

  $contests += [pscustomobject]@{
    id = [string]$cid
    title = [string]$contest.title
    description = Convert-Html $contest.description
    ruleType = [string]$contest.rule_type
    startTime = [string]$contest.start_time
    endTime = [string]$contest.end_time
    problems = $problems
  }
}

if ($contests.Count -eq 0) {
  throw "No contest was imported. For login/password contests, use -Cookie and optionally -ContestPassword."
}

$payload = [pscustomobject]@{
  generatedAt = (Get-Date).ToString("yyyy-MM-dd HH:mm:ss")
  source = $BaseUrl
  contests = $contests
}

$json = $payload | ConvertTo-Json -Depth 20
$content = "window.XMUOJ_SOLUTIONS_DATA = $json;"
Set-Content -LiteralPath $OutFile -Value $content -Encoding UTF8
Write-Host "Done: $OutFile"
