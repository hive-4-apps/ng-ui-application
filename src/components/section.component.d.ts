import { ChangeDetectorRef, ElementRef, QueryList } from '@angular/core';
import { UIPanelComponent } from "./panel.component";
export declare class UISectionComponent {
    private changeDetectorRef;
    panelChildren: QueryList<UIPanelComponent>;
    icon: String;
    title: String;
    header: boolean;
    footer: boolean;
    positiontabs: PositionEnums;
    private positionTabs;
    private id;
    private isChrome;
    private isLastOne;
    private elHTML;
    private parentDirection;
    private wrappedBySlice;
    private componentChildrenCount;
    private numberSection;
    constructor(elRef: ElementRef, changeDetectorRef: ChangeDetectorRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngAfterContentInit(): void;
    clickTab(panel: UIPanelComponent): void;
    selectPanel(panel: UIPanelComponent): void;
    onClickOutside(panel: UIPanelComponent): void;
    focusPanel(panel: UIPanelComponent): void;
    private checkIsLastOne();
    private isWrappedBySlice();
    private setPanelsId();
}
export declare enum PositionEnums {
    TOP,
    BOTTOM,
    LEFT,
    RIGHT,
}
