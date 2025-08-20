// import DashboardPage from '../pageObjects/DashboardPage'
// import PIMPage from '../pageObjects/PIMPage'
// import AddEmployeePage from '../pageObjects/AddEmployeePage'
// import DataStore from '../dataStore/DataStore'
// import EmployeeListPage from '../pageObjects/EmployeeListPage'

// describe('OrangeHRM Login Test', () => {
//   let testData;

//   before(() => {
//     cy.fixture('orangehrm').then((data) => {
//       testData = data;
//     });
//   });

//   //    beforeEach(() => {
//   //   cy.setupApp(testData.username, testData.password); 
//   // });

//   let dp;
//   let pp;
//   let ep;
//   let elp;

//   beforeEach(() => {
//     cy.setupApp();
//   });

//   afterEach(() => {
//     cy.teardownApp();
//   });

//   it('Log in successfully', () => {
//     dp = new DashboardPage();
//     dp.verifyHeaderText(testData.headertxtdb);
//   });

//   it('Add employee', () => {
//     dp = new DashboardPage();
//     pp = new PIMPage();
//     ep = new AddEmployeePage();

//     dp.verifyHeaderText(testData.headertxtdb);
//     dp.clickPimMenu();
//     pp.verifyHeaderText(testData.headerytxtpim);
//     pp.clickAddEmployeeTab();
//     ep.setFirstName(testData.firstname);
//     ep.setMiddleName(testData.middlename);
//     ep.setLastName(testData.lastname);
//     var employeeId = testData.employeeId;
//     if (employeeId !== "") {
//       ep.setEmployeeId(employeeId);
//     }
//     DataStore.store("storedEmployeeID", employeeId, true);
//     var a = DataStore.get("storedEmployeeID");
//     cy.log(`storedEmpId:${a}`)
//     ep.clickSaveBtn();
//     ep.verifySuccessToastMessage(testData.successmessage);
//   })


//   it('search employee', () => {
//     dp = new DashboardPage();
//     pp = new PIMPage();
//     elp = new EmployeeListPage();

//     dp.verifyHeaderText(testData.headertxtdb);
//     dp.clickPimMenu();
//     pp.verifyHeaderText(testData.headerytxtpim);
//     pp.clickEmployeeListTab();
//     var employeeId = DataStore.get("storedEmployeeID");
//     elp.enterEmployeeId(employeeId);
//     elp.clickSearchBtn();
//     elp.verifyEmployeeId(employeeId);
//   })

//   it('delete employee', () => {
//     dp = new DashboardPage();
//     pp = new PIMPage();
//     elp = new EmployeeListPage();

//     dp.verifyHeaderText(testData.headertxtdb);
//     dp.clickPimMenu();
//     pp.verifyHeaderText(testData.headerytxtpim);
//     pp.clickEmployeeListTab();
//     var employeeId = DataStore.get("storedEmployeeID");
//     elp.enterEmployeeId(employeeId);
//     elp.clickSearchBtn();
//     elp.verifyEmployeeId(employeeId);
//     elp.deleteEmployee(employeeId);
//     elp.deleteEmployeeAction(testData.actionname);
//     elp.verifySuccessfullyDeletedToastMessage(testData.deletedsuccessmessage)
//   })
// });

