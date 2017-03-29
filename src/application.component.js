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
var UIApplicationComponent = (function () {
    function UIApplicationComponent(elRef) {
        this.elHTML = elRef.nativeElement;
        this.icon = null;
        this.title = null;
        this.header = true;
        this.footer = false;
        this.layoutType = layouTypeEnums.SPLITTER;
        this.direction = DirectionEnums.ROW;
        this.componentChildrenCount = 0;
    }
    UIApplicationComponent.prototype.ngOnInit = function () {
        this.elHTML.setAttribute("direction", this.direction.toString());
        this.componentChildrenCount = document.getElementById("main-content").childElementCount;
        this.isEdge = checkIsEdge();
        this.isFirefox = checkIsFirefox();
        this.isChrome = checkIsChrome();
        this.isSystemJS = checkIsSystemJS();
        this.scrollbarWidth = (this.isEdge) ? 12 : 17;
        this.bodyWidth = document.body.clientWidth;
        this.mainContentHeight = this.getMainContentHeight();
        this.widthHeightApply(true);
        this.childrenSetId();
    };
    UIApplicationComponent.prototype.getMainContentHeight = function () {
        var mainContentInnerHeight;
        mainContentInnerHeight = window.innerHeight;
        if (this.header) {
            mainContentInnerHeight = mainContentInnerHeight - 33;
        }
        if (this.footer) {
            mainContentInnerHeight = mainContentInnerHeight - 33;
        }
        return mainContentInnerHeight;
    };
    UIApplicationComponent.prototype.widthHeightApply = function (isInit) {
        this.bodyWidth = document.body.clientWidth;
        this.mainContentHeight = this.getMainContentHeight();
        this.mainContentWidthApply(isInit);
        this.mainContentHeightApply(isInit);
        if (this.componentChildrenCount > 1) {
            this.childrenLengthApplyExceptLastOne(isInit);
        }
    };
    UIApplicationComponent.prototype.mainContentWidthApply = function (isInit) {
        var minWidth = this.bodyWidth.toString() + "px";
        document.getElementById("main-content").style.minWidth = minWidth;
        if (this.componentChildrenCount > 1) {
            var mainWidth;
            if (this.isSystemJS) {
                mainWidth = this.bodyWidth.toString() + "px";
            }
            else {
                mainWidth = (isInit && !this.isEdge) ? (this.bodyWidth + (this.scrollbarWidth - 1)).toString() + "px" : this.bodyWidth.toString() + "px";
            }
            document.getElementById("main-content").style.width = mainWidth;
        }
    };
    UIApplicationComponent.prototype.mainContentHeightApply = function (isInit) {
        var mainHeight = this.mainContentHeight.toString() + "px";
        if (this.componentChildrenCount > 1) {
            if (this.isSystemJS) {
                if (this.isFirefox || this.isEdge) {
                    mainHeight = (this.mainContentHeight + this.scrollbarWidth).toString() + "px";
                }
            }
        }
        document.getElementById("main-content").style.flexBasis = mainHeight;
    };
    UIApplicationComponent.prototype.childrenLengthApplyExceptLastOne = function (isInit) {
        console.debug("childrenLengthApplyExceptLastOne(" + isInit + ")");
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
    };
    UIApplicationComponent.prototype.switchDirection = function (childDirection) {
        var styles;
        styles = {};
        var switchedDirection;
        switchedDirection = (childDirection === "COLUMN") ? "ROW" : "COLUMN";
        styles["flex-direction"] = switchedDirection;
        return styles;
    };
    UIApplicationComponent.prototype.childrenSetId = function () {
        console.debug("childrenSetId");
        if (this.componentChildrenCount === 0) {
            console.error("childrenSetId => children count === 0");
            return;
        }
        var componentChildren = getDirectChildrenById("#main-content");
        for (var nChild = 0; nChild < this.componentChildrenCount; nChild++) {
            var currentChildComponent = componentChildren.item(nChild);
            var tagName = currentChildComponent.tagName.toLowerCase();
            currentChildComponent.setAttribute("id", tagName + "-" + nChild);
        }
    };
    return UIApplicationComponent;
}());
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
UIApplicationComponent = __decorate([
    core_1.Component({
        moduleId: typeof module.id === 'string' ? module.id : null,
        selector: 'ui-application',
        styles: ["/* FONT PATH\n * -------------------------- */\n@font-face {\n  font-family: 'themify';\n  src: url(../scss/themify-icons/fonts/themify.eot?-fvbane);\n  src: url(../scss/themify-icons/fonts/themify.eot?#iefix-fvbane) format(\"embedded-opentype\"), url(../scss/themify-icons/fonts/themify.woff?-fvbane) format(\"woff\"), url(../scss/themify-icons/fonts/themify.ttf?-fvbane) format(\"truetype\"), url(../scss/themify-icons/fonts/themify.svg?-fvbane#themify) format(\"svg\");\n  font-weight: normal;\n  font-style: normal; }\n\n[class^=\"icon-\"],\n[class*=\" icon-\"] {\n  font-family: 'themify';\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  *margin-right: .3em; }\n\n[class^=\"icon-\"]:before,\n[class*=\" icon-\"]:before {\n  text-decoration: inherit;\n  display: inline-block;\n  speak: none; }\n\n/* makes the font 33% larger relative to the icon container */\n.icon-large:before {\n  vertical-align: -10%;\n  font-size: 1.33333em; }\n\n/* makes sure icons active on rollover in links */\na [class^=\"icon-\"],\na [class*=\" icon-\"] {\n  display: inline; }\n\n/* increased font size for icon-large */\n[class^=\"icon-\"].icon-fixed-width,\n[class*=\" icon-\"].icon-fixed-width {\n  display: inline-block;\n  width: 1.14286em;\n  text-align: right;\n  padding-right: 0.28571em; }\n  [class^=\"icon-\"].icon-fixed-width.icon-large,\n  [class*=\" icon-\"].icon-fixed-width.icon-large {\n    width: 1.42857em; }\n\n.icons-ul {\n  margin-left: 2.14286em;\n  list-style-type: none; }\n  .icons-ul > li {\n    position: relative; }\n  .icons-ul .icon-li {\n    position: absolute;\n    left: -2.14286em;\n    width: 2.14286em;\n    text-align: center;\n    line-height: inherit; }\n\n[class^=\"icon-\"].hide,\n[class*=\" icon-\"].hide {\n  display: none; }\n\n.icon-muted {\n  color: #eeeeee; }\n\n.icon-light {\n  color: white; }\n\n.icon-dark {\n  color: #333333; }\n\n.icon-border {\n  border: solid 1px #eeeeee;\n  padding: .2em .25em .15em;\n  -webkit-border-radius: 3px;\n  -moz-border-radius: 3px;\n  border-radius: 3px; }\n\n.icon-2x {\n  font-size: 2em; }\n  .icon-2x.icon-border {\n    border-width: 2px;\n    -webkit-border-radius: 4px;\n    -moz-border-radius: 4px;\n    border-radius: 4px; }\n\n.icon-3x {\n  font-size: 3em; }\n  .icon-3x.icon-border {\n    border-width: 3px;\n    -webkit-border-radius: 5px;\n    -moz-border-radius: 5px;\n    border-radius: 5px; }\n\n.icon-4x {\n  font-size: 4em; }\n  .icon-4x.icon-border {\n    border-width: 4px;\n    -webkit-border-radius: 6px;\n    -moz-border-radius: 6px;\n    border-radius: 6px; }\n\n.icon-5x {\n  font-size: 5em; }\n  .icon-5x.icon-border {\n    border-width: 5px;\n    -webkit-border-radius: 7px;\n    -moz-border-radius: 7px;\n    border-radius: 7px; }\n\n.pull-right {\n  float: right; }\n\n.pull-left {\n  float: left; }\n\n[class^=\"icon-\"].pull-left,\n[class*=\" icon-\"].pull-left {\n  margin-right: .3em; }\n\n[class^=\"icon-\"].pull-right,\n[class*=\" icon-\"].pull-right {\n  margin-left: .3em; }\n\n/* EXTRAS\n * -------------------------- */\n/* Stacked and layered icon */\n.icon-stack {\n  position: relative;\n  display: inline-block;\n  width: 2em;\n  height: 2em;\n  line-height: 2em;\n  vertical-align: -35%; }\n  .icon-stack [class^=\"icon-\"],\n  .icon-stack [class*=\" icon-\"] {\n    display: block;\n    text-align: center;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    font-size: 1em;\n    line-height: inherit;\n    *line-height: 2em; }\n  .icon-stack .icon-stack-base {\n    font-size: 2em;\n    *line-height: 1em; }\n\n/* Animated rotating icon */\n.icon-spin {\n  display: inline-block;\n  -moz-animation: spin 2s infinite linear;\n  -o-animation: spin 2s infinite linear;\n  -webkit-animation: spin 2s infinite linear;\n  animation: spin 2s infinite linear; }\n\n/* Prevent stack and spinners from being taken inline when inside a link */\na .icon-stack,\na .icon-spin {\n  display: inline-block;\n  text-decoration: none; }\n\n@-moz-keyframes spin {\n  0% {\n    -moz-transform: rotate(0deg); }\n  100% {\n    -moz-transform: rotate(359deg); } }\n\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(359deg); } }\n\n@-o-keyframes spin {\n  0% {\n    -o-transform: rotate(0deg); }\n  100% {\n    -o-transform: rotate(359deg); } }\n\n@-ms-keyframes spin {\n  0% {\n    -ms-transform: rotate(0deg); }\n  100% {\n    -ms-transform: rotate(359deg); } }\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg); }\n  100% {\n    transform: rotate(359deg); } }\n\n/* Icon rotations and mirroring */\n.icon-rotate-90:before {\n  -webkit-transform: rotate(90deg);\n  -moz-transform: rotate(90deg);\n  -ms-transform: rotate(90deg);\n  -o-transform: rotate(90deg);\n  transform: rotate(90deg);\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=1); }\n\n.icon-rotate-180:before {\n  -webkit-transform: rotate(180deg);\n  -moz-transform: rotate(180deg);\n  -ms-transform: rotate(180deg);\n  -o-transform: rotate(180deg);\n  transform: rotate(180deg);\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2); }\n\n.icon-rotate-270:before {\n  -webkit-transform: rotate(270deg);\n  -moz-transform: rotate(270deg);\n  -ms-transform: rotate(270deg);\n  -o-transform: rotate(270deg);\n  transform: rotate(270deg);\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3); }\n\n.icon-flip-horizontal:before {\n  -webkit-transform: scale(-1, 1);\n  -moz-transform: scale(-1, 1);\n  -ms-transform: scale(-1, 1);\n  -o-transform: scale(-1, 1);\n  transform: scale(-1, 1); }\n\n.icon-flip-vertical:before {\n  -webkit-transform: scale(1, -1);\n  -moz-transform: scale(1, -1);\n  -ms-transform: scale(1, -1);\n  -o-transform: scale(1, -1);\n  transform: scale(1, -1); }\n\n/* ensure rotation occurs inside anchor tags */\na .icon-rotate-90:before, a .icon-rotate-180:before, a .icon-rotate-270:before, a .icon-flip-horizontal:before, a .icon-flip-vertical:before {\n  display: inline-block; }\n\n.icon-wand:before {\n  content: \"e600\"; }\n\n.icon-volume:before {\n  content: \"e601\"; }\n\n.icon-user:before {\n  content: \"e602\"; }\n\n.icon-unlock:before {\n  content: \"e603\"; }\n\n.icon-unlink:before {\n  content: \"e604\"; }\n\n.icon-trash:before {\n  content: \"e605\"; }\n\n.icon-thought:before {\n  content: \"e606\"; }\n\n.icon-target:before {\n  content: \"e607\"; }\n\n.icon-tag:before {\n  content: \"e608\"; }\n\n.icon-tablet:before {\n  content: \"e609\"; }\n\n.icon-star:before {\n  content: \"e60a\"; }\n\n.icon-spray:before {\n  content: \"e60b\"; }\n\n.icon-signal:before {\n  content: \"e60c\"; }\n\n.icon-shopping-cart:before {\n  content: \"e60d\"; }\n\n.icon-shopping-cart-full:before {\n  content: \"e60e\"; }\n\n.icon-settings:before {\n  content: \"e60f\"; }\n\n.icon-search:before {\n  content: \"e610\"; }\n\n.icon-zoom-in:before {\n  content: \"e611\"; }\n\n.icon-zoom-out:before {\n  content: \"e612\"; }\n\n.icon-cut:before {\n  content: \"e613\"; }\n\n.icon-ruler:before {\n  content: \"e614\"; }\n\n.icon-ruler-pencil:before {\n  content: \"e615\"; }\n\n.icon-ruler-alt:before {\n  content: \"e616\"; }\n\n.icon-bookmark:before {\n  content: \"e617\"; }\n\n.icon-bookmark-alt:before {\n  content: \"e618\"; }\n\n.icon-reload:before {\n  content: \"e619\"; }\n\n.icon-plus:before {\n  content: \"e61a\"; }\n\n.icon-pin:before {\n  content: \"e61b\"; }\n\n.icon-pencil:before {\n  content: \"e61c\"; }\n\n.icon-pencil-alt:before {\n  content: \"e61d\"; }\n\n.icon-paint-roller:before {\n  content: \"e61e\"; }\n\n.icon-paint-bucket:before {\n  content: \"e61f\"; }\n\n.icon-na:before {\n  content: \"e620\"; }\n\n.icon-mobile:before {\n  content: \"e621\"; }\n\n.icon-minus:before {\n  content: \"e622\"; }\n\n.icon-medall:before {\n  content: \"e623\"; }\n\n.icon-medall-alt:before {\n  content: \"e624\"; }\n\n.icon-marker:before {\n  content: \"e625\"; }\n\n.icon-marker-alt:before {\n  content: \"e626\"; }\n\n.icon-arrow-up:before {\n  content: \"e627\"; }\n\n.icon-arrow-right:before {\n  content: \"e628\"; }\n\n.icon-arrow-left:before {\n  content: \"e629\"; }\n\n.icon-arrow-down:before {\n  content: \"e62a\"; }\n\n.icon-lock:before {\n  content: \"e62b\"; }\n\n.icon-location-arrow:before {\n  content: \"e62c\"; }\n\n.icon-link:before {\n  content: \"e62d\"; }\n\n.icon-layout:before {\n  content: \"e62e\"; }\n\n.icon-layers:before {\n  content: \"e62f\"; }\n\n.icon-layers-alt:before {\n  content: \"e630\"; }\n\n.icon-key:before {\n  content: \"e631\"; }\n\n.icon-import:before {\n  content: \"e632\"; }\n\n.icon-image:before {\n  content: \"e633\"; }\n\n.icon-heart:before {\n  content: \"e634\"; }\n\n.icon-heart-broken:before {\n  content: \"e635\"; }\n\n.icon-hand-stop:before {\n  content: \"e636\"; }\n\n.icon-hand-open:before {\n  content: \"e637\"; }\n\n.icon-hand-drag:before {\n  content: \"e638\"; }\n\n.icon-folder:before {\n  content: \"e639\"; }\n\n.icon-flag:before {\n  content: \"e63a\"; }\n\n.icon-flag-alt:before {\n  content: \"e63b\"; }\n\n.icon-flag-alt-2:before {\n  content: \"e63c\"; }\n\n.icon-eye:before {\n  content: \"e63d\"; }\n\n.icon-export:before {\n  content: \"e63e\"; }\n\n.icon-exchange-vertical:before {\n  content: \"e63f\"; }\n\n.icon-desktop:before {\n  content: \"e640\"; }\n\n.icon-cup:before {\n  content: \"e641\"; }\n\n.icon-crown:before {\n  content: \"e642\"; }\n\n.icon-comments:before {\n  content: \"e643\"; }\n\n.icon-comment:before {\n  content: \"e644\"; }\n\n.icon-comment-alt:before {\n  content: \"e645\"; }\n\n.icon-close:before {\n  content: \"e646\"; }\n\n.icon-clip:before {\n  content: \"e647\"; }\n\n.icon-angle-up:before {\n  content: \"e648\"; }\n\n.icon-angle-right:before {\n  content: \"e649\"; }\n\n.icon-angle-left:before {\n  content: \"e64a\"; }\n\n.icon-angle-down:before {\n  content: \"e64b\"; }\n\n.icon-check:before {\n  content: \"e64c\"; }\n\n.icon-check-box:before {\n  content: \"e64d\"; }\n\n.icon-camera:before {\n  content: \"e64e\"; }\n\n.icon-announcement:before {\n  content: \"e64f\"; }\n\n.icon-brush:before {\n  content: \"e650\"; }\n\n.icon-briefcase:before {\n  content: \"e651\"; }\n\n.icon-bolt:before {\n  content: \"e652\"; }\n\n.icon-bolt-alt:before {\n  content: \"e653\"; }\n\n.icon-blackboard:before {\n  content: \"e654\"; }\n\n.icon-bag:before {\n  content: \"e655\"; }\n\n.icon-move:before {\n  content: \"e656\"; }\n\n.icon-arrows-vertical:before {\n  content: \"e657\"; }\n\n.icon-arrows-horizontal:before {\n  content: \"e658\"; }\n\n.icon-fullscreen:before {\n  content: \"e659\"; }\n\n.icon-arrow-top-right:before {\n  content: \"e65a\"; }\n\n.icon-arrow-top-left:before {\n  content: \"e65b\"; }\n\n.icon-arrow-circle-up:before {\n  content: \"e65c\"; }\n\n.icon-arrow-circle-right:before {\n  content: \"e65d\"; }\n\n.icon-arrow-circle-left:before {\n  content: \"e65e\"; }\n\n.icon-arrow-circle-down:before {\n  content: \"e65f\"; }\n\n.icon-angle-double-up:before {\n  content: \"e660\"; }\n\n.icon-angle-double-right:before {\n  content: \"e661\"; }\n\n.icon-angle-double-left:before {\n  content: \"e662\"; }\n\n.icon-angle-double-down:before {\n  content: \"e663\"; }\n\n.icon-zip:before {\n  content: \"e664\"; }\n\n.icon-world:before {\n  content: \"e665\"; }\n\n.icon-wheelchair:before {\n  content: \"e666\"; }\n\n.icon-view-list:before {\n  content: \"e667\"; }\n\n.icon-view-list-alt:before {\n  content: \"e668\"; }\n\n.icon-view-grid:before {\n  content: \"e669\"; }\n\n.icon-uppercase:before {\n  content: \"e66a\"; }\n\n.icon-upload:before {\n  content: \"e66b\"; }\n\n.icon-underline:before {\n  content: \"e66c\"; }\n\n.icon-truck:before {\n  content: \"e66d\"; }\n\n.icon-timer:before {\n  content: \"e66e\"; }\n\n.icon-ticket:before {\n  content: \"e66f\"; }\n\n.icon-thumb-up:before {\n  content: \"e670\"; }\n\n.icon-thumb-down:before {\n  content: \"e671\"; }\n\n.icon-text:before {\n  content: \"e672\"; }\n\n.icon-stats-up:before {\n  content: \"e673\"; }\n\n.icon-stats-down:before {\n  content: \"e674\"; }\n\n.icon-split-v:before {\n  content: \"e675\"; }\n\n.icon-split-h:before {\n  content: \"e676\"; }\n\n.icon-smallcap:before {\n  content: \"e677\"; }\n\n.icon-shine:before {\n  content: \"e678\"; }\n\n.icon-shift-right:before {\n  content: \"e679\"; }\n\n.icon-shift-left:before {\n  content: \"e67a\"; }\n\n.icon-shield:before {\n  content: \"e67b\"; }\n\n.icon-notepad:before {\n  content: \"e67c\"; }\n\n.icon-server:before {\n  content: \"e67d\"; }\n\n.icon-quote-right:before {\n  content: \"e67e\"; }\n\n.icon-quote-left:before {\n  content: \"e67f\"; }\n\n.icon-pulse:before {\n  content: \"e680\"; }\n\n.icon-printer:before {\n  content: \"e681\"; }\n\n.icon-power-off:before {\n  content: \"e682\"; }\n\n.icon-plug:before {\n  content: \"e683\"; }\n\n.icon-pie-chart:before {\n  content: \"e684\"; }\n\n.icon-paragraph:before {\n  content: \"e685\"; }\n\n.icon-panel:before {\n  content: \"e686\"; }\n\n.icon-package:before {\n  content: \"e687\"; }\n\n.icon-music:before {\n  content: \"e688\"; }\n\n.icon-music-alt:before {\n  content: \"e689\"; }\n\n.icon-mouse:before {\n  content: \"e68a\"; }\n\n.icon-mouse-alt:before {\n  content: \"e68b\"; }\n\n.icon-money:before {\n  content: \"e68c\"; }\n\n.icon-microphone:before {\n  content: \"e68d\"; }\n\n.icon-menu:before {\n  content: \"e68e\"; }\n\n.icon-menu-alt:before {\n  content: \"e68f\"; }\n\n.icon-map:before {\n  content: \"e690\"; }\n\n.icon-map-alt:before {\n  content: \"e691\"; }\n\n.icon-loop:before {\n  content: \"e692\"; }\n\n.icon-location-pin:before {\n  content: \"e693\"; }\n\n.icon-list:before {\n  content: \"e694\"; }\n\n.icon-light-bulb:before {\n  content: \"e695\"; }\n\n.icon-Italic:before {\n  content: \"e696\"; }\n\n.icon-info:before {\n  content: \"e697\"; }\n\n.icon-infinite:before {\n  content: \"e698\"; }\n\n.icon-id-badge:before {\n  content: \"e699\"; }\n\n.icon-hummer:before {\n  content: \"e69a\"; }\n\n.icon-home:before {\n  content: \"e69b\"; }\n\n.icon-help:before {\n  content: \"e69c\"; }\n\n.icon-headphone:before {\n  content: \"e69d\"; }\n\n.icon-harddrives:before {\n  content: \"e69e\"; }\n\n.icon-harddrive:before {\n  content: \"e69f\"; }\n\n.icon-gift:before {\n  content: \"e6a0\"; }\n\n.icon-game:before {\n  content: \"e6a1\"; }\n\n.icon-filter:before {\n  content: \"e6a2\"; }\n\n.icon-files:before {\n  content: \"e6a3\"; }\n\n.icon-file:before {\n  content: \"e6a4\"; }\n\n.icon-eraser:before {\n  content: \"e6a5\"; }\n\n.icon-envelope:before {\n  content: \"e6a6\"; }\n\n.icon-download:before {\n  content: \"e6a7\"; }\n\n.icon-direction:before {\n  content: \"e6a8\"; }\n\n.icon-direction-alt:before {\n  content: \"e6a9\"; }\n\n.icon-dashboard:before {\n  content: \"e6aa\"; }\n\n.icon-control-stop:before {\n  content: \"e6ab\"; }\n\n.icon-control-shuffle:before {\n  content: \"e6ac\"; }\n\n.icon-control-play:before {\n  content: \"e6ad\"; }\n\n.icon-control-pause:before {\n  content: \"e6ae\"; }\n\n.icon-control-forward:before {\n  content: \"e6af\"; }\n\n.icon-control-backward:before {\n  content: \"e6b0\"; }\n\n.icon-cloud:before {\n  content: \"e6b1\"; }\n\n.icon-cloud-up:before {\n  content: \"e6b2\"; }\n\n.icon-cloud-down:before {\n  content: \"e6b3\"; }\n\n.icon-clipboard:before {\n  content: \"e6b4\"; }\n\n.icon-car:before {\n  content: \"e6b5\"; }\n\n.icon-calendar:before {\n  content: \"e6b6\"; }\n\n.icon-book:before {\n  content: \"e6b7\"; }\n\n.icon-bell:before {\n  content: \"e6b8\"; }\n\n.icon-basketball:before {\n  content: \"e6b9\"; }\n\n.icon-bar-chart:before {\n  content: \"e6ba\"; }\n\n.icon-bar-chart-alt:before {\n  content: \"e6bb\"; }\n\n.icon-back-right:before {\n  content: \"e6bc\"; }\n\n.icon-back-left:before {\n  content: \"e6bd\"; }\n\n.icon-arrows-corner:before {\n  content: \"e6be\"; }\n\n.icon-archive:before {\n  content: \"e6bf\"; }\n\n.icon-anchor:before {\n  content: \"e6c0\"; }\n\n.icon-align-right:before {\n  content: \"e6c1\"; }\n\n.icon-align-left:before {\n  content: \"e6c2\"; }\n\n.icon-align-justify:before {\n  content: \"e6c3\"; }\n\n.icon-align-center:before {\n  content: \"e6c4\"; }\n\n.icon-alert:before {\n  content: \"e6c5\"; }\n\n.icon-alarm-clock:before {\n  content: \"e6c6\"; }\n\n.icon-agenda:before {\n  content: \"e6c7\"; }\n\n.icon-write:before {\n  content: \"e6c8\"; }\n\n.icon-window:before {\n  content: \"e6c9\"; }\n\n.icon-widgetized:before {\n  content: \"e6ca\"; }\n\n.icon-widget:before {\n  content: \"e6cb\"; }\n\n.icon-widget-alt:before {\n  content: \"e6cc\"; }\n\n.icon-wallet:before {\n  content: \"e6cd\"; }\n\n.icon-video-clapper:before {\n  content: \"e6ce\"; }\n\n.icon-video-camera:before {\n  content: \"e6cf\"; }\n\n.icon-vector:before {\n  content: \"e6d0\"; }\n\n.icon-themify-logo:before {\n  content: \"e6d1\"; }\n\n.icon-themify-favicon:before {\n  content: \"e6d2\"; }\n\n.icon-themify-favicon-alt:before {\n  content: \"e6d3\"; }\n\n.icon-support:before {\n  content: \"e6d4\"; }\n\n.icon-stamp:before {\n  content: \"e6d5\"; }\n\n.icon-split-v-alt:before {\n  content: \"e6d6\"; }\n\n.icon-slice:before {\n  content: \"e6d7\"; }\n\n.icon-shortcode:before {\n  content: \"e6d8\"; }\n\n.icon-shift-right-alt:before {\n  content: \"e6d9\"; }\n\n.icon-shift-left-alt:before {\n  content: \"e6da\"; }\n\n.icon-ruler-alt-2:before {\n  content: \"e6db\"; }\n\n.icon-receipt:before {\n  content: \"e6dc\"; }\n\n.icon-pin2:before {\n  content: \"e6dd\"; }\n\n.icon-pin-alt:before {\n  content: \"e6de\"; }\n\n.icon-pencil-alt2:before {\n  content: \"e6df\"; }\n\n.icon-palette:before {\n  content: \"e6e0\"; }\n\n.icon-more:before {\n  content: \"e6e1\"; }\n\n.icon-more-alt:before {\n  content: \"e6e2\"; }\n\n.icon-microphone-alt:before {\n  content: \"e6e3\"; }\n\n.icon-magnet:before {\n  content: \"e6e4\"; }\n\n.icon-line-double:before {\n  content: \"e6e5\"; }\n\n.icon-line-dotted:before {\n  content: \"e6e6\"; }\n\n.icon-line-dashed:before {\n  content: \"e6e7\"; }\n\n.icon-layout-width-full:before {\n  content: \"e6e8\"; }\n\n.icon-layout-width-default:before {\n  content: \"e6e9\"; }\n\n.icon-layout-width-default-alt:before {\n  content: \"e6ea\"; }\n\n.icon-layout-tab:before {\n  content: \"e6eb\"; }\n\n.icon-layout-tab-window:before {\n  content: \"e6ec\"; }\n\n.icon-layout-tab-v:before {\n  content: \"e6ed\"; }\n\n.icon-layout-tab-min:before {\n  content: \"e6ee\"; }\n\n.icon-layout-slider:before {\n  content: \"e6ef\"; }\n\n.icon-layout-slider-alt:before {\n  content: \"e6f0\"; }\n\n.icon-layout-sidebar-right:before {\n  content: \"e6f1\"; }\n\n.icon-layout-sidebar-none:before {\n  content: \"e6f2\"; }\n\n.icon-layout-sidebar-left:before {\n  content: \"e6f3\"; }\n\n.icon-layout-placeholder:before {\n  content: \"e6f4\"; }\n\n.icon-layout-menu:before {\n  content: \"e6f5\"; }\n\n.icon-layout-menu-v:before {\n  content: \"e6f6\"; }\n\n.icon-layout-menu-separated:before {\n  content: \"e6f7\"; }\n\n.icon-layout-menu-full:before {\n  content: \"e6f8\"; }\n\n.icon-layout-media-right-alt:before {\n  content: \"e6f9\"; }\n\n.icon-layout-media-right:before {\n  content: \"e6fa\"; }\n\n.icon-layout-media-overlay:before {\n  content: \"e6fb\"; }\n\n.icon-layout-media-overlay-alt:before {\n  content: \"e6fc\"; }\n\n.icon-layout-media-overlay-alt-2:before {\n  content: \"e6fd\"; }\n\n.icon-layout-media-left-alt:before {\n  content: \"e6fe\"; }\n\n.icon-layout-media-left:before {\n  content: \"e6ff\"; }\n\n.icon-layout-media-center-alt:before {\n  content: \"e700\"; }\n\n.icon-layout-media-center:before {\n  content: \"e701\"; }\n\n.icon-layout-list-thumb:before {\n  content: \"e702\"; }\n\n.icon-layout-list-thumb-alt:before {\n  content: \"e703\"; }\n\n.icon-layout-list-post:before {\n  content: \"e704\"; }\n\n.icon-layout-list-large-image:before {\n  content: \"e705\"; }\n\n.icon-layout-line-solid:before {\n  content: \"e706\"; }\n\n.icon-layout-grid4:before {\n  content: \"e707\"; }\n\n.icon-layout-grid3:before {\n  content: \"e708\"; }\n\n.icon-layout-grid2:before {\n  content: \"e709\"; }\n\n.icon-layout-grid2-thumb:before {\n  content: \"e70a\"; }\n\n.icon-layout-cta-right:before {\n  content: \"e70b\"; }\n\n.icon-layout-cta-left:before {\n  content: \"e70c\"; }\n\n.icon-layout-cta-center:before {\n  content: \"e70d\"; }\n\n.icon-layout-cta-btn-right:before {\n  content: \"e70e\"; }\n\n.icon-layout-cta-btn-left:before {\n  content: \"e70f\"; }\n\n.icon-layout-column4:before {\n  content: \"e710\"; }\n\n.icon-layout-column3:before {\n  content: \"e711\"; }\n\n.icon-layout-column2:before {\n  content: \"e712\"; }\n\n.icon-layout-accordion-separated:before {\n  content: \"e713\"; }\n\n.icon-layout-accordion-merged:before {\n  content: \"e714\"; }\n\n.icon-layout-accordion-list:before {\n  content: \"e715\"; }\n\n.icon-ink-pen:before {\n  content: \"e716\"; }\n\n.icon-info-alt:before {\n  content: \"e717\"; }\n\n.icon-help-alt:before {\n  content: \"e718\"; }\n\n.icon-headphone-alt:before {\n  content: \"e719\"; }\n\n.icon-hand-point-up:before {\n  content: \"e71a\"; }\n\n.icon-hand-point-right:before {\n  content: \"e71b\"; }\n\n.icon-hand-point-left:before {\n  content: \"e71c\"; }\n\n.icon-hand-point-down:before {\n  content: \"e71d\"; }\n\n.icon-gallery:before {\n  content: \"e71e\"; }\n\n.icon-face-smile:before {\n  content: \"e71f\"; }\n\n.icon-face-sad:before {\n  content: \"e720\"; }\n\n.icon-credit-card:before {\n  content: \"e721\"; }\n\n.icon-control-skip-forward:before {\n  content: \"e722\"; }\n\n.icon-control-skip-backward:before {\n  content: \"e723\"; }\n\n.icon-control-record:before {\n  content: \"e724\"; }\n\n.icon-control-eject:before {\n  content: \"e725\"; }\n\n.icon-comments-smiley:before {\n  content: \"e726\"; }\n\n.icon-brush-alt:before {\n  content: \"e727\"; }\n\n.icon-youtube:before {\n  content: \"e728\"; }\n\n.icon-vimeo:before {\n  content: \"e729\"; }\n\n.icon-twitter:before {\n  content: \"e72a\"; }\n\n.icon-time:before {\n  content: \"e72b\"; }\n\n.icon-tumblr:before {\n  content: \"e72c\"; }\n\n.icon-skype:before {\n  content: \"e72d\"; }\n\n.icon-share:before {\n  content: \"e72e\"; }\n\n.icon-share-alt:before {\n  content: \"e72f\"; }\n\n.icon-rocket:before {\n  content: \"e730\"; }\n\n.icon-pinterest:before {\n  content: \"e731\"; }\n\n.icon-new-window:before {\n  content: \"e732\"; }\n\n.icon-microsoft:before {\n  content: \"e733\"; }\n\n.icon-list-ol:before {\n  content: \"e734\"; }\n\n.icon-linkedin:before {\n  content: \"e735\"; }\n\n.icon-layout-sidebar-2:before {\n  content: \"e736\"; }\n\n.icon-layout-grid4-alt:before {\n  content: \"e737\"; }\n\n.icon-layout-grid3-alt:before {\n  content: \"e738\"; }\n\n.icon-layout-grid2-alt:before {\n  content: \"e739\"; }\n\n.icon-layout-column4-alt:before {\n  content: \"e73a\"; }\n\n.icon-layout-column3-alt:before {\n  content: \"e73b\"; }\n\n.icon-layout-column2-alt:before {\n  content: \"e73c\"; }\n\n.icon-instagram:before {\n  content: \"e73d\"; }\n\n.icon-google:before {\n  content: \"e73e\"; }\n\n.icon-github:before {\n  content: \"e73f\"; }\n\n.icon-flickr:before {\n  content: \"e740\"; }\n\n.icon-facebook:before {\n  content: \"e741\"; }\n\n.icon-dropbox:before {\n  content: \"e742\"; }\n\n.icon-dribbble:before {\n  content: \"e743\"; }\n\n.icon-apple:before {\n  content: \"e744\"; }\n\n.icon-android:before {\n  content: \"e745\"; }\n\n.icon-save:before {\n  content: \"e746\"; }\n\n.icon-save-alt:before {\n  content: \"e747\"; }\n\n.icon-yahoo:before {\n  content: \"e748\"; }\n\n.icon-wordpress:before {\n  content: \"e749\"; }\n\n.icon-vimeo-alt:before {\n  content: \"e74a\"; }\n\n.icon-twitter-alt:before {\n  content: \"e74b\"; }\n\n.icon-tumblr-alt:before {\n  content: \"e74c\"; }\n\n.icon-trello:before {\n  content: \"e74d\"; }\n\n.icon-stack-overflow:before {\n  content: \"e74e\"; }\n\n.icon-soundcloud:before {\n  content: \"e74f\"; }\n\n.icon-sharethis:before {\n  content: \"e750\"; }\n\n.icon-sharethis-alt:before {\n  content: \"e751\"; }\n\n.icon-reddit:before {\n  content: \"e752\"; }\n\n.icon-pinterest-alt:before {\n  content: \"e753\"; }\n\n.icon-microsoft-alt:before {\n  content: \"e754\"; }\n\n.icon-linux:before {\n  content: \"e755\"; }\n\n.icon-jsfiddle:before {\n  content: \"e756\"; }\n\n.icon-joomla:before {\n  content: \"e757\"; }\n\n.icon-html5:before {\n  content: \"e758\"; }\n\n.icon-flickr-alt:before {\n  content: \"e759\"; }\n\n.icon-email:before {\n  content: \"e75a\"; }\n\n.icon-drupal:before {\n  content: \"e75b\"; }\n\n.icon-dropbox-alt:before {\n  content: \"e75c\"; }\n\n.icon-css3:before {\n  content: \"e75d\"; }\n\n.icon-rss:before {\n  content: \"e75e\"; }\n\n.icon-rss-alt:before {\n  content: \"e75f\"; }\n\n:host {\n  height: inherit;\n  display: flex;\n  align-items: stretch;\n  flex: 1; }\n  :host /deep/ > ui-frame {\n    height: inherit;\n    width: inherit; }\n    :host /deep/ > ui-frame > header {\n      background-color: #f0f0f0;\n      color: #23282d;\n      border-bottom: 1px solid #060708;\n      display: flex;\n      align-items: center;\n      flex-direction: row;\n      height: 32px;\n      flex-shrink: 0; }\n      :host /deep/ > ui-frame > header > * {\n        margin-left: 5px;\n        display: inline-flex; }\n      :host /deep/ > ui-frame > header > img {\n        height: 24px; }\n      :host /deep/ > ui-frame > header > h1 {\n        color: #23282d;\n        font-size: 1em; }\n    :host /deep/ > ui-frame > main {\n      background-color: #23282d; }\n      :host /deep/ > ui-frame > main /deep/ > ui-section {\n        flex: 1; }\n    :host /deep/ > ui-frame > footer {\n      display: flex;\n      align-items: center;\n      flex-direction: row;\n      height: 32px;\n      flex-shrink: 0;\n      border-top: 1px solid #060708;\n      background-color: #f0f0f0;\n      color: #23282d; }\n      :host /deep/ > ui-frame > footer > * {\n        margin-left: 5px;\n        display: inline-flex; }\n  :host[direction=\"COLUMN\"] /deep/ ui-frame > main /deep/ > ui-section {\n    border-top: 1px solid #060708; }\n    :host[direction=\"COLUMN\"] /deep/ ui-frame > main /deep/ > ui-section:first-child {\n      border-top: none; }\n  :host[direction=\"COLUMN\"] /deep/ ui-frame > main /deep/ > ui-slice {\n    resize: vertical;\n    border-left: none;\n    border-right: none;\n    border-bottom: none;\n    min-height: 38px;\n    flex-direction: column;\n    /*&:last-child {\n            overflow-x: hidden;\n          }*/ }\n    :host[direction=\"COLUMN\"] /deep/ ui-frame > main /deep/ > ui-slice:first-child {\n      border-top: none; }\n    :host[direction=\"COLUMN\"] /deep/ ui-frame > main /deep/ > ui-slice > div.ui-slice-buttons {\n      height: 17px; }\n  :host[direction=\"ROW\"] /deep/ ui-frame > main /deep/ > ui-section {\n    border-left: 1px solid #060708; }\n    :host[direction=\"ROW\"] /deep/ ui-frame > main /deep/ > ui-section:first-child {\n      border-left: none; }\n  :host[direction=\"ROW\"] /deep/ ui-frame > main /deep/ > ui-slice {\n    resize: horizontal;\n    border-top: none;\n    border-bottom: none;\n    border-right: none;\n    min-width: 38px;\n    /*&:last-child {\n            overflow-y: hidden;\n          }*/ }\n    :host[direction=\"ROW\"] /deep/ ui-frame > main /deep/ > ui-slice:first-child {\n      border-left: none; }\n    :host[direction=\"ROW\"] /deep/ ui-frame > main /deep/ > ui-slice > div.ui-slice-buttons {\n      width: 17px; }\n"],
        template: "<ui-frame [icon]=\"icon\" [title]=\"title\" [header]=\"header\" [footer]=\"footer\" [direction]=\"direction\">\n    <ng-content class=\"frame-header-slot-left\" select=\".application-header-slot-left\"></ng-content>\n    <ng-content class=\"frame-header-slot-center\" select=\".application-header-slot-center\"></ng-content>\n    <ng-content class=\"frame-header-slot-right\" select=\".application-header-slot-right\"></ng-content>\n    <ng-content class=\"frame-content\" select=\".application-content\"></ng-content>\n    <ng-content class=\"frame-footer-slot-left\" select=\".application-footer-slot-left\"></ng-content>\n    <ng-content class=\"frame-footer-slot-center\" select=\".application-footer-slot-center\"></ng-content>\n    <ng-content class=\"frame-footer-slot-right\" select=\".application-footer-slot-right\"></ng-content>\n</ui-frame>\n",
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
    return document.querySelectorAll(selector + " > *");
}
//# sourceMappingURL=application.component.js.map