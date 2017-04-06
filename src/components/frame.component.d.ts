import { ElementRef } from '@angular/core';
export declare class UIFrameComponent {
    private elHTML;
    icon: URL;
    title: String;
    hlevel: number;
    header: boolean;
    footer: boolean;
    direction: DirectionEnums;
    private mainIdForAPP;
    constructor(elRef: ElementRef);
    ngOnInit(): void;
}
export declare enum DirectionEnums {
    COLUMN,
    ROW,
}
