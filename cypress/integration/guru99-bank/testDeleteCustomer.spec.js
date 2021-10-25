/// <reference types="cypress" />

describe("Testing Delete Customer ", () => {

    before("Login as Menager", () => {

        cy.visit("http://demo.guru99.com/V4/");
        cy.get('input[name="uid"]').type("mngr358461");
        cy.get('input[name="password"]').type("sUvUbeq");
        cy.get('input[name="btnLogin"]').click();
        cy.url().should("include", "/manager/Managerhomepage.php"); 
    })
    it("Delete Customer", () => {

        cy.contains("Delete Customer").click();
        cy.url().should("include", "/manager/DeleteCustomerInput.php");
        cy.get('input[name="cusid"]').type("79387");
        cy.get('input[name="AccSubmit"]').click();
    })
})