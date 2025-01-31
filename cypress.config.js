const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Aquí puedes agregar otros eventos si los necesitas
      on('before:browser:launch', (browser = {}, launchOptions) => {
        console.log(`Launching browser: ${browser.name}`);
      });

      return config;
    },
    baseUrl: 'http://localhost:3000',  // Ajusta esta URL según tu aplicación
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',  // Asegura que Cypress lea los archivos de prueba correctamente
    supportFile: 'cypress/support/e2e.js',
    video: true,         // Grabar videos (puedes desactivar esta opción)
    retries: {
      runMode: 2,        // Reintenta pruebas fallidas en ejecución normal
      openMode: 1,       // Reintenta pruebas fallidas en modo abierto (GUI)
    },
  },
  projectId: 'uvpmbq',
});
