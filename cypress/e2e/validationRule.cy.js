import { locator } from "../pageobject/Locators";
import { loginmethod } from "../pageobject/login";
import { faker } from '@faker-js/faker';
import { navtab } from "../pageobject/Navtab";
const accountName = faker.company.name();
const phone = faker.phone.number('9#########');
describe('validation rule', () => {

  beforeEach(() => {
    loginmethod.loginWithJwt(); 
    cy.url().should("include", "lightning"); 
  });

  it('verify past birthdate in account', () => {

        navtab.openTab('Accounts')
        cy.wait(3000);
        cy.xpath(locator.newbtn).should('be.visible').click({ force: true });
        cy.xpath(locator.Accname).should('be.visible').type(accountName);
        cy.xpath(locator.phone).should('be.visible').type(phone);
        cy.xpath(locator.birthday).should('be.visible').clear().type(navtab.getRandomOlderThan100Years());
        cy.xpath(locator.save).should('be.visible').click({ force: true });
        cy.xpath(locator.errorbox).should('be.visible');
  });

  it('verify future birthdate in account', () => {
        navtab.openTab('Accounts')
        cy.wait(3000);
        cy.xpath(locator.newbtn).should('be.visible').click({ force: true });
        cy.xpath(locator.Accname).should('be.visible').type(accountName);
        cy.xpath(locator.phone).should('be.visible').type(phone);
        cy.xpath(locator.birthday).should('be.visible').clear().type(navtab.getRandomFutureDate());
        cy.xpath(locator.save).should('be.visible').click({ force: true });
        cy.xpath(locator.errorbox).should('be.visible');
        
  });

  it('valid birthdate within range', () => {
   
        navtab.openTab('Accounts');
        cy.wait(3000);
        cy.xpath(locator.newbtn).should('be.visible').click({ force: true });
        cy.xpath(locator.Accname).should('be.visible').type(accountName);
        cy.xpath(locator.phone).should('be.visible').type(phone);
        cy.xpath(locator.birthday)
        .should('be.visible').clear().type(navtab.getValidDate());
        cy.xpath(locator.save).should('be.visible').click({ force: true });
        cy.xpath(locator.errorbox).should('not.exist')
  });

  

});