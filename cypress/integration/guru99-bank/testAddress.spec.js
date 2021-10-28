/// <reference types="cypress" />

describe("Verify Address field", () => {

    beforeEach("Login as Menager and click on New Customer", () => {

        cy.visit("http://demo.guru99.com/V4/");
        cy.get('input[name="uid"]').type("mngr358461");
        cy.get('input[name="password"]').type("$ifra0109");
        cy.get('input[name="btnLogin"]').click();
        cy.url().should("include", "/manager/Managerhomepage.php");
        cy.contains("New Customer").click();
        cy.url().should("include", "/addcustomerpage.php");
    })
    it("Address field cannot be blank", () => {

        cy.get('textarea[name="addr"]').click();
        cy.get('input[name="city"]').type("Grad");
        cy.get('label[id="message3"]').should("have.text", "Address Field must not be blank");
    })
    it("Address field cannot have special characters", () => {

        cy.get('textarea[name="addr"]').type("##");
        cy.get('label[id="message3"]').should("have.text", "Special characters are not allowed");
    })
    it("Address field cannot have space as first character", () => {

        cy.get('textarea[name="addr"]').type(" Adresa");
        cy.get('label[id="message3"]').should("have.text", "First character can not have space");
    })
})