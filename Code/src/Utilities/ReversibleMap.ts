import { CompareTypes } from "./CompareTypes";

/** Class that handles key to value Map with reversible search
 * Lookup is O(1) for both forward and reverse lookup but requires extra memory
 */
 export class ReversibleMap<Key, Value> {
     
    /** Store all forward references to values to allow searching*/
    private __map__: Map<Key, Value> = new Map();

    /** Store all inverse references to values to allow searching and Maps the values to void for O(1) checking*/
    private __reverseMap__: Map<Value, Key> = new Map();

    /** Store the object type of the Keys in this Reversible Map for toString comparison */
    private __keyType__: string = "";
    public get keyType(): string {
        return this.__keyType__;
    }

    /** Return the object type of the Values in this Reversible Map for toString comparison */
    private __valueType__: string = "";
    public get valueType(): string {
        return this.__valueType__;
    }

    /** Return the size of this ReversibleMap */
    public get size(): number {
        return this.__map__.size;
    }

    /** Return the size of the reverse map of this ReversibleMap */
    public get reverseSize(): number {
        return this.__reverseMap__.size;
    }

    /**
	 * Create a reversible map between Keys and Values
     * @param  {string} keyType - The type of the keys in the collection, used for toString comparison
     * @param  {string} valueType - The type of the values in the collection, used for toString comparison
	 * @param  {[[Key, Value]]} collection - A collection of key value pairs to create the map from
	 */
    constructor (keyType: string, valueType: string, collection?: [Key, Value][]) {
        this.__keyType__ = keyType;
        this.__valueType__ = valueType;

        if (collection == null) return;
        
        collection.forEach((element) => {

            if (!Array.isArray(element) || element.length != 2) return;

            this.__map__.set(element[0], element[1]);
            this.__reverseMap__.set(element[1], element[0]);

        });
    }

    /**
     * Returns if two reversible maps are equal
     * @param  {ReversibleMap<Key, Value>} map - The other ReversibleMap to compare to
     * @returns Value - The value associated with the key
    */
    public equals(map: ReversibleMap<Key, Value>): boolean {
        if (this.size != map.size || this.reverseSize != map.reverseSize) return false;

        for (let [key, value] of this.__map__.entries()) {
            if (map.getValue(key) != value) return false;
        }

        for (let [value, key] of this.__reverseMap__.entries()) {
            if (map.getKey(value) != key) return false;
        }

        return true;
    }

	/**
	 * Returns the class type of this object
	 * @returns {string}
	 */
     public toString(): string {
		return  "ReversibleMap<" + this.keyType + ", " + this.valueType + ">";
	}

    /** 
     * Returns the type of this class
    */
    public static toString(): string {
        return "ReversibleMap";
    }

    /** 
     * Returns an iterator for values
    */
    public values(): IterableIterator<Value> {
        return this.__reverseMap__.keys();
    }

    /** 
     * Returns an array of all values
    */
    public valuesAsArray(): Value[] {
        return Array.from(this.__reverseMap__.keys());
    }

    /**
	 * Return Value associated with a key
	 * @param  {Key} key - The key to return the value for
	 */
    public getValue(key: Key): Value | undefined {
        return this.__map__.get(key);
    }

    /** 
     * Returns an iterator for keys
    */
    public keys(): IterableIterator<Key> {
        return this.__map__.keys();
    }   

    /** 
     * Returns an array of all values
    */
     public keysAsArray(): Key[] {
        return Array.from(this.__map__.keys());
    }

    /**
	 * Return Key associated with a Value
	 * @param  {Value} value - The value to return keys Map for
	 */
    public getKey(value: Value): Key | undefined {
        return this.__reverseMap__.get(value);
    }

    /**
	 * Test if a Value exists for a given Key
	 * @param  {Key} key - The Key to check if a value exists
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
	 * @param  {Key} key - The Key to link to this Value
	 * @param  {Value} value - The Value to link to this Key
	 */
    public setKey(key: Key, value: Value): boolean {
        if (key == null) { console.error("Trying to set a key in a ReversibleMap wtih an invalid key: ", key); return false; }
        if (value == null) { console.error("Trying to set a value in a ReversibleMap wtih an invalid value: ", value); return false; }
        let _key: Key | undefined = this.getKey(value);

        if (_key != undefined)  this.deleteKey(_key);
        this.__map__.set(key, value);
        this.__reverseMap__.set(value, key);
        return true;
    }

    /**
	 * Remove a key from this map
	 * @param  {Key} key - The Key to remove from this value
	 */
    public deleteKey(key: Key): boolean {
        if (key == null) { console.error("Trying to delete a key in a ReversibleMap wtih an invalid key: ", key); return false; }
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
        if (value == null) { console.error("Trying to delete a value in a ReversibleMap wtih an invalid value: ", value); return false; }
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