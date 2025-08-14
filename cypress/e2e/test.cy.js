import DashboardPage from '../pageObjects/DashboardPage'
import PIMPage from '../pageObjects/PIMPage'
import AddEmployeePage from '../pageObjects/AddEmployeePage'

describe('OrangeHRM Login Test', () => {
  let testData;

  before(() => {
      cy.fixture('orangehrm').then((data) => {
          testData = data;
      });
  });

  //    beforeEach(() => {
  //   cy.setupApp(testData.username, testData.password); 
  // });

  let dp;
  let pp;
  let ep;

  beforeEach(() => {
    cy.setupApp();
  });

  afterEach(() => {
    cy.teardownApp();
  });

  it('Log in successfully', () => {
    dp = new DashboardPage();
    dp.verifyHeaderText(testData.headertxtdb);
  });

  it('Add employee', () => {
    dp = new DashboardPage();
    pp = new PIMPage();
    ep = new AddEmployeePage();

    dp.verifyHeaderText(testData.headertxtdb);
    dp.clickPimMenu();
    pp.verifyHeaderText(testData.headerytxtpim);
    pp.clickAddEmployeeTab();
    ep.setFirstName(testData.firstname);
    ep.setMiddleName(testData.middlename);
    ep.setLastName(testData.lastname);
    ep.setEmployeeId(testData.employeeId);
    ep.clickSaveBtn();
    ep.verifySuccessToastMessage(testData.successmessage);
  });
});

