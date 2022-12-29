import widgetsPage from "../../../pages/interactionsPage";
import homePage from "../../../pages/homePage";


describe('', ()=>{


    beforeEach(() => {
        cy.visit('/');
      });

    it('Verify user can drag and drop', ()=>{
      // Navigate to Widgets
      homePage.interactions.click();

      // Verify drag and drop
      widgetsPage.droppableLink.click();
      const dataTransfer = new DataTransfer();
      widgetsPage.dragSource.drag('#droppable', {force:true});
      widgetsPage.dropDestination.should('have.class', 'ui-state-highlight');
    })
})