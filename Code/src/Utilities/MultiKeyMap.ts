import { CompareTypes } from "./CompareTypes";

/** Class that handles multiple keys to one value Map
 */
 export class MultiKeyMap<Key, Value> {

    //** Store all forward references to values to allow searching*/
    private __map__: Map<Key, Value> = new Map()

    /** Store all inverse references to values to allow searching and Maps the values to void for O(1) checking*/
    private __reverseMap__: Map<Value, Map<Key, void>> = new Map()

    /**
	 * Create a map between multiple keys and a single value
	 * @param  {Key | Key[]} Keys - Any key/s to add on creation
	 * @param  {Value} value - The value to link these keys to
	 */
    constructor (keys: Key | Key[] = [], value?: Value) {
        if (keys == null || (Array.isArray(keys) && keys.length == 0) || value == null) return;
        let reverseMap: Map<Key, void> = new Map();

        if (Array.isArray(keys)) {
            keys.forEach(element => {
                this.__map__.set(element, value);
                reverseMap.set(element);
            });
        } else {
            this.__map__.set(keys, value);
            reverseMap.set(keys);
        }

        this.__reverseMap__.set(value, reverseMap);
    }

    /**
	 * Return Value associated with a key
	 * @param  {Key} key - The key to return the value for
	 */
    public getValue(key: Key): Value | undefined {
        return this.__map__.get(key);
    }

    /**
	 * Return Map of Value to Keys
	 * @param  {Value} Value - The value to return keys Map for
	 */
    public getKeys(value: Value): Map<Key, void> | undefined {
        return this.__reverseMap__.get(value);
    }

    /**
	 * Return all keys relating to a value in array format
	 * @param  {Value} Value - The value to return keys for
	 */
    public getKeysArray(value: Value): Key[] {
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
    }

    /**
	 * Create a map between multiple keys and a single value
	 * @param  {Key | Key[]} Keys - Any keys to add this value to
	 * @param  {Value} value - The value to link these keys to
	 */
    public setKeys(keys: Key[], value: Value) {
        keys.forEach(element => {
            this.setKey(element, value);
        });
    }

    /**
	 * Remap pre-existing keys to a new value
	 * @param  {Value} value - The value to get the keys from
	 * @param  {Value} newValue - The new value to link the keys to
	 */
     public remapValue(value: Value, newValue: Value): Key[] {
        if (value == null) { console.error("Trying to remap a MultiKeyMap's value with an invalid value: ", value); return []; }
        if (newValue == null) { console.error("Trying to remap a MultiKeyMap's value with an invalid newValue: ", newValue); return []; }
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
        let oldValue = this.getValue(key);
        if (oldValue == undefined) return [];
        return this.remapValue(oldValue, newValue);
    }

    /**
	 * Remap pre-existing key to a new value based on pre-existing Key->Value map
	 * @param  {Key} key - The key to remap
	 * @param  {Value} newValue - The new value to link the key to
	 */
     public remapKey(key: Key, newValue: Value) {
        let oldValue = this.getValue(key);
        if (oldValue == undefined) { this.setKey(key, newValue); return; }
        
        this.deleteKey(key, oldValue);
        this.setKey(key, newValue);
    }

    /**
	 * Remove a key from this map
	 * @param  {Key} Key - The key to remove from this value
	 * @param  {Value} value - The value that this key links to
	 */
    public deleteKey(key: Key, value: Value) {
        let otherKeys = this.__reverseMap__.get(value);

        if (otherKeys == undefined) { this.__map__.delete(key); return; }
        otherKeys.delete(key);
        if (otherKeys.size == 0) { this.__map__.delete(key); this.__reverseMap__.delete(value); return; }
        
        this.__reverseMap__.set(value, otherKeys);
        this.__map__.delete(key);
    }

    /**
	 * Remove many keys from this map
	 * @param  {Key} Keys - The keys to remove from this value
	 * @param  {Value} value - The value that these keys link to
	 */
    public deleteKeys(keys: Key[], value: Value) {
        keys.forEach(element => {
            this.deleteKey(element, value);
        });
    }

    /**
	 * Remove all references to a value
	 * @param  {Value} value - The value to remove
	 */
    public deleteValue(value: Value) {
        this.getKeysArray(value).forEach(element => {
            this.__map__.delete(element);
        });
        this.__reverseMap__.delete(value);
    }

    /**
	 * Remove all keys and values
	 */
    public clear() {
        this.__map__.clear();
        this.__reverseMap__.clear();
    }

 }