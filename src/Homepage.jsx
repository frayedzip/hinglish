// Homepage.jsx — Paper homepage composition.

import React from 'react';
import { PAPER } from './theme.jsx';
import { Nav, Hero, LogosStrip, HowItWorks } from './homepage-top.jsx';
import { CaptionGallery, Languages, SocialProof } from './homepage-mid.jsx';
import { UseCaseCarousel } from './homepage-usecases.jsx';
import { FounderStory, Pricing, FinalCTA, Footer } from './homepage-bot.jsx';

export default function Homepage() {
  const headline = {
    before: 'Subtitle your Reels in',
    italic: 'real Hinglish',
    after: '.',
  };

  return (
    <div className="gl-root gl-airy" style={PAPER.cssVars}>
      <Nav />
      <Hero headline={headline} />
      <LogosStrip />
      <HowItWorks />
      <CaptionGallery />
      <UseCaseCarousel />
      <Languages />
      <SocialProof />
      <FounderStory />
      <Pricing />
      <FinalCTA />
      <Footer />
    </div>
  );
}
