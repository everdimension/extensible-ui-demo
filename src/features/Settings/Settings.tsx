import React, { useState } from "react";
import { Route, useHistory } from "react-router-dom";
import { Fill } from "@wordpress/components";
import { Keybinding } from "../../ui/Keybinding";
import { NavigationItem } from "../../ui/Layout/NavigationItem";
import { SettingsContent } from "./SettingsContent";
import { ShortcutSwitch } from "../Settings/ShortcutSwitch";

const pathname = "/settings";
const combo = "ctrl+S";

export const Settings: React.FunctionComponent<{}> = () => {
  const history = useHistory();
  const [enabled, setEnabled] = useState(true);
  return (
    <>
      <Keybinding
        combo="ctrl+s"
        onKeyDown={() => {
          history.push(pathname);
        }}
        disabled={!enabled}
      />
      <Fill name="settings/shortuts">
        <ShortcutSwitch
          label="Settings"
          shortcut={combo}
          defaultChecked={enabled}
          onChange={() => setEnabled(x => !x)}
        />
      </Fill>
      <Fill name="navigation">
        <NavigationItem
          featherIcon="user"
          text="Settings"
          label={enabled ? combo.replace('ctrl+', '^') : undefined}
          href={pathname}
          onNavigate={(pathname: string) => history.push(pathname)}
        ></NavigationItem>
      </Fill>
      <Fill name="main">
        <Route path={pathname} exact={true}>
          <SettingsContent />
        </Route>
      </Fill>
    </>
  );
};
