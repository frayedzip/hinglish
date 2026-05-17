// homepage-top.jsx — nav, hero, logos strip, how-it-works.

import React from 'react';
import { GlishLogo, PaperTexture, useViewport } from './theme.jsx';

// ─────────────────────────────────────────────────────────────────────────────
// NAV
export function Nav() {
  const [open, setOpen] = React.useState(false);
  const links = ['Product', 'Styles', 'Languages', 'Pricing', 'Creators'];

  return (
    <header>
      <div
        className="gl-section gl-tight"
        style={{
          paddingTop: 20, paddingBottom: 20,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          borderBottom: '1px solid var(--rule-2)',
          position: 'sticky', top: 0, zIndex: 100,
          background: 'rgba(251,243,226,0.92)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
        }}
      >
        <GlishLogo size={26} />

        {/* Desktop links */}
        <nav className="gl-nav-links">
          {links.map((l) => (
            <a key={l} href="#" style={{
              color: 'var(--ink-2)', fontSize: 14, fontWeight: 500, textDecoration: 'none',
            }}>{l}</a>
          ))}
          <span style={{ width: 1, height: 16, background: 'var(--rule)' }}></span>
          <a href="#" style={{ color: 'var(--ink)', fontSize: 14, fontWeight: 600, textDecoration: 'none' }}>
            Sign in
          </a>
          <a href="#" className="gl-btn gl-sm gl-primary" style={{ textDecoration: 'none' }}>
            Start free <span style={{ fontSize: 16, marginLeft: -2 }}>→</span>
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="gl-nav-hamburger"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`gl-nav-drawer${open ? ' open' : ''}`}>
        {links.map((l) => (
          <a key={l} href="#">{l}</a>
        ))}
        <a href="#" style={{ fontWeight: 600, color: 'var(--ink)' }}>Sign in</a>
        <div style={{ padding: '16px 0' }}>
          <a href="#" className="gl-btn gl-primary" style={{
            textDecoration: 'none', display: 'inline-flex', width: '100%',
            justifyContent: 'center', borderRadius: 12,
          }}>
            Start free →
          </a>
        </div>
      </div>
    </header>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// HERO
export function Hero({ headline }) {
  const { isMobile } = useViewport();

  const phrases = [
    { t: 'scroll karo, viral ho jao', top: 8,  left: 2,   rot: -6,  delay: 0,   color: 'var(--accent)' },
    { t: 'thoda magic',               top: 12, left: 82,  rot: 5,   delay: 0.4, color: 'var(--marigold)' },
    { t: 'ekdum perfect',             top: 62, left: 1,   rot: -3,  delay: 0.8, color: 'var(--leaf)' },
    { t: 'no Devanagari, bas Hinglish', top: 74, left: 76, rot: 4,  delay: 1.2, color: 'var(--accent)' },
    { t: 'bilkul natural',            top: 40, left: -1,  rot: -8,  delay: 1.6, color: 'var(--marigold)' },
    { t: 'reels banao, sab dekhe',    top: 30, left: 84,  rot: 6,   delay: 2.0, color: 'var(--leaf)' },
  ];

  return (
    <section className="gl-section" style={{ paddingTop: 64, paddingBottom: 80, position: 'relative', overflow: 'hidden' }}>
      <PaperTexture />

      {/* Floating phrases — hidden on mobile via CSS */}
      <div aria-hidden="true" className="gl-float-phrases" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        {phrases.map((p, i) => (
          <span key={i} className="gl-serif-it" style={{
            position: 'absolute',
            top: `${p.top}%`, left: `${p.left}%`,
            '--r': `${p.rot}deg`,
            transform: `rotate(${p.rot}deg)`,
            fontSize: 'clamp(16px, 2vw, 28px)',
            color: p.color, whiteSpace: 'nowrap',
            opacity: 0.88,
            animation: `gl-float ${4 + (i % 3)}s ease-in-out ${p.delay}s infinite alternate`,
          }}>"{p.t}"</span>
        ))}
      </div>

      <div style={{ position: 'relative', maxWidth: 1100, margin: '0 auto', textAlign: 'center' }}>
        <span className="gl-eyebrow" style={{ marginBottom: 28 }}>
          v1.4 · Hindi · Hinglish · Tamil · Punjabi · Bengali · Urdu
        </span>

        <h1 className="gl-display gl-hero-title" style={{ margin: '24px 0 0', textWrap: 'balance' }}>
          {headline.before}
          <br />
          <span style={{ position: 'relative', display: 'inline-block' }}>
            <span
              className="gl-serif-it gl-hero-italic"
              style={{
                fontStyle: 'italic',
                fontFamily: "'Instrument Serif', serif",
                fontWeight: 400,
                color: 'var(--accent)',
                letterSpacing: '-0.02em',
              }}
            >{headline.italic}</span>
            {/* underline scribble */}
            <svg
              aria-hidden="true"
              width="100%"
              height="14"
              viewBox="0 0 600 14"
              preserveAspectRatio="none"
              style={{ position: 'absolute', bottom: -6, left: 0, color: 'var(--marigold)' }}
            >
              <path d="M2 9 C 120 2, 240 13, 360 7 S 580 4, 598 9" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round"/>
            </svg>
          </span>
          {' '}{headline.after}
        </h1>

        <p style={{
          fontSize: 'clamp(16px, 2vw, 22px)', lineHeight: 1.45, color: 'var(--ink-2)',
          maxWidth: 720, margin: '36px auto 44px', textWrap: 'balance',
        }}>
          Paste a Reel, Short, or YouTube link. Get accurate Hinglish captions in your
          voice — code-switched, romanized, and styled like your favorite creators.
        </p>

        <PasteBox />

        <div className="gl-hero-info">
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--leaf)' }}></span>
            No card needed
          </span>
          <span>·</span>
          <span>3 free Reels every week</span>
          <span>·</span>
          <span>No watermark on paid plans</span>
        </div>
      </div>

      <HeroPhoneRow />
    </section>
  );
}

