const { Before, After, BeforeAll, AfterAll } = require("@badeball/cypress-cucumber-preprocessor");
const LoginPage = require("../pageObjects/LoginPage");
const LogoutPage = require("../pageObjects/LogoutPage");

let userdata;

Before(() => {
    cy.fixture("orangehrm").then((data) => {
        userdata = data;
    });
});

Before({ tags: "@smoke" }, () => {
    cy.visit('/web/index.php/auth/login');
    LoginPage.setUserName(userdata.username);
    LoginPage.setPassword(userdata.password);
    LoginPage.clickSubmit();
});

After({ tags: "@smoke" }, () => {
    LogoutPage.clickUserDropdown();
    LogoutPage.clickLogout();
});


