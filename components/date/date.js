const DateTime = setInterval(() => {
  const newDate = new Date();

  const year = newDate.getFullYear();
  const month = newDate.getMonth();
  const day = newDate.getDate();
  const newDay = newDate.getDay();

  const fullDate = document.querySelectorAll(".date");
  const years = document.querySelectorAll(".date.year");
  const months = document.querySelectorAll(".date.month");
  const monthsName = document.querySelectorAll(".date.month-name");
  const days = document.querySelectorAll(".date.day");
  const daysName = document.querySelectorAll(".date.day-name");

  const hour = newDate.getHours();
  const minute = newDate.getMinutes();
  const second = newDate.getSeconds();

  const fullTime = document.querySelectorAll(".time");
  const fullTime12 = document.querySelectorAll(".time-12");
  const hours = document.querySelectorAll(".time.hour");
  const hours12format = document.querySelectorAll(".time.hour-12");
  const minutes = document.querySelectorAll(".time.minute");
  const seconds = document.querySelectorAll(".time.second");
  const meridian = document.querySelectorAll(".time.meridian");

  const monthNames = [
    "JANUARY",
    "FEBRUARY",
    "MARCH",
    "APRIL",
    "MAY",
    "JUNE",
    "JULY",
    "AUGUST",
    "SEPTEMBER",
    "OCTOBER",
    "NOVERMBER",
    "DECEMBER",
  ];

  const dayNames = [
    "SUNDAY",
    "MONDAY",
    "TEUSDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY",
  ];

  fullDate.forEach((element) => {
    const trueMonth = month + 1;
    element.innerHTML = `${year}-${
      trueMonth < 10 ? "0" + trueMonth : trueMonth
    }-${day < 10 ? "0" + day : day}`;
  });

  fullTime.forEach((element) => {
    element.innerHTML = `${hour < 10 ? "0" + hour : hour}-${
      minute < 10 ? "0" + minute : minute
    }-${second < 10 ? "0" + second : second}`;
  });

  fullTime12.forEach((element) => {
    const trueHour = hour > 12 ? hour - 12 : hour;
    element.innerHTML = `${trueHour < 10 ? "0" + trueHour : trueHour}-${
      minute < 10 ? "0" + minute : minute
    }-${second < 10 ? "0" + second : second} ${hour > 12 ? "PM" : "AM"}`;
  });

  years.forEach((element) => {
    element.innerHTML = year;
  });

  months.forEach((element) => {
    element.innerHTML = month + 1 < 10 ? "0" + month : month;
  });

  monthsName.forEach((element) => {
    element.innerHTML = monthNames[month];
  });

  days.forEach((element) => {
    element.innerHTML = day < 10 ? "0" + day : day;
  });

  daysName.forEach((element) => {
    element.innerHTML = dayNames[newDay];
  });

  hours.forEach((element) => {
    element.innerHTML = hour < 10 ? "0" + hour : hour;
  });

  hours12format.forEach((element) => {
    const hour12 = hour > 12 ? hour - 12 : hour;
    element.innerHTML = hour12 < 10 ? "0" + hour12 : hour12;
  });

  minutes.forEach((element) => {
    element.innerHTML = minute;
  });

  seconds.forEach((element) => {
    element.innerHTML = second;
  });

  meridian.forEach((element) => {
    element.innerHTML = hour > 12 ? "PM" : "AM";
  });
}, 1000);

export default DateTime;