class SignInPage {
    visit() {
      cy.visit('https://magento.softwaretestingboard.com/');
    }

    logInAccount() {
      return cy.get('.panel > .header > .authorization-link > a')
    }

    logInMenu() {
      return cy.get(':nth-child(2).customer-welcome > .customer-name > .action')
    }

    logInMyAccount() {
      return cy.get(':nth-child(2) > .customer-welcome > .customer-menu > .header > :nth-child(1) > a')
    }

    logInVerification() {
      return cy.get('.base')
    }

    logInEmail(email) {
      cy.get('#email').type(email);
    }
  
    fillPassword(password) {
      cy.get('#password').type(password);
    }
    
    logInPassword(password) {
      cy.get('[title="Password"]').type(password);
    }

    signIn() {
      cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span').click();
    }

    randomNumber(){
      return Math.floor(Math.random() * 100) 

    }
  }
  
  export default SignInPage;
  