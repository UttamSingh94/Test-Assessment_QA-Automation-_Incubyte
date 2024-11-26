Feature: User Sign-In Feature 

 Scenario: Successful Sign In
    Given the user is on the logIn page
    When the user enters valid data in all required fields for logIn
    Then clicks the "Send" button
    Then the account is logged In successfully
