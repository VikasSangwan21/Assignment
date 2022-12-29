class FormsPage{

    // Webtable
    practiceFormLink = 'Practice Form';

    // Add New Record
    firstNameTextBox = '#firstName';
    lastNameTextBox = '#lastName';
    emailTextBox = '#userEmail';
    mobileTextBox = '#userNumber';
    dobTextBox = '#dateOfBirthInput';
    subjectsTextBox = '#subjectsContainer';
    submitButton = '#submit';
    hobbiesCheckBox = '.custom-checkbox';
    selectPicuteButton = '#uploadPicture';
    currentAddresstextBox = '#currentAddress';
    monthDropDown = '.react-datepicker__month-select';
    yearDropDown = '.react-datepicker__year-select';
    monthDays = '.react-datepicker__day:not(.react-datepicker__day--outside-month)';
    state = '#state > div > div.css-1wy0on6 > div > svg';
    city = '#city';
    googleAdFrame = '#adplus-anchor';
    submissionSuccessMsg = '#example-modal-sizes-title-lg';

    // Broken Links-Images
    brokenLinksImageLink = '#item-6';
    brokenImageImg = 'div> img:nth-child(6)';

    get practiceForm(){
        return cy.contains(this.practiceFormLink);
    }

    get currentAddress(){
        return cy.get(this.currentAddresstextBox);
    }

    get firstName(){
        return cy.get(this.firstNameTextBox);
    }

    get selectPicture(){
        return cy.get(this.selectPicuteButton);
    }

    get hobbies(){
        return cy.get(this.hobbiesCheckBox);
    }

    get lastName(){
        return cy.get(this.lastNameTextBox);
    }

    get email(){
        return cy.get(this.emailTextBox);
    }

    get mobile(){
        return cy.get(this.mobileTextBox);
    }

    get dob(){
        return cy.get(this.dobTextBox);
    }

    get subjects(){
        return cy.get(this.subjectsTextBox);
    }

    get submit(){
        return cy.get(this.submitButton);
    }

    get brokenImage(){
        return cy.get(this.brokenImageImg);
    }

    get successMessage(){
        return cy.get(this.submissionSuccessMsg);
    }

    selectGender(gender : string){
        cy.get("div.custom-radio>input[value='"+gender+"']").click({force:true});
    }

    selectDOB(dob : string){
        cy.get(this.dobTextBox).click();
        let year = dob.split(" ")[2];
        let month = dob.split(" ")[1];
        let day = dob.split(" ")[0];
        cy.get(this.monthDropDown).select(month);
        cy.get(this.yearDropDown).select(year).wait(500);
        cy.get(this.monthDays).contains(day).click();

    }

    selectState(state: string){
        cy.get(this.state).click();
        cy.contains(state).click();
    }

    selectCity(city: string){
        cy.get(this.city).click();
        cy.contains(city).click();
    }


    hideGoogleAds(){
        cy.get(this.googleAdFrame).invoke('attr', 'style', 'display: none')
        .should('have.attr', 'style', 'display: none');
        cy.wait(500);
    }
}

const formsPage = new FormsPage();
export default formsPage;