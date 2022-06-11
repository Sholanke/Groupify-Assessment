import React from "react";
import "./index.scss";
import DashboardAmounts from "./DashboardAmounts";
import DashboardTransactions from "./DashboardTransactions";

export default function index() {
  return (
    <div className="dashboard-page app-container__main__page base-animation--fade-left">
      <DashboardAmounts />
      <DashboardTransactions />
    </div>
  );
}
