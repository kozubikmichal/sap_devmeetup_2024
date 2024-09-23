/* eslint-disable no-undef */

describe("Login", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });

  it("Admin can login to/logout from the User Portal", () => {
    cy.get("input[name='username']").type("admin");
    cy.get("input[name='password']").type("admin");

    cy.contains("button", "Login").click();

    cy.contains("User Area");
    cy.contains("Logged in as admin");

    cy.percySnapshot("Admin login");

    cy.contains("button", "Logout").click();

    cy.contains("User Portal").should("not.exist");
    cy.contains("Login");
  });
});
