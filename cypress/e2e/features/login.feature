Feature: Login

  @smoke
  Scenario: Successful login with valid credentials
    # Given I open OrangeHRM login page
    # When I login with username "Admin" and password "admin123"
    # And I click the login button
    # Then Verify the header text as "Dashboard"
    Then I should be on the 'Dashboard' page
      | title     |
      | Dashboard |

  Scenario: login with invalid credentials
    Given I open OrangeHRM login page
    When I login with username "Admin" and password "admin1234"
    And I click the login button
    Then Verify the Invalid credentials text as "Invalid credentials"
