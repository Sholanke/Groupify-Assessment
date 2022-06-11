import React from "react";
import { Outlet } from "react-router";
import AppHeader from "../ui/AppHeader";
import SideBar from "../ui/SideBar";

export default function DefaultLayout() {
  return (
    <div className="app-container">
      <SideBar />

      <div className="app-container__main">
        <AppHeader />
        <Outlet />
      </div>
    </div>
  );
}
