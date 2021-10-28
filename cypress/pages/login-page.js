class LoginPage {
    elements = {
        uid: () => cy.get('input[name="uid"]'),
        password: () => cy.get('input[name="password"]'),
        loginBtn: () => cy.get('input[name="btnLogin"]')
    };

    typeUid(value) {
        this.elements.uid().type(value);
    }

    typePassword(value) {
        this.elements.password().type(value);
    }

    clickLogin() {
        this.elements.loginBtn().click();
    }
}

module.exports = new LoginPage();