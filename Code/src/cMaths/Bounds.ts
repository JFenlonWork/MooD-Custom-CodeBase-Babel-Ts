import { Positioning } from "./Positioning";
import { Vector2 } from "./Vector2";
import { Vector4 } from "./Vector4";

/** Class representing a Bounds which hold two points and any extra variables from these points.
 */
 export class Bounds {

    x1: number;
    y1: number;
    x2: number;
    y2: number;

	//** The minimum x and y point*/
    topLeft: Vector2;

	//** The maximum x and y point*/
    topRight: Vector2;

	//** The maximum x and minimum y point*/
    bottomRight: Vector2;

	//** The minimum x and y point*/
    bottomLeft: Vector2;

	//** The total size of this Bound*/
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
	 * Create a Bounds filled with NaN
	 * @returns {Bounds}
	 */
	static NaN(): Bounds {
		return new Bounds(NaN, NaN, NaN, NaN);
	}

	/**
	 * Create a Bounds filled with 0
	 * @returns {Bounds}
	 */
	static Zero(): Bounds {
		return new Bounds(0, 0, 0, 0);
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
	 * Returns if this Bounds is all NaN
	 * @returns {boolean}
	 */
	isNaN(): boolean {
		return (this.x1 == NaN && this.y1 == NaN && this.x2 == NaN && this.y2 == NaN);
	}

	/**
	 * Returns if this Bounds has a NaN value
	 * @returns {boolean}
	 */
    hasNaN(): boolean {
		return (this.x1 == NaN || this.y1 ==  NaN || this.x2 ==  NaN || this.y2 ==  NaN);
	}

	/**
	 * Returns if a bounds is all NaN
	 * @param  {object} o
	 * @returns {boolean}
	 */
	static isNaN(o: object): boolean {
		if (!(o instanceof Bounds)) return false;
		return (o.x1 == NaN && o.y1 ==  NaN && o.x2 ==  NaN && o.y2 ==  NaN);
	}

	/**
	 * Returns if a bounds has a NaN value
	 * @param  {object} o
	 * @returns {boolean}
	 */
    static hasNaN(o: object): boolean {
		if (!(o instanceof Bounds)) return false;
		return (o.x1 == NaN || o.y1 ==  NaN || o.x2 ==  NaN || o.y2 ==  NaN);
	}

    /**
	 * Set this Bounds's values to be the parameter's values and apply the values to this Bounds
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
		if (typeof(x1) != "number") { console.error("Error trying to set a Bounds's x1 value using an invalid input: ", x1); x1 = NaN }	
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
		if (typeof(y1) != "number") { console.error("Error trying to set a Bounds's y1 value using an invalid input: ", y1); y1 = NaN }	
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
		if (typeof(x2) != "number") { console.error("Error trying to set a Bounds's x2 value using an invalid input: ", x2); x2 = NaN }	
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
		if (typeof(y2) != "number") { console.error("Error trying to set a Bounds's y2 value using an invalid input: ", y2); y2 = NaN }	
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
    static fromVector2s(_pos1: Vector2, _pos2: Vector2): Bounds {
        if (!(_pos1 instanceof Vector2)) { console.error("Error trying to generate bounds with invalid first Vector2: ", _pos1); _pos1 = new Vector2(NaN,NaN); }	
        if (!(_pos2 instanceof Vector2)) { console.error("Error trying to generate bounds with invalid second Vector2: ", _pos2); _pos2 = new Vector2(NaN,NaN); }	
        return new Bounds(_pos1.x, _pos1.y, _pos2.x, _pos2.y);
    }

    /**
	 * Create a bounds from a Vector4
	 * @param  {Vector4} _vector
	 * @returns {Bounds}
	 */
    static fromVector4(_vector: Vector4): Bounds {
        if (!(_vector instanceof Vector4)) { console.error("Error trying to generate bounds with invalid Vector4: ", _vector); _vector = new Vector4(NaN,NaN,NaN,NaN); }	
        return new Bounds(_vector.x, _vector.y, _vector.z, _vector.w);
    }

    /**
	 * Create a bounds from a set of HTML DOMs
	 * @param  {HTMLElement | string} _objects - A DOM or JQUERY string to use to create a Bounds
	 * @param  {HTMLElement} _relative - Determines if the Bounds should be created in relation to another object
	 * @param  {string[]} _includeChildren - An array of strings that are used to include children DOMs of the _objects
	 * @returns {Bounds | null}
	 */
	static fromObject(_object: HTMLElement | string, _relative: HTMLElement | Document = document, _includeChildren?: string[]): Bounds {
		if (_object == null) { console.error("Error trying to generate bounds fromObject with invalid object: ", _object); return new Bounds(NaN,NaN,NaN,NaN) }

		let _objectBounds = {
			left: NaN,
			top: NaN,
			right: NaN,
			bottom: NaN
		}

		let _objectJQuery: JQuery<HTMLElement> = $(_object);

		//Calculate bounds of object as long as it isn't hidden
		if (_objectJQuery.attr("type") !== "hidden" && _objectJQuery.attr("display") !== "hidden") {
			let dom: HTMLElement = _objectJQuery[0];
			let _position = Positioning.getCoords(dom, _relative);

			let _computedStyle = window.getComputedStyle(dom);
			let height = dom.clientHeight;

			height += Positioning.translateCssSizes(dom, "marginTop", _computedStyle);
			height += Positioning.translateCssSizes(dom, "marginBottom", _computedStyle);
			height += Positioning.translateCssSizes(dom, "borderTopWidth", _computedStyle);
			height += Positioning.translateCssSizes(dom, "borderBottomWidth", _computedStyle);

			let width = _objectJQuery[0].clientWidth;
			
			width += Positioning.translateCssSizes(dom, "marginLeft", _computedStyle);
			width += Positioning.translateCssSizes(dom, "marginRight", _computedStyle);
			width += Positioning.translateCssSizes(dom, "borderLeftWidth", _computedStyle);
			width += Positioning.translateCssSizes(dom, "borderRightWidth", _computedStyle);

			_objectBounds.left = _position.x;
			_objectBounds.top = _position.y;
			_objectBounds.right = _objectBounds.left + width;
			_objectBounds.bottom = _objectBounds.top + height;
		} else {
			console.error("Error trying to generate bounds fromObject with object as it is hidden: ", _object);
			return new Bounds(NaN,NaN,NaN,NaN);
		}

		//Calculate bounds of any children objects and apply them to
		// the current bounds if required
		if (_includeChildren != null && _includeChildren.length > 0) {
			_includeChildren.forEach(searchString => {
				let childrenJQuery: JQuery<HTMLElement> = $(searchString);

				childrenJQuery.each((index: number, childDOM: HTMLElement) => {
					let childBounds: Bounds = Bounds.fromObject(childDOM);

					if (!Bounds.isNaN(childBounds)) {
						if (childBounds.x1 < _objectBounds.left) _objectBounds.left = childBounds.x1;
						if (childBounds.y1 < _objectBounds.top) _objectBounds.top = childBounds.y1;
						if (childBounds.x2 > _objectBounds.right) _objectBounds.right = childBounds.x2;
						if (childBounds.y2 > _objectBounds.bottom) _objectBounds.bottom = childBounds.y2;
					}
				});
			});
		}

		return new Bounds(_objectBounds.left,_objectBounds.top,_objectBounds.right,_objectBounds.bottom);

	}

 }