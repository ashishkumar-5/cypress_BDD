// class LoginPage {

//     setUserName(username) {
//         cy.get('input[name="username"]').clear().type(username)
//     }

//     setPassword(password) {
//         cy.get('input[name="password"]').clear().type(password)
//     }

//     clickSubmit() {
//         cy.get('button[type="submit"]').click()
//     }

//     verifyLogin() {
//         cy.get('h6').should('contain.text', 'Dashboard')
//     }
// }

// export default LoginPage;



// class LoginPage {

//     constructor() {
//         this.usernameField = 'input[name="username"]'
//         this.passwordField = 'input[name="password"]'
//         this.submitButton = 'button[type="submit"]'
//         this.dashboardHeader = 'h6'
//     }

//     setUserName(username) {
//         cy.get(this.usernameField).type(username)
//     }

//     setPassword(password) {
//         cy.get(this.passwordField).type(password)
//     }

//     clickSubmit() {
//         cy.get(this.submitButton).click()
//     }

//     verifyLogin() {
//         cy.get(this.dashboardHeader).should('contain.text', 'Dashboard')
//     }
// }

// export default LoginPage



class LoginPage {
    txtUserName = "input[placeholder='Username']";
    txtPassword = "input[placeholder='Password']";
    btnSubmit = "button[type='submit']";
    lblmsg = ".oxd-topbar-header-breadcrumb > .oxd-text";
    userDropdown = '.oxd-userdropdown-tab';
    logoutLink = 'a[href="/web/index.php/auth/logout"]';

    setUserName(username) {
        cy.get(this.txtUserName).type(username);
    }

    setPassword(password) {
        cy.get(this.txtPassword).type(password);
    }

    clickSubmit() {
        cy.get(this.btnSubmit).click();
    }

    clickLogout() {
        cy.get(this.userDropdown).click();
        cy.get(this.logoutLink).click();
    }

}

export default LoginPage;