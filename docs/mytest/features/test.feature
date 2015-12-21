# features/test.feature
Feature: I can use msfeature to check the content of my website

  Background:
    Given I am on "https://www.npmjs.com/package/msfeature"

  Scenario: Check Homepage content
    When  I wait 3 seconds
    Then  I should see "msfeature" in the "a" element

