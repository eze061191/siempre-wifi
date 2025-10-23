# Script para subir cambios a GitHub

param(
    [string]$mensaje = "Configure Vercel for static deployment"
)

Write-Host "Subiendo cambios a GitHub..." -ForegroundColor Cyan
Write-Host ""

# Agregar todos los cambios
Write-Host "Agregando archivos..." -ForegroundColor Yellow
git add .

# Commit
Write-Host "Creando commit..." -ForegroundColor Yellow
git commit -m $mensaje

# Push
Write-Host "Subiendo a GitHub..." -ForegroundColor Yellow
git push origin main

Write-Host ""
Write-Host "Cambios subidos exitosamente!" -ForegroundColor Green
Write-Host ""
Write-Host "Proximos pasos:" -ForegroundColor Cyan
Write-Host "1. Ve a: https://vercel.com/new" -ForegroundColor White
Write-Host "2. Importa tu repositorio: eze061191/siempre-wifi" -ForegroundColor White
Write-Host "3. Configura:" -ForegroundColor White
Write-Host "   - Framework: Other" -ForegroundColor Gray
Write-Host "   - Build Command: (dejar vacio)" -ForegroundColor Gray
Write-Host "   - Output Directory: (dejar vacio)" -ForegroundColor Gray
Write-Host "4. Click en Deploy" -ForegroundColor White
Write-Host ""
Write-Host "Tu sitio estara en linea en 1-2 minutos!" -ForegroundColor Green
