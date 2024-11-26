class SignupPage {
    visit() {
      cy.visit('https://magento.softwaretestingboard.com/');
    }
  
    createAnAccount() {
      return cy.get('.panel > .header > :nth-child(3) > a')
    }
    
    fillFirstName(fastName) {
      return cy.get('#firstname').type(fastName);
    }

    fillLastName(lastName) {
      return cy.get('#lastname').type(lastName);
    }
  
    fillEmail(email) {
      cy.get('#email_address').type(email);
    }
  
    fillPassword(password) {
      cy.get('#password').type(password);
    }
  
    fillConfirmPassword(confirmPassword) {
      cy.get('#password-confirmation').type(confirmPassword);
    }
  
    submitForm() {
      cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click();
    }

    randomNumber(){
      return Math.floor(Math.random() * 100) 

    }
  }
  
  export default SignupPage;
  