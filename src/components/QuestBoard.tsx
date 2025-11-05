import { QuestCard } from "./QuestCard";
import quests from "@/mocks/data/quests.json" with { type: "json" };

export function QuestBoard() {
  return (
    <div className="pb-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {quests.map((quest) => (
          <QuestCard key={quest.id} quest={quest} />
        ))}
      </div>
    </div>
  );
}
