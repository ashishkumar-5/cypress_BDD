class EmployeeListPage {
    txt_employee_id = "div.oxd-input-group input.oxd-input.oxd-input--active"
    search_btn = "button[type='submit']"
    employee_ids = "//div[@class='oxd-table-card']//div//div[2]//div"
    delete_employee_btn = (employeeId) => `//div[contains(text(),'${employeeId}')]/ancestor::div[@class='oxd-table-card']//button[2]//i`
    yes_delete_btn = "//button[normalize-space()='Yes, Delete']"
    no_cancel_btn = "//button[normalize-space()='No, Cancel']"
    successful_toast_message = ".oxd-text.oxd-text--p.oxd-text--toast-message.oxd-toast-content-text"
    no_records_found_txt = "//span[normalize-space()='No Records Found']"

    enterEmployeeId(employeeIdTxt) {
        cy.get(this.txt_employee_id).type(employeeIdTxt);
    }

    clickSearchBtn() {
        cy.get(this.search_btn).click();
        cy.wait(5000);
    }

    verifyEmployeeId(employeeId) {
        cy.xpath(this.employee_ids).then($ids => {
            const idList = [...$ids].map(el => el.innerText);

            if (idList.length > 0) {
                expect(idList).to.include(employeeId);
            } else {
                expect(idList).to.be.empty;
            }
        });
    }

    deleteEmployee(employeeId) {
        cy.xpath(this.delete_employee_btn(employeeId)).click();
    }

    deleteEmployeeAction(actionName) {
        switch (actionName.toLowerCase()) {
            case "yes,delete":
                cy.xpath(this.yes_delete_btn).click();
                break;
            case "no,cancel":
                cy.xpath(this.no_cancel_btn).click();
                break;
            default:
                cy.log(`Given ${actionName} is not found`);
                break;
        }
    }

    verifySuccessfullyDeletedToastMessage(expectedMsg) {
        cy.get(this.successful_toast_message).
        should('have.text', expectedMsg);
    }
    


}

export default EmployeeListPage