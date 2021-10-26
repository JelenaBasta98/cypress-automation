/// <reference types="cypress" />

describe("Testing New Account functionality ", () => {

    before("Login as Menager", () => {

        cy.visit("http://demo.guru99.com/V4/");
        cy.get('input[name="uid"]').type("mngr358461");
        cy.get('input[name="password"]').type("sUvUbeq");
        cy.get('input[name="btnLogin"]').click();
        cy.url().should("include", "/manager/Managerhomepage.php"); 
    })
    it("Create New Account", () => {

        cy.contains("New Account").click();
        cy.url().should("include", "/manager/addAccount.php");
        cy.get('input[name="cusid"]').type("79387");
        cy.get('input[name="inideposit"]').type("10000");
        cy.get('input[name="button2"]').click();
        cy.get('.heading3').should("have.text", "Account Generated Successfully!!!");
    })
})