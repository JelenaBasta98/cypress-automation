/// <reference types="cypress" />

import LoginPage from "../../pages/login-page";
import ManagerPage from "../../pages/manager-page";
import NewCustomerPage from "../../pages/new-customer-page";

describe("Verify E-mail field", () => {

    beforeEach("Login as Menager and click on New Customer", () => {
        cy.visit("http://demo.guru99.com/V4/");
        LoginPage.typeUid("mngr358461");
        LoginPage.typePassword("$ifra0109");
        LoginPage.clickLogin();
        cy.url().should("include", "/manager/Managerhomepage.php");   
        ManagerPage.elements.newCustomer();
        cy.url().should("include", "/addcustomerpage.php");
    })

    it("E-mail field cannot be blank", () => {
        NewCustomerPage.typeEmail('{enter}');
        NewCustomerPage.elements.message9().should("have.text", "Email-ID must not be blank");
    })

    it("E-mail field cannot have special characters", () => {
        NewCustomerPage.typeEmail("##");
        NewCustomerPage.elements.message9().should("have.text", "Email-ID is not valid");
    })

    it("E-mail field cannot have space as first character", () => {
        NewCustomerPage.typeEmail(" ime98@hmail.com");
        NewCustomerPage.elements.message9().should("have.text", "First character can not have space");
    })

    it("E-mail field must have @", () => {
        NewCustomerPage.typeEmail("nekoimegmail.com");
        NewCustomerPage.elements.message9().should("have.text", "Email-ID is not valid");
    })
})