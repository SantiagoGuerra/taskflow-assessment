import type { Task, TaskFormData, Status } from "@/types";
import { sampleTasks } from "@/data/sampleTasks";

/**
 * Mock API service that simulates network requests with realistic delays.
 * This is already implemented - use it in Requirement 3 for async operations.
 *
 * Features:
 * - Simulated network latency (300-800ms)
 * - Configurable error rate for testing error handling
 * - In-memory data store initialized from sample tasks
 *
 * Usage example:
 *   const tasks = await taskApi.fetchTasks();
 *   const newTask = await taskApi.createTask({ title: "...", ... });
 */

let store: Task[] = [...sampleTasks];
let errorRate = 0.15; // 15% chance of simulated error

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function randomDelay(): Promise<void> {
  return delay(300 + Math.random() * 500);
}

function shouldFail(): boolean {
  return Math.random() < errorRate;
}

function generateId(): string {
  return `task-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
}

export const taskApi = {
  /**
   * Fetch all tasks. Returns a copy of the current store.
   */
  async fetchTasks(): Promise<Task[]> {
    await randomDelay();
    if (shouldFail()) {
      throw new Error("Failed to fetch tasks. Please try again.");
    }
    return [...store];
  },

  /**
   * Create a new task. Returns the created task with generated id and timestamps.
   */
  async createTask(data: TaskFormData): Promise<Task> {
    await randomDelay();
    if (shouldFail()) {
      throw new Error("Failed to create task. Please try again.");
    }
    const now = new Date().toISOString();
    const task: Task = {
      id: generateId(),
      ...data,
      status: "todo",
      createdAt: now,
      updatedAt: now,
    };
    store = [...store, task];
    return task;
  },

  /**
   * Update an existing task. Returns the updated task.
   */
  async updateTask(
    id: string,
    updates: Partial<Omit<Task, "id" | "createdAt">>
  ): Promise<Task> {
    await randomDelay();
    if (shouldFail()) {
      throw new Error("Failed to update task. Please try again.");
    }
    const index = store.findIndex((t) => t.id === id);
    if (index === -1) {
      throw new Error(`Task with id "${id}" not found.`);
    }
    const updated: Task = {
      ...store[index]!,
      ...updates,
      updatedAt: new Date().toISOString(),
    };
    store = store.map((t) => (t.id === id ? updated : t));
    return updated;
  },

  /**
   * Delete a task by id. Returns the deleted task.
   */
  async deleteTask(id: string): Promise<Task> {
    await randomDelay();
    if (shouldFail()) {
      throw new Error("Failed to delete task. Please try again.");
    }
    const task = store.find((t) => t.id === id);
    if (!task) {
      throw new Error(`Task with id "${id}" not found.`);
    }
    store = store.filter((t) => t.id !== id);
    return task;
  },

  /**
   * Move a task to a different status column. Returns the updated task.
   */
  async moveTask(id: string, status: Status): Promise<Task> {
    return this.updateTask(id, { status });
  },

  /**
   * Configure the simulated error rate (0 to 1).
   * Useful for testing: set to 0 to disable errors, 1 for always-error.
   */
  setErrorRate(rate: number): void {
    errorRate = Math.max(0, Math.min(1, rate));
  },

  /**
   * Reset the store to initial sample data.
   */
  reset(): void {
    store = [...sampleTasks];
  },
};
