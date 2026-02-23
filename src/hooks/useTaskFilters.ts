import type { Task, TaskFilters } from "@/types";

// TODO 3: Implement this hook
//
// The FilterBar UI is wired to call the setters returned here,
// but currently nothing is filtered. Make it work.

export function useTaskFilters(tasks: Task[]) {
  return {
    filteredTasks: tasks,
    filters: {
      search: "",
      priority: "all" as const,
      assignee: "",
    } satisfies TaskFilters,
    setSearch: (_search: string) => {},
    setPriority: (_priority: string) => {},
    setAssignee: (_assignee: string) => {},
    resetFilters: () => {},
    availableAssignees: [...new Set(tasks.map((t) => t.assignee))],
  };
}
