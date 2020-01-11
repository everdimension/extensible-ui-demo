import React, { useState } from "react";
import { Route, useHistory } from "react-router-dom";
import { Fill } from "@wordpress/components";
import { Keybinding } from "../../ui/Keybinding";
import { NavigationItem } from "../../ui/Layout/NavigationItem";
import { ShortcutSwitch } from "../Settings/ShortcutSwitch";

const pathname = "/profile";
const combo = "ctrl+P";

export const Profile: React.FunctionComponent<{}> = () => {
  const history = useHistory();
  const [enabled, setEnabled] = useState(true);
  return (
    <>
      <Keybinding
        combo={combo.toLowerCase()}
        onKeyDown={() => {
          history.push(pathname);
        }}
        disabled={!enabled}
      />
      <Fill name="settings/shortuts">
        <ShortcutSwitch
          label="Profile"
          shortcut={combo}
          defaultChecked={enabled}
          onChange={() => setEnabled(x => !x)}
        />
      </Fill>
      <Fill name="navigation">
        <NavigationItem
          featherIcon="user"
          text="Profile"
          label={enabled ? combo.replace("ctrl+", "^") : undefined}
          href={pathname}
          onNavigate={(pathname: string) => history.push(pathname)}
        ></NavigationItem>
      </Fill>
      <Fill name="main">
        <Route path={pathname} exact={true}>
          profile content
        </Route>
      </Fill>
    </>
  );
};
