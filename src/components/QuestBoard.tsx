import { QuestCard } from "./QuestCard";
import quests from "@/mocks/data/quests.json" with { type: "json" };

export function QuestBoard() {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
        {quests.map((quest) => (
          <QuestCard key={quest.id} quest={quest} />
        ))}
      </div>
    </div>
  );
}
