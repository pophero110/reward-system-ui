import { QuestBoard } from "@/components/QuestBoard";
import { QuestList } from "@/components/QuestList";
import { RankingBoard } from "@/components/RankingBoard";

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

      {/* Boards layout */}
      <main className="flex flex-col lg:flex-row gap-4">
        {/* Ranking Board - sticky sidebar on large screens */}
        <div className="w-full lg:w-1/5 lg:sticky lg:top-8">
          <RankingBoard />
        </div>

        {/* Quest List - scrollable if content is long */}
        <div className="flex-1 overflow-auto max-h-[80vh]">
          <QuestBoard />
        </div>
      </main>
    </div>
  );
}
