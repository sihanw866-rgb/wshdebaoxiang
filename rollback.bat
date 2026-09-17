@echo off
setlocal
set "GIT=C:\Users\DELL\.workbuddy\binaries\PortableGit\versions\1.2.0\cmd\git.exe"
cd /d "%~dp0"

echo Recent snapshots:
"%GIT%" log --oneline -8
echo.
set /p TARGET=Enter the snapshot id to go back to (or leave empty to just undo the last change):

if "%TARGET%"=="" (
  "%GIT%" reset --hard HEAD~1
) else (
  "%GIT%" reset --hard %TARGET%
)

echo.
echo Done. Current state:
"%GIT%" log --oneline -3
endlocal
