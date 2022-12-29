class HomePage{

    elementsCard = 'div:nth-child(1) > div > div.avatar.mx-auto.white';
    formsCard = 'div:nth-child(2) > div > div.avatar.mx-auto.white';
    widgetsCard = 'div:nth-child(4) > div > div.avatar.mx-auto.white';
    interactionsCard = 'div:nth-child(5) > div > div.avatar.mx-auto.white';

    get elements(){
        return cy.get(this.elementsCard);
    }

    get forms(){
        return cy.get(this.formsCard);
    }

    get widgets(){
        return cy.get(this.widgetsCard);
    }

    get interactions(){
        return cy.get(this.interactionsCard);
    }
}

const homePage = new HomePage();
export default homePage;