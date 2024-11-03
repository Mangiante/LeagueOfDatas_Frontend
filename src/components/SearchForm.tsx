import React, { useState } from 'react';
import { Search, Globe } from 'lucide-react';

interface SearchFormProps {
  onSearch: (gameName: string, tagLine: string, region: string) => void;
}

export const SearchForm = ({ onSearch }: SearchFormProps) => {
  const [gameName, setGameName] = useState('');
  const [tagLine, setTagLine] = useState('');
  const [region, setRegion] = useState('EUW');

  const regions = ['BR', 'EUNE', 'EUW', 'LAN', 'LAS', 'NA', 'OCE', 'RU', 'TR', 'JP', 'KR'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(gameName, tagLine, region);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-lg shadow-xl border border-slate-700/50 animate-fade-in">
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2 text-blue-200">
            <Search className="inline-block w-4 h-4 mr-2" />
            Game Name
          </label>
          <input
            type="text"
            value={gameName}
            onChange={(e) => setGameName(e.target.value)}
            className="w-full px-4 py-2 bg-slate-700/50 rounded-md border border-slate-600 focus:border-blue-400 focus:ring focus:ring-blue-400/20 transition-all text-white"
            placeholder="Enter game name"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 text-blue-200">
            <Search className="inline-block w-4 h-4 mr-2" />
            Tag Line
          </label>
          <input
            type="text"
            value={tagLine}
            onChange={(e) => setTagLine(e.target.value)}
            className="w-full px-4 py-2 bg-slate-700/50 rounded-md border border-slate-600 focus:border-blue-400 focus:ring focus:ring-blue-400/20 transition-all text-white"
            placeholder="Enter tag line"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 text-blue-200">
            <Globe className="inline-block w-4 h-4 mr-2" />
            Region
          </label>
          <select
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            className="w-full px-4 py-2 bg-slate-700/50 rounded-md border border-slate-600 focus:border-blue-400 focus:ring focus:ring-blue-400/20 transition-all text-white"
          >
            {regions.map((r) => (
              <option key={r} value={r}>{r}</option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 via-blue-700 to-purple-700 hover:from-blue-700 hover:via-blue-800 hover:to-purple-800 text-white font-semibold py-4 px-6 rounded-md transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
        >
          <Search className="w-5 h-5 group-hover:scale-110 transition-transform" />
          <span className="group-hover:tracking-wider transition-all">Search Profile</span>
        </button>
      </div>
    </form>
  );
};