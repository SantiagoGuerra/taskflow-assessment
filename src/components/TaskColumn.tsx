import { TaskCard } from "./TaskCard";
import { RenderTracker } from "./RenderTracker";
import type { Task, ColumnConfig, Status } from "@/types";

// TODO 4: Optimize this component to avoid unnecessary re-renders

interface TaskColumnProps {
  config: ColumnConfig;
  tasks: Task[];
  onDelete: (id: string) => void;
  onMove: (id: string, status: Status) => void;
}

export function TaskColumn({ config, tasks, onDelete, onMove }: TaskColumnProps) {
  return (
    <div className="flex flex-col min-w-[300px] max-w-[350px]">
      <div
        className={`flex items-center justify-between rounded-t-lg border-t-4 ${config.color} ${config.bgColor} px-4 py-3`}
      >
        <h2 className="font-semibold text-gray-800">{config.title}</h2>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center justify-center rounded-full bg-white px-2 py-0.5 text-xs font-medium text-gray-600 shadow-sm">
            {tasks.length}
          </span>
          <RenderTracker name={`Col-${config.id}`} />
        </div>
      </div>

      <div className="flex flex-col gap-2 rounded-b-lg bg-gray-50 p-3 min-h-[200px] border border-t-0 border-gray-100">
        {tasks.length === 0 ? (
          <p className="text-center text-sm text-gray-400 py-8">
            No tasks
          </p>
        ) : (
          tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onDelete={onDelete}
              onMove={onMove}
            />
          ))
        )}
      </div>
    </div>
  );
}
