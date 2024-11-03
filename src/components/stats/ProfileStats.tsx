// ProfileStats.tsx
import React, { useState } from "react";
import { Trophy, Target, Sword, Shield, Wand2, Users } from "lucide-react";
import { StatCard } from "./StatCard";
import { DetailModal } from "../stats/DetailModal";
import { ChampionList } from "../stats/ChampionList";
import { PositionList } from "../stats/PositionList";
import RankCard from "../stats/RanKCard";
import WinRateCard from "../stats/WinRateCard";

interface ProfileStatsProps {
  visible: boolean;
  stats?: {
    rank: string;
    winRate: number;
    kda: string;
    favoriteChampion: string;
  };
}

const favoriteChampions = [
  { name: "Ahri", games: 45, winRate: 56, kda: "3.2/2.1/8.5" },
  { name: "Yasuo", games: 38, winRate: 52, kda: "6.4/4.2/3.8" },
  { name: "Lux", games: 32, winRate: 62, kda: "4.1/2.8/12.3" },
  { name: "Zed", games: 28, winRate: 58, kda: "8.2/4.5/3.9" },
];

const positions = [
  { name: "Top", percentage: 25 },
  { name: "Jungle", percentage: 15 },
  { name: "Mid", percentage: 30 },
  { name: "Bot", percentage: 20 },
  { name: "Support", percentage: 10 },
];

const rankHistory = [
  { month: "Jan", lp: 45 },
  { month: "Feb", lp: 68 },
  { month: "Mar", lp: 32 },
  { month: "Apr", lp: 75 },
];

const ProfileStats: React.FC<ProfileStatsProps> = ({ visible, stats }) => {
  const [selectedStat, setSelectedStat] = useState<string | null>(null);

  if (!visible || !stats) return null;

  const getDetailContent = (stat: string) => {
    switch (stat) {
      case "rank":
        return <RankCard rank={stats.rank} rankHistory={rankHistory} />;
      case "winRate":
        return (
          <WinRateCard
            winRate={stats.winRate}
            onClick={() => setSelectedStat(null)}
          />
        );
      case "champions":
        return <ChampionList champions={favoriteChampions} />;
      case "positions":
        return <PositionList positions={positions} />;
      default:
        return null;
    }
  };

  return (
    <div className="mt-8 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          icon={<Trophy />}
          title="Rank"
          value={stats.rank}
          onClick={() => setSelectedStat("rank")}
          accentColor="yellow-400"
        />

        <StatCard
          icon={<Target />}
          title="Win Rate"
          value={`${stats.winRate}%`}
          onClick={() => setSelectedStat("winRate")}
          accentColor="green-400"
        />

        <StatCard
          icon={<Users />}
          title="Champions"
          value={
            <div className="flex -space-x-3">
              {favoriteChampions.slice(0, 3).map((champion) => (
                <img
                  key={champion.name}
                  src={`https://ddragon.leagueoflegends.com/cdn/14.4.1/img/champion/${champion.name}.png`}
                  alt={champion.name}
                  className="w-8 h-8 rounded-full border-2 border-slate-700"
                />
              ))}
            </div>
          }
          onClick={() => setSelectedStat("champions")}
          accentColor="purple-400"
        />

        <StatCard
          icon={<Sword />}
          title="Positions"
          value={
            <div className="flex gap-2">
              {[Shield, Sword, Wand2].map((Icon, index) => (
                <Icon key={index} className="w-6 h-6 text-blue-400" />
              ))}
            </div>
          }
          onClick={() => setSelectedStat("positions")}
          accentColor="blue-400"
        />
      </div>

      {selectedStat && (
        <DetailModal
          title={
            selectedStat === "rank"
              ? "Rank Details"
              : selectedStat === "winRate"
              ? "Win Rate Analysis"
              : selectedStat === "champions"
              ? "Champion Pool"
              : "Position Distribution"
          }
          icon={
            selectedStat === "rank" ? (
              <Trophy className="w-8 h-8 text-yellow-400" />
            ) : selectedStat === "winRate" ? (
              <Target className="w-8 h-8 text-green-400" />
            ) : selectedStat === "champions" ? (
              <Users className="w-8 h-8 text-purple-400" />
            ) : (
              <Sword className="w-8 h-8 text-blue-400" />
            )
          }
          content={getDetailContent(selectedStat)}
          onClose={() => setSelectedStat(null)}
        />
      )}
    </div>
  );
};

export default ProfileStats;
