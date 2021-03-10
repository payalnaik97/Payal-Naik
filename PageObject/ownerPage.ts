import {ExpectedConditions,element,browser,by} from 'protractor'
import { log4jsConfig } from "../ConfigLog/log4jsConfig"
const { expect } = require('chai')
const { assert } = require('chai')
var fs=require('fs')

let ec = ExpectedConditions;

export class owner{ 
    
    private home=element(by.css('ul.navbar-nav .glyphicon-home'))
    private pageTitle=element(by.css('app-welcome h1'))
    private ownersTab=element(by.css('ul.nav.navbar-nav>li:nth-child(2)'))
    private addOwner=element(by.css('ul.dropdown-menu>li:nth-child(2)>a'))
    private allOwner=element(by.css('ul.dropdown-menu>li:nth-child(1)>a'))
    private fn=element(by.id('firstName'))
    private ln=element(by.id('lastName'))
    private address=element(by.id('address'))
    private city=element(by.id('city'))
    private tel=element(by.id('telephone'))
    private addButton1=element(by.buttonText('Add Owner'))
    private addButton=element(by.css("button[type='submit']"))
    private allOwnerDetails=element(by.css('.container xd-container h2'))
    private ownerListTbl = element(by.css('table.table-striped tbody'))
    private pageName = element(by.css('div .container.xd-container h2'))
    private visiable=element(by.css('[href="/petclinic/owners/1"]'))
    private backButton=element(by.css('.btn.btn-default'))
    

    public async goToHome(){
        await this.home.click()
    }

    public async verifyHomePageTiltle(){
        browser.sleep(2000)
        await this.pageTitle.getAttribute('innerText').then((title)=>{
        expect(title).to.equal('Welcome to Petclinic')
        console.log("Home Page ::" +title)
        log4jsConfig.Log().debug("Home Page Verify::" +title);})
        let browserTitle=browser.getTitle()
        browserTitle.then((txt)=>{
        console.log("Browser Title::" +txt)
        log4jsConfig.Log().debug("Browser Title Verify::" +txt);})

    }
    public async clickonOwner(){
        await this.ownersTab.click()
        var o= await this.ownersTab.getAttribute('innerText')
        console.log("Owner Tab ::" +o);
        log4jsConfig.Log().debug("Owner Tab Verify::" +o)
    }
    
    public async clickonAddOwner(){
        await this.addOwner.click()    
        var a= await this.addOwner.getAttribute('innerText')
        console.log("Add New Owner  ::" +a);
        log4jsConfig.Log().debug("Add New Owner button verify ::" +a)
            
    }

    public async clickonAllOwner(){
        await this.allOwner.click()
        log4jsConfig.Log().debug("Click on All Owner")
    }

    public async addNewOwnerInfo(first,sec,add,city,tel){             
        const status=await this.addButton1.isEnabled();
        expect(status).to.equal(false);
        await log4jsConfig.Log().debug("Add Button Disable")
        await this.fn.sendKeys(first)
        expect(first).to.have.lengthOf.above(2);
        await log4jsConfig.Log().debug("First is greater than 2 character ::" +first)
        await this.ln.sendKeys(sec)
        expect(sec).to.have.lengthOf.above(2);
        await log4jsConfig.Log().debug("Last  is greater than 2 character ::" +sec)
        await this.address.sendKeys(add)
        expect(add).to.have.lengthOf.above(2)
        await log4jsConfig.Log().debug("Address  is greater than 2 character  ::" +add)
        await this.city.sendKeys(city)
        expect(city).to.have.lengthOf.above(2);
        await log4jsConfig.Log().debug("City  is greater than 2 character ::" +city)
        await this.tel.sendKeys(tel)
        expect(tel).to.have.lengthOf(10);
        await log4jsConfig.Log().debug("Tel No is 10 digit ::" +tel) 
        browser.sleep(5000)
        const status1=await this.addButton1.isEnabled();
        expect(status1).to.equal(true);
        await log4jsConfig.Log().debug("Add Button Enable")
        browser.sleep(5000)
        await this.addButton.click()
        var b= await this.addButton.getAttribute('innerText')
        console.log("Save New Owner  ::" +b)
        log4jsConfig.Log().debug("Save New Owner button verify ::" +b)
        await browser.wait(ec.presenceOf(this.visiable),3000)            
    
    }

    public async verifyOwnerPageTitle(){
        await browser.wait(ec.visibilityOf(this.pageName), 20000, 'Taking too long to load');
        let pagename = await this.pageName.getText();
        await expect(pagename).to.equal('Owners');
        browser.sleep(3000)
        console.log("Owner Page Title ::" +pagename);
        log4jsConfig.Log().debug("Owner Page Title ::" +pagename)
    } 

    public async newlyAddedOwnerDetails(){
        await browser.wait(ec.visibilityOf(this.ownerListTbl), 70000, 'Taking too long to load');
        let ownDetails = this.ownerListTbl.all(by.tagName('tr')).last()
        //await browser.actions().mouseMove(ownDetails).perform();
        browser.sleep(3000)
        let ownerName = await ownDetails.getText();
        const str=ownerName.split(" ");
        let FN=str[0]
        let LN=str[1]       
       await browser.wait(ec.elementToBeClickable(ownDetails), 70000, 'Element taking too long to appear in the DOM');
       console.log(ownerName);
       log4jsConfig.Log().debug("Owner Details ::" +ownerName)
       await expect('PQR').to.equal(FN);
       await expect('STD').to.equal(LN);
       log4jsConfig.Log().debug("Verify added owner Firstname and Lastname::" +FN + "  " +LN)
        
    }
    public async clickOnBackButton(){
        browser.refresh()
        browser.sleep(2000)
        var back= await this.backButton.getAttribute('innerText')
        expect('Back').to.equal(back)
        await this.backButton.click()
        await log4jsConfig.Log().debug("Click on Back Button verify ::" +back)
       
    }
  /* 
  public async takeScreenshot(){
     browser.takeScreenshot().then(function(fullpage){
        var stream=fs.createWriterStream('../screenshot/full.png');
        stream.write(new Buffer(fullpage,'base64'))
        stream.end() 
     })
     browser.sleep(2000)
  }
*/

}
