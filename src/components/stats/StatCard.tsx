import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  value: React.ReactNode;
  onClick: () => void;
  accentColor: string;
}

export const StatCard: React.FC<StatCardProps> = ({ icon, title, value, onClick, accentColor }) => (
  <button
    onClick={onClick}
    className={`relative bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-slate-700/50 hover:border-${accentColor}/50 transition-all hover:scale-105 group overflow-hidden`}
  >
    <div className={`w-8 h-8 mb-2 group-hover:scale-110 transition-transform text-${accentColor}`}>
      {icon}
    </div>
    <h3 className="text-lg font-semibold text-blue-200">{title}</h3>
    <div className="text-2xl font-bold text-white font-display">{value}</div>
  </button>
);