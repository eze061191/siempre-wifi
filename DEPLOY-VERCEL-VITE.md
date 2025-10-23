# 🚀 Despliegue en Vercel con Vite

Guía completa para desplegar tu proyecto React + Vite en Vercel.

---

## ✅ Proyecto Listo

Tu proyecto ha sido migrado exitosamente de Create React App a Vite y está listo para desplegarse en Vercel.

### Cambios Realizados:

1. ✅ **Migrado a Vite** - Framework moderno y rápido
2. ✅ **Build funcionando** - Sin errores de dependencias
3. ✅ **Imágenes corregidas** - Se cargan correctamente
4. ✅ **vercel.json actualizado** - Configuración para Vite
5. ✅ **TypeScript configurado** - Compatible con Vite

---

## 📋 Pasos para Desplegar en Vercel

### PASO 1: Subir Cambios a GitHub

```bash
git add .
git commit -m "Migrate to Vite and prepare for Vercel deployment"
git push origin main
```

### PASO 2: Conectar con Vercel

1. **Ve a**: https://vercel.com/new
2. **Inicia sesión** con tu cuenta de GitHub
3. **Importa** tu repositorio: `eze061191/siempre-wifi`
4. Click en **"Import"**

### PASO 3: Configurar el Proyecto

Vercel detectará automáticamente que es un proyecto Vite. Verifica la configuración:

- **Framework Preset**: `Vite` ✅ (detectado automáticamente)
- **Build Command**: `npm run build` ✅
- **Output Directory**: `dist` ✅
- **Install Command**: `npm install` ✅

**No necesitas cambiar nada**, Vercel lo configurará automáticamente.

### PASO 4: Deploy

1. Click en **"Deploy"**
2. Espera 1-2 minutos
3. ¡Listo! Tu sitio estará en línea

---

## 🌐 URL de Tu Sitio

Vercel te dará una URL como:
- **https://siempre-wifi.vercel.app**
- O **https://siempre-wifi-[hash].vercel.app**

---

## 📊 Configuración Aplicada

### vercel.json

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### vite.config.ts

```typescript
export default defineConfig(({ command }) => {
  const base = command === 'serve' ? '/' : '/siempre-wifi/'
  
  return {
    plugins: [react()],
    base: base,
    publicDir: 'public',
    build: {
      outDir: 'dist',
      sourcemap: false,
      assetsDir: 'assets',
    },
  }
})
```

**Nota**: El `base` cambia automáticamente:
- **Desarrollo**: `/` (para localhost)
- **Producción**: `/siempre-wifi/` (para GitHub Pages)

---

## 🔄 Actualizaciones Futuras

Cada vez que hagas cambios:

```bash
# 1. Commit y push
git add .
git commit -m "Descripción del cambio"
git push origin main

# 2. Vercel despliega automáticamente en ~30 segundos
```

---

## ✨ Ventajas de Vite + Vercel

### Vite:
- ⚡ Build ultra rápido (~2 segundos)
- 🔥 Hot reload instantáneo
- ✅ Sin problemas de dependencias
- 📦 Bundle optimizado

### Vercel:
- 🚀 Despliegue automático
- 🌍 CDN global
- 📊 Analytics incluido
- 🔒 SSL automático
- ⚡ Edge Network

---

## 🎯 Comandos Útiles

```bash
# Desarrollo local
npm run dev

# Build de producción
npm run build

# Preview del build
npm run preview

# Deploy a GitHub Pages
npm run deploy

# Verificar tipos TypeScript
npm run build:check
```

---

## 🆘 Solución de Problemas

### Error: "Build failed"

Si Vercel falla al hacer build:

1. Ve a **Settings** → **General**
2. Verifica:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
3. **Save** y **Redeploy**

### Imágenes no se ven

Las imágenes están en `public/images/` y se sirven automáticamente:
- `conectividad-global.jpg`
- `hero-amigos-wifi.jpg`

Si no se ven, verifica que el `base` en `vite.config.ts` esté correcto.

### Error 404 en rutas

El archivo `vercel.json` tiene configurado `rewrites` para que todas las rutas apunten a `index.html` (SPA routing).

---

## 📱 Dominio Personalizado

Para usar tu propio dominio:

1. Ve a **Settings** → **Domains**
2. Click en **Add Domain**
3. Ingresa tu dominio (ej: `www.siemprewifi.com`)
4. Sigue las instrucciones de DNS
5. Vercel configurará SSL automáticamente

---

## 🎨 Configuración Avanzada (Opcional)

### Variables de Entorno

Si necesitas variables de entorno:

1. Ve a **Settings** → **Environment Variables**
2. Agrega tus variables
3. Prefijo `VITE_` para variables públicas
4. Ejemplo: `VITE_API_URL=https://api.example.com`

### Headers de Seguridad

Agrega en `vercel.json`:

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        }
      ]
    }
  ]
}
```

---

## 📊 Comparación: Antes vs Después

### Antes (Create React App)
- ❌ Build: 2-3 minutos
- ❌ Errores de dependencias (ajv, ajv-keywords)
- ❌ 1330 paquetes instalados
- ❌ Dev server lento

### Después (Vite)
- ✅ Build: 2 segundos
- ✅ Sin errores de dependencias
- ✅ 119 paquetes instalados
- ✅ Dev server instantáneo

---

## ✅ Checklist de Despliegue

- [x] Proyecto migrado a Vite
- [x] Build local exitoso
- [x] Imágenes funcionando
- [x] vercel.json configurado
- [ ] Cambios commiteados
- [ ] Push a GitHub
- [ ] Proyecto importado en Vercel
- [ ] Deploy exitoso
- [ ] Sitio verificado

---

## 🎉 Resultado Final

Una vez completados todos los pasos:

- ✅ Tu sitio estará en Vercel
- ✅ Despliegue automático activado
- ✅ Build ultra rápido
- ✅ Sin problemas de dependencias
- ✅ Listo para mostrar al cliente

---

## 📞 Próximos Pasos

1. **Ejecuta** los comandos del PASO 1
2. **Ve a Vercel** y sigue los pasos 2-4
3. **Comparte** la URL con tu cliente
4. **Disfruta** de los despliegues automáticos

---

**¡Tu proyecto está listo para producción!** 🚀

---

**Última actualización**: Octubre 2025  
**Framework**: Vite 5.4.21 + React 18.2.0  
**Plataforma**: Vercel
