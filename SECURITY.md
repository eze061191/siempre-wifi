# 🔒 Guía de Seguridad - Siempre WiFi

Mejores prácticas de seguridad para el proyecto.

---

## ⚠️ NUNCA Subir a GitHub

### ❌ Información Sensible

```bash
# NUNCA subas estos archivos:
.env                    # Variables de entorno
.env.local             # Variables locales
.env.production        # Variables de producción
*.key                  # Archivos de claves
*.pem                  # Certificados
*.p12                  # Certificados
config/secrets.js      # Archivos de configuración con secretos
```

### ❌ API Keys y Tokens

```javascript
// ❌ MAL - Hardcoded
const API_KEY = "sk_live_abc123xyz789";

// ✅ BIEN - Usar variables de entorno
const API_KEY = process.env.REACT_APP_API_KEY;
```

### ❌ Credenciales

```javascript
// ❌ MAL
const DB_PASSWORD = "miPassword123";
const ADMIN_EMAIL = "admin@siemprewifi.com";

// ✅ BIEN
const DB_PASSWORD = process.env.DB_PASSWORD;
const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
```

---

## ✅ Variables de Entorno

### Configuración Local

1. **Crear archivo `.env` en la raíz** (ya está en `.gitignore`)

```bash
# .env (NO subir a GitHub)
REACT_APP_API_URL=https://api.siemprewifi.com
REACT_APP_GA_ID=UA-XXXXXXXXX-X
REACT_APP_STRIPE_KEY=pk_live_xxxxx
```

2. **Usar en el código**

```javascript
// src/config.js
export const config = {
  apiUrl: process.env.REACT_APP_API_URL,
  gaId: process.env.REACT_APP_GA_ID,
  stripeKey: process.env.REACT_APP_STRIPE_KEY
};
```

### Configuración en Vercel

1. Ve a tu proyecto en Vercel
2. **Settings** → **Environment Variables**
3. Agrega cada variable:
   - **Name**: `REACT_APP_API_URL`
   - **Value**: `https://api.siemprewifi.com`
   - **Environment**: Production, Preview, Development

---

## 🛡️ Protección del Repositorio

### Verificar antes de commit

```bash
# Ver qué archivos se subirán
git diff --staged

# Verificar que .env está ignorado
git check-ignore .env

# Si devuelve ".env", está protegido ✅
```

### Si accidentalmente subiste información sensible

```bash
# 1. Eliminar del historial (⚠️ Requiere force push)
git filter-branch --force --index-filter \
  "git rm --cached --ignore-unmatch .env" \
  --prune-empty --tag-name-filter cat -- --all

# 2. Force push (⚠️ Cuidado)
git push origin --force --all

# 3. IMPORTANTE: Cambiar TODAS las credenciales expuestas
# Las credenciales en el historial de Git siguen siendo accesibles
```

### Mejor opción: Usar BFG Repo-Cleaner

```bash
# Instalar BFG
# https://rtyley.github.io/bfg-repo-cleaner/

# Eliminar archivo del historial
bfg --delete-files .env

# Limpiar
git reflog expire --expire=now --all
git gc --prune=now --aggressive

# Force push
git push origin --force --all
```

---

## 🔐 Autenticación en GitHub

### Personal Access Token (PAT)

1. Ve a: https://github.com/settings/tokens
2. Click en **"Generate new token (classic)"**
3. Selecciona scopes:
   - ✅ `repo` (acceso completo a repositorios)
   - ✅ `workflow` (si usas GitHub Actions)
4. Copia el token (solo se muestra una vez)
5. Úsalo como contraseña al hacer push

### SSH (Recomendado para uso frecuente)

```bash
# 1. Generar clave SSH
ssh-keygen -t ed25519 -C "tu-email@ejemplo.com"

# 2. Copiar clave pública
cat ~/.ssh/id_ed25519.pub

# 3. Agregar en GitHub
# Settings → SSH and GPG keys → New SSH key

# 4. Cambiar remote a SSH
git remote set-url origin git@github.com:TU-USUARIO/siempre-wifi.git
```

---

## 🌐 Seguridad en Vercel

### Headers de Seguridad

Ya configurados en `vercel.json`:

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
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        },
        {
          "key": "Referrer-Policy",
          "value": "strict-origin-when-cross-origin"
        }
      ]
    }
  ]
}
```

### Variables de Entorno en Vercel

```bash
# Usando Vercel CLI
vercel env add REACT_APP_API_KEY

# O desde el dashboard
# Settings → Environment Variables
```

---

## 🔍 Auditoría de Seguridad

### npm audit

```bash
# Ver vulnerabilidades
npm audit

