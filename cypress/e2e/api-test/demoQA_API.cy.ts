import 'cypress-file-upload';

let endpoints = require ('../../fixtures/api_endPoints.json');
let testData = require ('../../fixtures/api_testData.json');
let userId = '';
let userName = '';

describe('', ()=>{
    
    // test if user is created successfully and response has required fields
    it('Creation of user account', ()=>{
        userName = 'test'+Date.now();
        cy.request({    
            method: 'POST',
            url : endpoints.createUser,
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
            userId = response.body.userID;

        });
    })

    // Negetive scenario password criteria 
    it('Creation of user account with invalid password', ()=>{
        let userName = 'test'+Date.now();
        cy.request({
            method: 'POST',
            url : endpoints.createUser,
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
            expect(response.body).has.property('message', testData.passwordReqMsg);

        });
    })

    it('Add a list of books', ()=>{
        cy.authenticateToolsQA(userName, 'tesT@123').then((token) =>{
            cy.request({
                method: 'POST',
                url : endpoints.updateBooks,
                headers : {
                    'accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer '+token
                },
                body :{
                    "userId": userId,
                    "collectionOfIsbns": [
                      {
                        "isbn": testData.isbn
                      }
                    ]
                  }
            }).then((response) =>{
                expect(response.isOkStatusCode);
                expect(response.body).has.property('books');
    
            }); 
        })
        
        
    })

    // repeat adding same list to verify negetive scenario
    it('Add a list of books which already exist', ()=>{
        cy.authenticateToolsQA(userName, 'tesT@123').then((token) =>{
            cy.request({
                method: 'POST',
                url : endpoints.updateBooks,
                failOnStatusCode: false,
                headers : {
                    'accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer '+token
                },
                body :{
                    "userId": userId,
                    "collectionOfIsbns": [
                      {
                        "isbn": testData.isbn
                      }
                    ]
                  }
            }).then((response) =>{
                expect(response.status).eq(400);
                expect(response.body).has.property('message', testData.bookExistsMsg);
    
            }); 
        })
        
        
    })

})