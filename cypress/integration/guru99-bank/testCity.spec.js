/// <reference types="cypress" />

import LoginPage from "../../pages/login-page";
import ManagerPage from "../../pages/manager-page";
import NewCustomerPage from "../../pages/new-customer-page";

describe("Verify City field", () => {

    beforeEach("Login as Menager and click on New Customer", () => {
        cy.visit("http://demo.guru99.com/V4/");
        LoginPage.typeUid("mngr358461");
        LoginPage.typePassword("$ifra0109");
        LoginPage.clickLogin();
        cy.url().should("include", "/manager/Managerhomepage.php");   
        ManagerPage.elements.newCustomer();
        cy.url().should("include", "/addcustomerpage.php");
    })

    it("City field cannot be blank", () => {
        NewCustomerPage.elements.city().click();
        NewCustomerPage.typeState("Drzava");
        NewCustomerPage.elements.message5().should("have.text", "City Field must not be blank");
    })

    it("City field cannot have special characters", () => {
        NewCustomerPage.typeCity("##");
        NewCustomerPage.elements.message5().should("have.text", "Special characters are not allowed");
    })

    it("City field cannot have space as first character", () => {
        NewCustomerPage.typeCity(" Grad");
        NewCustomerPage.elements.message5().should("have.text", "First character can not have space");
    })

    it("City field cannot have numbers", () => {
        NewCustomerPage.typeCity("123");
        NewCustomerPage.elements.message5().should("have.text", "Numbers are not allowed");
    })
})