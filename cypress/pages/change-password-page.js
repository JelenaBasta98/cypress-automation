class ChangePasswordPage {
    elements = {
        oldPassword: () => cy.get('input[name="oldpassword"]'),
        newPassword: () => cy.get('input[name="newpassword"]'),
        confirmPassword: () => cy.get('input[name="confirmpassword"]'),
        submit: () => cy.get('input[value="Submit"]')
    };

    typeOldPassword(value) {
        this.elements.oldPassword().type(value);
    }

    typeNewPassword(value) {
        this.elements.newPassword().type(value);
    }

    typeConfirmPassword(value) {
        thid.elements.confirmPassword().type(value);
    }
    clickSubmith() {
        this.elements.submit().click();
    }
}

module.exports = new ChangePasswordPage();