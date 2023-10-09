Feature: daryl has coinz
    does daryl really have coinz???

    Scenario: daryl cant give when he has none
        Given daryl has 0 coins
        When someone asks for 10 coins
        Then he can only give 0 coins

    Scenario: daryl only gives half of what u want
        Given daryl has 100 coins
        When someone asks for 10 coins
        Then he can only give 5 coins