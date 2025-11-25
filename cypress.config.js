// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//   },
// });
const { defineConfig } = require("cypress"); 
const { generateJwtToken } = require('./cypress/utils/jwtHelper'); 
 
module.exports = defineConfig({ 
  e2e: { 
    experimentalSessionAndOrigin: true, 
    experimentalModifyObstructiveThirdPartyCode: true, 
    pageLoadTimeout: 120000, 
    setupNodeEvents(on, config) { 
      on('task', { 
        generateJWT({ username, clientId }) { 
          const token = generateJwtToken({ username, clientId }); 
          return token; 
        } 
      }); 
      return config;
    } 
  } 
}); 

// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   e2e: {
//     baseUrl: "https://myridius16-dev-ed.develop.lightning.force.com/",
//     testIsolation: false, 
//     testIsolation: false,        // Keeps session active
//     chromeWebSecurity: false,    // Prevent Salesforce iframe/security issues
//     experimentalSessionAndOrigin: true,   //  Prevents page reset between tests
//   },
// });

