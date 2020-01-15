import React from "react";
import { Box } from "grommet";
import { FeatherIcon } from "../../../ui/FeatherIcon";
import { useAudioStore } from "../audioState";
import { AudioWaves } from "./AudioWaves";

export function AudioRecording({ src, showStopControl = false }) {
  const [{ src: currentSrc, playingState }, setAudioState] = useAudioStore();
  const isPlaying = currentSrc === src && playingState === "play";
  return (
    <Box direction="row" flex={{ shrink: 0 }} align="center" gap="xsmall">
      <button
        onClick={() => {
          setAudioState({
            src,
            playingState: isPlaying ? "pause" : "play",
          });
        }}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "none",
          borderRadius: "50%",
          backgroundColor: "black",
          width: 42,
          height: 42,
        }}
      >
        <FeatherIcon
          name={isPlaying ? "pause" : "play"}
          svgAttrs={{ color: "white", fill: "white" }}
        ></FeatherIcon>
      </button>
      {showStopControl ? (
        <button
          onClick={() => {
            setAudioState({ src: null, playingState: "pause" });
          }}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "none",
            borderRadius: "50%",
            backgroundColor: "black",
            width: 28,
            height: 28,
          }}
        >
          <FeatherIcon
            name="square"
            svgAttrs={{ color: "white", fill: "white", width: 12, height: 12 }}
          ></FeatherIcon>
        </button>
      ) : null}
      <AudioWaves isPlaying={isPlaying} duration={10000}></AudioWaves>
    </Box>
  );
}
