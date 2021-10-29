/// <reference types="cypress" />

import LoginPage from "../../pages/login-page";
import ManagerPage from "../../pages/manager-page";
import DeleteAccountPage from "../../pages/delete-account-page";

describe("Testing Delete Account functionality ", () => {

    before("Login as Menager", () => {
        cy.visit("http://demo.guru99.com/V4/");
        LoginPage.typeUid("mngr358461");
        LoginPage.typePassword("$ifra0109");
        LoginPage.clickLogin();
        cy.url().should("include", "/manager/Managerhomepage.php"); 
    })

    it("Delete Account", () => {
        ManagerPage.elements.deleteAccount();
        cy.url().should("include", "/manager/deleteAccountInput.php");
        DeleteAccountPage.typeAccountNo("90841");
        DeleteAccountPage.clickSubmit();
    })
})