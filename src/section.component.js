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
var UISectionComponent = (function () {
    function UISectionComponent() {
        this.icon = null;
        this.title = null;
        this.header = true;
        this.footer = false;
    }
    return UISectionComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", URL)
], UISectionComponent.prototype, "icon", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], UISectionComponent.prototype, "title", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], UISectionComponent.prototype, "header", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], UISectionComponent.prototype, "footer", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], UISectionComponent.prototype, "size", void 0);
UISectionComponent = __decorate([
    core_1.Component({
        moduleId: typeof module.id === 'string' ? module.id : null,
        selector: 'ui-section',
        styles: ["section {\n  display: flex;\n  flex: 1;\n  flex-direction: column; }\n  section header {\n    display: flex;\n    align-items: center;\n    flex-direction: row;\n    height: 32px; }\n    section header > * {\n      margin-left: 5px;\n      display: inline-flex; }\n    section header h1 {\n      font-size: 1em;\n      margin-top: 0;\n      margin-bottom: 0; }\n  section main {\n    display: flex;\n    flex: 1; }\n    section main > div {\n      display: flex;\n      flex: 1; }\n  section footer {\n    display: flex;\n    align-items: center;\n    flex-direction: row;\n    height: 32px; }\n    section footer > * {\n      margin-left: 5px;\n      display: inline-flex; }\n\nsection > header {\n  flex-shrink: 0; }\n  section > header > img {\n    height: 16px; }\n  section > header > h1 {\n    color: #23282d;\n    font-size: 0.8em; }\n"],
        template: "<section>\n    <header *ngIf=\"header\">\n        <img *ngIf=\"icon\" src=\"{{icon}}\"/><h1 *ngIf=\"title\">{{title}}</h1>\n    </header>\n    <main>\n        <ng-content></ng-content>\n    </main>\n    <footer *ngIf=\"footer\"></footer>\n</section>"
    }),
    __metadata("design:paramtypes", [])
], UISectionComponent);
exports.UISectionComponent = UISectionComponent;
//# sourceMappingURL=section.component.js.map