import React from "react";
import { UIRegionProvider } from '../lib/regions';
import { BrowserRouter } from "react-router-dom";
import { Grommet } from "grommet";
import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import { systemFontStackValue } from "../ui/system-font-stack";

export const Root: React.FunctionComponent<{}> = ({ children }) => {
  return (
    <UIRegionProvider>
      <BrowserRouter>
        <Grommet
          plain={false}
          theme={{
            global: {
              font: {
                family: systemFontStackValue,
              },
              borderSize: {
                xsmall: "3px",
              },
              colors: {
                text: 'black',
                border: {
                  light: "black",
                },
              },
            },
          }}
        >
          {children}
        </Grommet>
      </BrowserRouter>
    </UIRegionProvider>
  );
};
