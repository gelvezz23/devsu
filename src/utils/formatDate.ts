export const formatDate = (newDate: Date | string): string => {
  const date = new Date(newDate);
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  date.setFullYear(year);
  date.setMonth(month);
  date.setDate(day);

  const formatDate = date.toISOString().split("T")[0];
  return formatDate;
};
