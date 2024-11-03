import React, { useState } from 'react';
import { Background } from './components/Background';
import { Header } from './components/Header';
import { SearchForm } from './components/SearchForm';
import { ProfileStats } from './components/ProfileStats';

function App() {
  const [summonerName, setSummonerName] = useState('');
  const [region, setRegion] = useState('EUW');
  const [hashtag, setHashtag] = useState('');
  const [showStats, setShowStats] = useState(false);
  const [stats, setStats] = useState({
    rank: 'Diamond II',
    winRate: 54,
    kda: '3.2/2.1/8.5',
    favoriteChampion: 'Ahri'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically make an API call to fetch the player data
    setShowStats(true);
    // Simulated API call response
    setStats({
      rank: 'Diamond II',
      winRate: 54,
      kda: '3.2/2.1/8.5',
      favoriteChampion: 'Ahri'
    });
  };

  return (
    <div className="relative min-h-screen text-white">
      <Background />
      
      <div className="container mx-auto px-4 py-12">
        <Header />
        
        <div className="max-w-2xl mx-auto">
          <SearchForm
            summonerName={summonerName}
            region={region}
            hashtag={hashtag}
            onSummonerNameChange={setSummonerName}
            onRegionChange={setRegion}
            onHashtagChange={setHashtag}
            onSubmit={handleSubmit}
          />

          <p className="text-center mt-6 text-sm text-blue-200">
            Enter your Riot ID in the format: Name#Tag
          </p>

          <ProfileStats visible={showStats} stats={stats} />
        </div>
      </div>
    </div>
  );
}

export default App;