$ErrorActionPreference = "Stop"

$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$SiteRoot = Resolve-Path (Join-Path $ScriptDir "..")
$contestId = "359"
$defaultPassword = "ilovexmu"
$contestUrl = "http://www.xmuoj.com/contest/359/problems"

Set-Location $SiteRoot

Write-Host ""
Write-Host "XMUOJ import helper for contest 359" -ForegroundColor Cyan
Write-Host "Default contest password: $defaultPassword"
Write-Host ""
Write-Host "Steps:"
Write-Host "1. A browser page will open. Log in to XMUOJ there."
Write-Host "2. If XMUOJ asks for the contest password, enter: $defaultPassword"
Write-Host "3. Copy the Cookie request header from www.xmuoj.com and paste it here."
Write-Host ""

Start-Process $contestUrl

$passwordInput = Read-Host "Contest password, press Enter to use ilovexmu"
if ([string]::IsNullOrWhiteSpace($passwordInput)) {
  $passwordInput = $defaultPassword
}

Write-Host ""
Write-Host "Paste Cookie. Example: csrftoken=...; sessionid=..."
Write-Host "Chrome/Edge: F12 -> Network -> refresh XMUOJ -> click a www.xmuoj.com request -> Headers -> Request Headers -> Cookie"
$cookie = Read-Host "Cookie"

if ([string]::IsNullOrWhiteSpace($cookie)) {
  throw "Cookie is required because contest 359 needs a logged-in XMUOJ session."
}

& (Join-Path $ScriptDir "import-xmuoj.ps1") -ContestId $contestId -ContestPassword $passwordInput -Cookie $cookie

Write-Host ""
Write-Host "Import done. Opening index.html ..." -ForegroundColor Green
Start-Process (Join-Path $SiteRoot "index.html")
