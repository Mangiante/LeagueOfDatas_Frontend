// WinRateCard.tsx
import React from 'react';
import { Target } from 'lucide-react';
import { StatsChart } from './StatsChart';

interface WinRateCardProps {
  winRate: number;
  onClick: () => void;
}

const winHistory = [
  { month: 'Jan', lp: 45 },
  { month: 'Feb', lp: 68 },
  { month: 'Mar', lp: 32 },
  { month: 'Apr', lp: 75 }
];

const WinRateCard: React.FC<WinRateCardProps> = ({ winRate, onClick }) => {
  return (
    <div onClick={onClick} className="cursor-pointer">
      <div className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
        <Target className="w-6 h-6 text-green-400" />
        <span>Win Rate</span>
        <span className="font-bold text-green-400">{winRate}%</span>
      </div>
      <div className="mt-2 p-3 bg-slate-700/50 rounded-lg">
        <div className="text-center font-semibold">Win History</div>
        <StatsChart data={winHistory} dataKey="lp" color="#22c55e" />
      </div>
    </div>
  );
};

export default WinRateCard;
