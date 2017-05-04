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
const panel_component_1 = require("./panel.component");
let UISectionComponent = class UISectionComponent {
    constructor(elRef, changeDetectorRef) {
        this.changeDetectorRef = changeDetectorRef;
        this.icon = null;
        this.title = null;
        this.header = true;
        this.footer = false;
        this.elHTML = elRef.nativeElement;
        this.isChrome = false;
        this.wrappedBySlice = false;
        this.positiontabs = PositionEnums.TOP;
        this.positionTabs = DirectionFlexPositionEnums.TOP;
        switch (this.positiontabs.toString()) {
            case 'TOP':
                this.positionTabs = DirectionFlexPositionEnums.TOP;
                break;
            case 'BOTTOM':
                this.positionTabs = DirectionFlexPositionEnums.BOTTOM;
                break;
            case 'LEFT':
                this.positionTabs = DirectionFlexPositionEnums.LEFT;
                break;
            case 'RIGHT':
                this.positionTabs = DirectionFlexPositionEnums.RIGHT;
                break;
            default:
                this.positionTabs = DirectionFlexPositionEnums.TOP;
        }
    }
    ngOnInit() {
        this.isChrome = checkIsChrome();
        this.id = this.elHTML.getAttribute("id");
        this.wrappedBySlice = this.isWrappedBySlice();
        this.numberSection = this.id.split("ui-section-")[1];
        switch (this.positiontabs.toString()) {
            case 'TOP':
                this.positionTabs = DirectionFlexPositionEnums.TOP;
                break;
            case 'BOTTOM':
                this.positionTabs = DirectionFlexPositionEnums.BOTTOM;
                break;
            case 'LEFT':
                this.positionTabs = DirectionFlexPositionEnums.LEFT;
                break;
            case 'RIGHT':
                this.positionTabs = DirectionFlexPositionEnums.RIGHT;
                break;
            default:
                this.positionTabs = DirectionFlexPositionEnums.TOP;
        }
    }
    ngAfterViewInit() {
        this.componentChildrenCount = this.panelChildren.length;
        this.setPanelsId();
        this.isLastOne = this.checkIsLastOne();
        this.changeDetectorRef.detectChanges();
        if (this.isChrome && this.wrappedBySlice && !this.isLastOne) {
            let listButtons = getButtonsByClassName("#" + this.id + " > .ui-slice-buttons", ".btn-resize");
            let resizeButton = listButtons[0];
            this.parentDirection = document.getElementsByTagName("ui-application").item(0).getAttribute("direction");
            if (this.parentDirection === "COLUMN") {
                resizeButton.addEventListener("mousedown", function (e) {
                    let uiSectionButtons = this.parentElement;
                    let uiSection = uiSectionButtons.parentElement;
                    uiSection.style.width = "12px";
                    this.style.display = "none";
                    uiSectionButtons.style.marginBottom = "8px";
                });
            }
            else {
                resizeButton.addEventListener("mousedown", function (e) {
                    let uiSectionButtons = this.parentElement;
                    let uiSection = uiSectionButtons.parentElement;
                    uiSection.style.height = "12px";
                    this.style.display = "none";
                    uiSectionButtons.style.marginRight = "8px";
                });
            }
        }
    }
    ngAfterContentInit() {
        if (this.panelChildren.length > 0) {
            let activeTabs = this.panelChildren.filter((panel) => panel.active);
            if (activeTabs.length === 0) {
                this.selectPanel(this.panelChildren.first);
            }
        }
    }
    clickTab(panel) {
        panel.focus = true;
        this.selectPanel(panel);
    }
    selectPanel(panel) {
        this.panelChildren.toArray().forEach(panel => panel.active = false);
        this.panelChildren.toArray().forEach(panel => panel.display = "none");
        panel.active = true;
        panel.display = "flex";
    }
    onClickOutside(panel) {
        panel.focus = false;
    }
    focusPanel(panel) {
        this.panelChildren.toArray().forEach(panel => panel.focus = false);
        panel.focus = true;
    }
    checkIsLastOne() {
        let parentChildren;
        if (this.wrappedBySlice) {
            let parentId = this.elHTML.parentElement.parentElement.id;
            parentChildren = getDirectChildren("#" + parentId + " > .ui-slice");
        }
        else {
            parentChildren = getDirectChildren("#main-content");
        }
        return this.elHTML === parentChildren[parentChildren.length - 1];
    }
    isWrappedBySlice() {
        return this.elHTML.parentElement.parentElement.tagName === "UI-SLICE";
    }
    setPanelsId() {
        let nbPanel = 0;
        this.panelChildren.toArray().forEach((panel) => {
            panel.elHTML.id = "ui-panel-" + this.numberSection + "-" + nbPanel;
            nbPanel++;
        });
    }
};
__decorate([
    core_1.ContentChildren(panel_component_1.UIPanelComponent),
    __metadata("design:type", core_1.QueryList)
], UISectionComponent.prototype, "panelChildren", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
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
], UISectionComponent.prototype, "positiontabs", void 0);
UISectionComponent = __decorate([
    core_1.Component({
        moduleId: typeof module.id === 'string' ? module.id : null,
        selector: 'ui-section',
        styles: [`@charset "UTF-8";
/* FONT PATH
 * -------------------------- */
@font-face {
  font-family: 'themify';
  src: url(../scss/themify-icons/fonts/themify.eot?-fvbane);
  src: url(../scss/themify-icons/fonts/themify.eot?#iefix-fvbane) format("embedded-opentype"), url(../scss/themify-icons/fonts/themify.woff?-fvbane) format("woff"), url(../scss/themify-icons/fonts/themify.ttf?-fvbane) format("truetype"), url(../scss/themify-icons/fonts/themify.svg?-fvbane#themify) format("svg");
  font-weight: normal;
  font-style: normal; }

[class^="icon-"],
[class*=" icon-"] {
  font-family: 'themify';
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  *margin-right: .3em; }

[class^="icon-"]:before,
[class*=" icon-"]:before {
  text-decoration: inherit;
  display: inline-block;
  speak: none; }

/* makes the font 33% larger relative to the icon container */
.icon-large:before {
  vertical-align: -10%;
  font-size: 1.33333em; }

/* makes sure icons active on rollover in links */
a [class^="icon-"],
a [class*=" icon-"] {
  display: inline; }

/* increased font size for icon-large */
[class^="icon-"].icon-fixed-width,
[class*=" icon-"].icon-fixed-width {
  display: inline-block;
  width: 1.14286em;
  text-align: right;
  padding-right: 0.28571em; }
  [class^="icon-"].icon-fixed-width.icon-large,
  [class*=" icon-"].icon-fixed-width.icon-large {
    width: 1.42857em; }

.icons-ul {
  margin-left: 2.14286em;
  list-style-type: none; }
  .icons-ul > li {
    position: relative; }
  .icons-ul .icon-li {
    position: absolute;
    left: -2.14286em;
    width: 2.14286em;
    text-align: center;
    line-height: inherit; }

[class^="icon-"].hide,
[class*=" icon-"].hide {
  display: none; }

.icon-muted {
  color: #eeeeee; }

.icon-light {
  color: white; }

.icon-dark {
  color: #333333; }

.icon-border {
  border: solid 1px #eeeeee;
  padding: .2em .25em .15em;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px; }

.icon-2x {
  font-size: 2em; }
  .icon-2x.icon-border {
    border-width: 2px;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px; }

.icon-3x {
  font-size: 3em; }
  .icon-3x.icon-border {
    border-width: 3px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px; }

.icon-4x {
  font-size: 4em; }
  .icon-4x.icon-border {
    border-width: 4px;
    -webkit-border-radius: 6px;
    -moz-border-radius: 6px;
    border-radius: 6px; }

.icon-5x {
  font-size: 5em; }
  .icon-5x.icon-border {
    border-width: 5px;
    -webkit-border-radius: 7px;
    -moz-border-radius: 7px;
    border-radius: 7px; }

.pull-right {
  float: right; }

.pull-left {
  float: left; }

[class^="icon-"].pull-left,
[class*=" icon-"].pull-left {
  margin-right: .3em; }

[class^="icon-"].pull-right,
[class*=" icon-"].pull-right {
  margin-left: .3em; }

/* EXTRAS
 * -------------------------- */
/* Stacked and layered icon */
.icon-stack {
  position: relative;
  display: inline-block;
  width: 2em;
  height: 2em;
  line-height: 2em;
  vertical-align: -35%; }
  .icon-stack [class^="icon-"],
  .icon-stack [class*=" icon-"] {
    display: block;
    text-align: center;
    position: absolute;
    width: 100%;
    height: 100%;
    font-size: 1em;
    line-height: inherit;
    *line-height: 2em; }
  .icon-stack .icon-stack-base {
    font-size: 2em;
    *line-height: 1em; }

/* Animated rotating icon */
.icon-spin {
  display: inline-block;
  -moz-animation: spin 2s infinite linear;
  -o-animation: spin 2s infinite linear;
  -webkit-animation: spin 2s infinite linear;
  animation: spin 2s infinite linear; }

/* Prevent stack and spinners from being taken inline when inside a link */
a .icon-stack,
a .icon-spin {
  display: inline-block;
  text-decoration: none; }

@-moz-keyframes spin {
  0% {
    -moz-transform: rotate(0deg); }
  100% {
    -moz-transform: rotate(359deg); } }

@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg); }
  100% {
    -webkit-transform: rotate(359deg); } }

@-o-keyframes spin {
  0% {
    -o-transform: rotate(0deg); }
  100% {
    -o-transform: rotate(359deg); } }

@-ms-keyframes spin {
  0% {
    -ms-transform: rotate(0deg); }
  100% {
    -ms-transform: rotate(359deg); } }

@keyframes spin {
  0% {
    transform: rotate(0deg); }
  100% {
    transform: rotate(359deg); } }

/* Icon rotations and mirroring */
.icon-rotate-90:before {
  -webkit-transform: rotate(90deg);
  -moz-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  -o-transform: rotate(90deg);
  transform: rotate(90deg);
  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=1); }

.icon-rotate-180:before {
  -webkit-transform: rotate(180deg);
  -moz-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  -o-transform: rotate(180deg);
  transform: rotate(180deg);
  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2); }

.icon-rotate-270:before {
  -webkit-transform: rotate(270deg);
  -moz-transform: rotate(270deg);
  -ms-transform: rotate(270deg);
  -o-transform: rotate(270deg);
  transform: rotate(270deg);
  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3); }

.icon-flip-horizontal:before {
  -webkit-transform: scale(-1, 1);
  -moz-transform: scale(-1, 1);
  -ms-transform: scale(-1, 1);
  -o-transform: scale(-1, 1);
  transform: scale(-1, 1); }

.icon-flip-vertical:before {
  -webkit-transform: scale(1, -1);
  -moz-transform: scale(1, -1);
  -ms-transform: scale(1, -1);
  -o-transform: scale(1, -1);
  transform: scale(1, -1); }

/* ensure rotation occurs inside anchor tags */
a .icon-rotate-90:before, a .icon-rotate-180:before, a .icon-rotate-270:before, a .icon-flip-horizontal:before, a .icon-flip-vertical:before {
  display: inline-block; }

.icon-wand:before {
  content: "\e600"; }

.icon-volume:before {
  content: "\e601"; }

.icon-user:before {
  content: "\e602"; }

.icon-unlock:before {
  content: "\e603"; }

.icon-unlink:before {
  content: "\e604"; }

.icon-trash:before {
  content: "\e605"; }

.icon-thought:before {
  content: "\e606"; }

.icon-target:before {
  content: "\e607"; }

.icon-tag:before {
  content: "\e608"; }

.icon-tablet:before {
  content: "\e609"; }

.icon-star:before {
  content: "\e60a"; }

.icon-spray:before {
  content: "\e60b"; }

.icon-signal:before {
  content: "\e60c"; }

.icon-shopping-cart:before {
  content: "\e60d"; }

.icon-shopping-cart-full:before {
  content: "\e60e"; }

.icon-settings:before {
  content: "\e60f"; }

.icon-search:before {
  content: "\e610"; }

.icon-zoom-in:before {
  content: "\e611"; }

.icon-zoom-out:before {
  content: "\e612"; }

.icon-cut:before {
  content: "\e613"; }

.icon-ruler:before {
  content: "\e614"; }

.icon-ruler-pencil:before {
  content: "\e615"; }

.icon-ruler-alt:before {
  content: "\e616"; }

.icon-bookmark:before {
  content: "\e617"; }

.icon-bookmark-alt:before {
  content: "\e618"; }

.icon-reload:before {
  content: "\e619"; }

.icon-plus:before {
  content: "\e61a"; }

.icon-pin:before {
  content: "\e61b"; }

.icon-pencil:before {
  content: "\e61c"; }

.icon-pencil-alt:before {
  content: "\e61d"; }

.icon-paint-roller:before {
  content: "\e61e"; }

.icon-paint-bucket:before {
  content: "\e61f"; }

.icon-na:before {
  content: "\e620"; }

.icon-mobile:before {
  content: "\e621"; }

.icon-minus:before {
  content: "\e622"; }

.icon-medall:before {
  content: "\e623"; }

.icon-medall-alt:before {
  content: "\e624"; }

.icon-marker:before {
  content: "\e625"; }

.icon-marker-alt:before {
  content: "\e626"; }

.icon-arrow-up:before {
  content: "\e627"; }

.icon-arrow-right:before {
  content: "\e628"; }

.icon-arrow-left:before {
  content: "\e629"; }

.icon-arrow-down:before {
  content: "\e62a"; }

.icon-lock:before {
  content: "\e62b"; }

.icon-location-arrow:before {
  content: "\e62c"; }

.icon-link:before {
  content: "\e62d"; }

.icon-layout:before {
  content: "\e62e"; }

.icon-layers:before {
  content: "\e62f"; }

.icon-layers-alt:before {
  content: "\e630"; }

.icon-key:before {
  content: "\e631"; }

.icon-import:before {
  content: "\e632"; }

.icon-image:before {
  content: "\e633"; }

.icon-heart:before {
  content: "\e634"; }

.icon-heart-broken:before {
  content: "\e635"; }

.icon-hand-stop:before {
  content: "\e636"; }

.icon-hand-open:before {
  content: "\e637"; }

.icon-hand-drag:before {
  content: "\e638"; }

.icon-folder:before {
  content: "\e639"; }

.icon-flag:before {
  content: "\e63a"; }

.icon-flag-alt:before {
  content: "\e63b"; }

.icon-flag-alt-2:before {
  content: "\e63c"; }

.icon-eye:before {
  content: "\e63d"; }

.icon-export:before {
  content: "\e63e"; }

.icon-exchange-vertical:before {
  content: "\e63f"; }

.icon-desktop:before {
  content: "\e640"; }

.icon-cup:before {
  content: "\e641"; }

.icon-crown:before {
  content: "\e642"; }

.icon-comments:before {
  content: "\e643"; }

.icon-comment:before {
  content: "\e644"; }

.icon-comment-alt:before {
  content: "\e645"; }

.icon-close:before {
  content: "\e646"; }

.icon-clip:before {
  content: "\e647"; }

.icon-angle-up:before {
  content: "\e648"; }

.icon-angle-right:before {
  content: "\e649"; }

.icon-angle-left:before {
  content: "\e64a"; }

.icon-angle-down:before {
  content: "\e64b"; }

.icon-check:before {
  content: "\e64c"; }

.icon-check-box:before {
  content: "\e64d"; }

.icon-camera:before {
  content: "\e64e"; }

.icon-announcement:before {
  content: "\e64f"; }

.icon-brush:before {
  content: "\e650"; }

.icon-briefcase:before {
  content: "\e651"; }

.icon-bolt:before {
  content: "\e652"; }

.icon-bolt-alt:before {
  content: "\e653"; }

.icon-blackboard:before {
  content: "\e654"; }

.icon-bag:before {
  content: "\e655"; }

.icon-move:before {
  content: "\e656"; }

.icon-arrows-vertical:before {
  content: "\e657"; }

.icon-arrows-horizontal:before {
  content: "\e658"; }

.icon-fullscreen:before {
  content: "\e659"; }

.icon-arrow-top-right:before {
  content: "\e65a"; }

.icon-arrow-top-left:before {
  content: "\e65b"; }

.icon-arrow-circle-up:before {
  content: "\e65c"; }

.icon-arrow-circle-right:before {
  content: "\e65d"; }

.icon-arrow-circle-left:before {
  content: "\e65e"; }

.icon-arrow-circle-down:before {
  content: "\e65f"; }

.icon-angle-double-up:before {
  content: "\e660"; }

.icon-angle-double-right:before {
  content: "\e661"; }

.icon-angle-double-left:before {
  content: "\e662"; }

.icon-angle-double-down:before {
  content: "\e663"; }

.icon-zip:before {
  content: "\e664"; }

.icon-world:before {
  content: "\e665"; }

.icon-wheelchair:before {
  content: "\e666"; }

.icon-view-list:before {
  content: "\e667"; }

.icon-view-list-alt:before {
  content: "\e668"; }

.icon-view-grid:before {
  content: "\e669"; }

.icon-uppercase:before {
  content: "\e66a"; }

.icon-upload:before {
  content: "\e66b"; }

.icon-underline:before {
  content: "\e66c"; }

.icon-truck:before {
  content: "\e66d"; }

.icon-timer:before {
  content: "\e66e"; }

.icon-ticket:before {
  content: "\e66f"; }

.icon-thumb-up:before {
  content: "\e670"; }

.icon-thumb-down:before {
  content: "\e671"; }

.icon-text:before {
  content: "\e672"; }

.icon-stats-up:before {
  content: "\e673"; }

.icon-stats-down:before {
  content: "\e674"; }

.icon-split-v:before {
  content: "\e675"; }

.icon-split-h:before {
  content: "\e676"; }

.icon-smallcap:before {
  content: "\e677"; }

.icon-shine:before {
  content: "\e678"; }

.icon-shift-right:before {
  content: "\e679"; }

.icon-shift-left:before {
  content: "\e67a"; }

.icon-shield:before {
  content: "\e67b"; }

.icon-notepad:before {
  content: "\e67c"; }

.icon-server:before {
  content: "\e67d"; }

.icon-quote-right:before {
  content: "\e67e"; }

.icon-quote-left:before {
  content: "\e67f"; }

.icon-pulse:before {
  content: "\e680"; }

.icon-printer:before {
  content: "\e681"; }

.icon-power-off:before {
  content: "\e682"; }

.icon-plug:before {
  content: "\e683"; }

.icon-pie-chart:before {
  content: "\e684"; }

.icon-paragraph:before {
  content: "\e685"; }

.icon-panel:before {
  content: "\e686"; }

.icon-package:before {
  content: "\e687"; }

.icon-music:before {
  content: "\e688"; }

.icon-music-alt:before {
  content: "\e689"; }

.icon-mouse:before {
  content: "\e68a"; }

.icon-mouse-alt:before {
  content: "\e68b"; }

.icon-money:before {
  content: "\e68c"; }

.icon-microphone:before {
  content: "\e68d"; }

.icon-menu:before {
  content: "\e68e"; }

.icon-menu-alt:before {
  content: "\e68f"; }

.icon-map:before {
  content: "\e690"; }

.icon-map-alt:before {
  content: "\e691"; }

.icon-loop:before {
  content: "\e692"; }

.icon-location-pin:before {
  content: "\e693"; }

.icon-list:before {
  content: "\e694"; }

.icon-light-bulb:before {
  content: "\e695"; }

.icon-Italic:before {
  content: "\e696"; }

.icon-info:before {
  content: "\e697"; }

.icon-infinite:before {
  content: "\e698"; }

.icon-id-badge:before {
  content: "\e699"; }

.icon-hummer:before {
  content: "\e69a"; }

.icon-home:before {
  content: "\e69b"; }

.icon-help:before {
  content: "\e69c"; }

.icon-headphone:before {
  content: "\e69d"; }

.icon-harddrives:before {
  content: "\e69e"; }

.icon-harddrive:before {
  content: "\e69f"; }

.icon-gift:before {
  content: "\e6a0"; }

.icon-game:before {
  content: "\e6a1"; }

.icon-filter:before {
  content: "\e6a2"; }

.icon-files:before {
  content: "\e6a3"; }

.icon-file:before {
  content: "\e6a4"; }

.icon-eraser:before {
  content: "\e6a5"; }

.icon-envelope:before {
  content: "\e6a6"; }

.icon-download:before {
  content: "\e6a7"; }

.icon-direction:before {
  content: "\e6a8"; }

.icon-direction-alt:before {
  content: "\e6a9"; }

.icon-dashboard:before {
  content: "\e6aa"; }

.icon-control-stop:before {
  content: "\e6ab"; }

.icon-control-shuffle:before {
  content: "\e6ac"; }

.icon-control-play:before {
  content: "\e6ad"; }

.icon-control-pause:before {
  content: "\e6ae"; }

.icon-control-forward:before {
  content: "\e6af"; }

.icon-control-backward:before {
  content: "\e6b0"; }

.icon-cloud:before {
  content: "\e6b1"; }

.icon-cloud-up:before {
  content: "\e6b2"; }

.icon-cloud-down:before {
  content: "\e6b3"; }

.icon-clipboard:before {
  content: "\e6b4"; }

.icon-car:before {
  content: "\e6b5"; }

.icon-calendar:before {
  content: "\e6b6"; }

.icon-book:before {
  content: "\e6b7"; }

.icon-bell:before {
  content: "\e6b8"; }

.icon-basketball:before {
  content: "\e6b9"; }

.icon-bar-chart:before {
  content: "\e6ba"; }

.icon-bar-chart-alt:before {
  content: "\e6bb"; }

.icon-back-right:before {
  content: "\e6bc"; }

.icon-back-left:before {
  content: "\e6bd"; }

.icon-arrows-corner:before {
  content: "\e6be"; }

.icon-archive:before {
  content: "\e6bf"; }

.icon-anchor:before {
  content: "\e6c0"; }

.icon-align-right:before {
  content: "\e6c1"; }

.icon-align-left:before {
  content: "\e6c2"; }

.icon-align-justify:before {
  content: "\e6c3"; }

.icon-align-center:before {
  content: "\e6c4"; }

.icon-alert:before {
  content: "\e6c5"; }

.icon-alarm-clock:before {
  content: "\e6c6"; }

.icon-agenda:before {
  content: "\e6c7"; }

.icon-write:before {
  content: "\e6c8"; }

.icon-window:before {
  content: "\e6c9"; }

.icon-widgetized:before {
  content: "\e6ca"; }

.icon-widget:before {
  content: "\e6cb"; }

.icon-widget-alt:before {
  content: "\e6cc"; }

.icon-wallet:before {
  content: "\e6cd"; }

.icon-video-clapper:before {
  content: "\e6ce"; }

.icon-video-camera:before {
  content: "\e6cf"; }

.icon-vector:before {
  content: "\e6d0"; }

.icon-themify-logo:before {
  content: "\e6d1"; }

.icon-themify-favicon:before {
  content: "\e6d2"; }

.icon-themify-favicon-alt:before {
  content: "\e6d3"; }

.icon-support:before {
  content: "\e6d4"; }

.icon-stamp:before {
  content: "\e6d5"; }

.icon-split-v-alt:before {
  content: "\e6d6"; }

.icon-slice:before {
  content: "\e6d7"; }

.icon-shortcode:before {
  content: "\e6d8"; }

.icon-shift-right-alt:before {
  content: "\e6d9"; }

.icon-shift-left-alt:before {
  content: "\e6da"; }

.icon-ruler-alt-2:before {
  content: "\e6db"; }

.icon-receipt:before {
  content: "\e6dc"; }

.icon-pin2:before {
  content: "\e6dd"; }

.icon-pin-alt:before {
  content: "\e6de"; }

.icon-pencil-alt2:before {
  content: "\e6df"; }

.icon-palette:before {
  content: "\e6e0"; }

.icon-more:before {
  content: "\e6e1"; }

.icon-more-alt:before {
  content: "\e6e2"; }

.icon-microphone-alt:before {
  content: "\e6e3"; }

.icon-magnet:before {
  content: "\e6e4"; }

.icon-line-double:before {
  content: "\e6e5"; }

.icon-line-dotted:before {
  content: "\e6e6"; }

.icon-line-dashed:before {
  content: "\e6e7"; }

.icon-layout-width-full:before {
  content: "\e6e8"; }

.icon-layout-width-default:before {
  content: "\e6e9"; }

.icon-layout-width-default-alt:before {
  content: "\e6ea"; }

.icon-layout-tab:before {
  content: "\e6eb"; }

.icon-layout-tab-window:before {
  content: "\e6ec"; }

.icon-layout-tab-v:before {
  content: "\e6ed"; }

.icon-layout-tab-min:before {
  content: "\e6ee"; }

.icon-layout-slider:before {
  content: "\e6ef"; }

.icon-layout-slider-alt:before {
  content: "\e6f0"; }

.icon-layout-sidebar-right:before {
  content: "\e6f1"; }

.icon-layout-sidebar-none:before {
  content: "\e6f2"; }

.icon-layout-sidebar-left:before {
  content: "\e6f3"; }

.icon-layout-placeholder:before {
  content: "\e6f4"; }

.icon-layout-menu:before {
  content: "\e6f5"; }

.icon-layout-menu-v:before {
  content: "\e6f6"; }

.icon-layout-menu-separated:before {
  content: "\e6f7"; }

.icon-layout-menu-full:before {
  content: "\e6f8"; }

.icon-layout-media-right-alt:before {
  content: "\e6f9"; }

.icon-layout-media-right:before {
  content: "\e6fa"; }

.icon-layout-media-overlay:before {
  content: "\e6fb"; }

.icon-layout-media-overlay-alt:before {
  content: "\e6fc"; }

.icon-layout-media-overlay-alt-2:before {
  content: "\e6fd"; }

.icon-layout-media-left-alt:before {
  content: "\e6fe"; }

.icon-layout-media-left:before {
  content: "\e6ff"; }

.icon-layout-media-center-alt:before {
  content: "\e700"; }

.icon-layout-media-center:before {
  content: "\e701"; }

.icon-layout-list-thumb:before {
  content: "\e702"; }

.icon-layout-list-thumb-alt:before {
  content: "\e703"; }

.icon-layout-list-post:before {
  content: "\e704"; }

.icon-layout-list-large-image:before {
  content: "\e705"; }

.icon-layout-line-solid:before {
  content: "\e706"; }

.icon-layout-grid4:before {
  content: "\e707"; }

.icon-layout-grid3:before {
  content: "\e708"; }

.icon-layout-grid2:before {
  content: "\e709"; }

.icon-layout-grid2-thumb:before {
  content: "\e70a"; }

.icon-layout-cta-right:before {
  content: "\e70b"; }

.icon-layout-cta-left:before {
  content: "\e70c"; }

.icon-layout-cta-center:before {
  content: "\e70d"; }

.icon-layout-cta-btn-right:before {
  content: "\e70e"; }

.icon-layout-cta-btn-left:before {
  content: "\e70f"; }

.icon-layout-column4:before {
  content: "\e710"; }

.icon-layout-column3:before {
  content: "\e711"; }

.icon-layout-column2:before {
  content: "\e712"; }

.icon-layout-accordion-separated:before {
  content: "\e713"; }

.icon-layout-accordion-merged:before {
  content: "\e714"; }

.icon-layout-accordion-list:before {
  content: "\e715"; }

.icon-ink-pen:before {
  content: "\e716"; }

.icon-info-alt:before {
  content: "\e717"; }

.icon-help-alt:before {
  content: "\e718"; }

.icon-headphone-alt:before {
  content: "\e719"; }

.icon-hand-point-up:before {
  content: "\e71a"; }

.icon-hand-point-right:before {
  content: "\e71b"; }

.icon-hand-point-left:before {
  content: "\e71c"; }

.icon-hand-point-down:before {
  content: "\e71d"; }

.icon-gallery:before {
  content: "\e71e"; }

.icon-face-smile:before {
  content: "\e71f"; }

.icon-face-sad:before {
  content: "\e720"; }

.icon-credit-card:before {
  content: "\e721"; }

.icon-control-skip-forward:before {
  content: "\e722"; }

.icon-control-skip-backward:before {
  content: "\e723"; }

.icon-control-record:before {
  content: "\e724"; }

.icon-control-eject:before {
  content: "\e725"; }

.icon-comments-smiley:before {
  content: "\e726"; }

.icon-brush-alt:before {
  content: "\e727"; }

.icon-youtube:before {
  content: "\e728"; }

.icon-vimeo:before {
  content: "\e729"; }

.icon-twitter:before {
  content: "\e72a"; }

.icon-time:before {
  content: "\e72b"; }

.icon-tumblr:before {
  content: "\e72c"; }

.icon-skype:before {
  content: "\e72d"; }

.icon-share:before {
  content: "\e72e"; }

.icon-share-alt:before {
  content: "\e72f"; }

.icon-rocket:before {
  content: "\e730"; }

.icon-pinterest:before {
  content: "\e731"; }

.icon-new-window:before {
  content: "\e732"; }

.icon-microsoft:before {
  content: "\e733"; }

.icon-list-ol:before {
  content: "\e734"; }

.icon-linkedin:before {
  content: "\e735"; }

.icon-layout-sidebar-2:before {
  content: "\e736"; }

.icon-layout-grid4-alt:before {
  content: "\e737"; }

.icon-layout-grid3-alt:before {
  content: "\e738"; }

.icon-layout-grid2-alt:before {
  content: "\e739"; }

.icon-layout-column4-alt:before {
  content: "\e73a"; }

.icon-layout-column3-alt:before {
  content: "\e73b"; }

.icon-layout-column2-alt:before {
  content: "\e73c"; }

.icon-instagram:before {
  content: "\e73d"; }

.icon-google:before {
  content: "\e73e"; }

.icon-github:before {
  content: "\e73f"; }

.icon-flickr:before {
  content: "\e740"; }

.icon-facebook:before {
  content: "\e741"; }

.icon-dropbox:before {
  content: "\e742"; }

.icon-dribbble:before {
  content: "\e743"; }

.icon-apple:before {
  content: "\e744"; }

.icon-android:before {
  content: "\e745"; }

.icon-save:before {
  content: "\e746"; }

.icon-save-alt:before {
  content: "\e747"; }

.icon-yahoo:before {
  content: "\e748"; }

.icon-wordpress:before {
  content: "\e749"; }

.icon-vimeo-alt:before {
  content: "\e74a"; }

.icon-twitter-alt:before {
  content: "\e74b"; }

.icon-tumblr-alt:before {
  content: "\e74c"; }

.icon-trello:before {
  content: "\e74d"; }

.icon-stack-overflow:before {
  content: "\e74e"; }

.icon-soundcloud:before {
  content: "\e74f"; }

.icon-sharethis:before {
  content: "\e750"; }

.icon-sharethis-alt:before {
  content: "\e751"; }

.icon-reddit:before {
  content: "\e752"; }

.icon-pinterest-alt:before {
  content: "\e753"; }

.icon-microsoft-alt:before {
  content: "\e754"; }

.icon-linux:before {
  content: "\e755"; }

.icon-jsfiddle:before {
  content: "\e756"; }

.icon-joomla:before {
  content: "\e757"; }

.icon-html5:before {
  content: "\e758"; }

.icon-flickr-alt:before {
  content: "\e759"; }

.icon-email:before {
  content: "\e75a"; }

.icon-drupal:before {
  content: "\e75b"; }

.icon-dropbox-alt:before {
  content: "\e75c"; }

.icon-css3:before {
  content: "\e75d"; }

.icon-rss:before {
  content: "\e75e"; }

.icon-rss-alt:before {
  content: "\e75f"; }

:host {
  background-color: #23282d;
  overflow: hidden;
  display: flex; }
  :host:last-child {
    resize: none !important; }
  :host /deep/ > ui-frame {
    font-size: 0.7em; }
    :host /deep/ > ui-frame > header {
      flex-shrink: 0;
      display: flex;
      align-items: center;
      flex-direction: row;
      height: 24px;
      flex-shrink: 0;
      background-color: #505b66;
      border-bottom: 1px solid #23282d; }
      :host /deep/ > ui-frame > header > * {
        padding-left: 5px;
        display: inline-flex; }
    :host /deep/ > ui-frame > main {
      background-color: #505b66;
      /* info : need to see resize icon for Chrome*/ }
      :host /deep/ > ui-frame > main > nav.tabs {
        display: flex;
        align-items: start;
        background: #23282d; }
      :host /deep/ > ui-frame > main > section.tab-content {
        display: flex;
        flex: 1; }
    :host /deep/ > ui-frame > footer {
      display: flex;
      align-items: center;
      flex-direction: row;
      height: 24px;
      flex-shrink: 0;
      background-color: #505b66;
      border-top: 1px solid #23282d; }
      :host /deep/ > ui-frame > footer > * {
        padding-left: 5px;
        display: inline-flex; }
      :host /deep/ > ui-frame > footer > div.slots {
        height: 24px; }
  :host > div.ui-slice-buttons {
    position: relative;
    display: flex;
    align-items: flex-end;
    background: #23282d;
    z-index: 3; }
    :host > div.ui-slice-buttons > button.btn-resize {
      /* For the moment : use only for Chrome */
      background: #23282d;
      width: 12px;
      height: 12px;
      line-height: 4px;
      bottom: 0;
      right: 0;
      position: absolute;
      padding: 0;
      border: none;
      color: #b9c1c9; }
      :host > div.ui-slice-buttons > button.btn-resize:before {
        font-family: 'themify';
        speak: none;
        font-style: normal;
        font-weight: normal;
        font-variant: normal;
        text-transform: none;
        line-height: 1;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        *margin-right: .3em;
        content: "";
        margin-right: 10px;
        font-size: 10px;
        color: inherit; }
      :host > div.ui-slice-buttons > button.btn-resize:before {
        margin-right: 0;
        font-size: 8px; }
  :host:not([positiontabs]) /deep/ > ui-frame > main > nav.tabs, :host[positiontabs=""] /deep/ > ui-frame > main > nav.tabs {
    height: 24px; }
    :host:not([positiontabs]) /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag > h3, :host[positiontabs=""] /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag > h3 {
      /* Panel title */
      border: 1px solid #23282d;
      padding: 0 5px;
      height: 23px;
      font-weight: normal;
      margin: 0;
      margin-bottom: -1px; }
      :host:not([positiontabs]) /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag > h3 > a, :host[positiontabs=""] /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag > h3 > a {
        text-decoration: none;
        border-left: 1px solid transparent;
        border-right: 1px solid transparent;
        white-space: nowrap;
        display: inline-flex;
        align-items: center; }
        :host:not([positiontabs]) /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag > h3 > a > /deep/ ui-label > img, :host[positiontabs=""] /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag > h3 > a > /deep/ ui-label > img {
          height: 14px;
          width: 14px; }
        :host:not([positiontabs]) /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag > h3 > a > /deep/ ui-label > span.icon, :host[positiontabs=""] /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag > h3 > a > /deep/ ui-label > span.icon {
          color: #b9c1c9;
          font-size: 0.9em; }
        :host:not([positiontabs]) /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag > h3 > a > /deep/ ui-label > span.label, :host[positiontabs=""] /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag > h3 > a > /deep/ ui-label > span.label {
          color: #b9c1c9;
          font-size: 0.9em; }
          :host:not([positiontabs]) /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag > h3 > a > /deep/ ui-label > span.label:not(.unique), :host[positiontabs=""] /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag > h3 > a > /deep/ ui-label > span.label:not(.unique) {
            margin-left: 5px; }
    :host:not([positiontabs]) /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag.active, :host[positiontabs=""] /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag.active {
      z-index: 2; }
      :host:not([positiontabs]) /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag.active > h3, :host[positiontabs=""] /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag.active > h3 {
        background-color: #505b66;
        border: 1px solid #505b66;
        border-top-left-radius: 2.5px;
        border-top-right-radius: 2.5px; }
      :host:not([positiontabs]) /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag.active.focus > h3, :host[positiontabs=""] /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag.active.focus > h3 {
        border: 1px solid #1D71BC;
        z-index: 2;
        border-bottom: 1px solid #505b66; }
        :host:not([positiontabs]) /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag.active.focus > h3 > /deep/ ui-label > img, :host[positiontabs=""] /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag.active.focus > h3 > /deep/ ui-label > img {
          height: 14px;
          width: 14px; }
        :host:not([positiontabs]) /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag.active.focus > h3 > /deep/ ui-label > span.icon, :host[positiontabs=""] /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag.active.focus > h3 > /deep/ ui-label > span.icon {
          color: #f0f0f0;
          font-size: 0.9em; }
        :host:not([positiontabs]) /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag.active.focus > h3 > /deep/ ui-label > span.label, :host[positiontabs=""] /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag.active.focus > h3 > /deep/ ui-label > span.label {
          color: #f0f0f0;
          font-size: 0.9em; }
          :host:not([positiontabs]) /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag.active.focus > h3 > /deep/ ui-label > span.label:not(.unique), :host[positiontabs=""] /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag.active.focus > h3 > /deep/ ui-label > span.label:not(.unique) {
            margin-left: 5px; }
        :host:not([positiontabs]) /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag.active.focus > h3 > a > /deep/ ui-label > img, :host[positiontabs=""] /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag.active.focus > h3 > a > /deep/ ui-label > img {
          height: 14px;
          width: 14px; }
        :host:not([positiontabs]) /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag.active.focus > h3 > a > /deep/ ui-label > span.icon, :host[positiontabs=""] /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag.active.focus > h3 > a > /deep/ ui-label > span.icon {
          color: #f0f0f0;
          font-size: 0.9em; }
        :host:not([positiontabs]) /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag.active.focus > h3 > a > /deep/ ui-label > span.label, :host[positiontabs=""] /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag.active.focus > h3 > a > /deep/ ui-label > span.label {
          color: #f0f0f0;
          font-size: 0.9em; }
          :host:not([positiontabs]) /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag.active.focus > h3 > a > /deep/ ui-label > span.label:not(.unique), :host[positiontabs=""] /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag.active.focus > h3 > a > /deep/ ui-label > span.label:not(.unique) {
            margin-left: 5px; }
      :host:not([positiontabs]) /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag.active.unique-tab, :host[positiontabs=""] /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag.active.unique-tab {
        display: flex;
        flex: 1;
        height: initial;
        /* bug fixed : avoid highlight border appears during vertical window resizing*/ }
        :host:not([positiontabs]) /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag.active.unique-tab > h3, :host[positiontabs=""] /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag.active.unique-tab > h3 {
          display: flex;
          flex: 1; }
          :host:not([positiontabs]) /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag.active.unique-tab > h3 > /deep/ ui-label > img, :host[positiontabs=""] /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag.active.unique-tab > h3 > /deep/ ui-label > img {
            height: 14px;
            width: 14px; }
          :host:not([positiontabs]) /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag.active.unique-tab > h3 > /deep/ ui-label > span.icon, :host[positiontabs=""] /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag.active.unique-tab > h3 > /deep/ ui-label > span.icon {
            color: #b9c1c9;
            font-size: 0.9em; }
          :host:not([positiontabs]) /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag.active.unique-tab > h3 > /deep/ ui-label > span.label, :host[positiontabs=""] /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag.active.unique-tab > h3 > /deep/ ui-label > span.label {
            color: #b9c1c9;
            font-size: 0.9em; }
            :host:not([positiontabs]) /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag.active.unique-tab > h3 > /deep/ ui-label > span.label:not(.unique), :host[positiontabs=""] /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag.active.unique-tab > h3 > /deep/ ui-label > span.label:not(.unique) {
              margin-left: 5px; }
  :host[positiontabs=TOP] /deep/ > ui-frame > main > nav.tabs {
    height: 24px; }
    :host[positiontabs=TOP] /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag > h3 {
      /* Panel title */
      border: 1px solid #23282d;
      padding: 0 5px;
      height: 23px;
      font-weight: normal;
      margin: 0;
      margin-bottom: -1px; }
      :host[positiontabs=TOP] /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag > h3 > a {
        text-decoration: none;
        border-left: 1px solid transparent;
        border-right: 1px solid transparent;
        white-space: nowrap;
        display: inline-flex;
        align-items: center; }
        :host[positiontabs=TOP] /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag > h3 > a > /deep/ ui-label > img {
          height: 14px;
          width: 14px; }
        :host[positiontabs=TOP] /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag > h3 > a > /deep/ ui-label > span.icon {
          color: #b9c1c9;
          font-size: 0.9em; }
        :host[positiontabs=TOP] /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag > h3 > a > /deep/ ui-label > span.label {
          color: #b9c1c9;
          font-size: 0.9em; }
          :host[positiontabs=TOP] /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag > h3 > a > /deep/ ui-label > span.label:not(.unique) {
            margin-left: 5px; }
    :host[positiontabs=TOP] /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag.active {
      z-index: 2; }
      :host[positiontabs=TOP] /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag.active > h3 {
        background-color: #505b66;
        border: 1px solid #505b66;
        border-top-left-radius: 2.5px;
        border-top-right-radius: 2.5px; }
      :host[positiontabs=TOP] /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag.active.focus > h3 {
        border: 1px solid #1D71BC;
        z-index: 2;
        border-bottom: 1px solid #505b66; }
        :host[positiontabs=TOP] /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag.active.focus > h3 > /deep/ ui-label > img {
          height: 14px;
          width: 14px; }
        :host[positiontabs=TOP] /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag.active.focus > h3 > /deep/ ui-label > span.icon {
          color: #f0f0f0;
          font-size: 0.9em; }
        :host[positiontabs=TOP] /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag.active.focus > h3 > /deep/ ui-label > span.label {
          color: #f0f0f0;
          font-size: 0.9em; }
          :host[positiontabs=TOP] /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag.active.focus > h3 > /deep/ ui-label > span.label:not(.unique) {
            margin-left: 5px; }
        :host[positiontabs=TOP] /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag.active.focus > h3 > a > /deep/ ui-label > img {
          height: 14px;
          width: 14px; }
        :host[positiontabs=TOP] /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag.active.focus > h3 > a > /deep/ ui-label > span.icon {
          color: #f0f0f0;
          font-size: 0.9em; }
        :host[positiontabs=TOP] /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag.active.focus > h3 > a > /deep/ ui-label > span.label {
          color: #f0f0f0;
          font-size: 0.9em; }
          :host[positiontabs=TOP] /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag.active.focus > h3 > a > /deep/ ui-label > span.label:not(.unique) {
            margin-left: 5px; }
      :host[positiontabs=TOP] /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag.active.unique-tab {
        display: flex;
        flex: 1;
        height: initial;
        /* bug fixed : avoid highlight border appears during vertical window resizing*/ }
        :host[positiontabs=TOP] /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag.active.unique-tab > h3 {
          display: flex;
          flex: 1; }
          :host[positiontabs=TOP] /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag.active.unique-tab > h3 > /deep/ ui-label > img {
            height: 14px;
            width: 14px; }
          :host[positiontabs=TOP] /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag.active.unique-tab > h3 > /deep/ ui-label > span.icon {
            color: #b9c1c9;
            font-size: 0.9em; }
          :host[positiontabs=TOP] /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag.active.unique-tab > h3 > /deep/ ui-label > span.label {
            color: #b9c1c9;
            font-size: 0.9em; }
            :host[positiontabs=TOP] /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag.active.unique-tab > h3 > /deep/ ui-label > span.label:not(.unique) {
              margin-left: 5px; }
  :host[positiontabs=BOTTOM] /deep/ > ui-frame > main > nav.tabs {
    height: 24px; }
    :host[positiontabs=BOTTOM] /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag > h3 {
      /* Panel title */
      border: 1px solid #23282d;
      padding: 0 5px;
      height: 23px;
      font-weight: normal;
      margin: 0;
      margin-top: -1px; }
      :host[positiontabs=BOTTOM] /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag > h3 > a {
        text-decoration: none;
        border-left: 1px solid transparent;
        border-right: 1px solid transparent;
        white-space: nowrap;
        display: inline-flex;
        align-items: center; }
        :host[positiontabs=BOTTOM] /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag > h3 > a > /deep/ ui-label > img {
          height: 14px;
          width: 14px; }
        :host[positiontabs=BOTTOM] /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag > h3 > a > /deep/ ui-label > span.icon {
          color: #b9c1c9;
          font-size: 0.9em; }
        :host[positiontabs=BOTTOM] /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag > h3 > a > /deep/ ui-label > span.label {
          color: #b9c1c9;
          font-size: 0.9em; }
          :host[positiontabs=BOTTOM] /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag > h3 > a > /deep/ ui-label > span.label:not(.unique) {
            margin-left: 5px; }
    :host[positiontabs=BOTTOM] /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag.active {
      z-index: 2; }
      :host[positiontabs=BOTTOM] /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag.active > h3 {
        background-color: #505b66;
        border: 1px solid #505b66;
        border-bottom-left-radius: 2.5px;
        border-bottom-right-radius: 2.5px; }
      :host[positiontabs=BOTTOM] /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag.active.focus > h3 {
        border: 1px solid #1D71BC;
        z-index: 2;
        border-top: 1px solid #505b66; }
        :host[positiontabs=BOTTOM] /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag.active.focus > h3 > /deep/ ui-label > img {
          height: 14px;
          width: 14px; }
        :host[positiontabs=BOTTOM] /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag.active.focus > h3 > /deep/ ui-label > span.icon {
          color: #f0f0f0;
          font-size: 0.9em; }
        :host[positiontabs=BOTTOM] /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag.active.focus > h3 > /deep/ ui-label > span.label {
          color: #f0f0f0;
          font-size: 0.9em; }
          :host[positiontabs=BOTTOM] /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag.active.focus > h3 > /deep/ ui-label > span.label:not(.unique) {
            margin-left: 5px; }
        :host[positiontabs=BOTTOM] /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag.active.focus > h3 > a > /deep/ ui-label > img {
          height: 14px;
          width: 14px; }
        :host[positiontabs=BOTTOM] /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag.active.focus > h3 > a > /deep/ ui-label > span.icon {
          color: #f0f0f0;
          font-size: 0.9em; }
        :host[positiontabs=BOTTOM] /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag.active.focus > h3 > a > /deep/ ui-label > span.label {
          color: #f0f0f0;
          font-size: 0.9em; }
          :host[positiontabs=BOTTOM] /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag.active.focus > h3 > a > /deep/ ui-label > span.label:not(.unique) {
            margin-left: 5px; }
      :host[positiontabs=BOTTOM] /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag.active.unique-tab {
        display: flex;
        flex: 1;
        height: initial;
        /* bug fixed : avoid highlight border appears during vertical window resizing*/ }
        :host[positiontabs=BOTTOM] /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag.active.unique-tab > h3 {
          display: flex;
          flex: 1; }
          :host[positiontabs=BOTTOM] /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag.active.unique-tab > h3 > /deep/ ui-label > img {
            height: 14px;
            width: 14px; }
          :host[positiontabs=BOTTOM] /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag.active.unique-tab > h3 > /deep/ ui-label > span.icon {
            color: #b9c1c9;
            font-size: 0.9em; }
          :host[positiontabs=BOTTOM] /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag.active.unique-tab > h3 > /deep/ ui-label > span.label {
            color: #b9c1c9;
            font-size: 0.9em; }
            :host[positiontabs=BOTTOM] /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag.active.unique-tab > h3 > /deep/ ui-label > span.label:not(.unique) {
              margin-left: 5px; }
  :host[positiontabs=LEFT] /deep/ > ui-frame > main > nav.tabs {
    height: initial; }
    :host[positiontabs=LEFT] /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag > h3 {
      /* Panel title */
      border: 1px solid #23282d;
      padding: 0 5px;
      height: 22px;
      font-weight: normal;
      margin: 0;
      margin-right: -1px; }
      :host[positiontabs=LEFT] /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag > h3 > a {
        text-decoration: none;
        border-left: 1px solid transparent;
        border-right: 1px solid transparent;
        white-space: nowrap;
        display: inline-flex;
        align-items: center; }
        :host[positiontabs=LEFT] /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag > h3 > a > /deep/ ui-label > img {
          height: 14px;
          width: 14px; }
        :host[positiontabs=LEFT] /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag > h3 > a > /deep/ ui-label > span.icon {
          color: #b9c1c9;
          font-size: 0.9em; }
        :host[positiontabs=LEFT] /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag > h3 > a > /deep/ ui-label > span.label {
          color: #b9c1c9;
          font-size: 0.9em; }
          :host[positiontabs=LEFT] /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag > h3 > a > /deep/ ui-label > span.label:not(.unique) {
            margin-left: 5px; }
    :host[positiontabs=LEFT] /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag.active {
      z-index: 2; }
      :host[positiontabs=LEFT] /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag.active > h3 {
        background-color: #505b66;
        border: 1px solid #505b66;
        border-top-left-radius: 2.5px;
        border-bottom-left-radius: 2.5px; }
      :host[positiontabs=LEFT] /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag.active.focus > h3 {
        border: 1px solid #1D71BC;
        z-index: 2;
        border-right: 1px solid #505b66; }
        :host[positiontabs=LEFT] /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag.active.focus > h3 > /deep/ ui-label > img {
          height: 14px;
          width: 14px; }
        :host[positiontabs=LEFT] /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag.active.focus > h3 > /deep/ ui-label > span.icon {
          color: #f0f0f0;
          font-size: 0.9em; }
        :host[positiontabs=LEFT] /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag.active.focus > h3 > /deep/ ui-label > span.label {
          color: #f0f0f0;
          font-size: 0.9em; }
          :host[positiontabs=LEFT] /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag.active.focus > h3 > /deep/ ui-label > span.label:not(.unique) {
            margin-left: 5px; }
        :host[positiontabs=LEFT] /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag.active.focus > h3 > a > /deep/ ui-label > img {
          height: 14px;
          width: 14px; }
        :host[positiontabs=LEFT] /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag.active.focus > h3 > a > /deep/ ui-label > span.icon {
          color: #f0f0f0;
          font-size: 0.9em; }
        :host[positiontabs=LEFT] /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag.active.focus > h3 > a > /deep/ ui-label > span.label {
          color: #f0f0f0;
          font-size: 0.9em; }
          :host[positiontabs=LEFT] /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag.active.focus > h3 > a > /deep/ ui-label > span.label:not(.unique) {
            margin-left: 5px; }
      :host[positiontabs=LEFT] /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag.active.unique-tab {
        display: flex;
        height: initial;
        /* bug fixed : avoid highlight border appears during vertical window resizing*/ }
        :host[positiontabs=LEFT] /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag.active.unique-tab > h3 {
          display: flex;
          flex: 1; }
          :host[positiontabs=LEFT] /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag.active.unique-tab > h3 > /deep/ ui-label > img {
            height: 14px;
            width: 14px; }
          :host[positiontabs=LEFT] /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag.active.unique-tab > h3 > /deep/ ui-label > span.icon {
            color: #b9c1c9;
            font-size: 0.9em; }
          :host[positiontabs=LEFT] /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag.active.unique-tab > h3 > /deep/ ui-label > span.label {
            color: #b9c1c9;
            font-size: 0.9em; }
            :host[positiontabs=LEFT] /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag.active.unique-tab > h3 > /deep/ ui-label > span.label:not(.unique) {
              margin-left: 5px; }
  :host[positiontabs=RIGHT] /deep/ > ui-frame > main > nav.tabs {
    height: initial; }
    :host[positiontabs=RIGHT] /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag > h3 {
      /* Panel title */
      border: 1px solid #23282d;
      padding: 0 5px;
      height: 22px;
      font-weight: normal;
      margin: 0;
      margin-left: -1px; }
      :host[positiontabs=RIGHT] /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag > h3 > a {
        text-decoration: none;
        border-left: 1px solid transparent;
        border-right: 1px solid transparent;
        white-space: nowrap;
        display: inline-flex;
        align-items: center; }
        :host[positiontabs=RIGHT] /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag > h3 > a > /deep/ ui-label > img {
          height: 14px;
          width: 14px; }
        :host[positiontabs=RIGHT] /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag > h3 > a > /deep/ ui-label > span.icon {
          color: #b9c1c9;
          font-size: 0.9em; }
        :host[positiontabs=RIGHT] /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag > h3 > a > /deep/ ui-label > span.label {
          color: #b9c1c9;
          font-size: 0.9em; }
          :host[positiontabs=RIGHT] /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag > h3 > a > /deep/ ui-label > span.label:not(.unique) {
            margin-left: 5px; }
    :host[positiontabs=RIGHT] /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag.active {
      z-index: 2; }
      :host[positiontabs=RIGHT] /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag.active > h3 {
        background-color: #505b66;
        border: 1px solid #505b66;
        border-top-right-radius: 2.5px;
        border-bottom-right-radius: 2.5px; }
      :host[positiontabs=RIGHT] /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag.active.focus > h3 {
        border: 1px solid #1D71BC;
        z-index: 2;
        border-left: 1px solid #505b66; }
        :host[positiontabs=RIGHT] /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag.active.focus > h3 > /deep/ ui-label > img {
          height: 14px;
          width: 14px; }
        :host[positiontabs=RIGHT] /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag.active.focus > h3 > /deep/ ui-label > span.icon {
          color: #f0f0f0;
          font-size: 0.9em; }
        :host[positiontabs=RIGHT] /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag.active.focus > h3 > /deep/ ui-label > span.label {
          color: #f0f0f0;
          font-size: 0.9em; }
          :host[positiontabs=RIGHT] /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag.active.focus > h3 > /deep/ ui-label > span.label:not(.unique) {
            margin-left: 5px; }
        :host[positiontabs=RIGHT] /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag.active.focus > h3 > a > /deep/ ui-label > img {
          height: 14px;
          width: 14px; }
        :host[positiontabs=RIGHT] /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag.active.focus > h3 > a > /deep/ ui-label > span.icon {
          color: #f0f0f0;
          font-size: 0.9em; }
        :host[positiontabs=RIGHT] /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag.active.focus > h3 > a > /deep/ ui-label > span.label {
          color: #f0f0f0;
          font-size: 0.9em; }
          :host[positiontabs=RIGHT] /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag.active.focus > h3 > a > /deep/ ui-label > span.label:not(.unique) {
            margin-left: 5px; }
      :host[positiontabs=RIGHT] /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag.active.unique-tab {
        display: flex;
        height: initial;
        /* bug fixed : avoid highlight border appears during vertical window resizing*/ }
        :host[positiontabs=RIGHT] /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag.active.unique-tab > h3 {
          display: flex;
          flex: 1; }
          :host[positiontabs=RIGHT] /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag.active.unique-tab > h3 > /deep/ ui-label > img {
            height: 14px;
            width: 14px; }
          :host[positiontabs=RIGHT] /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag.active.unique-tab > h3 > /deep/ ui-label > span.icon {
            color: #b9c1c9;
            font-size: 0.9em; }
          :host[positiontabs=RIGHT] /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag.active.unique-tab > h3 > /deep/ ui-label > span.label {
            color: #b9c1c9;
            font-size: 0.9em; }
            :host[positiontabs=RIGHT] /deep/ > ui-frame > main > nav.tabs /deep/ > ui-tag.active.unique-tab > h3 > /deep/ ui-label > span.label:not(.unique) {
              margin-left: 5px; }
`],
        template: `<ui-frame [icon]="icon" [title]="title" hlevel="2" [header]="header" [footer]="footer" [direction]="positionTabs.contentDirection">
    <ng-content class="frame-header-slot-left" select=".section-header-slot-left"></ng-content>
    <ng-content class="frame-header-slot-center" select=".section-header-slot-center"></ng-content>
    <ng-content class="frame-header-slot-right" select=".section-header-slot-right"></ng-content>
    <nav  *ngIf="componentChildrenCount > 0" class="tabs frame-content" [ngStyle]="{'flex-direction' : positionTabs.tabsDirection}">
        <ui-tag [icon]="panel.icon" 
                [label]="panel.title" 
                link="#" 
                hlevel="3" 
                class="tab"
                [ngClass]="{'unique-tab': componentChildrenCount == 1}"
                *ngFor="let panel of panelChildren; let i = index" 
                [attr.name]="'ui-panel-' + numberSection +'-' + i" 
                (click)="clickTab(panel)" 
                clickOutside (clickOutside)="onClickOutside(panel)" 
                [class.active]="panel.active" 
                [class.focus]="panel.focus">
        </ui-tag>
    </nav>
    <section class="tab-content frame-content" (selectPanel)="clickTab(panel)">
        <ng-content select=".section-content"></ng-content>
    </section>
    <ng-content class="frame-footer-slot-left" select=".section-footer-slot-left"></ng-content>
    <ng-content class="frame-footer-slot-center" select=".section-footer-slot-center"></ng-content>
    <ng-content class="frame-footer-slot-right" select=".section-footer-slot-right"></ng-content>
</ui-frame>
<div class="ui-slice-buttons" *ngIf="!isLastOne && wrappedBySlice">
    <button *ngIf="isChrome" class="btn-resize" [ngClass]="{'icon-rotate-90': isChrome && parentDirection === 'ROW'}"></button>
</div>`
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, core_1.ChangeDetectorRef])
], UISectionComponent);
exports.UISectionComponent = UISectionComponent;
var PositionEnums;
(function (PositionEnums) {
    PositionEnums[PositionEnums["TOP"] = 'TOP'] = "TOP";
    PositionEnums[PositionEnums["BOTTOM"] = 'BOTTOM'] = "BOTTOM";
    PositionEnums[PositionEnums["LEFT"] = 'LEFT'] = "LEFT";
    PositionEnums[PositionEnums["RIGHT"] = 'RIGHT'] = "RIGHT";
})(PositionEnums = exports.PositionEnums || (exports.PositionEnums = {}));
var DirectionFlexPositionEnums;
(function (DirectionFlexPositionEnums) {
    DirectionFlexPositionEnums[DirectionFlexPositionEnums["TOP"] = {
        contentDirection: "column",
        tabsDirection: "row"
    }] = "TOP";
    DirectionFlexPositionEnums[DirectionFlexPositionEnums["BOTTOM"] = {
        contentDirection: "column-reverse",
        tabsDirection: "row"
    }] = "BOTTOM";
    DirectionFlexPositionEnums[DirectionFlexPositionEnums["LEFT"] = {
        contentDirection: "row",
        tabsDirection: "column"
    }] = "LEFT";
    DirectionFlexPositionEnums[DirectionFlexPositionEnums["RIGHT"] = {
        contentDirection: "row-reverse",
        tabsDirection: "column"
    }] = "RIGHT";
})(DirectionFlexPositionEnums || (DirectionFlexPositionEnums = {}));
function checkIsChrome() {
    return /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
}
function getButtonsByClassName(selector, classButton) {
    return document.querySelectorAll(`${selector} > ${classButton}`);
}
function getDirectChildren(selector) {
    let directChildren = [];
    let children = document.querySelectorAll(`${selector} > *`);
    for (let i = 0; i < children.length; i++) {
        if (children[i].nodeName.indexOf("UI-") === 0) {
            directChildren.push(children[i]);
        }
    }
    return directChildren;
}
//# sourceMappingURL=section.component.js.map