function PasteBox() {
  return (
    <div className="gl-paste-box" style={{
      background: '#FFFBF0',
      boxShadow: '0 10px 30px -12px rgba(60,30,10,0.15), inset 0 1px 0 rgba(255,255,255,0.6)',
    }}>
      <span style={{
        width: 36, height: 36, borderRadius: '50%',
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        background: 'var(--chip-bg)', flex: '0 0 auto', marginLeft: 6,
        color: 'var(--ink-2)', fontSize: 16,
      }}>🔗</span>

      <div style={{ flex: 1, textAlign: 'left', minWidth: 0 }}>
        <div style={{
          fontSize: 11, fontFamily: "'JetBrains Mono', monospace",
          color: 'var(--ink-3)', letterSpacing: '0.1em', textTransform: 'uppercase',
        }}>
          Paste Reel / Short / YouTube link
        </div>
        <div className="gl-paste-url-text">
          instagram.com/reel/Cx9d8s_pQrM
          <span style={{
            display: 'inline-block', width: 2, height: 18, background: 'var(--accent)',
            marginLeft: 2, animation: 'gl-caret 1s steps(1) infinite',
          }}></span>
        </div>
      </div>

      <span className="gl-paste-drop">or drop a file</span>

      <button className="gl-btn gl-primary" style={{ height: 48 }}>
        Transcribe →
      </button>
    </div>
  );
}

