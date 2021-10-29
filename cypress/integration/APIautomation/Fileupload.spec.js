/// <reference types="Cypress"/>

context("Action", () => {

    beforeEach(() => {

        cy.visit("https://fineuploader.com/demos.html");
    })

    it("File upload demo", () => {

            cy.fixture("EAWeekly.png", "base64").then(fileContent => {

                   cy.get(".buttons > qq-upload-button-selector > input") 

            });

    })
})
