const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
const LoginPage = require("../pageObjects/LoginPage");
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
