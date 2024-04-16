
import React from "react";
import ReactDOM from "react-dom";
import '../App.css';

const Modal = ({ children }) => {
  return ReactDOM.createPortal(
    <div className="modal">
      <div className="modal-content">{children}</div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default Modal;
