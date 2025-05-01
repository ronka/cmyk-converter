import { useState, useEffect, useCallback } from "react";

// Basic validator example: check if the value is an array
function isArray<T>(value: unknown): value is T[] {
  return Array.isArray(value);
}

/**
 * A custom hook that persists state in localStorage.
 * @param key The key to use for localStorage.
 * @param initialValue The initial value to use if nothing is found in localStorage or if the stored value is invalid.
 * @param validator An optional function to validate the data retrieved from localStorage.
 * @returns A stateful value, and a function to update it.
 */
export function usePersistentState<T>(
  key: string,
  initialValue: T,
  validator?: (value: unknown) => value is T
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [state, setState] = useState<T>(() => {
    // Initialize state from localStorage on mount
    if (typeof window === "undefined") {
      return initialValue;
    }
    try {
      const storedValue = localStorage.getItem(key);
      if (storedValue !== null) {
        const parsedValue = JSON.parse(storedValue);
        // Use validator if provided, otherwise assume the parsed value is correct type T
        if (!validator || validator(parsedValue)) {
          return parsedValue;
        } else {
          console.warn(
            `Invalid data found in localStorage for key "${key}". Using initial value.`
          );
          // Optionally remove invalid data
          // localStorage.removeItem(key);
        }
      }
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      // Optionally remove corrupted data
      // localStorage.removeItem(key);
    }
    return initialValue;
  });

  // Save state to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(key, JSON.stringify(state));
      } catch (error) {
        console.error(`Error writing localStorage key "${key}":`, error);
      }
    }
  }, [key, state]);

  return [state, setState];
}

// Example validator specifically for CMYK array
export function isValidCmykArray(
  value: unknown
): value is import("@/lib/types").CMYK[] {
  if (!Array.isArray(value)) {
    return false;
  }
  // Basic check: Ensure every item looks like a CMYK object
  return value.every(
    (item) =>
      typeof item === "object" &&
      item !== null &&
      typeof item.c === "number" &&
      typeof item.m === "number" &&
      typeof item.y === "number" &&
      typeof item.k === "number"
  );
}
