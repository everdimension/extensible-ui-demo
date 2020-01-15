import React from "react";
import s from "./AudioWaves.module.css";

export function AudioWaves({ duration, isPlaying = false }) {
  const a = Array.from({ length: duration / 500 });
  return (
    <div>
      {a.map((_, index) => (
        <span
          key={index}
          className={isPlaying ? s.playing : undefined}
          style={{
            display: "inline-block",
            width: 2,
            height: 8 + Math.floor(Math.random() * 5),
            backgroundColor: "black",
            marginRight: 2,
            animationDirection: index % 2 === 0 ? 'alternate' : 'alternate-reverse',
            ['--animation-duration' as any]: `${0.2 + Math.random() * 0.2}s`
          }}
        ></span>
      ))}
    </div>
  );
}
