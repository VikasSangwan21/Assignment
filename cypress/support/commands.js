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
 Cypress.Commands.add('dragAndDrop', (source , destination) => { 

    const dataTransfer = new DataTransfer();
   
    source.trigger('dragstart', {
      dataTransfer
    });
 
    destination.trigger('drop', {
      dataTransfer
    });  
  });
