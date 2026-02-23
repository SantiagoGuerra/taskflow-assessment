import type { TaskStats } from "@/hooks/useTaskStats";
import { RenderTracker } from "./RenderTracker";

interface StatsPanelProps {
  stats: TaskStats;
}

export function StatsPanel({ stats }: StatsPanelProps) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      <div className="rounded-lg bg-white p-4 shadow-sm border border-gray-100">
        <p className="text-sm text-gray-500">Total Tasks</p>
        <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
        <RenderTracker name="StatsPanel" />
      </div>
      <div className="rounded-lg bg-blue-50 p-4 shadow-sm border border-blue-100">
        <p className="text-sm text-blue-600">To Do</p>
        <p className="text-2xl font-bold text-blue-700">
          {stats.byStatus.todo}
        </p>
      </div>
      <div className="rounded-lg bg-amber-50 p-4 shadow-sm border border-amber-100">
        <p className="text-sm text-amber-600">In Progress</p>
        <p className="text-2xl font-bold text-amber-700">
          {stats.byStatus.in_progress}
        </p>
      </div>
      <div className="rounded-lg bg-green-50 p-4 shadow-sm border border-green-100">
        <p className="text-sm text-green-600">Done</p>
        <p className="text-2xl font-bold text-green-700">
          {stats.byStatus.done}
        </p>
        <p className="text-xs text-green-500 mt-1">
          {stats.completionRate}% complete
        </p>
      </div>
    </div>
  );
}
