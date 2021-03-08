import {ExpectedConditions,element,browser,by,$$,ElementFinder} from 'protractor'
import { log4jsConfig } from "../ConfigLog/log4jsConfig"
import { build$$ } from 'protractor/built/element';
const { expect } = require('chai')
let ec = ExpectedConditions;


export class pet{

private petTypeTab=element(by.css('ul.nav.navbar-nav>li:nth-child(4)'))
private petPage=element(by.css('.container.xd-container > h2'))
private addPetButton=element(by.buttonText('Add'))
private addName=element(by.id('name'))
private savePet=element(by.css("button[type='submit']"))
private petList=element(by.css('.table.table-striped tbody'))
private petList1=element.all(by.css('tbody tr'))
private deletePetButon=element(by.buttonText('Delete'))
private homeButton=element(by.buttonText('Home'))
private firstPet=element(by.css('tbody tr td'))
private editPetButon=element(by.buttonText('Edit'))
private editPageTitle=element(by.css('.container.xd-container > h2'))
private addnewName=element(by.id('name'))
private updatePet=element(by.css("button[type='submit']"))


public async goToPetType() {
    await this.petTypeTab.click()  
    await log4jsConfig.Log().debug("Click  PetType Tab")
    const status=await this.addPetButton.isEnabled();
    expect(status).to.equal(true);
    await log4jsConfig.Log().debug("Add Button Enable")

    const status1=await this.homeButton.isEnabled();
    expect(status1).to.equal(true);
    await log4jsConfig.Log().debug("Home Button Enable")
    
}
public async goToHome() {
    await this.homeButton.click()
    await log4jsConfig.Log().debug("Home button Clickable")
    await log4jsConfig.Log().debug("Go to Home Page")
}


public async verifyPetPage(){
     await this.petPage.getAttribute('innerText').then((title)=>{
     expect(title).to.equal('Pet Types');
     console.log("PetType Page ::" +title)
     log4jsConfig.Log().debug("PetType Page Verify::" +title);})
 }
 
 public async verifyEditDeleteButton(){
    await this.editPetButon.getAttribute('innerText').then((edittitle)=>{
    expect(edittitle).to.equal('Edit')
    log4jsConfig.Log().debug("Edit button Enable");})
    await this.deletePetButon.getAttribute('innerText').then((deletetitle)=>{
    expect(deletetitle).to.equal('Delete')
    log4jsConfig.Log().debug("Delete button Enable");})
 }

 public async addPet() {
    await this.addPetButton.click() 
    await log4jsConfig.Log().debug("Add button Clickable")
    await log4jsConfig.Log().debug("Click on Add Button on PetType Page")
  }

 public async enterPetName(name) {
    await this.addName.sendKeys(name)
    await log4jsConfig.Log().debug("PetType enter:" +name)
    browser.sleep(2000)
    await this.savePet.click()
    await log4jsConfig.Log().debug("Save PetType")

 }
 public async verifyPetTypeList(){
    let table=element(by.css('.table.table-striped tbody'))
    let row =table.$$("tr")
    let count= await row.count()
    console.log("No of pet present-- "+count);
    await log4jsConfig.Log().debug("No of pet present::"+count)
    browser.sleep(3000)
    for(let i=0; i<count; i++)
    {
      let firstTD=row.get(i).$$("td")
      let firstdata:ElementFinder=firstTD.get(0)
      browser.wait(ec.presenceOf(firstdata), 5000);
      await firstdata.element(by.name('pettype_name')).getAttribute('value').then((title)=>{
      console.log("PetType  ::" +title)
      log4jsConfig.Log().debug("PetType::" +title);})
      
    } 
  
  }
 
  
  public async deletePetType()
  { 
    browser.sleep(5000)
    browser.refresh()
    await this.firstPet.element(by.name('pettype_name')).getAttribute('value').then((petName)=>{
    console.log("Deleted PetType Name ::" +petName)
    log4jsConfig.Log().debug("Deleted PetType Name::" +petName);})
    browser.sleep(2000) 
    await this.deletePetButon.click()
    await log4jsConfig.Log().debug("Delete PetType")
    browser.sleep(5000)
  }

  
  public async editPet() {
    await this.editPetButon.click() 
    await log4jsConfig.Log().debug("Edit button Clickable")
    await log4jsConfig.Log().debug("Click on Edit Button on PetType Page")
  }


  public async verifyEditPetPage(){
  await this.editPageTitle.getAttribute('innerText').then((edittitle)=>{
  expect(edittitle).to.equal('Edit Pet Type');
  console.log("Edit PetType Page ::" +edittitle)
  log4jsConfig.Log().debug("Edit PetType Page Verify::" +edittitle);})
}
  

public async enterNewPetName(newName) {
  browser.sleep(2000)
  await this.addnewName.getAttribute('innerText').then((oname)=>{
  console.log("Old PetType Name ::" +oname)
  log4jsConfig.Log().info("Edit PetType Page Verify::" +oname);})
  browser.sleep(3000)
  await this.addnewName.clear()
  browser.sleep(3000)
  await this.addnewName.sendKeys(newName)
  await log4jsConfig.Log().debug("New PetType enter:" +newName)
  browser.sleep(2000)
}

public async clickonUpdate() {
  await this.updatePet.click()
}



}





