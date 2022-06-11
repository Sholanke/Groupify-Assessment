import React, { useState } from "react";
import Icon from "../common/Icon";

export default function DashboardTransactionDetails({
  transaction,
  closeModal,
}) {
  const [screenHistory, setScreenHistory] = useState(["details"]); // details | receipt
  const activeScreen = screenHistory[screenHistory.length - 1];

  const activeScreenIs = (screenSlug) => activeScreen === screenSlug;

  const goToScreen = (screenSlug) =>
    setScreenHistory((screens) => [...screens, screenSlug]);

  const goBack = () =>
    setScreenHistory(screenHistory.slice(0, screenHistory.length - 1));

  return (
    <>
      {activeScreenIs("details") && (
        <div className="dashboard-page__transaction-details base-animation--fade-left">
          <div className="base-modal__header">
            <h3>Withdrawal Details</h3>
            <button className="base-btn--clear" onClick={closeModal}>
              <Icon.Close />
            </button>
          </div>

          <span className="dashboard-page__transaction-details__icon">
            <Icon.Bank />
          </span>

          <div className="dashboard-page__transaction-details__status">
            {transaction.status === "failed" ? (
              <p className="base-tag--error prefix-dot">Failed</p>
            ) : transaction.status === "successful" ? (
              <p className="base-tag--success prefix-dot">Successful</p>
            ) : (
              <p className="base-tag--warning prefix-dot">Pending</p>
            )}
          </div>

          <div className="dashboard-page__transaction-details__info-wrapper">
            <div className="dashboard-page__transaction-details__info">
              <p className="dashboard-page__transaction-details__info__key">
                Full Name
              </p>
              <p className="dashboard-page__transaction-details__info__value">
                {transaction.fullName}
              </p>
            </div>

            <div className="dashboard-page__transaction-details__info">
              <p className="dashboard-page__transaction-details__info__key">
                Email Address
              </p>
              <p className="dashboard-page__transaction-details__info__value">
                {transaction.email}
              </p>
            </div>

            <div className="dashboard-page__transaction-details__info">
              <p className="dashboard-page__transaction-details__info__key">
                Phone Number
              </p>
              <p className="dashboard-page__transaction-details__info__value">
                {transaction.phoneNumber}
              </p>
            </div>

            <div className="dashboard-page__transaction-details__info">
              <p className="dashboard-page__transaction-details__info__key">
                Joined At
              </p>
              <p className="dashboard-page__transaction-details__info__value">
                {transaction.registrationDate}
              </p>
            </div>

            <div className="dashboard-page__transaction-details__info">
              <p className="dashboard-page__transaction-details__info__key">
                Plan Type
              </p>
              <p className="dashboard-page__transaction-details__info__value">
                {transaction.plan}
              </p>
            </div>

            <div className="dashboard-page__transaction-details__info">
              <p className="dashboard-page__transaction-details__info__key">
                Next billing date
              </p>
              <p className="dashboard-page__transaction-details__info__value">
                {transaction.nextBillingDate}
              </p>
            </div>
          </div>

          <button
            className="base-btn prefix-icon"
            onClick={() => goToScreen("receipt")}
          >
            <span className="base-btn__icon">
              <Icon.Document />
            </span>
            See attached receipt
          </button>
        </div>
      )}

      {activeScreenIs("receipt") && (
        <div className="dashboard-page__transaction-details__receipt base-animation--fade-left">
          <div className="base-modal__header--has-back-btn">
            <button className="base-btn--clear" onClick={goBack}>
              <Icon.LeftArrow />
            </button>

            <h3>Attached Reciept</h3>
          </div>

          <img
            src="/assets/images/receipt.png"
            className="dashboard-page__transaction-details__receipt__image"
            alt="receipt"
          />

          <button className="base-btn suffix-icon" onClick={closeModal}>
            Continue
            <span className="base-btn__icon">
              <Icon.RightArrow />
            </span>
          </button>
        </div>
      )}
    </>
  );
}
