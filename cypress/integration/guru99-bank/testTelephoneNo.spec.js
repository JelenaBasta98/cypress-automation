/// <reference types="cypress" />

import LoginPage from "../../pages/login-page";
import ManagerPage from "../../pages/manager-page";
import NewCustomerPage from "../../pages/new-customer-page";

describe("Verify Telephone Number field", () => {

    beforeEach("Login as Menager and click on New Customer", () => {
        cy.visit("http://demo.guru99.com/V4/");
        LoginPage.typeUid("mngr358461");
        LoginPage.typePassword("$ifra0109");
        LoginPage.clickLogin();
        cy.url().should("include", "/manager/Managerhomepage.php");   
        ManagerPage.elements.newCustomer();
        cy.url().should("include", "/addcustomerpage.php");
    })

    it("Telephone Number field cannot be blank", () => {
        NewCustomerPage.elements.mobileNumber().click();
        NewCustomerPage.typeEmail("imeeem@gmail.com");
        NewCustomerPage.elements.message8().should("have.text", "Mobile no must not be blank");
    })

    it("Telephone Number field cannot have special characters", () => {
        NewCustomerPage.typeMobileNumber("##");
        NewCustomerPage.elements.message8().should("have.text", "Special characters are not allowed");
    })

    it("Telephone Number field cannot have space as first character", () => {
        NewCustomerPage.typeMobileNumber(" 152656");
        NewCustomerPage.elements.message8().should("have.text", "First character can not have space");
    })

    it("Telephone Number field cannot have characters", () => {
        NewCustomerPage.typeMobileNumber("broj");
        NewCustomerPage.elements.message8().should("have.text", "Characters are not allowed");
    })
})