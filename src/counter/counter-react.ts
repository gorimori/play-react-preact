import { useCallback, useReducer } from "react";

const increment = (n: number) => n + 1;
const decrement = (n: number) => (n <= 0 ? 0 : n - 1);
const reducer = (prev: number, action: "inc" | "dec") => {
  switch (action) {
    case "dec":
      return decrement(prev);
    case "inc":
      return increment(prev);
  }
};

export const useCounter = (): [number, () => void, () => void] => {
  const [n, dispatch] = useReducer(reducer, 0);
  const inc = useCallback(() => dispatch("inc"), []);
  const dec = useCallback(() => dispatch("dec"), []);

  return [n, inc, dec];
};
