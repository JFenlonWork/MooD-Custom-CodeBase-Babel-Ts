/** Class representing a Vector2 which hold two floats.
 */
export class Vector2 {

	private _x: number = NaN;
	public get x(): number {
		return this._x;
	}

	public set x(value: number) {
		if (typeof(value) != "number") { console.error("Error trying to set a Vector's x value using an invalid input: ", value); value = NaN }	
		this._x = value;
	}

    private _y: number = NaN;
	public get y(): number {
		return this._y;
	}
	
	public set y(value: number) {
		if (typeof(value) != "number") { console.error("Error trying to set a Vector's y value using an invalid input: ", value); value = NaN }	
		this._y = value;
	}

	/**
	 * Create a Vector2
	 * @param  {number} x - The x value to set
	 * @param  {number} y - The y value to set
	 */
	public constructor(x: number, y: number) {
		this.x = x;
		this.y = y;
	}

	/**
	 * Set this Vector2's x and y value to be the parameter's value and apply the values to this Vector2
	 * @param  {number} x - The x value to set
	 * @param  {number} y - The y value to set
	 * @returns {Vector2}
	 */
	public set(x: number, y: number): Vector2 {
		this.x = x;
		this.y = y;
		return this;
	}

	/**
	 * Create a Vector2 filled with NaN
	 * @returns {Vector2}
	 */
	public static NaN(): Vector2 {
		return new Vector2(NaN, NaN);
	}

	/**
	 * Create a Vector2 filled with 0
	 * @returns {Vector2}
	 */
	public static Zero(): Vector2 {
		return new Vector2(0, 0);
	}

	/**
	 * Create a Vector2 filled with 1
	 * @returns {Vector2}
	 */
	public static One(): Vector2 {
		return new Vector2(1, 1);
	}

	/**
	 * Returns if an object is the same as this Vector2
	 * @param  {object} o
	 * @returns {boolean}
	 */
	public equals(o: object): boolean {
		if (!(o instanceof Vector2)) return false;
		return (this.x == o.x && this.y == o.y);
	}

	/**
	 * Returns if this Vector2 is all NaN
	 * @returns {boolean}
	 */
	public IsNaN(): boolean {
		return (isNaN(this.x) && isNaN(this.y));
	}

	/**
	 * Returns if this Vector2 has a NaN value
	 * @returns {boolean}
	 */
    public HasNaN(): boolean {
		return (isNaN(this.x) || isNaN(this.y));
	}

	/**
	 * Returns if a Vector2 is all NaN
	 * @param  {object} o
	 * @returns {boolean}
	 */
	public static isNaN(o: object): boolean {
		if (!(o instanceof Vector2)) return false;
		return (isNaN(o.x) && isNaN(o.y));
	}

	/**
	 * Returns if a Vector2 has a NaN value
	 * @param  {object} o
	 * @returns {boolean}
	 */
    public  static hasNaN(o: object): boolean {
		if (!(o instanceof Vector2)) return false;
		return (isNaN(o.x) || isNaN(o.y));
	}

	/**
	 * Set this Vector2's values to be the parameter's values and apply the values to this Vector2
	 * @param  {Vector2} _vector
	 * @returns {Vector2}
	 */
	public setVector2(_vector: Vector2): Vector2 | null {
		if (!(_vector instanceof Vector2)) { console.error("Error trying to set a Vector2's values using an invalid Vector2: ", _vector); _vector = new Vector2(NaN,NaN); }	

		this.set(_vector.x, _vector.y);
		return this;
	}

	/**
	 * Returns a new Vector2 with the same values as this Vector2
	 * @returns {Vector2}
	 */
	public clone(): Vector2 {
		return new Vector2(this.x, this.y);
	}

	/**
	 * Add two Vector2's values and return the result in a new Vector2
	 * @param  {Vector2} _vector
	 * @returns {Vector2}
	 */
	public add(_vector: Vector2): Vector2 {
		if (!(_vector instanceof Vector2)) { console.error("Error trying to add from a vector using an invalid Vector2: ", _vector); return new Vector2(NaN,NaN); }	
		return new Vector2(this.x + _vector.x, this.y + _vector.y);	
	}

