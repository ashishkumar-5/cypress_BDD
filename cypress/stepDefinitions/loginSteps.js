const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
const LoginPage = require("../pageObjects/LoginPage");
const PIMPage = require("../pageObjects/PIMPage");
const DashboardPage = require("../pageObjects/DashboardPage");


Given("I open OrangeHRM login page", () => {
  LoginPage.visit();
});

When("I login with username {string} and password {string}", (username, password) => {
  LoginPage.setUserName(username);
  LoginPage.setPassword(password);
});

Then("I click the login button", () => {
  LoginPage.clickSubmit();
})

Then("Verify the Invalid credentials text as {string}", (text) => {
  LoginPage.verifyInvalidLoginMessage(text);
});

Then("Verify the header text as {string}", (headertext) => {
  DashboardPage.verifyHeaderText(headertext);
});

Then("I should be on the {string} page", (title,dataTable) => {
  dataTable.hashes().forEach((row) => {
    if (title === "Dashboard") {
      DashboardPage.verifyHeaderText().should("have.text", row.title);
    }
    else if (title === "PIM") {
      PIMPage.verifyHeaderText().should("have.text", row.title);
    }

  });
});
