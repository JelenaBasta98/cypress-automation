/// <reference types="cypress" />

describe("Testing Mini Statement Form functionality ", () => {

    before("Login as Menager with new password", () => {

        cy.visit("http://demo.guru99.com/V4/");
        cy.get('input[name="uid"]').type("mngr358461");
        cy.get('input[name="password"]').type("$ifra0109");
        cy.get('input[name="btnLogin"]').click();
        cy.url().should("include", "/manager/Managerhomepage.php"); 
    })
    it("Mini Statement Form for Account No 99800", () => {

        cy.contains("Mini Statement").click();
        cy.url().should("include", "/manager/MiniStatementInput.php");
        cy.get('input[name="accountno"]').type("99800");
        cy.get('input[name="AccSubmit"]').click();
        cy.get('.heading3').should("have.text", "Last Five Transaction Details for Account No: 99800");
    })
})