class LogoutPage {

    userDropdown = '.oxd-userdropdown-tab';
    logoutLink = 'a[href="/web/index.php/auth/logout"]';

    clickLogout() {
        cy.get(this.userDropdown).click();
        cy.get(this.logoutLink).click();
    }

}

export default LogoutPage;