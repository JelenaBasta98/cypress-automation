/// <reference types="cypress" />

describe("Testing Logout functionality ", () => {

    before("Login as Menager with new password", () => {

        cy.visit("http://demo.guru99.com/V4/");
        cy.get('input[name="uid"]').type("mngr358461");
        cy.get('input[name="password"]').type("$ifra0109");
        cy.get('input[name="btnLogin"]').click();
        cy.url().should("include", "/manager/Managerhomepage.php"); 
    })
    it("Menager can Logout", () => {

        cy.contains("Log out").click();
        cy.url().should("include", "/V4/index.php");
    })
})