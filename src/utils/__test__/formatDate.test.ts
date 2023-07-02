import { formatDate } from "../formatDate";

describe("formatDate", () => {
  it("should format the date correctly", () => {
    const inputDate = new Date("2023-06-05");
    const formattedDate = formatDate(inputDate);
    expect(formattedDate).toBe("2023-06-05");
  });

  it("should format a string date correctly", () => {
    const inputDate = "2023-06-30";
    const formattedDate = formatDate(inputDate);
    expect(formattedDate).toBe("2023-06-30");
  });

  it("should pad single digit month and day with leading zero", () => {
    const inputDate = "2023-6-5";
    const formattedDate = formatDate(inputDate);
    expect(formattedDate).toBe("2023-06-05");
  });
});
