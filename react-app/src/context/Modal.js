import React, { useContext, useRef, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

export const EditModalContext = React.createContext();

export function ModalProvider({ children }) {
  const modalRef = useRef();
  const [value, setValue] = useState();

  useEffect(() => {
    setValue(modalRef.current);
  }, []);

  return (
    <>
      <EditModalContext.Provider value={value}>
        {children}
      </EditModalContext.Provider>
      <div ref={modalRef} />
    </>
  );
}

export function Modal({ onClose, children, idName }) {
  const modalNode = useContext(EditModalContext);
  if (!modalNode) return null;

  let idNameOfModal;
  if (idName) {
    idNameOfModal = idName;
  } else {
    idNameOfModal = "modal-content";
  }

  return ReactDOM.createPortal(
    <div id="modal">
      <div id="modal-background" onClick={onClose} />
      <div id={idNameOfModal}>{children}</div>
    </div>,
    modalNode
  );
}
