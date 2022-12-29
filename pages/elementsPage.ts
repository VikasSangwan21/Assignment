class ElementsPage{

    // Webtable
    webTableslLink = '#item-3';
    addNewRecordButton = '#addNewRecordButton';
    recordRowElements = '[class="rt-tr -even"] , [class="rt-tr -odd"]';
    editSecondRowButton = '#edit-record-2';

    // Add New Record
    firstNameTextBox = '#firstName';
    lastNameTextBox = '#lastName';
    emailTextBox = '#userEmail';
    ageTextBox = '#age';
    salaryTextBox = '#salary';
    departmentTextBox = '#department';
    submitButton = '#submit';

    // Broken Links-Images
    brokenLinksImageLink = '#item-6';
    brokenImageImg = 'div> img:nth-child(6)';

    get webTables(){
        return cy.get(this.webTableslLink);
    }

    get brokenLinkImages(){
        return cy.get(this.brokenLinksImageLink);
    }

    get recordRows(){
        return cy.get(this.recordRowElements);
    }

    get addNewRecord(){
        return cy.get(this.addNewRecordButton);
    }

    get firstName(){
        return cy.get(this.firstNameTextBox);
    }

    get lastName(){
        return cy.get(this.lastNameTextBox);
    }

    get email(){
        return cy.get(this.emailTextBox);
    }

    get age(){
        return cy.get(this.ageTextBox);
    }

    get salary(){
        return cy.get(this.salaryTextBox);
    }

    get department(){
        return cy.get(this.departmentTextBox);
    }

    get submit(){
        return cy.get(this.submitButton);
    }

    get editSecondRow(){
        return cy.get(this.editSecondRowButton);
    }

    get brokenImage(){
        return cy.get(this.brokenImageImg);
    }
}

const elementsPage = new ElementsPage();
export default elementsPage;