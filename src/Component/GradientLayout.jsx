import React, { useEffect, useRef } from 'react';

const GradientLayout = ({ children }) => {
  const interBubbleRef = useRef(null);

  useEffect(() => {
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    const move = () => {
      curX += (tgX - curX) / 20;
      curY += (tgY - curY) / 20;
      if (interBubbleRef.current) {
        interBubbleRef.current.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
      }
      requestAnimationFrame(move);
    };

    const handleMouseMove = (event) => {
      tgX = event.clientX;
      tgY = event.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);
    move();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[rgb(8,10,15)] to-[rgb(0,17,32)]">
      <svg className="absolute inset-0 w-full h-full opacity-30 mix-blend-soft-light" xmlns="http://www.w3.org/2000/svg">
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[rgba(18,113,255,0.8)] rounded-full w-4/5 h-4/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-3xl animate-moveVertical"></div>
        <div className="absolute inset-0 bg-[rgba(107,74,255,0.8)] rounded-full w-4/5 h-4/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-3xl animate-moveInCircle"></div>
        <div className="absolute inset-0 bg-[rgba(100,100,255,0.8)] rounded-full w-4/5 h-4/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-3xl animate-moveInCircle2"></div>
        <div className="absolute inset-0 bg-[rgba(50,160,220,0.8)] rounded-full w-4/5 h-4/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-3xl animate-moveHorizontal"></div>
        <div className="absolute inset-0 bg-[rgba(80,47,122,0.8)] rounded-full w-[160%] h-[160%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-3xl animate-moveInCircle3"></div>
        <div ref={interBubbleRef} className="absolute inset-0 bg-[rgba(140,100,255,0.8)] rounded-full w-full h-full -top-1/2 -left-1/2 blur-3xl"></div>
      </div>
      {children}
    </div>
  );
};

export default GradientLayout;