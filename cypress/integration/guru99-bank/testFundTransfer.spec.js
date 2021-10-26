/// <reference types="cypress" />

describe("Testing Fund Transfer functionality ", () => {

    before("Login as Menager", () => {

        cy.visit("http://demo.guru99.com/V4/");
        cy.get('input[name="uid"]').type("mngr358461");
        cy.get('input[name="password"]').type("sUvUbeq");
        cy.get('input[name="btnLogin"]').click();
        cy.url().should("include", "/manager/Managerhomepage.php"); 
    })
    it("Fund Transfer between two accounts", () => {

        cy.contains("Fund Transfer").click();
        cy.url().should("include", "/manager/FundTransInput.php");
        cy.get('input[name="payersaccount"]').type("99800");
        cy.get('input[name="payeeaccount"]').type("99804");
        cy.get('input[name="ammount"]').type("10");
        cy.get('input[name="desc"]').type("transfer");
        cy.get('input[name="AccSubmit"]').click();
        cy.get('.heading3').should("have.text", "Fund Transfer DetailsContinue");
    })
})