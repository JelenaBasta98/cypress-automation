/// <reference types="cypress" />

describe("Verify City field", () => {

    beforeEach("Login as Menager and click on New Customer", () => {

        cy.visit("http://demo.guru99.com/V4/");
        cy.get('input[name="uid"]').type("mngr358461");
        cy.get('input[name="password"]').type("$ifra0109");
        cy.get('input[name="btnLogin"]').click();
        cy.url().should("include", "/manager/Managerhomepage.php");
        cy.contains("New Customer").click();
        cy.url().should("include", "/addcustomerpage.php");
    })
    it("City field cannot be blank", () => {

        cy.get('input[name="city"]').click();
        cy.get('input[name="state"]').type("Drzava");
        cy.get('label[id="message4"]').should("have.text", "City Field must not be blank");
    })
    it("City field cannot have special characters", () => {

        cy.get('input[name="city"]').type("##");
        cy.get('label[id="message4"]').should("have.text", "Special characters are not allowed");
    })
    it("City field cannot have space as first character", () => {

        cy.get('input[name="city"]').type(" Grad");
        cy.get('label[id="message4"]').should("have.text", "First character can not have space");
    })
    it("City field cannot have numbers", () => {

        cy.get('input[name="city"]').type("123");
        cy.get('label[id="message4"]').should("have.text", "Numbers are not allowed");
    })
})