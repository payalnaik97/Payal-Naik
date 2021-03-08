Feature: User should able to add Venterinans detial.

Scenario: Add New Venterinans
Given User is on Venterinans page
When User click on Venterinans tab and select add new from dropdown
And User enter valid details
Then User should be navigate on Venterinans page and added Venterinans should be saved


Scenario: Back Button on Venterinans
Given User is on New Venterinans page
When User click on Back Button
Then User should be navigate on Venterinans page 