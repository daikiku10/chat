/* eslint-disable no-undef */
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { LoginForm } from ".";

describe("LoginForm", () => {
  it("チャットはじめるボタンが表示されていること", () => {
    render(<LoginForm />);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument;
  });

  it("renders homepage unchanged", () => {
    const { container } = render(<LoginForm />);
    expect(container).toMatchSnapshot();
  });
});
