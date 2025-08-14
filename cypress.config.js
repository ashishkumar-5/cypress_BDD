// const { defineConfig } = require("cypress");
// const allureWriter = require('@shelex/cypress-allure-plugin/writer');

// module.exports = defineConfig({
//   reporter: 'cypress-mochawesome-reporter', //for html reports
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//       video: true,
//       screenshotOnRunFailure=true;
//       require('cypress-mochawesome-reporter/plugin')(on); // for html eports
//       allureWriter(on, config);

//     },
//   },
// });


// const { defineConfig } = require("cypress");
// const allureWriter = require('@shelex/cypress-allure-plugin/writer');

// module.exports = defineConfig({
//   reporter: 'cypress-mochawesome-reporter', // optional if you also want Mochawesome
//   screenshotOnRunFailure: true,
//   e2e: {
//     setupNodeEvents(on, config) {
//       // Mochawesome HTML plugin (optional)
//       require('cypress-mochawesome-reporter/plugin')(on);

//       // Allure writer
//       allureWriter(on, config);

//       return config;
//     },
//   },
//   env: {
//     allure: true
//   }
// });


const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter', // keep if you also want HTML reports
  screenshotOnRunFailure: true,
  e2e: {
    baseUrl: 'https://opensource-demo.orangehrmlive.com',
    video: true,
    setupNodeEvents(on, config) {
      // Mochawesome HTML plugin
      require('cypress-mochawesome-reporter/plugin')(on);

      // Allure writer plugin
      allureWriter(on, config);

      return config;
    },
  },
  env: {
    allure: true
  }
});
