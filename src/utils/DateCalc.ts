export const dateCalc = (dateForm: string, dateTo: string) => {
  const dateFromNumber = Date.parse(dateForm);
  const dateToNumber = Date.parse(dateTo);
  if (dateToNumber > dateFromNumber) {
    const time = dateToNumber - dateFromNumber;
    const duration = `${Math.floor(time / (1000 * 60 * 60 * 24))}д ${Math.floor(
      (time / (1000 * 60 * 60)) % 24
    )}ч ${Math.floor((time / (1000 * 60)) % 60)}мин`;
    return duration;
  }
};
