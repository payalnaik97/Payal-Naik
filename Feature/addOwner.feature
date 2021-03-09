Feature: User should be able to add new owner and validate existing owners details

    Scenario Outline: Add owners
        Given User is on petclininc home page and home page title should be Welcome to PetClinic
        When User clicks on owners tab and selects Add New dropdown menu
        And User enter valid owners details as "<First_Name>" "<Last_Name>" "<Address>" "<City>" "<Telephone>" and AddOwner button should get enable
        Then After Clicking on AddOwner button user should be navigated to Owners page and added owner should be saved
        When User click on Back button on Add New Owner page
        Then User should navigate to All Owner list page 

        Examples:
            | First_Name | Last_Name | Address            | City   | Telephone  |
            | PQR    | STD     | 5020 Intellj Street | NYC | 4569852369 |
