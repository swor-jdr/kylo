import { Given, When } from 'cypress-cucumber-preprocessor/steps';
import { createYield } from 'typescript';
import { FileDetector } from 'selenium-webdriver/remote';
const pages = require('./pages.json');

Given('I am on {string} page', (string) => {
    const destination = pages[string];
    cy.visit(destination);
})

When('I fill the field {string} with {string}', (field, content) => {

})