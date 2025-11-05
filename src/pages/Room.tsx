import { QuestBoard } from "@/components/QuestBoard";
import { RankingBoard } from "@/components/RankingBoard";
import { UserList } from "@/components/UserList";

export function Room() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Page header */}
      <header className="mb-8">
        <h1 className="text-3xl font-extrabold text-gray-900">
          Adventure Room
        </h1>
        <p className="text-gray-600 mt-2">
          Check out your quests and track your progress.
        </p>
      </header>

      {/* Main grid layout */}
      <main className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {/* Left column: UserList on top, RankingBoard below */}
        <div className="flex flex-col gap-4 lg:col-span-1 lg:sticky lg:top-8">
          <UserList />
          <RankingBoard />
        </div>

        {/* Right column: Quest List */}
        <div className="lg:col-span-3 flex-1 overflow-auto max-h-[80vh]">
          <QuestBoard />
        </div>
      </main>
    </div>
  );
}
