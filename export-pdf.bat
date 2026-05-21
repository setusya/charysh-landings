@echo off
REM ============================================================
REM  Чарышские Усадьбы — экспорт лендинга в PDF через Chrome
REM ----------------------------------------------------------
REM  Перед запуском убедитесь, что live-server работает
REM  на http://localhost:5500/
REM ============================================================

setlocal
set "CHROME=C:\Program Files\Google\Chrome\Application\chrome.exe"
set "OUT=%~dp0exports"
if not exist "%OUT%" mkdir "%OUT%"

REM Изолированный профиль, чтобы не блокировал обычный Chrome.
set "PROFILE=%TEMP%\chrome-pdf-profile"
if exist "%PROFILE%" rmdir /s /q "%PROFILE%"
mkdir "%PROFILE%"

REM Если аргумент не задан — экспортируем оба лендинга.
if "%~1"=="" (
    call :export nemtsov
    call :export privatecamps
    goto :done
)

call :export %1
goto :done

:export
echo Exporting %1.html  ^>  exports\%1.pdf
"%CHROME%" --headless=new --disable-gpu --no-sandbox ^
  --user-data-dir="%PROFILE%" ^
  --print-to-pdf="%OUT%\%1.pdf" ^
  --no-pdf-header-footer --hide-scrollbars ^
  --virtual-time-budget=30000 ^
  --run-all-compositor-stages-before-draw ^
  "http://localhost:5500/%1.html?print=1" 1>nul 2>nul
exit /b

:done
echo.
echo Done. Files:
dir /b "%OUT%\*.pdf"
endlocal
pause
