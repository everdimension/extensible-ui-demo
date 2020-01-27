import React from "react";
import { RenderArea } from "react-area";
import { MenuItem } from "@blueprintjs/core";
import { Box } from "grommet";
import { usePopoverState, Popover, PopoverDisclosure } from "reakit/Popover";
import { User } from "../User";
import { users } from "../../data/users";

export function SelfMenuItem({
  hasNotification = false,
  ...props
}: { hasNotification?: boolean } & MenuItem["props"]) {
  return <MenuItem {...props}></MenuItem>;
}

export const Self: React.FunctionComponent<{}> = () => {
  const popover = usePopoverState();
  return (
    <RenderArea name="self/menu-options">
      {contentElements => {
        const someNotifications = React.Children.toArray(contentElements).some(
          element => element.props.hasNotification,
        );
        return (
          <>
            <PopoverDisclosure
              {...popover}
              style={{ backgroundColor: "transparent", border: "none" }}
            >
              <User
                hasNotification={someNotifications}
                user={users["2"]}
              ></User>
            </PopoverDisclosure>
            <Popover {...popover} onClick={popover.hide} aria-label="user menu">
              <Box
                border="all"
                as="ul"
                style={{
                  width: 168,
                  listStyle: "none",
                  margin: 0,
                  padding: 0,
                  backgroundColor: "white",
                }}
              >
                {contentElements}
                <MenuItem text="Logout"></MenuItem>
              </Box>
            </Popover>
          </>
        );
      }}
    </RenderArea>
  );
};
