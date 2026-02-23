export type Priority = "low" | "medium" | "high" | "urgent";

export type Status = "todo" | "in_progress" | "done";

export interface Task {
  id: string;
  title: string;
  description: string;
  priority: Priority;
  status: Status;
  assignee: string;
  createdAt: string;
  updatedAt: string;
}

export interface TaskFormData {
  title: string;
  description: string;
  priority: Priority;
  assignee: string;
}

export type TaskAction =
  | { type: "SET_TASKS"; payload: Task[] }
  | { type: "ADD_TASK"; payload: Task }
  | { type: "UPDATE_TASK"; payload: { id: string; updates: Partial<Task> } }
  | { type: "DELETE_TASK"; payload: { id: string } }
  | { type: "MOVE_TASK"; payload: { id: string; status: Status } };

export interface TaskFilters {
  search: string;
  priority: Priority | "all";
  assignee: string;
}

export interface ColumnConfig {
  id: Status;
  title: string;
  color: string;
  bgColor: string;
}
