import { users } from "@/mocks/data/users";

export function UserList() {
  return (
    <div className="p-4 bg-gray-100 rounded min-h-[100px]">
      <h2 className="text-lg text-black font-bold mb-2">Adventurers</h2>
      <ul className="space-y-1">
        {users.map((user) => (
          <li key={user.id} className="text-black text-sm flex justify-between">
            <span>{user.name}</span>
            <span className="text-gray-500">{user.rank}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
