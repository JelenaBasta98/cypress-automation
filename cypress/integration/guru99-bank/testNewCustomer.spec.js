/// <reference types="cypress" />

import LoginPage from "../../pages/login-page";
import ManagerPage from "../../pages/manager-page";
import NewCustomerPage from "../../pages/new-customer-page";

describe("Testing Creating New Customer functionality", () => {

    before("Login as Menager", () => {
        cy.visit("http://demo.guru99.com/V4/");
        LoginPage.typeUid("mngr358461");
        LoginPage.typePassword("$ifra0109");
        LoginPage.clickLogin();
        cy.url().should("include", "/manager/Managerhomepage.php"); 
    })

    it("Create New Customer", () => {
        ManagerPage.elements.newCustomer();
        cy.url().should("include", "/manager/addcustomerpage.php");
        NewCustomerPage.typeCustomerName("Nekoihejje");
        NewCustomerPage.typedateOfBirth("2021-10-25");
        NewCustomerPage.typeAddress("Moja Adressa 2");
        NewCustomerPage.typeCity("Grad");
        NewCustomerPage.typeState("Drzava");
        NewCustomerPage.typePin("123466");
        NewCustomerPage.typeMobileNumber("556599");
        NewCustomerPage.typeEmail("neki59jje86@gmail.com");
        NewCustomerPage.typePassword("sifra123");
        NewCustomerPage.clickSubmit();
        NewCustomerPage.elements.message1().should("have.text", "Customer Registered Successfully!!!");         
        //.contains("Customer Registered Successfully!!!");
    })
})