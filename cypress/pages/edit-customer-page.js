class EditCustomerPage {
    elements = {
        customerID: () => cy.get('input[name="cusid"]'),
        submit: () => cy.get('input[name="AccSubmit"]'),
    }

    typeCustomerID(value) {
        this.elements.customerID().type(value);
    }

    clickSubmit() {
        this.elements.submit().click();
    }
}

module.exports = new EditCustomerPage();