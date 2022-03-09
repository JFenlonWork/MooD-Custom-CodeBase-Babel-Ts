import { Vector2 } from "./Vector2";

/** Class representing a Vector3 which hold three floats.
 */
export class Vector3 extends Vector2 {

	z: number;

	/**
	 * Create a Vector3
	 * @param  {number} x - The x value to set
	 * @param  {number} y - The y value to set
	 * @param  {number} z - The z value to set
	 */
	constructor(x: number, y: number, z: number) {
		super(x, y);
		this.z = NaN;
		this.setZ(z);
	}

	/**
	 * Create a Vector3 filled with NaN
	 * @returns {Vector3}
	 */
	static NaN(): Vector3 {
		return new Vector3(NaN, NaN, NaN);
	}

	/**
	 * Create a Vector3 filled with 0
	 * @returns {Vector3}
	 */
	static Zero(): Vector3 {
		return new Vector3(0, 0, 0);
	}

	/**
	 * Create a Vector3 filled with 1
	 * @returns {Vector3}
	 */
	static One(): Vector3 {
		return new Vector3(1, 1, 1);
	}

	/**
	 * Returns if an object is the same as this Vector3
	 * @param  {object} o
	 * @returns {boolean}
	 */
	equals(o: object): boolean {
		if (!(o instanceof Vector3)) return false;
		return (this.x == o.x && this.y == o.y && this.z == o.z);
	}

	/**
	 * Returns if this Vector3 is all NaN
	 * @returns {boolean}
	 */
	IsNaN(): boolean {
		return (this.x == NaN && this.y == NaN && this.z == NaN);
	}

	/**
	 * Returns if this Vector3 has a NaN value
	 * @returns {boolean}
	 */
    HasNaN(): boolean {
		return (this.x == NaN || this.y ==  NaN || this.z ==  NaN);
	}

	/**
	 * Returns if a Vector3 is all NaN
	 * @param  {object} o
	 * @returns {boolean}
	 */
	static isNaN(o: object): boolean {
		if (!(o instanceof Vector3)) return false;
		return (o.x == NaN && o.y == NaN && o.z == NaN);
	}

	/**
	 * Returns if a Vector3 has a NaN value
	 * @param  {object} o
	 * @returns {boolean}
	 */
     static hasNaN(o: object): boolean {
		if (!(o instanceof Vector3)) return false;
		return (o.x == NaN || o.y ==  NaN || o.z ==  NaN);
	}

	/**
	 * Returns a Vector2 version of this Vector3
	 * @returns {Vector2}
	 */
	vector2(): Vector2 {
		return new Vector2(this.x, this.y);
	}

	/**
	 * Set this Vector3's x,y and z value to be the parameter's value and apply the values to this Vector3
	 * @param  {number} x - The x value to set
	 * @param  {number} y - The y value to set
	 * @param  {number} z - The z value to set
	 * @returns {Vector3}
	 */
	set(x: number, y: number, z?: number): Vector3 {
		super.set(x, y);
		this.setZ(z == undefined ? NaN : z);
		return this;
	}

	/**
	 * Set this Vector3's z value to be the parameter's value and apply the values to this Vector3
	 * @param  {number} z
	 * @returns {Vector3}
	 */
	setZ(z: number): Vector3 {
		if (typeof(z) != "number") { console.error("Error trying to set a Vector2's x value using an invalid input: ", z); z = NaN }	
		this.z = z;
		return this;
	}

	/**
	 * Set this Vector3's values to be the parameter's values and apply the values to this Vector3
	 * @param  {Vector3} _vector
	 * @returns {Vector3}
	 */
	setVector3(_vector: Vector3): Vector3 | null {
		if (!(_vector instanceof Vector3)) { console.error("Error trying to set a Vector3's values using an invalid Vector3: ", _vector); _vector = new Vector3(NaN,NaN,NaN); }	

		this.set(_vector.x, _vector.y, _vector.z);
		return this;
	}

	/**
	 * Returns a new Vector3 with the same values as this Vector3
	 * @returns {Vector3}
	 */
	clone(): Vector3 {
		return new Vector3(this.x, this.y, this.z);
	}

	/**
	 * Add two Vector3's values and return the result in a new Vector3
	 * @param  {Vector3} _vector
	 * @returns {Vector3}
	 */
	add(_vector: Vector3): Vector3 {
		if (!(_vector instanceof Vector3)) { console.error("Error trying to add to a vector using an invalid Vector3: ", _vector); return new Vector3(NaN,NaN,NaN); }	
		return new Vector3(this.x + _vector.x, this.y + _vector.y, this.z + _vector.z);	
	}

