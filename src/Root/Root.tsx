import React from "react";
import { SlotFillProvider } from "@wordpress/components";
import { BrowserRouter } from "react-router-dom";
import { Grommet, ThemeType } from "grommet";
import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import { systemFontStackValue } from "../ui/system-font-stack";

export const Root: React.FunctionComponent<{}> = ({ children }) => {
  return (
    <SlotFillProvider>
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
    </SlotFillProvider>
  );
};
