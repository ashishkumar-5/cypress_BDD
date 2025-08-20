class DashboardPage {

    headertext = ".oxd-topbar-header-breadcrumb > .oxd-text";
    btnpimmenu = "//ul[@class='oxd-main-menu']/li[2]";

    verifyHeaderText(expectedText) {
        cy.get(this.headertext).should('have.text',expectedText);
    }

    clickPimMenu() {
        cy.xpath(this.btnpimmenu).click();

    }

}

module.exports= new DashboardPage;