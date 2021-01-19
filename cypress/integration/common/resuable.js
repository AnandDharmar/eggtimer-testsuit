/**
 * This file helps to group the common functionalities used in the application
 */

import { When } from "cypress-cucumber-preprocessor/steps";

/**
 * Accepts the user inputs and timer commences
 */
When(`User enters {string} and click on Start`, (value) => {
  cy.get("#EggTimer-start-time-input-text").type(value);
  cy.get(".EggTimer-start-time-input > button").click();
});
