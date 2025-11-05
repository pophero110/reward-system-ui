export type UserRank = {
  id: number;
  name: string;
  rank: string;
  currentXP: number;
  nextRankXP: number;
};

export const users: UserRank[] = [
  { id: 1, name: "Alice", rank: "Bronze", currentXP: 120, nextRankXP: 200 },
  { id: 2, name: "Bob", rank: "Bronze", currentXP: 150, nextRankXP: 200 },
  { id: 3, name: "Charlie", rank: "Silver", currentXP: 220, nextRankXP: 400 },
  { id: 4, name: "David", rank: "Silver", currentXP: 300, nextRankXP: 400 },
  { id: 5, name: "Eve", rank: "Gold", currentXP: 450, nextRankXP: 600 },
];
