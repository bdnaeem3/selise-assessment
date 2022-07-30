import React from "react";

const ModalHOC = (props) => {
  return (
    <div className="modal-wrapper">
      <div className="modal-overlay"></div>
      <div className="modal-body">{props.children}</div>
    </div>
  );
};

export default ModalHOC;
