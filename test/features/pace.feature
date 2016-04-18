Feature: I can use cucumber to test an pace.js progress bar

  Background:
    Given I browse "http://localhost:3000/"
    And I am on "/pace"
    
  @wip
  Scenario: See progress bar become invisable
    Then I should see 4 "div" element
    And I wait 2 seconds  
    And I should see 1 "div.pace-progress" elements
    And I should see 1 "div.pace-progress-inner" elements
    And I should see 1 "div.pace-activity" elements
    And the "div.pace-progress" element should be visible
    And I wait 2 seconds
    And the ".pace-progress-inner" element should not be visible
