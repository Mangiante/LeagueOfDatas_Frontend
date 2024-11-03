import React, { useState } from 'react';
import { Background } from './components/Background';
import { Header } from './components/Header';
import { SearchForm } from './components/SearchForm';
import ProfileStats from './components/stats/ProfileStats';
import { MatchHistory } from './components/match/MatchHistory';
import { getMockSummonerData } from './services/mockData';

interface Stats {
  rank: string;
  winRate: number;
  kda: string;
  favoriteChampion: string;
}

function App() {
  const [showStats, setShowStats] = useState(false);
  const [summonerData, setSummonerData] = useState<any>(null);
  const [stats, setStats] = useState<Stats>({
    rank: 'Diamond II',
    winRate: 54,
    kda: '3.2/2.1/8.5',
    favoriteChampion: 'Ahri'
  });

  const handleSearch = (gameName: string, tagLine: string, region: string) => {
    const data = getMockSummonerData(gameName, tagLine, region);
    setSummonerData(data);
    setStats({
      rank: data.rank,
      winRate: data.winRate,
      kda: data.championStats[0].kda,
      favoriteChampion: data.championStats[0].championName
    });
    setShowStats(true);
  };

  return (
    <div className="relative min-h-screen text-white">
      <Background />
      
      <div className="container mx-auto px-4 py-12">
        <Header />
        
        <div className="max-w-4xl mx-auto">
          <SearchForm onSearch={handleSearch} />

          <p className="text-center mt-6 text-sm text-blue-200">
            Enter your Riot ID in the format: Name#Tag
          </p>

          {showStats && (
            <>
          <ProfileStats visible={showStats} stats={stats} />
          <MatchHistory matches={summonerData?.matches || []} />
            </>
          )}
          </div>
      </div>
    </div>
  );
}

export default App;