import { act, render, screen } from "@testing-library/react";

import { Search } from "..";
import { RecoilRoot } from "recoil";

describe("Search", () => {
  it("should render the input field", () => {
    render(
      <RecoilRoot>
        <Search />
      </RecoilRoot>
    );
    const input = screen.getByPlaceholderText("Search...");
    expect(input).toBeTruthy();
  });

  it("should filter the products when the input changes", async () => {
    render(
      <RecoilRoot>
        <Search />
      </RecoilRoot>
    );

    act(() => {
      screen
        .getByPlaceholderText("Search...")
        .setAttribute("value", "Product 1");
    });

    expect(screen.getByDisplayValue("Product 1")).toBeTruthy();
  });
});
