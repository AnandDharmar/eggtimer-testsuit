/**
 *This function executes before each scenario and it loads the home page
 */

const url = "https://e.ggtimer.com/";
beforeEach(() => {
  cy.visit(url);
  cy.log("Home page is displayed");
});
