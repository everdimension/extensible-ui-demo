import React from "react";
import { Box } from "grommet";
import { Avatar } from "../Avatar";

interface Props {
  user: {
    id: string;
    name: string;
    pictureUrl: string;
  };
  size?: number;
  hasNotification?: boolean;
}

export const User: React.FunctionComponent<Props> = ({
  user,
  size,
  hasNotification = false,
}) => {
  return (
    <Box direction="row" align="center" gap="small">
      <div style={{ position: "relative" }}>
        {hasNotification ? (
          <div
            style={{
              position: "absolute",
              fontSize: 60,
              top: 0,
              right: -7,
              lineHeight: 40,
              height: 18,
              width: 18,
              borderRadius: '50%',
              background: 'rgb(233, 30, 99)',
              overflow: 'hidden',
              color: "#E91E63",
            }}
          >

          </div>
        ) : null}
        <Avatar src={user.pictureUrl} size={size} />
      </div>
      {user.name}
    </Box>
  );
};
