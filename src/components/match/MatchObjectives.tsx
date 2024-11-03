import React from 'react';
import { Sword, Castle, Banana, Crown } from 'lucide-react';

interface ObjectivesProps {
  barons: number;
  dragons: string[];
  towers: number;
  heralds: number;
}

interface MatchObjectivesProps {
  allyObjectives: ObjectivesProps;
  enemyObjectives: ObjectivesProps;
}

export const MatchObjectives: React.FC<MatchObjectivesProps> = ({ allyObjectives, enemyObjectives }) => (
  <div className="grid grid-cols-2 gap-4 bg-slate-800/50 p-4 rounded-lg">
    <div className="space-y-2">
      <h4 className="text-blue-200 text-center font-semibold mb-3">Ally Team</h4>
      <div className="grid grid-cols-2 gap-2">
        <div className="flex items-center gap-2">
          <Crown className="w-4 h-4 text-purple-400" />
          <span>{allyObjectives.barons} Baron</span>
        </div>
        <div className="flex items-center gap-2">
          <Castle className="w-4 h-4 text-yellow-400" />
          <span>{allyObjectives.towers} Towers</span>
        </div>
        <div className="flex items-center gap-2">
          <Banana className="w-4 h-4 text-red-400" />
          <span>{allyObjectives.dragons.length} Dragons</span>
        </div>
        <div className="flex items-center gap-2">
          <Sword className="w-4 h-4 text-blue-400" />
          <span>{allyObjectives.heralds} Heralds</span>
        </div>
      </div>
    </div>
    <div className="space-y-2">
      <h4 className="text-red-200 text-center font-semibold mb-3">Enemy Team</h4>
      <div className="grid grid-cols-2 gap-2">
        <div className="flex items-center gap-2">
          <Crown className="w-4 h-4 text-purple-400" />
          <span>{enemyObjectives.barons} Baron</span>
        </div>
        <div className="flex items-center gap-2">
          <Castle className="w-4 h-4 text-yellow-400" />
          <span>{enemyObjectives.towers} Towers</span>
        </div>
        <div className="flex items-center gap-2">
          <Banana className="w-4 h-4 text-red-400" />
          <span>{enemyObjectives.dragons.length} Dragons</span>
        </div>
        <div className="flex items-center gap-2">
          <Sword className="w-4 h-4 text-blue-400" />
          <span>{enemyObjectives.heralds} Heralds</span>
        </div>
      </div>
    </div>
  </div>
);