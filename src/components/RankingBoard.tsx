import { users } from "@/mocks/data/users";
import type { UserRank } from "@/mocks/data/users";

export function RankingBoard() {
  // Group users by rank
  const ranks = Array.from(
    users.reduce((map, user) => {
      if (!map.has(user.rank)) map.set(user.rank, []);
      map.get(user.rank)!.push(user);
      return map;
    }, new Map<string, UserRank[]>()),
  );

  return (
    <div className="p-4 bg-gray-100">
      <div className="space-y-3">
        {ranks.map(([rank, rankUsers]) => (
          <div className="text-black" key={rank}>
            <h2 className="font-semibold mb-1">{rank} Rank</h2>
            <ul className="space-y-1">
              {rankUsers.map((user) => {
                const xpLeft = user.nextRankXP - user.currentXP;
                return (
                  <li key={user.id} className="flex justify-between text-sm">
                    <span>{user.name}</span>
                    <span>
                      {user.currentXP} XP ({xpLeft} XP left)
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
