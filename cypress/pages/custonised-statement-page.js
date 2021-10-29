class CustomisedStatementPage {
    elements = {
        accountNo: () => cy.get('input[name="accountno"]'),
        fromDate: () => cy.get('input[name="fdate"]'),
        toDate: () => cy.get('input[name="tdate"]'),
        minimumTransactionValue: () => cy.get('input[name="amountlowerlimit"]'),
        numberOfTransaction: () => cy.get('input[name="numtransaction"]'),
        submit: () => cy.get('input[name="AccSubmit"]'),
        message: () => cy.get('.heading3')
    }

    typeAccountNo(value) {
        this.elements.accountNo().type(value);
    }

    typeFromDate(value) {
        this.elements.fromDate().type(value);
    }

    typeToDate(value) {
        this.elements.toDate().type(value);
    }

    typeMinimumTransactionValue(value) {
        this.elements.minimumTransactionValue().type(value);
    }

    typeNumberOfTransaction(value) {
        this.elements.numberOfTransaction().type(value);
    }

    clickSubmit() {
        this.elements.submit().click();
    }
}

module.exports = new CustomisedStatementPage();