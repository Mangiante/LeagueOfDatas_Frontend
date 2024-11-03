import React, { useState } from 'react';
import { Calendar, ChevronDown, ChevronUp } from 'lucide-react';
import { getChampionIcon, getItemIcon, FALLBACK_CHAMPION, FALLBACK_ITEM } from '../utils/imageUtils';

interface PlayerData {
  summonerName: string;
  championId: number;
  championName: string;
  championLevel: number;
  kills: number;
  deaths: number;
  assists: number;
  items: number[];
}

interface MatchData {
  gameId: string;
  gameCreation: number;
  gameDuration: number;
  win: boolean;
  allyTeam: PlayerData[];
  enemyTeam: PlayerData[];
}

interface PlayerCardProps {
  player: PlayerData;
  isAlly: boolean;
}

interface MatchHistoryProps {
  matches: MatchData[];
}

const PlayerCard = ({ player, isAlly }: PlayerCardProps) => (
  <div className={`flex items-center gap-4 p-4 rounded-lg ${isAlly ? 'bg-blue-900/20' : 'bg-red-900/20'}`}>
    <div className="relative">
      <img
        src={getChampionIcon(player.championName)}
        alt={player.championName}
        className="w-12 h-12 rounded-full border-2 border-slate-600"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.src = FALLBACK_CHAMPION;
        }}
      />
      <span className="absolute -bottom-1 -right-1 w-6 h-6 flex items-center justify-center bg-slate-800 rounded-full text-xs border border-slate-600">
        {player.championLevel}
      </span>
    </div>
    
    <div className="flex-1">
      <div className="font-semibold text-sm">{player.summonerName}</div>
      <div className="text-xs text-slate-300">{player.championName}</div>
      <div className="text-xs text-slate-400">{player.kills}/{player.deaths}/{player.assists}</div>
    </div>

    <div className="flex flex-wrap gap-1 w-24">
      {player.items.map((itemId, index) => (
        itemId > 0 && (
          <img
            key={index}
            src={getItemIcon(itemId)}
            alt={`Item ${itemId}`}
            className="w-6 h-6 rounded border border-slate-600"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = FALLBACK_ITEM;
            }}
          />
        )
      ))}
    </div>
  </div>
);

export const MatchHistory: React.FC<MatchHistoryProps> = ({ matches }) => {
  const [expandedMatch, setExpandedMatch] = useState<string | null>(null);

  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
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
          <div
            key={match.gameId}
            className="bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700/50 overflow-hidden"
          >
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
                <div className="text-sm text-slate-400">
                  {formatDuration(match.gameDuration)}
                </div>
              </div>
              {expandedMatch === match.gameId ? (
                <ChevronUp className="w-5 h-5 text-slate-400" />
              ) : (
                <ChevronDown className="w-5 h-5 text-slate-400" />
              )}
            </button>

            {expandedMatch === match.gameId && (
              <div className="p-4 space-y-4 border-t border-slate-700/50">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h3 className="text-sm font-semibold text-blue-400">Ally Team</h3>
                    {match.allyTeam.map((player) => (
                      <PlayerCard key={player.summonerName} player={player} isAlly={true} />
                    ))}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-sm font-semibold text-red-400">Enemy Team</h3>
                    {match.enemyTeam.map((player) => (
                      <PlayerCard key={player.summonerName} player={player} isAlly={false} />
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};