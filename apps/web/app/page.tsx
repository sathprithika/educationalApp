// import React from 'react';

// export default function GrainBackground() {
//   return (
//     <div className="relative min-h-screen overflow-hidden" style={{ backgroundColor: '#F8F5EC' }}>
//       {/* Fine grain texture overlay */}
//       <div 
//         className="absolute inset-0 pointer-events-none"
//         style={{
//           backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3.5' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
//           backgroundSize: '150px 150px',
//           opacity: 0.25,
//           mixBlendMode: 'overlay'
//         }}
//       />
//     </div>
//   );
// }


// import React from 'react';

// export default function GrainBackground() {
//   return (
//     <div className="relative min-h-screen overflow-hidden" style={{ backgroundColor: '#F8F5EC' }}>
//       {/* Fine grain texture overlay - MORE TRANSPARENT */}
//       <div 
//         className="absolute inset-0 pointer-events-none"
//         style={{
//           backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3.5' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
//           backgroundSize: '150px 150px',
//           opacity: 0.1,
//           mixBlendMode: 'overlay'
//         }}
//       />
//     </div>
//   );
// }



import React from 'react';

export default function GrainBackground() {
  return (
    <div className="relative min-h-screen overflow-hidden" style={{ backgroundColor: '#F8F5EC' }}>
      {/* Fine grain texture overlay - VISIBLE BUT TRANSPARENT */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3.5' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '150px 150px',
          opacity: 0.15,
          mixBlendMode: 'multiply'
        }}
      />
    </div>
  );
}