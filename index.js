"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const frame_component_1 = require("./src/components/frame.component");
const application_component_1 = require("./src/components/application.component");
const slice_component_1 = require("./src/components/slice.component");
const section_component_1 = require("./src/components/section.component");
const panel_component_1 = require("./src/components/panel.component");
const tag_component_1 = require("./src/components/tag.component");
const label_component_1 = require("./src/components/label.component");
const clickOutside_directive_1 = require("./src/directives/clickOutside.directive");
__export(require("./src/components/application.component"));
let HiveModule = class HiveModule {
};
HiveModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule
        ],
        declarations: [
            frame_component_1.UIFrameComponent,
            application_component_1.UIApplicationComponent,
            section_component_1.UISectionComponent,
            slice_component_1.UISliceComponent,
            panel_component_1.UIPanelComponent,
            tag_component_1.UITagComponent,
            label_component_1.UILabelComponent,
            clickOutside_directive_1.ClickOutsideDirective
        ],
        exports: [
            application_component_1.UIApplicationComponent,
            section_component_1.UISectionComponent,
            slice_component_1.UISliceComponent,
            panel_component_1.UIPanelComponent,
            clickOutside_directive_1.ClickOutsideDirective
        ]
    })
], HiveModule);
exports.HiveModule = HiveModule;
document.querySelector('head').innerHTML += '<link rel="stylesheet" href="__hive-4-apps/styles/normalize.css" type="text/css"/>';
document.querySelector('head').innerHTML += '<link rel="stylesheet" href="__hive-4-apps/styles/normalize-4-apps.css" type="text/css"/>';
document.querySelector('head').innerHTML += '<link rel="stylesheet" href="__hive-4-apps/styles/themify-icons.css" type="text/css"/>';
document.querySelector('head').innerHTML += '<link rel="stylesheet" href="__hive-4-apps/styles/font-awesome.css" type="text/css"/>';
try {
    if (__webpack_require__ !== 'undefined') {
        console.log("webpack-4-apps.css loading...");
        document.querySelector('head').innerHTML += '<link rel="stylesheet" href="__hive-4-apps/styles/webpack-4-apps.css" type="text/css"/>';
    }
}
catch (e) {
}
//# sourceMappingURL=index.js.map