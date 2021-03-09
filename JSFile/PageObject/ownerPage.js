"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.owner = void 0;
var protractor_1 = require("protractor");
var log4jsConfig_1 = require("../ConfigLog/log4jsConfig");
var expect = require('chai').expect;
var assert = require('chai').assert;
var fs = require('fs');
var ec = protractor_1.ExpectedConditions;
var owner = (function () {
    function owner() {
        this.home = protractor_1.element(protractor_1.by.css('ul.navbar-nav .glyphicon-home'));
        this.pageTitle = protractor_1.element(protractor_1.by.css('app-welcome h1'));
        this.ownersTab = protractor_1.element(protractor_1.by.css('ul.nav.navbar-nav>li:nth-child(2)'));
        this.addOwner = protractor_1.element(protractor_1.by.css('ul.dropdown-menu>li:nth-child(2)>a'));
        this.allOwner = protractor_1.element(protractor_1.by.css('ul.dropdown-menu>li:nth-child(1)>a'));
        this.fn = protractor_1.element(protractor_1.by.id('firstName'));
        this.ln = protractor_1.element(protractor_1.by.id('lastName'));
        this.address = protractor_1.element(protractor_1.by.id('address'));
        this.city = protractor_1.element(protractor_1.by.id('city'));
        this.tel = protractor_1.element(protractor_1.by.id('telephone'));
        this.addButton1 = protractor_1.element(protractor_1.by.buttonText('Add Owner'));
        this.addButton = protractor_1.element(protractor_1.by.css("button[type='submit']"));
        this.allOwnerDetails = protractor_1.element(protractor_1.by.css('.container xd-container h2'));
        this.ownerListTbl = protractor_1.element(protractor_1.by.css('table.table-striped tbody'));
        this.pageName = protractor_1.element(protractor_1.by.css('div .container.xd-container h2'));
        this.visiable = protractor_1.element(protractor_1.by.css('[href="/petclinic/owners/1"]'));
        this.backButton = protractor_1.element(protractor_1.by.css('.btn.btn-default'));
    }
    owner.prototype.goToHome = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.home.click()];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    owner.prototype.verifyHomePageTiltle = function () {
        return __awaiter(this, void 0, void 0, function () {
            var browserTitle;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        protractor_1.browser.sleep(2000);
                        return [4, this.pageTitle.getAttribute('innerText').then(function (title) {
                                expect(title).to.equal('Welcome to Petclinic');
                                console.log("Home Page ::" + title);
                                log4jsConfig_1.log4jsConfig.Log().debug("Home Page Verify::" + title);
                            })];
                    case 1:
                        _a.sent();
                        browserTitle = protractor_1.browser.getTitle();
                        browserTitle.then(function (txt) {
                            console.log("Browser Title::" + txt);
                            log4jsConfig_1.log4jsConfig.Log().debug("Browser Title Verify::" + txt);
                        });
                        return [2];
                }
            });
        });
    };
    owner.prototype.clickonOwner = function () {
        return __awaiter(this, void 0, void 0, function () {
            var o;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.ownersTab.click()];
                    case 1:
                        _a.sent();
                        return [4, this.ownersTab.getAttribute('innerText')];
                    case 2:
                        o = _a.sent();
                        console.log("Owner Tab ::" + o);
                        log4jsConfig_1.log4jsConfig.Log().debug("Owner Tab Verify::" + o);
                        return [2];
                }
            });
        });
    };
    owner.prototype.clickonAddOwner = function () {
        return __awaiter(this, void 0, void 0, function () {
            var a;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.addOwner.click()];
                    case 1:
                        _a.sent();
                        return [4, this.addOwner.getAttribute('innerText')];
                    case 2:
                        a = _a.sent();
                        console.log("Add New Owner  ::" + a);
                        log4jsConfig_1.log4jsConfig.Log().debug("Add New Owner button verify ::" + a);
                        return [2];
                }
            });
        });
    };
    owner.prototype.clickonAllOwner = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.allOwner.click()];
                    case 1:
                        _a.sent();
                        log4jsConfig_1.log4jsConfig.Log().debug("Click on All Owner");
                        return [2];
                }
            });
        });
    };
    owner.prototype.addNewOwnerInfo = function (first, sec, add, city, tel) {
        return __awaiter(this, void 0, void 0, function () {
            var status, status1, b;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.addButton1.isEnabled()];
                    case 1:
                        status = _a.sent();
                        expect(status).to.equal(false);
                        return [4, log4jsConfig_1.log4jsConfig.Log().debug("Add Button Disable")];
                    case 2:
                        _a.sent();
                        return [4, this.fn.sendKeys(first)];
                    case 3:
                        _a.sent();
                        expect(first).to.have.lengthOf.above(2);
                        return [4, log4jsConfig_1.log4jsConfig.Log().debug("First is greater than 2 character ::" + first)];
                    case 4:
                        _a.sent();
                        return [4, this.ln.sendKeys(sec)];
                    case 5:
                        _a.sent();
                        expect(sec).to.have.lengthOf.above(2);
                        return [4, log4jsConfig_1.log4jsConfig.Log().debug("Last  is greater than 2 character ::" + sec)];
                    case 6:
                        _a.sent();
                        return [4, this.address.sendKeys(add)];
                    case 7:
                        _a.sent();
                        expect(add).to.have.lengthOf.above(2);
                        return [4, log4jsConfig_1.log4jsConfig.Log().debug("Address  is greater than 2 character  ::" + add)];
                    case 8:
                        _a.sent();
                        return [4, this.city.sendKeys(city)];
                    case 9:
                        _a.sent();
                        expect(city).to.have.lengthOf.above(2);
                        return [4, log4jsConfig_1.log4jsConfig.Log().debug("City  is greater than 2 character ::" + city)];
                    case 10:
                        _a.sent();
                        return [4, this.tel.sendKeys(tel)];
                    case 11:
                        _a.sent();
                        expect(tel).to.have.lengthOf(10);
                        return [4, log4jsConfig_1.log4jsConfig.Log().debug("Tel No is 10 digit ::" + tel)];
                    case 12:
                        _a.sent();
                        protractor_1.browser.sleep(5000);
                        return [4, this.addButton1.isEnabled()];
                    case 13:
                        status1 = _a.sent();
                        expect(status1).to.equal(true);
                        return [4, log4jsConfig_1.log4jsConfig.Log().debug("Add Button Enable")];
                    case 14:
                        _a.sent();
                        return [4, this.addButton.click()];
                    case 15:
                        _a.sent();
                        return [4, this.addButton.getAttribute('innerText')];
                    case 16:
                        b = _a.sent();
                        console.log("Save New Owner  ::" + b);
                        log4jsConfig_1.log4jsConfig.Log().debug("Save New Owner button verify ::" + b);
                        return [4, protractor_1.browser.wait(ec.presenceOf(this.visiable), 3000)];
                    case 17:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    owner.prototype.verifyOwnerPageTitle = function () {
        return __awaiter(this, void 0, void 0, function () {
            var pagename;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, protractor_1.browser.wait(ec.visibilityOf(this.pageName), 20000, 'Taking too long to load')];
                    case 1:
                        _a.sent();
                        return [4, this.pageName.getText()];
                    case 2:
                        pagename = _a.sent();
                        return [4, expect(pagename).to.equal('Owners')];
                    case 3:
                        _a.sent();
                        protractor_1.browser.sleep(3000);
                        console.log("Owner Page Title ::" + pagename);
                        log4jsConfig_1.log4jsConfig.Log().debug("Owner Page Title ::" + pagename);
                        return [2];
                }
            });
        });
    };
    owner.prototype.newlyAddedOwnerDetails = function () {
        return __awaiter(this, void 0, void 0, function () {
            var ownDetails, ownerName, str, FN, LN;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, protractor_1.browser.wait(ec.visibilityOf(this.ownerListTbl), 70000, 'Taking too long to load')];
                    case 1:
                        _a.sent();
                        ownDetails = this.ownerListTbl.all(protractor_1.by.tagName('tr')).last();
                        return [4, protractor_1.browser.actions().mouseMove(ownDetails).perform()];
                    case 2:
                        _a.sent();
                        protractor_1.browser.sleep(3000);
                        return [4, ownDetails.getText()];
                    case 3:
                        ownerName = _a.sent();
                        str = ownerName.split(" ");
                        FN = str[0];
                        LN = str[1];
                        return [4, protractor_1.browser.wait(ec.elementToBeClickable(ownDetails), 70000, 'Element taking too long to appear in the DOM')];
                    case 4:
                        _a.sent();
                        console.log(ownerName);
                        log4jsConfig_1.log4jsConfig.Log().debug("Owner Details ::" + ownerName);
                        return [4, expect('PQR').to.equal(FN)];
                    case 5:
                        _a.sent();
                        return [4, expect('STD').to.equal(LN)];
                    case 6:
                        _a.sent();
                        log4jsConfig_1.log4jsConfig.Log().debug("Verify added owner Firstname and Lastname::" + FN + "  " + LN);
                        return [2];
                }
            });
        });
    };
    owner.prototype.clickOnBackButton = function () {
        return __awaiter(this, void 0, void 0, function () {
            var back;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        protractor_1.browser.refresh();
                        protractor_1.browser.sleep(2000);
                        return [4, this.backButton.getAttribute('innerText')];
                    case 1:
                        back = _a.sent();
                        expect('Back').to.equal(back);
                        return [4, this.backButton.click()];
                    case 2:
                        _a.sent();
                        return [4, log4jsConfig_1.log4jsConfig.Log().debug("Click on Back Button verify ::" + back)];
                    case 3:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    return owner;
}());
exports.owner = owner;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3duZXJQYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vUGFnZU9iamVjdC9vd25lclBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUNBQWdFO0FBQ2hFLDBEQUF3RDtBQUNoRCxJQUFBLE1BQU0sR0FBSyxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQXBCLENBQW9CO0FBQzFCLElBQUEsTUFBTSxHQUFLLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBcEIsQ0FBb0I7QUFDbEMsSUFBSSxFQUFFLEdBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFBO0FBRXBCLElBQUksRUFBRSxHQUFHLCtCQUFrQixDQUFDO0FBRTVCO0lBQUE7UUFFWSxTQUFJLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLCtCQUErQixDQUFDLENBQUMsQ0FBQTtRQUNyRCxjQUFTLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQTtRQUMzQyxjQUFTLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLG1DQUFtQyxDQUFDLENBQUMsQ0FBQTtRQUM5RCxhQUFRLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLG9DQUFvQyxDQUFDLENBQUMsQ0FBQTtRQUM5RCxhQUFRLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLG9DQUFvQyxDQUFDLENBQUMsQ0FBQTtRQUM5RCxPQUFFLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUE7UUFDOUIsT0FBRSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFBO1FBQzdCLFlBQU8sR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENB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