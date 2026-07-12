@echo off
setlocal
cd /d "%~dp0"
set "NODE_EXE=C:\Program Files\nodejs\node.exe"
if not exist "%NODE_EXE%" set "NODE_EXE=node"
"%NODE_EXE%" "%~dp0tools\build-solutions-data.js"
if errorlevel 1 (
  echo.
  echo Sync failed.
  pause
  exit /b 1
)
echo.
echo Solutions synced. Refresh the browser with Ctrl+F5.
pause
