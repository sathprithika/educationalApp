import React from 'react';

export default function GrainBackground() {
  return (
    <div className="relative min-h-screen overflow-hidden" style={{ backgroundColor: '#F8F5EC' }}>
      {/* Gradient blur effects - top left purple, top right yellow */}
      <div 
        className="absolute top-0 left-0 w-96 h-96 rounded-full opacity-40"
        style={{
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, transparent 70%)',
          filter: 'blur(80px)',
          transform: 'translate(-20%, -20%)'
        }}
      />
      
      <div 
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-40"
        style={{
          background: 'radial-gradient(circle, rgba(251, 191, 36, 0.3) 0%, transparent 70%)',
          filter: 'blur(80px)',
          transform: 'translate(20%, -20%)'
        }}
      />

      <div 
        className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(236, 72, 153, 0.25) 0%, transparent 70%)',
          filter: 'blur(70px)'
        }}
      />

      {/* Fine grain texture overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3.5' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '150px 150px',
          opacity: 0.25,
          mixBlendMode: 'overlay'
        }}
      />
    </div>
  );
}