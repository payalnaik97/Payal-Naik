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
var addVeteri_1 = require("../PageObject/addVeteri");
var ownerPage_1 = require("../PageObject/ownerPage");
var setDefaultTimeout = require('cucumber').setDefaultTimeout;
setDefaultTimeout(90 * 1000);
var ven = new addVeteri_1.venterinans;
var home = new ownerPage_1.owner;
cucumber_1.Given('User is on Venterinans page', function () {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    protractor_1.browser.get('http://petclinicui.e46708b92c054086909b.eastus.aksapp.io/petclinic/welcome');
                    return [4, home.goToHome()];
                case 1:
                    _a.sent();
                    return [4, home.verifyHomePageTiltle()];
                case 2:
                    _a.sent();
                    return [4, ven.goToVen()];
                case 3:
                    _a.sent();
                    protractor_1.browser.sleep(2000);
                    return [2];
            }
        });
    });
});
cucumber_1.When('User click on Venterinans tab and select add new from dropdown', function () {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, ven.newVen()];
                case 1:
                    _a.sent();
                    return [4, ven.verifyVenteinansTiltle()];
                case 2:
                    _a.sent();
                    return [2];
            }
        });
    });
});
cucumber_1.When('User enter valid details', function () {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, ven.addNewOwnerInfo()];
                case 1:
                    _a.sent();
                    protractor_1.browser.sleep(3000);
                    return [2];
            }
        });
    });
});
cucumber_1.Then('User should be navigate on Venterinans page and added Venterinans should be saved', function () {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    protractor_1.browser.sleep(3000);
                    protractor_1.browser.refresh();
                    return [4, ven.allVenteinansTiltle()];
                case 1:
                    _a.sent();
                    protractor_1.browser.sleep(3000);
                    return [4, ven.newlyAddedVenDetails()];
                case 2:
                    _a.sent();
                    return [2];
            }
        });
    });
});
cucumber_1.Given('User is on New Venterinans page', { timeout: 100000 }, function () {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    protractor_1.browser.sleep(5000);
                    return [4, ven.goToVen()];
                case 1:
                    _a.sent();
                    return [4, ven.newVen()];
                case 2:
                    _a.sent();
                    return [2];
            }
        });
    });
});
cucumber_1.When('User click on Back Button', function () {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, ven.clickVenBackButton()];
                case 1:
                    _a.sent();
                    return [2];
            }
        });
    });
});
cucumber_1.Then('User should be navigate on Venterinans page', function () {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    protractor_1.browser.sleep(3000);
                    return [4, ven.allVenteinansTiltle()];
                case 1:
                    _a.sent();
                    return [2];
            }
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcGFkZFZlbnRlcmlhbnJpYW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9TdGVwRGVmaW5pdGlvbi9zdGVwYWRkVmVudGVyaWFucmlhbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHFDQUE2QztBQUM3Qyx5Q0FBcUM7QUFDckMscURBQXNEO0FBQ3RELHFEQUFnRDtBQUMxQyxJQUFBLGlCQUFpQixHQUFLLE9BQU8sQ0FBQyxVQUFVLENBQUMsa0JBQXhCLENBQXlCO0FBQ2hELGlCQUFpQixDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztBQUU3QixJQUFJLEdBQUcsR0FBRyxJQUFJLHVCQUFXLENBQUE7QUFDekIsSUFBSSxJQUFJLEdBQUMsSUFBSSxpQkFBSyxDQUFBO0FBRWhCLGdCQUFLLENBQUMsNkJBQTZCLEVBQUU7Ozs7O29CQUNqQyxvQkFBTyxDQUFDLEdBQUcsQ0FBQyw0RUFBNEUsQ0FBQyxDQUFBO29CQUN6RixXQUFNLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBQTs7b0JBQXJCLFNBQXFCLENBQUE7b0JBQ3JCLFdBQU0sSUFBSSxDQUFDLG9CQUFvQixFQUFFLEVBQUE7O29CQUFqQyxTQUFpQyxDQUFBO29CQUNqQyxXQUFNLEdBQUcsQ0FBQyxPQUFPLEVBQUUsRUFBQTs7b0JBQW5CLFNBQW1CLENBQUM7b0JBQ3BCLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBOzs7OztDQUV0QixDQUFDLENBQUM7QUFHSCxlQUFJLENBQUMsZ0VBQWdFLEVBQUU7Ozs7d0JBQ3JFLFdBQU0sR0FBRyxDQUFDLE1BQU0sRUFBRSxFQUFBOztvQkFBbEIsU0FBa0IsQ0FBQTtvQkFFbEIsV0FBTSxHQUFHLENBQUMsc0JBQXNCLEVBQUUsRUFBQTs7b0JBQWxDLFNBQWtDLENBQUE7Ozs7O0NBRW5DLENBQUMsQ0FBQztBQUdILGVBQUksQ0FBQywwQkFBMEIsRUFBRTs7Ozt3QkFDL0IsV0FBTSxHQUFHLENBQUMsZUFBZSxFQUFFLEVBQUE7O29CQUEzQixTQUEyQixDQUFBO29CQUMzQixvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTs7Ozs7Q0FDcEIsQ0FBQyxDQUFDO0FBRUYsZUFBSSxDQUFDLG1GQUFtRixFQUFFOzs7OztvQkFDekYsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7b0JBQ25CLG9CQUFPLENBQUMsT0FBTyxFQUFFLENBQUE7b0JBQ2pCLFdBQU0sR0FBRyxDQUFDLG1CQUFtQixFQUFFLEVBQUE7O29CQUEvQixTQUErQixDQUFBO29CQUMvQixvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTtvQkFDbkIsV0FBTSxHQUFHLENBQUMsb0JBQW9CLEVBQUUsRUFBQTs7b0JBQWhDLFNBQWdDLENBQUE7Ozs7O0NBQ2hDLENBQUMsQ0FBQztBQUtKLGdCQUFLLENBQUMsaUNBQWlDLEVBQUMsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7Ozs7O29CQUMzRCxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTtvQkFDbkIsV0FBTSxHQUFHLENBQUMsT0FBTyxFQUFFLEVBQUE7O29CQUFuQixTQUFtQixDQUFBO29CQUNuQixXQUFNLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBQTs7b0JBQWxCLFNBQWtCLENBQUE7Ozs7O0NBQ25CLENBQUMsQ0FBQztBQUdILGVBQUksQ0FBQywyQkFBMkIsRUFBRTs7Ozt3QkFDbEMsV0FBTSxHQUFHLENBQUMsa0JBQWtCLEVBQUUsRUFBQTs7b0JBQTlCLFNBQThCLENBQUE7Ozs7O0NBQzdCLENBQUMsQ0FBQztBQUdILGVBQUksQ0FBQyw2Q0FBNkMsRUFBRTs7Ozs7b0JBQ2xELG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO29CQUNuQixXQUFNLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSxFQUFBOztvQkFBL0IsU0FBK0IsQ0FBQTs7Ozs7Q0FFaEMsQ0FBQyxDQUFDIn0=