class EditAccountPage {
    elements = {
        accountNo: () =>  cy.get('input[name="accountno"]'),
        submit: () => cy.get('input[name="AccSubmit"]'),
        message: () => cy.get('.heading3')
    };

    typeAccountNo(value) {
        this.elements.accountNo().type(value);
    }

    clickSubmit() {
        this.elements.submit().click();
    }
}

module.exports = new EditAccountPage();