	/**
	 * Add two Vector3's values and apply the values to this Vector3
	 * @param  {Vector3} _vector
	 * @returns {Vector3}
	 */
	Add(_vector: Vector3): Vector3 {
		if (!(_vector instanceof Vector3)) { console.error("Error trying to add to a vector using an invalid Vector3: ", _vector); return new Vector3(NaN,NaN,NaN); }	
		this.set(this.x + _vector.x, this.y + _vector.y, this.z + _vector.z);

		return this;
	}

	/**
	 * Subract two Vector3's values and return the result in a new Vector3
	 * @param  {Vector3} _vector
	 * @returns {Vector3}
	 */
	subtract(_vector: Vector3): Vector3 {
		if (!(_vector instanceof Vector3)) { console.error("Error trying to subtract from a vector using an invalid Vector3: ", _vector); return new Vector3(NaN,NaN,NaN); }	
		return new Vector3(this.x - _vector.x, this.y - _vector.y, this.z - _vector.z);	
	}

	/**
	 * Subract two Vector3's values and apply the values to this Vector3
	 * @param  {Vector3} _vector
	 * @returns {Vector3}
	 */
	Subtract(_vector: Vector3): Vector3 {
		if (!(_vector instanceof Vector3)) { console.error("Error trying to subtract from a vector using an invalid Vector3: ", _vector); return new Vector3(NaN,NaN,NaN); }	
		this.set(this.x - _vector.x, this.y - _vector.y, this.z - _vector.z);

		return this;
	}

	/**
	 * Calcualte the scaled value of a Vector3 and return the result in a new Vector3
	 * @param  {number} _scalar
	 * @returns {Vector3}
	 */
	scale(_scalar: number): Vector3 {
		if (typeof(_scalar) != "number" || isNaN(_scalar)) { console.error("Error trying to calculate scaled vector using an invalid scaler: ", _scalar); _scalar = NaN }	
		return new Vector3(this.x * _scalar, this.y * _scalar, this.z * _scalar);
	}

	/**
	 * Calcualte the scaled value of a Vector3 and apply the values to this Vector3
	 * @param  {number} _scalar
	 * @returns {Vector3}
	 */
	Scale(_scalar: number): Vector3 {
		if (typeof(_scalar) != "number" || isNaN(_scalar)) { console.error("Error trying to calculate scaled vector using an invalid scaler: ", _scalar); _scalar = NaN }		
		this.set(this.x * _scalar, this.y * _scalar, this.z * _scalar);

		return this;
	}

	/**
	 * Calcualte the dot product of two Vector3's and return the result in a new Vector3
	 * @param  {Vector3} _vector
	 * @returns {Vector3}
	 */
	dot(_vector: Vector3): Vector3 {
		if (!(_vector instanceof Vector3)) { console.error("Error trying to calculate dot product using an invalid Vector3: ", _vector); return new Vector3(NaN,NaN,NaN); }	
		return new Vector3(this.x * _vector.x, this.y * _vector.y, this.z * _vector.z);
	}

	/**
	 * Calcualte the dot product of two Vector3's and apply the values to this Vector3
	 * @param  {Vector3} _vector
	 * @returns {Vector3}
	 */
	Dot(_vector: Vector3): Vector3 {
		if (!(_vector instanceof Vector3)) { console.error("Error trying to calculate dot product using an invalid Vector3: ", _vector); _vector = new Vector3(NaN,NaN,NaN); }	
		this.set(this.x * _vector.x, this.y * _vector.y, this.z * _vector.z);

		return this;
	}

	/**
	 * Calculate the distance between two Vector3's
	 * @param  {Vector3} _vector
	 * @returns {number}
	 */
	distance(_vector: Vector3): number {
		if (!(_vector instanceof Vector3)) { console.error("Error trying to calculate distance using an invalid Vector3: ", _vector); return NaN; }	
		return Math.sqrt(this.distanceSqr(_vector));
	}

	/**
	 * Calculate the squared distance between two Vector3's
	 * @param  {Vector3} _vector
	 * @returns {number}
	 */
	distanceSqr(_vector: Vector3): number {
		if (!(_vector instanceof Vector3)) { console.error("Error trying to calculate distance squared using an invalid Vector3: ", _vector); return NaN; }		
		return Math.pow(this.x - _vector.x, 2) + Math.pow(this.y - _vector.y, 2) + Math.pow(this.z - _vector.z, 2);
	}
}