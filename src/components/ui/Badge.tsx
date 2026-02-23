import { clsx } from "clsx";
import type { Priority } from "@/types";

interface BadgeProps {
  priority: Priority;
}

const priorityConfig: Record<
  Priority,
  { label: string; className: string }
> = {
  low: {
    label: "Low",
    className: "bg-gray-100 text-gray-700",
  },
  medium: {
    label: "Medium",
    className: "bg-blue-100 text-blue-700",
  },
  high: {
    label: "High",
    className: "bg-orange-100 text-orange-700",
  },
  urgent: {
    label: "Urgent",
    className: "bg-red-100 text-red-700",
  },
};

export function Badge({ priority }: BadgeProps) {
  const config = priorityConfig[priority];
  return (
    <span
      className={clsx(
        "inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium",
        config.className
      )}
    >
      {config.label}
    </span>
  );
}
