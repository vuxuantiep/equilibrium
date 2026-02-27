
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import WhoWeAre from './pages/WhoWeAre';
import WhatWeDoPage from './pages/WhatWeDoPage';
import GetInvolved from './pages/GetInvolved';
import Network from './pages/Network';
import News from './pages/News';
import Donation from './pages/Donation';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { LanguageProvider } from './contexts/LanguageContext';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/wer-wir-sind" element={<WhoWeAre />} />
              <Route path="/was-wir-tun" element={<WhatWeDoPage />} />
              <Route path="/engagieren" element={<GetInvolved />} />
              <Route path="/netzwerk" element={<Network />} />
              <Route path="/nachrichten" element={<News />} />
              <Route path="/spenden" element={<Donation />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
};

export default App;
