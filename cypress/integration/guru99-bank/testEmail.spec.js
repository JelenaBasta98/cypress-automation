/// <reference types="cypress" />

describe("Verify E-mail field", () => {

    beforeEach("Login as Menager and click on New Customer", () => {

        cy.visit("http://demo.guru99.com/V4/");
        cy.get('input[name="uid"]').type("mngr358461");
        cy.get('input[name="password"]').type("$ifra0109");
        cy.get('input[name="btnLogin"]').click();
        cy.url().should("include", "/manager/Managerhomepage.php");
        cy.contains("New Customer").click();
        cy.url().should("include", "/addcustomerpage.php");
    })
    it("E-mail field cannot be blank", () => {

        cy.get('input[name="emailid"]').click();
        cy.get('input[name="telephoneno"]').type("5885888");
        cy.get('label[id="message9"]').should("have.text", "Email-ID must not be blank");
    })
    it("E-mail field cannot have special characters", () => {

        cy.get('input[name="emailid"]').type("##");
        cy.get('label[id="message9"]').should("have.text", "Email-ID is not valid");
    })
    it("E-mail field cannot have space as first character", () => {

        cy.get('input[name="emailid"]').type(" ime98@hmail.com");
        cy.get('label[id="message9"]').should("have.text", "First character can not have space");
    })
    it("E-mail field must have @", () => {

        cy.get('input[name="emailid"]').type("nekoimegmail.com");
        cy.get('label[id="message9"]').should("have.text", "Email-ID is not valid");
    })
})