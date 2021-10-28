/// <reference types="cypress" />

describe("Testing Deposit functionality ", () => {

    before("Login as Menager", () => {

        cy.visit("http://demo.guru99.com/V4/");
        cy.get('input[name="uid"]').type("mngr358461");
        cy.get('input[name="password"]').type("sUvUbeq");
        cy.get('input[name="btnLogin"]').click();
        cy.url().should("include", "/manager/Managerhomepage.php"); 
    })
    it("Give a Deposit to the bank", () => {

        cy.contains("Deposit").click();
        cy.url().should("include", "/manager/DepositInput.php");
        cy.get('input[name="accountno"]').type("99800");
        cy.get('input[name="ammount"]').type("50000");
        cy.get('input[name="desc"]').type("deposit");
        cy.get('input[name="AccSubmit"]').click();
        cy.get('.heading3').should("have.text", "Transaction details of Deposit for Account 99800");
    })
})