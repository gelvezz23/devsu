export const getDateRevision = (newDate: string | Date | undefined) => {
  if (newDate) {
    const date = new Date(newDate);
    const year = date.getFullYear() + 1;
    const month = date.getMonth();
    const day = date.getDate();

    date.setFullYear(year);
    date.setMonth(month);
    date.setDate(day + 1);

    const revisedDate = date.toISOString().split("T")[0];
    return revisedDate;
  }
};
