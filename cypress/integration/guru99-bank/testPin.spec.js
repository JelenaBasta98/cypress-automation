/// <reference types="cypress" />

import LoginPage from "../../pages/login-page";
import ManagerPage from "../../pages/manager-page";
import NewCustomerPage from "../../pages/new-customer-page";

describe("Verify Pin field", () => {

    beforeEach("Login as Menager and click on New Customer", () => {
        cy.visit("http://demo.guru99.com/V4/");
        LoginPage.typeUid("mngr358461");
        LoginPage.typePassword("$ifra0109");
        LoginPage.clickLogin();
        cy.url().should("include", "/manager/Managerhomepage.php");   
        ManagerPage.elements.newCustomer();
        cy.url().should("include", "/addcustomerpage.php");
    })

    it("Pin field cannot be blank", () => {
        NewCustomerPage.elements.pin().click();
        NewCustomerPage.typeMobileNumber("599566");
        NewCustomerPage.elements.message7().should("have.text", "PIN Code must not be blank");
    })

    it("Pin field cannot have special characters", () => {
        NewCustomerPage.typePin("##");
        NewCustomerPage.elements.message7().should("have.text", "Special characters are not allowed");
    })

    it("Pin field cannot have space as first character", () => {
        NewCustomerPage.typePin(" 152656");
        NewCustomerPage.elements.message7().should("have.text", "First character can not have space");
    })

    it("Pin field must have 6 digits", () => {
        NewCustomerPage.typePin("123");
        NewCustomerPage.elements.message7().should("have.text", "PIN Code must have 6 Digits");
    })
})