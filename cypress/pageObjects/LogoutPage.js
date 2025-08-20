class LogoutPage {

    userDropdown = '.oxd-userdropdown-tab';
    logoutLink = 'a[href="/web/index.php/auth/logout"]';

    clickUserDropdown() {
        cy.get(this.userDropdown).click();
    }
    clickLogout() {
        cy.get(this.logoutLink).click();
    }

}

module.exports = new LogoutPage;