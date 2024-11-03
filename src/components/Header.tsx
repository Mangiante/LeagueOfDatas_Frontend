import React from 'react';
import { Sword } from 'lucide-react';

export const Header = () => {
  return (
    <div className="text-center mb-12 animate-fade-in">
      <div className="relative w-48 h-48 mx-auto mb-4 flex items-center justify-center">
        <Sword className="w-24 h-24 text-yellow-400 animate-glow" />
      </div>
      <h1 className="text-5xl font-bold mb-2 bg-gradient-to-r from-yellow-400 via-blue-500 to-purple-600 text-transparent bg-clip-text font-display">
        Summoner Stats
      </h1>
      <p className="text-blue-200">Unlock your League of Legends journey</p>
    </div>
  );
};