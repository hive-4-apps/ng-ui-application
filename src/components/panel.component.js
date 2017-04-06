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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const application_component_1 = require("./application.component");
let UIPanelComponent = class UIPanelComponent {
    constructor(elRef, _parent) {
        this._parent = _parent;
        this.active = false;
        this.focus = false;
        this.display = "none";
        this.elHTML = elRef.nativeElement;
        this.appParent = this._parent;
    }
    get setDisplay() {
        return this.display;
    }
    ;
    clickOnPanel() {
        this.appParent.focusPanels(this);
    }
};
__decorate([
    core_1.Input('title'),
    __metadata("design:type", String)
], UIPanelComponent.prototype, "title", void 0);
__decorate([
    core_1.Input('icon'),
    __metadata("design:type", URL)
], UIPanelComponent.prototype, "icon", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], UIPanelComponent.prototype, "active", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], UIPanelComponent.prototype, "focus", void 0);
__decorate([
    core_1.HostBinding('style.display'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], UIPanelComponent.prototype, "setDisplay", null);
UIPanelComponent = __decorate([
    core_1.Component({
        moduleId: typeof module.id === 'string' ? module.id : null,
        selector: 'ui-panel',
        styles: [`:host {
  display: flex;
  flex: 1; }
  :host > section {
    display: flex;
    flex: 1;
    background: #505b66;
    padding-top: 5px;
    border: 1px solid #505b66; }
    :host > section.focus {
      border: 1px solid #1D71BC; }
`],
        template: `<section *ngIf="active" class="pane" (click)="clickOnPanel()" [ngClass]="{'focus': focus}">
    <ng-content></ng-content>
</section>`
    }),
    __param(1, core_1.Inject(core_1.forwardRef(() => application_component_1.UIApplicationComponent))),
    __metadata("design:paramtypes", [core_1.ElementRef, application_component_1.UIApplicationComponent])
], UIPanelComponent);
exports.UIPanelComponent = UIPanelComponent;
//# sourceMappingURL=panel.component.js.map