// DataDragon CDN base URLs
const DDRAGON_VERSION = "14.4.1";
const DDRAGON_BASE = `https://ddragon.leagueoflegends.com/cdn/${DDRAGON_VERSION}`;

// Champion, item, spell, and profile icon functions remain the same
export const getChampionIcon = (championId: number | string) =>
  `${DDRAGON_BASE}/img/champion/${championId}.png`;

export const getItemIcon = (itemId: number) =>
  `${DDRAGON_BASE}/img/item/${itemId}.png`;

export const getSpellIcon = (spellName: string) =>
  `${DDRAGON_BASE}/img/spell/Summoner${spellName}.png`;

export const getProfileIcon = (iconId: number) =>
  `${DDRAGON_BASE}/img/profileicon/${iconId}.png`;

export const getRankIcon = (rank: string) => {
  const formattedRank = rank.replace(/\s(I|II|III|IV|V)?$/, "").toLowerCase();
  return `https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-shared-components/global/default/images/${formattedRank}.png`;
};

// Rune and Keystone functions
export const getRuneIcon = (runeName: string) =>
  `https://ddragon.canisback.com/img/perk-images/Styles/${runeName}.png`;

export const getKeystoneIcon = (runeName: string, keystone: string) => {
  const cleanRuneName = (runeName: string) => runeName.replace(/^\d+_/, "");
  const cleanedRuneName = cleanRuneName(runeName);
  return `https://ddragon.canisback.com/img/perk-images/Styles/${cleanedRuneName}/${keystone}/${keystone}.png`;
};

// Fallback images
export const FALLBACK_CHAMPION =
  "https://raw.githubusercontent.com/esports-bits/lol_images/master/role-icons/fill.png";
export const FALLBACK_ITEM =
  "https://raw.githubusercontent.com/esports-bits/lol_images/master/miscellaneous/empty_slot.png";
