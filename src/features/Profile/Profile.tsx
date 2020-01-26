import React, { useState } from "react";
import { Route, useHistory } from "react-router-dom";
import { UIContent } from "../../lib/regions";
import { Keybinding } from "../../ui/Keybinding";
import { SelfMenuItem } from "../../ui/Self";
import { NavigationItem } from "../../ui/Layout/NavigationItem";
import { ShortcutSwitch } from "../Settings/ShortcutSwitch";
import { Page } from "../../ui/Layout/Page";

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
      <UIContent name="settings/shortuts">
        <ShortcutSwitch
          label="Profile"
          shortcut={combo}
          defaultChecked={enabled}
          onChange={() => setEnabled(x => !x)}
        />
      </UIContent>
      <UIContent name="navigation">
        <NavigationItem
          featherIcon="user"
          text="Profile"
          label={enabled ? combo.replace("ctrl+", "^") : undefined}
          href={pathname}
          onNavigate={(pathname: string) => history.push(pathname)}
        ></NavigationItem>
      </UIContent>
      <UIContent name="main">
        <Route path={pathname}>
          <Page title="Profile" documentTitle="Profile">
            profile content
          </Page>
        </Route>
      </UIContent>
      <UIContent name="self/menu-options">
        <SelfMenuItem
          text="Profile"
          onClick={() => history.push(pathname)}
        ></SelfMenuItem>
      </UIContent>
    </>
  );
};
