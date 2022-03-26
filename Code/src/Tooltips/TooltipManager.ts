import { ReversibleMap } from "../Utilities/ReversibleMap";
import { UniqueID } from "../Utilities/UniqueID";
import { Tooltip } from "./Tooltip";
import { TooltipType } from "./TooltipType";

interface GenericTooltip extends Tooltip {
    tooltipObjectText: HTMLParagraphElement;
}

/** Class representing a any utility functions or variables that help Tooltips.
 */
 export class TooltipManager {
    
    //** Store a singleton of TooltipManager to assure only one exists */
    private static _instance: TooltipManager;
    public static get Instance(): TooltipManager {
        return this._instance || (this._instance = new this());
    }

    /**
	 * Return this or singleton instance of TooltipManager
	 */
    private constructor() {
        if (TooltipManager._instance) return TooltipManager._instance;
        TooltipManager._instance = this;

        //This is needed to supply Tooltips with a generic setup
        // this should only run on the singleton
        this.TooltipTypes.set("GenericTooltipSetup",
            new TooltipType(
                function generate(this: GenericTooltip, ...args: any[]) {
                    this.tooltipObjectText = document.createElement("p");
                    this.tooltipObjectText.innerText = this.tooltipText;

                    $(this.tooltipObject as HTMLElement).addClass(this.tooltipParentCSS);
                    $(this.tooltipObjectText).addClass(this.tooltipCSS);
                    $(this.tooltipObject as HTMLElement).prepend(this.tooltipObjectText);
                },
                function destroy(this: GenericTooltip, ...args: any[]) {
                    this.tooltipObjectText.remove();
                    $(this.tooltipObject as HTMLElement).removeClass(this.tooltipParentCSS);
                },
                "GenericTooltipSetup"
            )
        );
    }

    //** Store an incrementing variable to ensure unique IDs*/
    private _uniqueID: UniqueID = new UniqueID();
    public get uniqueID(): UniqueID {
        if (this != TooltipManager.Instance) return TooltipManager.Instance.uniqueID;
        return this._uniqueID;
    }

    //** Store all references to Tooltips to allow searching*/
    private _tooltips: ReversibleMap<Number, Tooltip> = new ReversibleMap();
    public get tooltips(): ReversibleMap<Number, Tooltip> {
        if (this != TooltipManager.Instance) return TooltipManager.Instance.tooltips;
        return this._tooltips;
    }

    //** Store all references to Tooltips Creation Functions to allow searching*/
    private _TooltipTypes: Map<String, TooltipType> = new Map();
    public get TooltipTypes(): Map<String, TooltipType> {
        if (this != TooltipManager.Instance) return TooltipManager.Instance.TooltipTypes;
        return this._TooltipTypes;
    }   

    /**
	 * Searches for and returns a Tooltip with a id parameter
	 * @param  {number} id - The Tooltip to return
	 */
    public static getTooltip(id: number): Tooltip | undefined {
        if (typeof(id) != "number") { console.error("Trying to get a Tooltip with an invalid id: ", id); return; }
        return this.Instance.tooltips.getValue(id);
    }

    /**
	 * Adds a Tooltip to the list of Tooltips
	 * @param  {Tooltip} tooltip - The Tooltip to add
	 */
    public static addTooltip(tooltip: Tooltip): boolean {
        if (this.Instance.tooltips.getValue(tooltip.tooltipID) != undefined) { console.warn("Trying to add a Tooltip to TooltipManager when it already exists: ", tooltip); return false; }
        this.Instance.tooltips.setKey(tooltip.tooltipID, tooltip);
        return true;
    }

    /**
	 * Remove a Tooltip to the list of Tooltips
	 * @param  {Tooltip} tooltip - The Tooltip to add
	 */
    public static removeTooltip(tooltip: Tooltip): boolean {
        if (this.Instance.tooltips.getValue(tooltip.tooltipID) == undefined) { console.warn("Trying to remove a Tooltip to TooltipManager when it doesn't exist: ", tooltip); return false; }
        this.Instance.tooltips.deleteKey(tooltip.tooltipID);
        return true;
    }
    
    
    /**
	 * Searches for and returns a Tooltip Type with a id parameter
	 * @param  {string} name - The Tooltip Type name to return
	 */
     public static getTooltipType(name: string): TooltipType | undefined {
        if (typeof(name) != "number") { console.error("Trying to get a TooltipType with an invalid name: ", name); return; }
        return this.Instance.TooltipTypes.get(name);
    }

    /**
	 * Adds a TooltipType to the list of TooltipTypes
	 * @param  {TooltipType} tooltipType - The TooltipType to add
	 */
    public static addTooltipType(tooltipType: TooltipType): boolean {
        if (this.Instance.TooltipTypes.get(tooltipType.creationName) != undefined) { console.warn("Trying to add a TooltipType to TooltipManager when it already exists: ", tooltipType); return false; }
        this.Instance.TooltipTypes.set(tooltipType.creationName, tooltipType);
        return true;
    }

    /**
	 * Remove a TooltipType from the list of TooltipTypes
	 * @param  {TooltipType} tooltipType - The TooltipType to remove
	 */
     public static removeTooltipType(tooltipType: TooltipType): boolean {
        if (this.Instance.TooltipTypes.get(tooltipType.creationName) == undefined) { console.warn("Trying to remove a TooltipType to TooltipManager when it doesn't exist: ", tooltipType); return false; }
        this.Instance.TooltipTypes.delete(tooltipType.creationName);
        return true;
    }

 }