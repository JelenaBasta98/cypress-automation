class NewAccountPage {
    elements = {
        customerID: () => cy.get('input[name="cusid"]'),
        initialDeposit: () => cy.get('input[name="inideposit"]'),
        submit: () => cy.get('input[name="button2"]'),
        message: () => cy.get('.heading3')
    };

    typeCustomerID(value) {
        this.elements.customerID().type(value);
    }

    typeInitialDeposit(value) {
        this.elements.initialDeposit().type(value);
    }

    clickSubmit() {
        this.elements.submit().click();
    }
}

module.exports = new NewAccountPage();