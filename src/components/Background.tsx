import React from 'react';

export const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* YouTube video as background */}
      <iframe
        src="https://www.youtube.com/embed/mDYqT0_9VR4?autoplay=1&mute=1&loop=1&controls=0&playlist=mDYqT0_9VR4"
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          width: '100vw',
          height: '100vh',
          objectFit: 'cover',
          transform: 'scale(1.2)', // zoom in to hide black bars
        }}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="League of Legends Background Video"
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(25,76,138,0.8),rgba(9,9,121,0.6)_40%,rgba(2,0,36,0.9)_100%)]" />

      {/* Static background image as backup */}
      <div 
        className="absolute inset-0 bg-center bg-cover opacity-20"
        style={{ 
          backgroundImage: 'url("https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt0b4c2d9db3fd3df5/5ef1374f6aaf2924fd231f89/league-client-update-header.jpg")'
        }} 
      />

      {/* Animated Runes */}
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
      
    </div>
  );
};
