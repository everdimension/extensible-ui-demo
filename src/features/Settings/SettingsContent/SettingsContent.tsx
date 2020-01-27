import React from "react";
import { RenderArea } from 'react-area';
import { Page } from "../../../ui/Layout/Page";

export const SettingsContent: React.FunctionComponent<{}> = () => {
  return (
    <Page title="Settings" documentTitle="Settings">
      <RenderArea name="settings/shortuts" />
    </Page>
  );
};
