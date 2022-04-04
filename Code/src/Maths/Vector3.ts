import { Vector2 } from "./Vector2";

/** Class representing a Vector3 which hold three floats.
 */
export class Vector3 extends Vector2 {

	private _z: number = NaN;
	public get z(): number {
		return this._z;
	}

	public set z(value: number) {
		if (typeof(value) != "number") { console.error("Error trying to set a Vector's z value using an invalid input: ", value); value = NaN }	
		this._z = value;
	}

	/**
	 * Create a Vector3
	 * @param  {number} x - The x value to set
	 * @param  {number} y - The y value to set
	 * @param  {number} z - The z value to set
	 */
	public constructor(x: number = NaN, y: number = NaN, z: number = NaN) {
		super(x, y);
		this.z = z;
	}

	/**
	 * Set this Vector3's x,y and z value to be the parameter's value and apply the values to this Vector3
	 * @param  {number} x - The x value to set
	 * @param  {number} y - The y value to set
	 * @param  {number} z - The z value to set
	 * @returns {Vector3}
	 */
	public set(x: number, y: number, z: number = 0): Vector3 {
		super.set(x, y);
		this.z = z;
		return this;
	}

	/**
	 * Set this Vector3's values to be the parameter's values and apply the values to this Vector3
	 * @param  {Vector3} _vector
	 * @returns {Vector3}
	 */
	public setVector3(_vector: Vector3): Vector3 {
		if (!(_vector instanceof Vector3)) { console.error("Error trying to set a Vector3's values using an invalid Vector3: ", _vector); _vector = new Vector3(NaN,NaN,NaN); }	

		this.set(_vector.x, _vector.y, _vector.z);
		return this;
	}

	/**
	 * Create a Vector3 filled with NaN
	 * @returns {Vector3}
	 */
	public static NaN(): Vector3 {
		return new Vector3(NaN, NaN, NaN);
	}

	/**
	 * Create a Vector3 filled with 0
	 * @returns {Vector3}
	 */
	public static Zero(): Vector3 {
		return new Vector3(0, 0, 0);
	}

	/**
	 * Create a Vector3 filled with 1
	 * @returns {Vector3}
	 */
	public static One(): Vector3 {
		return new Vector3(1, 1, 1);
	}

	/**
	 * Returns if an object is the same as this Vector3
	 * @param  {object} o
	 * @returns {boolean}
	 */
	public equals(o: object): boolean {
		if (!(o instanceof Vector3)) return false;
		return (this.x == o.x && this.y == o.y && this.z == o.z);
	}

	/**
	 * Returns if this Vector3 is all NaN
	 * @returns {boolean}
	 */
	public IsNaN(): boolean {
		return (isNaN(this.x) && isNaN(this.y) && isNaN(this.z));
	}

	/**
	 * Returns if this Vector3 has a NaN value
	 * @returns {boolean}
	 */
    public HasNaN(): boolean {
		return (isNaN(this.x) || isNaN(this.y) || isNaN(this.z));
	}

	/**
	 * Returns if a Vector3 is all NaN
	 * @param  {object} o
	 * @returns {boolean}
	 */
	public static isNaN(o: object): boolean {
		if (!(o instanceof Vector3)) return false;
		return (isNaN(o.x) && isNaN(o.y) && isNaN(o.z));
	}

	/**
	 * Returns if a Vector3 has a NaN value
	 * @param  {object} o
	 * @returns {boolean}
	 */
    public static hasNaN(o: object): boolean {
		if (!(o instanceof Vector3)) return false;
		return (isNaN(o.x) || isNaN(o.y) || isNaN(o.z));
	}

	/**
	 * Returns a Vector2 version of this Vector3
	 * @returns {Vector2}
	 */
	public vector2(): Vector2 {
		return new Vector2(this.x, this.y);
	}

	/**
	 * Returns a new Vector3 with the same values as this Vector3
	 * @returns {Vector3}
	 */
	public clone(): Vector3 {
		return new Vector3(this.x, this.y, this.z);
	}

	/**
	 * Add two Vector3's values and return the result in a new Vector3
	 * @param  {Vector3} _vector
	 * @returns {Vector3}
	 */
	public add(_vector: Vector3): Vector3 {
		if (!(_vector instanceof Vector3)) { console.error("Error trying to add to a vector using an invalid Vector3: ", _vector); return new Vector3(NaN,NaN,NaN); }	
		return new Vector3(this.x + _vector.x, this.y + _vector.y, this.z + _vector.z);	
	}

	/**
	 * Add two Vector3's values and apply the values to this Vector3
	 * @param  {Vector3} _vector
	 * @returns {Vector3}
	 */
	public Add(_vector: Vector3): Vector3 {
		if (!(_vector instanceof Vector3)) { console.error("Error trying to add to a vector using an invalid Vector3: ", _vector); return new Vector3(NaN,NaN,NaN); }	
		this.set(this.x + _vector.x, this.y + _vector.y, this.z + _vector.z);

		return this;
	}

