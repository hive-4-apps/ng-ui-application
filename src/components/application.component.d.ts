import { ElementRef, QueryList } from '@angular/core';
import { UIPanelComponent } from "./panel.component";
import { UISectionComponent } from "./section.component";
import { UISliceComponent } from "./slice.component";
export declare class UIApplicationComponent {
    private elHTML;
    icon: URL;
    title: String;
    header: boolean;
    footer: boolean;
    layoutType: layouTypeEnums;
    direction: DirectionEnums;
    private componentChildren;
    private componentChildrenCount;
    private isEdge;
    private isFirefox;
    private isChrome;
    private isSystemJS;
    private scrollbarWidth;
    private bodyWidth;
    private mainContentHeight;
    sectionChildren: QueryList<UISectionComponent>;
    sliceChildren: QueryList<UISliceComponent>;
    constructor(elRef: ElementRef);
    ngOnInit(): void;
    private getMainContentHeight();
    private widthHeightApply();
    private mainContentWidthApply();
    private mainContentHeightApply();
    private childrenLengthApplyExceptLastOne();
    private childrenSetId();
    private isSlicesOrSectionsChildren();
    focusPanels(panel: UIPanelComponent): void;
}
export declare enum layouTypeEnums {
    DRAWER,
    SPLITTER,
}
export declare enum DirectionEnums {
    COLUMN,
    ROW,
}
