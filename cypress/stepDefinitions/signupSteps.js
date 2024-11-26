/// <reference types="cypress" />
import { Given, When, Then, Before } from '@badeball/cypress-cucumber-preprocessor';
import SignupPage from '../pageObjects/SignupPage';
const signupPage = new SignupPage();

let userData;
Before(() => {
  cy.fixture('testData').then((data) => {
    userData = data;
  });
});

Given('the user is on the signup page', () => {
  const baseUrl = Cypress.env('baseUrl');
  cy.visit(`${baseUrl}`);
});

When('the user enters valid data in all required fields', () => {
  signupPage.createAnAccount().click();
  signupPage.fillFirstName(userData.fName);
  signupPage.fillLastName(userData.lName);
  let email = userData.email + signupPage.randomNumber() + "@gmail.com"
  signupPage.fillEmail(email);
  signupPage.fillPassword(userData.pass);
  signupPage.fillConfirmPassword(userData.pass);
});

Then('clicks the "Create an Account" button', () => {
  signupPage.submitForm();
});

Then('the account is created successfully', () => {
  cy.wait(5000);
  cy.contains('Thank you for registering with Main Website Store.').should('be.visible');
});


