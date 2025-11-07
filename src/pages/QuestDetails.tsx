import { useParams, useNavigate } from "react-router";
import { useQuery } from "@tanstack/react-query";

export function QuestDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const {
    data: quest,
    isLoading,
    isFetching,
    error,
  } = useQuery({
    queryKey: ["quest", id],
    queryFn: () =>
      fetch(`http://localhost:4000/quests/${id}`).then((res) => {
        if (!res.ok) throw new Error("Failed to fetch quest");
        return res.json();
      }),
    enabled: !!id,
    staleTime: 1000 * 60,
  });

  if (isLoading) return <p>Loading quest...</p>;
  if (error) return <p>Error loading quest: {(error as Error).message}</p>;
  if (!quest) return <p>Quest not found</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        ← Back
      </button>

      {isFetching && <p className="text-sm text-gray-500">Refreshing...</p>}

      <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto">
        <h1 className="text-black text-2xl font-bold mb-2">{quest.title}</h1>
        <p className="text-gray-700 mb-4">{quest.description}</p>

        {quest.due_date_time && (
          <p className="text-gray-500 mb-2">
            Due: {new Date(quest.due_date_time).toLocaleString()}
          </p>
        )}

        <p className="text-black font-semibold mb-2">Reward: {quest.reward}</p>

        <p
          className={`font-bold ${quest.status === "done"
              ? "text-green-600"
              : quest.status === "failed"
                ? "text-red-600"
                : "text-yellow-600"
            }`}
        >
          Status: {quest.status}
        </p>
      </div>
    </div>
  );
}
