import { ElementRef, QueryList } from '@angular/core';
import { UIPanelComponent } from "./panel.component";
import { UISectionComponent } from "./section.component";
export declare class UISliceComponent {
    private elHTML;
    private direction;
    private parentDirection;
    private componentChildrenCount;
    private divUISlice;
    private isChrome;
    private isEdge;
    private isLastOne;
    private id;
    private bodyWidth;
    sectionChildren: QueryList<UISectionComponent>;
    constructor(elRef: ElementRef);
    ngOnInit(): void;
    ngAfterViewChecked(): void;
    private widthOrHeightApply(isInit);
    private widthOrHeightChildrenApply(isInit);
    static switchStringDirection(parentDirection: String): String;
    private childrenLengthApplyExceptionLastOne(isInit);
    private uniqueChildLengthApply();
    private checkIsLastOne();
    private childrenSetId();
    focusPanel(panel: UIPanelComponent): void;
}
