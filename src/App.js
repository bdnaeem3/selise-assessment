import React, { Fragment } from "react";
import { days, months } from "./utils";
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
  // const [year, setYear] = useState(date.getFullYear());
  // const [month, setMonth] = useState(date.getMonth());

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
      let thisDay = new Date(year, month, i + 1);
      view.push(
        <div key={i}>
          <p>{thisDay.getDate()}</p>
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
