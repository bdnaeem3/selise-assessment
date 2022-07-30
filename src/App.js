import { useDispatch, useSelector } from "react-redux";
import React, { Fragment, useState, useEffect } from "react";

// constants
import {
  ADD_APPOINTMENT_POPUP,
  APPOINTMENT_DETAILS_POPUP,
} from "./constants/uiConstants";

// components
import AppointmentModal from "./components/modals/AppointmentModal";
import AppAppointmentModal from "./components/modals/AppAppointmentModal";
import AppAppointmentSelection from "./components/form/AppointmentSelection";

// redux
import { popupToggle } from "./redux/slice/uiSlice";

// utils
import { days, getMonthDetails, getDateDetails, getTimeDetails } from "./utils";

// css
import "./app.css";

const App = () => {
  const dispatch = useDispatch();
  const [monthAppointments, setMonthAppointments] = useState([]);
  const { appointments } = useSelector((state) => state.appointments);
  const { showPopupName, year, month } = useSelector((state) => state.ui);
  const { firstDay, daysInMonth } = getMonthDetails(year, month);
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  const toggleAppointmentDetailsModal = (item) => {
    dispatch(popupToggle(APPOINTMENT_DETAILS_POPUP));
    setSelectedAppointment(item);
  };

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
                  <li
                    key={key}
                    onClick={() => toggleAppointmentDetailsModal(item)}
                  >
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

      {showPopupName === ADD_APPOINTMENT_POPUP && <AppAppointmentModal />}
      {showPopupName === APPOINTMENT_DETAILS_POPUP && (
        <AppointmentModal appointment={selectedAppointment} />
      )}
    </Fragment>
  );
};

export default App;
