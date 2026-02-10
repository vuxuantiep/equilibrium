
import React from 'react';
import { Hero } from '../components/Hero';
import { Mission } from '../components/Mission';
import { MainProjects } from '../components/MainProjects';
import { HowToHelp } from '../components/HowToHelp';
import { MediaSection } from '../components/MediaSection';
import { Partners } from '../components/Partners';
import { ImpactStats } from '../components/ImpactStats';

const Home: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-1000">
      <Hero />
      <Partners />
      <Mission />
      <MainProjects />
      <ImpactStats />
      <HowToHelp />
      <MediaSection />
    </div>
  );
};

export default Home;
