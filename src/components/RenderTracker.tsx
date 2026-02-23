import { useRef } from "react";

interface RenderTrackerProps {
  name: string;
}

/**
 * Debug component that displays how many times a component has rendered.
 * Already implemented - use this inside components to track render counts.
 *
 * Usage:
 *   <RenderTracker name="TaskCard" />
 *
 * This is useful for Requirement 4 (Performance Optimization) to identify
 * unnecessary re-renders and verify that optimizations are working.
 */
export function RenderTracker({ name }: RenderTrackerProps) {
  const renderCount = useRef(0);
  renderCount.current += 1;

  return (
    <span
      className="inline-flex items-center gap-1 text-[10px] font-mono text-gray-400"
      title={`${name} has rendered ${renderCount.current} times`}
    >
      <span
        className={
          renderCount.current > 5
            ? "text-red-400"
            : renderCount.current > 2
              ? "text-amber-400"
              : "text-green-400"
        }
      >
        renders: {renderCount.current}
      </span>
    </span>
  );
}
