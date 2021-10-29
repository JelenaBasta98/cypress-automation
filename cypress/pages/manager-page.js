class ManagerPage {
    elements = {
        newCustomer: () => cy.contains("New Customer").click(),
        editCustomer: () => cy.contains("Edit Customer").click(),
        deleteCustomer: () => cy.contains("Delete Customer").click(),
        newAccount: () => cy.contains("New Account").click(),
        editAccount: () => cy.contains("Edit Account").click(),
        deleteAccount: () => cy.contains("Delete Account").click(),
        deposit: () => cy.contains("Deposit").click(),
        withdrawal: () => cy.contains("Withdrawal").click(),
        fundTransfer: () => cy.contains("Fund Transfer").click(),
        changePassword: () => cy.contains("Change Password").click(),
        balanceEnquiry: () => cy.contains("Balance Enquiry").click(),
        miniStatement: () => cy.contains("Mini Statement").click(),
        customisedStatement: () => cy.contains("Customised Statement").click(),
        logout: () => cy.contains("Log out").click()
    };
}

module.exports = new ManagerPage();