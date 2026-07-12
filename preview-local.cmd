@echo off
setlocal
cd /d "%~dp0"
set "PYTHON_EXE=C:\Users\%USERNAME%\AppData\Local\Programs\Python\Python312\python.exe"
set "PORT=8765"
if not exist "%PYTHON_EXE%" set "PYTHON_EXE=D:\Anaconda\python.exe"
if not exist "%PYTHON_EXE%" set "PYTHON_EXE=python"
start "" /b cmd /c "ping 127.0.0.1 -n 2 >nul & start "" http://127.0.0.1:%PORT%/?v=20260712-12"
"%PYTHON_EXE%" -m http.server %PORT% --bind 127.0.0.1
pause
