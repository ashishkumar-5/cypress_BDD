class PIMPage
{
    headertext = ".oxd-topbar-header-breadcrumb > .oxd-text";
    employee_list_tab = "//a[normalize-space()='Employee List']";
    add_employee_tab="//a[normalize-space()='Add Employee']";

    verifyHeaderText(headerText) {
        return cy.get(this.headertext);
    }

    clickEmployeeListTab() {
		cy.xpath(this.employee_list_tab).click();
	}

	clickAddEmployeeTab() {
		cy.xpath(this.add_employee_tab).click();
	}
	

}
module.exports = new PIMPage