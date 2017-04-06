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
const core_1 = require("@angular/core");
const section_component_1 = require("./section.component");
const slice_component_1 = require("./slice.component");
let UIApplicationComponent = class UIApplicationComponent {
    constructor(elRef) {
        this.elHTML = elRef.nativeElement;
        this.icon = null;
        this.title = null;
        this.header = true;
        this.footer = false;
        this.layoutType = layouTypeEnums.SPLITTER;
        this.direction = DirectionEnums.ROW;
        this.componentChildrenCount = 0;
    }
    ngOnInit() {
        this.elHTML.setAttribute("direction", this.direction.toString());
        var frameChild = this.elHTML.children[0];
        var mainContent = frameChild.getElementsByTagName("MAIN").item(0);
        mainContent.setAttribute("id", "main-content");
        this.componentChildren = getDirectChildrenById("#main-content");
        this.componentChildrenCount = getDirectChildrenCount("#main-content");
        this.isEdge = checkIsEdge();
        this.isFirefox = checkIsFirefox();
        this.isChrome = checkIsChrome();
        this.isSystemJS = checkIsSystemJS();
        this.scrollbarWidth = (this.isEdge) ? 12 : 17;
        this.bodyWidth = document.body.clientWidth;
        this.mainContentHeight = this.getMainContentHeight();
        this.widthHeightApply(true);
        this.childrenSetId();
    }
    getMainContentHeight() {
        var mainContentInnerHeight;
        mainContentInnerHeight = window.innerHeight;
        if (this.header) {
            mainContentInnerHeight = mainContentInnerHeight - 33;
        }
        if (this.footer) {
            mainContentInnerHeight = mainContentInnerHeight - 33;
        }
        return mainContentInnerHeight;
    }
    widthHeightApply(isInit) {
        this.bodyWidth = document.body.clientWidth;
        this.mainContentHeight = this.getMainContentHeight();
        this.mainContentWidthApply(isInit);
        this.mainContentHeightApply(isInit);
        if (this.componentChildrenCount > 1) {
            this.childrenLengthApplyExceptLastOne(isInit);
        }
    }
    mainContentWidthApply(isInit) {
        var minWidth = this.bodyWidth.toString() + "px";
        document.getElementById("main-content").style.minWidth = minWidth;
        var mainWidth;
        mainWidth = this.bodyWidth.toString() + "px";
        if (this.isSystemJS) {
            mainWidth = this.bodyWidth.toString() + "px";
        }
        else {
            mainWidth = (isInit && !this.isEdge) ? (this.bodyWidth + (this.scrollbarWidth - 1)).toString() + "px" : this.bodyWidth.toString() + "px";
        }
        document.getElementById("main-content").style.width = mainWidth;
    }
    mainContentHeightApply(isInit) {
        var mainHeight = this.mainContentHeight.toString() + "px";
        if (this.componentChildrenCount > 1) {
            if (this.isSystemJS) {
                if (this.isFirefox || this.isEdge) {
                    mainHeight = (this.mainContentHeight + this.scrollbarWidth).toString() + "px";
                }
            }
        }
        document.getElementById("main-content").style.flexBasis = mainHeight;
    }
    childrenLengthApplyExceptLastOne(isInit) {
        if (this.componentChildrenCount < 2) {
            console.error("childrenLengthApplyExceptLastOne => children count < 2");
            return;
        }
        var componentChildren = getDirectChildrenById("#main-content");
        if (isInit || this.isEdge) {
            for (var nChild = 0; nChild < this.componentChildrenCount - 1; nChild++) {
                var currentChildComponent = componentChildren.item(nChild);
                if (this.direction == DirectionEnums.ROW) {
                    currentChildComponent.style.width = (this.bodyWidth / this.componentChildrenCount).toString() + "px";
                }
                else {
                    currentChildComponent.style.height = (this.mainContentHeight / this.componentChildrenCount).toString() + "px";
                }
            }
        }
    }
    switchDirection(childDirection) {
        var styles;
        styles = {};
        var switchedDirection;
        switchedDirection = (childDirection === "COLUMN") ? "ROW" : "COLUMN";
        styles["flex-direction"] = switchedDirection;
        return styles;
    }
    childrenSetId() {
        if (this.componentChildrenCount === 0) {
            console.error("childrenSetId => children count === 0");
            return;
        }
        for (var nChild = 0; nChild < this.componentChildrenCount; nChild++) {
            var currentChildComponent = this.componentChildren.item(nChild);
            var tagName = currentChildComponent.tagName.toLowerCase();
            currentChildComponent.setAttribute("id", tagName + "-" + nChild);
        }
    }
    isSlicesOrSectionsChildren() {
        return (this.componentChildren.item(0).tagName === "UI-SECTION") ? "UI-SECTION" : "UI-SLICE";
    }
    focusPanels(panel) {
        if (this.isSlicesOrSectionsChildren() === "UI-SECTION") {
            this.sectionChildren.toArray().forEach(section => section.focusPanel(panel));
        }
        else {
            this.sliceChildren.toArray().forEach(slice => slice.focusPanel(panel));
        }
        panel.focus = true;
    }
};
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
__decorate([
    core_1.ContentChildren(section_component_1.UISectionComponent),
    __metadata("design:type", core_1.QueryList)
], UIApplicationComponent.prototype, "sectionChildren", void 0);
__decorate([
    core_1.ContentChildren(slice_component_1.UISliceComponent),
    __metadata("design:type", core_1.QueryList)
], UIApplicationComponent.prototype, "sliceChildren", void 0);
UIApplicationComponent = __decorate([
    core_1.Component({
        moduleId: typeof module.id === 'string' ? module.id : null,
        selector: 'ui-application',
        styles: [`:host {
  height: inherit;
  display: flex;
  align-items: stretch;
  flex: 1; }
  :host /deep/ > ui-frame {
    height: inherit;
    width: inherit; }
    :host /deep/ > ui-frame > header {
      background-color: #b9c1c9;
      color: #23282d;
      border-bottom: 1px solid #060708;
      display: flex;
      align-items: center;
      flex-direction: row;
      height: 24px;
      flex-shrink: 0; }
      :host /deep/ > ui-frame > header > * {
        padding-left: 5px;
        display: inline-flex; }
      :host /deep/ > ui-frame > header > img {
        height: 24px; }
      :host /deep/ > ui-frame > header > h1 {
        color: #23282d;
        font-size: 0.45em; }
    :host /deep/ > ui-frame > main /deep/ > ui-section {
      flex: 1; }
    :host /deep/ > ui-frame > footer {
      display: flex;
      align-items: center;
      flex-direction: row;
      height: 24px;
      flex-shrink: 0;
      border-top: 1px solid #060708;
      background-color: #b9c1c9;
      color: #23282d; }
      :host /deep/ > ui-frame > footer > * {
        padding-left: 5px;
        display: inline-flex; }
  :host[direction="COLUMN"] /deep/ ui-frame > main /deep/ > ui-section {
    border-top: 1px solid #060708; }
    :host[direction="COLUMN"] /deep/ ui-frame > main /deep/ > ui-section:first-child {
      border-top: none; }
  :host[direction="COLUMN"] /deep/ ui-frame > main /deep/ > ui-slice {
    resize: vertical;
    border-left: none;
    border-right: none;
    border-bottom: none;
    /*min-height: $slice-collapse-size;*/
    flex-direction: column; }
    :host[direction="COLUMN"] /deep/ ui-frame > main /deep/ > ui-slice:first-child {
      border-top: none; }
    :host[direction="COLUMN"] /deep/ ui-frame > main /deep/ > ui-slice > div.ui-slice-buttons {
      height: 12px; }
  :host[direction="ROW"] /deep/ ui-frame > main /deep/ > ui-section {
    border-right: 1px solid #ccc; }
    :host[direction="ROW"] /deep/ ui-frame > main /deep/ > ui-section:last-child {
      border-right: none; }
      :host[direction="ROW"] /deep/ ui-frame > main /deep/ > ui-section:last-child:first-child {
        /* if only one ui-section*/
        border-right: none; }
  :host[direction="ROW"] /deep/ ui-frame > main /deep/ > ui-slice {
    resize: horizontal; }
    :host[direction="ROW"] /deep/ ui-frame > main /deep/ > ui-slice:first-child {
      border-left: none; }
    :host[direction="ROW"] /deep/ ui-frame > main /deep/ > ui-slice > div.ui-slice-buttons {
      width: 12px; }
`],
        template: `<ui-frame [icon]="icon" [title]="title" hlevel="1" [header]="header" [footer]="footer" [direction]="direction">
    <ng-content class="frame-header-slot-left" select=".application-header-slot-left"></ng-content>
    <ng-content class="frame-header-slot-center" select=".application-header-slot-center"></ng-content>
    <ng-content class="frame-header-slot-right" select=".application-header-slot-right"></ng-content>
    <ng-content class="frame-content" select=".application-content"></ng-content>
    <ng-content class="frame-footer-slot-left" select=".application-footer-slot-left"></ng-content>
    <ng-content class="frame-footer-slot-center" select=".application-footer-slot-center"></ng-content>
    <ng-content class="frame-footer-slot-right" select=".application-footer-slot-right"></ng-content>
</ui-frame>
`,
        host: {
            '(window:resize)': 'widthHeightApply(false)'
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
    DirectionEnums[DirectionEnums["COLUMN"] = "COLUMN"] = "COLUMN";
    DirectionEnums[DirectionEnums["ROW"] = "ROW"] = "ROW";
})(DirectionEnums = exports.DirectionEnums || (exports.DirectionEnums = {}));
function checkIsEdge() {
    return /Edge\/\d./i.test(navigator.userAgent);
}
function checkIsChrome() {
    return /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
}
function checkIsFirefox() {
    return /firefox\/(\d+\.\d)/i.test(navigator.userAgent);
}
function checkIsSystemJS() {
    return window.hasOwnProperty("SystemJS");
}
function getDirectChildrenById(selector) {
    return document.querySelectorAll(`${selector} > *`);
}
function getDirectChildrenCount(selector) {
    var directChildrenCount = getDirectChildrenById(`${selector}`).length;
    return directChildrenCount;
}
//# sourceMappingURL=application.component.js.map