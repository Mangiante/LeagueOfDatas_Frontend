const DDRAGON_VERSION = '14.4.1';
const DDRAGON_BASE = `https://ddragon.leagueoflegends.com/cdn/${DDRAGON_VERSION}`;

export const getChampionIcon = (championId: number | string) => 
  `${DDRAGON_BASE}/img/champion/${championId}.png`;

export const getItemIcon = (itemId: number) =>
  `${DDRAGON_BASE}/img/item/${itemId}.png`;

export const getRankIcon = (rank: string) => {
  const rankLower = rank.toLowerCase();
  return `https://raw.githubusercontent.com/esports-bits/lol_images/master/tier-icons/tier-icons/${rankLower}.png`;
};

export const getProfileIcon = (iconId: number) =>
  `${DDRAGON_BASE}/img/profileicon/${iconId}.png`;

export const FALLBACK_CHAMPION = 'https://raw.githubusercontent.com/esports-bits/lol_images/master/role-icons/fill.png';
export const FALLBACK_ITEM = 'https://raw.githubusercontent.com/esports-bits/lol_images/master/miscellaneous/empty_slot.png';