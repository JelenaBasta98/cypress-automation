/// <reference types="cypress" />

import LoginPage from "../../pages/login-page";
import ManagerPage from "../../pages/manager-page";
import CustomisedStatementPage from "../../pages/custonised-statement-page";

describe("Testing Customized Statement Form functionality ", () => {

    before("Login as Menager with new password", () => {
        cy.visit("http://demo.guru99.com/V4/");
        LoginPage.typeUid("mngr358461");
        LoginPage.typePassword("$ifra0109");
        LoginPage.clickLogin();
        cy.url().should("include", "/manager/Managerhomepage.php"); 
    })

    it("Customized Statement Form for Account No 99800", () => {
        ManagerPage.elements.customisedStatement();
        cy.url().should("include", "/manager/CustomisedStatementInput.php");
        CustomisedStatementPage.typeAccountNo("99800");
        CustomisedStatementPage.typeFromDate("2021-10-20");
        CustomisedStatementPage.typeToDate("2021-10-26");
        CustomisedStatementPage.typeMinimumTransactionValue("100");
        CustomisedStatementPage.typeNumberOfTransaction("10");
        CustomisedStatementPage.clickSubmit();
        CustomisedStatementPage.elements.message().should("have.text", "Transaction Details for Account No: 99800 from Date: 2021-10-20 to: 2021-10-26");
    })
})