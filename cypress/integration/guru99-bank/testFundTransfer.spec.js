/// <reference types="cypress" />

import LoginPage from "../../pages/login-page";
import ManagerPage from "../../pages/manager-page";
import FundTransferPage from "../../pages/fund-transfer-page";

describe("Testing Fund Transfer functionality ", () => {

    before("Login as Menager", () => {
        cy.visit("http://demo.guru99.com/V4/");
        LoginPage.typeUid("mngr358461");
        LoginPage.typePassword("$ifra0109");
        LoginPage.clickLogin();
        cy.url().should("include", "/manager/Managerhomepage.php"); 
    })

    it("Fund Transfer between two accounts", () => {
        ManagerPage.elements.fundTransfer();
        cy.url().should("include", "/manager/FundTransInput.php");
        FundTransferPage.typePayersAccountNO("99800");
        FundTransferPage.typePayeesAccountNo("99804");
        FundTransferPage.typeAmount("10");
        FundTransferPage.typeDescription("transfer");
        FundTransferPage.clickSubmit();
        FundTransferPage.elements.message().should("have.text", "Fund Transfer DetailsContinue");
    })
})