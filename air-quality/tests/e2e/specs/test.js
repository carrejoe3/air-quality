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

  it("5 <p> tags are present within a div with an id of mainContent", () => {
    cy.get('div[id="mainContent"]').children('p').should('have.length', 5)
  });

  it("A div with an id of CityDropdown exists", () => {
    cy.get('div[id="CityDropdown')
  });

  it("A select element exists within a div with an id of CityDropdown", () => {
    cy.get('div[id="CityDropdown').find("select")
  });

  it("2 <p> tags exists within a div with an id of CityDropdown", () => {
    cy.get('div[id="CityDropdown').children('p').should('have.length', 2)
  });
})