	/**
	 * Subract two Vector3's values and return the result in a new Vector3
	 * @param  {Vector3} _vector
	 * @returns {Vector3}
	 */
	public subtract(_vector: Vector3): Vector3 {
		if (!(_vector instanceof Vector3)) { console.error("Error trying to subtract from a vector using an invalid Vector3: ", _vector); return new Vector3(NaN,NaN,NaN); }	
		return new Vector3(this.x - _vector.x, this.y - _vector.y, this.z - _vector.z);	
	}

	/**
	 * Subract two Vector3's values and apply the values to this Vector3
	 * @param  {Vector3} _vector
	 * @returns {Vector3}
	 */
	public Subtract(_vector: Vector3): Vector3 {
		if (!(_vector instanceof Vector3)) { console.error("Error trying to subtract from a vector using an invalid Vector3: ", _vector); return new Vector3(NaN,NaN,NaN); }	
		this.set(this.x - _vector.x, this.y - _vector.y, this.z - _vector.z);

		return this;
	}

	/**
	 * Calcualte the multiplied value of a Vector3 and return the result in a new Vector3
	 * @param  {number} _scalar
	 * @returns {Vector3}
	 */
	public multiply(_scalar: number): Vector3 {
		if (typeof(_scalar) != "number" || isNaN(_scalar)) { console.error("Error trying to calculate multiplied vector using an invalid scaler: ", _scalar); _scalar = NaN }	
		return new Vector3(this.x * _scalar, this.y * _scalar, this.z * _scalar);
	}

	/**
	 * Calcualte the multiplied value of a Vector3 and apply the values to this Vector3
	 * @param  {number} _scalar
	 * @returns {Vector3}
	 */
	public Multiply(_scalar: number): Vector3 {
		if (typeof(_scalar) != "number" || isNaN(_scalar)) { console.error("Error trying to calculate multiplied vector using an invalid scaler: ", _scalar); _scalar = NaN }		
		this.set(this.x * _scalar, this.y * _scalar, this.z * _scalar);

		return this;
	}

	/**
	 * Calcualte the divided value of a Vector3 and return the result in a new Vector3
	 * @param  {number} _scalar
	 * @returns {Vector3}
	 */
	 public divide(_scalar: number): Vector3 {
		if (typeof(_scalar) != "number" || isNaN(_scalar)) { console.error("Error trying to calculate divided vector using an invalid scaler: ", _scalar); _scalar = NaN }	
		return new Vector3(this.x / _scalar, this.y / _scalar, this.z / _scalar);
	}

	/**
	 * Calcualte the divided value of a Vector3 and apply the values to this Vector3
	 * @param  {number} _scalar
	 * @returns {Vector3}
	 */
	public Divide(_scalar: number): Vector3 {
		if (typeof(_scalar) != "number" || isNaN(_scalar)) { console.error("Error trying to calculate divided vector using an invalid scaler: ", _scalar); _scalar = NaN }		
		this.set(this.x / _scalar, this.y / _scalar, this.z / _scalar);

		return this;
	}

	/**
	 * Calcualte the dot product of two Vector3's and return the result in a new Vector3
	 * @param  {Vector3} _vector
	 * @returns {Vector3}
	 */
	public dot(_vector: Vector3): Vector3 {
		if (!(_vector instanceof Vector3)) { console.error("Error trying to calculate dot product using an invalid Vector3: ", _vector); return new Vector3(NaN,NaN,NaN); }	
		return new Vector3(this.x * _vector.x, this.y * _vector.y, this.z * _vector.z);
	}

	/**
	 * Calcualte the dot product of two Vector3's and apply the values to this Vector3
	 * @param  {Vector3} _vector
	 * @returns {Vector3}
	 */
	public Dot(_vector: Vector3): Vector3 {
		if (!(_vector instanceof Vector3)) { console.error("Error trying to calculate dot product using an invalid Vector3: ", _vector); _vector = new Vector3(NaN,NaN,NaN); }	
		this.set(this.x * _vector.x, this.y * _vector.y, this.z * _vector.z);

		return this;
	}

	/**
	 * Calculate the distance between two Vector3's
	 * @param  {Vector3} _vector
	 * @returns {number}
	 */
	public distance(_vector: Vector3): number {
		if (!(_vector instanceof Vector3)) { console.error("Error trying to calculate distance using an invalid Vector3: ", _vector); return NaN; }	
		return Math.sqrt(this.distanceSqr(_vector));
	}

	/**
	 * Calculate the squared distance between two Vector3's
	 * @param  {Vector3} _vector
	 * @returns {number}
	 */
	public distanceSqr(_vector: Vector3): number {
		if (!(_vector instanceof Vector3)) { console.error("Error trying to calculate distance squared using an invalid Vector3: ", _vector); return NaN; }		
		return Math.pow(this.x - _vector.x, 2) + Math.pow(this.y - _vector.y, 2) + Math.pow(this.z - _vector.z, 2);
	}
}