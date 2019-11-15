@authentication @login
Feature: Login an user
    In order to use the game platform
    As a player
    I want to login

    Background: Create test user
        Given there are users: 
        | name | email | password | 
        | Vador | vador@sith.gal | secret |

    Scenario: Failed to login
        Given I am on the "login" page
        When I fill in the field "email" with "vador@sith.gal"
        And I fill in the field "password" with "badPassword"
        And I click on "La Force est avec moi"
        Then I should not be on "home" page
        And I should see an error
    
    Scenario: Success with login
        Given I am on the "login" page
        When I fill in the field "email" with "vador@sith.gal"
        And I fill in the field "password" with "secret"
        And I click on "La Force est avec moi"
        Then I should be redirected to "home" page