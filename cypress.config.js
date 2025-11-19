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

// const crypto = require("crypto");

// module.exports = {
//   e2e: {
//     setupNodeEvents(on, config) {
//       // PKCE Code Generator
//       on("task", {
//         generatePKCECodes() {
//           const code_verifier = crypto.randomBytes(32).toString("base64url");
//           const code_challenge = crypto
//             .createHash("sha256")
//             .update(code_verifier)
//             .digest("base64url");

//           return { code_verifier, code_challenge };
//         }
//       });

//       return config;
//     },
//   },
// };
