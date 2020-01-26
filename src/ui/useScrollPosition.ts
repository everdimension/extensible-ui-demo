import { useEffect, useRef } from "react";

export function useScrollPosition({
  element = window,
  effect,
}: {
  element?: HTMLElement | Window;
  effect: (scrollTop: number) => void;
}) {
  const effectRef = useRef(effect);

  useEffect(() => {
    effectRef.current = effect;
  });

  useEffect(() => {
    const options = { passive: true };
    function handleScroll() {
      effectRef.current(
        element === window
          ? element.scrollY
          : (element as HTMLElement).scrollTop,
      );
    }
    element.addEventListener("scroll", handleScroll, options);
    return () => {
      element.removeEventListener("scroll", handleScroll);
    };
  });
}
