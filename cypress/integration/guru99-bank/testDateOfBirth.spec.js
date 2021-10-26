/// <reference types="cypress" />

describe("Verify Date of Birth field", () => {

    before("Login as Menager and enter Customer Name", () => {

        cy.visit("http://demo.guru99.com/V4/");
        cy.get('input[name="uid"]').type("mngr358461");
        cy.get('input[name="password"]').type("$ifra0109");
        cy.get('input[name="btnLogin"]').click();
        cy.url().should("include", "/manager/Managerhomepage.php");
        cy.contains("New Customer").click();
        cy.url().should("include", "/addcustomerpage.php");
        cy.get('input[name="name"]').type("Ime"); 
    })
    it("Date of Birth field cannot be blank", () => {

        cy.get('input[name="dob"]').click();
        cy.get('input[name="city"]').type("Grad");
        cy.get('label[id="message24"]').should("have.text", "Date Field must not be blank");
    })
})