import { ElementRef } from '@angular/core';
import { UIApplicationComponent } from "./application.component";
export declare class UIPanelComponent {
    private _parent;
    elHTML: HTMLElement;
    title: string;
    icon: URL;
    active: boolean;
    display: string;
    focus: boolean;
    readonly setDisplay: string;
    private appParent;
    constructor(elRef: ElementRef, _parent: UIApplicationComponent);
    clickOnPanel(): void;
}
