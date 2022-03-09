import { Vector3 } from "./Vector3";

/** Class representing a Vector3 which hold three floats.
 */
export class Vector4 extends Vector3 {

	w: number;

	/**
	 * Create a Vector3
	 * @param  {number} x - The x value to set
	 * @param  {number} y - The y value to set
	 * @param  {number} z - The z value to set
	 * @param  {number} w - The w value to set
	 */
	constructor(x: number, y: number, z: number, w: number) {
		super(x, y, z);
		this.w = NaN;
		this.setW(w);
	}

	/**
	 * Create a Vector4 filled with NaN
	 * @returns {Vector4}
	 */
	static NaN(): Vector4 {
		return new Vector4(NaN, NaN, NaN, NaN);
	}

	/**
	 * Create a Vector4 filled with 0
	 * @returns {Vector4}
	 */
	static Zero(): Vector4 {
		return new Vector4(0, 0, 0, 0);
	}

	/**
	 * Create a Vector4 filled with 1
	 * @returns {Vector4}
	 */
	static One(): Vector4 {
		return new Vector4(1, 1, 1, 1);
	}

	/**
	 * Returns if an object is the same as this Vector4
	 * @param  {object} o
	 * @returns {boolean}
	 */
	equals(o: object): boolean {
		if (!(o instanceof Vector4)) return false;
		return (this.x == o.x && this.y == o.y && this.z == o.z && this.w == o.w);
	}

	/**
	 * Returns if this Vector4 is all NaN
	 * @returns {boolean}
	 */
	IsNaN(): boolean {
		return (this.x == NaN && this.y == NaN && this.z == NaN && this.w == NaN);
	}

	/**
	 * Returns if this Vector4 has a NaN value
	 * @returns {boolean}
	 */
    HasNaN(): boolean {
		return (this.x == NaN || this.y ==  NaN || this.z ==  NaN || this.w ==  NaN);
	}

	/**
	 * Returns if a Vector4 is all NaN
	 * @param  {object} o
	 * @returns {boolean}
	 */
	static isNaN(o: object): boolean {
		if (!(o instanceof Vector4)) return false;
		return (o.x == NaN && o.y == NaN && o.z == NaN && o.w == NaN);
	}

	/**
	 * Returns if a Vector4 has a NaN value
	 * @param  {object} o
	 * @returns {boolean}
	 */
    static hasNaN(o: object): boolean {
		if (!(o instanceof Vector4)) return false;
		return (o.x == NaN || o.y ==  NaN || o.z ==  NaN || o.w ==  NaN);
	}

	/**
	 * Returns a Vector3 version of this Vector4
	 * @returns {Vector3}
	 */
	vector3(): Vector3 {
		return new Vector3(this.x, this.y, this.z);
	}

	/**
	 * Set this Vector4's x value to be the parameter's value and apply the values to this Vector4
	 * @param  {number} x - The x value to set
	 * @param  {number} y - The y value to set
	 * @param  {number} z - The z value to set
	 * @param  {number} w - The w value to set
	 * @returns {Vector4}
	 */
	set(x: number, y: number, z: number, w?: number): Vector4 {
		super.set(x, y, z);
		this.setW(w == undefined ? NaN : w);
		return this;
	}

	/**
	 * Set this Vector4's w value to be the parameter's value and apply the values to this Vector4
	 * @param  {number} w
	 * @returns {Vector4}
	 */
	setW(w: number): Vector3 {
		if (typeof(w) != "number") { console.error("Error trying to set a Vector4's w value using an invalid input: ", w); w = NaN }	
		this.w = w;
		return this;
	}

	/**
	 * Set this Vector4's values to be the parameter's values and apply the values to this Vector4
	 * @param  {Vector4} _vector
	 * @returns {Vector4}
	 */
	setVector4(_vector: Vector4): Vector4 | null {
		if (!(_vector instanceof Vector3)) { console.error("Error trying to set a Vector4's values using an invalid Vector4: ", _vector); _vector = new Vector4(NaN,NaN,NaN,NaN); }	

		this.set(_vector.x, _vector.y, _vector.z, _vector.w);
		return this;
	}

	/**
	 * Returns a new Vector4 with the same values as this Vector4
	 * @returns {Vector4}
	 */
	clone(): Vector4 {
		return new Vector4(this.x, this.y, this.z, this.w);
	}

