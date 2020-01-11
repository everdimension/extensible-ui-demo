import React, { useState } from "react";
import { Route, useHistory } from "react-router-dom";
import { Fill } from "@wordpress/components";
import { FeedContent } from "./FeedContent";
import { Keybinding } from "../../ui/Keybinding";
import { NavigationItem } from "../../ui/Layout/NavigationItem";
import { ShortcutSwitch } from "../Settings/ShortcutSwitch";

const pathname = "/";
const combo = "ctrl+F";

export const Feed: React.FunctionComponent<{}> = () => {
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
          label="Feed"
          shortcut={combo}
          defaultChecked={enabled}
          onChange={() => setEnabled(x => !x)}
        />
      </Fill>
      <Fill name="navigation">
        <NavigationItem
          featherIcon="image"
          iconColor="magenta"
          text="Feed"
          label={enabled ? combo.replace('ctrl+', '^') : undefined}
          href={pathname}
          onNavigate={(pathname: string) => history.push(pathname)}
        ></NavigationItem>
      </Fill>
      <Fill name="main">
        <Route path={pathname} exact={true}>
          <FeedContent />
        </Route>
      </Fill>
    </>
  );
};
