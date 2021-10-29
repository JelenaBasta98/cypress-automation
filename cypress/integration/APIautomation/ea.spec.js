/// <reference types="cypress" />

describe("Testing of EA app", () => {
    it("Login", () => {
        
        cy.visit("http://eaapp.somee.com");
        cy.contains("Login").click();
        cy.url().should("include", "/Account/Login");

        cy.get("#UserName").type("admin");
        cy.get("#Password").type("password");
        cy.get(".btn").click();

        cy.contains("Employee List").click();
        cy.get(".table").find("tr").contains("Prashanth").parent().contains("Benefits").click();


        cy.get(".table").find("tr").as("rows");

        cy.get("@rows").then(($row) => {
            cy.wrap($row).click({multiple:true});
        })

        cy.wrap({name:"Karthik"}).should("have.property","name").and("eq","Karthik");

        cy.get(".table").find("tr > td").then(($td) => {
            cy.wrap($td).contains("John").invoke("wrap").parent().contains("Benefits").click();
        })


        //it.only("Testing EA Site for assertion", () => {
        
            //cy.visit("http://www.executeautomation.com/site");
                
            //cy.get("[aria-label="jump to slide 2"]",{timeout:60000}).should(($x) => {

                //expect($x).to.not.be.null;
        //})    
        //})


    })
})