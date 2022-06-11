import React from "react";
import { Link } from "react-router-dom";
import Icon from "../common/Icon";

export default function SideBar({ showSideBar }) {
  return (
    <div className="app-container__side-bar" data-show={showSideBar}>
      <div>
        <Link to="/" className="app-container__side-bar__logo">
          <Icon.Logo />
        </Link>

        <div className="app-container__side-bar__main-links">
          <Link to="/">
            <Icon.Home />
          </Link>

          <Link to="/">
            <Icon.Receipt />
          </Link>

          <Link to="/">
            <Icon.Building />
          </Link>

          <Link to="/">
            <Icon.Profile />
          </Link>

          <Link to="/">
            <Icon.Card />
          </Link>

          <Link to="/">
            <Icon.Money />
          </Link>

          <Link to="/">
            <Icon.Gift />
          </Link>
        </div>
      </div>

      <Link to="/">
        <Icon.Home />
      </Link>
    </div>
  );
}
