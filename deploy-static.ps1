# Script para desplegar HTML estatico a GitHub Pages

Write-Host "Desplegando sitio estatico a GitHub Pages..." -ForegroundColor Cyan

# Crear carpeta build si no existe
if (-not (Test-Path "build")) {
    New-Item -ItemType Directory -Path "build" | Out-Null
}

# Copiar archivos estaticos
Write-Host "Copiando archivos..." -ForegroundColor Yellow
Copy-Item "index.html" "build/index.html" -Force
Copy-Item "styles.css" "build/styles.css" -Force
Copy-Item "script.js" "build/script.js" -Force

# Copiar carpeta public si existe
if (Test-Path "public") {
    Copy-Item "public/*" "build/" -Recurse -Force
}

Write-Host "Archivos copiados exitosamente" -ForegroundColor Green
Write-Host ""
Write-Host "Ahora ejecuta: npx gh-pages -d build" -ForegroundColor Cyan
