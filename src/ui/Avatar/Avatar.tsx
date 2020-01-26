import React from "react";

export const Avatar: React.FunctionComponent<{
  src: string;
  size?: number;
}> = ({ src, size = 48 }) => {
  return (
    <img
      src={src}
      style={{ height: size, width: size, borderRadius: "50%" }}
      alt=""
    />
  );
};
