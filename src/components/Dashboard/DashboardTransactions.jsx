import React from "react";
import Icon from "../common/Icon";
import Tabs from "../common/Tabs";
import DashboardTransaction from "./DashboardTransaction";

export default function DashboardTransactions() {
  const transactionTabsConfig = {
    controls: [
      {
        title: "Deposits",
        component: <DashboardDepositTransactions />,
      },
      {
        title: "Withdrawals",
        component: <DashboardWithdrawalTransactions />,
      },
    ],
  };

  return (
    <div className="dashboard-page__transactions">
      <Tabs config={transactionTabsConfig} />
    </div>
  );
}

function DashboardWithdrawalTransactions() {
  const transactions = [
    {
      date: "12 Sep, 2022",
      amount: "$200",
      fullName: "Damola Adegoke",
      status: "failed",
      channel: "Bank Transfer",
      email: "dogulas@franklin.com",
      phoneNumber: "+2349012345678",
      registrationDate: "15 Feb, 2023 (12:15 am)",
      plan: "$200/month",
      nextBillingDate: "15 Mar, 2023",
    },
    {
      date: "12 Sep, 2022",
      amount: "$200",
      fullName: "Damola Adegoke",
      status: "successful",
      channel: "Bank Transfer",
      email: "dogulas@franklin.com",
      phoneNumber: "+2349012345678",
      registrationDate: "15 Feb, 2023 (12:15 am)",
      plan: "$200/month",
      nextBillingDate: "15 Mar, 2023",
    },
    {
      date: "12 Sep, 2022",
      amount: "$200",
      fullName: "Damola Adegoke",
      status: "pending",
      channel: "Bank Transfer",
      email: "dogulas@franklin.com",
      phoneNumber: "+2349012345678",
      registrationDate: "15 Feb, 2023 (12:15 am)",
      plan: "$200/month",
      nextBillingDate: "15 Mar, 2023",
    },
    {
      date: "12 Sep, 2022",
      amount: "$200",
      fullName: "Damola Adegoke",
      status: "successful",
      channel: "Bank Transfer",
      email: "dogulas@franklin.com",
      phoneNumber: "+2349012345678",
      registrationDate: "15 Feb, 2023 (12:15 am)",
      plan: "$200/month",
      nextBillingDate: "15 Mar, 2023",
    },
    {
      date: "12 Sep, 2022",
      amount: "$200",
      fullName: "Damola Adegoke",
      status: "successful",
      channel: "Bank Transfer",
      email: "dogulas@franklin.com",
      phoneNumber: "+2349012345678",
      registrationDate: "15 Feb, 2023 (12:15 am)",
      plan: "$200/month",
      nextBillingDate: "15 Mar, 2023",
    },
  ];

  return (
    <div className="base-animation--fade-left">
      <div className="dashboard-page__transactions__header">
        <h2>200 Withdrawals</h2>

        <div className="dashboard-page__transactions__header__controls">
          <div className="base-input prefix-icon">
            <span className="base-input__icon">
              <Icon.Search />
            </span>
            <input type="text" placeholder="Search" />
          </div>

          <button className="base-btn prefix-icon">
            <span className="base-btn__icon">
              <Icon.Filter />
            </span>
            Filter
          </button>
        </div>
      </div>

      <table className="dashboard-page__transactions__table base-table">
        <thead>
          <tr className="base-table__header">
            <td>Date</td>
            <td>Amount</td>
            <td>Full Name</td>
            <td>Status</td>
            <td>Channel</td>
          </tr>
        </thead>
        <tbody>
          {transactions?.map?.((transaction, index) => (
            <DashboardTransaction transaction={transaction} key={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

function DashboardDepositTransactions() {
  const transactions = [
    {
      date: "12 Sep, 2022",
      amount: "$200",
      fullName: "Damola Adegoke",
      status: "failed",
      channel: "Bank Transfer",
      email: "dogulas@franklin.com",
      phoneNumber: "+2349012345678",
      registrationDate: "15 Feb, 2023 (12:15 am)",
      plan: "$200/month",
      nextBillingDate: "15 Mar, 2023",
    },
    {
      date: "12 Sep, 2022",
      amount: "$200",
      fullName: "Damola Adegoke",
      status: "successful",
      channel: "Bank Transfer",
      email: "dogulas@franklin.com",
      phoneNumber: "+2349012345678",
      registrationDate: "15 Feb, 2023 (12:15 am)",
      plan: "$200/month",
      nextBillingDate: "15 Mar, 2023",
    },
    {
      date: "12 Sep, 2022",
      amount: "$200",
      fullName: "Damola Adegoke",
      status: "pending",
      channel: "Bank Transfer",
      email: "dogulas@franklin.com",
      phoneNumber: "+2349012345678",
      registrationDate: "15 Feb, 2023 (12:15 am)",
      plan: "$200/month",
      nextBillingDate: "15 Mar, 2023",
    },
    {
      date: "12 Sep, 2022",
      amount: "$200",
      fullName: "Damola Adegoke",
      status: "successful",
      channel: "Bank Transfer",
      email: "dogulas@franklin.com",
      phoneNumber: "+2349012345678",
      registrationDate: "15 Feb, 2023 (12:15 am)",
      plan: "$200/month",
      nextBillingDate: "15 Mar, 2023",
    },
    {
      date: "12 Sep, 2022",
      amount: "$200",
      fullName: "Damola Adegoke",
      status: "successful",
      channel: "Bank Transfer",
      email: "dogulas@franklin.com",
      phoneNumber: "+2349012345678",
      registrationDate: "15 Feb, 2023 (12:15 am)",
      plan: "$200/month",
      nextBillingDate: "15 Mar, 2023",
    },
  ];

  return (
    <div className="base-animation--fade-left">
      <div className="dashboard-page__transactions__header">
        <h2>200 Deposits</h2>
        <div className="dashboard-page__transactions__header__controls">
          <div className="base-input prefix-icon">
            <span className="base-input__icon">
              <Icon.Search />
            </span>
            <input type="text" placeholder="Search" />
          </div>

          <button className="base-btn prefix-icon">
            <span className="base-btn__icon">
              <Icon.Filter />
            </span>
            Filter
          </button>
        </div>
      </div>

      <table className="dashboard-page__transactions__table base-table">
        <thead>
          <tr className="base-table__header">
            <td>Date</td>
            <td>Amount</td>
            <td>Full Name</td>
            <td>Status</td>
            <td>Channel</td>
          </tr>
        </thead>

        <tbody>
          {transactions?.map?.((transaction, index) => (
            <DashboardTransaction transaction={transaction} key={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
