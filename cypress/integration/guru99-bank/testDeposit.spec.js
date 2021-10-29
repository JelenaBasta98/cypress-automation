/// <reference types="cypress" />

import LoginPage from "../../pages/login-page";
import ManagerPage from "../../pages/manager-page";
import DepositPage from "../../pages/deposit-page";

describe("Testing Deposit functionality ", () => {

    before("Login as Menager", () => {
        cy.visit("http://demo.guru99.com/V4/");
        LoginPage.typeUid("mngr358461");
        LoginPage.typePassword("$ifra0109");
        LoginPage.clickLogin();
        cy.url().should("include", "/manager/Managerhomepage.php"); 
    })

    it("Give a Deposit to the bank", () => {
        ManagerPage.elements.deposit();
        cy.url().should("include", "/manager/DepositInput.php");
        DepositPage.typeAccountNo("99800");
        DepositPage.typeAmount("50000");
        DepositPage.typeDescription("deposit");
        DepositPage.clickSubmit();
        DepositPage.elements.message().should("have.text", "Transaction details of Deposit for Account 99800");
    })
})