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
var cucumber_1 = require("cucumber");
var protractor_1 = require("protractor");
var addDeletePet_1 = require("../PageObject/addDeletePet");
var ownerPage_1 = require("../PageObject/ownerPage");
var log4jsConfig_1 = require("../ConfigLog/log4jsConfig");
var cucumber_2 = require("cucumber");
var ec = protractor_1.ExpectedConditions;
var pettype = new addDeletePet_1.pet();
var home = new ownerPage_1.owner();
var fs = require('fs');
cucumber_1.Given('User is on PetType page', function () {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, protractor_1.browser.get("http://petclinicui.e46708b92c054086909b.eastus.aksapp.io/petclinic/welcome")];
                case 1:
                    _a.sent();
                    log4jsConfig_1.log4jsConfig.Log().info('Everything started properly.');
                    return [4, home.verifyHomePageTiltle()];
                case 2:
                    _a.sent();
                    return [4, protractor_1.browser.sleep(2000)];
                case 3:
                    _a.sent();
                    return [4, pettype.goToPetType()];
                case 4:
                    _a.sent();
                    log4jsConfig_1.log4jsConfig.Log().debug("Go to PetType Page ");
                    return [4, protractor_1.browser.sleep(1000)];
                case 5:
                    _a.sent();
                    return [4, pettype.verifyPetPage()];
                case 6:
                    _a.sent();
                    return [4, pettype.verifyEditDeleteButton()];
                case 7:
                    _a.sent();
                    return [2];
            }
        });
    });
});
cucumber_1.When('User click on Add button on PetType page', function () {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, pettype.addPet()];
                case 1:
                    _a.sent();
                    return [4, protractor_1.browser.sleep(1000)];
                case 2:
                    _a.sent();
                    return [2];
            }
        });
    });
});
cucumber_1.Then('User should be able to add new PetType as {string} on PetType page and see added PetType', function (petname) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, pettype.enterPetName(petname)];
                case 1:
                    _a.sent();
                    return [4, protractor_1.browser.sleep(2000)];
                case 2:
                    _a.sent();
                    protractor_1.browser.refresh();
                    console.log("PetType present after adding PetType::");
                    protractor_1.browser.sleep(3000);
                    return [4, log4jsConfig_1.log4jsConfig.Log().info("PetType present after adding PetType::")];
                case 3:
                    _a.sent();
                    return [4, pettype.verifyPetTypeList()];
                case 4:
                    _a.sent();
                    protractor_1.browser.sleep(2000);
                    return [4, log4jsConfig_1.log4jsConfig.Log().debug("PetType added Successfully")];
                case 5:
                    _a.sent();
                    protractor_1.browser.sleep(3000);
                    return [2];
            }
        });
    });
});
cucumber_1.When('User click on Delete button on PetType page', function () {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, pettype.deletePetType()];
                case 1:
                    _a.sent();
                    protractor_1.browser.refresh();
                    protractor_1.browser.sleep(3000);
                    return [2];
            }
        });
    });
});
cucumber_1.Then('User should able to see selected PetType get deleted', function () {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("PetType present after deleting PetType::");
                    return [4, log4jsConfig_1.log4jsConfig.Log().info("PetType present after deleting PetType::")];
                case 1:
                    _a.sent();
                    return [4, pettype.verifyPetTypeList()];
                case 2:
                    _a.sent();
                    return [4, log4jsConfig_1.log4jsConfig.Log().debug("PetType deleted Successfully")];
                case 3:
                    _a.sent();
                    return [2];
            }
        });
    });
});
cucumber_1.When('User click on Home button on PetType Page', function () {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, pettype.goToHome()];
                case 1:
                    _a.sent();
                    protractor_1.browser.refresh();
                    protractor_1.browser.sleep(2000);
                    return [2];
            }
        });
    });
});
cucumber_1.Then('User should navigate to Home Page', function () {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, home.verifyHomePageTiltle()];
                case 1:
                    _a.sent();
                    protractor_1.browser.sleep(1000);
                    return [2];
            }
        });
    });
});
cucumber_1.When('User click on Edit button of first PetType', function () {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, pettype.editPet()];
                case 1:
                    _a.sent();
                    protractor_1.browser.sleep(3000);
                    return [2];
            }
        });
    });
});
cucumber_1.Then('User should navigate to Edit PetType page and able to edit selected PetType and enter new Name as {string} on PetType page', function (newPetType) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, pettype.verifyEditPetPage()];
                case 1:
                    _a.sent();
                    return [4, pettype.enterNewPetName(newPetType)];
                case 2:
                    _a.sent();
                    return [4, protractor_1.browser.sleep(2000)];
                case 3:
                    _a.sent();
                    return [2];
            }
        });
    });
});
cucumber_1.Then('User should click on Update button', function () {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, pettype.clickonUpdate()];
                case 1:
                    _a.sent();
                    protractor_1.browser.refresh();
                    protractor_1.browser.sleep(2000);
                    return [2];
            }
        });
    });
});
cucumber_1.Then('User should able to see PetType name upadted to new', function () {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, protractor_1.browser.refresh()];
                case 1:
                    _a.sent();
                    return [4, pettype.goToPetType()];
                case 2:
                    _a.sent();
                    return [4, protractor_1.browser.sleep(3000)];
                case 3:
                    _a.sent();
                    return [4, log4jsConfig_1.log4jsConfig.Log().info("PetType present after editing PetType::")];
                case 4:
                    _a.sent();
                    return [4, pettype.verifyPetTypeList()];
                case 5:
                    _a.sent();
                    return [4, log4jsConfig_1.log4jsConfig.Log().debug("PetType edited Successfully")];
                case 6:
                    _a.sent();
                    return [2];
            }
        });
    });
});
cucumber_2.Before(function () {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, protractor_1.browser.manage().deleteAllCookies()];
                case 1:
                    _a.sent();
                    return [2];
            }
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcFBldFR5cGVBZGREZWxldGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9TdGVwRGVmaW5pdGlvbi9zdGVwUGV0VHlwZUFkZERlbGV0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFDQUE2QztBQUM3Qyx5Q0FBd0Q7QUFDeEQsMkRBQWlEO0FBQ2pELHFEQUE4QztBQUM5QywwREFBd0Q7QUFDeEQscUNBQTREO0FBRTVELElBQUksRUFBRSxHQUFHLCtCQUFrQixDQUFDO0FBQzVCLElBQUksT0FBTyxHQUFDLElBQUksa0JBQUcsRUFBRSxDQUFBO0FBQ3JCLElBQUksSUFBSSxHQUFDLElBQUksaUJBQUssRUFBRSxDQUFBO0FBQ3BCLElBQUksRUFBRSxHQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQTtBQUdwQixnQkFBSyxDQUFDLHlCQUF5QixFQUFFOzs7O3dCQUMvQixXQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLDRFQUE0RSxDQUFDLEVBQUE7O29CQUEvRixTQUErRixDQUFBO29CQUMvRiwyQkFBWSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxDQUFBO29CQUN2RCxXQUFNLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxFQUFBOztvQkFBakMsU0FBaUMsQ0FBQTtvQkFDakMsV0FBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBQTs7b0JBQXpCLFNBQXlCLENBQUE7b0JBQ3pCLFdBQU0sT0FBTyxDQUFDLFdBQVcsRUFBRSxFQUFBOztvQkFBM0IsU0FBMkIsQ0FBQTtvQkFDM0IsMkJBQVksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMscUJBQXFCLENBQUMsQ0FBQTtvQkFDL0MsV0FBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBQTs7b0JBQXpCLFNBQXlCLENBQUE7b0JBQ3pCLFdBQU0sT0FBTyxDQUFDLGFBQWEsRUFBRSxFQUFBOztvQkFBN0IsU0FBNkIsQ0FBQTtvQkFDN0IsV0FBTSxPQUFPLENBQUMsc0JBQXNCLEVBQUUsRUFBQTs7b0JBQXRDLFNBQXNDLENBQUE7Ozs7O0NBR3ZDLENBQUMsQ0FBQztBQUVELGVBQUksQ0FBQywwQ0FBMEMsRUFBRTs7Ozt3QkFDL0MsV0FBTSxPQUFPLENBQUMsTUFBTSxFQUFFLEVBQUE7O29CQUF0QixTQUFzQixDQUFBO29CQUN0QixXQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFBOztvQkFBekIsU0FBeUIsQ0FBQTs7Ozs7Q0FDMUIsQ0FBQyxDQUFDO0FBSUgsZUFBSSxDQUFDLDBGQUEwRixFQUFFLFVBQWdCLE9BQU87Ozs7d0JBQ3RILFdBQU0sT0FBTyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsRUFBQTs7b0JBQW5DLFNBQW1DLENBQUE7b0JBQ25DLFdBQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUE7O29CQUF6QixTQUF5QixDQUFBO29CQUN6QixvQkFBTyxDQUFDLE9BQU8sRUFBRSxDQUFBO29CQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLHdDQUF3QyxDQUFDLENBQUM7b0JBQ3RELG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO29CQUNuQixXQUFNLDJCQUFZLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLHdDQUF3QyxDQUFDLEVBQUE7O29CQUF2RSxTQUF1RSxDQUFBO29CQUN2RSxXQUFNLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRSxFQUFBOztvQkFBakMsU0FBaUMsQ0FBQTtvQkFDakMsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7b0JBQ25CLFdBQU0sMkJBQVksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsNEJBQTRCLENBQUMsRUFBQTs7b0JBQTVELFNBQTRELENBQUE7b0JBQzVELG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBOzs7OztDQUVwQixDQUFDLENBQUM7QUFHSCxlQUFJLENBQUMsNkNBQTZDLEVBQUU7Ozs7d0JBQ2xELFdBQU0sT0FBTyxDQUFDLGFBQWEsRUFBRSxFQUFBOztvQkFBN0IsU0FBNkIsQ0FBQTtvQkFDN0Isb0JBQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQTtvQkFDakIsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7Ozs7O0NBRXBCLENBQUMsQ0FBQztBQUdILGVBQUksQ0FBQyxzREFBc0QsRUFBRTs7Ozs7b0JBQzNELE9BQU8sQ0FBQyxHQUFHLENBQUMsMENBQTBDLENBQUMsQ0FBQztvQkFDeEQsV0FBTSwyQkFBWSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQywwQ0FBMEMsQ0FBQyxFQUFBOztvQkFBekUsU0FBeUUsQ0FBQTtvQkFDekUsV0FBTSxPQUFPLENBQUMsaUJBQWlCLEVBQUUsRUFBQTs7b0JBQWpDLFNBQWlDLENBQUE7b0JBQ2pDLFdBQU0sMkJBQVksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsOEJBQThCLENBQUMsRUFBQTs7b0JBQTlELFNBQThELENBQUE7Ozs7O0NBRS9ELENBQUMsQ0FBQztBQUdILGVBQUksQ0FBQywyQ0FBMkMsRUFBRTs7Ozt3QkFDbEQsV0FBTSxPQUFPLENBQUMsUUFBUSxFQUFFLEVBQUE7O29CQUF4QixTQUF3QixDQUFBO29CQUN4QixvQkFBTyxDQUFDLE9BQU8sRUFBRSxDQUFBO29CQUNqQixvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTs7Ozs7Q0FFbEIsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLG1DQUFtQyxFQUFFOzs7O3dCQUN6QyxXQUFNLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxFQUFBOztvQkFBakMsU0FBaUMsQ0FBQTtvQkFDakMsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7Ozs7O0NBQ25CLENBQUMsQ0FBQztBQUtGLGVBQUksQ0FBQyw0Q0FBNEMsRUFBRTs7Ozt3QkFDbEQsV0FBTSxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQUE7O29CQUF2QixTQUF1QixDQUFBO29CQUN2QixvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTs7Ozs7Q0FHbkIsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLDRIQUE0SCxFQUFFLFVBQWdCLFVBQVU7Ozs7d0JBQzVKLFdBQU0sT0FBTyxDQUFDLGlCQUFpQixFQUFFLEVBQUE7O29CQUFqQyxTQUFpQyxDQUFBO29CQUNqQyxXQUFNLE9BQU8sQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLEVBQUE7O29CQUF6QyxTQUF5QyxDQUFBO29CQUN6QyxXQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFBOztvQkFBekIsU0FBeUIsQ0FBQTs7Ozs7Q0FDekIsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLG9DQUFvQyxFQUFFOzs7O3dCQUMxQyxXQUFNLE9BQU8sQ0FBQyxhQUFhLEVBQUUsRUFBQTs7b0JBQTdCLFNBQTZCLENBQUE7b0JBQzdCLG9CQUFPLENBQUMsT0FBTyxFQUFFLENBQUE7b0JBQ2pCLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBOzs7OztDQUNuQixDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMscURBQXFELEVBQUU7Ozs7d0JBQzFELFdBQU0sb0JBQU8sQ0FBQyxPQUFPLEVBQUUsRUFBQTs7b0JBQXZCLFNBQXVCLENBQUE7b0JBQ3ZCLFdBQU0sT0FBTyxDQUFDLFdBQVcsRUFBRSxFQUFBOztvQkFBM0IsU0FBMkIsQ0FBQTtvQkFDM0IsV0FBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBQTs7b0JBQXpCLFNBQXlCLENBQUE7b0JBQ3pCLFdBQU0sMkJBQVksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMseUNBQXlDLENBQUMsRUFBQTs7b0JBQXhFLFNBQXdFLENBQUE7b0JBQ3hFLFdBQU0sT0FBTyxDQUFDLGlCQUFpQixFQUFFLEVBQUE7O29CQUFqQyxTQUFpQyxDQUFBO29CQUNqQyxXQUFNLDJCQUFZLENBQUMsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLDZCQUE2QixDQUFDLEVBQUE7O29CQUE3RCxTQUE2RCxDQUFBOzs7OztDQUM5RCxDQUFDLENBQUM7QUFHSixpQkFBTSxDQUFDOzs7O3dCQUNMLFdBQU0sb0JBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxFQUFBOztvQkFBekMsU0FBeUMsQ0FBQTs7Ozs7Q0FDMUMsQ0FBQyxDQUFBIn0=