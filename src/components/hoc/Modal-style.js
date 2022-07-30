import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const Content = styled.div`
  width: 90%;
  max-width: 600px;
  padding: 30px;
  background: white;
  z-index: 1;
  max-height: 60%;
  overflow-y: auto;
`;

export const Title = styled.h2`
  text-align: center;
`;
