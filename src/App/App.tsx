import React from "react";
import "../ui/blueprint.css";
import { Layout } from "../ui/Layout";
import { Feed } from "../features/Feed";
import { Profile } from "../features/Profile";
import { Settings } from "../features/Settings";

export function App() {
  return (
    <>
      <Layout />

      <Feed />
      <Profile />
      <Settings />
    </>
  );
}
