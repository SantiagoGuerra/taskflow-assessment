import { clsx } from "clsx";
import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function Input({ label, className, id, ...props }: InputProps) {
  return (
    <div>
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {label}
        </label>
      )}
      <input
        id={id}
        className={clsx(
          "block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm",
          "placeholder-gray-400 shadow-sm",
          "focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500",
          "disabled:bg-gray-50 disabled:text-gray-500",
          className
        )}
        {...props}
      />
    </div>
  );
}
