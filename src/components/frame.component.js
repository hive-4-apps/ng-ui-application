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
let UIFrameComponent = class UIFrameComponent {
    constructor(elRef) {
        this.elHTML = elRef.nativeElement;
        this.icon = null;
        this.title = null;
        this.header = true;
        this.footer = false;
        this.direction = DirectionEnums.COLUMN;
    }
    ngOnInit() {
        this.elHTML.setAttribute("direction", this.direction.toString());
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", URL)
], UIFrameComponent.prototype, "icon", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], UIFrameComponent.prototype, "title", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], UIFrameComponent.prototype, "hlevel", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], UIFrameComponent.prototype, "header", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], UIFrameComponent.prototype, "footer", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], UIFrameComponent.prototype, "direction", void 0);
UIFrameComponent = __decorate([
    core_1.Component({
        moduleId: typeof module.id === 'string' ? module.id : null,
        selector: 'ui-frame',
        styles: [`:host {
  display: flex;
  flex: 1;
  flex-direction: column;
  min-width: 0;
  min-height: 0; }
  :host header > div.slots {
    display: flex;
    flex: 1;
    justify-content: space-between;
    padding-right: 5px; }
    :host header > div.slots > div {
      flex-shrink: 0;
      flex-wrap: nowrap;
      display: inline-flex; }
      :host header > div.slots > div /deep/ > * {
        display: inline-flex; }
  :host main {
    overflow: hidden;
    display: flex;
    flex: 1; }
    :host main > div {
      display: flex;
      flex: 1; }
  :host footer > div.slots {
    display: flex;
    flex: 1;
    justify-content: space-between;
    padding-right: 5px; }
    :host footer > div.slots > div {
      flex-shrink: 0;
      flex-wrap: nowrap;
      display: inline-flex; }
      :host footer > div.slots > div /deep/ > * {
        display: inline-flex; }
`],
        template: `<header *ngIf="header">
    <ui-tag [icon]="icon" [label]="title" [hlevel]="hlevel"></ui-tag>
    <div class="slots">
        <div class="slot-left">
            <ng-content select=".frame-header-slot-left"></ng-content> 
        </div>
        <div class="slot-center">
            <ng-content select=".frame-header-slot-center"></ng-content>
        </div>
        <div class="slot-right">
            <ng-content select=".frame-header-slot-right"></ng-content>
        </div>
    </div>
</header>
<main class="main-content" [ngStyle]="{'flex-direction' : direction}">
    <ng-content select=".frame-content"></ng-content>
</main>
<footer *ngIf="footer">
    <div class="slots">
        <div class="slot-left">
            <ng-content select=".frame-footer-slot-left"></ng-content>
        </div>
        <div class="slot-center">
            <ng-content select=".frame-footer-slot-center"></ng-content>
        </div>
        <div class="slot-right">
            <ng-content select=".frame-footer-slot-right"></ng-content>
        </div>
    </div>
</footer>
`
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], UIFrameComponent);
exports.UIFrameComponent = UIFrameComponent;
var DirectionEnums;
(function (DirectionEnums) {
    DirectionEnums[DirectionEnums["COLUMN"] = "column"] = "COLUMN";
    DirectionEnums[DirectionEnums["ROW"] = "row"] = "ROW";
})(DirectionEnums = exports.DirectionEnums || (exports.DirectionEnums = {}));
//# sourceMappingURL=frame.component.js.map