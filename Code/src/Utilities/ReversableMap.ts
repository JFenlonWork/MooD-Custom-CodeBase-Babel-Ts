/** Class that handles key to value Map with reversable search 
 */
 export class ReversableMap<Key, Value> {
//** Store all forward references to values to allow searching*/
    private __map__: Map<Key, Value> = new Map();

    /** Store all inverse references to values to allow searching and Maps the values to void for O(1) checking*/
    private __reverseMap__: Map<Value, Key> = new Map();

    /**
	 * Create a reversable map between Keys and Values
	 * @param  {Key} Key - The key to add on creation
	 * @param  {Value} value - The value to link this key
	 */
    constructor (key?: Key, value?: Value) {
        if (key == null || value == null) return;

        this.__map__.set(key, value);
        this.__reverseMap__.set(value, key);
    }

    /**
	 * Return Value associated with a key
	 * @param  {Key} key - The key to return the value for
	 */
    public getValue(key: Key): Value | undefined {
        return this.__map__.get(key);
    }

    /**
	 * Return Key associated with a Value
	 * @param  {Value} Value - The value to return keys Map for
	 */
    public getKey(value: Value): Key | undefined {
        return this.__reverseMap__.get(value);
    }

    /**
	 * Test if a Value exists for a given Key
	 * @param  {Key} Key - The Key to check if a value exists
	 */
    public hasKey(key: Key): boolean {
        return (this.getValue(key) != undefined);
    }

    /**
	 * Test if a Key exists for a given Value
	 * @param  {Value} value - The Value to check if a Key exists
	 */
     public hasValue(value: Value): boolean {
        return (this.getKey(value) != undefined);
    }

    /**
	 * Create a map between a Key and a Value
	 * @param  {Key} Key - The Key to link to this Value
	 * @param  {Value} value - The Value to link to this Key
	 */
    public setKey(key: Key, value: Value): boolean {
        if (key == null) { console.error("Trying to set a key in a ReversableMap wtih an invalid key: ", key); return false; }
        if (value == null) { console.error("Trying to set a value in a ReversableMap wtih an invalid value: ", value); return false; }
        let _key: Key | undefined = this.getKey(value);

        if (_key != undefined)  this.deleteKey(_key);
        this.__map__.set(key, value);
        this.__reverseMap__.set(value, key);
        return true;
    }

    /**
	 * Remove a key from this map
	 * @param  {Key} Key - The Key to remove from this value
	 */
    public deleteKey(key: Key): boolean {
        if (key == null) { console.error("Trying to delete a key in a ReversableMap wtih an invalid key: ", key); return false; }
        let value = this.__map__.get(key);

        if (value == null) return false;
        this.__map__.delete(key);
        this.__reverseMap__.delete(value);
        return true;
    }

    /**
	 * Remove a Value from this map
	 * @param  {Value} value - The Value to remove
	 */
     public deleteValue(value: Value): boolean {
        if (value == null) { console.error("Trying to delete a value in a ReversableMap wtih an invalid value: ", value); return false; }
        let key = this.__reverseMap__.get(value);

        if (key == null) return false;
        this.__map__.delete(key);
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