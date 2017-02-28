import { ElementRef } from '@angular/core';
export declare class UISliceComponent {
    private elHTML;
    private direction;
    private parentDirection;
    constructor(elRef: ElementRef);
    ngAfterViewInit(): void;
    static switchStringDirection(childDirection: String): String;
}
