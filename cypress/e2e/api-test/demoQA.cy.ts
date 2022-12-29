import widgetsPage from "../../../pages/interactionsPage";
import homePage from "../../../pages/homePage";
import 'cypress-file-upload';

let createUserData = require ('../../fixtures/createAccount_Api.json');

describe('', ()=>{
    

    // test if user is created successfully and response has required fields
    it.only('Creation of user account', ()=>{
        let userName = 'test'+Date.now();
        cy.request({    
            method: 'POST',
            url : 'Account/v1/User',
            headers : {
                'accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body : {
                'userName': userName,  // Random user name to avoid user exists failure
                'password': 'tesT@123'
            }
        }).then((response) =>{
            expect(response.isOkStatusCode);
            expect(response.body).has.property('username',userName);
            expect(response.body).has.property('userID');
            expect(response.body).has.property('books');

        });
    })

    // Negetive scenario password criteria 
    it('Creation of user account', ()=>{
        let userName = 'test'+Date.now();
        cy.request({
            method: 'POST',
            url : 'Account/v1/User',
            failOnStatusCode: false,
            headers : {
                'accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body : {
                'userName': userName,  // Random user name to avoid user exists failure
                'password': 'invalidPassword'
            }
        }).then((response) =>{
            expect(response.status).eq(400);
            expect(response.body).has.property('message', "Passwords must have at least one non alphanumeric character, one digit ('0'-'9'), one uppercase ('A'-'Z'), one lowercase ('a'-'z'), one special character and Password must be eight characters or longer.");

        });
    })

    it.only('Add a list of books', ()=>{
        cy.authenticateToolsQA('userName1231234', 'tesT@123').then((token) =>{
            cy.request({
                method: 'POST',
                url : 'BookStore/v1/Books',
                headers : {
                    'accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer '+token
                },
                body :{
                    "userId": "f22bea4e-a5e2-472d-88f3-c8b86778f9a8",
                    "collectionOfIsbns": [
                      {
                        "isbn": "9781449325862"
                      }
                    ]
                  }
            }).then((response) =>{
                expect(response.isOkStatusCode);
                expect(response.body).has.property('username');
                expect(response.body).has.property('userID');
                expect(response.body).has.property('books');
    
            }); 
        })
        
        
    })

    it('Remove one of the added books', ()=>{

    })
})