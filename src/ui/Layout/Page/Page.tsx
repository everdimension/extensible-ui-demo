import React, { useState } from "react";
import { useSpring, animated, config } from "react-spring";
import { Heading } from "grommet";
import { UIContent } from "../../../lib/regions";
import { useScrollPosition } from "../../useScrollPosition";
import { useDocumentTitle } from '../../documentTitle';

const base = "Extensible Apps";

export const Page: React.FunctionComponent<{
  title?: string;
  documentTitle?: string;
}> = ({ title, documentTitle, children }) => {
  const [showInHeader, setShowInHeader] = useState(false);
  const props = useSpring({
    opacity: showInHeader ? 1 : 0,
    config: config.stiff,
  });
  useDocumentTitle(documentTitle ? `${documentTitle} | ${base}` : base);
  useScrollPosition({
    effect: offset => {
      setShowInHeader(offset > 100);
    },
  });
  return (
    <>
      <UIContent name="toolbar/left">
        <animated.h3 style={props}>{title}</animated.h3>
      </UIContent>
      {title ? (
        <Heading style={{ margin: 0, marginBottom: 10 }}>{title}</Heading>
      ) : null}

      {children}
    </>
  );
};
