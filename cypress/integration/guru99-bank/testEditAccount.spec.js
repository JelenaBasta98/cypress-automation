/// <reference types="cypress" />

import LoginPage from "../../pages/login-page";
import ManagerPage from "../../pages/manager-page";
import EditAccountPage from "../../pages/edit-account-page";

describe("Testing Edit Account functionality ", () => {

    before("Login as Menager", () => {
        cy.visit("http://demo.guru99.com/V4/");
        LoginPage.typeUid("mngr358461");
        LoginPage.typePassword("$ifra0109");
        LoginPage.clickLogin();
        cy.url().should("include", "/manager/Managerhomepage.php"); 
    })

    it("Edit Account", () => {
        ManagerPage.elements.editAccount();
        cy.url().should("include", "/manager/editAccount.php");
        EditAccountPage.typeAccountNo("99800");
        EditAccountPage.clickSubmit();
        EditAccountPage.elements.message().should("have.text", "Edit Account Entry Form");
    })
})