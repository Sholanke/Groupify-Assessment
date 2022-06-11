import React, { useState } from "react";

export default function useBaseModal(defaultState = false, defaultModalTitle) {
  const [modalIsOpen, setModalIsOpen] = useState(defaultState);

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const BaseModal = ({ children, modalTitle }) => {
    return (
      <>
        {modalIsOpen && (
          <>
            <div className="base-modal--overlay" onClick={closeModal}></div>
            <div className="base-modal">{children}</div>
          </>
        )}
      </>
    );
  };

  return [BaseModal, openModal, closeModal, modalIsOpen];
}
