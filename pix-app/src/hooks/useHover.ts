import { useState, useEffect, useRef } from "react";

export default function useHover<T extends HTMLElement>() {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<T>(null);

  function enter() {
    setHovered(true);
  }

  function leave() {
    setHovered(false);
  }

  useEffect(() => {
    const node = ref.current;
    if (node) {
      node.addEventListener("mouseenter", enter);
      node.addEventListener("mouseleave", leave);

      return () => {
        if (node) {
          node.removeEventListener("mouseenter", enter);
          node.removeEventListener("mouseleave", leave);
        }
      };
    }
  }, []);

  return { hovered, ref };
}
