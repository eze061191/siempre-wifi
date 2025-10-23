# ⚡ Comandos Rápidos - Siempre WiFi

Guía de referencia rápida para comandos comunes.

---

## 🚀 Despliegue Inicial (Solo una vez)

### Windows PowerShell
```powershell
# Ejecutar script automatizado
.\deploy-setup.ps1
```

### Manual
```bash
git init
git add .
git commit -m "🎉 Initial commit"
git remote add origin https://github.com/TU-USUARIO/siempre-wifi.git
git branch -M main
git push -u origin main
```

---

## 🔄 Workflow Diario

### Hacer cambios y actualizar

```bash
# 1. Ver estado
git status

# 2. Agregar cambios
git add .

# 3. Commit
git commit -m "✨ Descripción del cambio"

# 4. Push a GitHub (Vercel desplegará automáticamente)
git push
```

### Un solo comando (después del primer push)
```bash
git add . && git commit -m "✨ Actualización" && git push
```

---

## 📝 Tipos de Commits

```bash
# Nueva funcionalidad
git commit -m "✨ feat: Agregar sección de testimonios"

# Corrección de bug
git commit -m "🐛 fix: Corregir responsive en móvil"

# Cambios de diseño/estilos
git commit -m "💄 style: Actualizar colores del hero"

# Documentación
git commit -m "📝 docs: Actualizar README"

# Refactorización
git commit -m "♻️ refactor: Optimizar componente Hero"

# Mejora de rendimiento
git commit -m "⚡️ perf: Optimizar imágenes"

# Configuración
git commit -m "🔧 chore: Actualizar dependencias"
```

---

## 🌿 Manejo de Ramas

```bash
# Crear nueva rama
git checkout -b feature/nueva-funcionalidad

# Cambiar de rama
git checkout main

# Ver ramas
git branch

# Fusionar rama
git checkout main
git merge feature/nueva-funcionalidad

# Eliminar rama
git branch -d feature/nueva-funcionalidad
```

---

## 🔍 Inspección

```bash
# Ver historial
git log --oneline

# Ver cambios no guardados
git diff

# Ver cambios en staging
git diff --staged

# Ver archivos modificados
git status
```

---

## ↩️ Deshacer Cambios

```bash
# Deshacer cambios en archivo (antes de add)
git checkout -- archivo.js

# Quitar archivo del staging
git reset HEAD archivo.js

# Deshacer último commit (mantener cambios)
git reset --soft HEAD~1

# Deshacer último commit (eliminar cambios)
git reset --hard HEAD~1

# Revertir commit específico
git revert <commit-hash>
```

---

## 🔄 Sincronización

```bash
# Descargar cambios de GitHub
git pull

# Descargar sin fusionar
git fetch

# Ver remotes configurados
git remote -v

# Cambiar URL del remote
git remote set-url origin https://github.com/NUEVO-USUARIO/siempre-wifi.git
```

---

## 🏷️ Tags y Versiones

```bash
# Crear tag
git tag -a v1.0.0 -m "Versión 1.0.0"

# Push de tags
git push --tags

# Ver tags
git tag

# Eliminar tag
git tag -d v1.0.0
git push origin :refs/tags/v1.0.0
```

---

## 🛠️ Desarrollo Local

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm start

# Build para producción
npm run build

# Ejecutar tests
npm test

# Ver dependencias desactualizadas
npm outdated

# Actualizar dependencias
npm update
```

---

## 🌐 Vercel CLI (Opcional)

```bash
# Instalar Vercel CLI
npm i -g vercel

# Login
vercel login

# Desplegar (preview)
vercel

# Desplegar a producción
vercel --prod

# Ver logs
vercel logs

# Ver dominios
vercel domains ls

# Ver variables de entorno
vercel env ls
```

---

## 🔒 Seguridad

```bash
# Verificar que .env está ignorado
git check-ignore .env

# Ver archivos que se subirán
git diff --staged --name-only

# Buscar archivos grandes
git ls-files | xargs ls -lh | sort -k5 -hr | head -10

# Limpiar caché de Git
git rm -r --cached .
git add .
git commit -m "🔒 Limpiar caché"
```

---

## 🆘 Solución de Problemas

### Error: "remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/TU-USUARIO/siempre-wifi.git
```

### Error: "failed to push some refs"
```bash
git pull origin main --rebase
git push origin main
```

### Conflictos de merge
```bash
# Ver archivos en conflicto
git status

# Después de resolver manualmente
git add .
git commit -m "🔀 Resolver conflictos"
git push
```

### Olvidé hacer pull antes de push
```bash
git pull --rebase
git push
```

### Quiero empezar de cero
```bash
# ⚠️ CUIDADO: Esto eliminará todos los cambios no guardados
git reset --hard origin/main
git clean -fd
```

---

## 📊 Estadísticas

```bash
# Ver contribuciones por autor
git shortlog -sn

# Ver cambios en el último mes
git log --since="1 month ago" --oneline

# Ver archivos más modificados
git log --pretty=format: --name-only | sort | uniq -c | sort -rg | head -10

# Tamaño del repositorio
git count-objects -vH
```

---

## 🎯 Atajos Útiles

### Alias de Git (configurar una vez)

```bash
# Configurar aliases
git config --global alias.st status
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.unstage 'reset HEAD --'
git config --global alias.last 'log -1 HEAD'
git config --global alias.visual 'log --oneline --graph --all'

# Usar aliases
git st          # = git status
git co main     # = git checkout main
git ci -m "msg" # = git commit -m "msg"
git visual      # = git log --oneline --graph --all
```

---

## 📱 Comandos PowerShell Útiles

```powershell
# Ver estructura de carpetas
tree /F

# Buscar archivos
Get-ChildItem -Recurse -Filter "*.js"

# Ver tamaño de carpeta
Get-ChildItem -Recurse | Measure-Object -Property Length -Sum

# Abrir en VS Code
code .

# Abrir en navegador
start http://localhost:3000
```

---

## 🔗 Enlaces Rápidos

- **GitHub Repo**: `https://github.com/TU-USUARIO/siempre-wifi`
- **Vercel Dashboard**: `https://vercel.com/dashboard`
- **Vercel Logs**: `https://vercel.com/TU-USUARIO/siempre-wifi/logs`
- **GitHub Actions**: `https://github.com/TU-USUARIO/siempre-wifi/actions`

---

## 📞 Ayuda

```bash
# Ayuda de Git
git help

# Ayuda de comando específico
git help commit

# Versión de Git
git --version

# Configuración actual
git config --list
```

---

**💡 Tip**: Guarda este archivo como referencia rápida. Puedes imprimirlo o tenerlo abierto mientras trabajas.

**📚 Documentación completa**: Ver [DEPLOYMENT.md](./DEPLOYMENT.md)
