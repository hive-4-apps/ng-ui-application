"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var UIApplicationComponent = (function () {
    function UIApplicationComponent(elRef) {
        this.elHTML = elRef.nativeElement;
        this.icon = null;
        this.title = null;
        this.header = true;
        this.footer = false;
        this.layoutType = layouTypeEnums.SPLITTER;
        this.direction = DirectionEnums.ROW;
    }
    UIApplicationComponent.prototype.ngOnInit = function () {
        console.log(this.elHTML.getAttribute("icon"));
        this.elHTML.setAttribute("direction", this.direction.toString());
    };
    UIApplicationComponent.prototype.ngAfterViewInit = function () {
        this.widthHeightApply();
    };
    UIApplicationComponent.prototype.widthHeightApply = function () {
        var offsetWidth = document.body.clientWidth;
        var offsetHeight = document.body.clientHeight;
        var mainWidth = offsetWidth.toString() + "px";
        //application height
        var applicationHeight = offsetHeight.toString() + "px";
        this.elHTML.style.height = applicationHeight;
        //Main width
        document.getElementById("main-content").style.width = mainWidth;
        // Main height
        if (this.header) {
            offsetHeight = offsetHeight - 33; //32 + 1px border
        }
        if (this.footer) {
            offsetHeight = offsetHeight - 33; //32 + 1px border
        }
        var mainHeight = offsetHeight.toString() + "px";
        document.getElementById("main-content").style.height = mainHeight;
    };
    UIApplicationComponent.prototype.getSectionArray = function (n) {
        var items = [];
        for (var i = 1; i <= n; i++) {
            items.push(i);
        }
        return items;
    };
    UIApplicationComponent.prototype.switchDirection = function (childDirection) {
        var styles;
        styles = {};
        var switchedDirection;
        switchedDirection = (childDirection === "COLUMN") ? "ROW" : "COLUMN";
        styles["flex-direction"] = switchedDirection;
        return styles;
    };
    return UIApplicationComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", URL)
], UIApplicationComponent.prototype, "icon", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], UIApplicationComponent.prototype, "title", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], UIApplicationComponent.prototype, "header", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], UIApplicationComponent.prototype, "footer", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], UIApplicationComponent.prototype, "layoutType", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], UIApplicationComponent.prototype, "direction", void 0);
UIApplicationComponent = __decorate([
    core_1.Component({
        moduleId: typeof module.id === 'string' ? module.id : null,
        selector: 'ui-application',
        styles: ["section {\n  display: flex;\n  flex: 1;\n  flex-direction: column; }\n  section header {\n    display: flex;\n    align-items: center;\n    flex-direction: row;\n    height: 32px; }\n    section header > * {\n      margin-left: 5px;\n      display: inline-flex; }\n    section header h1 {\n      font-size: 1em;\n      margin-top: 0;\n      margin-bottom: 0; }\n  section main {\n    display: flex;\n    flex: 1; }\n    section main > div {\n      display: flex;\n      flex: 1; }\n  section footer {\n    display: flex;\n    align-items: center;\n    flex-direction: row;\n    height: 32px; }\n    section footer > * {\n      margin-left: 5px;\n      display: inline-flex; }\n\nsection {\n  height: inherit;\n  width: inherit; }\n  section > header {\n    background-color: #f0f0f0;\n    color: #23282d;\n    border-bottom: 1px solid #060708;\n    flex-shrink: 0; }\n    section > header > img {\n      height: 24px; }\n    section > header > h1 {\n      color: #23282d;\n      font-size: 1em; }\n  section > main {\n    background-color: #23282d;\n    overflow: auto;\n    /*css in child component*/ }\n  section > footer {\n    border-top: 1px solid #060708;\n    background-color: #f0f0f0;\n    color: #23282d;\n    flex-shrink: 0; }\n"],
        template: "<section>\n\t<header *ngIf=\"header\">\n    \t<img *ngIf=\"icon\" src=\"{{icon}}\"/><h1 *ngIf=\"title\">{{title}}</h1>\n    </header>\n    <main id=\"main-content\" [ngStyle]=\"{'flex-direction' : direction}\">\n        <ng-content></ng-content>\n    </main>\n    <footer *ngIf=\"footer\"></footer>\n</section>\n",
        host: {
            '(window:resize)': 'widthHeightApply()'
        }
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], UIApplicationComponent);
exports.UIApplicationComponent = UIApplicationComponent;
var layouTypeEnums;
(function (layouTypeEnums) {
    layouTypeEnums[layouTypeEnums["DRAWER"] = "drawer"] = "DRAWER";
    layouTypeEnums[layouTypeEnums["SPLITTER"] = "splitter"] = "SPLITTER";
})(layouTypeEnums = exports.layouTypeEnums || (exports.layouTypeEnums = {}));
var DirectionEnums;
(function (DirectionEnums) {
    DirectionEnums[DirectionEnums["COLUMN"] = "column"] = "COLUMN";
    DirectionEnums[DirectionEnums["ROW"] = "row"] = "ROW";
})(DirectionEnums = exports.DirectionEnums || (exports.DirectionEnums = {}));
//# sourceMappingURL=application.component.js.map