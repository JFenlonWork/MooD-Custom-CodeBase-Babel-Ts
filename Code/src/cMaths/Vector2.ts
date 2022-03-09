/** Class representing a Vector2 which hold two floats.
 */
export class Vector2 {

	x: number;
	y: number;

	/**
	 * Create a Vector2
	 * @param  {number} x - The x value to set
	 * @param  {number} y - The y value to set
	 */
	constructor(x: number, y: number) {
		this.x = NaN;
		this.y = NaN;
		this.set(x, y);
	}

	/**
	 * Create a Vector2 filled with NaN
	 * @returns {Vector2}
	 */
	static NaN(): Vector2 {
		return new Vector2(NaN, NaN);
	}

	/**
	 * Create a Vector2 filled with 0
	 * @returns {Vector2}
	 */
	static Zero(): Vector2 {
		return new Vector2(0, 0);
	}

	/**
	 * Create a Vector2 filled with 1
	 * @returns {Vector2}
	 */
	static One(): Vector2 {
		return new Vector2(1, 1);
	}

	/**
	 * Returns if an object is the same as this Vector2
	 * @param  {object} o
	 * @returns {boolean}
	 */
	equals(o: object): boolean {
		if (!(o instanceof Vector2)) return false;
		return (this.x == o.x && this.y == o.y);
	}

	/**
	 * Returns if this Vector2 is all NaN
	 * @returns {boolean}
	 */
	IsNaN(): boolean {
		return (this.x == NaN && this.y == NaN);
	}

	/**
	 * Returns if this Vector2 has a NaN value
	 * @returns {boolean}
	 */
    HasNaN(): boolean {
		return (this.x == NaN || this.y ==  NaN);
	}

	/**
	 * Returns if a Vector2 is all NaN
	 * @param  {object} o
	 * @returns {boolean}
	 */
	static isNaN(o: object): boolean {
		if (!(o instanceof Vector2)) return false;
		return (o.x == NaN && o.y == NaN);
	}

	/**
	 * Returns if a Vector2 has a NaN value
	 * @param  {object} o
	 * @returns {boolean}
	 */
     static hasNaN(o: object): boolean {
		if (!(o instanceof Vector2)) return false;
		return (o.x == NaN || o.y ==  NaN);
	}

	/**
	 * Set this Vector2's x and y value to be the parameter's value and apply the values to this Vector2
	 * @param  {number} x - The x value to set
	 * @param  {number} y - The y value to set
	 * @returns {Vector2}
	 */
	set(x: number, y: number): Vector2 {
		this.setX(x);
		this.setY(y);
		return this;
	}

	/**
	 * Set this Vector2's x value to be the parameter's value and apply the values to this Vector2
	 * @param  {number} x
	 * @returns {Vector2}
	 */
	setX(x: number): Vector2 {
		if (typeof(x) != "number") { console.error("Error trying to set a Vector2's x value using an invalid input: ", x); x = NaN }	
		this.x = x;
		return this;
	}

	/**
	 * Set this Vector2's y value to be the parameter's value and apply the values to this Vector2
	 * @param  {number} y
	 * @returns {Vector2}
	 */
	setY(y: number): Vector2 {
		if (typeof(y) != "number") { console.error("Error trying to set a Vector2's y value using an invalid input: ", y); y = NaN }	
		this.y = y;
		return this;
	}

	/**
	 * Set this Vector2's values to be the parameter's values and apply the values to this Vector2
	 * @param  {Vector2} _vector
	 * @returns {Vector2}
	 */
	setVector2(_vector: Vector2): Vector2 | null {
		if (!(_vector instanceof Vector2)) { console.error("Error trying to set a Vector2's values using an invalid Vector2: ", _vector); _vector = new Vector2(NaN,NaN); }	

		this.set(_vector.x, _vector.y);
		return this;
	}

	/**
	 * Returns a new Vector2 with the same values as this Vector2
	 * @returns {Vector2}
	 */
	clone(): Vector2 {
		return new Vector2(this.x, this.y);
	}

	/**
	 * Add two Vector2's values and return the result in a new Vector2
	 * @param  {Vector2} _vector
	 * @returns {Vector2}
	 */
	add(_vector: Vector2): Vector2 {
		if (!(_vector instanceof Vector2)) { console.error("Error trying to add from a vector using an invalid Vector2: ", _vector); return new Vector2(NaN,NaN); }	
		return new Vector2(this.x + _vector.x, this.y + _vector.y);	
	}

