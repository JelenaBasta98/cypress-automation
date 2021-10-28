/// <reference types="cypress" />

describe("Verify Customer ID field", () => {

    beforeEach("Login as Menager and click on Delete Customer", () => {

        cy.visit("http://demo.guru99.com/V4/");
        cy.get('input[name="uid"]').type("mngr358461");
        cy.get('input[name="password"]').type("$ifra0109");
        cy.get('input[name="btnLogin"]').click();
        cy.url().should("include", "/manager/Managerhomepage.php");
        cy.contains("Delete Customer").click({force: true});
        cy.url().should("include", "/test/delete_customer.php");     
    })
    it("Customer ID field cannot be blank", () => {

        cy.get('input[name="cusid"]').tab();
        cy.get('label[id="message14"]').should("have.text", "Customer ID is required");
    })
    it("Customer ID field cannot have special characters", () => {

        cy.get('input[name="cusid"]').type("##");
        cy.get('label[id="message14"]').should("have.text", "Special characters are not allowed");
    })
    it("Customer ID field cannot have space as first character", () => {

        cy.get('input[name="cusid"]').type(" 2659");
        cy.get('label[id="message14"]').should("have.text", "First character can not have space");
    })
    it("Customer ID field cannot have characters", () => {

        cy.get('input[name="cusid"]').type("nana");
        cy.get('label[id="message14"]').should("have.text", "Characters are not allowed");
    })
})