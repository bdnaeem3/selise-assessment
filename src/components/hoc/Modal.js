import React from "react";
import { useDispatch } from "react-redux";
import { popupToggle } from "../../redux/slice/uiSlice";

const ModalHOC = (props) => {
  const dispatch = useDispatch();

  const hidePopupHanlder = () => {
    dispatch(popupToggle(""));
  };

  return (
    <div className="modal-wrapper">
      <div className="modal-overlay" onClick={hidePopupHanlder}></div>
      <div className="modal-body">{props.children}</div>
    </div>
  );
};

export default ModalHOC;
