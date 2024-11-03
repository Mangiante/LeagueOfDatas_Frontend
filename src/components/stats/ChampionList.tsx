import React from 'react';
import { getChampionIcon, FALLBACK_CHAMPION } from '../../utils/imageUtils';

interface Champion {
  name: string;
  games: number;
  winRate: number;
  kda: string;
}

interface ChampionListProps {
  champions: Champion[];
}

export const ChampionList: React.FC<ChampionListProps> = ({ champions }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {champions.map((champion) => (
      <div key={champion.name} className="bg-slate-700/50 p-4 rounded-lg flex items-center gap-4">
        <img
          src={getChampionIcon(champion.name)}
          alt={champion.name}
          className="w-16 h-16 rounded-lg"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = FALLBACK_CHAMPION;
          }}
        />
        <div className="flex-1">
          <h4 className="font-bold text-lg">{champion.name}</h4>
          <div className="grid grid-cols-3 gap-2 mt-2">
            <div>
              <div className="text-xs text-slate-400">Games</div>
              <div className="font-bold">{champion.games}</div>
            </div>
            <div>
              <div className="text-xs text-slate-400">Win Rate</div>
              <div className="font-bold text-green-400">{champion.winRate}%</div>
            </div>
            <div>
              <div className="text-xs text-slate-400">KDA</div>
              <div className="font-bold text-blue-400">{champion.kda}</div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
);