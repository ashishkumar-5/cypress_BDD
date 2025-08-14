// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

///<reference types="cypress-xpath"/>

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false prevents Cypress from failing the test
  return false;
});

import LoginPage from "../pageObjects/LoginPage"
import LogoutPage from "../pageObjects/LogoutPage"

Cypress.Commands.add('setupApp', () => {
  cy.fixture('orangehrm').then((data) => {
    cy.visit('/web/index.php/auth/login')
    const ln = new LoginPage();
    ln.setUserName(data.username);
    ln.setPassword(data.password);
    ln.clickSubmit();
  });
})



Cypress.Commands.add('teardownApp', () => {
  const lo = new LogoutPage();
  lo.clickLogout();
})
