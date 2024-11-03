// Mock data to simulate API response
export const getMockSummonerData = (gameName: string, tagLine: string, region: string) => {
    return {
      accountId: "mock-account-123",
      rank: "Diamond II",
      leaguePoints: 75,
      winRate: 54,
      rankHistory: [
        { date: "2024-02-01", lp: 45 },
        { date: "2024-02-15", lp: 68 },
        { date: "2024-03-01", lp: 32 },
        { date: "2024-03-15", lp: 75 }
      ],
      championStats: [
        {
          championId: 103,
          championName: "Ahri",
          gamesPlayed: 45,
          winRate: 56,
          kda: "3.2/2.1/8.5"
        },
        {
          championId: 236,
          championName: "Lucian",
          gamesPlayed: 32,
          winRate: 52,
          kda: "4.1/3.2/6.3"
        },
        {
          championId: 25,
          championName: "Morgana",
          gamesPlayed: 28,
          winRate: 58,
          kda: "2.4/2.8/11.2"
        }
      ],
      matches: [
        {
          gameId: "MOCK1",
          gameCreation: Date.now() - 86400000, // 1 day ago
          gameDuration: 2345, // in seconds
          win: true,
          allyTeam: [
            {
              summonerName: gameName,
              championId: 103,
              championName: "Ahri",
              championLevel: 18,
              kills: 8,
              deaths: 3,
              assists: 12,
              items: [3157, 3089, 3020, 3165, 3135, 3139]
            },
            {
              summonerName: "Player2",
              championId: 236,
              championName: "Lucian",
              championLevel: 17,
              kills: 10,
              deaths: 5,
              assists: 8,
              items: [3153, 3087, 3006, 3072, 3031, 3139]
            },
            {
              summonerName: "Player3",
              championId: 25,
              championName: "Morgana",
              championLevel: 16,
              kills: 2,
              deaths: 4,
              assists: 21,
              items: [3157, 3116, 3020, 3165, 3135, 3139]
            },
            {
              summonerName: "Player4",
              championId: 122,
              championName: "Darius",
              championLevel: 18,
              kills: 6,
              deaths: 6,
              assists: 9,
              items: [3153, 3071, 3111, 3053, 3742, 3139]
            },
            {
              summonerName: "Player5",
              championId: 412,
              championName: "Thresh",
              championLevel: 15,
              kills: 1,
              deaths: 5,
              assists: 24,
              items: [3190, 3109, 3047, 3050, 3742, 3139]
            }
          ],
          enemyTeam: [
            {
              summonerName: "Enemy1",
              championId: 245,
              championName: "Ekko",
              championLevel: 17,
              kills: 5,
              deaths: 7,
              assists: 6,
              items: [3157, 3089, 3020, 3165, 3135, 3139]
            },
            {
              summonerName: "Enemy2",
              championId: 51,
              championName: "Caitlyn",
              championLevel: 16,
              kills: 8,
              deaths: 6,
              assists: 7,
              items: [3153, 3087, 3006, 3072, 3031, 3139]
            },
            {
              summonerName: "Enemy3",
              championId: 99,
              championName: "Lux",
              championLevel: 15,
              kills: 4,
              deaths: 8,
              assists: 12,
              items: [3157, 3089, 3020, 3165, 3135, 3139]
            },
            {
              summonerName: "Enemy4",
              championId: 54,
              championName: "Malphite",
              championLevel: 16,
              kills: 3,
              deaths: 5,
              assists: 9,
              items: [3068, 3075, 3111, 3083, 3742, 3139]
            },
            {
              summonerName: "Enemy5",
              championId: 432,
              championName: "Bard",
              championLevel: 14,
              kills: 2,
              deaths: 7,
              assists: 15,
              items: [3190, 3109, 3047, 3050, 3742, 3139]
            }
          ]
        }
        // Add more matches as needed
      ]
    };
  };