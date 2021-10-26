/// <reference types="cypress" />

describe("Testing Customized Statement Form functionality ", () => {

    before("Login as Menager with new password", () => {

        cy.visit("http://demo.guru99.com/V4/");
        cy.get('input[name="uid"]').type("mngr358461");
        cy.get('input[name="password"]').type("$ifra0109");
        cy.get('input[name="btnLogin"]').click();
        cy.url().should("include", "/manager/Managerhomepage.php"); 
    })
    it("Customized Statement Form for Account No 99800", () => {

        cy.contains("Customised Statement").click();
        cy.url().should("include", "/manager/CustomisedStatementInput.php");
        cy.get('input[name="accountno"]').type("99800");
        cy.get('input[name="fdate"]').type("2021-10-20");
        cy.get('input[name="tdate"]').type("2021-10-26");
        cy.get('input[name="amountlowerlimit"]').type("100");
        cy.get('input[name="numtransaction"]').type("10");
        cy.get('input[name="AccSubmit"]').click();
        cy.get('.heading3').should("have.text", "Transaction Details for Account No: 99800 from Date: 2021-10-20 to: 2021-10-26");
    })
})