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
exports.pet = void 0;
var protractor_1 = require("protractor");
var log4jsConfig_1 = require("../ConfigLog/log4jsConfig");
var expect = require('chai').expect;
var ec = protractor_1.ExpectedConditions;
var pet = (function () {
    function pet() {
        this.petTypeTab = protractor_1.element(protractor_1.by.css('ul.nav.navbar-nav>li:nth-child(4)'));
        this.petPage = protractor_1.element(protractor_1.by.css('.container.xd-container > h2'));
        this.addPetButton = protractor_1.element(protractor_1.by.buttonText('Add'));
        this.addName = protractor_1.element(protractor_1.by.id('name'));
        this.savePet = protractor_1.element(protractor_1.by.css("button[type='submit']"));
        this.petList = protractor_1.element(protractor_1.by.css('.table.table-striped tbody'));
        this.petList1 = protractor_1.element.all(protractor_1.by.css('tbody tr'));
        this.deletePetButon = protractor_1.element(protractor_1.by.buttonText('Delete'));
        this.homeButton = protractor_1.element(protractor_1.by.buttonText('Home'));
        this.firstPet = protractor_1.element(protractor_1.by.css('tbody tr td'));
        this.editPetButon = protractor_1.element(protractor_1.by.buttonText('Edit'));
        this.editPageTitle = protractor_1.element(protractor_1.by.css('.container.xd-container > h2'));
        this.addnewName = protractor_1.element(protractor_1.by.id('name'));
        this.updatePet = protractor_1.element(protractor_1.by.css("button[type='submit']"));
    }
    pet.prototype.goToPetType = function () {
        return __awaiter(this, void 0, void 0, function () {
            var status, status1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.petTypeTab.click()];
                    case 1:
                        _a.sent();
                        return [4, log4jsConfig_1.log4jsConfig.Log().debug("Click  PetType Tab")];
                    case 2:
                        _a.sent();
                        return [4, this.addPetButton.isEnabled()];
                    case 3:
                        status = _a.sent();
                        expect(status).to.equal(true);
                        return [4, log4jsConfig_1.log4jsConfig.Log().debug("Add Button Enable")];
                    case 4:
                        _a.sent();
                        return [4, this.homeButton.isEnabled()];
                    case 5:
                        status1 = _a.sent();
                        expect(status1).to.equal(true);
                        return [4, log4jsConfig_1.log4jsConfig.Log().debug("Home Button Enable")];
                    case 6:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    pet.prototype.goToHome = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.homeButton.click()];
                    case 1:
                        _a.sent();
                        return [4, log4jsConfig_1.log4jsConfig.Log().debug("Home button Clickable")];
                    case 2:
                        _a.sent();
                        return [4, log4jsConfig_1.log4jsConfig.Log().debug("Go to Home Page")];
                    case 3:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    pet.prototype.verifyPetPage = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.petPage.getAttribute('innerText').then(function (title) {
                            expect(title).to.equal('Pet Types');
                            console.log("PetType Page ::" + title);
                            log4jsConfig_1.log4jsConfig.Log().debug("PetType Page Verify::" + title);
                        })];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    pet.prototype.verifyEditDeleteButton = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.editPetButon.getAttribute('innerText').then(function (edittitle) {
                            expect(edittitle).to.equal('Edit');
                            log4jsConfig_1.log4jsConfig.Log().debug("Edit button Enable");
                        })];
                    case 1:
                        _a.sent();
                        return [4, this.deletePetButon.getAttribute('innerText').then(function (deletetitle) {
                                expect(deletetitle).to.equal('Delete');
                                log4jsConfig_1.log4jsConfig.Log().debug("Delete button Enable");
                            })];
                    case 2:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    pet.prototype.addPet = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.addPetButton.click()];
                    case 1:
                        _a.sent();
                        return [4, log4jsConfig_1.log4jsConfig.Log().debug("Add button Clickable")];
                    case 2:
                        _a.sent();
                        return [4, log4jsConfig_1.log4jsConfig.Log().debug("Click on Add Button on PetType Page")];
                    case 3:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    pet.prototype.enterPetName = function (name) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.addName.sendKeys(name)];
                    case 1:
                        _a.sent();
                        return [4, log4jsConfig_1.log4jsConfig.Log().debug("PetType enter:" + name)];
                    case 2:
                        _a.sent();
                        protractor_1.browser.sleep(2000);
                        return [4, this.savePet.click()];
                    case 3:
                        _a.sent();
                        return [4, log4jsConfig_1.log4jsConfig.Log().debug("Save PetType")];
                    case 4:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    pet.prototype.verifyPetTypeList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var table, row, count, i, firstTD, firstdata;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        table = protractor_1.element(protractor_1.by.css('.table.table-striped tbody'));
                        row = table.$$("tr");
                        return [4, row.count()];
                    case 1:
                        count = _a.sent();
                        console.log("No of pet present-- " + count);
                        return [4, log4jsConfig_1.log4jsConfig.Log().debug("No of pet present::" + count)];
                    case 2:
                        _a.sent();
                        protractor_1.browser.sleep(3000);
                        i = 0;
                        _a.label = 3;
                    case 3:
                        if (!(i < count)) return [3, 6];
                        firstTD = row.get(i).$$("td");
                        firstdata = firstTD.get(0);
                        protractor_1.browser.wait(ec.presenceOf(firstdata), 5000);
                        return [4, firstdata.element(protractor_1.by.name('pettype_name')).getAttribute('value').then(function (title) {
                                console.log("PetType  ::" + title);
                                log4jsConfig_1.log4jsConfig.Log().debug("PetType::" + title);
                            })];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5:
                        i++;
                        return [3, 3];
                    case 6: return [2];
                }
            });
        });
    };
    pet.prototype.deletePetType = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        protractor_1.browser.sleep(5000);
                        protractor_1.browser.refresh();
                        return [4, this.firstPet.element(protractor_1.by.name('pettype_name')).getAttribute('value').then(function (petName) {
                                console.log("Deleted PetType Name ::" + petName);
                                log4jsConfig_1.log4jsConfig.Log().debug("Deleted PetType Name::" + petName);
                            })];
                    case 1:
                        _a.sent();
                        protractor_1.browser.sleep(2000);
                        return [4, this.deletePetButon.click()];
                    case 2:
                        _a.sent();
                        return [4, log4jsConfig_1.log4jsConfig.Log().debug("Delete PetType")];
                    case 3:
                        _a.sent();
                        protractor_1.browser.sleep(5000);
                        return [2];
                }
            });
        });
    };
    pet.prototype.editPet = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.editPetButon.click()];
                    case 1:
                        _a.sent();
                        return [4, log4jsConfig_1.log4jsConfig.Log().debug("Edit button Clickable")];
                    case 2:
                        _a.sent();
                        return [4, log4jsConfig_1.log4jsConfig.Log().debug("Click on Edit Button on PetType Page")];
                    case 3:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    pet.prototype.verifyEditPetPage = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.editPageTitle.getAttribute('innerText').then(function (edittitle) {
                            expect(edittitle).to.equal('Edit Pet Type');
                            console.log("Edit PetType Page ::" + edittitle);
                            log4jsConfig_1.log4jsConfig.Log().debug("Edit PetType Page Verify::" + edittitle);
                        })];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    pet.prototype.enterNewPetName = function (newName) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        protractor_1.browser.sleep(2000);
                        return [4, this.addnewName.getAttribute('innerText').then(function (oname) {
                                console.log("Old PetType Name ::" + oname);
                                log4jsConfig_1.log4jsConfig.Log().info("Edit PetType Page Verify::" + oname);
                            })];
                    case 1:
                        _a.sent();
                        protractor_1.browser.sleep(3000);
                        return [4, this.addnewName.clear()];
                    case 2:
                        _a.sent();
                        protractor_1.browser.sleep(3000);
                        return [4, this.addnewName.sendKeys(newName)];
                    case 3:
                        _a.sent();
                        return [4, log4jsConfig_1.log4jsConfig.Log().debug("New PetType enter:" + newName)];
                    case 4:
                        _a.sent();
                        protractor_1.browser.sleep(2000);
                        return [2];
                }
            });
        });
    };
    pet.prototype.clickonUpdate = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.updatePet.click()];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    return pet;
}());
exports.pet = pet;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkRGVsZXRlUGV0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vUGFnZU9iamVjdC9hZGREZWxldGVQZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUNBQWlGO0FBQ2pGLDBEQUF3RDtBQUVoRCxJQUFBLE1BQU0sR0FBSyxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQXBCLENBQW9CO0FBQ2xDLElBQUksRUFBRSxHQUFHLCtCQUFrQixDQUFDO0FBRzVCO0lBQUE7UUFFUSxlQUFVLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLG1DQUFtQyxDQUFDLENBQUMsQ0FBQTtRQUMvRCxZQUFPLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLDhCQUE4QixDQUFDLENBQUMsQ0FBQTtRQUN2RCxpQkFBWSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFBO1FBQzFDLFlBQU8sR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQTtRQUM5QixZQUFPLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQTtRQUNoRCxZQUFPLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLDRCQUE0QixDQUFDLENBQUMsQ0FBQTtRQUNyRCxhQUFRLEdBQUMsb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFBO1FBQ3hDLG1CQUFjLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUE7UUFDL0MsZUFBVSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FB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