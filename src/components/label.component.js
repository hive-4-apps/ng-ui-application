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
let UILabelComponent = class UILabelComponent {
    constructor() {
        this.icon = null;
        this.label = null;
        this.isIconAsURL = null;
    }
    ngOnInit() {
        this.isIconAsURL = isUrl(this.icon);
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], UILabelComponent.prototype, "icon", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], UILabelComponent.prototype, "label", void 0);
UILabelComponent = __decorate([
    core_1.Component({
        moduleId: typeof module.id === 'string' ? module.id : null,
        selector: 'ui-label',
        styles: [`:host {
  display: inline-flex;
  align-items: center;
  height: inherit; }
  :host > span {
    display: inline-flex;
    align-items: center;
    height: inherit; }
`],
        template: `<img *ngIf="icon && isIconAsURL" class="icon" src="{{icon}}" [ngClass]="{unique: !label}"/>
<span *ngIf="icon && !isIconAsURL" class="icon {{icon}}" [ngClass]="{unique: !label}"></span>
<span *ngIf="label" class="label" [ngClass]="{unique: !icon}">
    {{label}}
</span>`
    }),
    __metadata("design:paramtypes", [])
], UILabelComponent);
exports.UILabelComponent = UILabelComponent;
function isUrl(s) {
    var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    return regexp.test(s);
}
//# sourceMappingURL=label.component.js.map