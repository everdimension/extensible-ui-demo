import { useEffect, useRef } from "react";
import { createStore } from "hooksy";

const [useAudioStore] = createStore({ src: null, playingState: "pause" });

export function useAudioPlayback() {
  const [{ src, playingState }, setPlayingState] = useAudioStore();
  const activeAudio = useRef(null);

  useEffect(() => {
    const audio = new Audio(src);
    activeAudio.current = audio;
    // audio.currentTime = Math.floor(audio.duration * 0.9);
    audio.currentTime = 90;
    function handleEnd() {
      setPlayingState({ src: null, playingState: "pause" });
    }
    audio.addEventListener("ended", handleEnd);
    return () => {
      audio.removeEventListener("ended", handleEnd);
      audio.pause();
    };
  }, [src]);

  useEffect(() => {
    if (playingState === "play") {
      activeAudio.current.play();
    } else if (playingState === "pause") {
      activeAudio.current.pause();
    }
  }, [playingState]);

  return { src, playingState };
}

export { useAudioStore };
