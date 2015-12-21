- title: Action
  methods:
    - title: click
      regex: /^I click on "([^"]*)"$/
      description: Click on an element based on given selector.
      example: When I click on "button.showModal"

    - title: press
      regex: /^(?:|I )press "([^"]*)"$/
      description: |
        Press a button element with string argument interpreted as (in order):

        1. CSS Selector
        2. Text of `<button>` elements
        3. Value of `<input type="submit">` elements
      example: |
        When I press "button.register"
        And I press "Register"
        And I press "Submit"

    - title: follow
      regex: /^I follow "([^"]*)"$/
      description: |
        Follow a link element with string argument interpreted as (in order):

        1. CSS Selector
        2. Text of `<a>` elements
      example: When I follow "a[href='/about']"

    - title: hover
      regex: /^I hover "([^"]*)" element$/
      description: Hover an element with cursor (activate CSS :hover property).
      example: When I hover "nav.menu" element

    - title: submit
      regex: /^I submit "([^"]*)" form$/
      description: |
        Submits a form found by given selector. The submit command may also be applied to any element that is a descendant of a <form> element.
      example: When I submit "form#register" form

- title: Assert DOM
  methods:
    - title: html contains
      regex: /^I should see "([^"]*)"$/
      description: Assert page sources (with tags) contains the provided string.
      example: Then I should see "Home Page"

    - title: html not contains
      regex: /^I should not see "([^"]*)"$/
      description: Assert page sources (with tags) not contains the provided string.
      example: Then I should not see "Detail Page"

    - title: html match
      regex: /^I should see text matching (.+)$/
      description: Assert page sources (with tags) match with provided RegExp.
      example: Then I should see text matching Post-\d+

    - title: html not match
      regex: /^I should not see text matching (.+)$/
      description: Assert page sources (with tags)does not match with provided RegExp.
      example: Then I should not see text matching .+@.+

    - title: html element count
      regex: /^I should see (\d+) "([^"]*)" elements?$/
      description: Assert page contains X DOM-elements with the provided CSS Selector.
      example: Then I should see 3 "section.post" elements

    - title: element contains
      regex: /^(?:|I )should see "([^"]*)" in the "([^"]*)" element$/
      description: Assert DOM-element(s) with the provided CSS Selector contains the provided text.
      example: Then I should see "Home Page" in the "h1" element

    - title: element not contains
      regex: /^(?:|I )should not see "([^"]*)" in the "([^"]*)" element$/
      description: Assert DOM-element(s) with the provided CSS Selector do not contains the provided text.
      example: Then I should not see "Post Detail Page" in the "h1" element

    - title: element visible
      regex: /^I should see an? "([^"]*)" element$/
      description: Assert if the selected DOM-element found by given selector is visible.
      example: Then I should see an "h2.content-subhead" element

    - title: element not visible
      regex: /^I should not see an? "([^"]*)" element$/
      description: Assert if the selected DOM-element found by given selector is not visible.
      example: Then I should not see an "h2.content-subhead" element

    - title: element exists
      regex: /^the "([^"]*)" element should exist$/
      description: Assert that at least one element exits matching given selector.
      example: Then the "h2.content-subhead" element should exist

    - title: element not exists
      regex: /^the "([^"]*)" element should exist$/
      description: Assert that no element exists matching given selector.
      example: Then the "h2.content-subhead" element should not exist

- title: Assert Form
  methods:
    - title: select value
      regex: /^the "([^"]*)" current option contain "([^"]*)"$/
      description: Assert the currently selected option of a select field contains provided text.
      example: Then the "select[name='country']" current option contain "USA"

    - title: input value
      regex: /^the "([^"]*)" field should contain "([^"]*)"$/
      description: Assert if the input's value of given selector contains provided text.
      example: Then the "textarea[name='description']" field should contain "My text"

    - title: input not value
      regex: /^the "([^"]*)" field should not contain "([^"]*)"$/
      description: Assert if the input's value of given selector do not contains provided text.
      example: Then the "textarea[name='description']" field should not contain "My first name"

    - title: input enabled
      regex: /^the "([^"]*)" field should be enabled$/
      description: Assert that the input is enabled.
      example: Then the "input[name='first_name']" field should be enabled

    - title: input disabled
      regex: /^the "([^"]*)" field should be disabled$/
      description: Assert that the input is disabled.
      example: Then the "input[name='disabled_input']" field should be disabled

    - title: checkbox checked
      regex: /^the "([^"]*)" checkbox should be checked$/
      description: Assert that the checkbox is checked.
      example: Then the "#checkbox-input" checkbox should be checked

    - title: checkbox unchecked
      regex: /^the "([^"]*)" checkbox should not be checked$/
      description: Assert that the checkbox is unchecked.
      example: Then the "#checkbox-input" checkbox should not be checked

