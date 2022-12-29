// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
// Custom command to drag and drop an element
import '@4tw/cypress-drag-drop'

Cypress.Commands.add('authenticateToolsQA', (username , password) => { 
  cy.request({
    method: 'POST',
    url : 'https://demoqa.com/Account/v1/GenerateToken',
    failOnStatusCode: false,
    headers : {
        'accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body : {
        'userName': username,
        'password': password
    }
}).then((response) =>{
    return response.body.token;
});
});

Cypress.Commands.add('dragAndDrop', (source , destination) => { 

    const dataTransfer = new DataTransfer();
   
    source.trigger('dragstart', {
      dataTransfer
    });
 
    destination.trigger('drop', {
      dataTransfer
    });  
  });
