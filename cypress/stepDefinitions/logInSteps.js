/// <reference types="cypress" />
import { Given, When, Then, Before } from '@badeball/cypress-cucumber-preprocessor';
import SignInPage from '../pageObjects/logInPage';
const signIn_Page = new SignInPage();

let userData;
Before(() => {             //using before here to load the test data
  cy.fixture('testData').then((data) => {
    userData = data;
  });
});
Given('the user is on the logIn page', () => {
  const baseUrl = Cypress.env('baseUrl');
  cy.visit(`${baseUrl}`);
});

When('the user enters valid data in all required fields for logIn', () => {
  signIn_Page.logInAccount().click();
  signIn_Page.logInEmail(userData.ExistingUser);
  signIn_Page.logInPassword(userData.pass);
});

Then('clicks the "Send" button', () => {
  signIn_Page.signIn();
});

Then('the account is logged In successfully', () => {
  cy.wait(6000);
  signIn_Page.logInMenu().eq(0).click();
  signIn_Page.logInMyAccount().click();
  signIn_Page.logInVerification().invoke('text').then((text) => {
    expect(text).to.equal('My Account');
  });
});


