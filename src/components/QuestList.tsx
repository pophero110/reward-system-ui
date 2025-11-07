import { useQuery } from "@tanstack/react-query";
import { QuestCard, type Quest } from "./QuestCard";

export function QuestList() {
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

  console.log(quests);
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {isFetching && (
        <p className="text-sm text-gray-500">Refreshing quests...</p>
      )}
      <div className="flex flex-col space-y-4">
        {quests?.map((quest: Quest) => (
          <QuestCard key={quest.id} quest={quest} />
        ))}
      </div>
    </div>
  );
}
