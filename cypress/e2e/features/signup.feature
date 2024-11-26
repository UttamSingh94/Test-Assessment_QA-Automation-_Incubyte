Feature: User Sign-up Feature 

  Scenario: Successful account creation Sign Up
    Given the user is on the signup page
    When the user enters valid data in all required fields
    Then clicks the "Create an Account" button
    Then the account is created successfully

   
