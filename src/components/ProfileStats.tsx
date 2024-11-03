import React, { useState } from 'react';
import { Trophy, Swords, Target, Crown, X } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

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

// Sample historical data
const rankHistory = [
  { month: 'Jan', lp: 45, tier: 'Diamond IV' },
  { month: 'Feb', lp: 68, tier: 'Diamond III' },
  { month: 'Mar', lp: 32, tier: 'Diamond III' },
  { month: 'Apr', lp: 75, tier: 'Diamond II' },
  { month: 'May', lp: 89, tier: 'Diamond II' },
  { month: 'Jun', lp: 54, tier: 'Diamond II' },
];

const winRateHistory = [
  { month: 'Jan', rate: 51 },
  { month: 'Feb', rate: 53 },
  { month: 'Mar', rate: 52 },
  { month: 'Apr', rate: 54 },
  { month: 'May', rate: 56 },
  { month: 'Jun', rate: 54 },
];

const kdaHistory = [
  { month: 'Jan', kda: 2.8 },
  { month: 'Feb', kda: 3.1 },
  { month: 'Mar', kda: 3.4 },
  { month: 'Apr', kda: 3.2 },
  { month: 'May', kda: 3.5 },
  { month: 'Jun', kda: 3.2 },
];

const championHistory = [
  { month: 'Jan', games: 15, winRate: 58 },
  { month: 'Feb', games: 22, winRate: 59 },
  { month: 'Mar', games: 18, winRate: 61 },
  { month: 'Apr', games: 25, winRate: 60 },
  { month: 'May', games: 20, winRate: 65 },
  { month: 'Jun', games: 12, winRate: 62 },
];

const DetailModal = ({ title, icon, content, onClose }: DetailModalProps) => (
  <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in">
    <div className="bg-slate-800/90 p-8 rounded-lg shadow-xl border border-slate-700 max-w-4xl w-full mx-4">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          {icon}
          <h3 className="text-2xl font-bold text-white font-display">{title}</h3>
        </div>
        <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors">
          <X className="w-6 h-6" />
        </button>
      </div>
      <div className="space-y-6">
        {content}
      </div>
      
      <div className="absolute -z-10 inset-0 overflow-hidden opacity-20">
        <div className="absolute inset-0 bg-center bg-cover"
          style={{
            backgroundImage: 'url("https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-static-assets/global/default/images/magic-circle-3.png")',
            transform: 'scale(2)',
            opacity: '0.3'
          }}
        />
      </div>
    </div>
  </div>
);

