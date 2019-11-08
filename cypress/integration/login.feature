Feature: Authentication
    In order to use the platform
    As a player
    I want to login

    Scenario: Failed to login
        Given I am on the "login" page
        When I fill the field "email" in with "vador@sith.gal"
        And I fill the field "password" in with "badPassword"
        And I submit the form
        Then I should not be on home page
        And I should see an error
    
    Scenario: Success with login
        Given I am on the "login" page
        When I fill the field "email" in with "vador@sith.gal"
        And I fill the field "password" in with "secret"
        And I submit the form
        Then I should be redirected to "home" page