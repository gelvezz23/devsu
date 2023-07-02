import { render } from "@testing-library/react";
import { Error } from "../index";
describe("Error", () => {
  it("should render the message prop", () => {
    const { getByText } = render(<Error message="This is an error message" />);
    expect(getByText("This is an error message")).toBeTruthy();
  });
});
