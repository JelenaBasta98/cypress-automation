/// <reference types="cypress" />

import LoginPage from "../../pages/login-page";
import ManagerPage from "../../pages/manager-page";
import NewCustomerPage from "../../pages/new-customer-page";

describe("Verify Customer Name field", () => {

    beforeEach("Login as Menager and click on New Customer", () => {
        cy.visit("http://demo.guru99.com/V4/");
        LoginPage.typeUid("mngr358461");
        LoginPage.typePassword("$ifra0109");
        LoginPage.clickLogin();
        cy.url().should("include", "/manager/Managerhomepage.php");   
        ManagerPage.elements.newCustomer();
        cy.url().should("include", "/addcustomerpage.php");
    })

    it("Customer Name field cannot have numbers", () => {
        NewCustomerPage.typeCustomerName("123456");
        NewCustomerPage.elements.message2().should("have.text", "Numbers are not allowed");
    })

    it("Customer Name field cannot have special characters", () => {
        NewCustomerPage.typeCustomerName("$#%");
        NewCustomerPage.elements.message2().should("have.text", "Special characters are not allowed");
    })

    it("Customer Name field cannot have space as first character", () => {
        NewCustomerPage.typeCustomerName(" Blabla");
        NewCustomerPage.elements.message2().should("have.text", "First character can not have space");
    })

    it("Customer Name field cannot be blank", () => {
        NewCustomerPage.elements.customerName().click();
        NewCustomerPage.typedateOfBirth("2021-10-26");
        NewCustomerPage.elements.message2().should("have.text", "Customer name must not be blank");
    })
})