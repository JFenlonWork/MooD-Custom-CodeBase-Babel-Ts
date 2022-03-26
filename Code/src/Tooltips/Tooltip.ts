import { TooltipManager } from "./TooltipManager";
import { TooltipType } from "./TooltipType";

/** Class representing a Tooltip that can be added to pre-existing HTML.
 */
 export class Tooltip {
    
   	//** The ID of this Tooltip*/ 
    private _tooltipID: number = -1;
    public get tooltipID(): number {
        return this._tooltipID;
    }

   	//** The DOM object of this Tooltip*/ 
    private _tooltipObject: HTMLElement | null;
    public get tooltipObject(): HTMLElement | null {
        return this._tooltipObject;
    }

    public set tooltipObject(tooltipObject: HTMLElement | null) {
        this._tooltipObject = tooltipObject;
    }
    
   	//** The Tooltip creation function type to run using this Tooltip*/ 
    private _TooltipTypeType: string;
    public get TooltipTypeType(): string {
        return this._TooltipTypeType;
    }

    public set TooltipTypeType(TooltipTypeType: string) {
        this._TooltipTypeType = TooltipTypeType;
    }

  	//** The CSS to apply to this Tooltip*/ 
    private _tooltipCSS: string;
    public get tooltipCSS(): string {
        return this._tooltipCSS;
    }

    public set tooltipCSS(tooltipCSS: string) {
        this._tooltipCSS = tooltipCSS;
    }

    //** The CSS to apply to this Tooltip's parent*/ 
    private _tooltipParentCSS: string;
    public get tooltipParentCSS(): string {
        return this._tooltipParentCSS;
    }

    public set tooltipParentCSS(tooltipParentCSS: string) {
        this._tooltipParentCSS = tooltipParentCSS;
    }

    //** The text to display within this Tooltip*/ 
    private _tooltipText: string;
    public get tooltipText(): string {
        return this._tooltipText;
    }

    public set tooltipText(tooltipText: string) {
        this._tooltipText = tooltipText;
    }
    

    constructor(tooltipText: string = "", TooltipTypeType: string = "GenericTooltipSetup", tooltipCSS: string = "GenericTooltip", tooltipParentCSS: string = "GenericTooltipParent", tooltipObject: HTMLElement | null = null, ...args: any[]) {
        this._tooltipText = tooltipText;
        this._TooltipTypeType = TooltipTypeType;
        this._tooltipCSS = tooltipCSS;
        this._tooltipParentCSS = tooltipParentCSS;
        this._tooltipObject = tooltipObject;

        let TooltipType: TooltipType | undefined = TooltipManager.getTooltipType(TooltipTypeType);
    
        if (TooltipType == null) return;
        this._tooltipID = TooltipManager.Instance.uniqueID.generateUID();
        let _this = this;
        TooltipType.creation.call(_this, ...args); 
        
        TooltipManager.addTooltip(this);
    }
 }