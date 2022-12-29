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
      // Navigate to Forms
      homePage.forms.click();

      // Submit practice form
      formsPage.practiceForm.click();
      formsPage.firstName.type(testData.firstName);
      formsPage.lastName.type(testData.lastName);
      formsPage.email.type(testData.email);
      formsPage.selectGender(testData.gender);
      formsPage.mobile.type(testData.mobile); 
      formsPage.selectDOB(testData.dob); 
      formsPage.subjects.type(testData.subjects); 
      formsPage.hobbies.contains(testData.hobbies).click();
      formsPage.selectPicture.attachFile(testData.picture);
      formsPage.currentAddress.type(testData.currentAddress); 
      formsPage.selectState(testData.state);
      formsPage.selectCity(testData.city);  
      formsPage.submit.click();

      // Verify form submitted successfully
      

    })
})