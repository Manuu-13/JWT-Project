import { locator } from "../pageobject/Locators";
import { loginmethod } from "../pageobject/login";
import { faker } from '@faker-js/faker';

describe("login salesforce org", ()=>{
  
    beforeEach(() => {
        loginmethod.loginWithJwt(); 
        cy.url().should("include", "lightning"); 
    });
    // beforeEach(() => {
    //     loginmethod.loginWithApi(); 
    //     cy.url().should("include", "lightning"); 
    // });
    // it("create account", () => {
    //     const accountName = faker.company.name();
    //     const phone = faker.phone.number('9#########');
    // cy.contains('span', 'More', { includeShadowDom: true }).first().click({ force: true });
    // cy.contains('a', 'Accounts', { includeShadowDom: true }).click({ force: true });
    // cy.xpath(locator.newbtn).should('be.visible').click({ force: true });
    // cy.xpath(locator.Accname).should('be.visible').type(accountName);
    // cy.xpath(locator.Accphone).should('be.visible').type(phone);
 
    // cy.xpath(locator.save).should('be.visible').click({ force: true });

    // });

//      it("create and convert leads", () => {
//         const lastName = faker.person.lastName();
//         const company = faker.company.name();
//         const phone = faker.phone.number('9#########');
//         const email = faker.internet.email();
//         //cy.xpath("//a[@href='/lightning/o/Lead/home' and @title='Leads']").click();
//         cy.contains('span', 'More', { includeShadowDom: true }).first().click({ force: true });
//   cy.contains('a', 'Leads', { includeShadowDom: true }).click({ force: true });
//        cy.contains('button', 'New', { includeShadowDom: true }).should('be.visible').click({ force: true });
//         cy.xpath(locator.lastname).type(lastName, { force: true });
//         cy.xpath(locator.company).type(company, { force: true });
//         cy.xpath(locator.phone).type(phone, { force: true });
       
//         cy.xpath(locator.email).type(email, { force: true });
//         cy.xpath(locator.save).should('be.visible').click({ force: true });
//         cy.xpath(locator.converted)
//   .should('be.visible')
//   .click({ force: true });
// cy.xpath(locator.selectconverted)
//   .should('be.visible')
//   .click({ force: true });
//   cy.xpath(locator.convert)
//   .should('be.visible')
//   .click({ force: true });

//     });


it('Create Lead to Convert , Verify Opportunity Account', () => {
    
  const lastName = faker.person.lastName();
  const company = faker.company.name();
  const phone = faker.phone.number('9#########');
  const email = faker.internet.email();
cy.contains('span', 'More', { includeShadowDom: true }).first().click({ force: true });
  cy.contains('a', 'Leads', { includeShadowDom: true }).click({ force: true });
cy.wait(2000);
   cy.xpath("//a[@title='New' and @role='button']//div[normalize-space()='New']")
  .should('be.visible')
  .click({ force: true });
   
    cy.xpath(locator.lastname).type(lastName, { force: true });
    cy.xpath(locator.company).type(company, { force: true });
    cy.xpath(locator.phone).type(phone, { force: true });
    cy.xpath(locator.email).type(email, { force: true });
    cy.xpath(locator.save1).should('be.visible').click({ force: true });
    cy.wait(3000);
    cy.xpath(locator.converted1).should('be.visible').click({ force: true });
    cy.xpath(locator.selectconverted).should('be.visible').click({ force: true });
    cy.xpath(locator.convert).should('be.visible').click({ force: true });
     cy.wait(2000);
    cy.get("div[class*='bodyConvertedItem']").should('be.visible');
   
  //   cy.get('div.bodyConvertedItem')             
  // .filter(':visible')                        
  // .first()                                   
  // .find(locator.account)  
  // .invoke('attr', 'title')                  
  // .then((accountName) => {
  //   cy.log("Account Name:", accountName);   
  //   cy.wrap(accountName).as('accountTitle'); 
  // });
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