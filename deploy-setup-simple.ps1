# ============================================
# SCRIPT DE CONFIGURACION DE DESPLIEGUE
# Siempre WiFi - Automatizacion de Git + GitHub
# ============================================

Write-Host "Iniciando configuracion de despliegue para Siempre WiFi..." -ForegroundColor Cyan
Write-Host ""

# ============================================
# PASO 1: Verificar Git
# ============================================
Write-Host "PASO 1: Verificando Git..." -ForegroundColor Yellow

try {
    $gitVersion = git --version
    Write-Host "Git encontrado: $gitVersion" -ForegroundColor Green
} catch {
    Write-Host "Git no esta instalado. Por favor instala Git desde: https://git-scm.com" -ForegroundColor Red
    exit 1
}

Write-Host ""

# ============================================
# PASO 2: Verificar Node.js
# ============================================
Write-Host "PASO 2: Verificando Node.js..." -ForegroundColor Yellow

try {
    $nodeVersion = node --version
    Write-Host "Node.js encontrado: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "Node.js no esta instalado. Por favor instala Node.js desde: https://nodejs.org" -ForegroundColor Red
    exit 1
}

Write-Host ""

# ============================================
# PASO 3: Configurar Git (si es necesario)
# ============================================
Write-Host "PASO 3: Configurando Git..." -ForegroundColor Yellow

$gitUserName = git config --global user.name
$gitUserEmail = git config --global user.email

if (-not $gitUserName) {
    Write-Host "No se encontro configuracion de nombre de usuario" -ForegroundColor Yellow
    $userName = Read-Host "Ingresa tu nombre completo"
    git config --global user.name "$userName"
    Write-Host "Nombre configurado: $userName" -ForegroundColor Green
} else {
    Write-Host "Usuario Git: $gitUserName" -ForegroundColor Green
}

if (-not $gitUserEmail) {
    Write-Host "No se encontro configuracion de email" -ForegroundColor Yellow
    $userEmail = Read-Host "Ingresa tu email"
    git config --global user.email "$userEmail"
    Write-Host "Email configurado: $userEmail" -ForegroundColor Green
} else {
    Write-Host "Email Git: $gitUserEmail" -ForegroundColor Green
}

Write-Host ""

# ============================================
# PASO 4: Inicializar Git (si no existe)
# ============================================
Write-Host "PASO 4: Inicializando repositorio Git..." -ForegroundColor Yellow

if (Test-Path ".git") {
    Write-Host "Repositorio Git ya existe" -ForegroundColor Green
} else {
    git init
    Write-Host "Repositorio Git inicializado" -ForegroundColor Green
}

Write-Host ""

# ============================================
# PASO 5: Agregar archivos
# ============================================
Write-Host "PASO 5: Agregando archivos al staging..." -ForegroundColor Yellow

git add .
Write-Host "Archivos agregados" -ForegroundColor Green

Write-Host ""

# ============================================
# PASO 6: Crear commit inicial
# ============================================
Write-Host "PASO 6: Creando commit inicial..." -ForegroundColor Yellow

$commitExists = git log --oneline 2>$null
if (-not $commitExists) {
    git commit -m "Initial commit: Siempre WiFi landing page"
    Write-Host "Commit inicial creado" -ForegroundColor Green
} else {
    Write-Host "Ya existen commits en el repositorio" -ForegroundColor Green
}

Write-Host ""

# ============================================
# PASO 7: Configurar repositorio remoto
# ============================================
Write-Host "PASO 7: Configurando repositorio remoto..." -ForegroundColor Yellow
Write-Host ""

Write-Host "Ahora necesitas crear un repositorio en GitHub:" -ForegroundColor Cyan
Write-Host "   1. Ve a: https://github.com/new" -ForegroundColor White
Write-Host "   2. Nombre del repositorio: siempre-wifi" -ForegroundColor White
Write-Host "   3. NO marques 'Initialize with README'" -ForegroundColor White
Write-Host "   4. Click en 'Create repository'" -ForegroundColor White
Write-Host ""

