/// <reference types="cypress" />

import LoginPage from "../../pages/login-page";
import ManagerPage from "../../pages/manager-page";
import NewCustomerPage from "../../pages/new-customer-page";

describe("Verify Address field", () => {

    beforeEach("Login as Menager and click on New Customer", () => {
        cy.visit("http://demo.guru99.com/V4/");
        LoginPage.typeUid("mngr358461");
        LoginPage.typePassword("$ifra0109");
        LoginPage.clickLogin();
        cy.url().should("include", "/manager/Managerhomepage.php");   
        ManagerPage.elements.newCustomer();
        cy.url().should("include", "/addcustomerpage.php");
    })

    it("Address field cannot be blank", () => {
        NewCustomerPage.elements.address().click();
        NewCustomerPage.typeCity("Grad");
        NewCustomerPage.elements.message4().should("have.text", "Address Field must not be blank");
    })

    it("Address field cannot have special characters", () => {
        NewCustomerPage.typeAddress("##");
        NewCustomerPage.elements.message4().should("have.text", "Special characters are not allowed");
    })

    it("Address field cannot have space as first character", () => {
        NewCustomerPage.typeAddress(" Adresa");
        NewCustomerPage.elements.message4().should("have.text", "First character can not have space");
    })
})