import React, { useState } from "react";
import { Fill } from "@wordpress/components";
import { Route, useHistory } from "react-router-dom";
import { Keybinding } from "../../ui/Keybinding";
import { NavigationItem } from "../../ui/Layout/NavigationItem";
import { ShortcutSwitch } from "../Settings/ShortcutSwitch";
import { MessengerContent } from "./MessengerContent";
import { AudioRecording } from "./AudioRecording";
import { useAudioPlayback } from "./audioState";

const pathname = "/messenger";
const combo = "ctrl+M";

export const Messenger: React.FunctionComponent<{}> = () => {
  const history = useHistory();
  const [enabled, setEnabled] = useState(true);
  const { src } = useAudioPlayback();
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
          label="Messenger"
          shortcut={combo}
          defaultChecked={enabled}
          onChange={() => setEnabled(x => !x)}
        />
      </Fill>
      {src ? (
        <Fill name="toolbar/right">
          <AudioRecording showStopControl src={src} />
        </Fill>
      ) : null}
      <Fill name="navigation">
        <NavigationItem
          featherIcon="message-circle"
          text="Messenger"
          label={enabled ? combo.replace("ctrl+", "^") : undefined}
          href={pathname}
          onNavigate={(pathname: string) => history.push(pathname)}
        ></NavigationItem>
      </Fill>
      <Fill name="main">
        <Route path={pathname}>
          <MessengerContent></MessengerContent>
        </Route>
      </Fill>
    </>
  );
};
