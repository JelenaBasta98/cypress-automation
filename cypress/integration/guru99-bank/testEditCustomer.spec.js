/// <reference types="cypress" />

import LoginPage from "../../pages/login-page";
import ManagerPage from "../../pages/manager-page";
import EditCustomerPage from "../../pages/edit-customer-page";

describe("Testing Edit Customer Form", () => {

    before("Login as Menager", () => {
        cy.visit("http://demo.guru99.com/V4/");
        LoginPage.typeUid("mngr358461");
        LoginPage.typePassword("$ifra0109");
        LoginPage.clickLogin();
        cy.url().should("include", "/manager/Managerhomepage.php"); 
    })

    it("Edit Customer", () => {
        ManagerPage.elements.editCustomer();
        cy.url().should("include", "/manager/EditCustomer.php");
        EditCustomerPage.typeCustomerID("79387");
        EditCustomerPage.clickSubmit();
        cy.url().should("include", "/manager/editCustomerPage.php");
    })
})