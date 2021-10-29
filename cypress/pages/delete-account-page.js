class DeleteAccountPage {
    elements = {
        accountNo: () => cy.get('input[name="accountno"]'),
        submit: () => cy.get('input[name="AccSubmit"]')
    }

    typeAccountNo(value) {
        this.elements.accountNo().type(value);
    }

    clickSubmit() {
        this.elements.submit().click();
    }
}

module.exports = new DeleteAccountPage();