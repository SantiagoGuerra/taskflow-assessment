# TaskFlow - Technical Assessment

Welcome! This is a **2-hour technical assessment** (15 min briefing + **75 min coding** + 30 min debrief) where you'll implement state management, CRUD operations, filtering, and performance optimizations in a partially built Kanban task board.

---

## Assessment Format

This assessment has **3 phases**:

### Phase 1: Briefing (15 minutes)
- Evaluator explains the project and answers your questions
- Fork the repository and set up your environment

### Phase 2: Execution (75 minutes) - RECORDING YOURSELF
- **You'll be ALONE** (evaluator not present)
- **Record your screen and audio** (Loom recommended)
- **Think out loud** - Explain your reasoning as you code
- Implement the 4 required features
- **STRICT TIME LIMIT: 75 minutes**

### Phase 3: Debrief (30 minutes)
- Evaluator will have reviewed your code and recording
- Discuss your implementation decisions and approach
- Technical Q&A

---

## What You'll Build

### Already Implemented

The foundation is ready:
- ✅ React 18 with TypeScript and Vite
- ✅ Complete UI with Tailwind CSS (responsive, polished)
- ✅ TaskBoard, TaskColumn, TaskCard, FilterBar, StatsPanel components
- ✅ Reusable UI components (Button, Badge, Input, Select, Modal)
- ✅ TypeScript types for all data structures
- ✅ Mock API service with simulated latency and errors
- ✅ RenderTracker debug component for measuring re-renders
- ✅ Static task board with hardcoded sample data (9 tasks across 3 columns)

### Your Tasks - 4 Required Features

You **MUST** implement these features:

#### 1. Centralized State Management with Context + useReducer
- Implement `taskReducer` to handle 5 action types: `SET_TASKS`, `ADD_TASK`, `UPDATE_TASK`, `DELETE_TASK`, `MOVE_TASK`
- Create a `TaskProvider` component using `useReducer` + `createContext`
- Export a `useTaskContext` custom hook with proper error handling
- Wrap the app with `TaskProvider` in `App.tsx`
- Replace the hardcoded import in `TaskBoard.tsx` with `useTaskContext()`

#### 2. Task CRUD Operations (Create, Delete, Move)
- Wire the **Create Task** form (`TaskForm.tsx`) to dispatch `ADD_TASK` through context (generate unique id, set timestamps)
- Implement `handleDelete` in `TaskBoard.tsx` to dispatch `DELETE_TASK`
- Implement `handleMove` in `TaskBoard.tsx` to dispatch `MOVE_TASK` (Todo → In Progress → Done → Todo)
- Remove the `disabled` prop and "(TODO)" labels from buttons in `TaskCard.tsx`

#### 3. Custom Hooks for Filtering & Derived State
- Implement `useTaskFilters` hook: manage filter state, filter with AND logic, case-insensitive search, memoize with `useMemo`
- Implement `useTaskStats` hook: compute total count, count by status/priority, completion rate, memoize with `useMemo`
- Stats should update in real-time as tasks are created/deleted/moved

#### 4. Performance Optimization
- Wrap `TaskCard` and `TaskColumn` with `React.memo` to prevent unnecessary re-renders
- Use `useCallback` in `TaskBoard` for `handleDelete` and `handleMove` so callback references are stable
- Verify with the RenderTracker that render counts stay low after interactions
- Be prepared to explain **why** each optimization works in the debrief

---

## Getting Started

### Setup (During Briefing Phase)

1. **Fork this repository**

2. **Clone your fork**:
```bash
git clone https://github.com/YOUR-USERNAME/taskflow-assessment.git
cd taskflow-assessment
```

3. **Create your working branch**:
```bash
git checkout -b feature/implementation
```

4. **Install dependencies and start the dev server**:
```bash
npm install
npm run dev
```

