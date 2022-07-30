import React from "react";
import ModalHOC from "../hoc/Modal";
import { Wrapper, DetailsList, ListTitle } from "./AppointmentModal-style";

const AppointmentModal = ({ appointment }) => {
  const { name, gender, age, date, time } = appointment;

  return (
    <ModalHOC title={`Appointment of ${name}`}>
      <Wrapper>
        <DetailsList>
          <ListTitle>Gender:</ListTitle> {gender}
        </DetailsList>
        <DetailsList>
          <ListTitle>Age:</ListTitle> {age}
        </DetailsList>
        <DetailsList>
          <ListTitle>Date:</ListTitle> {date}
        </DetailsList>
        <DetailsList>
          <ListTitle>Time:</ListTitle> {time}
        </DetailsList>
      </Wrapper>
    </ModalHOC>
  );
};

export default AppointmentModal;
