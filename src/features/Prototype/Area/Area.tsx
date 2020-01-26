import React from "react";

export const Area: React.FunctionComponent<{
  style?: React.CSSProperties;
  name?: string;
}> = ({ style, name }) => {
  const defaultPadding = 5;
  const styles = Object.assign(
    {
      // "--color": "hsl(340, 5%, 85%)",
      "--color": "hsl(340, 5%, 5%)",
      alignSelf: "center",
      width: 300,
      height: 50,
      backgroundColor: "var(--color)",
      borderRadius: 15,
      padding: defaultPadding,
    },
    style,
  );
  return (
    <div style={styles}>
      <div
        style={{
          border: "3px dotted white",
          borderRadius: styles.borderRadius - styles.padding * 0.8,
          height: "100%",
          color: "white",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {name}
      </div>
    </div>
  );
};
