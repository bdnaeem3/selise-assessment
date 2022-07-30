import React from "react";
import { months } from "../../utils";
import { useDispatch, useSelector } from "react-redux";
import { popupToggle, setYear, setMonth } from "../../redux/slice/uiSlice";
import { ADD_APPOINTMENT_POPUP } from "../../constants/uiConstants";

const AppAppointmentSelection = () => {
  const dispatch = useDispatch();
  const { year, month } = useSelector((state) => state.ui);

  const showAddAppointmentPopup = () => {
    dispatch(popupToggle(ADD_APPOINTMENT_POPUP));
  };

  const changeYearHandler = (e) => {
    e.preventDefault();
    dispatch(setYear(e.target.value));
  };

  const changeMonthHandler = (e) => {
    e.preventDefault();
    dispatch(setMonth(e.target.value));
  };

  return (
    <div className="selection">
      <select value={year} onChange={changeYearHandler}>
        <option>Select Year</option>
        <option value="2022">2022</option>
        <option value="2021">2011</option>
        <option value="2020">2020</option>
      </select>

      <select value={month} onChange={changeMonthHandler}>
        <option>Select Month</option>
        {months.map((month, i) => {
          return (
            <option key={i} value={i}>
              {month}
            </option>
          );
        })}
      </select>
      <button onClick={showAddAppointmentPopup}>Add Appointment</button>
    </div>
  );
};

export default AppAppointmentSelection;
