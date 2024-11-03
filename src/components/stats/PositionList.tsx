import React from 'react';
import { Shield, Sword, Wand2, Crosshair, Heart } from 'lucide-react';

const positionIcons = {
  Top: Shield,
  Jungle: Sword,
  Mid: Wand2,
  Bot: Crosshair,
  Support: Heart,
};

interface PositionListProps {
  positions: Array<{
    name: string;
    percentage: number;
  }>;
}

export const PositionList: React.FC<PositionListProps> = ({ positions }) => (
  <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
    {positions.map(({ name, percentage }) => {
      const Icon = positionIcons[name as keyof typeof positionIcons];
      return (
        <div key={name} className="bg-slate-700/50 p-4 rounded-lg text-center">
          <div className="w-12 h-12 mx-auto mb-2 bg-slate-600/50 rounded-full flex items-center justify-center">
            <Icon className="w-8 h-8 text-blue-400" />
          </div>
          <div className="font-bold">{name}</div>
          <div className="text-sm text-slate-400">{percentage}%</div>
        </div>
      );
    })}
  </div>
);