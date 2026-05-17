// homepage-bot.jsx — founder story, pricing, final CTA, footer.

import React from 'react';
import { GlishLogo, Marigold } from './theme.jsx';

// ─────────────────────────────────────────────────────────────────────────────
// FOUNDER STORY
export function FounderStory() {
  return (
    <section className="gl-section" style={{
      borderTop: '1px solid var(--rule-2)',
      background: 'var(--ink)',
      color: 'var(--bg)',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* background ornaments */}
      <div aria-hidden="true" style={{
        position: 'absolute', right: -180, top: -180, width: 600, height: 600,
        borderRadius: '50%', border: '1px dashed rgba(240,177,50,0.25)', pointerEvents: 'none',
      }}></div>
      <div aria-hidden="true" style={{
        position: 'absolute', right: -100, top: -100, width: 440, height: 440,
        borderRadius: '50%', border: '1px dashed rgba(240,177,50,0.2)', pointerEvents: 'none',
      }}></div>

      <div className="gl-grid-founder">
        {/* left column */}
        <div>
          <span className="gl-eyebrow gl-noindi" style={{
            color: 'var(--marigold)', borderColor: 'rgba(240,177,50,0.3)',
          }}>
            <span style={{ color: 'var(--marigold)' }}>★</span> Built in Mumbai · For desi creators
          </span>

          <h2 className="gl-display gl-founder-h2" style={{ margin: '24px 0 28px', color: 'var(--bg)', lineHeight: 1.02 }}>
            We made it because<br />
            <span className="gl-serif-it gl-founder-it" style={{ color: 'var(--marigold)' }}>
              nobody else would.
            </span>
          </h2>

          <div style={{
            fontSize: 17, lineHeight: 1.6, color: 'rgba(255,246,232,0.78)',
            maxWidth: 540, display: 'flex', flexDirection: 'column', gap: 14,
          }}>
            <p style={{ margin: 0 }}>
              Every captioning tool out there is built for English. The ones that "support Hindi" just spit out Devanagari nobody wants on a Reel — and they butcher every "yaar", "bhai", "matlab" along the way.
            </p>
            <p style={{ margin: 0 }}>
              We're three editors and one ML engineer from Mumbai and Bangalore. We've each shipped 1,000+ Reels for Indian creators and brands. Glish is what we wish we'd had three years ago.
            </p>
          </div>

          <div style={{ marginTop: 32, display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{ display: 'flex' }}>
              {['#D63A1A', '#F0B132', '#5C6B3A', '#B85A2A'].map((c, i) => (
                <span key={i} style={{
                  width: 40, height: 40, borderRadius: '50%', background: c,
                  border: '2px solid var(--ink)',
                  marginLeft: i === 0 ? 0 : -10,
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  color: '#fff', fontWeight: 700, fontSize: 14,
                }}>{['M', 'P', 'A', 'R'][i]}</span>
              ))}
            </div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--bg)' }}>
                Meera, Pranav, Aanya & Rohit
              </div>
              <div style={{ fontSize: 12, color: 'rgba(255,246,232,0.6)' }}>
                Founders · ex-Dharma, ex-MX Player, ex-Razorpay
              </div>
            </div>
          </div>
        </div>

        {/* right column — sticky notes */}
        <div className="gl-founder-notes" style={{ position: 'relative', minHeight: 420 }}>
          <div className="gl-founder-note-1" style={{
            padding: 16, background: 'var(--marigold)', color: '#2a1c08',
            borderRadius: 4, boxShadow: '0 20px 40px -10px rgba(0,0,0,0.4)',
            fontFamily: "'Instrument Serif', serif", fontStyle: 'italic',
            fontSize: 22, lineHeight: 1.25,
          }}>
            "If they won't build for us, we'll build for ourselves."
            <div style={{
              fontSize: 11, fontStyle: 'normal', marginTop: 12,
              fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.1em',
            }}>— DAY 0, AUG 2024</div>
          </div>

          <div className="gl-founder-note-2" style={{
            padding: 14, background: 'var(--accent)', color: 'var(--accent-ink)',
            borderRadius: 4, boxShadow: '0 20px 40px -10px rgba(0,0,0,0.5)',
            fontSize: 13, lineHeight: 1.4,
          }}>
            <div style={{
              fontFamily: "'JetBrains Mono', monospace", fontSize: 10,
              letterSpacing: '0.1em', marginBottom: 6, opacity: 0.85,
            }}>ETA TO V1 →</div>
            <div className="gl-display" style={{ fontSize: 38, fontWeight: 700, lineHeight: 1 }}>6 months</div>
            <div style={{ marginTop: 6, fontSize: 11 }}>
              50 beta creators · 3,200 Reels · zero outside funding.
            </div>
          </div>

          <div className="gl-founder-note-3" style={{
            padding: 14, background: '#fff', color: '#1a1410',
            borderRadius: 4, boxShadow: '0 20px 40px -10px rgba(0,0,0,0.4)',
            fontFamily: "'Instrument Serif', serif", fontSize: 16,
          }}>
            "kuch toh banao yaar jo finally hindi samajh sake"
            <div style={{
              fontSize: 10, fontFamily: "'JetBrains Mono', monospace",
              color: '#999', marginTop: 8,
            }}>— Tanmay, beta tester #003</div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// PRICING
export function Pricing() {
  const tiers = [
    {
      name: 'Free',
      price: '₹0',
      period: '/forever',
      blurb: 'For trying it out.',
      cta: 'Start free',
      ctaStyle: 'ghost',
      features: [
        '15 minutes of video / month',
        'All 8 languages',
        '4 caption styles',
        '720p export · with watermark',
        'Email support',
      ],
    },
    {
      name: 'Creator',
      price: '₹299',
      period: '/month',
      blurb: 'For daily Reels & Shorts.',
      cta: 'Get Creator',
      ctaStyle: 'primary',
      featured: true,
      tag: 'Most popular',
      features: [
        '300 minutes of video / month',
        'All 40+ caption styles + custom',
        '1080p · zero watermark',
        'Brand glossary & saved templates',
        'Priority processing (30s avg)',
        'Word-level editor',
      ],
    },
    {
      name: 'Studio',
      price: '₹899',
      period: '/month',
      blurb: 'For editors, agencies & brands.',
      cta: 'Talk to us',
      ctaStyle: 'dark',
      features: [
        'Unlimited video',
        '5 seats included · per-channel kits',
        'API access · Zapier · n8n',
        'Bulk processing (50 at a time)',
        'White-label exports',
        'Dedicated Slack channel',
      ],
    },
  ];

  return (
    <section id="pricing" className="gl-section" style={{ borderTop: '1px solid var(--rule-2)' }}>
      <div style={{ textAlign: 'center', marginBottom: 48 }}>
        <span className="gl-eyebrow">Pricing in ₹ · UPI welcome</span>
        <h2 className="gl-display gl-section-h2" style={{ margin: '20px 0 16px' }}>
          Priced for{' '}
          <span className="gl-serif-it gl-section-h2-it" style={{ color: 'var(--accent)' }}>India.</span>
          {' '}Not converted from $.
        </h2>
        <p style={{ fontSize: 17, color: 'var(--ink-2)', maxWidth: 580, margin: '0 auto', lineHeight: 1.55 }}>
          Cancel anytime. No "starts at" sneak-pricing. What you see is what you pay — in rupees, not crores.
        </p>
        <div style={{
          marginTop: 22, display: 'inline-flex', alignItems: 'center', gap: 8,
          padding: 4, borderRadius: 999, border: '1px solid var(--rule)',
        }}>
          <span style={{
            padding: '8px 16px', fontSize: 13, borderRadius: 999,
            background: 'var(--ink)', color: 'var(--bg)', fontWeight: 600,
          }}>Monthly</span>
          <span style={{ padding: '8px 16px', fontSize: 13, color: 'var(--ink-2)' }}>
            Yearly · 2 months free
          </span>
        </div>
      </div>

      <div className="gl-grid-pricing">
        {tiers.map((t) => (
          <div key={t.name} className={t.featured ? 'gl-pricing-featured' : ''} style={{
            padding: 28, borderRadius: 22, position: 'relative',
            background: t.featured ? 'var(--ink)' : 'rgba(255,251,240,0.6)',
            color: t.featured ? 'var(--bg)' : 'var(--ink)',
            border: t.featured ? '1px solid var(--ink)' : '1px solid var(--rule)',
            boxShadow: t.featured ? '0 30px 60px -20px rgba(20,10,0,0.4)' : 'none',
            transform: t.featured ? 'translateY(-12px)' : 'translateY(0)',
          }}>
            {t.tag && (
              <span style={{
                position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)',
                padding: '4px 14px', background: 'var(--marigold)', color: '#2a1c08',
                fontSize: 11, fontWeight: 700, borderRadius: 999, letterSpacing: '0.06em',
                textTransform: 'uppercase', fontFamily: "'JetBrains Mono', monospace",
                whiteSpace: 'nowrap',
              }}>{t.tag}</span>
            )}
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
              <div className="gl-display" style={{ fontSize: 24, fontWeight: 700 }}>{t.name}</div>
              {t.featured && <Marigold size={28} color="var(--marigold)" />}
            </div>
            <div style={{ marginTop: 18, display: 'flex', alignItems: 'baseline', gap: 6 }}>
              <span className="gl-display" style={{
                fontSize: 'clamp(44px, 5vw, 64px)', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1,
              }}>{t.price}</span>
              <span style={{
                fontSize: 14,
                color: t.featured ? 'rgba(255,246,232,0.6)' : 'var(--ink-3)',
              }}>{t.period}</span>
            </div>
            <div style={{
              marginTop: 8, fontSize: 14,
              color: t.featured ? 'rgba(255,246,232,0.7)' : 'var(--ink-2)',
            }}>{t.blurb}</div>

            <button
              className={`gl-btn ${t.ctaStyle === 'primary' ? 'gl-primary' : t.ctaStyle === 'dark' ? 'gl-dark' : 'gl-ghost'}`}
              style={{
                width: '100%', justifyContent: 'center', marginTop: 24,
                ...(t.ctaStyle === 'dark' ? { background: 'var(--accent-ink)', color: 'var(--ink)' } : {}),
                ...(t.featured && t.ctaStyle === 'ghost' ? { borderColor: 'rgba(255,246,232,0.25)', color: 'var(--bg)' } : {}),
              }}
            >
              {t.cta} <span style={{ marginLeft: 'auto' }}>→</span>
            </button>

            <div style={{
              marginTop: 24, paddingTop: 20,
              borderTop: `1px solid ${t.featured ? 'rgba(255,246,232,0.12)' : 'var(--rule)'}`,
              display: 'flex', flexDirection: 'column', gap: 10,
            }}>
              {t.features.map((f, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14 }}>
                  <span style={{
                    flex: '0 0 auto', width: 16, height: 16, borderRadius: '50%',
                    background: t.featured ? 'var(--marigold)' : 'var(--accent)',
                    color: t.featured ? '#2a1c08' : 'var(--accent-ink)',
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 10, fontWeight: 700, marginTop: 3,
                  }}>✓</span>
                  <span style={{ color: t.featured ? 'rgba(255,246,232,0.92)' : 'var(--ink)' }}>{f}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div style={{
        marginTop: 32, textAlign: 'center', fontSize: 13, color: 'var(--ink-3)',
        fontFamily: "'JetBrains Mono', monospace",
      }}>
        UPI · cards · Razorpay · invoiced billing for studios · 7-day full refund, no questions
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// FINAL CTA
export function FinalCTA() {
  return (
    <section className="gl-section" style={{
      borderTop: '1px solid var(--rule-2)',
      paddingTop: 100, paddingBottom: 100,
      position: 'relative', overflow: 'hidden', textAlign: 'center',
    }}>
      {/* big ghost type */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
        pointerEvents: 'none', overflow: 'hidden',
      }}>
        <span className="gl-display" style={{
          fontSize: 'clamp(120px, 28vw, 360px)',
          color: 'transparent',
          WebkitTextStroke: '1px var(--rule)',
          fontWeight: 700, letterSpacing: '-0.06em', lineHeight: 0.9,
        }}>glish</span>
      </div>

      <div style={{ position: 'relative' }}>
        <Marigold size={48} />
        <h2 className="gl-display gl-cta-h2" style={{ margin: '24px auto 24px', maxWidth: 1000, lineHeight: 1.0 }}>
          Stop typing subtitles by hand.<br />
          <span className="gl-serif-it gl-cta-it" style={{ color: 'var(--accent)' }}>
            Start shipping Reels.
          </span>
        </h2>
        <p style={{ fontSize: 19, color: 'var(--ink-2)', maxWidth: 560, margin: '0 auto 36px', lineHeight: 1.5 }}>
          Your first three Reels are on us. No signup wall, no credit card.
        </p>
        <div style={{ display: 'inline-flex', gap: 12, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
          <button className="gl-btn gl-primary" style={{ height: 60, padding: '0 28px', fontSize: 17 }}>
            Caption your first Reel →
          </button>
          <button className="gl-btn gl-ghost" style={{ height: 60, padding: '0 24px', fontSize: 16 }}>
            Watch 60-sec demo
          </button>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// FOOTER
export function Footer() {
  const cols = [
    { title: 'Product',   links: ['Features', 'Caption styles', 'Languages', 'Editor', 'API'] },
    { title: 'Use cases', links: ['Reels creators', 'Shorts creators', 'Agencies', 'Brands', 'Podcasters'] },
    { title: 'Company',   links: ['About', 'Manifesto', 'Careers', 'Press', 'Contact'] },
    { title: 'Resources', links: ['Templates gallery', 'Hinglish guide', 'Blog', 'Changelog', 'Status'] },
  ];

  return (
    <footer className="gl-section" style={{
      borderTop: '1px solid var(--rule)',
      paddingTop: 56, paddingBottom: 36,
      background: 'var(--bg-2)',
    }}>
      <div className="gl-grid-footer">
        <div className="gl-footer-brand">
          <GlishLogo size={32} />
          <p style={{ marginTop: 16, fontSize: 14, color: 'var(--ink-2)', maxWidth: 280, lineHeight: 1.5 }}>
            Hinglish subtitles for short-form creators. Made in Mumbai, for India and beyond.
          </p>
          <div style={{ marginTop: 16, display: 'flex', gap: 8 }}>
            {['IG', 'YT', 'X', 'in'].map((s) => (
              <a key={s} href="#" style={{
                width: 32, height: 32, borderRadius: 8, border: '1px solid var(--rule)',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 11, fontWeight: 600, color: 'var(--ink-2)',
                fontFamily: "'JetBrains Mono', monospace", textDecoration: 'none',
              }}>{s}</a>
            ))}
          </div>
        </div>

        {cols.map((c) => (
          <div key={c.title}>
            <div className="gl-mono" style={{
              fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase',
              color: 'var(--ink-3)', marginBottom: 14,
            }}>{c.title}</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {c.links.map((l) => (
                <a key={l} href="#" style={{ fontSize: 14, color: 'var(--ink)', textDecoration: 'none' }}>{l}</a>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="gl-footer-bottom">
        <span>© 2026 Glish Labs Pvt. Ltd. · Mumbai 400050</span>
        <span className="gl-footer-legal" style={{ display: 'flex', gap: 18 }}>
          <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy</a>
          <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Terms</a>
          <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Refunds</a>
          <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>DPDP compliance</a>
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--leaf)' }}></span>
          all systems normal
        </span>
      </div>
    </footer>
  );
}
