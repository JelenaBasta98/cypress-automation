/// <reference types="cypress" />

describe("Testing Edit Account functionality ", () => {

    before("Login as Menager", () => {

        cy.visit("http://demo.guru99.com/V4/");
        cy.get('input[name="uid"]').type("mngr358461");
        cy.get('input[name="password"]').type("sUvUbeq");
        cy.get('input[name="btnLogin"]').click();
        cy.url().should("include", "/manager/Managerhomepage.php"); 
    })
    it("Edit Account", () => {

        cy.contains("Edit Account").click();
        cy.url().should("include", "/manager/editAccount.php");
        cy.get('input[name="accountno"]').type("99800");
        cy.get('input[name="AccSubmit"]').click();
        cy.get('.heading3').should("have.text", "Edit Account Entry Form");
    })
})