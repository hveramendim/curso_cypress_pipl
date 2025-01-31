const { defineConfig } = require("cypress");
const path = require('path');
const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin;

module.exports = defineConfig({
  e2e: {
    setupNodeEvents: async (on, config) => {
      // Configurar el preprocesador para Cucumber
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });

      // Agregar eventos y preprocesador
      on('file:preprocessor', bundler);
      await addCucumberPreprocessorPlugin(on, config);

      // Registro opcional de eventos adicionales
      on('before:browser:launch', (browser = {}, launchOptions) => {
        console.log(`Launching browser: ${browser.name}`);
      });

      return config;
    },
    baseUrl: 'http://localhost:3000', // Cambia esta URL si es necesario
    specPattern: '**/*.feature',
    supportFile: path.resolve(__dirname, 'cypress/support/e2e.js'),
    video: true,         // Graba videos de las pruebas (puede deshabilitarse)
    retries: {
      runMode: 2,        // Reintenta pruebas fallidas en ejecución normal
      openMode: 1,       // Reintenta pruebas fallidas en modo abierto (GUI)
    },
  },
  projectId: 'uvpmbq',
});
