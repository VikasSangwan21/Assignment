class WidgetsPage{

    // Webtable
    progressBarLinkId = 'Progress Bar';
    toolTipLinkId = 'Tool Tips';

    // Progress Bar
    startStopBtn = '#startStopButton';
    progressBarImg = '#progressBar';
    toolTipBtn = '#toolTipButton';
    toolTipId = '.tooltip-inner';

    get progressBarLink(){
        return cy.contains(this.progressBarLinkId);
    }

    get toolTipLink(){
        return cy.contains(this.toolTipLinkId);
    }

    get startStopButton(){
        return cy.get(this.startStopBtn);
    }

    get progressBar(){
        return cy.get(this.progressBarImg);
    }

    get tootlTipButton(){
        return cy.get(this.toolTipBtn);
    }

    get toolTip(){
        return cy.get(this.toolTipId);  
    }
}

const widgetsPage = new WidgetsPage();
export default widgetsPage;