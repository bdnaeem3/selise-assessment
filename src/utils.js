const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thrusday",
  "Friday",
  "Saturday",
];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const daysOfMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const getMonthDetails = (year, month) => {
  const firstDay = new Date(year, month, 1).getDay();
  let daysInMonth;

  if (month === 1 && year % 4 === 0) {
    daysInMonth = daysOfMonth[month] + 1;
  } else {
    daysInMonth = daysOfMonth[month];
  }

  return { firstDay, daysInMonth };
};

const getDateDetails = (item) => {
  const itemDate = new Date(item.date);
  const thisYear = itemDate.getFullYear();
  const thisMonth = itemDate.getMonth();
  const thisDate = itemDate.getDate();

  return { thisYear, thisMonth, thisDate };
};

const getTimeDetails = (year, month, day, time) => {
  return new Date(
    year,
    month,
    day,
    parseInt(time.substr(0, 2), 10),
    parseInt(time.substr(3), 10)
  );
};

export { days, months, getMonthDetails, getDateDetails, getTimeDetails };
