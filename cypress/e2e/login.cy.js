import { locator } from "../pageobject/Locators";
import { loginmethod } from "../pageobject/login";
import { navtab } from "../pageobject/Navtab";
import { faker } from '@faker-js/faker';
let lastName = faker.person.lastName();
let company = faker.company.name();
let phone = faker.phone.number('9#########');
let email = faker.internet.email();

describe("login salesforce org", ()=>{
  
    beforeEach(() => {
        loginmethod.loginWithJwt(); 
        cy.url().should("include", "lightning"); 
    });
    
//  beforeEach(() => {
//     const username = Cypress.env("SALESFORCE_USERNAME");
//     const password = Cypress.env("SF_PASSWORD");
//     cy.navigateAndLoginSalesforce(username,password);
//     cy.url().should("include", "lightning"); 
//   });
  
    it("create account", () => {   
      navtab.openTab('Accounts');
      cy.wait(2000);
      cy.xpath(locator.newbtn).should('be.visible').click({ force: true });
      cy.xpath(locator.Accname).should('be.visible').type(company);
      cy.xpath(locator.phone).should('be.visible').type(phone);
      cy.xpath(locator.save).should('be.visible').click({ force: true });

    });

     it("create and convert leads", () => {
      navtab.openTab('Leads');
      cy.wait(2000);
      cy.xpath(locator.newbtn).should('be.visible').click({ force: true });
      cy.xpath(locator.lastname).type(lastName, { force: true });
      cy.xpath(locator.company).type(company, { force: true });
      cy.xpath(locator.phone).type(phone, { force: true });
      cy.xpath(locator.email).type(email, { force: true });
      cy.xpath(locator.save).should('be.visible').click({ force: true });
      cy.wait(3000);
      cy.xpath(locator.converted).should('be.visible').click({ force: true });
      cy.xpath(locator.selectconverted).should('be.visible').click({ force: true });
      cy.xpath(locator.convert).should('be.visible').click({ force: true });

    });


    it('Create Lead to Convert , Verify Opportunity Account', () => {
    navtab.openTab('Leads');
    cy.wait(2000);
    cy.xpath(locator.newbtn).should('be.visible').click({ force: true });
    cy.xpath(locator.lastname).type(lastName, { force: true });
    cy.xpath(locator.company).type(company, { force: true });
    cy.xpath(locator.phone).type(phone, { force: true });
    cy.xpath(locator.email).type(email, { force: true });
    cy.xpath(locator.save).should('be.visible').click();
    cy.wait(3000);
    cy.xpath(locator.converted).should('be.visible').click({ force: true });
    cy.xpath(locator.selectconverted).should('be.visible').click({ force: true });
    cy.xpath(locator.convert).should('be.visible').click({ force: true });
    cy.wait(2000);
    cy.get(locator.convertedItems).should('be.visible');

    cy.xpath(locator.account)
    .invoke('text')
    .then((accountName) => {
    cy.log('Opportunity Account Name:', accountName.trim());
    cy.wrap(accountName).as('accountTitle');
  });

    cy.xpath(locator.opportunity)
    .invoke('text')
    .then((accountName) => {
    cy.log('Opportunity Account Name:', accountName.trim());
    cy.wrap(accountName).as('recordTitle');
  });

  cy.get('@recordTitle').then((recordTitle) => {
  cy.get('@accountTitle').then((accountTitle) => {
    //expect(recordTitle).to.include(accountTitle); 
    expect(recordTitle).to.equal(accountTitle);
  });
});




});
    
    
    

})