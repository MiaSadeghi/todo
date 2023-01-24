export const findWeekendDate = (date) => {
  const delta = 6 - date.day();
  return date.add(delta, "days");
};
