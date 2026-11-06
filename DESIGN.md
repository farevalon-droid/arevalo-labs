---
name: Kinetic Lab Brutalism
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c3caac'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#8d9479'
  outline-variant: '#434933'
  surface-tint: '#a6d700'
  primary: '#ffffff'
  on-primary: '#273500'
  primary-container: '#bef500'
  on-primary-container: '#536d00'
  inverse-primary: '#4e6700'
  secondary: '#c7c6c6'
  on-secondary: '#303031'
  secondary-container: '#464747'
  on-secondary-container: '#b5b5b5'
  tertiary: '#ffffff'
  on-tertiary: '#313030'
  tertiary-container: '#e5e2e1'
  on-tertiary-container: '#656464'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#bef500'
  primary-fixed-dim: '#a6d700'
  on-primary-fixed: '#151f00'
  on-primary-fixed-variant: '#3a4d00'
  secondary-fixed: '#e3e2e2'
  secondary-fixed-dim: '#c7c6c6'
  on-secondary-fixed: '#1b1c1c'
  on-secondary-fixed-variant: '#464747'
  tertiary-fixed: '#e5e2e1'
  tertiary-fixed-dim: '#c8c6c5'
  on-tertiary-fixed: '#1c1b1b'
  on-tertiary-fixed-variant: '#474646'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  headline-xl:
    fontFamily: Space Grotesk
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 68px
    letterSpacing: -0.04em
  headline-xl-mobile:
    fontFamily: Space Grotesk
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.03em
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.02em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  label-mono-lg:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.06em
  label-mono-md:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.08em
  label-mono-sm:
    fontFamily: JetBrains Mono
    fontSize: 9px
    fontWeight: '500'
    lineHeight: 12px
    letterSpacing: 0.1em
spacing:
  gutter: 1rem
  gutter-desktop: 1.5rem
  margin: 1rem
  margin-tablet: 1.5rem
  margin-desktop: 2.5rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

The design system establishes a high-performance, digital brutalist visual language tailored for software engineering laboratories and advanced systems architecture. The atmosphere is raw, technical, and hyper-precise—rejecting consumer-grade skeuomorphism, gentle rounding, and decorative blurs in favor of structural clarity, high-contrast mechanical interfaces, and data-dense utility.

The UI evokes the operational intensity of telemetry consoles, flight recorders, and low-level runtime monitors. Interactions feel immediate, clicky, and rigid. Surfaces do not float; they are partitioned by visible engineering borders and cross-hair registration grids.

## Colors

The palette is engineered around high contrast and functional signaling:

- **Primary (`#C6FF00`)**: Acid Tech Green. Used sparingly for critical interactive states, focused hardware toggles, primary execution buttons, and live health monitors. It represents energy, execution, and active runtime.
- **Secondary (`#858585`)**: Industrial Gray. Governs spatial boundaries, technical schematics, measurement axes, metadata labels, and secondary readouts.
- **Tertiary (`#151515`)**: Carbon Dark Gray. Forms container surfaces, panel slabs, and segregated modular docks over the canvas.
- **Neutral (`#080808`)**: Absolute Vacuum Black. The baseline canvas for all views, eliminating visual noise.
- **Foreground Accent (`#F5F5F5`)**: Pure Stark White. Dedicated exclusively to primary headers, metric values, and high-priority textual data.

## Typography

The typography couples the angular industrial geometry of Space Grotesk with the dense mechanical utility of JetBrains Mono and the objective legibility of Inter.

- **Space Grotesk**: Reserved for brutalist headings, display readouts, and section indices. Always styled tightly tracked (`-0.02em` to `-0.04em`) to maintain an engineered block silhouette.
- **Inter**: Strictly utilized for multi-line documentation, architectural descriptions, and technical body prose.
- **JetBrains Mono**: Deployed for UI telemetry, timestamps, status indicators, system logs, input controls, and component labels. All label tokens enforce uppercase transformation and expanded letter spacing for tactical scanning.

## Layout & Spacing

Layouts follow a rigid 12-column modular grid on desktop and tablet (collapsing to 4 columns on mobile). Instead of floating container cards, areas are defined by structural grid lines and panel borders that intersect across the viewport.

- **Breakpoints**: Mobile (under 768px), Tablet (768px to 1199px), Desktop (1200px and above).
- **Rhythm**: Spacing follows an absolute 4px/8px mechanical cadence.
- **Alignment**: Components span strict column intervals (e.g., 2, 3, 4, 6, 12). Grid gutters must match border alignments, forming clean cross-wire vertices where borders intersect.

## Elevation & Depth

This design system avoids soft ambient drop-shadows and glassmorphism. Visual depth is established through physical layering and stark borders:

- **Plane Grounding**: The background sits at `#080808`. Surface panels sit at `#151515`.
- **Structural Outlines**: Panels, windows, and modules are partitioned using a 1px solid border of `#858585` (or dimmed to `rgba(133, 133, 133, 0.3)` for secondary subdivisions).
- **Hard Offsets**: Interactive elevations (e.g., hover states or active module windows) utilize a crisp hard shadow: `2px 2px 0px 0px #C6FF00` or `3px 3px 0px 0px #F5F5F5`. No blur radius is permitted.
- **Grid Guides**: Subtle CSS background grid overlays (1px rules on 32px increments with 5% white opacity) may be applied behind panels to reference structural blueprints.

## Shapes

The geometric rule is absolute zero radii (`0px`). All buttons, modals, input fields, badges, and panels feature razor-sharp rectangular corners. Chamfered or cut corners (clip-path at 45 degrees, 6px to 8px) are permissible exclusively for primary CTA actions and telemetry badges to reinforce a hardware-chassis motif.

## Components

### Buttons
- **Primary CTA**: Background `#C6FF00`, text `#080808`, 1px solid `#C6FF00`. Font: `JetBrains Mono`, uppercase, bold. On hover: invert to background `#080808`, text `#C6FF00`, with a `2px 2px 0px 0px #C6FF00` hard offset.
- **Secondary / Ghost**: Background `#151515`, text `#F5F5F5`, 1px solid `#858585`. On hover: border-color `#C6FF00`, text `#C6FF00`.
- **Destructive**: Background `#080808`, text `#FF3333`, 1px solid `#FF3333`.

### Chips & Telemetry Tags
- Rendered in `label-mono-md`. Background `#151515`, 1px solid `#858585`, text `#F5F5F5`.
- Status indicators include a 6px solid square prefix: active states use `#C6FF00` (static or pulsating with 0.8s square step intervals), idle states use `#858585`.

### Cards & Modular Panels
- Background `#151515`, enclosed by a 1px solid `#858585` boundary.
- Header bars contain monospaced panel identifiers (e.g., `// MOD_SYS: 001`) with right-aligned coordinate markers or status badges, separated from panel content by a horizontal 1px rule.

### Input Fields
- Background `#080808`, text `#F5F5F5`, 1px solid `#858585`. Font: `JetBrains Mono`.
- Focus state: 1px solid `#C6FF00` with an active block caret (`▌`) in `#C6FF00`. Corner labels display system metadata in `label-mono-sm`.

### Checkboxes & Radios
- Sharp squares (0px radius).
- Unchecked: 1px solid `#858585` on `#080808`.
- Checked: Solid `#C6FF00` fill with a centered `#080808` square dot.

### Diagnostic Data Tables & Lists
- Table borders collapse cleanly using 1px `#858585` dividers.
- Header cells: uppercase `label-mono-md`, text `#858585`, background `#151515`.
- Data rows alternate between `#080808` and `#111111` on hover, shifting left-side indicators to `#C6FF00`.