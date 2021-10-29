/// <reference types="cypress" />

describe("Testing of EA app", () => {
    
    before("Login to Application", () => {

        cy.visit("http://eaapp.somee.com/");
        cy.fixture("eauser").as("user");

        cy.get("@user").then((user) => {

            cy.login(user.UserName, user.Password);
 
         })
    })
   
    it("Performing Benefit check", () => {

        cy.contains("Employee List").click();
        cy.get(".table").find("tr").contains("Prashanth").parent().contains("Benefits").click();


        cy.get(".table").find("tr").as("rows");

        cy.get("@rows").then(($row) => {
            cy.wrap($row).click({multiple:true});
        })
        cy.wrap({name:"Karthik"}).should("have.property","name").and("eq","Karthik");
    })
})