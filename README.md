# 🌐 Siempre WiFi - Landing Page

Landing page moderna y optimizada para conversión (CRO) del servicio de internet móvil "Siempre WiFi".

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/TU-USUARIO/siempre-wifi)
[![CI/CD](https://github.com/TU-USUARIO/siempre-wifi/workflows/CI/CD%20Pipeline/badge.svg)](https://github.com/TU-USUARIO/siempre-wifi/actions)

**🌐 Demo en vivo**: [https://siempre-wifi.vercel.app](https://siempre-wifi.vercel.app)

> **📝 Nota:** El chatbot con IA está temporalmente desactivado. Para restaurarlo, consulta [CHATBOT-RESTAURAR.md](./CHATBOT-RESTAURAR.md)

---

## ⚛️ Proyecto React

Este proyecto ahora incluye una estructura React completa para desarrollo moderno de aplicaciones web.

### 🚀 Instalación y Ejecución

#### 1. Instalar Dependencias
```bash
npm install
```

#### 2. Iniciar el Servidor de Desarrollo
```bash
npm start
```
La aplicación se abrirá automáticamente en [http://localhost:3000](http://localhost:3000)

#### 3. Compilar para Producción
```bash
npm run build
```
Esto creará una carpeta `build` con los archivos optimizados para producción.

#### 4. Ejecutar Tests
```bash
npm test
```

### 📁 Estructura del Proyecto React

```
siempre-wifi/
│
├── public/                 # Archivos públicos estáticos
│   ├── index.html         # HTML principal de React
│   ├── manifest.json      # Configuración PWA
│   └── robots.txt         # SEO robots
│
├── src/                   # Código fuente React
│   ├── components/        # Componentes reutilizables
│   │   ├── ExampleComponent.js
│   │   └── ExampleComponent.css
│   ├── App.js            # Componente principal
│   ├── App.css           # Estilos del componente principal
│   ├── index.js          # Punto de entrada
│   ├── index.css         # Estilos globales
│   └── reportWebVitals.js # Métricas de rendimiento
│
├── package.json          # Dependencias y scripts
├── .gitignore           # Archivos ignorados por Git
│
├── index.html           # Landing page original (HTML estático)
├── styles.css           # Estilos de la landing original
└── script.js            # JavaScript de la landing original
```

### 🔧 Scripts Disponibles

- **`npm start`**: Inicia el servidor de desarrollo con hot-reload
- **`npm run build`**: Compila la aplicación para producción
- **`npm test`**: Ejecuta los tests en modo interactivo
- **`npm run eject`**: Expone la configuración de webpack (⚠️ irreversible)

### 📦 Dependencias Principales

- **React 18.2.0**: Biblioteca principal para construir interfaces
- **React DOM 18.2.0**: Renderizado de React en el navegador
- **React Scripts 5.0.1**: Herramientas de desarrollo y compilación
- **Web Vitals 3.5.0**: Métricas de rendimiento web

---

## 📄 Landing Page Original (HTML Estático)

## 🎨 Características de Diseño

### Paleta de Colores
- **Blanco**: `#FFFFFF`
- **Negro**: `#000000`
- **Naranja**: `#F78700` (Color principal de marca)

### Secciones Implementadas

1. **Hero Section**
   - Propuesta de valor clara y directa
   - CTAs duales (primario y secundario)
   - Estadísticas sociales (prueba social)
   - Tarjetas flotantes animadas

2. **Beneficios**
   - 6 beneficios clave con iconografía SVG
   - Diseño en grid responsive
   - Efectos hover atractivos

3. **Cómo Funciona**
   - 3 pasos simples visuales
   - Numeración clara
   - Flechas direccionales

4. **Planes**
   - 3 niveles de servicio
   - Plan destacado ("Más popular")
   - Comparación clara de características
   - CTAs por plan

5. **Testimonios**
   - 3 testimonios con avatares
   - Calificación de estrellas
   - Información del autor

6. **FAQ**
   - Acordeón interactivo
   - 5 preguntas frecuentes
   - Elimina objeciones comunes

7. **CTA Final**
   - Sección de conversión con fondo naranja
   - Múltiples opciones de contacto
   - Refuerzo de beneficios

8. **Footer**
   - Links organizados por categorías
   - Redes sociales
   - Información legal

## 🚀 Optimizaciones CRO Implementadas

### 1. **Copywriting Optimizado**
- Headlines directos y orientados a beneficios
- Uso de números específicos ($299/mes, 99.9% uptime)
- Eliminación de jerga técnica
- Llamados a la acción claros

### 2. **Prueba Social**
- "Más de 10,000 clientes conectados"
- Testimonios reales con nombres y roles
- Calificación 4.8★
- Badge de "Más popular" en plan Pro

### 3. **Reducción de Fricción**
- "Sin contratos, sin permanencia"
- "Activación en minutos"
- Proceso de 3 pasos simple
- Precios transparentes

### 4. **Urgencia y Escasez** (Listo para implementar)
- Espacio para agregar: "Oferta limitada"
- Contadores de disponibilidad
- Promociones temporales

### 5. **Jerarquía Visual**
- Plan "Pro" destacado (mejor conversión)
- CTAs naranjas prominentes
- Espaciado generoso
- Tipografía clara (Inter font)

## 📱 Características Técnicas

### Responsive Design
- Mobile-first approach
- Breakpoints: 480px, 768px, 1024px
- Menú hamburguesa en móvil
- Grid adaptativo

### Interactividad
- Scroll suave entre secciones
- Animaciones de entrada (Intersection Observer)
- Efecto parallax en tarjetas flotantes
- Acordeón FAQ
- Efecto ripple en botones
- Contador animado en estadísticas

### Performance
- CSS optimizado con variables
- JavaScript vanilla (sin dependencias)
- Lazy loading preparado para imágenes
- Animaciones con GPU (transform/opacity)

### Accesibilidad
- Semántica HTML5
- ARIA labels en iconos sociales
- Contraste de colores WCAG AA
- Navegación por teclado

## 🛠️ Instalación y Uso

### Opción 1: Abrir Directamente
1. Navega a la carpeta del proyecto
2. Abre `index.html` en tu navegador

### Opción 2: Servidor Local (Recomendado)
```bash
# Con Python 3
python -m http.server 8000

# Con Node.js (npx)
npx serve

# Con PHP
php -S localhost:8000
```

Luego abre: `http://localhost:8000`

## 📂 Estructura de Archivos

```
siempre-wifi/
│
├── index.html          # Estructura HTML
├── styles.css          # Estilos CSS
├── script.js           # Interactividad JavaScript
└── README.md           # Documentación
```

## 🚀 Despliegue

### Despliegue Rápido

#### Opción 1: Script Automatizado (Windows)

```powershell
# Ejecuta el script de configuración
.\deploy-setup.ps1
```

Este script te guiará paso a paso para:
- ✅ Configurar Git
- ✅ Crear commit inicial
- ✅ Conectar con GitHub
- ✅ Subir el código

#### Opción 2: Manual

```bash
# 1. Inicializar Git
git init

# 2. Agregar archivos
git add .

# 3. Commit inicial
git commit -m "🎉 Initial commit"

# 4. Conectar con GitHub
git remote add origin https://github.com/TU-USUARIO/siempre-wifi.git

# 5. Push a GitHub
git branch -M main
git push -u origin main
```

### Desplegar en Vercel

1. Ve a [vercel.com/new](https://vercel.com/new)
2. Importa tu repositorio `siempre-wifi`
3. Vercel detectará automáticamente Create React App
4. Click en **Deploy**
5. ¡Listo! Tu sitio estará en línea en ~2 minutos

📖 **Guía completa**: Ver [DEPLOYMENT.md](./DEPLOYMENT.md)

---

## 🎯 Próximos Pasos Sugeridos

### Contenido
- [ ] Agregar imágenes reales de productos/servicios
- [ ] Incluir logos de medios/certificaciones
- [ ] Fotos reales del equipo
- [ ] Videos demostrativos

### Funcionalidad
- [ ] Integrar formulario de contacto
- [ ] Conectar con CRM/Email marketing
- [ ] Implementar chat en vivo
- [ ] Sistema de checkout para planes

### Marketing
- [ ] Integrar Google Analytics
- [ ] Pixel de Facebook/Meta
- [ ] Heatmaps (Hotjar/Clarity)
- [ ] A/B testing de headlines

### SEO
- [ ] Meta tags Open Graph
- [ ] Schema markup (JSON-LD)
- [ ] Sitemap.xml
- [ ] Optimización de imágenes

## 🎨 Personalización

### Cambiar Colores
Edita las variables CSS en `styles.css`:
```css
:root {
    --color-orange: #F78700;  /* Tu color principal */
    --color-orange-light: #FF9D1F;
    --color-orange-dark: #D67300;
}
```

### Modificar Textos
Todos los textos están en `index.html` y son fácilmente editables.

### Ajustar Animaciones
Las animaciones están en `script.js` y pueden desactivarse o modificarse.

## 📊 Métricas Clave a Monitorear

1. **Tasa de Conversión**: % de visitantes que contratan
2. **Bounce Rate**: % que abandonan sin interactuar
3. **Tiempo en Página**: Engagement del usuario
4. **Scroll Depth**: Hasta dónde llegan los usuarios
5. **Clicks en CTAs**: Qué botones funcionan mejor

## 🔧 Tecnologías Utilizadas

- HTML5 semántico
- CSS3 (Grid, Flexbox, Variables, Animations)
- JavaScript ES6+ (Vanilla)
- Google Fonts (Inter)
- SVG Icons

## 📞 Soporte

Para dudas o mejoras, contacta al equipo de desarrollo.

---

**Versión**: 1.0.0  
**Última actualización**: Octubre 2025  
**Desarrollado con**: ❤️ y ☕ para Siempre WiFi
