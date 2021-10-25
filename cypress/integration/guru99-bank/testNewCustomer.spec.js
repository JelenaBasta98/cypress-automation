/// <reference types="cypress" />

describe("Testing Creating New Customer functionality", () => {

    before("Login as Menager", () => {

        cy.visit("http://demo.guru99.com/V4/");
        cy.get('input[name="uid"]').type("mngr358461");
        cy.get('input[name="password"]').type("sUvUbeq");
        cy.get('input[name="btnLogin"]').click();
        cy.url().should("include", "/manager/Managerhomepage.php"); 
    })
    it("Create New Customer", () => {

        cy.contains("New Customer").click();
        cy.url().should("include", "/manager/addcustomerpage.php");
        cy.get('input[name="name"]').type("Nekoihejje");
        cy.get('input[name="dob"]').type("2021-10-25");
        cy.get('textarea[name="addr"]').type("Moja Adressa 2");
        cy.get('input[name="city"]').type("Grad");
        cy.get('input[name="state"]').type("Drzava");
        cy.get('input[name="pinno"]').type("123466");
        cy.get('input[name="telephoneno"]').type("556599");
        cy.get('input[name="emailid"]').type("nekoi5599jje86@gmail.com");
        cy.get('input[name="password"]').type("sifra123");
        cy.get('input[value="Submit"]').click();
        cy.get('.heading3').should("have.text", "Customer Registered Successfully!!!");         
        //.contains("Customer Registered Successfully!!!");
    })


})