$repoUrl = Read-Host "Pega aqui la URL de tu repositorio (ej: https://github.com/usuario/siempre-wifi.git)"

# Verificar si ya existe el remote origin
$remoteExists = git remote get-url origin 2>$null
if ($remoteExists) {
    Write-Host "Remote 'origin' ya existe. Actualizando..." -ForegroundColor Yellow
    git remote set-url origin $repoUrl
} else {
    git remote add origin $repoUrl
}

Write-Host "Repositorio remoto configurado" -ForegroundColor Green

Write-Host ""

# ============================================
# PASO 8: Cambiar a rama main
# ============================================
Write-Host "PASO 8: Configurando rama main..." -ForegroundColor Yellow

git branch -M main
Write-Host "Rama main configurada" -ForegroundColor Green

Write-Host ""

# ============================================
# PASO 9: Push a GitHub
# ============================================
Write-Host "PASO 9: Subiendo codigo a GitHub..." -ForegroundColor Yellow
Write-Host ""
Write-Host "IMPORTANTE: Si te pide autenticacion:" -ForegroundColor Yellow
Write-Host "   - Usuario: Tu nombre de usuario de GitHub" -ForegroundColor White
Write-Host "   - Contrasena: Usa un Personal Access Token (no tu contrasena)" -ForegroundColor White
Write-Host "   - Crealo en: https://github.com/settings/tokens" -ForegroundColor White
Write-Host ""

$confirm = Read-Host "Estas listo para hacer push? (s/n)"

if ($confirm -eq "s" -or $confirm -eq "S") {
    try {
        git push -u origin main
        Write-Host "Codigo subido exitosamente a GitHub!" -ForegroundColor Green
    } catch {
        Write-Host "Error al hacer push. Verifica tu autenticacion." -ForegroundColor Red
        Write-Host "   Puedes intentar manualmente con: git push -u origin main" -ForegroundColor Yellow
    }
} else {
    Write-Host "Push omitido. Puedes hacerlo manualmente con: git push -u origin main" -ForegroundColor Yellow
}

Write-Host ""

# ============================================
# PASO 10: Instrucciones finales
# ============================================
Write-Host "============================================" -ForegroundColor Cyan
Write-Host "CONFIGURACION COMPLETADA!" -ForegroundColor Green
Write-Host "============================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "PROXIMOS PASOS:" -ForegroundColor Yellow
Write-Host ""
Write-Host "1. Verifica que tu codigo este en GitHub:" -ForegroundColor White
Write-Host "   $repoUrl" -ForegroundColor Cyan
Write-Host ""
Write-Host "2. Despliega en Vercel:" -ForegroundColor White
Write-Host "   Ve a: https://vercel.com/new" -ForegroundColor Cyan
Write-Host "   Importa tu repositorio 'siempre-wifi'" -ForegroundColor Cyan
Write-Host "   Click en 'Deploy'" -ForegroundColor Cyan
Write-Host ""
Write-Host "3. Para futuros cambios, usa:" -ForegroundColor White
Write-Host "   git add ." -ForegroundColor Gray
Write-Host "   git commit -m 'Descripcion del cambio'" -ForegroundColor Gray
Write-Host "   git push" -ForegroundColor Gray
Write-Host ""
Write-Host "Documentacion completa en: DEPLOYMENT.md" -ForegroundColor Yellow
Write-Host ""
Write-Host "Tu proyecto esta listo para el mundo!" -ForegroundColor Green
Write-Host ""

# Abrir GitHub en el navegador
$openGitHub = Read-Host "Quieres abrir GitHub ahora? (s/n)"
if ($openGitHub -eq "s" -or $openGitHub -eq "S") {
    Start-Process $repoUrl
}

# Abrir Vercel en el navegador
$openVercel = Read-Host "Quieres abrir Vercel para desplegar? (s/n)"
if ($openVercel -eq "s" -or $openVercel -eq "S") {
    Start-Process "https://vercel.com/new"
}

Write-Host ""
Write-Host "Script completado. Exito en tu despliegue!" -ForegroundColor Green
