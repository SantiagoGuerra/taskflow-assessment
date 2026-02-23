# Quick Start Guide

## Phase 1: Briefing (15 min)

```bash
# 1. Fork this repo on GitHub, then clone your fork
git clone https://github.com/YOUR_USERNAME/taskflow-assessment.git
cd taskflow-assessment

# 2. Create your branch
git checkout -b feature/implementation

# 3. Install and start
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) — you should see a Kanban board with sample tasks.

---

## Phase 2: Execution (75 min) — Start Recording!

### Requirement 1: Context + useReducer (~20 min)
1. Open `src/context/TaskContext.tsx` — implement the reducer and provider
2. Open `src/App.tsx` — wrap with `<TaskProvider>`
3. Open `src/components/TaskBoard.tsx` — replace `sampleTasks` with `useTaskContext()`

### Requirement 2: CRUD Operations (~20 min)
1. Open `src/components/TaskBoard.tsx` — implement `handleDelete` and `handleMove`
2. Open `src/components/TaskForm.tsx` — wire form submission to dispatch
3. Open `src/components/TaskCard.tsx` — remove `disabled` props from buttons

### Requirement 3: Custom Hooks (~20 min)
1. Open `src/hooks/useTaskFilters.ts` — implement filter logic with useMemo
2. Open `src/hooks/useTaskStats.ts` — implement stats computation with useMemo

### Requirement 4: Performance (~15 min)
1. Wrap `TaskCard` and `TaskColumn` with `React.memo`
2. Use `useCallback` for handlers in `TaskBoard`
3. Verify render counts stay low using the RenderTracker displays

---

## Submission

```bash
git push origin feature/implementation
```

Create a Pull Request: `feature/implementation` → `main`

Include your recording link in the PR description.

---

## Key Files

| File | What to do |
|------|-----------|
| `src/context/TaskContext.tsx` | Implement reducer + provider (Req 1) |
| `src/App.tsx` | Wrap with TaskProvider (Req 1) |
| `src/components/TaskBoard.tsx` | Connect context + CRUD handlers (Req 1, 2, 4) |
| `src/components/TaskForm.tsx` | Wire create form (Req 2) |
| `src/components/TaskCard.tsx` | Wire delete/move + memo (Req 2, 4) |
| `src/components/TaskColumn.tsx` | Wrap with memo (Req 4) |
| `src/hooks/useTaskFilters.ts` | Implement filter hook (Req 3) |
| `src/hooks/useTaskStats.ts` | Implement stats hook (Req 3) |

## Useful References

- `src/types/index.ts` — All TypeScript types
- `src/api/mockApi.ts` — Mock API docs (for bonus async work)
- `src/data/sampleTasks.ts` — Sample data structure
