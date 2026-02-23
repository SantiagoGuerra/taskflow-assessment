import type { Task } from "@/types";

/**
 * Hardcoded sample tasks for initial rendering.
 * In the completed assessment, these are replaced by state managed
 * through Context + useReducer (Requirement 1).
 */
export const sampleTasks: Task[] = [
  {
    id: "task-1",
    title: "Design landing page mockup",
    description:
      "Create wireframes and high-fidelity mockups for the new landing page. Include desktop and mobile versions.",
    priority: "high",
    status: "todo",
    assignee: "Alice",
    createdAt: "2025-01-15T09:00:00Z",
    updatedAt: "2025-01-15T09:00:00Z",
  },
  {
    id: "task-2",
    title: "Set up CI/CD pipeline",
    description:
      "Configure GitHub Actions for automated testing and deployment to staging environment.",
    priority: "urgent",
    status: "todo",
    assignee: "Bob",
    createdAt: "2025-01-14T14:30:00Z",
    updatedAt: "2025-01-14T14:30:00Z",
  },
  {
    id: "task-3",
    title: "Implement user authentication",
    description:
      "Add login/signup flow with JWT tokens. Include password reset functionality.",
    priority: "high",
    status: "in_progress",
    assignee: "Alice",
    createdAt: "2025-01-13T11:00:00Z",
    updatedAt: "2025-01-16T08:00:00Z",
  },
  {
    id: "task-4",
    title: "Write API documentation",
    description:
      "Document all REST endpoints using OpenAPI spec. Include request/response examples.",
    priority: "medium",
    status: "in_progress",
    assignee: "Charlie",
    createdAt: "2025-01-12T16:00:00Z",
    updatedAt: "2025-01-15T10:00:00Z",
  },
  {
    id: "task-5",
    title: "Fix header responsive issues",
    description:
      "Navigation menu overlaps on tablet breakpoints. Hamburger menu doesn't close on link click.",
    priority: "medium",
    status: "todo",
    assignee: "Bob",
    createdAt: "2025-01-16T08:00:00Z",
    updatedAt: "2025-01-16T08:00:00Z",
  },
  {
    id: "task-6",
    title: "Database schema migration",
    description:
      "Migrate user table to support multi-tenancy. Add organization_id foreign key.",
    priority: "urgent",
    status: "in_progress",
    assignee: "Alice",
    createdAt: "2025-01-10T09:00:00Z",
    updatedAt: "2025-01-16T12:00:00Z",
  },
  {
    id: "task-7",
    title: "Add unit tests for utils",
    description:
      "Write tests for date formatting, string helpers, and validation functions. Target 80% coverage.",
    priority: "low",
    status: "done",
    assignee: "Charlie",
    createdAt: "2025-01-08T14:00:00Z",
    updatedAt: "2025-01-14T17:00:00Z",
  },
  {
    id: "task-8",
    title: "Optimize bundle size",
    description:
      "Analyze bundle with webpack-bundle-analyzer. Tree-shake unused dependencies. Target < 200KB gzipped.",
    priority: "low",
    status: "done",
    assignee: "Bob",
    createdAt: "2025-01-09T10:00:00Z",
    updatedAt: "2025-01-13T16:00:00Z",
  },
  {
    id: "task-9",
    title: "Setup error monitoring",
    description:
      "Integrate Sentry for error tracking. Configure source maps and alert rules.",
    priority: "medium",
    status: "done",
    assignee: "Alice",
    createdAt: "2025-01-07T11:00:00Z",
    updatedAt: "2025-01-12T15:00:00Z",
  },
];

export const COLUMNS = [
  {
    id: "todo" as const,
    title: "To Do",
    color: "border-blue-400",
    bgColor: "bg-blue-50",
  },
  {
    id: "in_progress" as const,
    title: "In Progress",
    color: "border-amber-400",
    bgColor: "bg-amber-50",
  },
  {
    id: "done" as const,
    title: "Done",
    color: "border-green-400",
    bgColor: "bg-green-50",
  },
];
