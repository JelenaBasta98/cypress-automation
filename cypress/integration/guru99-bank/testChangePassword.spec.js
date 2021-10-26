/// <reference types="cypress" />

describe("Testing Change Password functionality ", () => {

    before("Login as Menager", () => {

        cy.visit("http://demo.guru99.com/V4/");
        cy.get('input[name="uid"]').type("mngr358461");
        cy.get('input[name="password"]').type("sUvUbeq");
        cy.get('input[name="btnLogin"]').click();
        cy.url().should("include", "/manager/Managerhomepage.php"); 
    })
    it("Change Password", () => {

        cy.contains("Change Password").click();
        cy.get('input[name="oldpassword"]').type("sUvUbeq");
        cy.get('input[name="newpassword"]').type("$ifra0109");
        cy.get('input[name="confirmpassword"]').type("$ifra0109");
        cy.get('input[value="Submit"]').click();
    })
})