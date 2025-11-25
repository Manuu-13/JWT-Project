class Locators {
    username="//input[@id='username']";
    password="//input[@id='password']";
    login="//input[@id='Login']";
    Accname="//input[@name='Name']";
    convertedStatus="//span[text()='Select Converted Status']/parent::button";
    convertbtn="//button[normalize-space()='Convert']";
    company="//input[@name='Company']";
    converted="//a[@data-tab-name='converted']";
    selectconverted="//button[.//span[text()='Select Converted Status']]";
    convert="//button[normalize-space(text())='Convert']"
    opportunity="//h3[text()='Opportunity']/ancestor::div[contains(@class,'containerConvertedItem')]//div[@title='Account Name']/following-sibling::div//a[@data-refid='recordId']";
    account="//h3[text()='Account']/ancestor::div[contains(@class,'containerConvertedItem')]//a[contains(@href,'/lightning/r/001')]";
    errorbox="//div[@data-name='BirthDate__c' and contains(text(),'Please enter a valid Birthdate')]";
    birthday="//input[@name='BirthDate__c']";
    convertedItems="div[class*='bodyConvertedItem']";
    //--------------------------------------------
    conSearchbtn="//button[contains(.,'Search')]";
    conSearch="//input[@type='search' and @placeholder='Search...']";
    //------------------------------------------
    accTab="//a[@href='/lightning/o/Account/home' and @title='Accounts']//span[normalize-space()='Accounts']";
    accSearch="//input[@placeholder='Search this list...' and contains(@class,'slds-input')]";
    dropDown="//button[.//span[contains(text(),'Show more actions')]]";
    accDelete="//a[@role='menuitem' and .//span[normalize-space()='Delete']]";
    clear="//button[@data-element-id='searchClear']";
    notFound="//h3[normalize-space()='Nothing to see here']";
    
    //------------------common Locators---------------------------
     //newbtn="//a[@role='button' and @title='New']//div[normalize-space()='New']";
     newbtn="//a[.='New' or @title='New']";
     save="//button[@name='SaveEdit' and normalize-space()='Save']";
     website="//input[@name='Website']";
     phone="//input[@name='Phone']";
     email="//input[@name='Email' and @type='text' and @inputmode='email']";
     lastname="//input[@name='lastName']";
     firstname="//input[@name='firstName']";
     Details="//a[normalize-space()='Details']";
     phoneOnDetails="//span[text()='Phone']/ancestor::div[contains(@class,'slds-form-element')]//a";
     websiteOnDetails="//span[text()='Website']/ancestor::div[contains(@class,'slds-form-element')]//a";
     EditPhone="//button[@title='Edit Phone']";
     delete="//span[normalize-space()='Delete' and contains(@class,'bBody')]";
     //-----------------------------------------------------------

}
export const locator = new Locators();