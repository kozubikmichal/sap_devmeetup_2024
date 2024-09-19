/* eslint-disable no-undef */

describe("Login", () => {
  beforeEach(() => {
    cy.visit("https://sap-devmeetup-2024.vercel.app/");
  });

  it("Admin can login to/logout from the User Portal", () => {
    cy.get("input[name='username']").type("admin");
    cy.get("input[name='password']").type("admin");

    cy.contains("button", "Login").click();

    cy.contains("User Area");
    cy.contains("Logged as admin");

    cy.contains("button", "Logout").click();

    cy.contains("User Area").should("not.exist");
    cy.contains("Login");
  });
});
