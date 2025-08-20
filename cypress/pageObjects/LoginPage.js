class LoginPage {
    txtUserName = "input[placeholder='Username']";
    txtPassword = "input[placeholder='Password']";
    btnSubmit = "button[type='submit']";
    txtInavildCred = ".oxd-text.oxd-text--p.oxd-alert-content-text"

    visit() {
        cy.visit("/web/index.php/auth/login");
    }

    setUserName(username) {
        cy.get(this.txtUserName).type(username);
    }

    setPassword(password) {
        cy.get(this.txtPassword).type(password);
    }

    clickSubmit() {
        cy.get(this.btnSubmit).click();
    }

    verifyInvalidLoginMessage(expectedText) {
        cy.get(this.txtInavildCred).should('be.visible').and('contain.text', expectedText);
    }

}

module.exports = new LoginPage;