import React from 'react';
import { Trophy } from 'lucide-react';

interface SeasonRank {
  season: number;
  rank: string;
  lp: number;
  games: number;
  winRate: number;
}

interface SeasonRankListProps {
  ranks: SeasonRank[];
}

export const SeasonRankList: React.FC<SeasonRankListProps> = ({ ranks }) => (
  <div className="space-y-4">
    <h4 className="text-lg font-semibold text-blue-200 mb-4">Previous Seasons</h4>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {ranks.map((rank) => (
        <div key={rank.season} className="bg-slate-700/50 p-4 rounded-lg flex items-center gap-4">
          <div className="w-12 h-12 bg-slate-600/50 rounded-full flex items-center justify-center">
            <Trophy className="w-6 h-6 text-yellow-400" />
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-center mb-1">
              <span className="font-bold">Season {rank.season}</span>
              <span className="text-yellow-400 font-bold">{rank.rank}</span>
            </div>
            <div className="grid grid-cols-3 gap-2 text-sm">
              <div>
                <span className="text-slate-400">LP:</span>
                <span className="ml-1 text-blue-400">{rank.lp}</span>
              </div>
              <div>
                <span className="text-slate-400">Games:</span>
                <span className="ml-1">{rank.games}</span>
              </div>
              <div>
                <span className="text-slate-400">WR:</span>
                <span className="ml-1 text-green-400">{rank.winRate}%</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);