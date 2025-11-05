type Quest = {
	id: number;
	title: string;
	description: string;
	due_date_time: string | null; // ISO datetime string
	reward: string;
	status: string; // e.g., "pending" | "done" | "failed"
};

export function QuestCard({ quest }: { quest: Quest }) {
	// Format the due date nicely
	const dueDate = quest.due_date_time
		? new Date(quest.due_date_time).toLocaleDateString()
		: "No due date";

	// Simple status color
	const statusColor =
		quest.status === "done"
			? "bg-green-100 text-green-800"
			: quest.status === "pending"
				? "bg-yellow-100 text-yellow-800"
				: "bg-red-100 text-red-800";

	return (
		<div className="max-w-md p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
			<div className="flex justify-between items-center mb-2">
				<h2 className="text-xl font-bold text-gray-800">{quest.title}</h2>
				<span
					className={`px-2 py-1 text-sm font-semibold rounded ${statusColor}`}
				>
					{quest.status}
				</span>
			</div>

			<p className="text-gray-600 mb-4">{quest.description}</p>

			<div className="flex justify-between items-center text-sm text-gray-500">
				<span>Due: {dueDate}</span>
				<span>Reward: {quest.reward}</span>
			</div>
		</div>
	);
}
