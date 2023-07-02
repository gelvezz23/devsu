import { getDateRevision } from "../getDateRevision";

describe("formatDate", () => {
  it("should format the date correctly", () => {
    const inputDate = new Date("2023-06-05");
    const formattedDate = getDateRevision(inputDate);
    expect(formattedDate).toBe("2024-06-06");
  });

  it("should format a string date correctly", () => {
    const inputDate = "2023-06-29";
    const formattedDate = getDateRevision(inputDate);
    expect(formattedDate).toBe("2024-06-30");
  });

  it("should pad single digit month and day with leading zero", () => {
    const inputDate = "2023-6-5";
    const formattedDate = getDateRevision(inputDate);
    expect(formattedDate).toBe("2024-06-06");
  });

  it("should next year", () => {
    const inputDate = "2025-6-5";
    const formattedDate = getDateRevision(inputDate);
    expect(formattedDate).toBe("2026-06-06");
  });
});
