import React, { useState } from "react";
import { Route, useHistory } from "react-router-dom";
import { Content } from "react-area";
import { Keybinding } from "../../ui/Keybinding";
import { Area } from "./Area";

const pathname = "/prototype";
const combo = "ctrl+W";

export const Prototype: React.FunctionComponent<{}> = () => {
  const history = useHistory();
  const [showNames, toggleShowNames] = useState(false);
  return (
    <>
      <Keybinding
        combo={combo.toLowerCase()}
        onKeyDown={() => {
          history.push(pathname);
        }}
      />
      <Keybinding combo="ctrl+i" onKeyDown={() => toggleShowNames(x => !x)} />
      <Route path={pathname}>
        <Content name="toolbar/right">
          <Area name={showNames ? "toolbar/right" : null} />
        </Content>
        <Content name="toolbar/left">
          <Area
            name={showNames ? "toolbar/left" : null}
            style={{ width: 200 }}
          />
        </Content>
        <Content name="navigation">
          <div style={{ padding: 5 }}>
            <Area
              name={showNames ? "navigation" : null}
              style={{ width: "100%", height: 340 }}
            />
          </div>
        </Content>
        <Content name="main">
          <Area
            name={showNames ? "main" : null}
            style={{
              width: "100%",
              height: 400,
              padding: 20,
              borderRadius: 30,
            }}
          />
        </Content>
        <Content name="system-messages">
          <Area
            name={showNames ? "system-messages" : null}
            style={{ width: 500, height: 40 }}
          />
        </Content>
        <Content name="self/menu-options">
          <div style={{ padding: 3 }}>
            <Area style={{ width: '100%', height: 38 }} />
          </div>
          <div style={{ padding: 3 }}>
            <Area style={{ width: '100%', height: 38 }} />
          </div>
          <div style={{ padding: 3 }}>
            <Area style={{ width: '100%', height: 38 }} />
          </div>
        </Content>
      </Route>
    </>
  );
};
