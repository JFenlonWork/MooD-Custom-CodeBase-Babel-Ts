import { MultiKeyReversibleMap } from "../Utilities/MultiKeyReversibleMap";
import { UniqueID } from "../Utilities/UniqueID";
import { Tooltip } from "./Tooltip";

/** Class representing a any utility functions or variables that help Tooltips.
 */
 export class TooltipController {
    
    //** Store a singleton of TooltipController to assure only one exists */
    private static _instance: TooltipController;
    public static get Instance(): TooltipController {
        return this._instance || (this._instance = new this());
    }


    /**
	 * Return this or singleton instance of TooltipController
	 */
    private constructor() {
        if (TooltipController._instance) return TooltipController._instance;
        TooltipController._instance = this;
    }

    //** Store an incrementing variable to ensure unique IDs*/
    private _uniqueID: UniqueID = new UniqueID();
    public get uniqueID(): UniqueID {
        if (this != TooltipController.Instance) return TooltipController.Instance.uniqueID;
        return this._uniqueID;
    }

    //** Store all references to Tooltips to allow searching*/
    private _tooltips: MultiKeyReversibleMap<String | Number, Tooltip> = new MultiKeyReversibleMap();
    public get tooltips(): MultiKeyReversibleMap<String | Number, Tooltip> {
        if (this != TooltipController.Instance) return TooltipController.Instance.tooltips;
        return this._tooltips;
    }



    /**
	 * Searches for and returns a Tooltip with a name parameter
	 * @param  {string} name - The Tooltip to return
	 */
     public static getTooltip(name: string): Tooltip | undefined {
        if (typeof(name) != "string") { console.error("Trying to get a Tooltip with an invalid name: ", name); return; }
        return this.Instance.tooltips.getValue(name);
    }

    /**
	 * Searches for and returns a Tooltip with a id parameter
	 * @param  {number} id - The Tooltip to return
	 */
    public static getTooltipFromID(id: number): Tooltip | undefined {
        if (typeof(id) != "number") { console.error("Trying to get a Tooltip with an invalid id: ", id); return; }
        return this.Instance.tooltips.getValue(id);
    }



    

 }