import { Given } from "cypress-cucumber-preprocessor/steps";
/**
 * This function verifies the home page is loaded by verifying the title and a text in the page
 */

Given(`Eggtimer page is loaded`, () => {
  cy.title().should("eq", "e.ggtimer - a simple countdown timer");
  cy.get(".EggTimer-start-welcome > :nth-child(1)").should(
    "contain",
    "E.ggTimer is a simple countdown timer."
  );
});

/**
 * This function waits till the user inputs and verifies time expired message
 */
Then(
  `Verify that Time Expired text message is displayed after the given time`,
  () => {
    cy.wait(25000).get("span").should("contain", "Time Expired!");
  }
);

/**
 * This function checks the countdown happens every second and the time decreases. It will assert for each second
 */
Then(
  /^Remaining time should decreases by one-sec from (\d+)$/,
  function (value) {
    const seconds = value + 2;
    const now = Date.now();
    cy.clock(now, ["setTimeout", "clearTimeout"]);
    /**
     * The total array value is 25+2 (which is 0 and -1 (Time Expired ))
     * we are decreasing the array by -1 as the time so its k-1
     * sorted by descending
     * Till 2 it will be displayed as 'seconds' and then its updated as 'second' which is handled
     */
    var genArr = Array.from({ length: seconds }, (v, k) => k - 1).sort(
      (a, b) => b - a
    );
    cy.wrap(genArr).each((index) => {
      if (index > 1) {
        cy.log(index)
          .tick(1000)
          .get("span")
          .should("have.text", index + " seconds ");
      } else if (index == 0 || index == 1) {
        cy.log(index)
          .tick(1000)
          .get("span")
          .should("have.text", index + " second ");
      } else {
        cy.log(index)
          .tick(1000)
          .get("span")
          .should("have.text", "Time Expired!");
      }
    });
    cy.clock().invoke("restore");
  }
);
