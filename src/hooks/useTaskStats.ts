import type { Task } from "@/types";

// TODO 3: Implement this hook
//
// The StatsPanel displays whatever this hook returns,
// but currently everything is zero. Compute real stats from the tasks array.

export interface TaskStats {
  total: number;
  byStatus: { todo: number; in_progress: number; done: number };
  byPriority: { low: number; medium: number; high: number; urgent: number };
  completionRate: number;
}

export function useTaskStats(_tasks: Task[]): TaskStats {
  return {
    total: 0,
    byStatus: { todo: 0, in_progress: 0, done: 0 },
    byPriority: { low: 0, medium: 0, high: 0, urgent: 0 },
    completionRate: 0,
  };
}
