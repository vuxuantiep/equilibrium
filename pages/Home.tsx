import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Hero } from '../components/Hero';
import { Mission } from '../components/Mission';
import { MainProjects } from '../components/MainProjects';
import { HowToHelp } from '../components/HowToHelp';
import { MediaSection } from '../components/MediaSection';
import { Partners } from '../components/Partners';
import { ImpactStats } from '../components/ImpactStats';
import { SocialFeed } from '../components/SocialFeed';

const Home: React.FC = () => {
  const { language } = useLanguage();
  return (
    <div key={language} className="animate-in fade-in duration-1000">
      <Hero />
      <Partners />
      <Mission />
      <MainProjects />
      <ImpactStats />
      <HowToHelp />
      <SocialFeed />
      <MediaSection />
    </div>
  );
};

export default Home;
