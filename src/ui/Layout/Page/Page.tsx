import React from "react";
import { Heading } from "grommet";

export const Page: React.FunctionComponent<{ title: string }> = ({
  title,
  children,
}) => {
  return (
    <>
      <Heading style={{ margin: 0, marginBottom: 10 }}>{title}</Heading>
      {children}
    </>
  );
};
