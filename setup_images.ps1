Add-Type -AssemblyName System.Drawing

$src = "C:\Users\TEJU\Pictures\Screenshots\Screenshot 2026-10-08 181037.png"
$img = [System.Drawing.Image]::FromFile($src)
Write-Host "Width: $($img.Width), Height: $($img.Height)"
$img.Dispose()
