/** Class representing a Vector2 which hold two floats.
 * @typedef {Vector2} vector2
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
		this.x = x;
		this.y = y;
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
	 * Set this Vector2's x value to be the parameter's value and apply the values to this Vector2
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
		if (x == null) { console.error("Error trying to set a Vector2's x value using a NaN"); x = NaN }	
		this.x = x;
		return this;
	}

	/**
	 * Set this Vector2's y value to be the parameter's value and apply the values to this Vector2
	 * @param  {number} y
	 * @returns {Vector2}
	 */
	setY(y: number): Vector2 {
		if (y == null) { console.error("Error trying to set a Vector2's y value using a NaN"); y = NaN }	
		this.y = y;
		return this;
	}

	/**
	 * Set this Vector2's values to be the parameter's values and apply the values to this Vector2
	 * @param  {Vector2} _vector
	 * @returns {Vector2}
	 */
	setVector2(_vector: Vector2): Vector2 | null {
		if (_vector == null) { console.error("Error trying to set a Vector2's values using a null Vector2"); _vector = new Vector2(NaN,NaN); }	

		this.x = _vector.x;
		this.y = _vector.y;
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
		if (_vector == null) { console.error("Error trying to add from a vector using a null Vector2"); return new Vector2(NaN,NaN); }	
		return new Vector2(this.x + _vector.x, this.y + _vector.y);	
	}

	/**
	 * Add two Vector2's values and apply the values to this Vector2
	 * @param  {Vector2} _vector
	 * @returns {Vector2}
	 */
	Add(_vector: Vector2): Vector2 {
		if (_vector == null) { console.error("Error trying to add from a vector using a null Vector2"); return new Vector2(NaN,NaN); }	
		this.x += _vector.x;
		this.y += _vector.y;

		return this;
	}

	/**
	 * Subract two Vector2's values and return the result in a new Vector2
	 * @param  {Vector2} _vector
	 * @returns {Vector2}
	 */
	subtract(_vector: Vector2): Vector2 {
		if (_vector == null) { console.error("Error trying to subtract from a vector using a null Vector2"); return new Vector2(NaN,NaN); }	
		return new Vector2(this.x - _vector.x, this.y - _vector.y);	
	}

	/**
	 * Subract two Vector2's values and apply the values to this Vector2
	 * @param  {Vector2} _vector
	 * @returns {Vector2}
	 */
	Subtract(_vector: Vector2): Vector2 {
		if (_vector == null) { console.error("Error trying to subtract from a vector using a null Vector2"); return new Vector2(NaN,NaN); }	
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
		if (_scalar == null) { console.error("Error trying to calculate scaled vector using a null scaler"); _scalar = NaN }	
		return new Vector2(this.x * _scalar, this.y * _scalar);
	}

	/**
	 * Calcualte the scaled value of a Vector2 and apply the values to this Vector2
	 * @param  {number} _scalar
	 * @returns {Vector2}
	 */
	Scale(_scalar: number): Vector2 {
		if (_scalar == null) { console.error("Error trying to calculate vector using a null scaler"); _scalar = NaN }	
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
		if (_vector == null) { console.error("Error trying to calculate dot product using a null Vector2"); return new Vector2(NaN,NaN); }	
		return new Vector2(this.x * _vector.x, this.y * _vector.y);
	}

	/**
	 * Calcualte the dot product of two Vector2's and apply the values to this Vector2
	 * @param  {Vector2} _vector
	 * @returns {Vector2}
	 */
	Dot(_vector: Vector2): Vector2 {
		if (_vector == null) { console.error("Error trying to calculate dot product using a null Vector2"); _vector = new Vector2(NaN,NaN); }	
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
		if (_vector == null) { console.error("Error trying to calculate distance using a null Vector2"); return NaN; }	
		return Math.sqrt(this.distanceSqr(_vector));
	}

	/**
	 * Calculate the squared distance between two Vector2's
	 * @param  {Vector2} _vector
	 * @returns {number}
	 */
	distanceSqr(_vector: Vector2): number {
		if (_vector == null) { console.error("Error trying to calculate distance squared using a null Vector2"); return NaN; }		
		return Math.pow(this.x - _vector.x, 2) + Math.pow(this.y - _vector.y, 2);
	}
}