export class Navtab {

  openTab(tabName) {
    // cy.contains('span', 'More', { includeShadowDom: true }).first().click({ force: true });
    // cy.contains('a', tabName, { includeShadowDom: true }).should('be.visible').click({ force: true });
    cy.contains('span', 'More', { includeShadowDom: true }).should('be.visible').click({ force: true });
    cy.contains('a', tabName, { includeShadowDom: true }).click({ force: true });
  }
   clickRecordByName(fullName) {
    cy.xpath(`//span[@title='${fullName}']`).scrollIntoView().click({ force: true });
  }
  clickAccountByName(accountName) {
    cy.xpath(`//a[@title="${accountName}" and contains(@href,'/lightning/r/')]`).should('be.visible').click();
  }
  getRandomOlderThan100Years() {
    const today = new Date();
    const maxPastYear = today.getFullYear() - 101; 
    const pastYear = Math.floor(Math.random() * (maxPastYear - 1900 + 1)) + 1900; 
    const pastMonth = Math.floor(Math.random() * 12);
    const pastDay = Math.floor(Math.random() * 28) + 1;
    const date = new Date(pastYear, pastMonth, pastDay);
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const yyyy = date.getFullYear();

    return `${dd}/${mm}/${yyyy}`;
  }
   getRandomFutureDate() {
        const today = new Date();
        const futureYear = today.getFullYear() + Math.floor(Math.random() * 10) + 1; 
        const futureMonth = Math.floor(Math.random() * 12);
        const futureDay = Math.floor(Math.random() * 28) + 1; 
      
        const date = new Date(futureYear, futureMonth, futureDay);
        const dd = String(date.getDate()).padStart(2, '0');
        const mm = String(date.getMonth() + 1).padStart(2, '0');
        const yyyy = date.getFullYear();
      
        return `${dd}/${mm}/${yyyy}`;
    }
      getValidDate() {
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0'); 
        const yyyy = today.getFullYear();
      
        return `${dd}/${mm}/${yyyy}`;
    }


}
export const navtab=new Navtab();