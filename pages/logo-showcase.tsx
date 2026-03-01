import React, { useState } from 'react';
import '../styles/logo-showcase.css';

const LogoShowcase: React.FC = () => {
  const [currentZoom, setCurrentZoom] = useState(2.2);
  const minZoom = 1.5;
  const maxZoom = 3.5;
  const zoomStep = 0.2;

  const zoomIn = () => {
    if (currentZoom < maxZoom) {
      setCurrentZoom(currentZoom + zoomStep);
    }
  };

  const zoomOut = () => {
    if (currentZoom > minZoom) {
      setCurrentZoom(currentZoom - zoomStep);
    }
  };

  const resetZoom = () => {
    setCurrentZoom(2.2);
  };

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '+' || e.key === '=') zoomIn();
      if (e.key === '-') zoomOut();
      if (e.key === '0') resetZoom();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentZoom]);

  return (
    <div className="logo-showcase-wrapper">
      <div className="header">
        <h1>✨ Equilibrium</h1>
        <p>Logo Showcase - Vergrößert & Optimiert</p>
      </div>

      <div className="main-container">
        <div className="logo-showcase">
          <div className="logo-container">
            <div className="logo-display">
              <img
                src="/Tanzania.png"
                alt="Equilibrium Logo"
                className="logo-img"
                style={{ transform: `scale(${currentZoom}) rotateY(0deg)` }}
              />
            </div>
          </div>
        </div>

        <div className="info-section">
          <h2>Über Equilibrium</h2>
          <p>
            Unser Logo wurde optimiert und vergrößert, um die Schrift deutlich lesbar zu machen.
            Der rechte Text wurde entfernt für ein fokussiertes visuelles Erlebnis.
          </p>

          <div className="features">
            <div className="feature">
              <div className="feature-icon">🎨</div>
              <div className="feature-title">Modernes Design</div>
              <div className="feature-text">Zeitgenössische Ästhetik</div>
            </div>
            <div className="feature">
              <div className="feature-icon">📱</div>
              <div className="feature-title">Responsiv</div>
              <div className="feature-text">Alle Bildschirmgrößen</div>
            </div>
            <div className="feature">
              <div className="feature-icon">⚡</div>
              <div className="feature-title">Optimiert</div>
              <div className="feature-text">Schnell & effizient</div>
            </div>
            <div className="feature">
              <div className="feature-icon">🎯</div>
              <div className="feature-title">Fokussiert</div>
              <div className="feature-text">Klare Präsentation</div>
            </div>
          </div>
        </div>

        <div className="controls-section">
          <button className="btn btn-primary" onClick={zoomIn}>
            <span>🔍</span> Vergrößern
          </button>
          <button className="btn btn-primary" onClick={zoomOut}>
            <span>🔍</span> Verkleinern
          </button>
          <div className="zoom-display">
            <span>{Math.round(currentZoom * 100)}%</span>
          </div>
          <button className="btn btn-secondary" onClick={resetZoom}>
            <span>↺</span> Zurücksetzen
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoShowcase;