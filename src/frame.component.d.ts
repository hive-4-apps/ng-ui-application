import { ElementRef } from '@angular/core';
export declare class UIFrameComponent {
    private elHTML;
    icon: URL;
    title: String;
    header: boolean;
    footer: boolean;
    direction: DirectionEnums;
    constructor(elRef: ElementRef);
    ngOnInit(): void;
}
export declare enum DirectionEnums {
    COLUMN,
    ROW,
}
