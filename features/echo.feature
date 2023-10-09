Feature: Echo chambers
  echo

  Scenario: Echoing out
    Given echo is asd
    When when i shout hey
    Then echo returns "asd"

  Scenario: Friday is Friday
    Given echo is asd
    When when i shout yo
    Then echo does not return "asd"   

  Scenario: Echoing out
    Given echo is asd
    When when i shout yo
    Then echo returns "qwe"    