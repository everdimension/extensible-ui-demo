import React from "react";
import "../ui/blueprint.css";
import { Layout } from "../ui/Layout";
import { Feed } from "../features/Feed";
import { Profile } from "../features/Profile";
import { Settings } from "../features/Settings";
import { Messenger } from "../features/Messenger";
import { Prototype } from "../features/Prototype";

export function App() {
  return (
    <>
      <Layout />

      <Feed />
      <Profile />
      <Messenger />
      <Settings />
      <Prototype />
    </>
  );
}
