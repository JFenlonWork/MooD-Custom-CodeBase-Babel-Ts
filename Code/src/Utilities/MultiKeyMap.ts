/** Class that handles multiple keys to one value Map
 */
 export class MultiKeyMap<T> {

    //** Store all forward references to values to allow searching*/
    private __map__: Map<any, T> = new Map()

    /** Store all inverse references to values to allow searching and Maps the values to void for O(1) checking*/
    private __reverseMap__: Map<T, Map<any, void>> = new Map()

    /**
	 * Create a map between multiple keys and a single value
	 * @param  {any | any[]} Keys - Any key/s to add on creation
	 * @param  {T} value - The value to link these keys to
	 */
    constructor (keys: any | any[] = null, value?: T) {
        if (keys == null || value == null) return;

        if (Array.isArray(keys)) {
            keys.forEach(element => {
                this.__map__.set(element, value);
            });
        } else {
            this.__map__.set(keys, value);
        }

        this.__reverseMap__.set(value, keys);
    }

    /**
	 * Return Value associated with a key
	 * @param  {any} key - The key to return the value for
	 */
    public getValue(key: any): any {
        return this.__map__.get(key);
    }

    /**
	 * Return Map of Value to Keys
	 * @param  {T} Value - The value to return keys Map for
	 */
    public getKeys(value: T): Map<any, void> | undefined {
        return this.__reverseMap__.get(value);
    }

    /**
	 * Return all keys relating to a value in array format
	 * @param  {T} Value - The value to return keys for
	 */
    public getKeysArray(value: T): any[] {
        let keys = this.getKeys(value);
        return keys != undefined ? Array.from(keys.keys()) : [];
    }

    /**
	 * Test if a value exists for a given key
	 * @param  {any} Key - The key to check if a value exists
	 */
    public hasKey(key: any): boolean {
        return (this.getValue(key) != undefined);
    }

    /**
	 * Create a map between a key and a single value
	 * @param  {any} Key - The key to add this value to
	 * @param  {T} value - The value to link this key to
	 */
    public setKey(key: any, value: T) {
        let keys: Map<any, void> | undefined = this.getKeys(value);
        if (keys == undefined) {
            keys = new Map();
            keys.set(key)
            this.__map__.set(key, value);
            this.__reverseMap__.set(value, keys);
        } else {
            this.__map__.set(key, value);
            keys.set(key);
            this.__reverseMap__.set(value, keys);
        }
    }

    /**
	 * Create a map between multiple keys and a single value
	 * @param  {any | any[]} Keys - Any keys to add this value to
	 * @param  {T} value - The value to link these keys to
	 */
    public setKeys(keys: any[], value: T) {
        keys.forEach(element => {
            this.setKey(element, value);
        });
    }

    /**
	 * Remove a key from this map
	 * @param  {any} Key - The key to remove from this value
	 * @param  {T} value - The value that this key links to
	 */
    public deleteKey(key: any, value: T) {
        let otherKeys = this.__reverseMap__.get(value);

        if (otherKeys == undefined) { this.__map__.delete(key); return; }
        otherKeys.delete(key);
        if (otherKeys.size == 0) { this.__map__.delete(key); this.__reverseMap__.delete(value); return; }
        
        this.__reverseMap__.set(value, otherKeys);
        this.__map__.delete(key);
    }

    /**
	 * Remove many keys from this map
	 * @param  {any} Keys - The keys to remove from this value
	 * @param  {T} value - The value that these keys link to
	 */
    public deleteKeys(keys: any[], value: T) {
        keys.forEach(element => {
            this.deleteKey(element, value);
        });
    }

    /**
	 * Remove all references to a value
	 * @param  {T} value - The value to remove
	 */
     public deleteValue(value: T) {
        this.getKeysArray(value).forEach(element => {
            this.__map__.delete(element);
        });
        this.__reverseMap__.delete(value);
    }

 }