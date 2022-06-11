import React, { useState } from "react";
import Icon from "../common/Icon";
import SideBar from "./SideBar";

export default function AppHeader() {
  const [showSideBar, setShowSideBar] = useState(false);

  return (
    <div className="app-header">
      <h1 className="app-header__heading">Transactions</h1>

      <div className="app-header__profile-btn-wrapper">
        <div className="app-header__profile-btn">
          <div className="app-header__profile-btn__avatar">
            <img src="/assets/images/avatar.png" alt="" srcset="" />
          </div>
          <p>Damola Adegoke</p>

          <span className="app-header__profile-btn__arrow">
            <Icon.Arrow />
          </span>
        </div>

        <div className="app-header__mobile-menu">
          <div
            className="app-header__mobile-menu__overlay"
            onClick={() => setShowSideBar(!showSideBar)}
            data-show={showSideBar}
          ></div>
          <button
            className="base-btn--clear app-header__menu-btn"
            onClick={() => setShowSideBar(!showSideBar)}
          >
            <Icon.Menu />
          </button>
          <SideBar showSideBar={showSideBar} />
        </div>
      </div>
    </div>
  );
}
