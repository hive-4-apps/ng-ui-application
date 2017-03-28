import { ElementRef } from '@angular/core';
export declare class UISliceComponent {
    private elHTML;
    private direction;
    private parentDirection;
    private componentChildrenCount;
    private divUISection;
    private isChrome;
    private isEdge;
    private isLastOne;
    private id;
    private bodyWidth;
    constructor(elRef: ElementRef);
    ngOnInit(): void;
    ngAfterViewChecked(): void;
    private widthOrHeightChildrenApply(isInit);
    static switchStringDirection(parentDirection: String): String;
    private childrenLengthApplyExceptionLastOne(isInit);
    private uniqueChildLengthApply();
    private checkIsLastOne();
    private childrenSetId();
}
