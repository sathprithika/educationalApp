import React from 'react';

export default function GrainBackground() {
  return (
    <div className="relative min-h-screen overflow-hidden" style={{ backgroundColor: '#F5F5F5' }}>
      {/* Heavy grain texture - Dark variant */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.5'/%3E%3C/svg%3E")`,
          opacity: 0.6,
          mixBlendMode: 'darken'
        }}
      />
      
      {/* Medium grain layer */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain2'%3E%3CfeTurbulence type='turbulence' baseFrequency='1.2' numOctaves='3' seed='2'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain2)' opacity='0.4'/%3E%3C/svg%3E")`,
          opacity: 0.5,
          mixBlendMode: 'multiply'
        }}
      />
      
      {/* Fine detailed grain */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain3'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2.5' numOctaves='5' seed='10'/%3E%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='0 1'/%3E%3C/feComponentTransfer%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain3)' opacity='0.35'/%3E%3C/svg%3E")`,
          opacity: 0.45,
          mixBlendMode: 'overlay'
        }}
      />
      
      {/* Extra contrast grain layer */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 1px,
              rgba(0,0,0,0.03) 1px,
              rgba(0,0,0,0.03) 2px
            ),
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 1px,
              rgba(0,0,0,0.03) 1px,
              rgba(0,0,0,0.03) 2px
            )
          `,
          opacity: 0.4
        }}
      />
      
      {/* Noise pattern for visible grain */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='noise'%3E%3CfeTurbulence baseFrequency='3' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.6'/%3E%3C/svg%3E")`,
          opacity: 0.65,
          mixBlendMode: 'multiply'
        }}
      />
    </div>
  );
}