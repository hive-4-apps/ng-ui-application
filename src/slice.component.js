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
var UISliceComponent = UISliceComponent_1 = (function () {
    function UISliceComponent(elRef) {
        this.elHTML = elRef.nativeElement;
        this.direction = "column";
    }
    UISliceComponent.prototype.ngAfterViewInit = function () {
        //direction for align items set dynamically.
        this.parentDirection = this.elHTML.parentElement.style.flexDirection;
        this.direction = UISliceComponent_1.switchStringDirection(this.parentDirection);
        //width|height ui-slices and ui-sections set dynamically.
        var slicesCount = this.elHTML.parentElement.childElementCount;
        var sliceStyle = this.elHTML.getAttribute("style");
        if (sliceStyle === null)
            sliceStyle = "";
        var parentStyle = this.elHTML.parentElement.getAttribute("style");
        if (parentStyle === null)
            parentStyle = "";
        var divUISection = this.elHTML.children.item(0);
        var divUISectionStyle = divUISection.getAttribute("style");
        if (divUISectionStyle === null)
            divUISectionStyle = "";
        var sectionsCount = divUISection.childElementCount;
        if (this.parentDirection === "column") {
            //var parentHeight: number = this.elHTML.parentElement.offsetHeight;
            //console.dir(this.elHTML.parentElement);
            //console.log(parentHeight);
            var sliceHeight = 100 / slicesCount;
            this.elHTML.setAttribute("style", sliceStyle + "height : " + sliceHeight.toString() + "%;");
            var parentWidth = this.elHTML.parentElement.offsetWidth;
            divUISection.setAttribute("style", divUISectionStyle + "width : " + parentWidth.toString() + "px;");
            var childWidth = (parentWidth / sectionsCount);
            //var i: number = (sectionsCount > 1) ? 1 : 0; //first-child -> no width to fix the scroll.
            for (var i = 0; i < sectionsCount; i++) {
                var childStyle = divUISection.children.item(i).getAttribute("style");
                if (childStyle === null)
                    childStyle = "";
                console.log(divUISection.children.item(i).getAttribute("title"));
                divUISection.children.item(i).setAttribute("style", childStyle + "width : " + childWidth.toString() + "px;");
            }
        }
        else {
            var sliceWidth = 100 / slicesCount;
            this.elHTML.setAttribute("style", sliceStyle + "width : " + sliceWidth.toString() + "%;");
            if (sectionsCount > 1) {
                for (var i = 0; i < sectionsCount; i++) {
                    var childStyle = divUISection.children.item(i).getAttribute("style");
                    if (childStyle === null)
                        childStyle = "";
                    var childHeight = (100 / sectionsCount);
                    divUISection.children.item(i).setAttribute("style", childStyle + "height : " + childHeight.toString() + "%;");
                }
            }
        }
    };
    UISliceComponent.switchStringDirection = function (childDirection) {
        var switchedDirection;
        switchedDirection = (childDirection === "column") ? "row" : "column";
        return switchedDirection;
    };
    return UISliceComponent;
}());
UISliceComponent = UISliceComponent_1 = __decorate([
    core_1.Component({
        moduleId: typeof module.id === 'string' ? module.id : null,
        selector: 'ui-slice',
        styles: ["section {\n  display: flex;\n  flex: 1;\n  flex-direction: column; }\n  section header {\n    display: flex;\n    align-items: center;\n    flex-direction: row;\n    height: 32px; }\n    section header > * {\n      margin-left: 5px;\n      display: inline-flex; }\n    section header h1 {\n      font-size: 1em;\n      margin-top: 0;\n      margin-bottom: 0; }\n  section main {\n    display: flex;\n    flex: 1; }\n    section main > div {\n      display: flex;\n      flex: 1; }\n  section footer {\n    display: flex;\n    align-items: center;\n    flex-direction: row;\n    height: 32px; }\n    section footer > * {\n      margin-left: 5px;\n      display: inline-flex; }\n\n.ui-slice {\n  display: flex;\n  flex: 1; }\n"],
        template: "<div class=\"ui-slice\" [ngClass]=\"direction\" [ngStyle]=\"{'flex-direction' : direction}\">\n\t<ng-content></ng-content>\n</div>\n"
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], UISliceComponent);
exports.UISliceComponent = UISliceComponent;
var UISliceComponent_1;
//# sourceMappingURL=slice.component.js.map