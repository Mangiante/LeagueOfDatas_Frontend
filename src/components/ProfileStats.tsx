import React, { useState } from 'react';
import { Trophy, Target, Users, Swords } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { getChampionIcon, getRankIcon, FALLBACK_CHAMPION } from '../utils/imageUtils';

interface ProfileStatsProps {
  visible: boolean;
  stats?: {
    rank: string;
    winRate: number;
    kda: string;
    favoriteChampion: string;
  };
}

interface DetailModalProps {
  title: string;
  icon: React.ReactNode;
  content: React.ReactNode;
  onClose: () => void;
}

const favoriteChampions = [
  { name: 'Ahri', games: 45, winRate: 56, kda: '3.2/2.1/8.5' },
  { name: 'Yasuo', games: 38, winRate: 52, kda: '6.4/4.2/3.8' },
  { name: 'Lux', games: 32, winRate: 62, kda: '4.1/2.8/12.3' },
  { name: 'Zed', games: 28, winRate: 58, kda: '8.2/4.5/3.9' }
];

const rankHistory = [
  { month: 'Jan', lp: 45 },
  { month: 'Feb', lp: 68 },
  { month: 'Mar', lp: 32 },
  { month: 'Apr', lp: 75 }
];

const DetailModal = ({ title, icon, content, onClose }: DetailModalProps) => (
  <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[100] animate-fade-in">
    <div className="bg-slate-800/90 p-8 rounded-lg shadow-xl border border-slate-700 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          {icon}
          <h3 className="text-2xl font-bold text-white font-display">{title}</h3>
        </div>
        <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors">
          <Swords className="w-6 h-6" />
        </button>
      </div>
      <div className="space-y-6">
        {content}
      </div>
    </div>
  </div>
);

const ProfileStats: React.FC<ProfileStatsProps> = ({ visible, stats }) => {
  const [selectedStat, setSelectedStat] = useState<string | null>(null);

  if (!visible || !stats) return null;

  const getDetailContent = (stat: string) => {
    switch (stat) {
      case 'rank':
        return (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                <span>Current Rank</span>
                <span className="font-bold text-yellow-400">{stats.rank}</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                <span>LP</span>
                <span className="font-bold text-blue-400">75</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                <span>Peak Rank</span>
                <span className="font-bold text-purple-400">Diamond I</span>
              </div>
            </div>
            <div className="h-80 w-full bg-slate-900/50 rounded-lg p-4">
              <ResponsiveContainer>
                <LineChart data={rankHistory}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis dataKey="month" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#1e293b',
                      border: '1px solid #475569',
                      borderRadius: '0.5rem',
                    }}
                  />
                  <Line type="monotone" dataKey="lp" stroke="#fbbf24" strokeWidth={2} dot={{ fill: '#fbbf24' }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </>
        );
      case 'winRate':
        return (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                <span>Total Games</span>
                <span className="font-bold text-blue-400">324</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                <span>Wins</span>
                <span className="font-bold text-green-400">175</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                <span>Losses</span>
                <span className="font-bold text-red-400">149</span>
              </div>
            </div>
            <div className="h-80 w-full bg-slate-900/50 rounded-lg p-4">
              <ResponsiveContainer>
                <LineChart data={rankHistory}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis dataKey="month" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#1e293b',
                      border: '1px solid #475569',
                      borderRadius: '0.5rem',
                    }}
                  />
                  <Line type="monotone" dataKey="lp" stroke="#22c55e" strokeWidth={2} dot={{ fill: '#22c55e' }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </>
        );
      case 'champions':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {favoriteChampions.map((champion) => (
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
      case 'positions':
        return (
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {['Top', 'Jungle', 'Mid', 'Bot', 'Support'].map((position) => (
              <div key={position} className="bg-slate-700/50 p-4 rounded-lg text-center">
                <div className="w-12 h-12 mx-auto mb-2 bg-slate-600/50 rounded-full flex items-center justify-center">
                  <img
                    src={`https://raw.githubusercontent.com/esports-bits/lol_images/master/role-icons/${position.toLowerCase()}.png`}
                    alt={position}
                    className="w-8 h-8"
                  />
                </div>
                <div className="font-bold">{position}</div>
                <div className="text-sm text-slate-400">
                  {Math.floor(Math.random() * 30 + 10)}%
                </div>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="mt-8 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <button
          onClick={() => setSelectedStat('rank')}
          className="relative bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-slate-700/50 hover:border-yellow-400/50 transition-all hover:scale-105 group overflow-hidden"
        >
          <Trophy className="w-8 h-8 text-yellow-400 mb-2 group-hover:scale-110 transition-transform" />
          <h3 className="text-lg font-semibold text-blue-200">Rank</h3>
          <p className="text-2xl font-bold text-white font-display">{stats.rank}</p>
        </button>

        <button
          onClick={() => setSelectedStat('winRate')}
          className="relative bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-slate-700/50 hover:border-green-400/50 transition-all hover:scale-105 group overflow-hidden"
        >
          <Target className="w-8 h-8 text-green-400 mb-2 group-hover:scale-110 transition-transform" />
          <h3 className="text-lg font-semibold text-blue-200">Win Rate</h3>
          <p className="text-2xl font-bold text-white font-display">{stats.winRate}%</p>
        </button>

        <button
          onClick={() => setSelectedStat('champions')}
          className="relative bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-slate-700/50 hover:border-purple-400/50 transition-all hover:scale-105 group overflow-hidden"
        >
          <Users className="w-8 h-8 text-purple-400 mb-2 group-hover:scale-110 transition-transform" />
          <h3 className="text-lg font-semibold text-blue-200">Champions</h3>
          <div className="flex -space-x-3">
            {favoriteChampions.slice(0, 3).map((champion) => (
              <img
                key={champion.name}
                src={getChampionIcon(champion.name)}
                alt={champion.name}
                className="w-8 h-8 rounded-full border-2 border-slate-700"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = FALLBACK_CHAMPION;
                }}
              />
            ))}
          </div>
        </button>

        <button
          onClick={() => setSelectedStat('positions')}
          className="relative bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-slate-700/50 hover:border-blue-400/50 transition-all hover:scale-105 group overflow-hidden"
        >
          <Swords className="w-8 h-8 text-blue-400 mb-2 group-hover:scale-110 transition-transform" />
          <h3 className="text-lg font-semibold text-blue-200">Positions</h3>
          <div className="flex -space-x-2">
            {['Top', 'Mid', 'Bot'].map((position) => (
              <img
                key={position}
                src={`https://raw.githubusercontent.com/esports-bits/lol_images/master/role-icons/${position.toLowerCase()}.png`}
                alt={position}
                className="w-6 h-6"
              />
            ))}
          </div>
        </button>
      </div>

      {selectedStat && (
        <DetailModal
          title={
            selectedStat === 'rank' ? 'Rank Details' :
            selectedStat === 'winRate' ? 'Win Rate Analysis' :
            selectedStat === 'champions' ? 'Champion Pool' :
            'Position Distribution'
          }
          icon={
            selectedStat === 'rank' ? <Trophy className="w-8 h-8 text-yellow-400" /> :
            selectedStat === 'winRate' ? <Target className="w-8 h-8 text-green-400" /> :
            selectedStat === 'champions' ? <Users className="w-8 h-8 text-purple-400" /> :
            <Swords className="w-8 h-8 text-blue-400" />
          }
          content={getDetailContent(selectedStat)}
          onClose={() => setSelectedStat(null)}
        />
      )}
    </div>
  );
};

export default ProfileStats;