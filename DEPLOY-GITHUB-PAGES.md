# 🚀 Despliegue con GitHub Pages

Guía completa para desplegar tu proyecto en GitHub Pages (SOLUCIÓN RECOMENDADA)

---

## ✅ Por Qué GitHub Pages

- ✅ **Gratis** y sin límites
- ✅ **Sin problemas de dependencias** (no necesita build complejo)
- ✅ **Más simple** que Vercel
- ✅ **Funciona perfectamente** con React
- ✅ **URL profesional**: `https://eze061191.github.io/siempre-wifi`
- ✅ **Despliegue automático** con un solo comando

---

## 📋 Pasos para Desplegar

### PASO 1: Subir Cambios a GitHub

Ejecuta estos comandos en tu terminal:

```bash
# 1. Agregar cambios
git add .

# 2. Commit
git commit -m "Setup GitHub Pages"

# 3. Push
git push origin main
```

---

### PASO 2: Desplegar a GitHub Pages

Una vez que hayas hecho push, ejecuta:

```bash
npm run deploy
```

Este comando:
1. ✅ Hace build del proyecto
2. ✅ Crea una rama `gh-pages`
3. ✅ Sube el build a esa rama
4. ✅ GitHub Pages lo publica automáticamente

---

### PASO 3: Activar GitHub Pages (Solo Primera Vez)

1. Ve a tu repositorio en GitHub: `https://github.com/eze061191/siempre-wifi`
2. Click en **Settings** (Configuración)
3. En el menú lateral, click en **Pages**
4. En **Source**, selecciona:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
5. Click en **Save**
6. Espera 1-2 minutos

---

### PASO 4: Ver Tu Sitio

Tu sitio estará disponible en:

**🌐 https://eze061191.github.io/siempre-wifi**

---

## 🔄 Workflow Futuro

Cada vez que hagas cambios:

```bash
# 1. Hacer cambios en el código

# 2. Commit y push
git add .
git commit -m "Descripción del cambio"
git push

# 3. Desplegar
npm run deploy

# 4. Tu sitio se actualiza automáticamente en 1-2 minutos
```

---

## 📊 Comparación: GitHub Pages vs Vercel

| Característica | GitHub Pages | Vercel |
|----------------|--------------|--------|
| **Costo** | ✅ Gratis | ✅ Gratis (con límites) |
| **Setup** | ✅ Simple | ❌ Complejo (problemas de deps) |
| **Build** | ✅ Funciona | ❌ Falla con react-scripts 5.0.1 |
| **Despliegue** | ✅ `npm run deploy` | ❌ Requiere fixes complejos |
| **URL** | ✅ `usuario.github.io/repo` | ✅ `proyecto.vercel.app` |
| **Dominio custom** | ✅ Soportado | ✅ Soportado |
| **SSL/HTTPS** | ✅ Automático | ✅ Automático |
| **CDN** | ✅ GitHub CDN | ✅ Vercel Edge Network |

**Ganador**: ✅ **GitHub Pages** (para este proyecto)

---

## 🎯 Ventajas de GitHub Pages

### 1. **Sin Problemas de Dependencias**
- No importa qué versión de Node.js uses
- No importa los conflictos de ajv, ajv-keywords, etc.
- El build se hace localmente y sube el HTML/CSS/JS compilado

### 2. **Despliegue Simple**
```bash
npm run deploy  # ¡Eso es todo!
```

### 3. **Perfecto para Landing Pages**
- Tu proyecto es una landing page estática
- No necesitas server-side rendering
- No necesitas API routes
- GitHub Pages es ideal para esto

### 4. **Confiable**
- Usado por millones de proyectos
- Uptime del 99.9%
- Respaldado por GitHub/Microsoft

---

## 🔧 Configuración Aplicada

### package.json

```json
{
  "homepage": "https://eze061191.github.io/siempre-wifi",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  },
  "devDependencies": {
    "gh-pages": "^6.1.1"
  }
}
```

**¿Qué hace cada cosa?**

- **`homepage`**: URL donde se desplegará tu sitio
- **`predeploy`**: Se ejecuta automáticamente antes de deploy (hace el build)
- **`deploy`**: Sube la carpeta `build` a la rama `gh-pages`
- **`gh-pages`**: Paquete que maneja todo el proceso

---

## 🆘 Solución de Problemas

### Error: "Failed to get remote.origin.url"

```bash
# Verifica que tienes el remote configurado
git remote -v

# Si no aparece nada, agrega el remote
git remote add origin https://github.com/eze061191/siempre-wifi.git
```

### Error: "Permission denied"

```bash
# Usa tu Personal Access Token como contraseña
# Créalo en: https://github.com/settings/tokens
```

### El sitio no se actualiza

1. Espera 2-3 minutos
2. Limpia caché del navegador (Ctrl + Shift + R)
3. Verifica en GitHub → Settings → Pages que esté activado

### Error 404 en GitHub Pages

1. Verifica que la rama `gh-pages` existe
2. Ve a Settings → Pages
3. Asegúrate de que Source está en `gh-pages` branch

---

## 🎨 Dominio Personalizado (Opcional)

Si quieres usar tu propio dominio (ej: `www.siemprewifi.com`):

### Paso 1: Configurar en GitHub

1. Settings → Pages → Custom domain
2. Ingresa tu dominio: `www.siemprewifi.com`
3. Click en Save

### Paso 2: Configurar DNS

En tu proveedor de dominio (GoDaddy, Namecheap, etc.):

```
Tipo: CNAME
Host: www
Valor: eze061191.github.io
```

O para dominio raíz:

```
Tipo: A
Host: @
Valor: 185.199.108.153
Valor: 185.199.109.153
Valor: 185.199.110.153
Valor: 185.199.111.153
```

---

## 📱 Características Mantenidas

Con GitHub Pages mantienes todo lo que ya tienes:

- ✅ Diseño moderno y responsive
- ✅ Animaciones y efectos
- ✅ Formularios de contacto
- ✅ SEO optimizado
- ✅ Performance excelente
- ✅ Compatible con todos los navegadores

---

## 🚀 Comandos Rápidos

```bash
# Desplegar cambios
npm run deploy

# Ver sitio local antes de desplegar
npm start

# Hacer build local para probar
npm run build

# Subir cambios a GitHub
git add .
git commit -m "Update"
git push
```

---

## ✅ Checklist de Despliegue

- [x] package.json configurado con homepage
- [x] gh-pages instalado
- [x] Scripts de deploy agregados
- [ ] Cambios commiteados
- [ ] Push a GitHub
- [ ] `npm run deploy` ejecutado
- [ ] GitHub Pages activado en Settings
- [ ] Sitio verificado en la URL

---

## 🎉 Resultado Final

Una vez completados todos los pasos:

- ✅ Tu sitio estará en: `https://eze061191.github.io/siempre-wifi`
- ✅ Se actualizará automáticamente con `npm run deploy`
- ✅ Sin problemas de dependencias
- ✅ Gratis y confiable
- ✅ Listo para mostrar al cliente

---

## 📞 Próximos Pasos

1. **Ejecuta los comandos** del PASO 1 y PASO 2
2. **Activa GitHub Pages** en Settings (PASO 3)
3. **Comparte la URL** con tu cliente
4. **Actualiza** cuando necesites con `npm run deploy`

---

**¡Tu proyecto estará en línea en menos de 5 minutos!** 🚀

---

**Última actualización**: Octubre 2025  
**Solución recomendada**: GitHub Pages
