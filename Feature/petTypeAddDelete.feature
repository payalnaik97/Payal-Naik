Feature: User should able to add Pet Type .

Scenario: Add Pet Type
Given User is on PetType page
When User click on Add button on PetType page 
Then User should be able to add new PetType as "<Pet Type>" on PetType page and see added PetType
When User click on Delete button on PetType page 
Then User should able to see selected PetType get deleted

When User click on Home button on PetType Page
Then User should navigate to Home Page

            Examples:
            | Pet Type |
            | Mammals | 

Scenario: Edit First Pet Type 
Given User is on PetType page
When User click on Edit button of first PetType  
Then User should navigate to Edit PetType page and able to edit selected PetType and enter new Name as "<New Pet Type>" on PetType page 
And User should click on Update button
And User should able to see PetType name upadted to new
        Examples:
            | New Pet Type |
            | MammalsNew  | 