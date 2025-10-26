# 🔄 Guía Rápida: Restaurar Chatbot

**Estado actual:** Chatbot DESACTIVADO  
**Archivos:** Preservados y listos para restaurar  
**Tiempo estimado:** 30 segundos

---

## ⚡ Restauración en 2 Pasos

### Paso 1: Editar App.tsx

**Archivo:** `src/App.tsx`

**Línea 19 - Descomentar import:**
```typescript
// ANTES (desactivado)
// import Chatbot from './components/Chatbot'; // DESACTIVADO - Ver CHATBOT-BACKUP.md para restaurar

// DESPUÉS (activado)
import Chatbot from './components/Chatbot';
```

**Líneas 154-156 - Descomentar renderizado:**
```typescript
// ANTES (desactivado)
{/* Chatbot disponible en todas las páginas excepto StyleGuide */}
{/* CHATBOT DESACTIVADO - Descomentar la siguiente línea para reactivar */}
{/* {!showStyleGuide && <Chatbot />} */}

// DESPUÉS (activado)
{/* Chatbot disponible en todas las páginas excepto StyleGuide */}
{!showStyleGuide && <Chatbot />}
```

### Paso 2: Guardar y Recargar

1. Guardar `App.tsx` (Ctrl + S)
2. El servidor recargará automáticamente
3. ¡El chatbot aparecerá en la esquina inferior derecha!

---

## ✅ Verificación

Después de restaurar, verifica que:

- [ ] Botón naranja flotante visible (esquina inferior derecha)
- [ ] Badge rojo con "1" aparece
- [ ] Click abre la ventana de chat
- [ ] Mensaje de bienvenida se muestra
- [ ] Respuestas rápidas aparecen
- [ ] Input funciona correctamente

---

## 📁 Archivos del Chatbot

**Código fuente:**
- `src/components/Chatbot.tsx` ✅ Preservado
- `src/components/Chatbot.css` ✅ Preservado

**Documentación:**
- `CHATBOT-DOCUMENTATION.md` - Documentación completa (840 líneas)
- `CHATBOT-BACKUP.md` - Backup completo del código
- `CHATBOT-RESTAURAR.md` - Esta guía rápida

**Configuración:**
- `.env` - Contiene `VITE_GEMINI_API_KEY` ✅

---

## 🔧 Troubleshooting

### Problema: "Chatbot no aparece"

**Solución:**
1. Verificar que ambas líneas estén descomentadas
2. Verificar que no haya errores en consola
3. Reiniciar servidor: `Ctrl + C` y luego `npm run dev`

### Problema: "Error de API Key"

**Solución:**
1. Verificar que `.env` existe
2. Verificar que contiene `VITE_GEMINI_API_KEY=...`
3. Reiniciar servidor después de modificar `.env`

### Problema: "Módulo no encontrado"

**Solución:**
```bash
npm install @google/generative-ai
npm run dev
```

---

## 📚 Más Información

- **Documentación completa:** `CHATBOT-DOCUMENTATION.md`
- **Código completo:** `CHATBOT-BACKUP.md`
- **Gemini AI Docs:** https://ai.google.dev/docs

---

## 🎯 Resumen

**Para reactivar el chatbot:**
1. Descomentar línea 19 en `App.tsx`
2. Descomentar línea 156 en `App.tsx`
3. Guardar y recargar

**Tiempo:** 30 segundos  
**Dificultad:** Muy fácil  
**Reversible:** Sí (volver a comentar)

---

**Última actualización:** 26 de Octubre, 2025
