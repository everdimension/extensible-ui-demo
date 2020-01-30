import React, { useEffect, useRef, useState } from "react";
import { useLoadingState } from "../../data/useLoadingState";

function getNewRandomNumberInRange(prevNumber: number, size: number) {
  let n = 0;
  const range = [];
  for (let i = 0; i < size; i++) {
    if (i === prevNumber) {
      n++;
    }
    range.push(n++);
  }
  const index = Math.floor(Math.random() * size);
  return range[index];
}

function useInterval(callback: () => void, delay: number | null) {
  const savedCallback = useRef<() => void>();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const strings = [
  "Application",
  "ApPl1Ca710n",
  "4PPLiC47I0N",
  "4PPLiC47I0N",
  "4PPλiC47IØN",
  "Appl1ca710n",
  "Appλ1ca710n",
  "ApFF1ca710n",
  "ApFF1ca71Øn",
  "4pPL1c47ioN",
  "WWPL1c47ioN",
  "aPpl1CA710n",
  "aPpl1ξA710n",
  "a∏∏l1CA71Øn",
  "aρρL1CA71Øn",
  "4pplIc47i0N",
  "4ppλIc47iØN",
  "4pplIc47I0N",
  "Appl1cat1on",
  "FPPLiC47I0N",
];
function useLoadingText({ active }: { active: boolean }) {
  const [index, setIndex] = useState(0);
  useInterval(
    () => {
      setIndex(index => getNewRandomNumberInRange(index, strings.length));
    },
    active ? 80 : null,
  );
  return strings[index];
}

export const Logo: React.FunctionComponent<{}> = () => {
  const isLoading = useLoadingState();
  const str = useLoadingText({ active: isLoading });
  return (
    <span
      style={{
        padding: "6px 10px",
        backgroundColor: "black",
        color: "white",
        fontFamily: "monospace",
      }}
    >
      {/* Application */}
      {/* ApPl1Ca710n */}
      {/* Appl1ca710n */}
      <span>{str}</span>
    </span>
  );
};