export const ProfileStats = ({ visible, stats }: ProfileStatsProps) => {
  const [selectedStat, setSelectedStat] = useState<string | null>(null);

  if (!visible) return null;

  const getDetailContent = (stat: string) => {
    switch (stat) {
      case 'rank':
        return (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                <span>Current Rank</span>
                <span className="font-bold text-yellow-400 animate-glow">{stats?.rank}</span>
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
                    labelStyle={{ color: '#94a3b8' }}
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
                <LineChart data={winRateHistory}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis dataKey="month" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#1e293b',
                      border: '1px solid #475569',
                      borderRadius: '0.5rem',
                    }}
                    labelStyle={{ color: '#94a3b8' }}
                  />
                  <Line type="monotone" dataKey="rate" stroke="#22c55e" strokeWidth={2} dot={{ fill: '#22c55e' }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </>
        );
      case 'kda':
        return (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                <span>Average Kills</span>
                <span className="font-bold text-red-400">3.2</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                <span>Average Deaths</span>
                <span className="font-bold text-slate-400">2.1</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                <span>Average Assists</span>
                <span className="font-bold text-green-400">8.5</span>
              </div>
            </div>
            <div className="h-80 w-full bg-slate-900/50 rounded-lg p-4">
              <ResponsiveContainer>
                <LineChart data={kdaHistory}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis dataKey="month" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#1e293b',
                      border: '1px solid #475569',
                      borderRadius: '0.5rem',
                    }}
                    labelStyle={{ color: '#94a3b8' }}
                  />
                  <Line type="monotone" dataKey="kda" stroke="#ef4444" strokeWidth={2} dot={{ fill: '#ef4444' }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </>
        );
      case 'champion':
        return (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                <span>Games Played</span>
                <span className="font-bold text-blue-400">87</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                <span>Win Rate</span>
                <span className="font-bold text-green-400">62%</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                <span>KDA Ratio</span>
                <span className="font-bold text-purple-400">3.8</span>
              </div>
            </div>
            <div className="h-80 w-full bg-slate-900/50 rounded-lg p-4">
              <ResponsiveContainer>
                <LineChart data={championHistory}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis dataKey="month" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#1e293b',
                      border: '1px solid #475569',
                      borderRadius: '0.5rem',
                    }}
                    labelStyle={{ color: '#94a3b8' }}
                  />
                  <Line type="monotone" dataKey="winRate" stroke="#a855f7" strokeWidth={2} dot={{ fill: '#a855f7' }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </>
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
          className="relative bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-slate-700/50 hover:border-yellow-400/50 transition-all hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/10 group overflow-hidden"
        >
          <div className="absolute inset-0 bg-center bg-cover opacity-10 group-hover:opacity-20 transition-opacity"
            style={{
              backgroundImage: 'url("https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-static-assets/global/default/images/challenges-ranked-banner.png")'
            }}
          />
          <Trophy className="w-8 h-8 text-yellow-400 mb-2 group-hover:scale-110 transition-transform animate-glow" />
          <h3 className="text-lg font-semibold text-blue-200">Rank</h3>
          <p className="text-2xl font-bold text-white font-display">{stats?.rank || 'Loading...'}</p>
        </button>

        <button
          onClick={() => setSelectedStat('winRate')}
          className="relative bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-slate-700/50 hover:border-green-400/50 transition-all hover:scale-105 hover:shadow-lg hover:shadow-green-400/10 group overflow-hidden"
        >
          <div className="absolute inset-0 bg-center bg-cover opacity-10 group-hover:opacity-20 transition-opacity"
            style={{
              backgroundImage: 'url("https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-static-assets/global/default/images/magic-circle-2.png")'
            }}
          />
          <Target className="w-8 h-8 text-green-400 mb-2 group-hover:scale-110 transition-transform animate-glow" />
          <h3 className="text-lg font-semibold text-blue-200">Win Rate</h3>
          <p className="text-2xl font-bold text-white font-display">{stats?.winRate || '0'}%</p>
        </button>

        <button
          onClick={() => setSelectedStat('kda')}
          className="relative bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-slate-700/50 hover:border-red-400/50 transition-all hover:scale-105 hover:shadow-lg hover:shadow-red-400/10 group overflow-hidden"
        >
          <div className="absolute inset-0 bg-center bg-cover opacity-10 group-hover:opacity-20 transition-opacity"
            style={{
              backgroundImage: 'url("https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-static-assets/global/default/images/magic-circle-4.png")'
            }}
          />
          <Swords className="w-8 h-8 text-red-400 mb-2 group-hover:scale-110 transition-transform animate-glow" />
          <h3 className="text-lg font-semibold text-blue-200">KDA</h3>
          <p className="text-2xl font-bold text-white font-display">{stats?.kda || '0/0/0'}</p>
        </button>

        <button
          onClick={() => setSelectedStat('champion')}
          className="relative bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-slate-700/50 hover:border-purple-400/50 transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-400/10 group overflow-hidden"
        >
          <div className="absolute inset-0 bg-center bg-cover opacity-10 group-hover:opacity-20 transition-opacity"
            style={{
              backgroundImage: 'url("https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-static-assets/global/default/images/magic-circle-1.png")'
            }}
          />
          <Crown className="w-8 h-8 text-purple-400 mb-2 group-hover:scale-110 transition-transform animate-glow" />
          <h3 className="text-lg font-semibold text-blue-200">Favorite Champion</h3>
          <p className="text-2xl font-bold text-white font-display">{stats?.favoriteChampion || 'None'}</p>
        </button>
      </div>

      {selectedStat && (
        <DetailModal
          title={selectedStat === 'champion' ? 'Champion Stats' : `${selectedStat.charAt(0).toUpperCase() + selectedStat.slice(1)} Details`}
          icon={
            selectedStat === 'rank' ? <Trophy className="w-8 h-8 text-yellow-400 animate-glow" /> :
            selectedStat === 'winRate' ? <Target className="w-8 h-8 text-green-400 animate-glow" /> :
            selectedStat === 'kda' ? <Swords className="w-8 h-8 text-red-400 animate-glow" /> :
            <Crown className="w-8 h-8 text-purple-400 animate-glow" />
          }
          content={getDetailContent(selectedStat)}
          onClose={() => setSelectedStat(null)}
        />
      )}
    </div>
  );
};