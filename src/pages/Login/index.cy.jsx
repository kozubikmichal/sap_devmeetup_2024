/* eslint-disable no-undef */

import { createMemoryRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./";
import { ROUTES } from "../../utils/router";

describe("<LoginForm />", () => {
  const setup = () =>
    cy.mount(
      <RouterProvider
        router={createMemoryRouter([
          {
            path: ROUTES.Login,
            element: <LoginPage />,
          },
          {
            path: ROUTES.UserPortal,
            element: <div>User Portal</div>,
          },
        ])}
      />
    );

  it("shows error for incorrect user/password", () => {
    setup();

    cy.get("input[name='username']").type("Sonic the Hedgehog");
    cy.get("input[name='password']").type("Chili Dogs");

    cy.contains("button", "Login").click();

    cy.contains("Invalid username or password");
    cy.contains("User Portal").should("not.exist");
  });

  it("redirects to User Portal on successful login", () => {
    setup();

    cy.get("input[name='username']").type("admin");
    cy.get("input[name='password']").type("admin");

    cy.contains("button", "Login").click();

    cy.contains("Login").should("not.exist");
    cy.contains("User Portal");
  });
});
