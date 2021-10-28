/// <reference types="cypress" />

describe("Verify Telephone Number field", () => {

    beforeEach("Login as Menager and click on New Customer", () => {

        cy.visit("http://demo.guru99.com/V4/");
        cy.get('input[name="uid"]').type("mngr358461");
        cy.get('input[name="password"]').type("$ifra0109");
        cy.get('input[name="btnLogin"]').click();
        cy.url().should("include", "/manager/Managerhomepage.php");
        cy.contains("New Customer").click();
        cy.url().should("include", "/addcustomerpage.php");
    })
    it("Telephone Number field cannot be blank", () => {

        cy.get('input[name="telephoneno"]').click();
        cy.get('input[name="emailid"]').type("imeeem@gmail.com");
        cy.get('label[id="message7"]').should("have.text", "Mobile no must not be blank");
    })
    it("Telephone Number field cannot have special characters", () => {

        cy.get('input[name="telephoneno"]').type("##");
        cy.get('label[id="message7"]').should("have.text", "Special characters are not allowed");
    })
    it("Telephone Number field cannot have space as first character", () => {

        cy.get('input[name="telephoneno"]').type(" 152656");
        cy.get('label[id="message7"]').should("have.text", "First character can not have space");
    })
    it("Telephone Number field cannot have characters", () => {

        cy.get('input[name="telephoneno"]').type("broj");
        cy.get('label[id="message7"]').should("have.text", "Characters are not allowed");
    })
})