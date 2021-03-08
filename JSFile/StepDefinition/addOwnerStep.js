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
var ownerPage_1 = require("../PageObject/ownerPage");
var expect = require('chai').expect;
var setDefaultTimeout = require('cucumber').setDefaultTimeout;
setDefaultTimeout(90 * 1000);
var ec = protractor_1.ExpectedConditions;
var home = new ownerPage_1.owner();
cucumber_1.Given('User is on petclininc home page and home page title should be Welcome to PetClinic', { timeout: 100000 }, function () {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, protractor_1.browser.get("http://petclinicui.e46708b92c054086909b.eastus.aksapp.io/petclinic/welcome")];
                case 1:
                    _a.sent();
                    protractor_1.browser.sleep(2000);
                    return [4, home.goToHome()];
                case 2:
                    _a.sent();
                    return [4, home.verifyHomePageTiltle()];
                case 3:
                    _a.sent();
                    return [2];
            }
        });
    });
});
cucumber_1.When('User clicks on owners tab and selects Add New dropdown menu', function () {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, home.clickonOwner()];
                case 1:
                    _a.sent();
                    return [4, home.clickonAddOwner()];
                case 2:
                    _a.sent();
                    protractor_1.browser.sleep(2000);
                    return [2];
            }
        });
    });
});
cucumber_1.When('User enter valid owners details as {string} {string} {string} {string} {string} and AddOwner button should get enable', function (fn, ln, addr, city, tel) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, home.addNewOwnerInfo(fn, ln, addr, city, tel)];
                case 1:
                    _a.sent();
                    protractor_1.browser.sleep(2000);
                    return [2];
            }
        });
    });
});
cucumber_1.Then('After Clicking on AddOwner button user should be navigated to Owners page and added owner should be saved', function () {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, home.verifyOwnerPageTitle()];
                case 1:
                    _a.sent();
                    return [4, protractor_1.browser.refresh()];
                case 2:
                    _a.sent();
                    return [4, home.newlyAddedOwnerDetails()];
                case 3:
                    _a.sent();
                    return [2];
            }
        });
    });
});
cucumber_1.When('User click on Back button on Add New Owner page', function () {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    protractor_1.browser.sleep(2000);
                    return [4, home.clickonOwner()];
                case 1:
                    _a.sent();
                    return [4, home.clickonAddOwner()];
                case 2:
                    _a.sent();
                    protractor_1.browser.sleep(2000);
                    return [4, home.clickOnBackButton()];
                case 3:
                    _a.sent();
                    return [2];
            }
        });
    });
});
cucumber_1.Then('User should navigate to All Owner list page', function () {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, home.verifyOwnerPageTitle()];
                case 1:
                    _a.sent();
                    return [2];
            }
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkT3duZXJTdGVwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vU3RlcERlZmluaXRpb24vYWRkT3duZXJTdGVwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUNBQXlDO0FBQ3pDLHlDQUF3RDtBQUN4RCxxREFBOEM7QUFDdEMsSUFBQSxNQUFNLEdBQUssT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFwQixDQUFvQjtBQUU3QixJQUFBLGlCQUFpQixHQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUMsa0JBQXZCLENBQXdCO0FBQzlDLGlCQUFpQixDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztBQUU3QixJQUFJLEVBQUUsR0FBRywrQkFBa0IsQ0FBQztBQUM1QixJQUFJLElBQUksR0FBQyxJQUFJLGlCQUFLLEVBQUUsQ0FBQTtBQUVwQixnQkFBSyxDQUFDLG9GQUFvRixFQUFFLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFOzs7O3dCQUM3RyxXQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLDRFQUE0RSxDQUFDLEVBQUE7O29CQUEvRixTQUErRixDQUFBO29CQUMvRixvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTtvQkFDbkIsV0FBTSxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUE7O29CQUFyQixTQUFxQixDQUFBO29CQUNyQixXQUFNLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxFQUFBOztvQkFBakMsU0FBaUMsQ0FBQTs7Ozs7Q0FDbkMsQ0FBQyxDQUFDO0FBQ0gsZUFBSSxDQUFDLDZEQUE2RCxFQUFFOzs7O3dCQUNsRSxXQUFNLElBQUksQ0FBQyxZQUFZLEVBQUUsRUFBQTs7b0JBQXpCLFNBQXlCLENBQUE7b0JBQ3pCLFdBQU0sSUFBSSxDQUFDLGVBQWUsRUFBRSxFQUFBOztvQkFBNUIsU0FBNEIsQ0FBQTtvQkFDNUIsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7Ozs7O0NBQ3BCLENBQUMsQ0FBQztBQUNILGVBQUksQ0FBQyx1SEFBdUgsRUFBRSxVQUFnQixFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRzs7Ozt3QkFDbkssV0FBTSxJQUFJLENBQUMsZUFBZSxDQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxHQUFHLENBQUMsRUFBQTs7b0JBQS9DLFNBQStDLENBQUE7b0JBQy9DLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBOzs7OztDQUNyQixDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsMkdBQTJHLEVBQUU7Ozs7d0JBRWhILFdBQU0sSUFBSSxDQUFDLG9CQUFvQixFQUFFLEVBQUE7O29CQUFqQyxTQUFpQyxDQUFBO29CQUNqQyxXQUFNLG9CQUFPLENBQUMsT0FBTyxFQUFFLEVBQUE7O29CQUF2QixTQUF1QixDQUFBO29CQUN2QixXQUFNLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxFQUFBOztvQkFBbkMsU0FBbUMsQ0FBQTs7Ozs7Q0FFcEMsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLGlEQUFpRCxFQUFFOzs7OztvQkFDdEQsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7b0JBQ25CLFdBQU0sSUFBSSxDQUFDLFlBQVksRUFBRSxFQUFBOztvQkFBekIsU0FBeUIsQ0FBQTtvQkFDekIsV0FBTSxJQUFJLENBQUMsZUFBZSxFQUFFLEVBQUE7O29CQUE1QixTQUE0QixDQUFBO29CQUM1QixvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTtvQkFDbkIsV0FBTSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsRUFBQTs7b0JBQTlCLFNBQThCLENBQUE7Ozs7O0NBRS9CLENBQUMsQ0FBQztBQUdILGVBQUksQ0FBQyw2Q0FBNkMsRUFBRTs7Ozt3QkFDbEQsV0FBTSxJQUFJLENBQUMsb0JBQW9CLEVBQUUsRUFBQTs7b0JBQWpDLFNBQWlDLENBQUE7Ozs7O0NBQ2xDLENBQUMsQ0FBQyJ9