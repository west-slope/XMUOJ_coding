@echo off
setlocal
cd /d "%~dp0"
set "NODE_EXE=C:\Users\笑春风\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"
set "NODE_PATH=C:\Users\笑春风\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\node_modules"
if exist "%NODE_EXE%" (
  "%NODE_EXE%" "%~dp0tools\export-documents.js"
) else (
  node "%~dp0tools\export-documents.js"
)
pause
