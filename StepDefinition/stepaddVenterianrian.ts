//import { Given,When,Then } from 'cucumber';
import { Given, When, Then } from 'cucumber';
import { browser } from "protractor";
import { venterinans } from '../PageObject/addVeteri';
import { owner } from "../PageObject/ownerPage";
let { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(90 * 1000);

let ven = new venterinans
let home=new owner

  Given('User is on Venterinans page', async function () {
      browser.get('http://petclinicui.e46708b92c054086909b.eastus.aksapp.io/petclinic/welcome')
      await home.goToHome()
      await home.verifyHomePageTiltle()
      await ven.goToVen();
      browser.sleep(2000)

  });


  When('User click on Venterinans tab and select add new from dropdown', async function () {
    await ven.newVen()
    //browser.sleep(3000)
    await ven.verifyVenteinansTiltle()

  });


  When('User enter valid details', async function () {
    await ven.addNewOwnerInfo()
    browser.sleep(3000)
  });

   Then('User should be navigate on Venterinans page and added Venterinans should be saved', async function () {
    browser.sleep(3000)
    browser.refresh()
    await ven.allVenteinansTiltle()
    browser.sleep(3000)
    await ven.newlyAddedVenDetails()
   });

  /***********************************Scenario 2*************************************************/


  Given('User is on New Venterinans page',{ timeout: 100000 }, async function () {
    browser.sleep(5000)
    await ven.goToVen()
    await ven.newVen()
  });
  

  When('User click on Back Button', async function () {
  await ven.clickVenBackButton()
  });
  

  Then('User should be navigate on Venterinans page', async function () {
    browser.sleep(3000)
    await ven.allVenteinansTiltle()

  });




