/** Holds any properties and methods for generating Unique IDs.
 */
 export class UniqueID {

    //** Store an incrementing variable to ensure unique IDs*/
    private _uniqueID: number = 0;
    public get uniqueID(): number {
        return this._uniqueID;
    }
 
    private set uniqueID(value: number) {
        if (typeof(value) != "number") { console.error("Trying to set UniqueID's unique ID with an invalid input: ", value); return; }
        this._uniqueID = value;
    }

    /**
	 * Return and increment a value to fake uniqueness
	 */
    public generateUID(): number {
        this.uniqueID++;
        return this.uniqueID;
    }
 

 }