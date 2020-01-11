import React from "react";
import { Switch, Tag } from "@blueprintjs/core";
import { Box } from "grommet";

export function ShortcutSwitch({
  shortcut,
  label,
  defaultChecked = true,
  onChange = () => {},
}) {
  const [key1, key2] = shortcut.split("+");
  return (
    <Box direction="row" justify="between" fill style={{ maxWidth: 400 }}>
      <Switch
        large
        label={label}
        defaultChecked={defaultChecked}
        onChange={onChange}
      />
      <span>
        <Tag large minimal>
          {key1}
        </Tag>
        {" + "}
        <Tag large minimal>
          {key2}
        </Tag>
      </span>
    </Box>
  );
}
