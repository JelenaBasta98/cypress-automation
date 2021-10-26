/// <reference types="cypress" />

describe("Testing Customer Name field", () => {

    beforeEach("Login as Menager with new password", () => {

        cy.visit("http://demo.guru99.com/V4/");
        cy.get('input[name="uid"]').type("mngr358461");
        cy.get('input[name="password"]').type("$ifra0109");
        cy.get('input[name="btnLogin"]').click();
        cy.url().should("include", "/manager/Managerhomepage.php"); 
    })
    it("Customer Name field cannot have numbers", () => {

        cy.contains("New Customer").click();
        cy.url().should("include", "/addcustomerpage.php");
        cy.get('input[name="name"]').type("123456");
        cy.get('label[id="message"]').should("have.text", "Numbers are not allowed");
    })
    it("Customer Name field cannot have special characters", () => {

        cy.contains("New Customer").click();
        cy.url().should("include", "/addcustomerpage.php");
        cy.get('input[name="name"]').type("$#%");
        cy.get('label[id="message"]').should("have.text", "Special characters are not allowed");
    })
    it("Customer Name field cannot have space as first character", () => {

        cy.contains("New Customer").click();
        cy.url().should("include", "/addcustomerpage.php");
        cy.get('input[name="name"]').type(" Blabla");
        cy.get('label[id="message"]').should("have.text", "First character can not have space");
    })
    it("Customer Name field cannot be blank", () => {

        cy.contains("New Customer").click();
        cy.url().should("include", "/addcustomerpage.php");
        cy.get('input[name="name"]').click();
        cy.get('input[name="dob"]').type("2021-10-26");
        cy.get('label[id="message"]').should("have.text", "Customer name must not be blank");
    })
})