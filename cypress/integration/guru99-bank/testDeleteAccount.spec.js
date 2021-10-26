/// <reference types="cypress" />

describe("Testing Delete Account functionality ", () => {

    before("Login as Menager", () => {

        cy.visit("http://demo.guru99.com/V4/");
        cy.get('input[name="uid"]').type("mngr358461");
        cy.get('input[name="password"]').type("sUvUbeq");
        cy.get('input[name="btnLogin"]').click();
        cy.url().should("include", "/manager/Managerhomepage.php"); 
    })
    it("Delete Account", () => {

        cy.contains("Delete Account").click();
        cy.url().should("include", "/manager/deleteAccountInput.php");
        cy.get('input[name="accountno"]').type("90841");
        cy.get('input[name="AccSubmit"]').click();
    })
})