	/**
	 * Add two Vector2's values and apply the values to this Vector2
	 * @param  {Vector2} _vector
	 * @returns {Vector2}
	 */
	public Add(_vector: Vector2): Vector2 {
		if (!(_vector instanceof Vector2)) { console.error("Error trying to add from a vector using an invalid Vector2: ", _vector); return new Vector2(NaN,NaN); }	
		this.set(this.x + _vector.x, this.y + _vector.y);

		return this;
	}

	/**
	 * Subract two Vector2's values and return the result in a new Vector2
	 * @param  {Vector2} _vector
	 * @returns {Vector2}
	 */
	public subtract(_vector: Vector2): Vector2 {
		if (!(_vector instanceof Vector2)) { console.error("Error trying to subtract from a vector using an invalid Vector2: ", _vector); return new Vector2(NaN,NaN); }	
		return new Vector2(this.x - _vector.x, this.y - _vector.y);	
	}

	/**
	 * Subract two Vector2's values and apply the values to this Vector2
	 * @param  {Vector2} _vector
	 * @returns {Vector2}
	 */
	public Subtract(_vector: Vector2): Vector2 {
		if (!(_vector instanceof Vector2)) { console.error("Error trying to subtract from a vector using an invalid Vector2: ", _vector); return new Vector2(NaN,NaN); }
		this.set(this.x - _vector.x, this.y - _vector.y);	
		
		return this;
	}

	/**
	 * Calcualte the scaled value of a Vector2 and return the result in a new Vector2
	 * @param  {number} _scalar
	 * @returns {Vector2}
	 */
	public scale(_scalar: number): Vector2 {
		if (typeof(_scalar) != "number" || isNaN(_scalar)) { console.error("Error trying to calculate scaled vector using an invalid scaler: ", _scalar); _scalar = NaN }	
		return new Vector2(this.x * _scalar, this.y * _scalar);
	}

	/**
	 * Calcualte the scaled value of a Vector2 and apply the values to this Vector2
	 * @param  {number} _scalar
	 * @returns {Vector2}
	 */
	public Scale(_scalar: number): Vector2 {
		if (typeof(_scalar) != "number" || isNaN(_scalar)) { console.error("Error trying to calculate scaled vector using an invalid scaler: ", _scalar); _scalar = NaN }	
		this.set(this.x * _scalar, this.y * _scalar);

		return this;
	}

	/**
	 * Calcualte the dot product of two Vector2's and return the result in a new Vector2
	 * @param  {Vector2} _vector
	 * @returns {Vector2}
	 */
	public dot(_vector: Vector2): Vector2 {
		if (!(_vector instanceof Vector2)) { console.error("Error trying to calculate dot product using an invalid Vector2: ", _vector); return new Vector2(NaN,NaN); }	
		return new Vector2(this.x * _vector.x, this.y * _vector.y);
	}

	/**
	 * Calcualte the dot product of two Vector2's and apply the values to this Vector2
	 * @param  {Vector2} _vector
	 * @returns {Vector2}
	 */
	public Dot(_vector: Vector2): Vector2 {
		if (!(_vector instanceof Vector2)) { console.error("Error trying to calculate dot product using an invalid Vector2: ", _vector); _vector = new Vector2(NaN,NaN); }	
		this.set(this.x * _vector.x, this.y * _vector.y);

		return this;
	}

	/**
	 * Calculate the distance between two Vector2's
	 * @param  {Vector2} _vector
	 * @returns {number}
	 */
	public distance(_vector: Vector2): number {
		if (!(_vector instanceof Vector2)) { console.error("Error trying to calculate distance using an invalid Vector2: ", _vector); return NaN; }	
		return Math.sqrt(this.distanceSqr(_vector));
	}

	/**
	 * Calculate the squared distance between two Vector2's
	 * @param  {Vector2} _vector
	 * @returns {number}
	 */
	public distanceSqr(_vector: Vector2): number {
		if (!(_vector instanceof Vector2)) { console.error("Error trying to calculate distance squared using an invalid Vector2: ", _vector); return NaN; }		
		return Math.pow(this.x - _vector.x, 2) + Math.pow(this.y - _vector.y, 2);
	}
}