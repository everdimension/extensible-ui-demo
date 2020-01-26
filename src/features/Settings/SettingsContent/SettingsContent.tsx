import React from "react";
import { UIRegion } from '../../../lib/regions';
import { Page } from "../../../ui/Layout/Page";
import { ShortcutSwitch } from "../ShortcutSwitch";

export const SettingsContent: React.FunctionComponent<{}> = () => {
  return (
    <Page title="Settings" documentTitle="Settings">
      <UIRegion name="settings/shortuts" />
    </Page>
  );
};
