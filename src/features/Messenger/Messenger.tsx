import React, { useState, useEffect } from "react";
import { Content } from "react-area";
import { Tag } from "@blueprintjs/core";
import { Text, Box } from "grommet";
import { Route, useHistory, useLocation } from "react-router-dom";
import { Keybinding } from "../../ui/Keybinding";
import { MessengerContent } from "./MessengerContent";
import { AudioRecording } from "./AudioRecording";
import { useAudioPlayback } from "./audioState";
import { SelfMenuItem } from "../../ui/Self";
import { FeatherIcon } from "../../ui/FeatherIcon";
import { Page } from "../../ui/Layout/Page";
import { useDocumentPrefix } from "../../ui/documentTitle";

const pathname = "/messenger";
const combo = "ctrl+M";

export const Messenger: React.FunctionComponent<{}> = () => {
  const history = useHistory();
  const location = useLocation();

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
        disabled={false}
      />
      <Content name="self/menu-options">
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
      </Content>
      {src ? (
        <Content name="toolbar/right">
          <AudioRecording showStopControl src={src} />
        </Content>
      ) : null}
      <Content name="main">
        <Route path={pathname}>
          <Page documentTitle="Messenger">
            <MessengerContent />
          </Page>
        </Route>
      </Content>
      <Route path={pathname}>
        <Content name="system-messages">
          <Text>
            <Box as="i" direction="row" align="center" gap="xsmall">
              <FeatherIcon name="alert-triangle" />{" "}
              <span>Messages sent to Russian users may be delayed</span>
            </Box>
          </Text>
        </Content>
      </Route>
    </>
  );
};
