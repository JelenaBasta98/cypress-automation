/// <reference types="cypress" />

import LoginPage from "../../pages/login-page";

describe("Testing Login functionality ", () => {

    it("Login as Menager with new password", () => {

        cy.visit("http://demo.guru99.com/V4/");
        LoginPage.typeUid("mngr358461");
        LoginPage.typePassword("$ifra0109");
        LoginPage.clickLogin();
        cy.url().should("include", "/manager/Managerhomepage.php"); 
    })
})