import { useSelector } from "react-redux";
import React, { Fragment, useState, useEffect } from "react";

// constants
import { ADD_APPOINTMENT_POPUP } from "./constants/uiConstants";

// components
import AppAppointmentModal from "./components/modals/AppAppointmentModal";
import AppAppointmentSelection from "./components/form/AppointmentSelection";

// utils
import { days, getMonthDetails, getDateDetails, getTimeDetails } from "./utils";

// css
import "./app.css";

const App = () => {
  const [monthAppointments, setMonthAppointments] = useState([]);
  const { appointments } = useSelector((state) => state.appointments);
  const { showPopupName, year, month } = useSelector((state) => state.ui);
  const { firstDay, daysInMonth } = getMonthDetails(year, month);

  const generateCalendar = () => {
    const view = [];

    if (firstDay !== 0) {
      for (let i = 0; i < firstDay; i++) {
        view.push(<div key={`j-${i}`}></div>);
      }
    }

    for (let i = 0; i < daysInMonth; i++) {
      let today = new Date(year, month, i + 1);

      const todaysAppointments = monthAppointments.filter((item) => {
        const { thisDate } = getDateDetails(item);
        return thisDate === i + 1;
      });

      view.push(
        <div key={i}>
          <p>{today.getDate()}</p>
          <ul className="appointment-list">
            {todaysAppointments
              .sort((a, b) => {
                const aTime = getTimeDetails(year, month, i, a.time);
                const bTime = getTimeDetails(year, month, i, b.time);
                return aTime - bTime;
              })
              .map((item, key) => {
                return (
                  <li key={key}>
                    {item.name} at {item.time}
                  </li>
                );
              })}
          </ul>
        </div>
      );
    }

    if (view.length % 7 !== 0) {
      for (let i = 0; i < view.length % 7; i++) {
        view.push(<div key={`t-${i}`}></div>);
      }
    }

    return view;
  };

  useEffect(() => {
    const monthFilter = appointments.filter((item) => {
      const { thisYear, thisMonth } = getDateDetails(item);
      return year == thisYear && month == thisMonth - 1;
    });
    setMonthAppointments(monthFilter);
  }, [appointments, year, month]);

  return (
    <Fragment>
      <AppAppointmentSelection />

      <div className="wrapper">
        <ul>
          {days.map((day, i) => {
            return <li key={i}>{day}</li>;
          })}
        </ul>

        {generateCalendar()}
      </div>

      {showPopupName === ADD_APPOINTMENT_POPUP && (
        <AppAppointmentModal></AppAppointmentModal>
      )}
    </Fragment>
  );
};

export default App;
