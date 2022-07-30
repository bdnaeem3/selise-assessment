import React from "react";
import { useDispatch } from "react-redux";
import { popupToggle } from "../../redux/slice/uiSlice";
import { Wrapper, Overlay, Content, Title } from "./Modal-style";

const ModalHOC = ({ title, children }) => {
  const dispatch = useDispatch();

  const hidePopupHanlder = () => {
    dispatch(popupToggle(""));
  };

  return (
    <Wrapper>
      <Overlay onClick={hidePopupHanlder}></Overlay>
      <Content>
        {title && <Title>{title}</Title>}
        {children}
      </Content>
    </Wrapper>
  );
};

export default ModalHOC;
