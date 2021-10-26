/// <reference types="cypress" />

describe("Testing Withdrawal functionality ", () => {

    before("Login as Menager", () => {

        cy.visit("http://demo.guru99.com/V4/");
        cy.get('input[name="uid"]').type("mngr358461");
        cy.get('input[name="password"]').type("sUvUbeq");
        cy.get('input[name="btnLogin"]').click();
        cy.url().should("include", "/manager/Managerhomepage.php"); 
    })
    it("Withdraw money from the bank", () => {

        cy.contains("Withdrawal").click();
        cy.url().should("include", "/manager/WithdrawalInput.php");
        cy.get('input[name="accountno"]').type("99800");
        cy.get('input[name="ammount"]').type("10000");
        cy.get('input[name="desc"]').type("withdraw");
        cy.get('input[name="AccSubmit"]').click();
        cy.get('.heading3').should("have.text", "Transaction details of Withdrawal for Account 99800");
    })
})