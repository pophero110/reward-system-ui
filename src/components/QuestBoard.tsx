import { useQuery } from "@tanstack/react-query";
import { QuestCard, type Quest } from "./QuestCard";

export function QuestBoard() {
  const {
    data: quests,
    isLoading,
    isFetching,
    error,
  } = useQuery({
    queryKey: ["quests"],
    queryFn: () =>
      fetch("http://localhost:4000/quests") // updated backend URL
        .then((res) => {
          if (!res.ok) throw new Error("Network response was not ok");
          return res.json();
        }),
    // staleTime: 1000 * 60, // optional: 1 minute cache
  });

  if (isLoading) return <p>Loading quests...</p>;
  if (error) return <p>Error loading quests: {error.message}</p>;

  return (
    <div className="pb-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {isFetching && (
          <p className="text-sm text-gray-500">Refreshing quests...</p>
        )}
        {quests.map((quest: Quest) => (
          <QuestCard key={quest.id} quest={quest} />
        ))}
      </div>
    </div>
  );
}
