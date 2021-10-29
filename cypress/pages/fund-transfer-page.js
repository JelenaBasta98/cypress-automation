class FundTransferPage {
    elements = {
        payersAccountNo: () => cy.get('input[name="payersaccount"]'),
        payeesAccountNo: () => cy.get('input[name="payeeaccount"]'),
        amount: () => cy.get('input[name="ammount"]'),
        description: () => cy.get('input[name="desc"]'),
        submit: () => cy.get('input[name="AccSubmit"]'),
        message: () => cy.get('.heading3')
    };

    typePayersAccountNO(value) {
        this.elements.payersAccountNo().type(value);
    }

    typePayeesAccountNo(value) {
        this.elements.payeesAccountNo().type(value);
    }

    typeAmount(value) {
        this.elements.amount().type(value);
    }

    typeDescription(value) {
        this.elements.description().type(value);
    }

    clickSubmit() {
        this.elements.submit().click();
    }
}

module.exports = new FundTransferPage();