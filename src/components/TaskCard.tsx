import { useState } from "react";
import { Badge } from "./ui/Badge";
import { Button } from "./ui/Button";
import { RenderTracker } from "./RenderTracker";
import { Trash2, ChevronRight, Clock } from "lucide-react";
import type { Task, Status } from "@/types";

// TODO 2: Enable the disabled buttons so they trigger onDelete / onMove
// TODO 4: Optimize this component to avoid unnecessary re-renders

interface TaskCardProps {
  task: Task;
  onDelete: (id: string) => void;
  onMove: (id: string, status: Status) => void;
}

function getNextStatus(current: Status): { status: Status; label: string } | null {
  switch (current) {
    case "todo":
      return { status: "in_progress", label: "Start" };
    case "in_progress":
      return { status: "done", label: "Complete" };
    case "done":
      return { status: "todo", label: "Reopen" };
    default:
      return null;
  }
}

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}

export function TaskCard({ task, onDelete, onMove }: TaskCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const nextStatus = getNextStatus(task.status);

  return (
    <div className="group rounded-lg bg-white p-3 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1 min-w-0">
          <h3
            className="text-sm font-medium text-gray-900 truncate cursor-pointer"
            onClick={() => setIsExpanded(!isExpanded)}
            title={task.title}
          >
            {task.title}
          </h3>
          {isExpanded && (
            <p className="mt-1 text-xs text-gray-500">{task.description}</p>
          )}
        </div>
        <Badge priority={task.priority} />
      </div>

      <div className="mt-2 flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <span>{task.assignee}</span>
          <span className="flex items-center gap-0.5">
            <Clock size={10} />
            {formatDate(task.updatedAt)}
          </span>
        </div>
        <RenderTracker name={`Card-${task.id}`} />
      </div>

      <div className="mt-2 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
        {nextStatus && (
          <Button
            variant="ghost"
            size="sm"
            disabled
            onClick={() => onMove(task.id, nextStatus.status)}
          >
            <ChevronRight size={12} className="mr-0.5" />
            {nextStatus.label} (TODO)
          </Button>
        )}
        <Button
          variant="ghost"
          size="sm"
          disabled
          onClick={() => onDelete(task.id)}
          className="text-red-500 hover:text-red-700 hover:bg-red-50 ml-auto"
        >
          <Trash2 size={12} />
        </Button>
      </div>
    </div>
  );
}
