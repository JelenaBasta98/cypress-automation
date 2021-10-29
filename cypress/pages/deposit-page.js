class DepositPage {
    elements = {
        accountNo: () => cy.get('input[name="accountno"]'),
        amount: () => cy.get('input[name="ammount"]'),
        description: () => cy.get('input[name="desc"]'),
        submit: () => cy.get('input[name="AccSubmit"]'),
        message: () => cy.get('.heading3')
    };

    typeAccountNo(value) {
        this.elements.accountNo().type(value);
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

module.exports = new DepositPage();