# Corregir automáticamente
npm audit fix

# Corregir incluso breaking changes
npm audit fix --force

# Ver reporte detallado
npm audit --json
```

### Dependabot (GitHub)

Ya configurado automáticamente en GitHub:
- ✅ Escanea dependencias vulnerables
- ✅ Crea PRs automáticos para actualizaciones
- ✅ Alertas de seguridad

---

## 🚫 Protección de Ramas

### En GitHub

1. Ve a: **Settings** → **Branches**
2. Click en **"Add rule"**
3. Branch name pattern: `main`
4. Activar:
   - ✅ Require pull request reviews before merging
   - ✅ Require status checks to pass before merging
   - ✅ Require branches to be up to date before merging
   - ✅ Include administrators

---

## 📝 Checklist de Seguridad

### Antes de cada commit

- [ ] ¿Hay API keys en el código?
- [ ] ¿Hay contraseñas hardcoded?
- [ ] ¿Está `.env` en `.gitignore`?
- [ ] ¿Revisé `git diff --staged`?

### Antes de hacer público el repo

- [ ] Revisar todo el historial de commits
- [ ] Verificar que no hay credenciales
- [ ] Actualizar README con instrucciones claras
- [ ] Agregar `.env.example` sin valores reales

### Mantenimiento regular

- [ ] Ejecutar `npm audit` semanalmente
- [ ] Actualizar dependencias mensualmente
- [ ] Revisar alertas de Dependabot
- [ ] Rotar API keys cada 3-6 meses

---

## 🔒 Buenas Prácticas

### 1. Principio de Menor Privilegio

```javascript
// ❌ MAL - Exponer todo
export const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  apiSecret: process.env.API_SECRET, // ⚠️ Secret no debe estar en frontend
  dbPassword: process.env.DB_PASSWORD // ⚠️ Nunca en frontend
};

// ✅ BIEN - Solo lo necesario en frontend
export const config = {
  apiUrl: process.env.REACT_APP_API_URL,
  publicKey: process.env.REACT_APP_PUBLIC_KEY
};
```

### 2. Validación de Entrada

```javascript
// ❌ MAL - Sin validación
const email = userInput;
sendEmail(email);

// ✅ BIEN - Con validación
const email = userInput.trim();
if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
  throw new Error('Email inválido');
}
sendEmail(email);
```

### 3. Sanitización de Datos

```javascript
// ❌ MAL - XSS vulnerable
element.innerHTML = userInput;

// ✅ BIEN - Sanitizado
element.textContent = userInput;
// O usar una librería como DOMPurify
```

### 4. HTTPS Siempre

```javascript
// ❌ MAL
const API_URL = 'http://api.siemprewifi.com';

// ✅ BIEN
const API_URL = 'https://api.siemprewifi.com';
```

---

## 🚨 Qué Hacer si Hay una Brecha

### 1. Contención Inmediata

```bash
# Revocar credenciales comprometidas inmediatamente
# - API keys
# - Tokens de acceso
# - Contraseñas
```

### 2. Evaluación

- ¿Qué información fue expuesta?
- ¿Cuándo ocurrió?
- ¿Quién tuvo acceso?

### 3. Remediación

```bash
# Limpiar historial de Git
bfg --delete-files archivo-sensible.txt
git push origin --force --all

# Generar nuevas credenciales
# Actualizar en Vercel y servicios externos
```

### 4. Notificación

- Informar al equipo
- Documentar el incidente
- Actualizar procedimientos

---

## 📚 Recursos

### Herramientas de Seguridad

- **git-secrets**: Previene commits con secretos
  ```bash
  git secrets --install
  git secrets --register-aws
  ```

- **truffleHog**: Busca secretos en el historial
  ```bash
  trufflehog git https://github.com/TU-USUARIO/siempre-wifi
  ```

- **Snyk**: Escaneo de vulnerabilidades
  ```bash
  npm install -g snyk
  snyk test
  ```

### Enlaces Útiles

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [GitHub Security Best Practices](https://docs.github.com/en/code-security)
- [Vercel Security](https://vercel.com/docs/security)
- [React Security Best Practices](https://react.dev/learn/security)

---

## 📞 Contacto de Seguridad

Si encuentras una vulnerabilidad de seguridad:

1. **NO** abras un issue público
2. Envía un email a: security@siemprewifi.com
3. Incluye:
   - Descripción de la vulnerabilidad
   - Pasos para reproducir
   - Impacto potencial

---

**Última actualización**: Octubre 2025  
**Revisión de seguridad**: Trimestral
