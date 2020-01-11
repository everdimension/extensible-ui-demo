import React from "react";
import { Slot } from "@wordpress/components";
import { Page } from "../../../ui/Layout/Page";
import { ShortcutSwitch } from "../ShortcutSwitch";

export const SettingsContent: React.FunctionComponent<{}> = () => {
  return (
    <Page title="Settings">
      <Slot name="settings/shortuts"></Slot>
    </Page>
  );
};
