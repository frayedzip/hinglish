// homepage-usecases.jsx — Veed-style "for every use case" horizontal carousel.

import React, { useRef, useState, useEffect, useCallback } from 'react';
import { PhoneCaption } from './homepage-top.jsx';

export function UseCaseCarousel() {
  const items = [
    {
      label: 'Product Demo',
      vibe: 'sun',
      caption: { kind: 'karaoke', lines: ['app khole', 'aur chalu karo'] },
      handle: '@desibakes',
      mute: false,
    },
    {
      label: 'Ad',
      vibe: 'green',
      caption: { kind: 'word', lines: ['JHAKAAS'] },
      handle: '@boat',
      cta: 'Get the prompt',
      mute: false,
    },
    {
      label: 'Testimonial',
      vibe: 'pink',
      caption: { kind: 'clean', lines: ['"workflow ekdum', 'badal diya bhai"'] },
      handle: '@aarav.makes',
      mute: true,
      cta: 'See full story',
    },
    {
      label: 'Thought Leadership',
      vibe: 'cool',
      caption: { kind: 'hormozi', lines: ['HINGLISH HI', 'FUTURE HAI'] },
      handle: '@thehindiguy',
      mute: false,
    },
    {
      label: 'Explainer',
      vibe: 'night',
      caption: { kind: 'pop', lines: ['matlab', 'samjho!'] },
      handle: '@rohan.shorts',
      mute: false,
    },
  ];

  const railRef = useRef(null);
  const [active, setActive] = useState(0);

  const lastIdx = items.length - 1;

  const scrollToIndex = useCallback((i) => {
    const rail = railRef.current;
    if (!rail) return;
    const clamped = Math.max(0, Math.min(i, lastIdx));
    const maxScroll = rail.scrollWidth - rail.clientWidth;
    rail.scrollTo({ left: (clamped / lastIdx) * maxScroll, behavior: 'smooth' });
  }, [lastIdx]);

  const syncActive = useCallback(() => {
    const rail = railRef.current;
    if (!rail) return;
    const maxScroll = rail.scrollWidth - rail.clientWidth;
    if (maxScroll <= 0) { setActive(0); return; }
    setActive(Math.round((rail.scrollLeft / maxScroll) * lastIdx));
  }, [lastIdx]);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(syncActive);
    };
    rail.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      rail.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(raf);
    };
  }, [syncActive]);

  // mouse drag-to-scroll with inertial momentum (touch uses native scroll)
  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    let dragging = false;
    let startX = 0;
    let startScroll = 0;
    let lastX = 0;
    let lastT = 0;
    let velocity = 0;
    let momentum = 0;

    const stopMomentum = () => cancelAnimationFrame(momentum);

    const onDown = (e) => {
      if (e.pointerType === 'touch' || e.button !== 0) return;
      dragging = true;
      stopMomentum();
      startX = lastX = e.clientX;
      startScroll = rail.scrollLeft;
      lastT = e.timeStamp;
      velocity = 0;
      rail.classList.add('is-dragging');
      rail.setPointerCapture(e.pointerId);
    };

    const onMove = (e) => {
      if (!dragging) return;
      const dx = e.clientX - startX;
      rail.scrollLeft = startScroll - dx;
      const dt = e.timeStamp - lastT;
      if (dt > 0) velocity = (e.clientX - lastX) / dt;
      lastX = e.clientX;
      lastT = e.timeStamp;
    };

    const onUp = (e) => {
      if (!dragging) return;
      dragging = false;
      rail.classList.remove('is-dragging');
      try { rail.releasePointerCapture(e.pointerId); } catch {}
      const snap = () => {
        const card = rail.querySelector('[data-uc-card]');
        if (!card) return;
        const step = card.offsetWidth + 18; // card + gap
        const maxScroll = rail.scrollWidth - rail.clientWidth;
        const target = Math.max(0, Math.min(Math.round(rail.scrollLeft / step) * step, maxScroll));
        rail.scrollTo({ left: target, behavior: 'smooth' });
      };
      let v = velocity * 16; // px per frame
      const decay = () => {
        if (Math.abs(v) < 0.5) { snap(); return; }
        rail.scrollLeft -= v;
        v *= 0.93;
        momentum = requestAnimationFrame(decay);
      };
      decay();
    };

    rail.addEventListener('pointerdown', onDown);
    rail.addEventListener('pointermove', onMove);
    rail.addEventListener('pointerup', onUp);
    rail.addEventListener('pointercancel', onUp);
    return () => {
      stopMomentum();
      rail.removeEventListener('pointerdown', onDown);
      rail.removeEventListener('pointermove', onMove);
      rail.removeEventListener('pointerup', onUp);
      rail.removeEventListener('pointercancel', onUp);
    };
  }, []);

  const atStart = active <= 0;
  const atEnd = active >= items.length - 1;

  return (
    <section className="gl-section" style={{ borderTop: '1px solid var(--rule-2)', overflow: 'hidden' }}>
      <div className="gl-uc-header">
        <div style={{ maxWidth: 720 }}>
          <span className="gl-eyebrow">Use cases · all the formats</span>
          <h2 className="gl-display gl-section-h2" style={{ margin: '20px 0 16px' }}>
            Any kind of Reel.<br />
            <span className="gl-serif-it gl-section-h2-it" style={{ color: 'var(--accent)' }}>One workflow.</span>
          </h2>
          <p style={{ fontSize: 17, color: 'var(--ink-2)', maxWidth: 540, lineHeight: 1.55 }}>
            Demos, ads, talking-head testimonials, explainers — glish captions every format Indian creators actually post, in the styles they actually use.
          </p>
        </div>
        <div style={{ flexShrink: 0 }}>
          <CarouselNav
            onPrev={() => scrollToIndex(active - 1)}
            onNext={() => scrollToIndex(active + 1)}
            atStart={atStart}
            atEnd={atEnd}
          />
        </div>
      </div>

      {/* card rail — scrollable */}
      <div style={{ position: 'relative' }}>
        <div ref={railRef} className="gl-usecase-rail">
          <div style={{
            display: 'flex', gap: 18, paddingBottom: 8,
            alignItems: 'flex-start', width: 'max-content',
          }}>
            {items.map((it, i) => (
              <UseCaseCard key={i} item={it} index={i} />
            ))}
          </div>
        </div>

        {/* gradient fade on right — pinned outside the scroll container */}
        <div aria-hidden="true" style={{
          position: 'absolute', top: 0, bottom: 0, right: 0, width: 80, pointerEvents: 'none',
          background: 'linear-gradient(90deg, transparent, var(--bg))',
          opacity: atEnd ? 0 : 1, transition: 'opacity .2s',
        }}></div>
      </div>

      {/* dots + counter row */}
      <div style={{
        marginTop: 28, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        flexWrap: 'wrap', gap: 12,
      }}>
        <div className="gl-mono" style={{
          fontSize: 12, color: 'var(--ink-3)', letterSpacing: '0.12em', textTransform: 'uppercase',
        }}>{String(active + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')} formats</div>
        <CarouselDots active={active} count={items.length} onDot={scrollToIndex} />
        <a href="#" className="gl-mono" style={{ fontSize: 12, color: 'var(--ink-2)', letterSpacing: '0.06em' }}>
          View all 12 →
        </a>
      </div>
    </section>
  );
}

function UseCaseCard({ item, index }) {
  return (
    <div data-uc-card className="gl-uc-card" style={{
      borderRadius: 20, overflow: 'hidden', position: 'relative',
      background: '#0a0a0a',
      boxShadow: '0 24px 60px -20px rgba(60,30,10,0.25)',
      border: '1px solid rgba(26,19,12,0.06)',
    }}>
      <div className={`gl-video gl-vibe-${item.vibe}`} style={{ width: '100%', height: '100%' }}>
        {/* category label */}
        <div style={{
          position: 'absolute', top: 14, left: 14,
          padding: '7px 12px', borderRadius: 10,
          background: 'rgba(8,6,4,0.78)',
          backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)',
          color: '#fff', fontSize: 13, fontWeight: 500, letterSpacing: '-0.01em',
          fontFamily: 'Hanken Grotesk, sans-serif', zIndex: 4,
        }}>{item.label}</div>

        {/* mute button */}
        <div style={{
          position: 'absolute', top: 14, right: 14,
          width: 32, height: 32, borderRadius: 10,
          background: 'rgba(255,255,255,0.92)',
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          color: '#0a0a0a', fontSize: 14, zIndex: 4,
        }}>
          {item.mute ? <MuteIcon /> : <SoundIcon />}
        </div>

        {/* caption */}
        <PhoneCaption caption={item.caption} />

        {/* CTA overlay */}
        {item.cta && (
          <button style={{
            position: 'absolute', bottom: 70, left: 14,
            height: 38, padding: '0 18px', borderRadius: 999,
            background: '#5BD05B', color: '#0a3a0a',
            border: 'none', fontSize: 14, fontWeight: 600,
            fontFamily: 'Hanken Grotesk, sans-serif',
            boxShadow: '0 4px 12px rgba(0,0,0,0.25)',
            zIndex: 4, cursor: 'pointer',
          }}>{item.cta}</button>
        )}

        {/* handle */}
        <div style={{
          position: 'absolute', bottom: 14, left: 14, right: 14, zIndex: 3,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          color: 'rgba(255,255,255,0.92)', fontSize: 12, fontWeight: 600,
        }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            <span style={{ width: 20, height: 20, borderRadius: '50%', background: 'var(--marigold)', flex: '0 0 auto' }}></span>
            {item.handle}
          </span>
          <span style={{
            padding: '3px 8px', borderRadius: 6, background: 'rgba(0,0,0,0.45)',
            fontSize: 10, fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.06em',
          }}>0:0{(index + 8) % 10}</span>
        </div>
      </div>
    </div>
  );
}

function CarouselNav({ onPrev, onNext, atStart, atEnd }) {
  const btn = {
    width: 44, height: 44, borderRadius: '50%',
    background: 'transparent', color: 'var(--ink)',
    border: '1px solid var(--rule)',
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    fontSize: 16, cursor: 'pointer',
  };
  return (
    <div style={{ display: 'flex', gap: 8 }}>
      <button
        type="button"
        onClick={onPrev}
        disabled={atStart}
        style={{ ...btn, opacity: atStart ? 0.35 : 1, cursor: atStart ? 'not-allowed' : 'pointer' }}
        aria-label="Previous"
      >←</button>
      <button
        type="button"
        onClick={onNext}
        disabled={atEnd}
        style={{
          ...btn, background: 'var(--ink)', color: 'var(--bg)', borderColor: 'var(--ink)',
          opacity: atEnd ? 0.35 : 1, cursor: atEnd ? 'not-allowed' : 'pointer',
        }}
        aria-label="Next"
      >→</button>
    </div>
  );
}

function CarouselDots({ active = 0, count = 5, onDot }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
      {Array.from({ length: count }).map((_, i) => (
        <button
          key={i}
          type="button"
          onClick={() => onDot && onDot(i)}
          aria-label={`Go to slide ${i + 1}`}
          style={{
            width: i === active ? 18 : 6, height: 6, borderRadius: 3,
            padding: 0, border: 'none', cursor: 'pointer',
            background: i === active ? 'var(--ink)' : 'var(--rule)',
            transition: 'width .2s',
          }}
        ></button>
      ))}
    </div>
  );
}

function MuteIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 6h2.5L8 3.5v9L5.5 10H3V6z" fill="currentColor"/>
      <path d="M11 6l4 4M15 6l-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  );
}
function SoundIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 6h2.5L8 3.5v9L5.5 10H3V6z" fill="currentColor"/>
      <path d="M11 5.5c.8.7 1.3 1.7 1.3 2.5s-.5 1.8-1.3 2.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" fill="none"/>
    </svg>
  );
}
