@echo off
setlocal
set "NODEDIR=C:\Users\DELL\.workbuddy\binaries\node\versions\22.22.2-3"
set "PATH=%NODEDIR%;%PATH%"
cd /d "%~dp0"

echo Starting portfolio preview at http://127.0.0.1:5173
start "Vite Dev Server" "%NODEDIR%\npm.cmd" run dev
timeout /t 5 /nobreak >nul
start "" http://127.0.0.1:5173

echo.
echo Server is running. Keep this window open.
echo Press Ctrl+C in the Vite window, or close it, to stop.
endlocal
