import { Vector2 } from "./Vector2";
import { Vector4 } from "./Vector4";

/** Class representing a Bounds which hold two points and any.
 */
 export class Bounds {

    x1: number;
    y1: number;
    x2: number;
    y2: number;
    topLeft: Vector2;
    topRight: Vector2;
    bottomRight: Vector2;
    bottomLeft: Vector2;
    size: Vector2;

    /**
	 * Create a Bounds
	 * @param  {number} x1 - The first point x value to set
	 * @param  {number} y1 - The first point y value to set
	 * @param  {number} x2 - The second point x value to set
	 * @param  {number} y2 - The second point y value to set
	 */
	constructor(x1: number, y1: number, x2: number, y2: number) {
        this.x1 = NaN;
        this.y1 = NaN;
        this.x2 = NaN;
        this.y2 = NaN;

        this.topLeft = new Vector2(0, 0);
        this.topRight = new Vector2(0, 0);
        this.bottomRight = new Vector2(0, 0);
        this.bottomLeft = new Vector2(0, 0);
        this.size = new Vector2(0, 0);

		this.set(x1, y1, x2, y2);
	}

    /**
     * Updates any extra variables that are calculated from x1/y1/x2/y2
     */
    updateExtras() {        
        this.bottomRight.set(this.x1 < this.x2 ? this.x1 : this.x2,
                                this.y1 < this.y2 ? this.y1 : this.y2);

        this.bottomLeft.set(this.x1 > this.x2 ? this.x1 : this.x2,
                                this.y1 < this.y2 ? this.y1 : this.y2);
                        
        this.topRight.set(this.x1 > this.x2 ? this.x1 : this.x2,
                            this.y1 > this.y2 ? this.y1 : this.y2);

        this.topLeft.set(this.x1 < this.x2 ? this.x1 : this.x2,
                            this.y1 > this.y2 ? this.y1 : this.y2);

        this.size.set(this.topRight.x - this.topLeft.x, this.topRight.y - this.bottomRight.y);
    }

    /**
	 * Returns if an object is the same as this Bound
	 * @param  {object} o
	 * @returns {boolean}
	 */
	equals(o: object): boolean {
		if (!(o instanceof Bounds)) return false;
		return (this.x1 == o.x1 && this.y1 == o.y1 && this.x2 == o.x2 && this.y2 == o.y2);
	}

    /**
	 * Set this Bounds's x value to be the parameter's value and apply the values to this Bounds
	 * @param  {number} x1 - The x1 value to set
	 * @param  {number} y1 - The y1 value to set
	 * @param  {number} y2 - The x2 value to set
	 * @param  {number} y2 - The y2 value to set
	 * @returns {Bounds}
	 */
	set(x1: number, y1: number, x2: number, y2: number): Bounds {
		this.setX1(x1, false);
		this.setY1(y1, false);
		this.setX2(x2, false);
		this.setY2(y2);
		return this;
	}

    /**
	 * Set this Bounds's x1 value to be the parameter's value and apply the values to this Bounds
	 * @param  {number} x1
	 * @returns {Bounds}
	 */
	setX1(x1: number, updateExtras?: boolean): Bounds {
		if (typeof(x1) != "number" || isNaN(x1)) { console.error("Error trying to set a Bounds's x1 value using an invalid input: ", {x1}); x1 = NaN }	
		this.x1 = x1;
        if (updateExtras == null || updateExtras == true) this.updateExtras();
		return this;
	}

    /**
	 * Set this Bounds's y1 value to be the parameter's value and apply the values to this Bounds
	 * @param  {number} y1
	 * @returns {Bounds}
	 */
	setY1(y1: number, updateExtras?: boolean): Bounds {
		if (typeof(y1) != "number" || isNaN(y1)) { console.error("Error trying to set a Bounds's y1 value using an invalid input: ", {y1}); y1 = NaN }	
		this.y1 = y1;
        if (updateExtras == null || updateExtras == true) this.updateExtras();
		return this;
	}

    /**
	 * Set this Bounds's x2 value to be the parameter's value and apply the values to this Bounds
	 * @param  {number} x2
	 * @returns {Bounds}
	 */
     setX2(x2: number, updateExtras?: boolean): Bounds {
		if (typeof(x2) != "number" || isNaN(x2)) { console.error("Error trying to set a Bounds's x2 value using an invalid input: ", {x2}); x2 = NaN }	
		this.x2 = x2;
        if (updateExtras == null || updateExtras == true) this.updateExtras();
		return this;
	}

    /**
	 * Set this Bounds's y1 value to be the parameter's value and apply the values to this Bounds
	 * @param  {number} y2
	 * @returns {Bounds}
	 */
	setY2(y2: number, updateExtras?: boolean): Bounds {
		if (typeof(y2) != "number" || isNaN(y2)) { console.error("Error trying to set a Bounds's y2 value using an invalid input: ", {y2}); y2 = NaN }	
		this.y2 = y2;
        if (updateExtras == null || updateExtras == true) this.updateExtras();
		return this;
	}

    /**
	 * Returns a new Bounds with the same values as this Bounds
	 * @returns {Bounds}
	 */
    clone() {
        return new Bounds(this.x1, this.y1, this.x2, this.y2);
    }

    /**
	 * Add two Bounds's values and return the result in a new Bounds
	 * @param  {Bounds} _bounds
	 * @returns {Bounds}
	 */
    add(_bounds: Bounds): Bounds {
        if (!(_bounds instanceof Bounds)) { console.error("Error trying to add to a Bounds's values using an invalid Bound"); _bounds = new Bounds(NaN,NaN,NaN,NaN); }	
        return new Bounds(this.x1 + _bounds.x1, this.y1 + _bounds.y1, this.x2 + _bounds.x2, this.y2 + _bounds.y2);
    }

    /**
	 * Add two Bounds's values and apply the values to this Bounds
	 * @param  {Bounds} _bounds
	 * @returns {Bounds}
	 */
    Add(_bounds: Bounds): Bounds {
        if (!(_bounds instanceof Bounds)) { console.error("Error trying to add to a Bounds's values using an invalid Bound: ", {_bounds}); _bounds = new Bounds(NaN,NaN,NaN,NaN); }	
        this.setX1(this.x1 + _bounds.x1);
        this.setY1(this.y1 + _bounds.y1);
        this.setX2(this.x2 + _bounds.x2);
        this.setY2(this.y2 + _bounds.y2);
        return this;
    }

    /**
	 * Subtract two Bounds's values and return the result in a new Bounds
	 * @param  {Bounds} _bounds
	 * @returns {Bounds}
	 */
    subtract(_bounds: Bounds): Bounds {
        if (!(_bounds instanceof Bounds)) { console.error("Error trying to subtract from a Bounds's values using an invalid Bound: ", {_bounds}); _bounds = new Bounds(NaN,NaN,NaN,NaN); }	
        return new Bounds(this.x1 - _bounds.x1, this.y1 - _bounds.y1, this.x2 - _bounds.x2, this.y2 - _bounds.y2);
    }

    /**
	 * Subtract two Bounds's values and apply the values to this Bounds
	 * @param  {Bounds} _bounds
	 * @returns {Bounds}
	 */
    Subtract(_bounds: Bounds): Bounds {
        if (!(_bounds instanceof Bounds)) { console.error("Error trying to subtract from a Bounds's values using an invalid Bound: ", {_bounds}); _bounds = new Bounds(NaN,NaN,NaN,NaN); }	
        this.setX1(this.x1 - _bounds.x1, false);
        this.setY1(this.y1 - _bounds.y1, false);
        this.setX2(this.x2 - _bounds.x2, false);
        this.setY2(this.y2 - _bounds.y2);
        return this;
    }

    /**
	 * Calcualte the scaled value of a Bounds and return the result in a new Bounds
	 * @param  {number} _scalar
	 * @returns {Bounds}
	 */
	scale(_scalar: number): Bounds {
		if (typeof(_scalar) != "number"  || isNaN(_scalar)) { console.error("Error trying to calculate scaled Bounds using an invalid scaler: ", {_scalar}); _scalar = NaN }	
		return new Bounds(this.x1 * _scalar, this.y1 * _scalar, this.x2 * _scalar, this.y2 * _scalar);
	}

	/**
	 * Calcualte the scaled value of a Bounds and apply the values to this Bounds
	 * @param  {number} _scalar
	 * @returns {Bounds}
	 */
	Scale(_scalar: number): Bounds {
		if (typeof(_scalar) != "number" || isNaN(_scalar)) { console.error("Error trying to calculate scaled Bounds using an invalid scaler: ", {_scalar}); _scalar = NaN }	
		this.set(this.x1 * _scalar, this.y1 * _scalar, this.x2 * _scalar, this.y2 * _scalar);

		return this;
	}

	/**
	 * Calcualte the dot product of two Bounds's and return the result in a new Bounds
	 * @param  {Bounds} _bounds
	 * @returns {Bounds}
	 */
	dot(_bounds: Bounds): Bounds {
		if (!(_bounds instanceof Bounds)) { console.error("Error trying to calculate dot product using an invalid Bounds: ", {_bounds}); return new Bounds(NaN,NaN,NaN,NaN); }	
		return new Bounds(this.x1 * _bounds.x1, this.y1 * _bounds.y1, this.x2 * _bounds.x2, this.y2 * _bounds.y2);
	}

	/**
	 * Calcualte the dot product of two Bounds's and apply the values to this Bounds
	 * @param  {Bounds} _vector
	 * @returns {Bounds}
	 */
	Dot(_bounds: Bounds): Bounds {
		if (!(_bounds instanceof Bounds)) { console.error("Error trying to calculate dot product using an invalid Bounds", {_bounds}); _bounds = new Bounds(NaN,NaN,NaN,NaN); }	
		this.set(this.x1 * _bounds.x1, this.y1 * _bounds.y1, this.x2 * _bounds.x2, this.y2 * _bounds.y2);

		return this;
	}

    /**
	 * Create a bounds from two Vector2s
	 * @param  {Vector2} _pos1
	 * @param  {Vector2} _pos2
	 * @returns {Bounds}
	 */
    fromVector2s(_pos1: Vector2, _pos2: Vector2): Bounds {
        if (!(_pos1 instanceof Vector2)) { console.error("Error trying to generate bounds with invalid first Vector2: ", _pos1); _pos1 = new Vector2(NaN,NaN); }	
        if (!(_pos2 instanceof Vector2)) { console.error("Error trying to generate bounds with invalid second Vector2: ", _pos2); _pos2 = new Vector2(NaN,NaN); }	
        return new Bounds(_pos1.x, _pos1.y, _pos2.x, _pos2.y);
    }

    /**
	 * Create a bounds from a Vector4
	 * @param  {Vector4} _vector
	 * @returns {Bounds}
	 */
     fromVector4(_vector: Vector4): Bounds {
        if (!(_vector instanceof Vector4)) { console.error("Error trying to generate bounds with invalid Vector4: ", _vector); _vector = new Vector4(NaN,NaN,NaN,NaN); }	
        return new Bounds(_vector.x, _vector.y, _vector.z, _vector.w);
    }

    /**
	 * Create a bounds from a set of HTML DOMs
	 * @param  {object} _objects - An array of DOMs to use to create a Bounds
	 * @param  {boolean} _objects - An array of DOMs to use to create a Bounds
	 * @param  {object[]} _objects - An array of DOMs to use to create a Bounds
	 * @returns {Bounds | null}
	 */

 }