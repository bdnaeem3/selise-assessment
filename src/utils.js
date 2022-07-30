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
  "September",
  "October",
  "November",
  "December",
];

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

export { days, months, getDateDetails, getTimeDetails };
