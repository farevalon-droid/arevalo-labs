# Arevalo Labs® — Landing Page v5.0.0-SECURE

## Arquitectura del Proyecto

```
stitch_arevalo_labs_landing_page/
│
├── index.html                  # Entrada principal — HTML semántico, sin lógica inline
│
├── assets/
│   ├── css/
│   │   ├── fonts.css           # @font-face self-hosted declarations
│   │   └── base.css            # Reset, animaciones, focus rings, scroll
│   │
│   ├── js/
│   │   ├── tailwind.min.js     # Tailwind v3.4.17 (pinned — sin CDN externo)
│   │   ├── tailwind.config.js  # Design tokens: colores, tipografía, espaciado
│   │   ├── shader.js           # WebGL Matrix shader (IIFE — zero globals)
│   │   └── app.js              # Lógica de UI: menú, scroll-spy, fade-in, dispatch
│   │
│   ├── fonts/                  # Fuentes self-hosted (.woff2)
│   │   ├── SpaceGrotesk-600.woff2
│   │   ├── SpaceGrotesk-700.woff2
│   │   ├── JetBrainsMono-400.woff2
│   │   ├── JetBrainsMono-700.woff2
│   │   ├── Inter-400.woff2
│   │   ├── Inter-600.woff2
│   │   └── MaterialSymbols.woff2
│   │
│   └── images/
│       ├── logo.svg            # Lockup vectorial: marca + wordmark (texto en curvas)
│       ├── mark.svg            # Marca suelta (A + travesaño ácido)
│       └── favicon.svg         # Favicon vectorial (placa + A)
│
├── netlify.toml                # Headers de seguridad para despliegue
├── DESIGN.md                   # Design system spec (Kinetic Lab Brutalism)
└── README.md                   # Este archivo
```

---

## Mejoras de Seguridad Aplicadas

### 🔴 Vulnerabilidades Eliminadas

| Problema | Solución |
|---|---|
| Logo en URL privada `lh3.googleusercontent.com/aida/...` | Descargado y servido desde `assets/images/logo.webp` |
| Tailwind desde CDN sin versión fija | Descargado `tailwind.min.js` v3.4.17 (hash fijo) |
| Fuentes desde Google Fonts (tracking) | Descargadas en `assets/fonts/` — sin requests externos |
| Sin CSP (Content Security Policy) | CSP strict en `<meta>` + `netlify.toml` |
| `eval()` / funciones globales expuestas | Patrón IIFE — solo `window.ArevaloLabs` público |
| Sin validación de inputs del formulario | Sanitización + `maxlength` + `required` |
| `noopener noreferrer` inconsistente | Aplicado en todos los `target="_blank"` |

### 🟢 Capas de Seguridad Implementadas

1. **CSP (Content Security Policy)** — bloquea scripts/estilos externos no declarados
2. **X-Content-Type-Options: nosniff** — previene MIME sniffing
3. **Referrer-Policy: no-referrer** — no filtra URL a sitios externos
4. **X-Frame-Options: DENY** — previene clickjacking
5. **HSTS** (en netlify.toml) — fuerza HTTPS
6. **Permissions-Policy** — desactiva geolocalización, cámara, micrófono
7. **Self-hosted assets** — cero requests a dominios de terceros
8. **Input sanitization** — limpia caracteres peligrosos antes de encodear

---

## Patrones de Diseño

| Módulo | Patrón |
|---|---|
| `app.js` | IIFE (Immediately Invoked Function Expression) — zero global leakage |
| `shader.js` | IIFE + graceful degradation sin WebGL |
| Contact form | Sanitize → Encode → Open (no servidor, no API keys) |
| Navigation | Intersection Observer API (scroll-spy) |
| Fade-in | Intersection Observer API (lazy animation) |
| Fonts | `font-display: swap` — sin bloqueo de render |
| Images | `loading="lazy"` + `decoding="async"` + `width/height` |
| Scripts | Cargados al final del `<body>` con `defer` |

---

## Identidad de Marca

El logo es 100% vectorial (`assets/images/logo.svg`) y se construye con los tokens del sitio:

| Elemento | Valor |
|---|---|
| Marca | Monograma "A" con travesaño en acento — geometría plana, sin degradados ni brillos |
| Wordmark | Space Grotesk 700 convertido a curvas (no depende de la carga de fuentes) |
| Tagline | JetBrains Mono 700, `SOFTWARE ENGINEERING LAB // BOGOTÁ` |
| Acento | `#00E5FF` (electric cyan) |
| Tinta | `#E5E2E1` (on-surface) |
| Secundario | `#486581` (outline) |

Archivos:

- `logo.svg` — lockup horizontal (header y footer)
- `mark.svg` — marca aislada (avatares, redes, sellos)
- `favicon.svg` — versión para 16–32 px sobre placa oscura

---

## Para Desplegar (Netlify / Vercel)

```bash
# No build step required — static site
# Simply upload the entire folder
# netlify.toml handles security headers automatically
```

> **IMPORTANTE**: El número de WhatsApp y email son información de contacto pública.  
> Si quieres ofuscarlos del código fuente HTML, considera un backend proxy  
> o implementar un honeypot anti-spam.

