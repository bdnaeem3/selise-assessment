import React, { Fragment, useState } from "react";
import { days, months } from "./utils";
import "./app.css";

const App = () => {
  const date = new Date();
  // const firstDay = date.getDay();
  const [year, setYear] = useState(date.getFullYear());
  const [month, setMonth] = useState(date.getMonth());

  // console.log("date", date);
  // console.log("firstDay", firstDay);
  // console.log("year", year);
  // console.log("month", month);

  const generateCalendar = () => {
    const view = [];
    var firstDay = new Date(year, month, 1).getDay();
    var lastDay = new Date(year, month + 1, 0).getDate();

    // console.log("firstDay", firstDay);
    // console.log("lastDay", lastDay);

    if (firstDay !== 0) {
      for (let i = 0; i < firstDay; i++) {
        view.push(<div key={`j-${i}`}></div>);
      }
    }

    for (let i = 0; i < lastDay; i++) {
      let thisDay = new Date(year, month, i + 1);
      console.log("thisDay", thisDay);
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
      console.log("no");
    }

    console.log("view,", view.length);

    return view;
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
      </div>
      <div className="wrapper">
        <ul>
          {days.map((day, i) => {
            return <li key={i}>{day}</li>;
          })}
        </ul>

        {generateCalendar()}
      </div>
    </Fragment>
  );
};

export default App;
