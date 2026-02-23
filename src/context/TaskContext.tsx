import { createContext, useContext } from "react";
import type { Task, TaskAction } from "@/types";

// TODO 1: Implement centralized state management
//
// - Implement a taskReducer that handles all TaskAction types (see @/types)
// - Create a TaskProvider component that wraps the app
// - The useTaskContext hook below should work once your provider is in place

interface TaskContextValue {
  tasks: Task[];
  dispatch: React.Dispatch<TaskAction>;
}

const TaskContext = createContext<TaskContextValue | null>(null);

export function useTaskContext(): TaskContextValue {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error(
      "useTaskContext must be used within a TaskProvider."
    );
  }
  return context;
}
