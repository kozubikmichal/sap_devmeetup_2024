import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import LoginForm from "./LoginForm";

describe("components/LoginForm", () => {
  it("should render the form and submit it", async () => {
    const onSubmit = jest.fn();

    render(<LoginForm onSubmit={onSubmit} />);

    const usernameInput = screen.getByPlaceholderText("Username");
    const passwordInput = screen.getByPlaceholderText("Password");
    const submitButton = screen.getByText("Login");

    await userEvent.type(usernameInput, "testuser");
    await userEvent.type(passwordInput, "testpassword");

    await userEvent.click(submitButton);

    expect(onSubmit).toHaveBeenCalledWith({
      username: "testuser",
      password: "testpassword",
    });
  });
});