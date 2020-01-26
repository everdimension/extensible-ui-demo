import React, { useState, useEffect } from "react";
import { Tag } from "@blueprintjs/core";
import { UIContent } from "../../lib/regions";
import { Text, Box } from "grommet";
import { Route, useHistory, useLocation } from "react-router-dom";
import { Keybinding } from "../../ui/Keybinding";
import { NavigationItem } from "../../ui/Layout/NavigationItem";
import { ShortcutSwitch } from "../Settings/ShortcutSwitch";
import { MessengerContent } from "./MessengerContent";
import { AudioRecording } from "./AudioRecording";
import { useAudioPlayback } from "./audioState";
import { SelfMenuItem } from "../../ui/Self";
import { FeatherIcon } from "../../ui/FeatherIcon";
import { Page } from "../../ui/Layout/Page";
import { useDocumentPrefix } from '../../ui/documentTitle';

const pathname = "/messenger";
const combo = "ctrl+M";

export const Messenger: React.FunctionComponent<{}> = () => {
  const history = useHistory();
  const location = useLocation();
  const [enabled, setEnabled] = useState(true);

  const [unreadCount, setUnreadCount] = useState(13);
  useEffect(() => {
    if (location.pathname === pathname) {
      setUnreadCount(0);
    }
  }, [location.pathname]);

  useDocumentPrefix(unreadCount > 0 ? String(unreadCount) : null);

  const { src } = useAudioPlayback();
  const hasUnread = unreadCount > 0;
  return (
    <>
      <Keybinding
        combo={combo.toLowerCase()}
        onKeyDown={() => {
          history.push(pathname);
        }}
        disabled={!enabled}
      />
      <UIContent name="self/menu-options">
        <SelfMenuItem
          hasNotification={hasUnread}
          text="Messages"
          labelElement={
            hasUnread ? (
              <Tag style={{ backgroundColor: "#E91E63", fontWeight: "bolder" }}>
                13
              </Tag>
            ) : null
          }
          onClick={() => history.push(pathname)}
        ></SelfMenuItem>
      </UIContent>
      <UIContent name="settings/shortuts">
        <ShortcutSwitch
          label="Messenger"
          shortcut={combo}
          defaultChecked={enabled}
          onChange={() => setEnabled(x => !x)}
        />
      </UIContent>
      {src ? (
        <UIContent name="toolbar/right">
          <AudioRecording showStopControl src={src} />
        </UIContent>
      ) : null}
      <UIContent name="navigation">
        <NavigationItem
          featherIcon="message-circle"
          text="Messenger"
          label={enabled ? combo.replace("ctrl+", "^") : undefined}
          href={pathname}
          onNavigate={(pathname: string) => history.push(pathname)}
        ></NavigationItem>
      </UIContent>
      <UIContent name="main">
        <Route path={pathname}>
          <Page documentTitle="Messenger">
            <MessengerContent />
          </Page>
        </Route>
      </UIContent>
      <Route path={pathname}>
        <UIContent name="system-messages">
          <Text>
            <Box as="i" direction="row" align="center" gap="xsmall">
              <FeatherIcon name="alert-triangle" />{" "}
              <span>Messages sent to Russian users may be delayed</span>
            </Box>
          </Text>
        </UIContent>
      </Route>
    </>
  );
};
