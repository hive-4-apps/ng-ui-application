import { ElementRef } from '@angular/core';
export declare class UIApplicationComponent {
    private elHTML;
    icon: URL;
    title: String;
    header: boolean;
    footer: boolean;
    layoutType: layouTypeEnums;
    direction: DirectionEnums;
    constructor(elRef: ElementRef);
    ngAfterViewInit(): void;
    widthHeightApply(): void;
    getSectionArray(n: number): number[];
    switchDirection(childDirection: String): any;
}
export declare enum layouTypeEnums {
    DRAWER,
    SPLITTER,
}
export declare enum DirectionEnums {
    COLUMN,
    ROW,
}
