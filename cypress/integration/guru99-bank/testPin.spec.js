/// <reference types="cypress" />

describe("Verify Pin field", () => {

    beforeEach("Login as Menager and click on New Customer", () => {

        cy.visit("http://demo.guru99.com/V4/");
        cy.get('input[name="uid"]').type("mngr358461");
        cy.get('input[name="password"]').type("$ifra0109");
        cy.get('input[name="btnLogin"]').click();
        cy.url().should("include", "/manager/Managerhomepage.php");
        cy.contains("New Customer").click();
        cy.url().should("include", "/addcustomerpage.php");
    })
    it("Pin field cannot be blank", () => {

        cy.get('input[name="pinno"]').click();
        cy.get('input[name="telephoneno"]').type("599566");
        cy.get('label[id="message6"]').should("have.text", "PIN Code must not be blank");
    })
    it("Pin field cannot have special characters", () => {

        cy.get('input[name="pinno"]').type("##");
        cy.get('label[id="message6"]').should("have.text", "Special characters are not allowed");
    })
    it("Pin field cannot have space as first character", () => {

        cy.get('input[name="pinno"]').type(" 152656");
        cy.get('label[id="message6"]').should("have.text", "First character can not have space");
    })
    it("Pin field must have 6 digits", () => {

        cy.get('input[name="pinno"]').type("123");
        cy.get('label[id="message6"]').should("have.text", "PIN Code must have 6 Digits");
    })
})