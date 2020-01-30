import React from "react";
import { users } from "../../../data/users";
import { useEntity } from "../../../data/useLoadingState";
import { Page } from "../../../ui/Layout/Page";
import { Avatar } from "../../../ui/Avatar";

export const ProfileContent: React.FunctionComponent<{}> = () => {
  const { loading } = useEntity("/api/profile");
  if (loading) {
    return null;
  }
  return (
    <Page title="Profile" documentTitle="Profile">
      <div
        style={{
          display: "grid",
          gridGap: 30,
          gridTemplateColumns: "min-content auto",
        }}
      >
        <Avatar src={users["2"].pictureUrl} size={100} />
        <div>
          <div style={{ textAlign: "center", marginBottom: 20 }}>
            @<strong>alicelidell</strong>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
            <div style={{ textAlign: "center" }}>
              <strong>900</strong>
              <div>posts</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <strong>35.1k</strong>
              <div>followers</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <strong>1</strong>
              <div>following</div>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
};
