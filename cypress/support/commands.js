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
// import testData from "../fixtures/salesforceTestData.json";
// Cypress.Commands.add("navigateAndLoginSalesforce", (username, password) => {
//   const requestBody = testData.requestBodyForSalesforceLogin;
//   requestBody.un=username;
//   requestBody.pw=password;
//   cy.session("SalesforceLogin", () => {
//     cy.request({

//       body: requestBody,
//       form: true,
//       method: "POST",
//       url: "https://login.salesforce.com/",
//     }).then((response) => {
//   cy.wrap(response.body.access_token).as("accessToken");
//   cy.wrap(response.body.instance_url).as("instanceUrl");
// });
//   });

//   cy.visit('https://myridius16-dev-ed.develop.lightning.force.com/lightning/page/home');
// });




// Cypress.Commands.add("navigateAndLoginSalesforce", (username, password) => {
//   const requestBody = testData.requestBodyForSalesforceLogin;
//   requestBody.un=username;
//   requestBody.pw=password;
//   cy.session("SalesforceLogin", () => {
//     cy.request({

//       body: requestBody,
//       form: true,
//       method: "POST",
//       url: "https://login.salesforce.com/",
//     });
//   });
// //https://myridius16-dev-ed.develop.lightning.force.com/lightning/page/home
//   cy.visit('https://myridius16-dev-ed.develop.lightning.force.com/lightning/page/home');
// });