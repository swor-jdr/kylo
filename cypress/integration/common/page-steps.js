/// <reference types="cypress" />

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
const pages = require('./pages.json');

Given('I am on the {string} page', (string) => {
    const destination = pages[string];
    cy.visit(destination);
})

When('I fill in the field {string} with {string}', (field, content) => {
    cy.get('input[name=' + field + ']').type(content);
})

When('I click on {string}', (button) => {
    cy.contains(button).click();
})

Then('I should be on {string}', (uri) => {
    cy.url().should('include', uri);
})

Then('I should not be on {string} page', (page) =>  {
    const destination = pages[page];
    cy.url().should('not.include', destination);
})

Then('I should be redirected to {string} page', (page) => {
    const destination = pages[page];
    cy.url().should('include', destination);
})

Then('I should see an error', () => {
    cy.get('.alert');
})