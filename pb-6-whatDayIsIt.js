function getDayOfWeek(year, month, day) {
  const weekdays = [
    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
  ];

  if (month < 3) {
    month += 12;
    year--;
  }

  const century = Math.floor(year / 100);
  const yearOfCentury = year % 100;

  const weekdayIndex =
    (day +
      Math.floor((13 * (month + 1)) / 5) +
      yearOfCentury +
      Math.floor(yearOfCentury / 4) +
      Math.floor(century / 4) +
      5 * century) %
    7;

  return weekdays[weekdayIndex];
}

console.log(getDayOfWeek(2024, 5, 11)); // Saturday
console.log(getDayOfWeek(2024, 5, 12)); // sunday
console.log(getDayOfWeek(2023, 1, 1)); // Sunday
