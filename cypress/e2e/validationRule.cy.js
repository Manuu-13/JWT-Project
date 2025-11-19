import { locator } from "../pageobject/Locators";
import { loginmethod } from "../pageobject/login";
import { faker } from '@faker-js/faker';

describe('validation rule', () => {


  beforeEach(() => {
    loginmethod.loginWithJwt(); 
    cy.url().should("include", "lightning"); 
  });

  it('verify past birthdate in account', () => {
        const accountName = faker.company.name();
        const phone = faker.phone.number('9#########');
        cy.contains('span', 'More', { includeShadowDom: true }).first().click({ force: true });
         
        cy.contains('a', 'Accounts', { includeShadowDom: true }).click({ force: true });
        cy.wait(3000);
  //      cy.xpath(locator.newbtn).should('be.visible').click({ force: true });
        cy.xpath("//a[@role='button']//div[normalize-space()='New']").click();
        cy.xpath(locator.Accname).should('be.visible').type(accountName);
        cy.xpath("//input[@name='BirthDate__c']")
        .should('be.visible')
        .clear()
        .type('17/11/1925{enter}');
        //cy.xpath(locator.Accphone).should('be.visible').type(phone);
 
        cy.xpath(locator.save).should('be.visible').click({ force: true });
       

// Assert using stable XPath
// cy.xpath("//div[@data-name='BirthDate__c' and contains(@class,'slds-form-element__help')]")
//   .should('be.visible')
//   .and('contain.text', 'Please enter a valid Birthdate');
cy.xpath("//div[@data-name='BirthDate__c' and contains(text(),'Please enter a valid Birthdate')]")
  .should('be.visible');
  });

  it('verify future birthdate in account', () => {
    const accountName = faker.company.name();
        const phone = faker.phone.number('9#########');
        cy.contains('span', 'More', { includeShadowDom: true }).first().click({ force: true });
       
        cy.contains('a', 'Accounts', { includeShadowDom: true }).click({ force: true });
        cy.wait(3000);
        cy.xpath(locator.newbtn).should('be.visible').click({ force: true });
        cy.xpath(locator.Accname).should('be.visible').type(accountName);
        cy.xpath("//input[@name='BirthDate__c']")
        .should('be.visible')
        .clear()
        .type('20/11/2025{enter}');
        
 
        cy.xpath(locator.save).should('be.visible').click({ force: true });
         


cy.xpath("//div[@data-name='BirthDate__c' and contains(@class,'slds-form-element__help')]")
  .should('be.visible')
  .and('contain.text', 'Please enter a valid Birthdate');
  });

  it('valid birthdate within range', () => {
   const accountName = faker.company.name();
        const phone = faker.phone.number('9#########');
        const dateInput = '11/11/2025{enter}';
        cy.contains('span', 'More', { includeShadowDom: true }).first().click({ force: true });
        
        cy.contains('a', 'Accounts', { includeShadowDom: true }).click({ force: true });
        cy.wait(3000);
        cy.xpath(locator.newbtn).should('be.visible').click({ force: true });
        cy.xpath(locator.Accname).should('be.visible').type(accountName);
        cy.xpath(locator.birthday)
        .should('be.visible')
        .clear()
        .type(dateInput);
        //cy.xpath(locator.Accphone).should('be.visible').type(phone);
 
        cy.xpath(locator.save).should('be.visible').click({ force: true });
         //cy.wait(3000);

// Assert using stable XPath
cy.xpath(locator.errorbox)
  .should('not.exist')
  });

  

});