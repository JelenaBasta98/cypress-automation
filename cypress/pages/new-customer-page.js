class NewCustomerPage {
    elements = {
        customerName: () => cy.get('input[name="name"]'),
        dateOfBirth: () => cy.get('input[name="dob"]'),
        address: () => cy.get('textarea[name="addr"]'),
        city: () => cy.get('input[name="city"]'),
        state: () => cy.get('input[name="state"]'),
        pin: () => cy.get('input[name="pinno"]'),
        mobileNumber: () => cy.get('input[name="telephoneno"]'),
        email: () => cy.get('input[name="emailid"]'),
        password: () => cy.get('input[name="password"]'),
        submit: () => cy.get('input[value="Submit"]'),
        message1: () => cy.get('.heading3'),
        message2: () => cy.get('label[id="message"]'),
        message3: () => cy.get('label[id="message24"]'),
        message4: () => cy.get('label[id="message3"]'),
        message5: () => cy.get('label[id="message4"]'),
        message6: () => cy.get('label[id="message5"]'),
        message7: () => cy.get('label[id="message6"]'),
        message8: () => cy.get('label[id="message7"]'),
        message9: () => cy.get('label[id="message9"]')
    };

    typeCustomerName(value) {
        this.elements.customerName().type(value);
    }

    typedateOfBirth(value) {
        this.elements.dateOfBirth().type(value);
    }

    typeAddress(value) {
        this.elements.address().type(value);
    }

    typeCity(value) {
        this.elements.city().type(value);
    }

    typeState(value) {
        this.elements.state().type(value);
    }
    typePin(value) {
        this.elements.pin().type(value);
    }

    typeMobileNumber(value) {
        this.elements.mobileNumber().type(value);
    }

    typeEmail(value) {
        this.elements.email().type(value);
    }

    typePassword(value) {
        this.elements.password().type(value);
    }

    clickSubmit() {
        this.elements.submit().click();
    }
}

module.exports = new NewCustomerPage();