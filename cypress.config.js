const { defineConfig } = require("cypress");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  screenshotOnRunFailure: true,
  e2e: {
    baseUrl: "https://opensource-demo.orangehrmlive.com",
    video: true,
    specPattern: "cypress/e2e/features/**/*.feature", // Run .feature files
    async setupNodeEvents(on, config) {
      // Mochawesome HTML plugin
      require('cypress-mochawesome-reporter/plugin')(on);

      // Allure writer plugin
      allureWriter(on, config);

      // ✅ Cucumber Preprocessor setup
      await addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      return config;
    },
  },

  env: {
    allure: true,
  },
});


