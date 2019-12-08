// https://docs.cypress.io/api/introduction/api.html

describe('App starts and elements are present', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
  })

  it("Displays an image in element div with id heroImageContainer", () => {
    cy.get('div[id="heroImageContainer"]').find("img").should('be.visible');
  });

  it("H1 element is present within the div with an id of heroImageContainer", () => {
    cy.get('div[id="heroImageContainer"]').find("h1")
  });
})
