import React from "react";
import "../../sass/Modal.scss";

interface IProps {
  children: React.ReactNode;
  customClass?: string;
  show: boolean;
  closeCallback: () => void;
}

const Modal = ({ children, customClass, show, closeCallback }: IProps) => {
  return (
    <div className={`modal ${customClass}`} style={{ display: show ? "block" : "none" }}>
      <div className="overlay" onClick={closeCallback}></div>
      <div className="modal_content">
        {children}
        <button title="Close" className="close_modal" onClick={closeCallback}>
          X
        </button>
      </div>
    </div>
  );
};

export { Modal };
