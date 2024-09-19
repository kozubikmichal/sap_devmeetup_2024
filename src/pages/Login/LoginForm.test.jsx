import { render, screen } from "@testing-library/react";
import LoginForm from "./LoginForm";
import userEvent from "@testing-library/user-event";

describe("pages/Login/LoginForm.test.jsx", () => {
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