	/**
	 * Add two Vector2's values and apply the values to this Vector2
	 * @param  {Vector2} _vector
	 * @returns {Vector2}
	 */
	Add(_vector: Vector2): Vector2 {
		if (!(_vector instanceof Vector2)) { console.error("Error trying to add from a vector using an invalid Vector2: ", _vector); return new Vector2(NaN,NaN); }	
		this.set(this.x + _vector.x, this.y + _vector.y);

		return this;
	}

	/**
	 * Subract two Vector2's values and return the result in a new Vector2
	 * @param  {Vector2} _vector
	 * @returns {Vector2}
	 */
	subtract(_vector: Vector2): Vector2 {
		if (!(_vector instanceof Vector2)) { console.error("Error trying to subtract from a vector using an invalid Vector2: ", _vector); return new Vector2(NaN,NaN); }	
		return new Vector2(this.x - _vector.x, this.y - _vector.y);	
	}

	/**
	 * Subract two Vector2's values and apply the values to this Vector2
	 * @param  {Vector2} _vector
	 * @returns {Vector2}
	 */
	Subtract(_vector: Vector2): Vector2 {
		if (!(_vector instanceof Vector2)) { console.error("Error trying to subtract from a vector using an invalid Vector2: ", _vector); return new Vector2(NaN,NaN); }	
		this.x -= _vector.x;
		this.y -= _vector.y;

		return this;
	}

	/**
	 * Calcualte the scaled value of a Vector2 and return the result in a new Vector2
	 * @param  {number} _scalar
	 * @returns {Vector2}
	 */
	scale(_scalar: number): Vector2 {
		if (typeof(_scalar) != "number" || isNaN(_scalar)) { console.error("Error trying to calculate scaled vector using an invalid scaler: ", _scalar); _scalar = NaN }	
		return new Vector2(this.x * _scalar, this.y * _scalar);
	}

	/**
	 * Calcualte the scaled value of a Vector2 and apply the values to this Vector2
	 * @param  {number} _scalar
	 * @returns {Vector2}
	 */
	Scale(_scalar: number): Vector2 {
		if (typeof(_scalar) != "number" || isNaN(_scalar)) { console.error("Error trying to calculate scaled vector using an invalid scaler: ", _scalar); _scalar = NaN }	
		this.x *= _scalar;
		this.y *= _scalar;

		return this;
	}

	/**
	 * Calcualte the dot product of two Vector2's and return the result in a new Vector2
	 * @param  {Vector2} _vector
	 * @returns {Vector2}
	 */
	dot(_vector: Vector2): Vector2 {
		if (!(_vector instanceof Vector2)) { console.error("Error trying to calculate dot product using an invalid Vector2: ", _vector); return new Vector2(NaN,NaN); }	
		return new Vector2(this.x * _vector.x, this.y * _vector.y);
	}

	/**
	 * Calcualte the dot product of two Vector2's and apply the values to this Vector2
	 * @param  {Vector2} _vector
	 * @returns {Vector2}
	 */
	Dot(_vector: Vector2): Vector2 {
		if (!(_vector instanceof Vector2)) { console.error("Error trying to calculate dot product using an invalid Vector2: ", _vector); _vector = new Vector2(NaN,NaN); }	
		this.x *= _vector.x;
		this.y *= _vector.y;

		return this;
	}

	/**
	 * Calculate the distance between two Vector2's
	 * @param  {Vector2} _vector
	 * @returns {number}
	 */
	distance(_vector: Vector2): number {
		if (!(_vector instanceof Vector2)) { console.error("Error trying to calculate distance using an invalid Vector2: ", _vector); return NaN; }	
		return Math.sqrt(this.distanceSqr(_vector));
	}

	/**
	 * Calculate the squared distance between two Vector2's
	 * @param  {Vector2} _vector
	 * @returns {number}
	 */
	distanceSqr(_vector: Vector2): number {
		if (!(_vector instanceof Vector2)) { console.error("Error trying to calculate distance squared using an invalid Vector2: ", _vector); return NaN; }		
		return Math.pow(this.x - _vector.x, 2) + Math.pow(this.y - _vector.y, 2);
	}
}