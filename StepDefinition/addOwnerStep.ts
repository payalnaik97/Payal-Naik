import {Given,When,Then} from "cucumber";
import { browser,ExpectedConditions } from "protractor";
import {owner} from "../PageObject/ownerPage";
const { expect } = require('chai')

var {setDefaultTimeout} = require('cucumber');
setDefaultTimeout(90 * 1000);

let ec = ExpectedConditions;
let home=new owner()

Given('User is on petclininc home page and home page title should be Welcome to PetClinic', { timeout: 100000 }, async function () {
    await browser.get("http://petclinicui.e46708b92c054086909b.eastus.aksapp.io/petclinic/welcome")
    browser.sleep(2000)
    await home.goToHome()
    await home.verifyHomePageTiltle()
 });
 When('User clicks on owners tab and selects Add New dropdown menu', async function () {
   await home.clickonOwner()
   await home.clickonAddOwner()
   browser.sleep(2000)
 });
 When('User enter valid owners details as {string} {string} {string} {string} {string} and AddOwner button should get enable', async function (fn, ln, addr, city, tel) {
   await home.addNewOwnerInfo(fn,ln,addr,city,tel)
   browser.sleep(2000)
});

Then('After Clicking on AddOwner button user should be navigated to Owners page and added owner should be saved', async function () {
 
  await home.verifyOwnerPageTitle()
  await browser.refresh()
  await home.newlyAddedOwnerDetails()

});

When('User click on Back button on Add New Owner page', async function () {
  browser.sleep(2000)
  await home.clickonOwner()
  await home.clickonAddOwner()
  browser.sleep(2000)
  await home.clickOnBackButton()
 
});


Then('User should navigate to All Owner list page', async function () {
  await home.verifyOwnerPageTitle()
});

