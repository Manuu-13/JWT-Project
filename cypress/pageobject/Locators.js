class Locators {
    username="//input[@id='username']";
    password="//input[@id='password']";
    login="//input[@id='Login']";
    //click="//lightning-icon[@icon-name='utility:setup']";
    newbtn="//a[@title='New']//div[text()='New']";
    Accname="//input[@name='Name']";
    Accphone="//input[@name='Phone' and @type='text' and contains(@class, 'slds-input')]";
    save="//button[@name='SaveEdit']"
    converted="//a[@data-tab-name='converted' and .//span[text()='Converted']]";
    convertedStatus="//span[text()='Select Converted Status']/parent::button";
    convertbtn="//button[normalize-space()='Convert']";
    lastname="//input[@name='lastName']";
    company="//input[@name='Company']";
    phone="//input[@name='Phone']";
    email="//input[@name='Email']";
    save1="//button[@name='SaveEdit']"
    converted1="//a[@data-tab-name='converted']";
    selectconverted="//button[.//span[text()='Select Converted Status']]";
    convert="//button[normalize-space(text())='Convert']"
    opportunity="//h3[text()='Opportunity']/ancestor::div[contains(@class,'containerConvertedItem')]//div[@title='Account Name']/following-sibling::div//a[@data-refid='recordId']";
    account="//h3[text()='Account']/ancestor::div[contains(@class,'containerConvertedItem')]//a[contains(@href,'/lightning/r/001')]";
    errorbox="//div[@data-name='BirthDate__c' and contains(@class,'slds-form-element__help')]";
    birthday="//input[@name='BirthDate__c']";
    
}
export const locator = new Locators();