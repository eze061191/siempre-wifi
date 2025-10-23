# ⚡ Inicio Rápido - Despliegue en 5 Minutos

Guía ultra-rápida para desplegar Siempre WiFi en GitHub + Vercel.

---

## 🎯 Objetivo

Tener tu sitio en línea en **5 minutos** con despliegue automático.

---

## ✅ Pre-requisitos (2 minutos)

1. **Cuenta de GitHub**: https://github.com/signup
2. **Cuenta de Vercel**: https://vercel.com/signup (usa tu cuenta de GitHub)
3. **Git instalado**: Verifica con `git --version`

---

## 🚀 Opción 1: Script Automatizado (RECOMENDADO)

### Windows PowerShell

```powershell
# 1. Abre PowerShell en la carpeta del proyecto
cd c:\Users\Usuario\CascadeProjects\siempre-wifi

# 2. Ejecuta el script
.\deploy-setup.ps1

# 3. Sigue las instrucciones en pantalla
# El script te pedirá:
# - Tu nombre y email (si es primera vez)
# - La URL de tu repositorio de GitHub
# - Confirmación para hacer push

# 4. ¡Listo! El script abrirá GitHub y Vercel automáticamente
```

**Tiempo estimado**: 3 minutos

---

## 🚀 Opción 2: Manual (5 comandos)

### Paso 1: Crear repositorio en GitHub (1 minuto)

1. Ve a: https://github.com/new
2. Nombre: `siempre-wifi`
3. **NO marques** "Initialize with README"
4. Click "Create repository"
5. Copia la URL: `https://github.com/TU-USUARIO/siempre-wifi.git`

### Paso 2: Subir código (2 minutos)

```bash
# Abre terminal en la carpeta del proyecto
cd c:\Users\Usuario\CascadeProjects\siempre-wifi

# Ejecuta estos 5 comandos:
git init
git add .
git commit -m "🎉 Initial commit"
git remote add origin https://github.com/TU-USUARIO/siempre-wifi.git
git push -u origin main
```

⚠️ **Nota**: Reemplaza `TU-USUARIO` con tu usuario de GitHub

### Paso 3: Desplegar en Vercel (2 minutos)

1. Ve a: https://vercel.com/new
2. Click en "Import" junto a tu repositorio `siempre-wifi`
3. Click en "Deploy" (no cambies nada)
4. Espera ~2 minutos
5. ¡Listo! Tu sitio está en línea

**Tiempo estimado**: 5 minutos

---

## 🎉 ¡Completado!

Tu sitio ahora está:
- ✅ En GitHub: `https://github.com/TU-USUARIO/siempre-wifi`
- ✅ En línea: `https://siempre-wifi.vercel.app`
- ✅ Con despliegue automático activado

---

## 🔄 Próxima vez (30 segundos)

Para actualizar tu sitio después de hacer cambios:

```bash
git add .
git commit -m "✨ Descripción del cambio"
git push
```

Vercel desplegará automáticamente en ~2 minutos.

---

## 📚 Más Información

- **Guía completa**: [DEPLOYMENT.md](./DEPLOYMENT.md)
- **Comandos útiles**: [COMANDOS-RAPIDOS.md](./COMANDOS-RAPIDOS.md)
- **Seguridad**: [SECURITY.md](./SECURITY.md)

---

## 🆘 Problemas Comunes

### "Git no reconocido"
```bash
# Instala Git desde: https://git-scm.com
```

### "Authentication failed"
```bash
# Usa un Personal Access Token en lugar de contraseña
# Créalo en: https://github.com/settings/tokens
```

### "Build failed en Vercel"
```bash
# Verifica que npm run build funcione localmente
npm install
npm run build
```

---

## 💡 Tips

1. **Guarda tu Personal Access Token** en un lugar seguro
2. **Usa el script automatizado** si es tu primera vez
3. **Revisa los logs** en Vercel si algo falla
4. **Lee DEPLOYMENT.md** para entender el proceso completo

---

**¿Listo? ¡Vamos! 🚀**

Ejecuta el script o sigue los pasos manuales. En 5 minutos tendrás tu sitio en línea.
