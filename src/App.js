import React, { Fragment, useState, useEffect } from "react";
import { days, months, getDateDetails, getTimeDetails } from "./utils";
import { useDispatch, useSelector } from "react-redux";
import AppAppointmentModal from "./components/modals/AppAppointmentModal";
import { ADD_APPOINTMENT_POPUP } from "./constants/uiConstants";
import { popupToggle } from "./redux/slice/uiSlice";
import "./app.css";

const App = () => {
  const year = 2022;
  const month = 6;
  const dispatch = useDispatch();
  const popup = useSelector((state) => state.ui);
  const { appointments } = useSelector((state) => state.appointments);
  const [monthAppointments, setMonthAppointments] = useState([]);

  const generateCalendar = () => {
    const view = [];
    var firstDay = new Date(year, month, 1).getDay();
    var lastDay = new Date(year, month + 1, 0).getDate();

    if (firstDay !== 0) {
      for (let i = 0; i < firstDay; i++) {
        view.push(<div key={`j-${i}`}></div>);
      }
    }

    for (let i = 0; i < lastDay; i++) {
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

  const showAddAppointmentPopup = () => {
    dispatch(popupToggle(ADD_APPOINTMENT_POPUP));
  };

  useEffect(() => {
    // eslint-disable-next-line
    const monthFilter = appointments.filter((item) => {
      const { thisYear, thisMonth } = getDateDetails(item);

      if ((year === thisYear, month === thisMonth)) {
        return item;
      }
    });
    setMonthAppointments(monthFilter);
  }, [appointments]);

  return (
    <Fragment>
      <div className="selection">
        <select>
          <option>Select Year</option>
          <option>2022</option>
          <option>2011</option>
          <option>2020</option>
        </select>
        <select>
          <option>Select Month</option>
          {months.map((month, i) => {
            return <option key={i}>{month}</option>;
          })}
        </select>
        <button onClick={showAddAppointmentPopup}>Add Appointment</button>
      </div>
      <div className="wrapper">
        <ul>
          {days.map((day, i) => {
            return <li key={i}>{day}</li>;
          })}
        </ul>

        {generateCalendar()}
      </div>
      {popup.showPopupName === ADD_APPOINTMENT_POPUP && (
        <AppAppointmentModal></AppAppointmentModal>
      )}
    </Fragment>
  );
};

export default App;
