// PlayerCard.tsx
import React from 'react';
import { getChampionIcon, getItemIcon, getSpellIcon, getRuneIcon, FALLBACK_CHAMPION, FALLBACK_ITEM, getKeystoneIcon } from '../../utils/imageUtils';

interface PlayerCardProps {
  player: {
    summonerName: string;
    championId: number;
    championName: string;
    championLevel: number;
    kills: number;
    deaths: number;
    assists: number;
    items: number[];
    spells: string[];
    rank: string;
    cs: number;
    damage: number;
    runes: {
      primary: string;
      secondary: string;
      keystone: string;
    };
  };
  isAlly: boolean;
}

const PlayerCard: React.FC<PlayerCardProps> = ({ player, isAlly }) => (
  <div className={`flex flex-col p-4 rounded-lg ${isAlly ? 'bg-blue-900/20' : 'bg-red-900/20'}`}>
    <div className="flex items-center gap-4">
      {/* Champion Icon */}
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
        <div className="text-xs text-slate-300">{player.championName} - {player.rank}</div>
        <div className="text-xs text-slate-400">{player.kills}/{player.deaths}/{player.assists} KDA</div>
        <div className="text-xs text-slate-400">CS: {player.cs} | Damage: {player.damage}</div>
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

    <div className="flex items-center justify-between mt-2">
      <div className="flex items-center gap-2">
        <img
          src={getKeystoneIcon(player.runes.primary, player.runes.keystone)}
          alt={player.runes.keystone}
          className="w-6 h-6 rounded"
        />
        <img
          src={getRuneIcon(player.runes.primary)}
          alt={player.runes.primary}
          className="w-4 h-4"
        />
        <img
          src={getRuneIcon(player.runes.secondary)}
          alt={player.runes.secondary}
          className="w-4 h-4"
        />
      </div>

      {/* Summoner Spells */}
      <div className="flex gap-2">
        {player.spells.map((spell, index) => (
          <img
            key={index}
            src={getSpellIcon(spell)}
            alt={spell}
            className="w-6 h-6 rounded"
          />
        ))}
      </div>
    </div>
  </div>
);

export default PlayerCard;
