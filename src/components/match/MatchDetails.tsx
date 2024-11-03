// MatchDetails.tsx
import React from "react";
import PlayerCard from "../player/PlayerCard";
import { MatchObjectives } from "./MatchObjectives";

interface Player {
  summonerName: string;
  championName: string;
  championLevel: number;
  kills: number;
  deaths: number;
  assists: number;
  items: number[];
}

interface MatchDetailsProps {
  matchData: {
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
  };
}

const MatchDetails: React.FC<MatchDetailsProps> = ({ matchData }) => (
  <div className="space-y-6">
    {/* Use a two-column grid to display ally and enemy teams side by side */}
    <div className="grid grid-cols-2 gap-8">
      <div className="space-y-2">
        <h4 className="text-blue-200 font-semibold mb-3 text-center">Ally Team</h4>
        {matchData.allyTeam.map((player) => (
          <PlayerCard key={player.summonerName} player={player} isAlly={true} />
        ))}
      </div>
      
      <div className="space-y-2">
        <h4 className="text-red-200 font-semibold mb-3 text-center">Enemy Team</h4>
        {matchData.enemyTeam.map((player) => (
          <PlayerCard key={player.summonerName} player={player} isAlly={false} />
        ))}
      </div>
    </div>

    {/* Display objectives below the teams */}
    {matchData.objectives ? (
      <MatchObjectives
        allyObjectives={matchData.objectives.ally}
        enemyObjectives={matchData.objectives.enemy}
      />
    ) : (
      <p className="text-yellow-500">Objectives data is unavailable for this match.</p>
    )}
  </div>
);

export default MatchDetails;
