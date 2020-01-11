import React from "react";
import isHotKey from "is-hotkey";

const { useEffect, useRef } = React;

interface Props {
  combo: string;
  onKeyDown: (event: KeyboardEvent) => void;
  disabled?: boolean;
}

export function Keybinding({ combo, onKeyDown, disabled = false }: Props) {
  const handler = useRef(onKeyDown);
  useEffect(() => {
    handler.current = onKeyDown;
  }, [onKeyDown]);

  useEffect(() => {
    if (disabled) {
      return;
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (isHotKey(combo, event)) {
        event.preventDefault();
        if (!handler.current) {
          return;
        }
        handler.current(event);
      }
    }
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [combo, disabled]);
  return null;
}
