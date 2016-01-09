Feature: I can test msfeature scroll features

  Background:
    Given I browse "http://localhost:3000/"
    And I am on "/generate/30"
    And the viewport is 320px width and 568px height
 
  Scenario: Scroll to element id
    And the "a[href='/post/1']" element should be visible
    And the "a[href='/post/30']" element should not be visible
    When I scroll to the element with id="post30"
    Then the "a[href='/post/1']" element should not be visible
    And  the "a[href='/post/30']" element should be visible
#    And I wait 5 seconds

  Scenario: Scroll down
    And the "a[href='/post/1']" element should be visible
    And the "a[href='/post/5']" element should not be visible
    When I scroll down "500" pixels
    Then the "a[href='/post/1']" element should not be visible
    And  the "a[href='/post/5']" element should be visible
#    And I wait 5 seconds
    When I scroll up "500" pixels
    Then the "a[href='/post/1']" element should be visible
    And the "a[href='/post/5']" element should not be visible
#    And I wait 5 seconds