	/**
	 * Add two Vector4's values and return the result in a new Vector4
	 * @param  {Vector4} _vector
	 * @returns {Vector4}
	 */
	add(_vector: Vector4): Vector4 {
		if (!(_vector instanceof Vector3)) { console.error("Error trying to add to a vector using an invalid Vector4: ", _vector); return new Vector4(NaN,NaN,NaN,NaN); }	
		return new Vector4(this.x + _vector.x, this.y + _vector.y, this.z + _vector.z, this.w + _vector.w);	
	}

	/**
	 * Add two Vector4's values and apply the values to this Vector4
	 * @param  {Vector4} _vector
	 * @returns {Vector4}
	 */
	Add(_vector: Vector4): Vector4 {
		if (!(_vector instanceof Vector3)) { console.error("Error trying to add to a vector using an invalid Vector4: ", _vector); return new Vector4(NaN,NaN,NaN,NaN); }	
		this.set(this.x + _vector.x, this.y + _vector.y, this.z + _vector.z, this.w + _vector.w);

		return this;
	}

	/**
	 * Subract two Vector4's values and return the result in a new Vector4
	 * @param  {Vector4} _vector
	 * @returns {Vector4}
	 */
	subtract(_vector: Vector4): Vector4 {
		if (!(_vector instanceof Vector3)) { console.error("Error trying to subtract from a vector using an invalid Vector4: ", _vector); return new Vector4(NaN,NaN,NaN,NaN); }	
		return new Vector4(this.x - _vector.x, this.y - _vector.y, this.z - _vector.z, this.w - _vector.w);	
	}

	/**
	 * Subract two Vector4's values and apply the values to this Vector4
	 * @param  {Vector4} _vector
	 * @returns {Vector4}
	 */
	Subtract(_vector: Vector4): Vector4 {
		if (!(_vector instanceof Vector3)) { console.error("Error trying to subtract from a vector using an invalid Vector3: ", _vector); return new Vector4(NaN,NaN,NaN,NaN); }	
		this.set(this.x - _vector.x, this.y - _vector.y, this.z - _vector.z, this.w - _vector.w);

		return this;
	}

	/**
	 * Calcualte the scaled value of a Vector4 and return the result in a new Vector4
	 * @param  {number} _scalar
	 * @returns {Vector4}
	 */
	scale(_scalar: number): Vector4 {
		if (typeof(_scalar) != "number" || isNaN(_scalar)) { console.error("Error trying to calculate scaled vector using an invalid scaler: ", _scalar); _scalar = NaN }	
		return new Vector4(this.x * _scalar, this.y * _scalar, this.z * _scalar, this.w * _scalar);
	}

	/**
	 * Calcualte the scaled value of a Vector4 and apply the values to this Vector4
	 * @param  {number} _scalar
	 * @returns {Vector4}
	 */
	Scale(_scalar: number): Vector4 {
		if (typeof(_scalar) != "number" || isNaN(_scalar)) { console.error("Error trying to calculate scaled vector using an invalid scaler: ", _scalar); _scalar = NaN }	
		this.set(this.x * _scalar, this.y * _scalar, this.z * _scalar, this.w * _scalar);

		return this;
	}

	/**
	 * Calcualte the dot product of two Vector4's and return the result in a new Vector4
	 * @param  {Vector4} _vector
	 * @returns {Vector4}
	 */
	dot(_vector: Vector4): Vector4 {
		if (!(_vector instanceof Vector3)) { console.error("Error trying to calculate dot product using an invalid Vector4: ", _vector); return new Vector4(NaN,NaN,NaN,NaN); }	
		return new Vector4(this.x * _vector.x, this.y * _vector.y, this.z * _vector.z, this.w * _vector.w);
	}

	/**
	 * Calcualte the dot product of two Vector4's and apply the values to this Vector4
	 * @param  {Vector4} _vector
	 * @returns {Vector4}
	 */
	Dot(_vector: Vector4): Vector4 {
		if (!(_vector instanceof Vector3)) { console.error("Error trying to calculate dot product using an invalid Vector4: ", _vector); _vector = new Vector4(NaN,NaN,NaN,NaN); }	
		this.set(this.x * _vector.x, this.y * _vector.y, this.z * _vector.z, this.w * _vector.w);

		return this;
	}
}