# 🚀 Guía de Despliegue - Siempre WiFi

Esta guía te llevará paso a paso para desplegar tu proyecto en GitHub y Vercel.

---

## 📋 Pre-requisitos

Antes de comenzar, asegúrate de tener:

- ✅ Git instalado en tu computadora
- ✅ Cuenta de GitHub (https://github.com)
- ✅ Cuenta de Vercel (https://vercel.com) - puedes usar tu cuenta de GitHub
- ✅ Node.js instalado (v18 o superior)

---

## 🔧 PASO 1: Configurar Git Localmente

### 1.1 Inicializar Git (si no está inicializado)

Abre tu terminal en la carpeta del proyecto y ejecuta:

```bash
cd c:\Users\Usuario\CascadeProjects\siempre-wifi
git init
```

### 1.2 Configurar tu identidad Git (si es primera vez)

```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tu-email@ejemplo.com"
```

### 1.3 Agregar todos los archivos al staging

```bash
git add .
```

### 1.4 Hacer el primer commit

```bash
git commit -m "🎉 Initial commit: Siempre WiFi landing page"
```

---

## 📦 PASO 2: Crear Repositorio en GitHub

### Opción A: Desde la Web (Recomendado para principiantes)

1. Ve a https://github.com/new
2. Rellena los datos:
   - **Repository name**: `siempre-wifi`
   - **Description**: `Landing page moderna para Siempre WiFi - Internet móvil sin contratos`
   - **Visibility**: Elige `Public` o `Private`
   - ⚠️ **NO marques** "Initialize with README" (ya tienes uno)
3. Click en **"Create repository"**
4. Copia la URL que aparece (algo como: `https://github.com/tu-usuario/siempre-wifi.git`)

### Opción B: Desde la Terminal (con GitHub CLI)

Si tienes GitHub CLI instalado:

```bash
gh repo create siempre-wifi --public --source=. --remote=origin --push
```

---

## 🔗 PASO 3: Conectar y Subir a GitHub

### 3.1 Conectar tu repositorio local con GitHub

```bash
git remote add origin https://github.com/TU-USUARIO/siempre-wifi.git
```

⚠️ **Reemplaza `TU-USUARIO`** con tu nombre de usuario de GitHub

### 3.2 Verificar la conexión

```bash
git remote -v
```

Deberías ver algo como:
```
origin  https://github.com/TU-USUARIO/siempre-wifi.git (fetch)
origin  https://github.com/TU-USUARIO/siempre-wifi.git (push)
```

### 3.3 Cambiar a la rama main (si estás en master)

```bash
git branch -M main
```

### 3.4 Subir tu código a GitHub

```bash
git push -u origin main
```

Si te pide autenticación:
- **Usuario**: Tu nombre de usuario de GitHub
- **Contraseña**: Usa un **Personal Access Token** (no tu contraseña)
  - Créalo en: https://github.com/settings/tokens
  - Permisos necesarios: `repo` (acceso completo)

---

## ☁️ PASO 4: Desplegar en Vercel

### 4.1 Crear cuenta en Vercel

1. Ve a https://vercel.com/signup
2. Click en **"Continue with GitHub"**
3. Autoriza a Vercel para acceder a tus repositorios

### 4.2 Importar tu proyecto

1. En el dashboard de Vercel, click en **"Add New..."** → **"Project"**
2. Busca y selecciona el repositorio `siempre-wifi`
3. Click en **"Import"**

### 4.3 Configurar el proyecto

Vercel detectará automáticamente que es un proyecto Create React App:

- **Framework Preset**: `Create React App`
- **Root Directory**: `./` (dejar por defecto)
- **Build Command**: `npm run build` (automático)
- **Output Directory**: `build` (automático)

### 4.4 Variables de Entorno (Opcional)

Si necesitas variables de entorno:

1. Click en **"Environment Variables"**
2. Agrega las variables necesarias:
   - `REACT_APP_SITE_NAME` = `Siempre WiFi`
   - `REACT_APP_SITE_URL` = `https://tu-dominio.vercel.app`
   - Otras según tu `.env.example`

### 4.5 Desplegar

1. Click en **"Deploy"**
2. Espera 2-3 minutos mientras Vercel:
   - Clona tu repositorio
   - Instala dependencias
   - Construye el proyecto
   - Despliega a producción

### 4.6 ¡Listo! 🎉

Una vez completado, verás:
- ✅ URL de producción: `https://siempre-wifi.vercel.app`
- ✅ Preview URLs para cada commit
- ✅ Despliegue automático activado

---

## 🔄 PASO 5: Workflow de Desarrollo Continuo

### Hacer cambios y actualizar

Cada vez que hagas cambios:

```bash
# 1. Ver archivos modificados
git status

# 2. Agregar cambios
git add .

# 3. Hacer commit con mensaje descriptivo
git commit -m "✨ Descripción del cambio"

# 4. Subir a GitHub
git push

# 5. Vercel desplegará automáticamente en ~2 minutos
```

### Mensajes de commit recomendados

```bash
git commit -m "✨ feat: Nueva funcionalidad"
git commit -m "🐛 fix: Corrección de bug"
git commit -m "💄 style: Cambios de diseño"
git commit -m "📝 docs: Actualización de documentación"
git commit -m "♻️ refactor: Refactorización de código"
git commit -m "⚡️ perf: Mejora de rendimiento"
```

---

## 🔒 PASO 6: Seguridad y Mejores Prácticas

### 6.1 Variables de Entorno Sensibles

⚠️ **NUNCA subas a GitHub:**
- API Keys privadas
- Tokens de acceso
- Contraseñas
- Secretos de aplicación

✅ **Usa siempre:**
- Archivo `.env` (ya está en `.gitignore`)
- Variables de entorno en Vercel
- `.env.example` para documentar variables necesarias

### 6.2 Proteger tu repositorio

```bash
# Verificar que .env está ignorado
git check-ignore .env

# Si devuelve ".env", está protegido ✅
```

### 6.3 Revisar antes de hacer push

```bash
# Ver qué archivos se subirán
git diff --staged

# Ver historial de commits
git log --oneline
```

---

## 🌐 PASO 7: Configurar Dominio Personalizado (Opcional)

### En Vercel:

1. Ve a tu proyecto en Vercel
2. Click en **"Settings"** → **"Domains"**
3. Agrega tu dominio: `siemprewifi.com`
4. Sigue las instrucciones para configurar DNS:
   - Tipo: `A Record`
   - Valor: IP de Vercel (te la proporcionan)
   - O usa `CNAME` apuntando a `cname.vercel-dns.com`

---

## 📊 PASO 8: Monitoreo y Analytics

### 8.1 Vercel Analytics

1. En tu proyecto de Vercel
2. Click en **"Analytics"**
3. Activa **"Enable Analytics"**
4. Gratis hasta 100k pageviews/mes

### 8.2 GitHub Actions (CI/CD)

Ya configurado en `.github/workflows/ci.yml`:
- ✅ Tests automáticos en cada push
- ✅ Build verification
- ✅ Lighthouse performance checks

---

## 🆘 Solución de Problemas Comunes

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

### Build falla en Vercel

1. Verifica que `npm run build` funcione localmente
2. Revisa los logs en Vercel Dashboard
3. Asegúrate de que todas las dependencias estén en `package.json`

### Cambios no se reflejan en Vercel

1. Verifica que el push a GitHub fue exitoso
2. Revisa el tab "Deployments" en Vercel
3. Espera 2-3 minutos para el despliegue completo

---

## 📞 Comandos Rápidos de Referencia

### Git Básico

```bash
git status                    # Ver estado actual
git add .                     # Agregar todos los cambios
git commit -m "mensaje"       # Hacer commit
git push                      # Subir cambios
git pull                      # Descargar cambios
git log --oneline             # Ver historial
```

### Vercel CLI (Opcional)

```bash
# Instalar Vercel CLI
npm i -g vercel

# Login
vercel login

# Desplegar desde terminal
vercel

# Desplegar a producción
vercel --prod
```

---

## ✅ Checklist Final

Antes de considerar el despliegue completo:

- [ ] Código subido a GitHub
- [ ] Proyecto desplegado en Vercel
- [ ] URL de producción funcionando
- [ ] Variables de entorno configuradas
- [ ] Dominio personalizado (opcional)
- [ ] Analytics activado
- [ ] CI/CD funcionando
- [ ] README actualizado con URL de producción

---

## 🎉 ¡Felicidades!

Tu proyecto está ahora:
- ✅ Versionado en GitHub
- ✅ Desplegado en Vercel
- ✅ Con despliegue automático
- ✅ Con CI/CD configurado
- ✅ Listo para recibir tráfico

**URL de Producción**: `https://siempre-wifi.vercel.app`

---

## 📚 Recursos Adicionales

- [Documentación de Vercel](https://vercel.com/docs)
- [GitHub Docs](https://docs.github.com)
- [Create React App Deployment](https://create-react-app.dev/docs/deployment/)
- [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)

---

**Última actualización**: Octubre 2025  
**Mantenido por**: Equipo Siempre WiFi
