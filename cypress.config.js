const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsBuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
module.exports = defineConfig({
  video: true,
e2e: {
  env: {
    baseUrl: 'https://magento.softwaretestingboard.com/',
  },
async setupNodeEvents(on, config) {
const bundler = createBundler({
plugins: [createEsBuildPlugin(config)],
});
on('file:preprocessor', bundler);
await addCucumberPreprocessorPlugin(on, config);
return config;
},
specPattern: 'cypress/e2e/features/*.feature'
},
});
