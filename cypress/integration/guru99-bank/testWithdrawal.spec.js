/// <reference types="cypress" />

import LoginPage from "../../pages/login-page";
import ManagerPage from "../../pages/manager-page";
import WithdrawalPage from "../../pages/withdrawal-page";

describe("Testing Withdrawal functionality ", () => {

    before("Login as Menager", () => {
        cy.visit("http://demo.guru99.com/V4/");
        LoginPage.typeUid("mngr358461");
        LoginPage.typePassword("$ifra0109");
        LoginPage.clickLogin();
        cy.url().should("include", "/manager/Managerhomepage.php"); 
    })

    it("Withdraw money from the bank", () => {
        ManagerPage.elements.withdrawal();
        cy.url().should("include", "/manager/WithdrawalInput.php");
        WithdrawalPage.typeAccountNo("99800");
        WithdrawalPage.typeAmount("10000");
        WithdrawalPage.typeDescription("withdraw");
        WithdrawalPage.clickSubmit();
        WithdrawalPage.elements.message().should("have.text", "Transaction details of Withdrawal for Account 99800");
    })
})