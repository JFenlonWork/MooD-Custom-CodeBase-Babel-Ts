import { Positioning } from "./Positioning";
import { Vector2 } from "./Vector2";
import { Vector4 } from "./Vector4";

/** Class representing a Bounds which hold two points and any extra variables from these points.
 */
 export class Bounds {

    private _x1: number = NaN;
	public get x1(): number {
		return this._x1;
	}

	public set x1(value: number) {
		if (typeof(value) != "number") { console.error("Error trying to set a Bounds's x1 value using an invalid input: ", value); value = NaN }	
		this._x1 = value;
        if (value > this.x2) {
			this.topRight.x = value;
			this.bottomRight.x = value;
			this.topLeft.x = this.x2;
			this.bottomLeft.x = this.x2;
		} else {
			this.topRight.x = this.x2;
			this.bottomRight.x = this.x2;
			this.topLeft.x = value;
			this.bottomLeft.x = value;
		}
		this.size.x = this.topRight.x - this.topLeft.x;
		this.size.y =  this.topRight.y - this.bottomRight.y;
	}

    private _y1: number = NaN;
	public get y1(): number {
		return this._y1;
	}
	
	public set y1(value: number) {
		if (typeof(value) != "number") { console.error("Error trying to set a Bounds's y1 value using an invalid input: ", value); value = NaN }	
		this._y1 = value;
        if (value > this.y2) {
			this.topLeft.y = value;
			this.topRight.y = value;
			this.bottomLeft.y = this.y2;
			this.bottomRight.y = this.y2;
		} else {
			this.topLeft.y = this.y2;
			this.topRight.y = this.y2;
			this.bottomLeft.y = value;
			this.bottomRight.y = value;
		}
		this.size.x = this.topRight.x - this.topLeft.x;
		this.size.y =  this.topRight.y - this.bottomRight.y;
	}

    private _x2: number = NaN;
	get x2(): number {
		return this._x2;
	}

	public set x2(value: number) {
		if (typeof(value) != "number") { console.error("Error trying to set a Bounds's x2 value using an invalid input: ", value); value = NaN }	
		this._x2 = value;
        if (value > this.x1) {
			this.topRight.x = value;
			this.bottomRight.x = value;
			this.topLeft.x = this.x1;
			this.bottomLeft.x = this.x1;
		} else {
			this.topRight.x = this.x1;
			this.bottomRight.x = this.x1;
			this.topLeft.x = value;
			this.bottomLeft.x = value;
		}
		this.size.x = this.topRight.x - this.topLeft.x;
		this.size.y =  this.topRight.y - this.bottomRight.y;
	}
	
    private _y2: number = NaN;
	public get y2(): number {
		return this._y2;
	}
	
	public set y2(value: number) {
		if (typeof(value) != "number") { console.error("Error trying to set a Bounds's y2 value using an invalid input: ", value); value = NaN }	
		this._y2 = value;
        if (value > this.y1) {
			this.topLeft.y = value;
			this.topRight.y = value;
			this.bottomLeft.y = this.y1;
			this.bottomRight.y = this.y1;
		} else {
			this.topLeft.y = this.y1;
			this.topRight.y = this.y1;
			this.bottomLeft.y = value;
			this.bottomRight.y = value;
		}
		this.size.x = this.topRight.x - this.topLeft.x;
		this.size.y =  this.topRight.y - this.bottomRight.y;
	}
	
	//** The minimum x and y point*/
    private _topLeft: Vector2 = Vector2.NaN();
	public get topLeft(): Vector2 {
		return this._topLeft;
	}

	private set topLeft(vector:Vector2) {
		this._topLeft = vector;
	}

	//** The maximum x and y point*/
    _topRight: Vector2 = Vector2.NaN();
	public get topRight(): Vector2 {
		return this._topRight;
	}

	private set topRight(vector:Vector2) {
		this._topRight = vector;
	}

	//** The maximum x and minimum y point*/
    _bottomRight: Vector2 = Vector2.NaN();
	public get bottomRight(): Vector2 {
		return this._bottomRight;
	}

	private set bottomRight(vector:Vector2) {
		this._bottomRight = vector;
	}

	//** The minimum x and y point*/
    _bottomLeft: Vector2 = Vector2.NaN();
	public get bottomLeft(): Vector2 {
		return this._bottomLeft;
	}

	private set bottomLeft(vector:Vector2) {
		this._bottomLeft = vector;
	}

	//** The total size of this Bound*/
    _size: Vector2 = Vector2.NaN();
	public get size(): Vector2 {
		return this._size;
	}

	private set size(vector:Vector2) {
		this._size = vector;
	}

    /**
	 * Create a Bounds
	 * @param  {number} x1 - The first point x value to set
	 * @param  {number} y1 - The first point y value to set
	 * @param  {number} x2 - The second point x value to set
	 * @param  {number} y2 - The second point y value to set
	 */
	public constructor(x1: number, y1: number, x2: number, y2: number) {
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
	}

	/**
	 * Set this Bounds's values to be the parameter's values and apply the values to this Bounds
	 * @param  {number} x1 - The x1 value to set
	 * @param  {number} y1 - The y1 value to set
	 * @param  {number} y2 - The x2 value to set
	 * @param  {number} y2 - The y2 value to set
	 * @returns {Bounds}
	 */
	 public set(x1: number, y1: number, x2: number, y2: number): Bounds {
		this.x1 = x1;
		this.y1 = y1;
		this.x2 = x2;
		this.y2 = y2;
		return this;
	}

	/**
	 * Create a Bounds filled with NaN
	 * @returns {Bounds}
	 */
	public static NaN(): Bounds {
		return new Bounds(NaN, NaN, NaN, NaN);
	}

	/**
	 * Create a Bounds filled with 0
	 * @returns {Bounds}
	 */
	public static Zero(): Bounds {
		return new Bounds(0, 0, 0, 0);
	}

    /**
	 * Returns if an object is the same as this Bound
	 * @param  {object} o
	 * @returns {boolean}
	 */
	public equals(o: object): boolean {
		if (!(o instanceof Bounds)) return false;
		return (this.x1 == o.x1 && this.y1 == o.y1 && this.x2 == o.x2 && this.y2 == o.y2);
	}

	/**
	 * Returns if this Bounds is all NaN
	 * @returns {boolean}
	 */
	public IsNaN(): boolean {
		return (isNaN(this.x1) && isNaN(this.y1) && isNaN(this.x2) && isNaN(this.y2));
	}

	/**
	 * Returns if this Bounds has a NaN value
	 * @returns {boolean}
	 */
    public HasNaN(): boolean {
		return (isNaN(this.x1) || isNaN(this.y1) || isNaN(this.x2) || isNaN(this.y2));
	}

	/**
	 * Returns if a bounds is all NaN
	 * @param  {object} o
	 * @returns {boolean}
	 */
	public static isNaN(o: object): boolean {
		if (!(o instanceof Bounds)) return false;
		return (isNaN(o.x1) && isNaN(o.y1) && isNaN(o.x2) && isNaN(o.y2));
	}

	/**
	 * Returns if a bounds has a NaN value
	 * @param  {object} o
	 * @returns {boolean}
	 */
    public static hasNaN(o: object): boolean {
		if (!(o instanceof Bounds)) return false;
		return (isNaN(o.x1) || isNaN(o.y1) || isNaN(o.x2) || isNaN(o.y2));
	}

    /**
	 * Returns a new Bounds with the same values as this Bounds
	 * @returns {Bounds}
	 */
    public clone() {
        return new Bounds(this.x1, this.y1, this.x2, this.y2);
    }

    /**
	 * Add two Bounds's values and return the result in a new Bounds
	 * @param  {Bounds} _bounds
	 * @returns {Bounds}
	 */
    public add(_bounds: Bounds): Bounds {
        if (!(_bounds instanceof Bounds)) { console.error("Error trying to add to a Bounds's values using an invalid Bound"); _bounds = new Bounds(NaN,NaN,NaN,NaN); }	
        return new Bounds(this.x1 + _bounds.x1, this.y1 + _bounds.y1, this.x2 + _bounds.x2, this.y2 + _bounds.y2);
    }

    /**
	 * Add two Bounds's values and apply the values to this Bounds
	 * @param  {Bounds} _bounds
	 * @returns {Bounds}
	 */
    public Add(_bounds: Bounds): Bounds {
        if (!(_bounds instanceof Bounds)) { console.error("Error trying to add to a Bounds's values using an invalid Bound: ", {_bounds}); _bounds = new Bounds(NaN,NaN,NaN,NaN); }	
		this.set(this.x1 + _bounds.x1, this.y1 + _bounds.y1, this.x2 + _bounds.x2, this.y2 + _bounds.y2);
        return this;
    }

    /**
	 * Subtract two Bounds's values and return the result in a new Bounds
	 * @param  {Bounds} _bounds
	 * @returns {Bounds}
	 */
    public subtract(_bounds: Bounds): Bounds {
        if (!(_bounds instanceof Bounds)) { console.error("Error trying to subtract from a Bounds's values using an invalid Bound: ", {_bounds}); _bounds = new Bounds(NaN,NaN,NaN,NaN); }	
        return new Bounds(this.x1 - _bounds.x1, this.y1 - _bounds.y1, this.x2 - _bounds.x2, this.y2 - _bounds.y2);
    }

    /**
	 * Subtract two Bounds's values and apply the values to this Bounds
	 * @param  {Bounds} _bounds
	 * @returns {Bounds}
	 */
    public Subtract(_bounds: Bounds): Bounds {
        if (!(_bounds instanceof Bounds)) { console.error("Error trying to subtract from a Bounds's values using an invalid Bound: ", {_bounds}); _bounds = new Bounds(NaN,NaN,NaN,NaN); }
		this.set(this.x1 - _bounds.x1, this.y1 - _bounds.y1, this.x2 - _bounds.x2, this.y2 - _bounds.y2);
        return this;
    }

    /**
	 * Calcualte the scaled value of a Bounds and return the result in a new Bounds
	 * @param  {number} _scalar
	 * @returns {Bounds}
	 */
	public scale(_scalar: number): Bounds {
		if (typeof(_scalar) != "number"  || isNaN(_scalar)) { console.error("Error trying to calculate scaled Bounds using an invalid scaler: ", {_scalar}); _scalar = NaN }	
		return new Bounds(this.x1 * _scalar, this.y1 * _scalar, this.x2 * _scalar, this.y2 * _scalar);
	}

	/**
	 * Calcualte the scaled value of a Bounds and apply the values to this Bounds
	 * @param  {number} _scalar
	 * @returns {Bounds}
	 */
	public Scale(_scalar: number): Bounds {
		if (typeof(_scalar) != "number" || isNaN(_scalar)) { console.error("Error trying to calculate scaled Bounds using an invalid scaler: ", {_scalar}); _scalar = NaN }	
		this.set(this.x1 * _scalar, this.y1 * _scalar, this.x2 * _scalar, this.y2 * _scalar);

		return this;
	}

	/**
	 * Calcualte the dot product of two Bounds's and return the result in a new Bounds
	 * @param  {Bounds} _bounds
	 * @returns {Bounds}
	 */
	public dot(_bounds: Bounds): Bounds {
		if (!(_bounds instanceof Bounds)) { console.error("Error trying to calculate dot product using an invalid Bounds: ", {_bounds}); return new Bounds(NaN,NaN,NaN,NaN); }	
		return new Bounds(this.x1 * _bounds.x1, this.y1 * _bounds.y1, this.x2 * _bounds.x2, this.y2 * _bounds.y2);
	}

	/**
	 * Calcualte the dot product of two Bounds's and apply the values to this Bounds
	 * @param  {Bounds} _vector
	 * @returns {Bounds}
	 */
	public Dot(_bounds: Bounds): Bounds {
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
    public static fromVector2s(_pos1: Vector2, _pos2: Vector2): Bounds {
        if (!(_pos1 instanceof Vector2)) { console.error("Error trying to generate bounds with invalid first Vector2: ", _pos1); _pos1 = new Vector2(NaN,NaN); }	
        if (!(_pos2 instanceof Vector2)) { console.error("Error trying to generate bounds with invalid second Vector2: ", _pos2); _pos2 = new Vector2(NaN,NaN); }	
        return new Bounds(_pos1.x, _pos1.y, _pos2.x, _pos2.y);
    }

    /**
	 * Create a bounds from a Vector4
	 * @param  {Vector4} _vector
	 * @returns {Bounds}
	 */
    public static fromVector4(_vector: Vector4): Bounds {
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
	public static fromObject(_object: HTMLElement | string, _relative: HTMLElement | Document = document, _includeChildren?: string[]): Bounds {
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