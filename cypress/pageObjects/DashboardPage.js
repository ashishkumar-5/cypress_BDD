class DashboardPage {

    headertext = ".oxd-topbar-header-breadcrumb > .oxd-text";
    btnpimmenu = "//ul[@class='oxd-main-menu']/li[2]";

    verifyHeaderText(expectedText) {
       return cy.get(this.headertext);
    }

    clickPimMenu() {
        cy.xpath(this.btnpimmenu).click();

    }

}

module.exports= new DashboardPage;