- title: Assert Url
  methods:
    - title: on homepage
      regex: /^I should be on (?:|the )homepage$/
      description: Assert current URL pathname equals '/'.
      example: Then I should be on the homepage

    - title: url
      regex: /^(?:|I )should be on "([^"]*)"$/
      description: Assert current URL pathname equals the given string.
      example: Then I should be on "/post/1"

    - title: url match
      regex: /^the url should match (.+)$/
      description: Assert current URL pathname match against provided RegExp.
      example: Then the url should match ^\/post\/\d+

    - title: url query match
      regex: /^the url parameter should match (.+)$/
      description: Assert current URL query string match against provided RegExp.
      example: Then the url parameter should match ^\/post\/\d+

- title: Form
  methods:
    - title: fill field
      regex: |
        /^(?:|I )fill in "([^"]*)" with "([^"]*)"$/
        /^(?:|I )fill in "([^"]*)" with:$/
      description: |
        Send a sequence of key strokes to an element (clears value before). You can also use unicode characters like Left arrow or Back space.
        You’ll find all supported characters [here](https://code.google.com/p/selenium/wiki/JsonWireProtocol#/session/:sessionId/element/:id/value). To do that, the value has to correspond to a key from the table.
      example: |
        Then I fill in "input[name='first_name']" with:
          """
          My long multi-line text ...
          """

    - title: fill multiple
      regex: /^(?:|I )fill in the following:$/
      description: |
        Fill multiples fields at once. Internally uses the above step.
      example: |
        When I fill in the following:
          | input[name='first_name']     | John          |
          | input[name='last_name']      | Doe           |
          | textarea[name='description'] | Some text ... |

    - title: choose in select
      regex: /^(?:|I )select "([^"]*)" from "([^"]*)"$/
      description: Select option that display text matching the argument.
      example: Then I select "France" from "select.country"

    - title: check
      regex: /^(?:|I )check "([^"]*)"$/
      description: Check the checkboxe with provided selector.
      example: Then I check "#checkbox-input"

    - title: uncheck
      regex: /^(?:|I )uncheck "([^"]*)"$/
      description: Uncheck the checkboxe with provided selector.
      example: Then I uncheck "#checkbox-input-next"

- title: Navigation
  methods:
    - title: base url
      regex: /^(?:|I )browse "([^"]*)"$/
      description: |
        Set driver's baseUrl. Useful to use short path in subsequent navigation (ex: "/login")
      example: When I browse "http://127.0.0.1:3000/

    - title: homepage
      regex: /^(?:|I )am on (?:|the )homepage$/
      description: |
        Navigate to homepage, ie: baseUrl + '/'
      example: When I am on the homepage

    - title: browse
      regex: /^(?:|I )am on "([^"]*)"$/
      description: Browse given URL or path.
      example: When I am on "/post/2"

    - title: reload
      regex: /^(?:|I )reload the page$/
      description: Reload the current page.
      example: When I reload the page

    - title: back
      regex: /^(?:|I )move backward one page$/
      description: Navigate backwards in the browser history, if possible.
      example: When I move backward one page

- title: Utility
  methods:
    - title: screenshot
      regex: /^I take a screenshot$/
      description: Take a screenshot of the current viewport and save it at ./screenshot.png
      example: Then I take a screenshot

    - title: viewport
      regex: /^the viewport is (\d+)px width and (\d+)px height$/
      description: |
        Set browser viewport size, width and height in pixel.
        The default viewport is: { width: 1366, height: 768 } (most used screen resolution).
      example: When the viewport is 360px width and 568px height

    - title: wait
      regex: /^I wait (\d+) seconds?$/
      description: Wait for X seconds.
      example: Then I wait 10 seconds
	  