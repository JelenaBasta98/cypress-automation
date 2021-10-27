/// <reference types="cypress" />

describe("Verify State field", () => {

    beforeEach("Login as Menager and click on New Customer", () => {

        cy.visit("http://demo.guru99.com/V4/");
        cy.get('input[name="uid"]').type("mngr358461");
        cy.get('input[name="password"]').type("$ifra0109");
        cy.get('input[name="btnLogin"]').click();
        cy.url().should("include", "/manager/Managerhomepage.php");
        cy.contains("New Customer").click();
        cy.url().should("include", "/addcustomerpage.php");
    })
    it("State field cannot be blank", () => {

        cy.get('input[name="state"]').click();
        cy.get('input[name="pinno"]').type("112233");
        cy.get('label[id="message5"]').should("have.text", "State must not be blank");
    })
    it("State field cannot have special characters", () => {

        cy.get('input[name="state"]').type("##");
        cy.get('label[id="message5"]').should("have.text", "Special characters are not allowed");
    })
    it("State field cannot have space as first character", () => {

        cy.get('input[name="state"]').type(" Grad");
        cy.get('label[id="message5"]').should("have.text", "First character can not have space");
    })
    it("State field cannot have numbers", () => {

        cy.get('input[name="state"]').type("123");
        cy.get('label[id="message5"]').should("have.text", "Numbers are not allowed");
    })
})