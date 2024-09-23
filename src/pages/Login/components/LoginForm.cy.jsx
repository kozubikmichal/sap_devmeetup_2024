/* eslint-disable no-undef */

import LoginForm from "./LoginForm";

describe("components/LoginForm", () => {
  it("renders", () => {
    const onSubmit = cy.stub().as("onSubmit");

    cy.mount(<LoginForm onSubmit={onSubmit} />);

    cy.get("input[name='username']").type("Sonic the Hedgehog");
    cy.get("input[name='password']").type("Chili Dogs");

    cy.contains("button", "Sign in").click();

    cy.get("@onSubmit").should("have.been.calledWith", {
      username: "Sonic the Hedgehog",
      password: "Chili Dogs",
    });
  });
});
