import { CompareTypes } from "./CompareTypes";

/** Class that handles multiple keys to value Map with reversable search 
 */
export class MultiKeyReversibleMap<Key, Value> {

    //** Store all forward references to values to allow searching*/
    private __map__: Map<Key, Value> = new Map();

    /** Store all inverse references to values to allow searching and Maps the values to void for O(1) checking*/
    private __reverseMap__: Map<Value, Map<Key, void>> = new Map();

    /** Store the object type of the Keys in this Multi-Key Reversible Map for toString comparison */
    private __keyType__: string = "";
    public get keyType(): string {
        return this.__keyType__;
    }

    /** Return the object type of the Values in this Multi-Key Reversible Map for toString comparison */
    private __valueType__: string = "";
    public get valueType(): string {
        return this.__valueType__;
    }

    /** Return the size of this Multi-Key Reversible Map */
    public get size(): number {
        return this.__map__.size;
    }

    /** Return the size of the reverse map of this Multi-Key Reversible Map */
    public get reverseSize(): number {
        return this.__reverseMap__.size;
    }

    /**
	 * Create a map between multiple keys and a single value
	 * @param  {[Key[], Value][]} collection - A collection of key value pairs to create the map from
	 */
    constructor (keyType: string, valueType: string, collection?: [Key[], Value][]) {
        this.__keyType__ = keyType;
        this.__valueType__ = valueType;

        if (collection == null || (Array.isArray(collection) && collection.length == 0)) return;

        collection.forEach(element => {

            let reverseMap: Map<Key, void> = new Map();
            let keys: Key[] = element[0];
            let value = element[1];

            if (!Array.isArray(keys) || keys.length == 0) { console.error("Trying to create a MultiKeyMap with an invalid key: ", keys); return; }
            if (value == null) { console.error("Trying to create a MultiKeyMap with an invalid value: ", value); return; }

            keys.forEach((key: Key) => {
                this.__map__.set(key, value);
                reverseMap.set(key);
            });

            this.__reverseMap__.set(value, reverseMap);

        });
    }

    /**
     * Returns if two Multi-Key Reversible Maps are equal
     * @param  {ReversibleMap<Key, Value>} map - The other Multi-Key Reversible Map to compare to
     * @returns Value - The value associated with the key
    */
    public equals(map: MultiKeyReversibleMap<Key, Value>): boolean {
        if (this.size != map.size || this.reverseSize != map.reverseSize) return false;

        for (let [key, value] of this.__map__.entries()) {
            if (map.getValue(key) != value) return false;
        }

        for (let [value, key] of this.__reverseMap__.entries()) {
            if (map.getKeys(value) != key) return false;
        }

        return true;
    }

	/**
	 * Returns the class type of this object
	 * @returns {string}
	 */
    public toString(): string {
		return  "MultiKeyReversibleMap<" + this.keyType + ", " + this.valueType + ">";
	}

    /** 
     * Returns the type of this class
    */
    public static toString(): string {
        return "MultiKeyReversibleMap";
    }

    /**
	 * Return Value associated with a key
	 * @param  {Key} key - The key to return the value for
	 */
    public getValue(key: Key): Value | undefined {
        return this.__map__.get(key);
    }    
    
    /**
    * Test if a key exists for a given value
    * @param  {Value} value - The value to check if a key exists
    */
   public hasValue(value: Value): boolean {
        return (this.getKeys(value) != undefined);
   }

    /**
	 * Return Map of Value to Keys
	 * @param  {Value} Value - The value to return keys Map for
	 */
    public getKeys(value: Value): Map<Key, void> | undefined {
        if (value === undefined) { console.error("Trying to get a MultiKeyMap's Keys map with an invalid value: ", value); return undefined; }
        return this.__reverseMap__.get(value);
    }

    /**
	 * Return all keys relating to a value in array format
	 * @param  {Value} Value - The value to return keys for
	 */
    public getKeysArray(value: Value): Key[] {
        if (value === undefined) { console.error("Trying to get a MultiKeyMap's Keys array with an invalid value: ", value); return []; }
        let keys = this.getKeys(value);
        return keys != undefined ? Array.from(keys.keys()) : [];
    }

    /**
	 * Test if a value exists for a given key
	 * @param  {Key} Key - The key to check if a value exists
	 */
    public hasKey(key: Key): boolean {
        return (this.getValue(key) != undefined);
    }

    /**
	 * Create a map between a key and a single value
	 * @param  {Key} Key - The key to add this value to
	 * @param  {Value} value - The value to link this key to
	 */
    public setKey(key: Key, value: Value) {
        if (key == null) { console.error("Trying to set a MultiKeyMap's Key with an invalid key: ", key); return false; }
        if (value === undefined) { console.error("Trying to set a MultiKeyMap's Key with an invalid value: ", value); return false; }

        this.deleteKey(key);

        let keys: Map<Key, void> | undefined = this.getKeys(value);
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

        return true;
    }

