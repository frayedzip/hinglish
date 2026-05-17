// homepage-mid.jsx — caption gallery, languages, social proof.

import React from 'react';
import { Marigold } from './theme.jsx';
import { PhoneMock } from './homepage-top.jsx';

// ─────────────────────────────────────────────────────────────────────────────
// CAPTION GALLERY
export function CaptionGallery() {
  const items = [
    { vibe: 'sun',   kind: 'hormozi', lines: ['BHAI YE TOH', 'GAME CHANGER HAI'], label: 'Hormozi',  tag: 'bold + caps',        tilt: -3 },
    { vibe: 'cool',  kind: 'karaoke', lines: ['paani peene', 'ka time'],          label: 'Karaoke',  tag: 'highlight on beat',  tilt: 2  },
    { vibe: 'green', kind: 'word',    lines: ['mast'],                            label: 'Word pop', tag: 'one word at a time', tilt: -2 },
    { vibe: 'pink',  kind: 'pop',     lines: ['ekdum', 'jhakaas!'],               label: 'Comic',    tag: 'playful, sticker',   tilt: 3  },
    { vibe: 'night', kind: 'clean',   lines: ['simple aur saaf', 'rakho'],        label: 'Minimal',  tag: 'clean editorial',    tilt: -1 },
  ];

  return (
    <section className="gl-section" style={{ borderTop: '1px solid var(--rule-2)' }}>
      <div className="gl-sec-header">
        <div style={{ maxWidth: 720 }}>
          <span className="gl-eyebrow">Style library · 40+ presets</span>
          <h2 className="gl-display gl-section-h2" style={{ margin: '20px 0 16px' }}>
            Captions that look like{' '}
            <span className="gl-serif-it gl-section-h2-it" style={{ color: 'var(--accent)' }}>your favorite</span>
            {' '}creators.
          </h2>
          <p style={{ fontSize: 17, color: 'var(--ink-2)', maxWidth: 560, lineHeight: 1.55 }}>
            From Hormozi-style bold caps to soft karaoke highlights — we ship new templates every week based on what's actually going viral on Indian Reels.
          </p>
        </div>
        <div style={{ flexShrink: 0 }}>
          <button className="gl-btn gl-sm gl-ghost">Browse all 40+ →</button>
        </div>
      </div>

      {/* Scrollable phone row */}
      <div className="gl-phone-row">
        {items.map((it, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, flex: '0 0 auto' }}>
            <PhoneMock
              vibe={it.vibe}
              size={0.78}
              caption={{ kind: it.kind, lines: it.lines }}
              tilt={it.tilt}
            />
            <div style={{ textAlign: 'center' }}>
              <div className="gl-display" style={{ fontSize: 22, fontWeight: 600 }}>{it.label}</div>
              <div className="gl-mono" style={{
                fontSize: 11, color: 'var(--ink-3)', letterSpacing: '0.1em',
                textTransform: 'uppercase', marginTop: 2,
              }}>{it.tag}</div>
            </div>
          </div>
        ))}
      </div>

      {/* footnote bar */}
      <div style={{
        marginTop: 48, padding: '16px 24px', borderRadius: 14,
        border: '1px solid var(--rule)', background: 'rgba(255,251,240,0.6)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        gap: 24, flexWrap: 'wrap',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <Marigold size={28} />
          <div>
            <div style={{ fontWeight: 600, fontSize: 15 }}>Bring your own brand kit.</div>
            <div style={{ fontSize: 13, color: 'var(--ink-2)' }}>Upload fonts, lock colors, save templates per channel.</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <span className="gl-chip">@aarav.makes</span>
          <span className="gl-chip">@desibakes</span>
          <span className="gl-chip">@thehindiguy</span>
          <span className="gl-chip">+ 2 more</span>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// LANGUAGES
export function Languages() {
  const langs = [
    { name: 'Hinglish', native: 'Romanized Hindi', sample: '"yaar yeh toh next level hai"', featured: true, n: '95%' },
    { name: 'Hindi',    native: 'हिन्दी',          sample: '"यह बहुत अच्छा है"',             n: '97%' },
    { name: 'Tamil',    native: 'தமிழ்',           sample: '"semma vibe da"',               n: '94%' },
    { name: 'Punjabi',  native: 'ਪੰਜਾਬੀ',          sample: '"oye balle balle"',             n: '93%' },
    { name: 'Bengali',  native: 'বাংলা',           sample: '"darun hoyeche"',               n: '93%' },
    { name: 'Urdu',     native: 'اُردُو',          sample: '"bohot khoob"',                 n: '92%' },
    { name: 'Marathi',  native: 'मराठी',           sample: '"ekdum bhari"',                 n: '91%', beta: true },
    { name: 'Gujarati', native: 'ગુજરાતી',         sample: '"saras chhe"',                  n: '90%', beta: true },
  ];

  return (
    <section className="gl-section" style={{
      borderTop: '1px solid var(--rule-2)', background: 'var(--bg-2)', position: 'relative',
    }}>
      <div className="gl-lang-header">
        <div>
          <span className="gl-eyebrow">8 languages · code-switching ready</span>
          <h2 className="gl-display gl-section-h2" style={{ margin: '20px 0 0', maxWidth: 880 }}>
            Trained on how India{' '}
            <span className="gl-serif-it gl-section-h2-it" style={{ color: 'var(--accent)' }}>actually</span>
            {' '}talks.
          </h2>
          <p style={{ fontSize: 17, color: 'var(--ink-2)', maxWidth: 600, marginTop: 16, lineHeight: 1.55 }}>
            Generic transcription fails on Hindi-English mixing, accents, and slang. Glish is fine-tuned on 30,000+ hours of South Asian creator audio.
          </p>
        </div>
        <div style={{
          padding: 16, border: '1px solid var(--rule)', borderRadius: 14,
          background: 'rgba(255,251,240,0.7)',
          minWidth: 220, textAlign: 'right',
          flexShrink: 0,
        }}>
          <div className="gl-display" style={{ fontSize: 44, fontWeight: 700, color: 'var(--accent)', lineHeight: 1 }}>30K+</div>
          <div style={{ fontSize: 12, color: 'var(--ink-2)', marginTop: 4 }}>
            hours of South Asian<br />creator speech in training
          </div>
        </div>
      </div>

      <div className="gl-grid-4">
        {langs.map((l) => (
          <div key={l.name} style={{
            padding: 20, borderRadius: 16,
            background: l.featured ? 'var(--ink)' : 'var(--bg)',
            color: l.featured ? 'var(--bg)' : 'var(--ink)',
            border: l.featured ? '1px solid var(--ink)' : '1px solid var(--rule)',
            position: 'relative', overflow: 'hidden',
          }}>
            {l.featured && (
              <span style={{
                position: 'absolute', top: 12, right: 12,
                fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: '0.1em',
                color: 'var(--marigold)',
              }}>★ flagship</span>
            )}
            {l.beta && (
              <span style={{
                position: 'absolute', top: 12, right: 12,
                fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: '0.1em',
                color: 'var(--ink-3)',
              }}>beta</span>
            )}
            <div className="gl-display" style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', fontWeight: 700, letterSpacing: '-0.03em' }}>
              {l.name}
            </div>
            <div className="gl-serif-it" style={{ fontSize: 18, marginTop: 2, opacity: l.featured ? 0.7 : 0.8 }}>
              {l.native}
            </div>
            <div style={{
              marginTop: 18, fontFamily: "'JetBrains Mono', monospace", fontSize: 11,
              color: l.featured ? 'rgba(255,246,232,0.7)' : 'var(--ink-2)',
              lineHeight: 1.4,
            }}>{l.sample}</div>
            <div style={{
              marginTop: 20, paddingTop: 14,
              borderTop: `1px solid ${l.featured ? 'rgba(255,246,232,0.15)' : 'var(--rule)'}`,
              display: 'flex', justifyContent: 'space-between',
              fontSize: 11, fontFamily: "'JetBrains Mono', monospace",
              color: l.featured ? 'rgba(255,246,232,0.7)' : 'var(--ink-3)',
              letterSpacing: '0.08em', textTransform: 'uppercase',
            }}>
              <span>accuracy</span>
              <span style={{ color: l.featured ? 'var(--marigold)' : 'var(--accent)', fontWeight: 600 }}>{l.n}</span>
            </div>
          </div>
        ))}
      </div>

      {/* code-switch demo */}
      <div style={{
        marginTop: 28, padding: 22, borderRadius: 16,
        border: '1px solid var(--rule)',
        background: 'rgba(255,251,240,0.6)',
        display: 'flex', alignItems: 'center', gap: 28, flexWrap: 'wrap',
      }}>
        <div style={{ flex: '0 0 auto' }}>
          <div className="gl-mono" style={{
            fontSize: 11, color: 'var(--ink-3)', letterSpacing: '0.14em',
            textTransform: 'uppercase', marginBottom: 6,
          }}>Code-switching, handled</div>
          <div className="gl-display" style={{ fontSize: 'clamp(18px, 2vw, 26px)', maxWidth: 280 }}>
            Hindi and English in the same breath.
          </div>
        </div>
        <div style={{
          flex: 1, fontFamily: "'JetBrains Mono', monospace",
          fontSize: 'clamp(12px, 1.5vw, 15px)', lineHeight: 1.85, color: 'var(--ink)',
          minWidth: 240,
        }}>
          <span>"yaar </span>
          <CodeTok lang="hi">basically</CodeTok>
          <span> ye </span>
          <CodeTok lang="en">workflow</CodeTok>
          <span> mera </span>
          <CodeTok lang="hi">pura</CodeTok>
          <span> </span>
          <CodeTok lang="hi">badal</CodeTok>
          <span> </span>
          <CodeTok lang="hi">gaya</CodeTok>
          <span>, ek hi </span>
          <CodeTok lang="en">click</CodeTok>
          <span> mein."</span>
        </div>
      </div>
    </section>
  );
}

function CodeTok({ lang, children }) {
  const isHi = lang === 'hi';
  return (
    <span style={{
      padding: '1px 5px', borderRadius: 4,
      background: isHi ? 'rgba(214,58,26,0.12)' : 'rgba(95,107,58,0.14)',
      color: isHi ? 'var(--accent)' : 'var(--leaf)',
      border: isHi ? '1px solid rgba(214,58,26,0.25)' : '1px solid rgba(95,107,58,0.25)',
    }}>{children}</span>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL PROOF
export function SocialProof() {
  const tests = [
    {
      quote: "Finally, a tool that doesn't butcher Hinglish. My retention jumped 22% in two weeks of using the karaoke style.",
      name: 'Aarav Mehra', handle: '@aarav.makes', meta: '1.2M followers · finance creator',
      avatar: 'A', color: '#D63A1A',
    },
    {
      quote: "We caption 40 Reels a week for clients. Glish saved us a full editor's salary in month two.",
      name: 'Sneha Iyer', handle: '@brewstudio', meta: 'Brew Studio · Mumbai',
      avatar: 'S', color: '#F0B132',
    },
    {
      quote: "I tried Submagic, Captions, Veed. None of them understood 'thoda fast karo bhai'. Glish does.",
      name: 'Rohan Khanna', handle: '@rohan.shorts', meta: '480K followers · comedy',
      avatar: 'R', color: '#5C6B3A',
    },
    {
      quote: "The brand glossary alone is worth it. 'CRED' never gets transcribed as 'cred' anymore.",
      name: 'Ananya Reddy', handle: 'CRED · Brand', meta: 'Brand & content',
      avatar: 'C', color: '#1A130C',
    },
  ];

  return (
    <section className="gl-section" style={{ borderTop: '1px solid var(--rule-2)' }}>
      <div className="gl-social-header">
        <div>
          <span className="gl-eyebrow">12,000+ creators · 4.9 on G2</span>
          <h2 className="gl-display gl-section-h2" style={{ margin: '20px 0 0', maxWidth: 800 }}>
            Built with creators.{' '}
            <span className="gl-serif-it gl-section-h2-it" style={{ color: 'var(--accent)' }}>Loved</span>
            {' '}by them.
          </h2>
        </div>
        <div className="gl-stats-row">
          <Stat label="Reels captioned" value="2.4M+" />
          <span style={{ width: 1, height: 40, background: 'var(--rule)' }}></span>
          <Stat label="Hours saved/wk" value="9.6" />
          <span style={{ width: 1, height: 40, background: 'var(--rule)' }}></span>
          <Stat label="Avg. accuracy" value="96%" />
        </div>
      </div>

      <div className="gl-grid-social">
        {tests.map((t, i) => (
          <div key={i} style={{
            padding: 24, borderRadius: 18,
            background: i === 0 ? 'var(--accent)' : 'rgba(255,251,240,0.7)',
            color: i === 0 ? 'var(--accent-ink)' : 'var(--ink)',
            border: i === 0 ? 'none' : '1px solid var(--rule)',
            display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
            minHeight: 280,
          }}>
            <div>
              <span style={{
                fontFamily: "'Instrument Serif', serif", fontSize: 64, lineHeight: 0.8,
                color: i === 0 ? 'rgba(255,246,232,0.5)' : 'var(--accent)',
              }}>"</span>
              <p style={{
                margin: '4px 0 0',
                fontSize: i === 0 ? 19 : 15,
                lineHeight: 1.5,
                fontWeight: i === 0 ? 500 : 400,
                color: i === 0 ? 'var(--accent-ink)' : 'var(--ink)',
              }}>{t.quote}</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 20 }}>
              <span style={{
                width: 36, height: 36, borderRadius: '50%', background: t.color,
                color: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                fontWeight: 700, fontSize: 14, flex: '0 0 auto',
              }}>{t.avatar}</span>
              <div style={{ minWidth: 0 }}>
                <div style={{ fontSize: 13, fontWeight: 600 }}>{t.name}</div>
                <div style={{
                  fontSize: 11, opacity: 0.7,
                  fontFamily: "'JetBrains Mono', monospace",
                  whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                }}>{t.handle} · {t.meta}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Stat({ label, value }) {
  return (
    <div style={{ textAlign: 'left' }}>
      <div className="gl-display" style={{ fontSize: 28, color: 'var(--ink)', fontWeight: 700, lineHeight: 1 }}>{value}</div>
      <div style={{
        fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase',
        color: 'var(--ink-3)', marginTop: 4,
      }}>{label}</div>
    </div>
  );
}
