@echo off
chcp 65001 >nul
cd /d "%~dp0"

set "GIT=C:\Users\DELL\.workbuddy\binaries\PortableGit\versions\1.2.0\cmd\git.exe"
set "GIT_CONFIG_NOSYSTEM=1"
set "GIT_SSH_COMMAND=C:\Users\DELL\.workbuddy\binaries\PortableGit\versions\1.2.0\usr\bin\ssh.exe -i C:\Users\DELL\.ssh\id_ed25519 -o StrictHostKeyChecking=accept-new"

echo.
echo === 1/3 暂存改动 ===
"%GIT%" add -A
if errorlevel 1 goto fail

echo === 2/3 写提交 ===
"%GIT%" commit -m "update site"
if errorlevel 1 echo (没有新的改动，跳过提交)

echo === 3/3 推送到 GitHub ===
"%GIT%" push origin main
if errorlevel 1 goto fail

echo.
echo === 推送完成 ===
echo GitHub 会自动构建，约 1 分钟后网站更新：
echo https://sihanw866-rgb.github.io/wshdebaoxiang/
echo.
pause
exit /b 0

:fail
echo.
echo === 出错了，请把上面红字截图发出来 ===
echo.
pause
exit /b 1
