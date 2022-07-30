import styled from "styled-components";

export const PageWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const Box = styled.div`
  height: 14vh;
  width: 13vw;
  border: 1px solid gray;
  position: relative;
`;

export const DaysWrapper = styled.ul`
  display: flex;
  padding: 0;
  list-style: none;
`;

export const DaysList = styled.li`
  width: 13vw;
  text-align: center;
`;

export const DateHolder = styled.p`
  margin: 0;
  background: lightblue;
  text-align: center;
  padding: 3px;
`;

export const ListHolder = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  width: 100%;
  height: calc(100% - 24px);
  overflow: auto;
`;

export const List = styled.li`
  line-height: 30px;
  background-color: lightcyan;
  margin-top: 3px;
  text-align: center;
  cursor: pointer;
`;
