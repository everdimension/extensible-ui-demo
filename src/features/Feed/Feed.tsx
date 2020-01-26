import React, { useState } from "react";
import { Route, useHistory } from "react-router-dom";
import { UIContent } from "../../lib/regions";
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
      <UIContent name="settings/shortuts">
        <ShortcutSwitch
          label="Feed"
          shortcut={combo}
          defaultChecked={enabled}
          onChange={() => setEnabled(x => !x)}
        />
      </UIContent>
      <UIContent name="navigation">
        <NavigationItem
          featherIcon="image"
          text="Feed"
          label={enabled ? combo.replace('ctrl+', '^') : undefined}
          href={pathname}
          onNavigate={(pathname: string) => history.push(pathname)}
        ></NavigationItem>
      </UIContent>
      <UIContent name="main">
        <Route path={pathname} exact={true}>
          <FeedContent />
        </Route>
      </UIContent>
    </>
  );
};
