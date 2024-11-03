import React from 'react';

export const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* League of Legends background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(25,76,138,0.8),rgba(9,9,121,0.6)_40%,rgba(2,0,36,0.9)_100%)]" />
      <div 
        className="absolute inset-0 bg-center bg-cover opacity-20"
        style={{ 
          backgroundImage: 'url("https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt0b4c2d9db3fd3df5/5ef1374f6aaf2924fd231f89/league-client-update-header.jpg")'
        }} 
      />
      
      {/* League Runes */}
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-16 h-16 opacity-20"
          style={{
            left: `${50 + Math.cos(2 * Math.PI * i / 8) * 30}%`,
            top: `${50 + Math.sin(2 * Math.PI * i / 8) * 30}%`,
            backgroundImage: 'url("https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-static-assets/global/default/images/magic-circle-1.png")',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            transform: `rotate(${45 * i}deg)`,
            animation: `runeRotate ${15 + i * 2}s linear infinite`
          }}
        />
      ))}
      
      {/* Magical circles */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] animate-spin-slow opacity-10">
        <div className="absolute inset-0 border-4 border-yellow-400/50 rounded-full animate-magic-pulse" />
        <div className="absolute inset-4 border-4 border-blue-400/50 rounded-full rotate-45 animate-magic-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute inset-8 border-4 border-purple-400/50 rounded-full -rotate-45 animate-magic-pulse" style={{ animationDelay: '2s' }} />
      </div>
    </div>
  );
};