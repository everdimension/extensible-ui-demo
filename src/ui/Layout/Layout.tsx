import React from "react";
import { UIRegion } from "../../lib/regions";
import { Box, Text } from "grommet";
import { Button, Colors } from "@blueprintjs/core";
import { useTheme } from "../useTheme";
import { Palette } from "../palette";
import { Self } from "../Self";

const headerHeight = 75;
const footerHeight = 50;

function HeaderItem({ children }) {
  return (
    <Box
      // border="right"
      pad={{ left: "medium", right: "medium" }}
      justify="center"
    >
      {children}
    </Box>
  );
}

function HeaderButton(
  props: Button["props"] & { start?: boolean; end?: boolean },
) {
  const { start = true, end = false, ...restProps } = props;
  return (
    <Box
    // border={
    //   start && end ? "vertical" : start ? "right" : end ? "left" : undefined
    // }
    >
      <Button
        minimal
        style={{ height: "100%", borderRadius: 0 }}
        {...restProps}
      ></Button>
    </Box>
  );
}

export const Layout: React.FunctionComponent<{}> = () => {
  const theme = useTheme();

  return (
    <Box>
      <Box
        as="header"
        style={{
          height: headerHeight,
          position: "fixed",
          width: "100%",
          zIndex: 1,
        }}
        flex={{ shrink: 0 }}
        background={theme === "light" ? Colors.WHITE : Colors.DARK_GRAY3}
        border="bottom"
        direction="row"
        justify="center"
      >
        <Box
          fill={true}
          style={{ maxWidth: 1000 }}
          justify="between"
          direction="row"
        >
          <Box direction="row">
            <HeaderItem>
              <span
                style={{
                  padding: "6px 10px",
                  backgroundColor: Palette[theme].BG_CONTRAST,
                }}
              >
                <Text color={Palette[theme].TEXT_CONTRAST}>
                  {/* Application */}
                  {/* ApPl1Ca710n */}
                  {/* Appl1ca710n */}
                  Appl1ca710n
                </Text>
              </span>
            </HeaderItem>
            <div
              style={{
                paddingLeft: 128,
                alignSelf: "center",
              }}
            >
              <UIRegion name="toolbar/left" />
            </div>
          </Box>

          <Box direction="row">
            <UIRegion name="toolbar/right" />
            <Self />
          </Box>
        </Box>
      </Box>
      <Box
        fill
        style={{
          maxWidth: 1000,
          margin: "auto",
          paddingTop: headerHeight + 50,
          paddingBottom: footerHeight + 50,
          minHeight: "auto",
          height: "auto",
        }}
        gap="large"
        direction="row"
      >
        <Box
          as="aside"
          flex={{ shrink: 0 }}
          style={{
            width: 250,
            position: "sticky",
            top: headerHeight + 50,
            alignSelf: "flex-start",
          }}
          border="all"
        >
          <ul style={{ padding: 0, margin: 0, listStyle: "none" }}>
            <UIRegion name="navigation" />
          </ul>
        </Box>
        <Box fill>
          <UIRegion name="main" />
        </Box>
      </Box>
      <Box
        as="footer"
        flex={{ shrink: 0 }}
        style={{
          height: footerHeight,
          position: "fixed",
          bottom: 0,
          width: "100%",
          background: "white",
        }}
        border="top"
        justify="center"
        direction="row"
      >
        <Box
          style={{ maxWidth: 1000 }}
          fill={true}
          direction="row"
          justify="between"
          align="center"
        >
          App 2019
          <Box style={{ marginLeft: "auto" }}>
            <UIRegion name="system-messages" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
