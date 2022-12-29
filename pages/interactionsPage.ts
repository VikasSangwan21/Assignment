class InteractionssPage{

    // Webtable
    droppableLinkId = 'Droppable';

    // Progress Bar
    firstNameTextBox = '#firstName';
    lastNameTextBox = '#lastName';
    dragSourceElement = '#draggable';
    dropDestinationElement = '#droppable';

    get droppableLink(){
        return cy.contains(this.droppableLinkId);
    }

    get firstName(){
        return cy.get(this.firstNameTextBox);
    }

    get lastName(){
        return cy.get(this.lastNameTextBox);
    }

    get dragSource(){
        return cy.get(this.dragSourceElement);
    }

    get dropDestination(){
        return cy.get(this.dropDestinationElement);
    }

}

const interactionsPage = new InteractionssPage();
export default interactionsPage;