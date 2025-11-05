import { QuestCard } from "./QuestCard";
import quests from "@/mocks/data/quests.json" with { type: "json" };

export function QuestList() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex flex-col space-y-4">
        {quests.map((quest) => (
          <QuestCard key={quest.id} quest={quest} />
        ))}
      </div>
    </div>
  );
}
