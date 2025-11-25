import { locator } from "../pageobject/Locators";
import { loginmethod } from "../pageobject/login";
import { faker } from '@faker-js/faker';
import { navtab } from "../pageobject/Navtab";
let firstName = faker.person.firstName();
let lastName = faker.person.lastName();
let phone = faker.phone.number('9#########');
let email = faker.internet.email(firstName, lastName);
let accountName = faker.company.name();
let website = faker.internet.url();
let fullName = `${firstName} ${lastName}`;
describe ("contact creation ",()=>{
     beforeEach(() => {
        loginmethod.loginWithJwt(); 
        cy.url().should("include", "lightning"); 
    });
    it("create contact",()=>{
      
        navtab.openTab('Contacts')
        cy.wait(2000);
        cy.xpath(locator.newbtn).click({ force: true });
        cy.xpath(locator.firstname).type(firstName);
        cy.xpath(locator.lastname).type(lastName);
        cy.xpath(locator.phone).type(phone);
        cy.xpath(locator.email).type(email);
        cy.xpath(locator.save).click({ force: true });
        cy.xpath(locator.conSearchbtn).click();
        cy.xpath(locator.conSearch).should('be.visible').click().type(fullName);
        cy.wait(3000);
        navtab.clickRecordByName(fullName);
        cy.wait(3000);
        cy.xpath(locator.Details).click();
        cy.xpath(locator.phoneOnDetails).invoke('text').then((actualPhone) => {
        expect(actualPhone.trim()).to.eq(phone);
  });

        
  })
  //-------------------------Account Creation And Deletion---------------------------------------
  it("Account Deletion",()=>{
    navtab.openTab('Accounts')
    cy.wait(2000);
    cy.xpath(locator.newbtn).should('be.visible').click({ force: true });
    cy.wait(2000);
    cy.xpath(locator.Accname).should('be.visible').type(accountName);
    cy.xpath(locator.save).should('be.visible').click({ force: true });
    cy.xpath(locator.accTab).should('be.visible').click();
    cy.xpath(locator.accSearch).should('be.visible').and('not.be.disabled').type(accountName + '{enter}');
    navtab.clickAccountByName(accountName);
    cy.wait(2000);
    cy.xpath(locator.dropDown).should('be.visible').click({ force: true });
    cy.xpath(locator.accDelete).should('be.visible').click({ force: true });
    cy.xpath(locator.delete).should('be.visible').click({ force: true });
    cy.wait(3000);
    cy.xpath(locator.clear).should('be.visible').click({ force: true });
    cy.xpath(locator.accSearch).should('be.visible').and('not.be.disabled').type(accountName + '{enter}');
    cy.xpath(locator.notFound).should('be.visible');
  })
  //-------------------Account Updation----------------------
   it("Account Updation",()=>{
    navtab.openTab('Accounts')
    cy.wait(2000);
    cy.xpath(locator.newbtn).should('be.visible').click({ force: true });
    cy.wait(2000);
    cy.xpath(locator.Accname).should('be.visible').type(accountName);
    cy.xpath(locator.phone).clear().type(phone, { force: true });
    cy.xpath(locator.website).clear().type(website, { force: true });
    cy.xpath(locator.save).should('be.visible').click({ force: true });
    const phone1 = faker.phone.number('9#########');
    cy.xpath(locator.Details).should('be.visible').click({ force: true });
    cy.xpath(locator.EditPhone).should('be.visible').click({ force: true });
    cy.xpath(locator.phone).should('be.visible').clear().type(phone1);
    const updWeb = faker.internet.url();
    cy.xpath(locator.website).should('be.visible').clear().type(updWeb);  
    cy.xpath(locator.save).should('be.visible').click({ force: true });
    cy.xpath(locator.phoneOnDetails).invoke('text')
    .then((uiPhone) => {
    expect(uiPhone.trim()).to.not.equal(phone);
    });
    cy.xpath(locator.websiteOnDetails)
    .invoke('text')
    .then((uiWebsite) => {
    expect(uiWebsite.trim()).to.not.equal(website);
    });

  })

})

