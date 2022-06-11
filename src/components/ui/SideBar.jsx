import React from "react";
import { Link } from "react-router-dom";
import Icon from "../common/Icon";

export default function SideBar({ showSideBar }) {
  return (
    <div className="app-container__side-bar" data-show={showSideBar}>
      <div>
        <Link to="/dashboard" className="app-container__side-bar__logo">
          <Icon.Logo />
        </Link>

        <div className="app-container__side-bar__main-links">
          <Link to="/dashboard">
            <Icon.Home />
          </Link>

          <Link to="/dashboard">
            <Icon.Receipt />
          </Link>

          <Link to="/dashboard">
            <Icon.Building />
          </Link>

          <Link to="/dashboard">
            <Icon.Profile />
          </Link>

          <Link to="/dashboard">
            <Icon.Card />
          </Link>

          <Link to="/dashboard">
            <Icon.Money />
          </Link>

          <Link to="/dashboard">
            <Icon.Gift />
          </Link>
        </div>
      </div>

      <Link to="/dashboard">
        <Icon.Home />
      </Link>
    </div>
  );
}
