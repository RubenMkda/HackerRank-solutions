function timeConversion(s) {
  let hour, time;

  time = s.slice(8, 10);
  hour = s.slice(0, 2);
  hour = hour * 1;

  if (time === "AM" && hour == 12) hour -= 12;
  if (time === "PM" && hour !== 12) hour += 12;
  if (hour < 10) hour = `0${hour}`;

  let str = hour + s.slice(2, 8);

  return str;
}
