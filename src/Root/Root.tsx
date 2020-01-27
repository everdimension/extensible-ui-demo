import React from "react";
import { AreaProvider } from "react-area";
import { BrowserRouter } from "react-router-dom";
import { Grommet } from "grommet";
import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import { systemFontStackValue } from "../ui/system-font-stack";
import { Prototype } from "../features/Prototype";

export const Root: React.FunctionComponent<{}> = ({ children }) => {
  return (
    <AreaProvider>
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
                  text: "black",
                  border: {
                    light: "black",
                  },
                },
              },
            }}
          >
            {children}
          </Grommet>

          {/* this "Prototype" is a "feature" made just for the presentation
            * slides, so I didn't want to include it in the <App /> component
            * to avoid confusion. That's why it's here
            */}
          <Prototype />
        </BrowserRouter>
    </AreaProvider>
  );
};
