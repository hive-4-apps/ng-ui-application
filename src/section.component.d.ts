import { ChangeDetectorRef, ElementRef } from '@angular/core';
export declare class UISectionComponent {
    private changeDetectorRef;
    icon: URL;
    title: String;
    header: boolean;
    footer: boolean;
    direction: DirectionEnums;
    private id;
    private isChrome;
    private isLastOne;
    private elHTML;
    private parentDirection;
    private wrappedBySlice;
    constructor(elRef: ElementRef, changeDetectorRef: ChangeDetectorRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    private checkIsLastOne();
    private isWrappedBySlice();
}
export declare enum DirectionEnums {
    COLUMN,
    ROW,
}
