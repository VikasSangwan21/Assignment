import widgetsPage from "../../../pages/widgetsPage";
import homePage from "../../../pages/homePage";
import 'cypress-file-upload';

let testData;

describe('', ()=>{
    
    before(() => {
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });
    })

    beforeEach(() => {
        cy.visit('/');
      });

    it('Verify the progress bar', ()=>{
      // Navigate to Widgets
      homePage.widgets.click();

      // Verify Progress bar
      widgetsPage.progressBarLink.click();
      widgetsPage.startStopButton.click();
      widgetsPage.progressBar.should('have.text', '100%', {setTimeout:10000});
      //verify progress bar color
      widgetsPage.progressBar.should('have.css', 'background-color', 'rgb(233, 236, 239)')

    })

    it('Verify tooltip', ()=>{
      // Navigate to Widgets
      homePage.widgets.click();

      // Verify Tooltip
      widgetsPage.toolTipLink.click();
      widgetsPage.tootlTipButton.trigger('mouseover').invoke('show');
      //widgetsPage.tootlTipButton.focused().realHover();
      widgetsPage.toolTip.should('have.text', 'You hovered over the Button');

    })
})