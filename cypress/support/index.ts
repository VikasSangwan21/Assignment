export {}
declare global {
    namespace Cypress {
      interface Chainable {
        dragAndDrop(source, destination),
        authenticateToolsQA(username, password)
      }
    }
  }