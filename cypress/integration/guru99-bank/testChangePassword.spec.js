/// <reference types="cypress" />

import LoginPage from "../../pages/login-page";
import ManagerPage from "../../pages/manager-page";
import ChangePasswordPage from "../../pages/change-password-page";

describe("Testing Change Password functionality ", () => {

    before("Login as Menager", () => {
        cy.visit("http://demo.guru99.com/V4/");
        LoginPage.typeUid("mngr358461");
        LoginPage.typePassword("$ifra0109");
        LoginPage.clickLogin();
        cy.url().should("include", "/manager/Managerhomepage.php");
    })

    it("Change Password", () => {
        ManagerPage.elements.changePassword();
        ChangePasswordPage.typeOldPassword("sUvUbeq");
        ChangePasswordPage.typeNewPassword("$ifra0109");
        ChangePasswordPage.typeConfirmPassword("$ifra0109");
        ChangePasswordPage.clickSubmith();
    })
})