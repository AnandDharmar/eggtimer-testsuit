Feature:Countdown validation

  Scenario: Verify Eggmeter home page is loaded and verify TimeExpired message
    Given Eggtimer page is loaded
    When User enters 25 and click on Start
    Then Verify that Time Expired text message is displayed after the given time
  @test
  Scenario: Verify time is decreases by one-sec
    Given Eggtimer page is loaded
    When User enters 25 and click on Start
    Then Remaining time should decreases by one-sec from 25
