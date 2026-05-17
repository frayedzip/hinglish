// theme.jsx — Paper palette, shared UI components, viewport hook.

import React from 'react';

export const PAPER = {
  variant: 'paper',
  name: 'Paper',
  cssVars: {
    '--bg':         '#FBF3E2',
    '--bg-2':       '#F4EAD2',
    '--ink':        '#1A130C',
    '--ink-2':      'rgba(26,19,12,0.62)',
    '--ink-3':      'rgba(26,19,12,0.4)',
    '--rule':       'rgba(26,19,12,0.14)',
    '--rule-2':     'rgba(26,19,12,0.08)',
    '--chip-bg':    'rgba(255,246,232,0.6)',
    '--accent':     '#D63A1A',
    '--accent-2':   '#B82A12',
    '--accent-ink': '#FFF6E8',
    '--marigold':   '#F0B132',
    '--leaf':       '#5C6B3A',
    '--paper-fold': 'rgba(26,19,12,0.06)',
  },
};

// Viewport hook — returns isMobile / isTablet / isDesktop / width
export function useViewport() {
  const [width, setWidth] = React.useState(
    typeof window !== 'undefined' ? window.innerWidth : 1440
  );
  React.useEffect(() => {
    const handler = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);
  return {
    width,
    isMobile:  width < 768,
    isTablet:  width >= 768 && width < 1024,
    isDesktop: width >= 1024,
  };
}

// Spinning marigold ornament
export function Marigold({ size = 36, color = 'var(--marigold)' }) {
  return (
    <span aria-hidden="true" style={{
      display: 'inline-block', width: size, height: size, position: 'relative',
      flex: '0 0 auto',
    }}>
      <span style={{
        position: 'absolute', inset: 0, borderRadius: '50%',
        background: `radial-gradient(circle at 50% 50%, ${color} 18%, transparent 19%),
          conic-gradient(from 0deg, ${color} 0 18deg, transparent 18deg 30deg,
            ${color} 30deg 48deg, transparent 48deg 60deg,
            ${color} 60deg 78deg, transparent 78deg 90deg,
            ${color} 90deg 108deg, transparent 108deg 120deg,
            ${color} 120deg 138deg, transparent 138deg 150deg,
            ${color} 150deg 168deg, transparent 168deg 180deg,
            ${color} 180deg 198deg, transparent 198deg 210deg,
            ${color} 210deg 228deg, transparent 228deg 240deg,
            ${color} 240deg 258deg, transparent 258deg 270deg,
            ${color} 270deg 288deg, transparent 288deg 300deg,
            ${color} 300deg 318deg, transparent 318deg 330deg,
            ${color} 330deg 348deg, transparent 348deg 360deg)`,
      }}></span>
      <span style={{
        position: 'absolute', inset: '32%', borderRadius: '50%', background: 'var(--accent)',
      }}></span>
    </span>
  );
}

// Logo lockup
export function GlishLogo({ size = 28 }) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, position: 'relative' }}>
      <span aria-hidden="true" style={{
        width: size * 0.85, height: size * 0.85, borderRadius: '50%',
        background: 'var(--accent)',
        position: 'relative', flex: '0 0 auto',
      }}>
        <span style={{
          position: 'absolute', inset: '22%', borderRadius: '50%',
          background: 'var(--marigold)', mixBlendMode: 'screen',
        }}></span>
      </span>
      <span className="gl-display" style={{
        fontSize: size, letterSpacing: '-0.055em', fontWeight: 700,
        fontVariationSettings: '"wdth" 88',
      }}>glish</span>
    </div>
  );
}

// Subtle paper texture overlay
export function PaperTexture({ opacity = 0.35 }) {
  return (
    <div aria-hidden="true" style={{
      position: 'absolute', inset: 0, pointerEvents: 'none', opacity,
      background:
        'radial-gradient(circle at 20% 10%, rgba(106,80,40,0.08), transparent 40%),' +
        'radial-gradient(circle at 80% 80%, rgba(106,80,40,0.06), transparent 50%),' +
        'repeating-linear-gradient(0deg, rgba(0,0,0,0.012) 0 1px, transparent 1px 3px)',
    }}></div>
  );
}
