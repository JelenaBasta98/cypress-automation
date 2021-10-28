/// <reference types="cypress" />

import LoginPage from "../../pages/login-page";
import ManagerPage from "../../pages/manager-page";
import NewCustomerPage from "../../pages/new-customer-page";

describe("Verify Date of Birth field", () => {

    before("Login as Menager and click on New Customer", () => {
        cy.visit("http://demo.guru99.com/V4/");
        LoginPage.typeUid("mngr358461");
        LoginPage.typePassword("$ifra0109");
        LoginPage.clickLogin();
        cy.url().should("include", "/manager/Managerhomepage.php");   
        ManagerPage.elements.newCustomer();
        cy.url().should("include", "/addcustomerpage.php");
    })

    it("Date of Birth field cannot be blank", () => {
        NewCustomerPage.elements.dateOfBirth().click();
        NewCustomerPage.typeCity("Grad");
        NewCustomerPage.elements.message3().should("have.text", "Date Field must not be blank");
    })
})