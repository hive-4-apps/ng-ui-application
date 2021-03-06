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
let UITagComponent = class UITagComponent {
    constructor() {
        this.icon = null;
        this.label = null;
        this.link = null;
        this.hlevel = null;
    }
    ngOnInit() {
        if (this.hlevel === null) {
            console.error("UITagComponent hlevel cannot be null !");
        }
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", URL)
], UITagComponent.prototype, "icon", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], UITagComponent.prototype, "label", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], UITagComponent.prototype, "link", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], UITagComponent.prototype, "hlevel", void 0);
UITagComponent = __decorate([
    core_1.Component({
        moduleId: typeof module.id === 'string' ? module.id : null,
        selector: 'ui-tag',
        styles: [`:host {
  height: inherit;
  align-items: center; }
  :host > h1, :host h2, :host h3 {
    display: inline-flex;
    align-items: center;
    height: inherit; }
  :host > h1 {
    /* Application title */
    margin-top: 0;
    margin-bottom: 0;
    flex-shrink: 0;
    white-space: nowrap; }
    :host > h1 > /deep/ ui-label > img {
      height: 24px;
      width: 24px; }
    :host > h1 > /deep/ ui-label > span.icon {
      color: #060708;
      font-size: 0.45em; }
    :host > h1 > /deep/ ui-label > span.label {
      color: #060708;
      font-size: 0.45em; }
      :host > h1 > /deep/ ui-label > span.label:not(.unique) {
        margin-left: 5px; }
  :host > h2 {
    /* Section title */
    margin-top: 0;
    margin-bottom: 0;
    flex-shrink: 0;
    white-space: nowrap; }
    :host > h2 > /deep/ ui-label > img {
      height: 16px;
      width: 16px; }
    :host > h2 > /deep/ ui-label > span.icon {
      color: #b9c1c9;
      font-size: 0.7em; }
    :host > h2 > /deep/ ui-label > span.label {
      color: #b9c1c9;
      font-size: 0.7em; }
      :host > h2 > /deep/ ui-label > span.label:not(.unique) {
        margin-left: 5px; }
`],
        template: `<h1 *ngIf="hlevel == 1">
    <a *ngIf="link" href="{{link}}">
        <ui-label [icon]="icon" [label]="label"></ui-label>
    </a>
    <ui-label *ngIf="!link" [icon]="icon" [label]="label"></ui-label>
</h1>
<h2 *ngIf="hlevel == 2">
    <a *ngIf="link" href="{{link}}">
        <ui-label [icon]="icon" [label]="label"></ui-label>
    </a>
    <ui-label *ngIf="!link" [icon]="icon" [label]="label"></ui-label>
</h2>
<h3 *ngIf="hlevel == 3">
    <a *ngIf="link" href="{{link}}">
        <ui-label [icon]="icon" [label]="label"></ui-label>
    </a>
    <ui-label *ngIf="!link" [icon]="icon" [label]="label"></ui-label>
</h3>
`
    }),
    __metadata("design:paramtypes", [])
], UITagComponent);
exports.UITagComponent = UITagComponent;
//# sourceMappingURL=tag.component.js.map