function HeroPhoneRow() {
  return (
    <div className="gl-hero-phones">
      <PhoneMock vibe="cool" size={0.85} caption={{ kind: 'karaoke', lines: ['paani peene', 'ka time'] }} tilt={-4} note="karaoke style" />
      <PhoneMock vibe="sun"  size={1.0}  caption={{ kind: 'hormozi', lines: ['BHAI YE TOH', 'GAME CHANGER HAI'] }} tilt={0} note="hormozi style" featured />
      <PhoneMock vibe="green" size={0.85} caption={{ kind: 'word', lines: ['mast', '.'], active: 0 }} tilt={4} note="word-by-word" />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// PHONE MOCK
export function PhoneMock({ vibe = 'sun', size = 1.0, caption, tilt = 0, note, featured }) {
  const w = 240 * size;
  const h = w * 1.85;
  return (
    <div style={{ position: 'relative', transform: `rotate(${tilt}deg)`, transition: 'transform 0.3s', flex: '0 0 auto' }}>
      {note && (
        <div style={{
          position: 'absolute', top: -18, left: -8, zIndex: 3,
          fontFamily: "'Instrument Serif', serif", fontStyle: 'italic',
          fontSize: 14, color: 'var(--ink-2)',
          background: 'var(--bg)', padding: '2px 8px', borderRadius: 4,
          border: '1px solid var(--rule)',
        }}>{note}</div>
      )}
      <div className="gl-phone" style={{ width: w, height: h }}>
        <div className="gl-phone-notch"></div>
        <div className="gl-phone-screen">
          <div className={`gl-video gl-vibe-${vibe}`}>
            <PhoneCaption caption={caption} />
            <div style={{
              position: 'absolute', top: 10, left: 12, right: 12,
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              color: 'rgba(255,255,255,.7)', fontSize: 10,
              fontFamily: "'JetBrains Mono', monospace",
            }}>
              <span>9:41</span>
              <span>●●●</span>
            </div>
            <div style={{
              position: 'absolute', right: 10, bottom: 80,
              display: 'flex', flexDirection: 'column', gap: 14, alignItems: 'center',
            }}>
              {['♡', '💬', '↗', '⋯'].map((g, i) => (
                <span key={i} style={{
                  width: 26, height: 26, borderRadius: '50%',
                  background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(4px)',
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 12, color: 'rgba(255,255,255,.9)',
                }}>{g}</span>
              ))}
            </div>
            <div style={{
              position: 'absolute', bottom: 14, left: 12,
              color: 'rgba(255,255,255,.9)', fontSize: 11, fontWeight: 600,
              display: 'flex', alignItems: 'center', gap: 6,
            }}>
              <span style={{ width: 18, height: 18, borderRadius: '50%', background: 'var(--marigold)' }}></span>
              @aarav.makes
            </div>
          </div>
        </div>
      </div>
      {featured && (
        <div className="gl-sticky" style={{
          position: 'absolute', top: -10, right: -20, transform: 'rotate(6deg)', zIndex: 2,
        }}>most loved →</div>
      )}
    </div>
  );
}

export function PhoneCaption({ caption }) {
  if (!caption) return null;
  const baseWrap = {
    position: 'absolute', left: 14, right: 14, bottom: '34%',
    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
    textAlign: 'center', pointerEvents: 'none',
  };

  if (caption.kind === 'karaoke') {
    return (
      <div style={baseWrap}>
        {caption.lines.map((line, i) => (
          <div key={i} style={{
            fontFamily: 'Bricolage Grotesque, sans-serif', fontWeight: 700,
            fontSize: 24, letterSpacing: '-0.02em',
            textShadow: '0 2px 0 rgba(0,0,0,.45)',
            padding: '2px 10px',
            background: i === 0 ? 'linear-gradient(90deg, #FFD24D 0 60%, transparent 60%)' : 'transparent',
            color: i === 0 ? '#1a1a1a' : '#fff',
          }}>{line}</div>
        ))}
      </div>
    );
  }
  if (caption.kind === 'hormozi') {
    return (
      <div style={{ ...baseWrap, bottom: '36%' }}>
        {caption.lines.map((line, i) => (
          <div key={i} style={{
            fontFamily: 'Bricolage Grotesque, sans-serif', fontWeight: 800,
            fontSize: 22, letterSpacing: '-0.01em', textTransform: 'uppercase',
            WebkitTextStroke: '2px #000', paintOrder: 'stroke fill',
            textShadow: '0 3px 0 #000, 0 0 6px rgba(0,0,0,.6)',
          }}>
            {line.split(' ').map((w, j) => (
              <span key={j} style={{
                display: 'inline-block', margin: '0 3px',
                color: (i === 1 && j === 0) ? '#FFD24D' : '#fff',
              }}>{w}</span>
            ))}
          </div>
        ))}
      </div>
    );
  }
  if (caption.kind === 'word') {
    return (
      <div style={{ ...baseWrap, bottom: '40%' }}>
        <div style={{
          fontFamily: 'Bricolage Grotesque, sans-serif', fontWeight: 800,
          fontSize: 44, color: '#fff', letterSpacing: '-0.02em',
          textShadow: '0 4px 0 rgba(0,0,0,.5)',
          padding: '6px 14px',
          background: 'rgba(0,0,0,0.55)',
          borderRadius: 8,
          transform: 'scale(1.05)',
        }}>{caption.lines[0]}</div>
      </div>
    );
  }
  if (caption.kind === 'clean') {
    return (
      <div style={baseWrap}>
        {caption.lines.map((line, i) => (
          <div key={i} style={{
            fontFamily: 'Hanken Grotesk, sans-serif', fontWeight: 600,
            fontSize: 16, color: '#fff', letterSpacing: '-0.01em',
            background: 'rgba(0,0,0,0.5)', padding: '4px 10px', borderRadius: 6,
          }}>{line}</div>
        ))}
      </div>
    );
  }
  if (caption.kind === 'pop') {
    return (
      <div style={{ ...baseWrap, bottom: '36%' }}>
        {caption.lines.map((line, i) => (
          <div key={i} style={{
            fontFamily: 'Bricolage Grotesque, sans-serif', fontWeight: 800,
            fontSize: 22, color: '#FF3D7F', letterSpacing: '-0.01em',
            WebkitTextStroke: '2px #fff', paintOrder: 'stroke fill',
            textShadow: '3px 3px 0 #000',
            transform: i === 0 ? 'rotate(-2deg)' : 'rotate(2deg)',
          }}>{line}</div>
        ))}
      </div>
    );
  }
  return null;
}

// ─────────────────────────────────────────────────────────────────────────────
// LOGOS STRIP
export function LogosStrip() {
  const logos = ['CRED', 'Zomato', 'Boat', 'Cure.fit', 'Mamaearth', 'Razorpay', 'Nykaa'];
  return (
    <div className="gl-section gl-tight" style={{
      borderTop: '1px solid var(--rule-2)', borderBottom: '1px solid var(--rule-2)',
      paddingTop: 28, paddingBottom: 28,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24,
      flexWrap: 'wrap',
    }}>
      <div className="gl-mono gl-logos-label" style={{
        fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase',
        color: 'var(--ink-3)', flex: '0 0 auto',
      }}>
        Powering Reels for<br />creators &amp; brands behind →
      </div>
      <div className="gl-logos-row">
        {logos.map((l) => (
          <span key={l} className="gl-display" style={{
            fontSize: 'clamp(14px, 2vw, 22px)', color: 'var(--ink-2)',
            fontWeight: 600, letterSpacing: '-0.03em', opacity: 0.7,
          }}>{l}</span>
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// HOW IT WORKS
export function HowItWorks() {
  const steps = [
    {
      n: '01',
      title: 'Paste a link or drop a file',
      body: 'Reels, Shorts, YouTube videos, or raw MP4. Up to 60 minutes. We pull the audio in seconds — no signup wall.',
      tag: 'Paste',
      detail: <PasteDetail />,
    },
    {
      n: '02',
      title: 'Edit your Hinglish, your way',
      body: 'Word-level timing, split & merge, fix code-switches, save brand glossary. Our AI gets your accent — you keep the voice.',
      tag: 'Edit',
      detail: <EditDetail />,
    },
    {
      n: '03',
      title: 'Style it and post',
      body: 'Pick from 40+ viral caption styles or build your own. Export MP4 with burned-in subs, or SRT for your editor.',
      tag: 'Style & ship',
      detail: <StyleDetail />,
    },
  ];

  return (
    <section className="gl-section" style={{ borderTop: '1px solid var(--rule-2)' }}>
      <div className="gl-hiw-header">
        <div>
          <span className="gl-eyebrow">How glish works</span>
          <h2 className="gl-display gl-section-h2" style={{ margin: '20px 0 0', maxWidth: 800 }}>
            Three steps.{' '}
            <span className="gl-serif-it gl-section-h2-it" style={{ color: 'var(--accent)' }}>Reel</span>
            {' '}ready in under a minute.
          </h2>
        </div>
        <div style={{ maxWidth: 280, color: 'var(--ink-2)', fontSize: 15, textAlign: 'right' }}>
          Built end-to-end so you never bounce between five different tabs to caption one Reel.
        </div>
      </div>

      <div className="gl-grid-3">
        {steps.map((s) => (
          <div key={s.n} style={{
            padding: 28, borderRadius: 22,
            background: 'rgba(255,251,240,0.6)',
            border: '1px solid var(--rule)',
            position: 'relative',
            minHeight: 'clamp(320px, 30vw, 480px)',
            display: 'flex', flexDirection: 'column',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
              <span className="gl-num">{s.n}</span>
              <span className="gl-mono" style={{
                fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ink-3)',
              }}>step / {s.tag}</span>
            </div>
            <h3 className="gl-display" style={{ fontSize: 'clamp(20px, 2.5vw, 28px)', margin: '8px 0 12px', maxWidth: 320 }}>
              {s.title}
            </h3>
            <p style={{ color: 'var(--ink-2)', fontSize: 15, lineHeight: 1.55, margin: '0 0 24px' }}>
              {s.body}
            </p>
            <div style={{ marginTop: 'auto' }}>{s.detail}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function PasteDetail() {
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', gap: 8,
      padding: 14, background: 'var(--bg)', border: '1px dashed var(--rule)', borderRadius: 12,
    }}>
      <div className="gl-mono" style={{ fontSize: 10, color: 'var(--ink-3)', letterSpacing: '0.1em' }}>SOURCE URL</div>
      <div className="gl-mono" style={{ fontSize: 12, color: 'var(--ink)', wordBreak: 'break-all' }}>
        youtube.com/shorts/k8Z2_pq
      </div>
      <div style={{ display: 'flex', gap: 6, marginTop: 6, flexWrap: 'wrap' }}>
        <span className="gl-chip">⬇ Pulling audio…</span>
        <span className="gl-chip" style={{ background: 'var(--accent)', color: 'var(--accent-ink)', borderColor: 'transparent' }}>
          0:42 detected
        </span>
      </div>
    </div>
  );
}

function EditDetail() {
  const words = [
    { t: 'bhai', active: false },
    { t: 'ye',   active: false },
    { t: 'toh',  active: true  },
    { t: 'literally', active: false },
    { t: 'game', active: false },
    { t: 'changer', active: false },
    { t: 'hai',  active: false },
  ];
  return (
    <div style={{ padding: 14, background: 'var(--bg)', border: '1px solid var(--rule)', borderRadius: 12 }}>
      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
        {words.map((w, i) => (
          <span key={i} style={{
            padding: '4px 8px', borderRadius: 6, fontSize: 13, fontWeight: 500,
            background: w.active ? 'var(--accent)' : 'transparent',
            color: w.active ? 'var(--accent-ink)' : 'var(--ink)',
            border: w.active ? '1px solid var(--accent)' : '1px solid var(--rule)',
            fontFamily: "'JetBrains Mono', monospace",
          }}>{w.t}</span>
        ))}
      </div>
      <div style={{ marginTop: 12, display: 'flex', gap: 8, alignItems: 'center' }}>
        <div style={{ flex: 1, height: 4, background: 'var(--rule)', borderRadius: 2, position: 'relative' }}>
          <div style={{ position: 'absolute', left: '38%', top: -3, width: 10, height: 10, borderRadius: '50%', background: 'var(--accent)' }}></div>
        </div>
        <span className="gl-mono" style={{ fontSize: 10, color: 'var(--ink-3)' }}>00:14.2</span>
      </div>
      <div style={{ marginTop: 10, fontSize: 12, color: 'var(--ink-2)', display: 'flex', justifyContent: 'space-between' }}>
        <span>↔ drag to retime</span>
        <span style={{ color: 'var(--accent)' }}>+ split word</span>
      </div>
    </div>
  );
}

function StyleDetail() {
  const styles = ['Hormozi', 'Karaoke', 'Word pop', 'Comic', 'Minimal', 'Neon'];
  return (
    <div style={{ padding: 14, background: 'var(--bg)', border: '1px solid var(--rule)', borderRadius: 12 }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 6 }}>
        {styles.map((s, i) => (
          <div key={s} style={{
            padding: '10px 6px', textAlign: 'center', borderRadius: 8,
            background: i === 1 ? 'var(--ink)' : 'transparent',
            color: i === 1 ? 'var(--bg)' : 'var(--ink-2)',
            border: '1px solid var(--rule)',
            fontSize: 11, fontWeight: 600,
          }}>{s}</div>
        ))}
      </div>
      <div style={{ marginTop: 12, display: 'flex', gap: 6 }}>
        <span className="gl-chip" style={{ background: 'var(--ink)', color: 'var(--bg)', borderColor: 'transparent' }}>↓ MP4</span>
        <span className="gl-chip">.srt</span>
        <span className="gl-chip">.vtt</span>
      </div>
    </div>
  );
}
