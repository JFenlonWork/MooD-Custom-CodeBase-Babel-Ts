/** Class representing a TooltipType that is used to generate tailored Tooltip HTML/Functionality.
 */
export class TooltipType {

   	//** The Creation Function of this TooltipType*/ 
    private _creation: Function = () => { console.error("No creation function was supplied to this TooltipType: ", this); };
    public get creation(): Function {
        return this._creation;
    }

   	//** The Deletion Function of this TooltipType*/ 
    private _deletion: Function = () => { console.error("No deletion function was supplied to this TooltipType: ", this); };
    public get deletion(): Function {
        return this._deletion;
    }

    //** The Name of this TooltipType*/ 
    private _creationName: String = "";
    public get creationName(): String {
        return this._creationName;
    }
    /**
     * @param  {Function} creation - The creation function to use for this TooltipType
     * @param  {Function} deletion - The deletion function to use for this TooltipType
     * @param  {string} creationName - The name of this TooltipType
     */
    constructor (
        creation: Function = () => { console.error("No creation function was supplied to this TooltipType: ", this); },
        deletion: Function = () => { console.error("No deletion function was supplied to this TooltipType: ", this); },
        creationName: String = "") {
        
        if (creationName == "") { console.error("Invalid creation name supplied when generating a TooltipType: ", this); return; }
        this._creation = creation;
        this._deletion = deletion;
        this._creationName = creationName;
    }

	/**
	 * Returns the class type of this object
	 * @returns {string}
	 */
     public toString(): string {
		return "TooltipType";
	}

    /** 
     * Returns the type of this class
     */
    public static toString(): string {
        return "TooltipType";
    }

} 