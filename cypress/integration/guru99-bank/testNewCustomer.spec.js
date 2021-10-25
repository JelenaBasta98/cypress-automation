/// <reference types="cypress" />

describe("Testing Guru99 Bank", () => {

    before("Testing Login functionality", () => {

        cy.visit("http://demo.guru99.com/V4/");
        cy.get('input[name="uid"]').type("mngr358461");
        cy.get('input[name="password"]').type("sUvUbeq");
        cy.get('input[name="btnLogin"]').click();
        cy.url().should("include", "/manager/Managerhomepage.php");
        
    })

    it("Testing New Customer field", () => {

        cy.contains("New Customer").click();
        cy.url().should("include", "/manager/addcustomerpage.php");
        cy.get('input[name="name"]').type("Nekoime");
        cy.get('input[name="rad1"]');
        cy.get('input[name="dob"]').type("2021-10-25");
        cy.get('textarea[name="addr"]').type("Moja Adresa 2");
        cy.get('input[name="city"]').type("Grad");
        cy.get('input[name="state"]').type("Drzava");
        cy.get('input[name="pinno"]').type("123456");
        cy.get('input[name="telephoneno"]').type("566599");
        cy.get('input[name="emailid"]').type("nekoime@gmail.com");
        cy.get('input[name="password"]').type("sifra123");
        cy.get('input[value="Submit"]').click();

    })


})