5. **Verify everything works**:
- Open http://localhost:5173
- You should see the TaskFlow board with 9 sample tasks across 3 columns (To Do, In Progress, Done)
- The stats panel shows all zeros (expected — you'll fix this in Requirement 3)
- The filter bar renders but doesn't filter (expected — you'll fix this in Requirement 3)
- The buttons show "(TODO)" and are disabled (expected — you'll fix this in Requirement 2)

### During Execution Phase (75 minutes)

**When evaluator says "START":**

1. **START YOUR RECORDING** (Loom, Zoom, or similar)
2. Say the current time out loud
3. Open the files marked with ★ in the project structure below — they contain TODO comments
4. Begin implementing the 4 features
5. **Think out loud** constantly - explain what you're doing and why

**When time is up (75 minutes):**

1. **STOP CODING** immediately
2. Commit your work:
```bash
git add .
git commit -m "Complete assessment: [list features completed]"
git push origin feature/implementation
```
3. **STOP YOUR RECORDING**
4. Upload video (Loom/YouTube unlisted)
5. Create Pull Request in YOUR fork
6. Send evaluator:
   - PR link
   - Recording link

---

## Project Structure

```
src/
├── api/
│   └── mockApi.ts              # Mock API with simulated delays + errors (PROVIDED)
├── components/
│   ├── ui/
│   │   ├── Badge.tsx           # Priority badge component (PROVIDED)
│   │   ├── Button.tsx          # Button with variants (PROVIDED)
│   │   ├── Input.tsx           # Form input (PROVIDED)
│   │   ├── Modal.tsx           # Modal dialog (PROVIDED)
│   │   └── Select.tsx          # Select dropdown (PROVIDED)
│   ├── FilterBar.tsx           # Filter controls UI (PROVIDED)
│   ├── RenderTracker.tsx       # Debug render counter (PROVIDED)
│   ├── StatsPanel.tsx          # Statistics display (PROVIDED)
│   ├── TaskBoard.tsx           # ★ Main board - TODO 1, 2, 4
│   ├── TaskCard.tsx            # ★ Task card - TODO 2, 4
│   ├── TaskColumn.tsx          # ★ Column wrapper - TODO 4
│   └── TaskForm.tsx            # ★ Create task form - TODO 2
├── context/
│   └── TaskContext.tsx          # ★ State management - TODO 1
├── data/
│   └── sampleTasks.ts          # Hardcoded sample data (PROVIDED)
├── hooks/
│   ├── useTaskFilters.ts       # ★ Filter hook - TODO 3
│   └── useTaskStats.ts         # ★ Stats hook - TODO 3
├── types/
│   └── index.ts                # TypeScript types (PROVIDED)
├── App.tsx                     # ★ Root component - TODO 1
├── index.css                   # Tailwind styles (PROVIDED)
└── main.tsx                    # Entry point (PROVIDED)
```

Files marked with ★ contain TODO comments that guide your implementation.

---

## Types Reference

```typescript
type Priority = "low" | "medium" | "high" | "urgent";
type Status = "todo" | "in_progress" | "done";

interface Task {
  id: string;
  title: string;
  description: string;
  priority: Priority;
  status: Status;
  assignee: string;
  createdAt: string;  // ISO date string
  updatedAt: string;  // ISO date string
}

type TaskAction =
  | { type: "SET_TASKS"; payload: Task[] }
  | { type: "ADD_TASK"; payload: Task }
  | { type: "UPDATE_TASK"; payload: { id: string; updates: Partial<Task> } }
  | { type: "DELETE_TASK"; payload: { id: string } }
  | { type: "MOVE_TASK"; payload: { id: string; status: Status } };
```

---

## Mock API Reference

```typescript
import { taskApi } from "@/api/mockApi";

// Fetch all tasks (300-800ms delay, 15% error rate)
const tasks = await taskApi.fetchTasks();

// Create a new task
const newTask = await taskApi.createTask({
  title: "...",
  description: "...",
  priority: "medium",
  assignee: "Alice",
});

// Delete a task
const deleted = await taskApi.deleteTask("task-1");

// Move a task to a different column
const moved = await taskApi.moveTask("task-1", "in_progress");

// Disable errors for testing
taskApi.setErrorRate(0);
```

---

## Evaluation Criteria

You'll be evaluated on:

1. **Functionality** (40%) - Do the features work correctly?
2. **Code Quality** (25%) - Clean, organized, well-structured code?
3. **Problem Solving** (20%) - How do you approach and solve challenges?
4. **Communication** (15%) - Can you explain your thinking clearly?

**Important**: We care more about **HOW** you solve problems than getting everything perfect.

---

## Tips for Success

### Time Management
- Don't get stuck on one feature for too long
- Start with Requirement 1 — everything else depends on having the context set up
- Start with basic implementations first
- Test as you go
- Commit frequently

| Requirement | Suggested Time |
|-------------|---------------|
| 1. Context + useReducer | ~20 min |
| 2. CRUD Operations | ~20 min |
| 3. Custom Hooks | ~20 min |
| 4. Performance | ~15 min |

### Communication
- **Think out loud constantly** - "I'm going to...", "This should...", "The error is..."
- Explain your decisions: "I'm using useReducer because..."
- Narrate what you're debugging: "Let me check the console..."

### If You Get Stuck
- Read the TODO comments in each file — they include detailed instructions and hints
- Check how the existing components work (good reference for patterns)
- The RenderTracker is your friend — use it to verify performance optimizations
- Google and AI assistants are allowed — just explain your usage in the debrief

---

## Troubleshooting

### "Cannot find module '@/...'"
```bash
# Make sure you ran npm install
npm install
```
The `@/` alias is configured in `tsconfig.json` and `vite.config.ts`.

### Port 5173 is in use
```bash
npx kill-port 5173
# Or start on a different port
npm run dev -- --port 3000
```

### "useTaskContext must be used within a TaskProvider"
This is expected until you complete Requirement 1. Wrap `<TaskBoard />` with `<TaskProvider>` in `App.tsx`.

### Mock API keeps failing
The API has a 15% error rate by default. Call `taskApi.setErrorRate(0)` to disable errors while developing, then re-enable for testing error handling.

### App shows blank screen / console errors
- Open browser DevTools (F12) and check the Console tab
- Most likely a missing import or typo
- If you see a React error boundary, read the error message — it usually points to the exact file and line
