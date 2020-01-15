import React from "react";
// import url from "./avatar2.jpeg";

export const Avatar: React.FunctionComponent<{ size?: number }> = ({
  size = 60,
}) => {
  return (
    <img
      src="http://placehold.it/100x100"
      style={{ height: size, width: size, borderRadius: "50%" }}
      alt=""
    />
  );
};
