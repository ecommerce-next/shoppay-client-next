import dayjs from "dayjs";

export function calculateDiff(timeInMs) {
  const timeStampDayjs = dayjs(timeInMs);
  const nowDayjs = dayjs();
  if (timeStampDayjs.isBefore(nowDayjs)) {
    return {
      seconds: "00",
      minutes: "00",
      hours: "00",
      days: "00",
    };
  }
    const diff = timeStampDayjs.diff(nowDayjs, "seconds");
    const days = Math.floor(diff / (60 * 60 * 24));
    const hours = Math.floor((diff % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((diff % (60 * 60)) / 60);
    const seconds = Math.floor(diff % 60);
    return {
        // seconds: seconds.toString(),
        // minutes: minutes.toString(),
        // hours: hours.toString(),
        // days: days.toString(),
        seconds: padWithZeros(seconds, 2),
        minutes: padWithZeros(minutes, 2),
        hours: padWithZeros(hours, 2),
        days: padWithZeros(days, 2)
    };
};

function padWithZeros(number, length) {
  const numberString = number.toString();
  if (numberString.length >= length) return numberString;
  return "0".repeat(length - numberString.length) + numberString;
}
