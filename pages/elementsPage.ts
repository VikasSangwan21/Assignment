class ElementsPage{

    webTableslLink = '#item-3';
    addNewRecordButton = '#addNewRecordButton';
    recordRowElements = '[class="rt-tr -even"] , [class="rt-tr -odd"]';

    // Add New Record
    firstNameTextBox = '#firstName';
    lastNameTextBox = '#lastName';
    emailTextBox = '#userEmail';
    ageTextBox = '#age';
    salaryTextBox = '#salary';
    departmentTextBox = '#department';
    submitButton = '#submit';

    get webTables(){
        return cy.get(this.webTableslLink);
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
}

const elementsPage = new ElementsPage();
export default elementsPage;