/// <reference types="cypress" />

import LoginPage from "../../pages/login-page";
import ManagerPage from "../../pages/manager-page";
import NewCustomerPage from "../../pages/new-customer-page";

describe("Verify State field", () => {

    beforeEach("Login as Menager and click on New Customer", () => {
        cy.visit("http://demo.guru99.com/V4/");
        LoginPage.typeUid("mngr358461");
        LoginPage.typePassword("$ifra0109");
        LoginPage.clickLogin();
        cy.url().should("include", "/manager/Managerhomepage.php");   
        ManagerPage.elements.newCustomer();
        cy.url().should("include", "/addcustomerpage.php");
    })

    it("State field cannot be blank", () => {
        NewCustomerPage.elements.state().click();
        NewCustomerPage.typePin("112233");
        NewCustomerPage.elements.message6().should("have.text", "State must not be blank");
    })

    it("State field cannot have special characters", () => {
        NewCustomerPage.typeState("##");
        NewCustomerPage.elements.message6().should("have.text", "Special characters are not allowed");
    })

    it("State field cannot have space as first character", () => {
        NewCustomerPage.typeState(" Grad");
        NewCustomerPage.elements.message6().should("have.text", "First character can not have space");
    })

    it("State field cannot have numbers", () => {
        NewCustomerPage.typeState("123");
        NewCustomerPage.elements.message6().should("have.text", "Numbers are not allowed");
    })
})