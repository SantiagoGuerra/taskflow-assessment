import { Input } from "./ui/Input";
import { Select } from "./ui/Select";
import { Button } from "./ui/Button";
import { Search, X } from "lucide-react";
import type { TaskFilters } from "@/types";
import { RenderTracker } from "./RenderTracker";

interface FilterBarProps {
  filters: TaskFilters;
  onSearchChange: (search: string) => void;
  onPriorityChange: (priority: string) => void;
  onAssigneeChange: (assignee: string) => void;
  onReset: () => void;
  availableAssignees: string[];
}

const priorityOptions = [
  { value: "all", label: "All Priorities" },
  { value: "urgent", label: "Urgent" },
  { value: "high", label: "High" },
  { value: "medium", label: "Medium" },
  { value: "low", label: "Low" },
];

export function FilterBar({
  filters,
  onSearchChange,
  onPriorityChange,
  onAssigneeChange,
  onReset,
  availableAssignees,
}: FilterBarProps) {
  const assigneeOptions = [
    { value: "", label: "All Assignees" },
    ...availableAssignees.map((a) => ({ value: a, label: a })),
  ];

  const hasActiveFilters =
    filters.search !== "" ||
    filters.priority !== "all" ||
    filters.assignee !== "";

  return (
    <div className="flex flex-wrap items-end gap-3 rounded-lg bg-white p-4 shadow-sm border border-gray-100">
      <div className="flex-1 min-w-[200px]">
        <div className="relative">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <Input
            placeholder="Search tasks..."
            value={filters.search}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-9"
          />
        </div>
      </div>
      <div className="w-40">
        <Select
          options={priorityOptions}
          value={filters.priority}
          onChange={(e) => onPriorityChange(e.target.value)}
        />
      </div>
      <div className="w-40">
        <Select
          options={assigneeOptions}
          value={filters.assignee}
          onChange={(e) => onAssigneeChange(e.target.value)}
        />
      </div>
      {hasActiveFilters && (
        <Button variant="ghost" size="sm" onClick={onReset}>
          <X size={14} className="mr-1" />
          Clear
        </Button>
      )}
      <RenderTracker name="FilterBar" />
    </div>
  );
}
