export class logintoSalesforce {
  loginWithJwt() {
    cy.loginToSalesforceJWT(Cypress.env("SALESFORCE_USERNAME"));
  }
  loginWithApi()
  {
    cy.loginToSalesforceAPI();
  }
}

export const loginmethod = new logintoSalesforce();