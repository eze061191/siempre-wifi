# 🚀 Despliegue en Vercel - Sitio Estático

Guía para desplegar tu proyecto en Vercel usando HTML estático.

---

## ✅ Configuración Aplicada

He configurado tu proyecto para que Vercel despliegue el HTML estático directamente, **sin necesidad de compilar React**.

### Archivos Creados:

1. **`vercel.json`** - Configuración para servir archivos estáticos
2. **`.vercelignore`** - Excluye archivos innecesarios del despliegue

---

## 🎯 Pasos para Desplegar en Vercel

### PASO 1: Subir Cambios a GitHub

```bash
git add .
git commit -m "Configure Vercel for static deployment"
git push origin main
```

### PASO 2: Conectar con Vercel

1. Ve a: **https://vercel.com/new**
2. Click en **"Import Git Repository"**
3. Selecciona tu repositorio: **`eze061191/siempre-wifi`**
4. Click en **"Import"**

### PASO 3: Configurar el Proyecto

En la pantalla de configuración:

- **Framework Preset**: `Other` (o déjalo en blanco)
- **Root Directory**: `./` (raíz del proyecto)
- **Build Command**: Déjalo **VACÍO** o pon `echo "Static site"`
- **Output Directory**: Déjalo **VACÍO** o pon `./`
- **Install Command**: Déjalo **VACÍO**

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

## 📋 Configuración de vercel.json

```json
{
  "version": 2,
  "builds": [
    {
      "src": "index.html",
      "use": "@vercel/static"
    },
    {
      "src": "styles.css",
      "use": "@vercel/static"
    },
    {
      "src": "script.js",
      "use": "@vercel/static"
    },
    {
      "src": "public/**",
      "use": "@vercel/static"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/$1"
    }
  ]
}
```

**¿Qué hace?**
- Usa `@vercel/static` para servir archivos sin compilar
- Configura rutas para que todos los archivos sean accesibles
- No requiere build de Node.js ni npm

---

## 🔄 Actualizaciones Futuras

Cada vez que hagas cambios:

```bash
# 1. Commit y push
git add .
git commit -m "Descripción del cambio"
git push origin main

# 2. Vercel despliega automáticamente
```

Vercel detecta los cambios en GitHub y redespliega automáticamente en ~30 segundos.

---

## ✨ Ventajas de Esta Configuración

1. ✅ **Sin problemas de build** - No compila React
2. ✅ **Despliegue rápido** - Solo sube archivos estáticos
3. ✅ **Sin errores de dependencias** - No usa npm install
4. ✅ **Funciona perfectamente** - Tu HTML ya está listo
5. ✅ **Despliegue automático** - Cada push actualiza el sitio

---

## 🆘 Solución de Problemas

### Error: "Build failed"

Si Vercel intenta compilar:
1. Ve a **Settings** → **General**
2. **Build Command**: Déjalo vacío o pon `echo "Static"`
3. **Output Directory**: Déjalo vacío o pon `./`
4. **Install Command**: Déjalo vacío
5. Click en **Save**
6. Ve a **Deployments** → **Redeploy**

### Error: "No index.html found"

Verifica que `index.html` esté en la raíz del proyecto (no dentro de `src/`).

### Sitio no se ve bien

1. Verifica que `styles.css` y `script.js` estén en la raíz
2. Verifica que la carpeta `public/` tenga las imágenes
3. Revisa la consola del navegador para errores

---

## 🎨 Dominio Personalizado (Opcional)

Para usar tu propio dominio:

1. Ve a **Settings** → **Domains**
2. Click en **Add Domain**
3. Ingresa tu dominio (ej: `www.siemprewifi.com`)
4. Sigue las instrucciones de DNS
5. Vercel configurará SSL automáticamente

---

## 📊 Comparación: Vercel vs GitHub Pages

| Característica | Vercel (Estático) | GitHub Pages |
|----------------|-------------------|--------------|
| **Setup** | ✅ Simple | ✅ Simple |
| **Build** | ✅ No requiere | ✅ No requiere |
| **Despliegue** | ✅ Automático | ✅ Manual (`npm run deploy`) |
| **Velocidad** | ✅ ~30 segundos | ✅ ~1-2 minutos |
| **CDN** | ✅ Edge Network | ✅ GitHub CDN |
| **Analytics** | ✅ Incluido | ❌ No incluido |
| **Dominio custom** | ✅ Fácil | ✅ Fácil |

**Ambas opciones son excelentes para tu proyecto.**

---

## 🎯 Archivos Importantes

- **`vercel.json`** - Configuración de Vercel
- **`.vercelignore`** - Archivos a ignorar
- **`index.html`** - Página principal
- **`styles.css`** - Estilos
- **`script.js`** - JavaScript
- **`public/`** - Imágenes y assets

---

## ✅ Checklist de Despliegue

- [x] vercel.json creado
- [x] .vercelignore creado
- [ ] Cambios commiteados
- [ ] Push a GitHub
- [ ] Proyecto importado en Vercel
- [ ] Configuración ajustada (sin build)
- [ ] Deploy exitoso
- [ ] Sitio verificado

---

## 🚀 Comandos Rápidos

```bash
# Subir cambios y desplegar
git add .
git commit -m "Update site"
git push origin main
# Vercel despliega automáticamente
```

---

## 📞 Próximos Pasos

1. **Ejecuta** los comandos del PASO 1
2. **Ve a Vercel** y sigue los pasos 2-4
3. **Verifica** tu sitio en la URL de Vercel
4. **Comparte** la URL con tu cliente

---

**¡Tu sitio estará en línea en menos de 5 minutos!** 🎉

---

**Última actualización**: Octubre 2025  
**Método**: Despliegue estático sin build
