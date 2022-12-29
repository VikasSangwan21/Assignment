import widgetsPage from "../../../pages/widgetsPage";
import homePage from "../../../pages/homePage";
import 'cypress-file-upload';

let testData;

describe('', ()=>{

    beforeEach(() => {
        cy.visit('/');
      });

    it('Verify the progress bar', ()=>{
      // Navigate to Widgets
      homePage.widgets.click();

      // Verify Progress bar
      widgetsPage.progressBarLink.click();
      widgetsPage.startStopButton.click();
      cy.wait(10000);
      widgetsPage.progressBar.should('have.text', '100%');


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