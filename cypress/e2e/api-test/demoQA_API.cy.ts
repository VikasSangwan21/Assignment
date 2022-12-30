import 'cypress-file-upload';

let endpoints = require ('../../fixtures/api_endPoints.json');
let testData = require ('../../fixtures/api_testData.json');

describe('', ()=>{
    
    // test to create user account and add list of books to it
    it('Create user account and add list of books', ()=>{

        // dynamic username to avoid duplicates
        let userName = 'test'+Date.now();
        cy.request({    
            method: 'POST',
            url : endpoints.createUser,
            headers : {
                'accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body : {
                'userName': userName, 
                'password': testData.userPassword
            }
        }).then((response) =>{
            // verify the results of user creation
            expect(response.isOkStatusCode);
            expect(response.body).has.property('username',userName);
            expect(response.body).has.property('userID');
            expect(response.body).has.property('books');

        }).then((response) =>{

            // Authenticate with user created above
            cy.authenticateToolsQA(userName, testData.userPassword).then((token) =>{

                // add books to the new user
                cy.request({
                    method: 'POST',
                    url : endpoints.updateBooks,
                    headers : {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer '+token
                    },
                    body :{
                        "userId": response.body.userID,
                        "collectionOfIsbns": [
                          {
                            "isbn": testData.isbn
                          }
                        ]
                      }
                }).then((response) =>{
                    // verify results of adding books to user list
                    expect(response.isOkStatusCode);
                    expect(response.body).has.property('books');
        
                }); 


                // Negetive scenario try to add the same books again
                cy.request({
                    method: 'POST',
                    url : endpoints.updateBooks,
                    failOnStatusCode: false,
                    headers : {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer '+token
                    },
                    body :{
                        "userId": response.body.userID,
                        "collectionOfIsbns": [
                          {
                            "isbn": testData.isbn
                          }
                        ]
                      }
                }).then((response) =>{
                    // verify failed results for negetive scenario
                    expect(response.status).eq(400);
                    expect(response.body).has.property('message', testData.bookExistsMsg);
        
                }); 

                // verify deleting books
                cy.request({
                    method: 'DELETE',
                    url : endpoints.updateBook,
                    failOnStatusCode: false,
                    headers : {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer '+token
                    },
                    body :{
                        "isbn": testData.isbn,
                        "userId": response.body.userID
                      }
                }).then((response) =>{
                    // verify delete request successful
                    expect(response.status).eq(204);
        
                }); 
            })   
        
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

    // Negetive scenario delete request
    it('Verify unauthorised delete request', ()=>{
        cy.authenticateToolsQA("InvalidUser", "InvalidPassword").then((token) =>{
            cy.request({
                method: 'DELETE',
                url : endpoints.updateBook,
                failOnStatusCode: false,
                headers : {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer '+token
                },
                body :{
                    "isbn": testData.isbn,
                    "userId": "userID"
                }
            }).then((response) =>{
                // verify delete request successful
                expect(response.status).eq(401);

            }); 
        });
    })

})