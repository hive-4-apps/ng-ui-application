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
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var application_component_1 = require("./src/application/application.component");
__export(require('./src/application/application.component'));
var HiveModule = (function () {
    function HiveModule() {
    }
    HiveModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule
            ],
            declarations: [
                application_component_1.UIApplicationComponent
            ],
            exports: [
                application_component_1.UIApplicationComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], HiveModule);
    return HiveModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = HiveModule;
//# sourceMappingURL=index.js.map