# Script para copiar las imágenes a la carpeta correcta

Write-Host "==================================" -ForegroundColor Cyan
Write-Host "  Copiador de Imágenes - Siempre WiFi" -ForegroundColor Cyan
Write-Host "==================================" -ForegroundColor Cyan
Write-Host ""

$destinoFolder = "public\images"

# Verificar que la carpeta de destino existe
if (-not (Test-Path $destinoFolder)) {
    New-Item -ItemType Directory -Path $destinoFolder -Force | Out-Null
    Write-Host "✓ Carpeta de destino creada: $destinoFolder" -ForegroundColor Green
}

Write-Host "Por favor, arrastra y suelta las imágenes aquí:" -ForegroundColor Yellow
Write-Host ""
Write-Host "1. Imagen de '5 amigos conectados'" -ForegroundColor White
$imagen1 = Read-Host "   Ruta completa de la primera imagen"

if ($imagen1 -and (Test-Path $imagen1)) {
    Copy-Item -Path $imagen1 -Destination "$destinoFolder\hero-amigos-wifi.jpg" -Force
    Write-Host "   ✓ Copiada como: hero-amigos-wifi.jpg" -ForegroundColor Green
} else {
    Write-Host "   ✗ Imagen no encontrada o ruta inválida" -ForegroundColor Red
}

Write-Host ""
Write-Host "2. Imagen de 'Conectividad global'" -ForegroundColor White
$imagen2 = Read-Host "   Ruta completa de la segunda imagen"

if ($imagen2 -and (Test-Path $imagen2)) {
    Copy-Item -Path $imagen2 -Destination "$destinoFolder\conectividad-global.jpg" -Force
    Write-Host "   ✓ Copiada como: conectividad-global.jpg" -ForegroundColor Green
} else {
    Write-Host "   ✗ Imagen no encontrada o ruta inválida" -ForegroundColor Red
}

Write-Host ""
Write-Host "==================================" -ForegroundColor Cyan
Write-Host "Proceso completado!" -ForegroundColor Green
Write-Host "Las imágenes están listas para usar en tu landing page." -ForegroundColor Green
Write-Host "==================================" -ForegroundColor Cyan
Write-Host ""

# Listar archivos en la carpeta de imágenes
Write-Host "Archivos en $destinoFolder:" -ForegroundColor Yellow
Get-ChildItem -Path $destinoFolder | Format-Table Name, Length, LastWriteTime

Read-Host "Presiona Enter para cerrar"
