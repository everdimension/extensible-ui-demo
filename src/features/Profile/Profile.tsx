import React, { useState } from "react";
import { Route, useHistory } from "react-router-dom";
import { Content } from "react-area";
import { Keybinding } from "../../ui/Keybinding";
import { SelfMenuItem } from "../../ui/Self";
import { NavigationItem } from "../../ui/Layout/NavigationItem";
import { ShortcutSwitch } from "../Settings/ShortcutSwitch";
import { ProfileContent } from "./ProfileContent";

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
      <Content name="settings/shortcuts">
        <ShortcutSwitch
          label="Profile"
          shortcut={combo}
          defaultChecked={enabled}
          onChange={() => setEnabled(x => !x)}
        />
      </Content>
      <Content name="navigation">
        <NavigationItem
          featherIcon="user"
          text="Profile"
          label={enabled ? combo.replace("ctrl+", "^") : undefined}
          href={pathname}
          onNavigate={(pathname: string) => history.push(pathname)}
        ></NavigationItem>
      </Content>
      <Content name="main">
        <Route path={pathname}>
          <ProfileContent />
        </Route>
      </Content>
      <Content name="self/menu-options">
        <SelfMenuItem
          text="Profile"
          onClick={() => history.push(pathname)}
        ></SelfMenuItem>
      </Content>
    </>
  );
};
