@echo off
setlocal
set "GIT=C:\Users\DELL\.workbuddy\binaries\PortableGit\versions\1.2.0\cmd\git.exe"
set "NODEDIR=C:\Users\DELL\.workbuddy\binaries\node\versions\22.22.2-3"
cd /d "%~dp0"

if "%~1"=="" (
  echo Usage: checkpoint.bat "your message"
  echo Example: checkpoint.bat "changed hero title size"
  exit /b 1
)

"%GIT%" add -A
"%GIT%" commit -m "%~1"
"%GIT%" log --oneline -5

echo.
echo Snapshot saved. To undo the last change run: rollback.bat
endlocal
