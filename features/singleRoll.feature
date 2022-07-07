Feature:  My Bowling Center Scoring

    Scenario: Prove we can return the result of one roll

        Given I have started a game
        When  I knock down 4 pins
        Then  I receive a score of 4

