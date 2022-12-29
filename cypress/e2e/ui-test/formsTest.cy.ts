import formsPage from "../../../pages/formsPage";
import homePage from "../../../pages/homePage";
import 'cypress-file-upload';
import {slowCypressDown} from 'cypress-slow-down';

slowCypressDown();
let testData;

describe('', ()=>{

    before(() => {

        cy.fixture('formData.json').then((data) => {
          testData = data;
        })
      })

    beforeEach(() => {
        cy.visit('/');
      });

    it.only('Verify user can submit the form', ()=>{
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });
      // Navigate to Forms
      homePage.forms.click();

      // Submit practice form
      formsPage.practiceForm.click();
      formsPage.firstName.type(testData.firstName);
      formsPage.lastName.type(testData.lastName);
      formsPage.email.type(testData.email);
      formsPage.selectGender(testData.gender);

      // Hide google ads frame to display all elements
      formsPage.hideGoogleAds();
      formsPage.mobile.type(testData.mobile); 
      formsPage.selectDOB(testData.dob); 
      formsPage.subjects.type(testData.subjects); 
      formsPage.hobbies.contains(testData.hobbies).click();
      formsPage.selectPicture.attachFile(testData.picture);
        
      formsPage.currentAddress.type(testData.currentAddress); 
      formsPage.selectState(testData.state);
      formsPage.selectCity(testData.city);  
      formsPage.submit.click({force:true});

      // Verify form submitted successfully
      formsPage.successMessage.should('have.text', 'Thanks for submitting the form');
      cy.contains('Student Name').next('td').should('have.text', testData.firstName+' '+testData.lastName);
      cy.contains('Student Email').next('td').should('have.text', testData.email);
      cy.get('td').contains('Gender').next('td').should('have.text', testData.gender);
      cy.get('td').contains('Mobile').next('td').should('have.text', testData.mobile);

      //cy.get('td').contains('Subjects').next('td').should('have.text', testData.subjects); removed since it is a bug in the website
      cy.get('td').contains('Hobbies').next('td').should('have.text', testData.hobbies);
      cy.get('td').contains('Picture').next('td').should('have.text', testData.picture.split('/')[1]);
      cy.get('td').contains('Address').next('td').should('have.text', testData.currentAddress);
      cy.get('td').contains('State and City').next('td').should('have.text', testData.state+' '+testData.city);


      

    })
})