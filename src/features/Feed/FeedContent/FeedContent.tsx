import React from "react";
import { Box } from "grommet";
import { Button } from "@blueprintjs/core";
import { FeatherIcon } from "../../../ui/FeatherIcon";
import { Page } from "../../../ui/Layout/Page";
import { posts } from "./posts";

function Post({ img }) {
  return (
    <Box border="all" flex={false} style={{ maxWidth: 600 }}>
      <img
        src={`https://picsum.photos/600/400?d=${Date.now()}`}
        // src={img}
        alt="random image from unsplash"
        style={{ width: "100%" }}
      />
      <Box direction="row" gap="small" justify="between">
        <Box direction="row">
          <Button
            icon={
              <FeatherIcon
                name="heart"
                svgAttrs={{ fill: "#e91e63", color: "#e91e63" }}
              ></FeatherIcon>
            }
            minimal
          />
          <Button
            icon={<FeatherIcon name="message-square"></FeatherIcon>}
            minimal
          />
          <Button icon={<FeatherIcon name="share"></FeatherIcon>} minimal />
        </Box>
        <Button icon={<FeatherIcon name="bookmark" />} minimal />
      </Box>
    </Box>
  );
}
export const FeedContent: React.FunctionComponent<{}> = () => {
  return (
    <Page title="Feed">
      <Box gap="medium" flex={{ grow: 0 }}>
        {posts.map(post => (
          <Post key={post.id} img={post.img} />
        ))}
      </Box>
    </Page>
  );
};
