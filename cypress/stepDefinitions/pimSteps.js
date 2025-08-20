const { When, Then, And } = require("@badeball/cypress-cucumber-preprocessor");
const PIMPage = require("../pageObjects/PIMPage");
const DashboardPage = require("../pageObjects/DashboardPage");
const AddEmployeePage = require("../pageObjects/AddEmployeePage");

When("I navigate to the {string} page", (pageName) => {
    if (pageName === "PIM") {
        DashboardPage.clickPimMenu();
    }
});

When("I click on the {string} tab", (tabName) => {
    if (tabName === "Add Employee") {
        PIMPage.clickAddEmployeeTab();
    }
});

When("I enter employee details", (dataTable) => {
        dataTable.hashes().forEach((row) => {
    // const rows = dataTable.hashes();
    const randomId = Math.floor(Math.random() * 10000);
    // rows.forEach((row) => {
        const employeeId = row.EmployeeId + randomId
        AddEmployeePage.setFirstName(row.FirstName);
        AddEmployeePage.setMiddleName(row.MiddleName);
        AddEmployeePage.setLastName(row.LastName);
        AddEmployeePage.setEmployeeId(employeeId);
    });
});


When("I click on the Save button", () => {
    AddEmployeePage.clickSaveBtn();
});

Then("I should see the Successful toast message {string}", (expectedMessage) => {
    AddEmployeePage.verifySuccessToastMessage().then((actualMessage) => {
        expect(actualMessage).to.equal(expectedMessage)
    })
});
