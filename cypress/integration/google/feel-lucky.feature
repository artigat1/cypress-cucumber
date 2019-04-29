Feature: Feel Lucky
  @e2e-test
  Scenario: Feel Lucky
    Given I'm at Google
    When I type search word 'doctorlink'
    And Press 'Feel Lucky'
    Then I am redirected to another domain