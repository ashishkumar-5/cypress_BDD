class AddEmployeePage{

   firstName= 'input[name="firstName"]'
   middleName="input[placeholder='Middle Name']"
   lastName= "input[placeholder='Last Name']"
   employeeId= "//div[@class='oxd-grid-2 orangehrm-full-width-grid']//div[2]//input"
   saveBtn= "//div[@class='oxd-form-actions']//button[2]"
   cancelBtn= "//div[@class='oxd-form-actions']//button[1]"
   toastMessage= "//*[@class='oxd-text oxd-text--p oxd-text--toast-message oxd-toast-content-text']"

  setFirstName(firstName) {
    cy.get(this.firstName).type(firstName);
  }

  setMiddleName(middleName) {
    cy.get(this.middleName).type(middleName);
  }

  setLastName(lastName) {
    cy.get(this.lastName).type(lastName);
  }

  setEmployeeId(employeeId) {
    if (employeeId) {
      cy.xpath(this.employeeId).clear().type(employeeId);
    } else {
      cy.log("Employee ID is generated automatically");
    }
  }

  clickSaveBtn() {
    cy.xpath(this.saveBtn).click();
  }

  clickCancelBtn() {
    cy.xpath(this.cancelBtn).click();
  }

  verifySuccessToastMessage(expectedMsg) {
    cy.xpath(this.toastMessage)
      .should('be.visible')
      .and('contain.text', expectedMsg);
  }
}

export default AddEmployeePage