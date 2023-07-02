import { invalid } from "./../validateForm";

describe("invalid", () => {
  it("should return false if any field is empty", () => {
    const data = {
      name: "",
      logo: "logo",
      description: "description",
      id: "id",
      date_release: "date_release",
    };

    expect(invalid(data)).toBe(false);
  });

  it("should return false if id length is less than 3", () => {
    const data = {
      name: "name",
      logo: "logo",
      description: "description",
      id: "id",
      date_release: "date_release",
    };

    expect(invalid(data)).toBe(false);
  });

  // Add more test cases for different validation conditions...

  it("should return true if all fields pass validation", () => {
    const data = {
      name: "valid name",
      logo: "valid logo",
      description: "valid description",
      id: "valid-id",
      date_release: "date_release",
    };

    expect(invalid(data)).toBe(true);
  });
});
