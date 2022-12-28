class HomePage{

    elementsCard = 'div:nth-child(1) > div > div.avatar.mx-auto.white';

    get elements(){
        return cy.get(this.elementsCard);
    }
}

const homePage = new HomePage();
export default homePage;