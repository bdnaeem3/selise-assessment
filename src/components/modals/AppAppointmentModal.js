import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addAppointment } from "../../redux/slice/appointmentSlice";
import { popupToggle } from "../../redux/slice/uiSlice";
import { inputDateCorrection } from "../../utils";
import ModalHOC from "../hoc/Modal";

const AddAppointment = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const [appointment, setAppointment] = useState({
    name: "",
    gender: "",
    age: "",
    date: "",
    time: "",
  });

  const formChangeHandler = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setAppointment({
      ...appointment,
      [name]: value,
    });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    for (var key in appointment) {
      if (appointment[key] === "") {
        setError(
          `${key.toUpperCase()} is blank. Please fill the form properly and try to submit again.`
        );
        return;
      }
    }
    const { changedDate } = inputDateCorrection(appointment.date);
    dispatch(
      addAppointment({
        ...appointment,
        date: changedDate,
      })
    );
    dispatch(popupToggle(""));
  };

  return (
    <ModalHOC>
      <form onSubmit={formSubmitHandler}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={appointment.name}
          onChange={formChangeHandler}
        />
        <input
          type="text"
          name="gender"
          placeholder="Gender"
          value={appointment.gender}
          onChange={formChangeHandler}
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={appointment.age}
          onChange={formChangeHandler}
        />
        <input
          type="date"
          name="date"
          placeholder="Date"
          value={appointment.date}
          onChange={formChangeHandler}
        />
        <input
          type="time"
          name="time"
          placeholder="Time"
          value={appointment.time}
          onChange={formChangeHandler}
        />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Submit</button>
      </form>
    </ModalHOC>
  );
};

export default AddAppointment;
