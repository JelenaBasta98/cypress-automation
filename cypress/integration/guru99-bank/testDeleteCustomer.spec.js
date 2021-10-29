/// <reference types="cypress" />

import LoginPage from "../../pages/login-page";
import ManagerPage from "../../pages/manager-page";
import DeleteCustomerPage from "../../pages/delete-customer-page";

describe("Testing Delete Customer ", () => {

    before("Login as Menager", () => {
        cy.visit("http://demo.guru99.com/V4/");
        LoginPage.typeUid("mngr358461");
        LoginPage.typePassword("$ifra0109");
        LoginPage.clickLogin();
        cy.url().should("include", "/manager/Managerhomepage.php"); 
    })
    
    it("Delete Customer", () => {
        ManagerPage.elements.deleteCustomer();
        cy.url().should("include", "/manager/DeleteCustomerInput.php");
        DeleteCustomerPage.typeCustomerID("79387");
        DeleteCustomerPage.clickSubmit();
    })
})