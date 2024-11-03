// RankCard.tsx
import React from 'react';
import { StatsChart } from './StatsChart';
import { getRankIcon } from '../../utils/imageUtils';

interface RankCardProps {
  rank: string;
  rankHistory: Array<{ month: string; lp: number }>;
}

const RankCard: React.FC<RankCardProps> = ({ rank, rankHistory }) => (
  <div className="p-4 bg-slate-700/50 rounded-lg text-center">
    <div className="flex flex-col items-center">
      <img
        src={getRankIcon(rank)}
        alt={rank}
        className="w-12 h-12 mb-2"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.src = "https://via.placeholder.com/48"; // Placeholder on error
        }}
      />
      <div className="text-lg font-semibold text-yellow-400">{rank}</div>
      <StatsChart data={rankHistory} dataKey="lp" color="#fbbf24" />
    </div>
  </div>
);

export default RankCard;
