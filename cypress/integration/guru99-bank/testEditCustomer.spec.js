/// <reference types="cypress" />

describe("Testing Edit Customer Form", () => {

    before("Login as Menager", () => {

        cy.visit("http://demo.guru99.com/V4/");
        cy.get('input[name="uid"]').type("mngr358461");
        cy.get('input[name="password"]').type("sUvUbeq");
        cy.get('input[name="btnLogin"]').click();
        cy.url().should("include", "/manager/Managerhomepage.php"); 
    })
    it("Edit Customer", () => {

        cy.contains("Edit Customer").click();
        cy.url().should("include", "/manager/EditCustomer.php");
        cy.get('input[name="cusid"]').type("79387");
        cy.get('input[name="AccSubmit"]').click();
        cy.url().should("include", "/manager/editCustomerPage.php");

    })


})