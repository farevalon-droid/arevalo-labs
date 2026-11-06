/**
 * AREVALO LABS® — Tailwind Configuration
 * Cyber Kinetic Architecture Design System
 * Primary: Electric Cyan #00E5FF | Dark Navy Background #0a0d14 | Slate Outline #486581
 */

tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        /* ── Primary: Electric Cyan ───────────────────────── */
        'primary':                  '#ffffff',
        'on-primary':               '#050b14',
        'primary-container':        '#00E5FF',
        'on-primary-container':     '#002b49',
        'primary-fixed':            '#00E5FF',
        'primary-fixed-dim':        '#00b4d8',
        'on-primary-fixed':         '#04121f',
        'on-primary-fixed-variant': '#004777',
        'inverse-primary':          '#0070F3',
        'surface-tint':             '#00E5FF',

        /* ── Secondary: Cool Slate ───────────────────────── */
        'secondary':                '#9fb3c8',
        'on-secondary':             '#303031',
        'secondary-container':      '#263345',
        'on-secondary-container':   '#9fb3c8',
        'secondary-fixed':          '#e3e2e2',
        'secondary-fixed-dim':      '#c7c6c6',
        'on-secondary-fixed':       '#1b1c1c',
        'on-secondary-fixed-variant':'#464747',

        /* ── Tertiary: Neutral Off-White ─────────────────── */
        'tertiary':                  '#ffffff',
        'on-tertiary':               '#313030',
        'tertiary-container':        '#e5e2e1',
        'on-tertiary-container':     '#656464',
        'tertiary-fixed':            '#e5e2e1',
        'tertiary-fixed-dim':        '#c8c6c5',
        'on-tertiary-fixed':         '#1c1b1b',
        'on-tertiary-fixed-variant': '#474646',

        /* ── Surfaces: Deep Cyber Navy ───────────────────── */
        'background':                '#0a0d14',
        'on-background':             '#e5e2e1',
        'surface':                   '#0f131d',
        'surface-dim':               '#0d111a',
        'surface-bright':            '#283448',
        'surface-container-lowest':  '#070a0f',
        'surface-container-low':     '#131720',
        'surface-container':         '#161c28',
        'surface-container-high':    '#1c2331',
        'surface-container-highest': '#242d3d',
        'surface-variant':           '#1e2530',
        'on-surface':                '#e5e2e1',
        'on-surface-variant':        '#9fb3c8',
        'inverse-surface':           '#e5e2e1',
        'inverse-on-surface':        '#313030',

        /* ── Outlines: Structural Blueprint ──────────────── */
        'outline':         '#486581',
        'outline-variant': '#1e2d42',

        /* ── Error ───────────────────────────────────────── */
        'error':             '#ffb4ab',
        'on-error':          '#690005',
        'error-container':   '#93000a',
        'on-error-container':'#ffdad6',
      },

      borderRadius: {
        'DEFAULT': '0.25rem',
        'lg':      '0.5rem',
        'xl':      '0.75rem',
        'full':    '9999px',
      },

      spacing: {
        'margin':          '1rem',
        'margin-tablet':   '1.5rem',
        'margin-desktop':  '2.5rem',
        'gutter':          '1rem',
        'gutter-desktop':  '1.5rem',
        'space-xs':        '0.25rem',
        'space-sm':        '0.5rem',
        'space-md':        '1rem',
        'space-lg':        '1.5rem',
        'space-xl':        '2.5rem',
      },

      fontFamily: {
        'headline-xl':        ['Space Grotesk', 'sans-serif'],
        'headline-xl-mobile': ['Space Grotesk', 'sans-serif'],
        'headline-lg':        ['Space Grotesk', 'sans-serif'],
        'headline-lg-mobile': ['Space Grotesk', 'sans-serif'],
        'headline-md':        ['Space Grotesk', 'sans-serif'],
        'body-lg':            ['Inter', 'sans-serif'],
        'body-md':            ['Inter', 'sans-serif'],
        'label-mono-lg':      ['JetBrains Mono', 'monospace'],
        'label-mono-md':      ['JetBrains Mono', 'monospace'],
        'label-mono-sm':      ['JetBrains Mono', 'monospace'],
      },

      fontSize: {
        'headline-xl':        ['64px', { lineHeight: '68px', letterSpacing: '-0.04em', fontWeight: '700' }],
        'headline-xl-mobile': ['36px', { lineHeight: '40px', letterSpacing: '-0.03em', fontWeight: '700' }],
        'headline-lg':        ['40px', { lineHeight: '44px', letterSpacing: '-0.03em', fontWeight: '700' }],
        'headline-lg-mobile': ['28px', { lineHeight: '32px', letterSpacing: '-0.02em', fontWeight: '700' }],
        'headline-md':        ['24px', { lineHeight: '28px', letterSpacing: '-0.02em', fontWeight: '600' }],
        'body-lg':            ['16px', { lineHeight: '24px', letterSpacing: '-0.01em', fontWeight: '400' }],
        'body-md':            ['14px', { lineHeight: '20px', letterSpacing: '0em',     fontWeight: '400' }],
        'label-mono-lg':      ['13px', { lineHeight: '16px', letterSpacing: '0.06em',  fontWeight: '600' }],
        'label-mono-md':      ['11px', { lineHeight: '14px', letterSpacing: '0.08em',  fontWeight: '500' }],
        'label-mono-sm':      ['9px',  { lineHeight: '12px', letterSpacing: '0.1em',   fontWeight: '500' }],
      },
    },
  },
};
