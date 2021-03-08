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
exports.venterinans = void 0;
var protractor_1 = require("protractor");
var log4jsConfig_1 = require("../ConfigLog/log4jsConfig");
var expect = require('chai').expect;
var ec = protractor_1.ExpectedConditions;
var venterinans = (function () {
    function venterinans() {
        this.verterinansTab = protractor_1.element(protractor_1.by.css('ul.nav.navbar-nav>li:nth-child(3)'));
        this.addVenterinans = protractor_1.element(protractor_1.by.css('[href="/petclinic/vets/add"]'));
        this.venterinansTitle = protractor_1.element(protractor_1.by.css('.container.xd-container>h2'));
        this.vFirstname = protractor_1.element(protractor_1.by.id('firstName'));
        this.vLastname = protractor_1.element(protractor_1.by.id('lastName'));
        this.vType = protractor_1.element(protractor_1.by.name('specialties'));
        this.vDropType = protractor_1.element(protractor_1.by.css('select option:nth-child(3)'));
        this.vAllDropType = protractor_1.element.all(protractor_1.by.css('#specialties option'));
        this.saveVenterinans = protractor_1.element(protractor_1.by.css("button[type='submit']"));
        this.venList = protractor_1.element(protractor_1.by.css('.table.table-striped tbody'));
        this.veterinarians = protractor_1.element(protractor_1.by.css('.container-fluid .container.xd-container > h2'));
        this.enable = protractor_1.element(protractor_1.by.css('.table.table-striped thead tr'));
        this.backButton1 = protractor_1.element(protractor_1.by.css('.btn.btn-default'));
    }
    venterinans.prototype.goToVen = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.verterinansTab.click()];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    venterinans.prototype.verifyVenteinansTiltle = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.venterinansTitle.getAttribute('innerText').then(function (title) {
                            expect(title).to.equal('New Veterinarian');
                            console.log("Veterinarian Page  :: " + title);
                            log4jsConfig_1.log4jsConfig.Log().debug("Veterinarian Page Verify :: " + title);
                        })];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    venterinans.prototype.allVenteinansTiltle = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, protractor_1.browser.wait(ec.presenceOf(this.veterinarians), 20000, 'Taking too long to load')];
                    case 1:
                        _a.sent();
                        return [4, this.veterinarians.getAttribute('innerText').then(function (head) {
                                expect(head).to.equal('Veterinarians');
                                console.log("All Veterinarian Page  :: " + head);
                                log4jsConfig_1.log4jsConfig.Log().debug("Veterinarian Page  Verify:: " + head);
                            })];
                    case 2:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    venterinans.prototype.newVen = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, protractor_1.browser.wait(ec.presenceOf(this.addVenterinans), 30000, 'Taking too long to load')];
                    case 1:
                        _a.sent();
                        log4jsConfig_1.log4jsConfig.Log().debug("CLick on Add New button to add New Veterinarian");
                        return [4, this.addVenterinans.click()];
                    case 2:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    venterinans.prototype.addNewOwnerInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            var dcount, i, _a, _b, _c, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0: return [4, this.vFirstname.sendKeys('Lucy')];
                    case 1:
                        _e.sent();
                        expect('Lucy').to.have.lengthOf.above(2);
                        return [4, log4jsConfig_1.log4jsConfig.Log().debug("Firstname is greater than 2 character :: Lucy")];
                    case 2:
                        _e.sent();
                        return [4, this.vLastname.sendKeys('Paterson')];
                    case 3:
                        _e.sent();
                        expect('Paterson').to.have.lengthOf.above(2);
                        return [4, log4jsConfig_1.log4jsConfig.Log().debug("Lastname is greater than 2 character :: Paterson")];
                    case 4:
                        _e.sent();
                        protractor_1.browser.sleep(3000);
                        return [4, this.vType.click()];
                    case 5:
                        _e.sent();
                        protractor_1.browser.sleep(2000);
                        return [4, this.vDropType.click()];
                    case 6:
                        _e.sent();
                        return [4, this.vAllDropType.count()];
                    case 7:
                        dcount = _e.sent();
                        log4jsConfig_1.log4jsConfig.Log().debug("List of Specialist Type::");
                        i = 0;
                        _e.label = 8;
                    case 8:
                        if (!(i < dcount)) return [3, 12];
                        _b = (_a = log4jsConfig_1.log4jsConfig.Log()).debug;
                        return [4, this.vAllDropType.get(i).getText()];
                    case 9:
                        _b.apply(_a, [_e.sent()]);
                        _d = (_c = console).log;
                        return [4, this.vAllDropType.get(i).getText()];
                    case 10:
                        _d.apply(_c, [_e.sent()]);
                        _e.label = 11;
                    case 11:
                        i++;
                        return [3, 8];
                    case 12:
                        protractor_1.browser.sleep(2000);
                        log4jsConfig_1.log4jsConfig.Log().debug("Enter Fisrt ,last name ,type");
                        return [4, this.saveVenterinans.click()];
                    case 13:
                        _e.sent();
                        log4jsConfig_1.log4jsConfig.Log().debug("Save Veterinarian");
                        return [2];
                }
            });
        });
    };
    venterinans.prototype.newlyAddedVenDetails = function () {
        return __awaiter(this, void 0, void 0, function () {
            var venDetails, venName, str, FN, LN, fLN, str1, str2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, protractor_1.browser.wait(ec.visibilityOf(this.venList), 20000, 'Taking too long to load')];
                    case 1:
                        _a.sent();
                        venDetails = this.venList.all(protractor_1.by.tagName('tr')).last();
                        return [4, protractor_1.browser.actions().mouseMove(venDetails).perform()];
                    case 2:
                        _a.sent();
                        return [4, venDetails.getText()];
                    case 3:
                        venName = _a.sent();
                        str = venName.split(' ');
                        FN = str[0];
                        LN = str[1];
                        fLN = LN.split('\n');
                        str1 = fLN[0];
                        str2 = fLN[1];
                        console.log(str);
                        console.log(fLN);
                        return [4, protractor_1.browser.wait(ec.elementToBeClickable(venDetails), 20000, 'Element taking too long to appear in the DOM')];
                    case 4:
                        _a.sent();
                        return [4, expect('Lucy').to.equal(FN)];
                    case 5:
                        _a.sent();
                        return [4, expect('Paterson').to.equal(str1)];
                    case 6:
                        _a.sent();
                        return [4, expect('Radiology').to.equal(str2)];
                    case 7:
                        _a.sent();
                        log4jsConfig_1.log4jsConfig.Log().debug("Added Veterinarians Details verify ::" + FN + " " + str1 + " " + str2);
                        return [2];
                }
            });
        });
    };
    venterinans.prototype.clickVenBackButton = function () {
        return __awaiter(this, void 0, void 0, function () {
            var back;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        protractor_1.browser.refresh();
                        return [4, this.backButton1.getAttribute('innerText')];
                    case 1:
                        back = _a.sent();
                        expect('< Back').to.equal(back);
                        return [4, this.backButton1.click()];
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
    return venterinans;
}());
exports.venterinans = venterinans;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkVmV0ZXJpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vUGFnZU9iamVjdC9hZGRWZXRlcmkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUNBQWdFO0FBQ2hFLDBEQUF3RDtBQUNoRCxJQUFBLE1BQU0sR0FBSyxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQXBCLENBQW9CO0FBRWxDLElBQUksRUFBRSxHQUFHLCtCQUFrQixDQUFDO0FBRzVCO0lBQUE7UUFDWSxtQkFBYyxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDLENBQUE7UUFDbkUsbUJBQWMsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsOEJBQThCLENBQUMsQ0FBQyxDQUFBO1FBQzlELHFCQUFnQixHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDLENBQUE7UUFDOUQsZUFBVSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFBO1FBQ3RDLGNBQVMsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQTtRQUNwQyxVQUFLLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUE7UUFDckMsY0FBUyxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDLENBQUE7UUFDdkQsaUJBQVksR0FBQyxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQTtRQUN2RCxvQkFBZSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxD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