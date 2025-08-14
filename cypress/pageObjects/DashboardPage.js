class DashboardPage {

    headertext = ".oxd-topbar-header-breadcrumb > .oxd-text";
    btnpimmenu = "//ul[@class='oxd-main-menu']/li[2]";

    verifyHeaderText(headerText) {
        cy.get(this.headertext).should('have.text',headerText );
    }

    clickPimMenu() {
        cy.xpath(this.btnpimmenu).click();

    }


}

export default DashboardPage;