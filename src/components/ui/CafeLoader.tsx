import React, { useEffect, useState } from 'react';

export const CafeLoader: React.FC = () => {
  const [leaving, setLeaving] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Do not hold the page behind an arbitrary long splash screen.  The hero
    // signals readiness after its priority image is decoded; this is a safe
    // fallback for slow/error connections.
    const leave = () => setLeaving(true);
    const remove = () => setVisible(false);
    const onReady = () => window.setTimeout(leave, 180);
    window.addEventListener('hac:hero-ready', onReady, { once: true });
    const exitTimer = window.setTimeout(leave, 900);
    const removeTimer = window.setTimeout(remove, 1300);
    return () => {
      window.removeEventListener('hac:hero-ready', onReady);
      window.clearTimeout(exitTimer);
      window.clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className={`cafe-loader ${leaving ? 'cafe-loader--leaving' : ''}`} role="status" aria-label="Brewing your experience">
      <div className="cafe-loader__glow" />
      <div className="cafe-loader__content">
        <div className="cafe-loader__steam" aria-hidden="true"><i /><i /><i /></div>
        <div className="cafe-loader__cup" aria-hidden="true">
          <div className="cafe-loader__coffee" />
          <div className="cafe-loader__handle" />
        </div>
        <p className="cafe-loader__eyebrow">How About Coffee</p>
        <p className="cafe-loader__message">Brewing something lovely</p>
        <div className="cafe-loader__progress"><span /></div>
      </div>
    </div>
  );
};

export default CafeLoader;
