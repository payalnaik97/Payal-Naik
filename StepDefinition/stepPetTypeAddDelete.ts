import { Given, When, Then } from 'cucumber';
import { browser ,ExpectedConditions} from "protractor";
import { pet } from "../PageObject/addDeletePet";
import {owner} from "../PageObject/ownerPage";
import { log4jsConfig } from "../ConfigLog/log4jsConfig"
import { Before, After, Status, BeforeAll } from "cucumber";

let ec = ExpectedConditions;
let pettype=new pet()
let home=new owner()
var fs=require('fs')


Given('User is on PetType page', async function () {
  await browser.get("http://petclinicui.e46708b92c054086909b.eastus.aksapp.io/petclinic/welcome")
  log4jsConfig.Log().info('Everything started properly.')
  await home.verifyHomePageTiltle()
  await browser.sleep(2000)
  await pettype.goToPetType()
  log4jsConfig.Log().debug("Go to PetType Page ")
  await browser.sleep(1000)
  await pettype.verifyPetPage()
  await pettype.verifyEditDeleteButton()
  //await home.takeScreenshot()

});   

  When('User click on Add button on PetType page', async function () {
    await pettype.addPet()
    await browser.sleep(1000)
  });


  
  Then('User should be able to add new PetType as {string} on PetType page and see added PetType', async function (petname) {
    await pettype.enterPetName(petname)
    await browser.sleep(2000)
    browser.refresh()
    console.log("PetType present after adding PetType::"); 
    browser.sleep(3000)
    await log4jsConfig.Log().info("PetType present after adding PetType::")   
    await pettype.verifyPetTypeList()
    browser.sleep(2000)
    await log4jsConfig.Log().debug("PetType added Successfully")   
    browser.sleep(3000)
    
  });


  When('User click on Delete button on PetType page', async function () {
    await pettype.deletePetType()
    browser.refresh()
    browser.sleep(3000)
    
  });

  
  Then('User should able to see selected PetType get deleted', async function () {
    console.log("PetType present after deleting PetType::");   
    await log4jsConfig.Log().info("PetType present after deleting PetType::")
    await pettype.verifyPetTypeList()
    await log4jsConfig.Log().debug("PetType deleted Successfully")   
    
  });

  
  When('User click on Home button on PetType Page', async function () {
  await pettype.goToHome()
  browser.refresh()
  browser.sleep(2000)
    
  });

  Then('User should navigate to Home Page', async function () {
   await home.verifyHomePageTiltle()
   browser.sleep(1000)
  });


/*********************************************Scenario 2******************************************************/

   When('User click on Edit button of first PetType', async function () {
    await pettype.editPet()
    browser.sleep(3000)


   });

   Then('User should navigate to Edit PetType page and able to edit selected PetType and enter new Name as {string} on PetType page', async function (newPetType) {
    await pettype.verifyEditPetPage()
    await pettype.enterNewPetName(newPetType)
    await browser.sleep(2000)
   });

   Then('User should click on Update button', async function () {
    await pettype.clickonUpdate()
    browser.refresh()
    browser.sleep(2000)
   });

   Then('User should able to see PetType name upadted to new', async function () {
     await browser.refresh()   
     await pettype.goToPetType()
     await browser.sleep(3000)
     await log4jsConfig.Log().info("PetType present after editing PetType::")
     await pettype.verifyPetTypeList()
     await log4jsConfig.Log().debug("PetType edited Successfully")   
   });
    
   /******************************************************************************************************/
  Before(async function () {
    await browser.manage().deleteAllCookies()
  })

 /* After(async function (scenario) {
    if(scenario.result.Status===Status.FAILED)
    {
      const screenshot=await browser.takeScreenshot()
      await this.attach(screenshot,"image/png")
      
    }
  })*/
   