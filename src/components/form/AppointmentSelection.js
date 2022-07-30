import React, { useEffect } from "react";
import { months } from "../../utils";
import { useDispatch, useSelector } from "react-redux";
import { popupToggle, setYear, setMonth } from "../../redux/slice/uiSlice";
import { ADD_APPOINTMENT_POPUP } from "../../constants/uiConstants";
import { Selection, AddButton } from "./AppointmentSelection-style";

// staic
const availableYears = [2022, 2021, 2020, 2019];

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

  useEffect(() => {
    const pathname = window.location.pathname.split("/");

    if (pathname.includes("year")) {
      const yearPosition = pathname.indexOf("year") + 1;
      const urlYear = parseInt(pathname[yearPosition], 10);
      if (availableYears.includes(urlYear)) {
        dispatch(setYear(urlYear));
      }
    }

    if (pathname.includes("month")) {
      const yearPosition = pathname.indexOf("month") + 1;
      const urlMonth = parseInt(pathname[yearPosition], 10) - 1;
      if (urlMonth < 12) {
        dispatch(setMonth(urlMonth));
      }
    }
  }, [window.location.pathname]);

  return (
    <Selection>
      <select value={year} onChange={changeYearHandler}>
        <option>Select Year</option>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
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

      <AddButton onClick={showAddAppointmentPopup}>Add Appointment</AddButton>
    </Selection>
  );
};

export default AppAppointmentSelection;
