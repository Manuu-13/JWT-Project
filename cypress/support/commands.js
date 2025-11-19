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
//JWT login
Cypress.Commands.add('loginToSalesforceJWT', (username) => {
  const clientId = Cypress.env('SF_CLIENT_ID');
  cy.task('generateJWT', { username, clientId }).then((jwtToken) => {
    cy.request({
      method: 'POST',
      url: 'https://login.salesforce.com/services/oauth2/token',
      form: true,
      body: {
        grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
        assertion: jwtToken
      }
    }).then((response) => {
      expect(response.status).to.eq(200);

      const accessToken = response.body.access_token;
      const instanceUrl = response.body.instance_url;

      cy.setCookie('sid', accessToken, {
        domain: '.salesforce.com',
        secure: true,
        httpOnly: false,
      });

      cy.visit('https://myridius16-dev-ed.develop.lightning.force.com/lightning/page/home');
    });
  });
});
//login Through API
// Cypress.Commands.add("loginToSalesforceAPI", () => {
//   const authUrl = "https://login.salesforce.com/services/oauth2/authorize";

//   cy.task("generatePKCECodes").then(({ code_verifier, code_challenge }) => {
    
//     const params = new URLSearchParams({
//       response_type: "code",
//       client_id: Cypress.env("SF_CLIENT_ID"),    // External App Client ID
//       redirect_uri: Cypress.env("SF_REDIRECT_URI"), // Must match registered URI
//       code_challenge_method: "S256",
//       code_challenge,
//       scope: "openid api refresh_token", // Optional but recommended
//     });

//     // 1️⃣ Open Salesforce Login Page
//     cy.visit(`${authUrl}?${params.toString()}`);

//     // 2️⃣ Enter Login Credentials
//     cy.get('input#username').type(Cypress.env("SF_USERNAME"));
//     cy.get('input#password').type(Cypress.env("SF_PASSWORD"), { log: false });
//     cy.get('#Login').click();

//     // 3️⃣ Wait for redirect URL with code
//     cy.url().should("contain", "code=");

//     cy.url().then((url) => {
//       const auth_code = new URL(url).searchParams.get("code");

//       // 4️⃣ Exchange code for access token
//       cy.request({
//         method: "POST",
//         url: "https://login.salesforce.com/services/oauth2/token",
//         form: true,
//         body: {
//           grant_type: "authorization_code",
//           client_id: Cypress.env("SF_CLIENT_ID"),
//           redirect_uri: Cypress.env("SF_REDIRECT_URI"),
//           code: auth_code,
//           code_verifier,
//         },
//       }).then((response) => {
//         // 5️⃣ Set session token
//         const accessToken = response.body.access_token;

//         cy.setCookie("sid", accessToken, {
//           domain: ".develop.lightning.force.com",
//           secure: true,
//           httpOnly: false, // Allows Cypress to use session
//         });

//         // 6️⃣ Visit Salesforce home
//         cy.visit("https://myridius16-dev-ed.develop.lightning.force.com/lightning/page/home");
//       });
//     });
//   });
// });