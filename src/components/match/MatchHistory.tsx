// MatchHistory.tsx
import React, { useState } from 'react';
import { Calendar, ChevronDown, ChevronUp } from 'lucide-react';
import MatchDetails from './MatchDetails';

interface MatchData {
  gameId: string;
  gameCreation: number;
  gameDuration: number;
  win: boolean;
  allyTeam: Player[];
  enemyTeam: Player[];
  objectives: {
    ally: {
      barons: number;
      dragons: string[];
      towers: number;
      heralds: number;
    };
    enemy: {
      barons: number;
      dragons: string[];
      towers: number;
      heralds: number;
    };
  };
}

interface MatchHistoryProps {
  matches: MatchData[];
}

export const MatchHistory: React.FC<MatchHistoryProps> = ({ matches }) => {
  const [expandedMatch, setExpandedMatch] = useState<string | null>(null);

  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  if (!matches.length) return null;

  return (
    <div className="mt-8 space-y-4 animate-fade-in">
      <h2 className="text-2xl font-bold text-white font-display flex items-center gap-2">
        <Calendar className="w-6 h-6" />
        Match History
      </h2>

      <div className="space-y-4">
        {matches.map((match) => (
          <div key={match.gameId} className="bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700/50 overflow-hidden">
            <button
              onClick={() => setExpandedMatch(expandedMatch === match.gameId ? null : match.gameId)}
              className="w-full p-4 flex items-center justify-between hover:bg-slate-700/30 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className={`w-2 h-12 rounded-full ${match.win ? 'bg-green-500' : 'bg-red-500'}`} />
                <div className="text-left">
                  <div className="font-semibold">{match.win ? 'Victory' : 'Defeat'}</div>
                  <div className="text-sm text-slate-400">{formatDate(match.gameCreation)}</div>
                </div>
                <div className="text-sm text-slate-400">{formatDuration(match.gameDuration)}</div>
              </div>
              {expandedMatch === match.gameId ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
            </button>

            {expandedMatch === match.gameId && (
              <div className="p-4 space-y-4 border-t border-slate-700/50">
                <MatchDetails matchData={match} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
