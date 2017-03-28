import { ElementRef } from '@angular/core';
export declare class UIApplicationComponent {
    private elHTML;
    icon: URL;
    title: String;
    header: boolean;
    footer: boolean;
    layoutType: layouTypeEnums;
    direction: DirectionEnums;
    private componentChildrenCount;
    private isEdge;
    private isFirefox;
    private isChrome;
    private isSystemJS;
    private scrollbarWidth;
    private bodyWidth;
    private mainContentHeight;
    constructor(elRef: ElementRef);
    ngOnInit(): void;
    private getMainContentHeight();
    private widthHeightApply(isInit);
    private mainContentWidthApply(isInit);
    private mainContentHeightApply(isInit);
    private childrenLengthApplyExceptLastOne(isInit);
    switchDirection(childDirection: String): any;
    private childrenSetId();
}
export declare enum layouTypeEnums {
    DRAWER,
    SPLITTER,
}
export declare enum DirectionEnums {
    COLUMN,
    ROW,
}
