import elementsPage from "../../../pages/elementsPage";
import homePage from "../../../pages/homePage";

let testData;

describe('', ()=>{

    before(() => {

        cy.fixture('registrationData.json').then((data) => {
          testData = data;
        })
      })

    beforeEach(() => {
        cy.visit('/');
      });
    
    it('Verify user can enter new data into the table', ()=>{
        // Navigate to Elements
        homePage.elements.click();

        // Add new record in webtable
        elementsPage.webTables.click();
        elementsPage.addNewRecord.click();
        elementsPage.firstName.type(testData.firstName);
        elementsPage.lastName.type(testData.lastName);
        elementsPage.email.type(testData.email);
        elementsPage.age.type(testData.age);
        elementsPage.salary.type(testData.salary);
        elementsPage.department.type(testData.department);
        elementsPage.submit.click();

        // Verify new row is added
        elementsPage.recordRows.should('have.length', 4);

        // Verify all information in new record
        elementsPage.recordRows.last().find('div').each((element, index) => {
            switch(index){
              case 0:{
                expect(element.text()).eq(testData.firstName);
                break;
              }
              case 1:{
                expect(element.text()).eq(testData.lastName);
                break;
              }
              case 2:{
                expect(element.text()).eq(testData.age);
                break;
              }
              case 3:{
                expect(element.text()).eq(testData.email);
                break;
              }
              case 4:{
                expect(element.text()).eq(testData.salary);
                break;
              }
              case 5:{
                expect(element.text()).eq(testData.department);
                break;
              }
            }
        });


    })

    it('Verify user can edit the row in a table', ()=>{
      // Navigate to Elements
      homePage.elements.click();

      // Edit row in webtable
      elementsPage.webTables.click();
      elementsPage.editSecondRow.click();

      // update details
      elementsPage.firstName
      .clear()
      .type(testData.updatedFirstName);

      elementsPage.lastName
      .clear()
      .type(testData.updatedLastName);

      elementsPage.submit.click();

      // Verify updated details
      elementsPage.recordRows.eq(1).find('div').eq(0).should('have.text', testData.updatedFirstName);
      elementsPage.recordRows.eq(1).find('div').eq(1).should('have.text', testData.updatedLastName);

    })

    it('Verify broken image', ()=>{
      // Navigate to Elements
      homePage.elements.click();

      // Verify broken Image
      elementsPage.brokenLinkImages.click();
      elementsPage.brokenImage.should('be.visible').and(($img) => {
        // "naturalWidth" and "naturalHeight" are set when the image loads
        expect($img[0].naturalWidth).to.be.equal(0);
        expect($img[0].naturalHeight).to.be.equal(0)
      })

    })

})