import React from "react";
import useBaseModal from "../../hooks/useBaseModal";
import Icon from "../common/Icon";
import DashboardTransactionDetails from "./DashboardTransactionDetails";

export default function DashboardTransaction({ transaction }) {
  const [TransactionDetailsModal, openTransactionModal, closeTransactionModal] =
    useBaseModal(false);

  return (
    <>
      <tr
        className="dashboard-page__transactions__table__row"
        onClick={openTransactionModal}
      >
        <td>
          <span className="base-table__label">Date</span>
          {transaction.date}
        </td>
        <td>
          <span className="base-table__label">Amount</span>
          {transaction.amount}
        </td>
        <td>
          <span className="base-table__label">Full Name</span>
          {transaction.fullName}
        </td>
        <td>
          <span className="base-table__label">Status</span>

          {transaction.status === "failed" ? (
            <p className="base-tag--error">Failed</p>
          ) : transaction.status === "successful" ? (
            <p className="base-tag--success">Successful</p>
          ) : (
            <p className="base-tag--warning">Pending</p>
          )}
        </td>
        <td>
          <span className="base-table__label">Channel</span>

          <div>
            Bank Transfer
            <Icon.Ellipsis />
          </div>
        </td>
      </tr>

      <TransactionDetailsModal>
        <DashboardTransactionDetails
          transaction={transaction}
          closeModal={closeTransactionModal}
        />
      </TransactionDetailsModal>
    </>
  );
}