    /**
	 * Create a map between multiple keys and a single value
	 * @param  {Key | Key[]} Keys - Any keys to add this value to
	 * @param  {Value} value - The value to link these keys to
	 */
    public setKeys(keys: Key[], value: Value): boolean {
        if (keys == null) { console.error("Trying to set a MultiKeyMap's Keys with an invalid keys: ", keys); return false; }
        if (value === undefined) { console.error("Trying to set a MultiKeyMap's Keys with an invalid value: ", value); return false; }
        keys.forEach(element => {
            this.setKey(element, value);
        });
        return true;
    }

    /**
	 * Remap pre-existing keys to a new value
	 * @param  {Value} value - The value to get the keys from
	 * @param  {Value} newValue - The new value to link the keys to
	 */
     public remapValue(value: Value, newValue: Value): Key[] {
        if (value == null) { console.error("Trying to remap a MultiKeyMap's value with an invalid value: ", value); return []; }
        if (newValue === undefined) { console.error("Trying to remap a MultiKeyMap's value with an invalid newValue: ", newValue); return []; }
        if (CompareTypes.different(value, newValue)) { console.error("Trying to remap a MultiKeyMap's value with different parameter types: ", value, " ", newValue); return []; }

        let keys = this.getKeysArray(value);
        this.deleteKeys(keys, value);

        if (keys.length == 0) return keys;
        keys.forEach(element => {
            this.setKey(element, newValue);
        });
        return keys;
    }

    /**
	 * Remap pre-existing keys to a new value based on pre-existing Key->Value map
	 * @param  {Key} key - The key to lookup to find the original value to get the keys from
	 * @param  {Value} newValue - The new value to link the keys to
	 */
     public remapValueFromKey(key: Key, newValue: Value): Key[] {
        if (key == null) { console.error("Trying to remap a value from a key in a MultiKeyReversibleMap wtih an invalid key: ", key); return []; }
        if (newValue === undefined) { console.error("Trying to remap a value from a key in a MultiKeyReversibleMap wtih an invalid newValue: ", newValue); return []; }

        let oldValue = this.getValue(key);
        if (oldValue == undefined) return [];
        return this.remapValue(oldValue, newValue);
    }

    /**
	 * Remap pre-existing key to a new value based on pre-existing Key->Value map
	 * @param  {Key} key - The key to remap
	 * @param  {Value} newValue - The new value to link the key to
	 */
     public remapKey(key: Key, newValue: Value): boolean {
        if (key == null) { console.error("Trying to remap a key in a MultiKeyReversibleMap wtih an invalid key: ", key); return false; }
        if (newValue == null) { console.error("Trying to remap a key in a MultiKeyReversibleMap wtih an invalid newValue: ", newValue); return false; }

        let oldValue = this.getValue(key);
        if (oldValue == undefined) { this.setKey(key, newValue); return true; }
        
        this.deleteKey(key, oldValue);
        this.setKey(key, newValue);
        return true;
    }

    /**
	 * Remove a key from this map
	 * @param  {Key} Key - The key to remove from this map
	 * @param  {Value} value - The value that this key links to
	 */
     public deleteKey(key: Key, value?: Value): boolean {
        if (key == null) { console.error("Trying to delete a key in a MultiKeyReversibleMap wtih an invalid key: ", key); return false; }

        if (value == null) {

            let reverseKeys = Array.from(this.__reverseMap__.keys());

            reverseKeys.forEach(elemet => {
                this.deleteKey(key, elemet);
            });

        } else {

            let otherKeys = this.__reverseMap__.get(value);

            if (otherKeys == undefined) { this.__map__.delete(key); return true; }
            otherKeys.delete(key);
            if (otherKeys.size == 0) { this.__map__.delete(key); this.__reverseMap__.delete(value); return true; }
            
            this.__reverseMap__.set(value, otherKeys);
            this.__map__.delete(key);
        }

        return true;
    }

    /**
	 * Remove many keys from this map
	 * @param  {Key} Keys - The keys to remove from this value
	 * @param  {Value} value - The value that these keys link to
	 */
    public deleteKeys(keys: Key[], value?: Value): boolean {
        if (keys == null || keys.length == 0) { console.error("Trying to delete a keys in a MultiKeyReversibleMap wtih an invalid keys: ", keys); return false; }
        keys.forEach(element => {
            this.deleteKey(element, value);
        });
        return true;
    }

    /**
	 * Remove all references to a value
	 * @param  {Value} value - The value to remove
	 */
    public deleteValue(value: Value): boolean {
        if (value == null) { console.error("Trying to delete a value in a MultiKeyReversibleMap wtih an invalid value: ", value); return false; }
        this.getKeysArray(value).forEach(element => {
            this.__map__.delete(element);
        });
        this.__reverseMap__.delete(value);
        return true;
    }

    /**
	 * Remove all keys and values
	 */
    public clear() {
        this.__map__.clear();
        this.__reverseMap__.clear();
    }

 }