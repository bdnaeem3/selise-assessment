import React from "react";
import ModalHOC from "../hoc/Modal";

const AppointmentModal = ({ appointment }) => {
  const { name, gender, age, date, time } = appointment;

  return (
    <ModalHOC>
      <h2>Appointment of {name}</h2>

      <ul className="appointment-details">
        <li>
          <span>Gender:</span> {gender}
        </li>
        <li>
          <span>Age:</span> {age}
        </li>
        <li>
          <span>Date:</span> {date}
        </li>
        <li>
          <span>Time:</span> {time}
        </li>
      </ul>
    </ModalHOC>
  );
};

export default AppointmentModal;
