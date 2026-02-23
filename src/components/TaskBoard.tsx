import { useState } from "react";
import { TaskColumn } from "./TaskColumn";
import { TaskForm } from "./TaskForm";
import { FilterBar } from "./FilterBar";
import { StatsPanel } from "./StatsPanel";
import { Button } from "./ui/Button";
import { Plus, LayoutDashboard } from "lucide-react";
import { sampleTasks, COLUMNS } from "@/data/sampleTasks";
import { useTaskFilters } from "@/hooks/useTaskFilters";
import { useTaskStats } from "@/hooks/useTaskStats";
import type { Status } from "@/types";
import { RenderTracker } from "./RenderTracker";

export function TaskBoard() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  // TODO 1: Replace hardcoded data with context
  const tasks = sampleTasks;

  const {
    filteredTasks,
    filters,
    setSearch,
    setPriority,
    setAssignee,
    resetFilters,
    availableAssignees,
  } = useTaskFilters(tasks);

  const stats = useTaskStats(tasks);

  // TODO 2: Implement these handlers
  const handleDelete = (_id: string) => {
    console.log("TODO: Delete task", _id);
  };

  const handleMove = (_id: string, _status: Status) => {
    console.log("TODO: Move task", _id, "to", _status);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <LayoutDashboard className="text-blue-600" size={28} />
            <div>
              <h1 className="text-xl font-bold text-gray-900">TaskFlow</h1>
              <p className="text-xs text-gray-500">
                State Management Assessment
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <RenderTracker name="TaskBoard" />
            <Button onClick={() => setIsFormOpen(true)}>
              <Plus size={16} className="mr-1" />
              New Task
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-6 space-y-6">
        <StatsPanel stats={stats} />

        <FilterBar
          filters={filters}
          onSearchChange={setSearch}
          onPriorityChange={setPriority}
          onAssigneeChange={setAssignee}
          onReset={resetFilters}
          availableAssignees={availableAssignees}
        />

        <div className="flex gap-4 overflow-x-auto pb-4">
          {COLUMNS.map((col) => (
            <TaskColumn
              key={col.id}
              config={col}
              tasks={filteredTasks.filter((t) => t.status === col.id)}
              onDelete={handleDelete}
              onMove={handleMove}
            />
          ))}
        </div>
      </main>

      <TaskForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </div>
  );
}
