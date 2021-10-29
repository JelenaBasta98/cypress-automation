/// <reference types="cypress" />

import LoginPage from "../../pages/login-page";
import ManagerPage from "../../pages/manager-page";
import NewAccountPage from "../../pages/new-account-page";

describe("Testing New Account functionality ", () => {

    before("Login as Menager", () => {
        cy.visit("http://demo.guru99.com/V4/");
        LoginPage.typeUid("mngr358461");
        LoginPage.typePassword("$ifra0109");
        LoginPage.clickLogin();
        cy.url().should("include", "/manager/Managerhomepage.php");
    })

    it("Create New Account", () => {
        ManagerPage.elements.newAccount();
        cy.url().should("include", "/manager/addAccount.php");
        NewAccountPage.typeCustomerID("79387");
        NewAccountPage.typeInitialDeposit("10000");
        NewAccountPage.clickSubmit();
        NewAccountPage.elements.message().should("have.text", "Account Generated Successfully!!!");
    })
})