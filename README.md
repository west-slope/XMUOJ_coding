# XMUOJ 题解静态站

这是一个不依赖外部 CDN 的静态网站，适合直接部署到 GitHub Pages、Gitee Pages、Cloudflare Pages、Netlify 或自己的服务器。打开 `index.html` 即可浏览。

## 自动导入

最简单入口：双击 `import-lishengrui-359.cmd`，它会打开 XMUOJ 页面，并引导你粘贴登录后的 Cookie。

在当前目录运行：

```powershell
.\tools\import-xmuoj.ps1 -ContestId 123,456
```

李胜睿班比赛 `359` 的密码是 `ilovexmu`，运行：

```powershell
.\tools\import-xmuoj.ps1 -ContestId 359 -ContestPassword ilovexmu
```

XMUOJ 的密码保护比赛通常还要求登录。如果提示 `Please login first`，先在浏览器登录 `www.xmuoj.com`，复制请求头里的 Cookie，再运行：

```powershell
.\tools\import-xmuoj.ps1 -ContestId 359 -ContestPassword ilovexmu -Cookie "csrftoken=...; sessionid=..."
```

导入全部公开比赛：

```powershell
.\tools\import-xmuoj.ps1 -AllPublic -Limit 200
```

## 答案代码

把答案放在 `solutions/<contestId>/<problemId>.<ext>`，例如：

```text
solutions/123/A.cpp
solutions/123/B.py
```

重新运行导入脚本后，代码会写入 `data.js` 并直接显示在网页上。

## 导出 Word / Markdown

双击 `export-documents.cmd`，会在 `exports/` 目录生成：

- `xmuoj-solutions-时间戳.md`
- `xmuoj-solutions-时间戳.docx`

Word/WPS 打开 `.docx` 后可以继续整理并另存为 PDF。


## Solution filename format

Problem titles are displayed like `001 铁令求和`. Solution files can use either the original XMUOJ id or the shorter number:

```text
JD001.cpp
001.cpp
```

After adding solutions, run the import command again, then commit and push to GitHub.
