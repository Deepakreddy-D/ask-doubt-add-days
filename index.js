let getNewDate = (typeDay) => {
  const addDays = require("date-fns/addDays");
  let day = addDays(new Date(2020, 7, 22), typeDay);
  return `${day.getDate()}-${day.getMonth()}-${day.getFullYear()}`;
};

module.exports = getNewDate;

// console.log(getNewDate(10));
