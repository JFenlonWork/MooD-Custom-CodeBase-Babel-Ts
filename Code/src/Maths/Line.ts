import { Generic } from "./Generic";
import { Vector2 } from "./Vector2";
import { Vector4 } from "./Vector4";

/** Class representing a Line which hold two points.
 */
 export class Line {

	private _x1: number = 0;
	public get x1(): number {
		return this._x1;
	}

	public set x1(value: number) {
		if (typeof(value) != "number") { console.error("Error trying to set a Lines's x1 value using an invalid input: ", value); value = NaN }	
		this._x1 = value;
	}

    private _y1: number = 0;
	public get y1(): number {
		return this._y1;
	}
	
	public set y1(value: number) {
		if (typeof(value) != "number") { console.error("Error trying to set a Lines's y1 value using an invalid input: ", value); value = NaN }	
		this._y1 = value;
	}

    private _x2: number = 0;
	get x2(): number {
		return this._x2;
	}

	public set x2(value: number) {
		if (typeof(value) != "number") { console.error("Error trying to set a Lines's x2 value using an invalid input: ", value); value = NaN }	
		this._x2 = value;
	}
	
    private _y2: number = 0;
	public get y2(): number {
		return this._y2;
	}
	
	public set y2(value: number) {
		if (typeof(value) != "number") { console.error("Error trying to set a Lines's y2 value using an invalid input: ", value); value = NaN }	
		this._y2 = value;
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
	 * Set this Line's values to be the parameter's values and apply the values to this Line
	 * @param  {number} x1 - The x1 value to set
	 * @param  {number} y1 - The y1 value to set
	 * @param  {number} y2 - The x2 value to set
	 * @param  {number} y2 - The y2 value to set
	 * @returns {Line}
	 */
	public set(x1: number, y1: number, x2: number, y2: number): Line {
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
		return this;
	}

	/**
	 * Create a Line filled with NaN
	 * @returns {Line}
	 */
    public static NaN(): Line {
		return new Line(NaN, NaN, NaN, NaN);
	}

	/**
	 * Create a Line filled with 0
	 * @returns {Line}
	 */
	public static Zero(): Line {
		return new Line(0, 0, 0, 0);
	}

    /**
	 * Returns if an object is the same as this line
	 * @param  {object} o
	 * @returns {boolean}
	 */
    public equals(o: object): boolean {
		if (!(o instanceof Line)) return false;
		return (this.x1 == o.x1 && this.y1 == o.y1 && this.x2 == o.x2 && this.y2 == o.y2);
	}

	/**
	 * Returns the class type of this object
	 * @returns {string}
	 */
	public toString(): string {
		return "Line";
	}

    /** 
     * Returns the type of this class
     */
	public static toString(): string {
        return "Line";
    }

	/**
	 * Returns if this Line is all NaN
	 * @returns {boolean}
	 */
    public IsNaN(): boolean {
		return (isNaN(this.x1) && isNaN(this.y1) && isNaN(this.x2) && isNaN(this.y2));
	}

	/**
	 * Returns if this Line has a NaN value
	 * @returns {boolean}
	 */
    public HasNaN(): boolean {
		return (isNaN(this.x1) || isNaN(this.y1) || isNaN(this.x2) || isNaN(this.y2));
	}

	/**
	 * Returns if a line is all NaN
	 * @param  {object} o
	 * @returns {boolean}
	 */
	public static isNaN(o: object): boolean {
		if (!(o instanceof Line)) return false;
		return (isNaN(o.x1) && isNaN(o.y1) && isNaN(o.x2) && isNaN(o.y2));
	}

	/**
	 * Returns if a line has a NaN value
	 * @param  {object} o
	 * @returns {boolean}
	 */
    public static hasNaN(o: object): boolean {
		if (!(o instanceof Line)) return false;
		return (isNaN(o.x1) || isNaN(o.y1) || isNaN(o.x2) || isNaN(o.y2));
	}

    /**
	 * Returns a new Line with the same values as this Line
	 * @returns {Line}
	 */
    public clone() {
        return new Line(this.x1, this.y1, this.x2, this.y2);
    }

    /**
	 * Create a Line from two Vector2s
	 * @param  {Vector2} _pos1
	 * @param  {Vector2} _pos2
	 * @returns {Line}
	 */
    public static fromVector2s(_pos1: Vector2, _pos2: Vector2): Line {
        if (!(_pos1 instanceof Vector2)) { console.error("Error trying to generate Line with invalid first Vector2: ", _pos1); _pos1 = new Vector2(NaN,NaN); }	
        if (!(_pos2 instanceof Vector2)) { console.error("Error trying to generate Line with invalid second Vector2: ", _pos2); _pos2 = new Vector2(NaN,NaN); }	
        return new Line(_pos1.x, _pos1.y, _pos2.x, _pos2.y);
    }

    /**
	 * Create a Line from a Vector4
	 * @param  {Vector4} _vector
	 * @returns {Line}
	 */
    public static fromVector4(_vector: Vector4): Line {
        if (!(_vector instanceof Vector4)) { console.error("Error trying to generate Line with invalid Vector4: ", _vector); _vector = new Vector4(NaN,NaN,NaN,NaN); }	
        return new Line(_vector.x, _vector.y, _vector.z, _vector.w);
    }

 	/**
	 * Calculate the distance the Line's two points
	 * @returns {number}
	 */
    public distance(): number {
		return Math.sqrt(this.distanceSqr());
	}

	/**
	 * Calculate the squared distance the Line's two points
	 * @returns {number}
	 */
	public distanceSqr(): number {
		return Math.pow(this.x1 - this.x2, 2) + Math.pow(this.y1 - this.y2, 2);
	}  
    
    /**
	 * Calculate the intersection point of two Lines
	 * @param  {Vector2} _line1
	 * @param  {Vector2} _line2
	 * @returns {vector2}
	 */
    public static lineIntersection(_line1: Line, _line2: Line): Vector2 {
        //Do line intersection calculation stuff? 
        //en.wikipedia.org/wiki/Line%E2%80%93line_intersection#Mathematics
        
        if (!(_line1 instanceof Line)) { console.error("Error trying to calculate line intersection with invalid Line1: ", _line1); return new Vector2(NaN,NaN); }	
        if (!(_line2 instanceof Line)) { console.error("Error trying to calculate line intersection with invalid Line2: ", _line2); return new Vector2(NaN,NaN); }

        let lineIntersect: Vector2 = new Vector2(NaN, NaN);

        let div = (_line1.x1 - _line1.x2) * (_line2.y1 - _line2.y2) -
                (_line1.y1 - _line1.y2) * (_line2.x1 - _line2.x2);

        lineIntersect.x = ((_line1.x1 * _line1.y2 - _line1.y1 * _line1.x2) * (_line2.x1 - _line2.x2) -
            (_line1.x1 - _line1.x2) * (_line2.x1 * _line2.y2 - _line2.y1 * _line2.x2));
        lineIntersect.x /= div;

        lineIntersect.y = ((_line1.x1 * _line1.y2 - _line1.y1 * _line1.x2) * (_line2.y1 - _line2.y2) -
            (_line1.y1 - _line1.y2) * (_line2.x1 * _line2.y2 - _line2.y1 * _line2.x2));
        lineIntersect.y /= div;

        if (lineIntersect.HasNaN()) return new Vector2(NaN, NaN);
        return lineIntersect;
    }
    
    /**
	 * Calculate the intersection point of two Lines if it is within the line
	 * @param  {Vector2} _line1
	 * @param  {Vector2} _line2
	 * @returns {vector2}
	 */
    public static lineIntersectionWithin(_line1: Line, _line2: Line): Vector2 {
        let intersection = this.lineIntersection(_line1, _line2);

        if (intersection.HasNaN()) return new Vector2(NaN, NaN);

        //check if line interception is within line 1 x
        if (_line1.x1 >= _line1.x2) {
            if (Generic.between(_line1.x2, intersection.x, _line1.x1)) return Vector2.NaN();
        } else {
            if (Generic.between(_line1.x1, intersection.x, _line1.x2)) return Vector2.NaN();
        }

        //check if line interception is within line 1 y
        if (_line1.y1 >= _line1.y2) {
            if (Generic.between(_line1.y2, intersection.y, _line1.y1)) return Vector2.NaN();
        } else {
            if (Generic.between(_line1.y1, intersection.y, _line1.y2)) return Vector2.NaN();
        }

        //check if line interception is within line 2 x
        if (_line2.x1 >= _line2.x2) {
            if (Generic.between(_line2.x2, intersection.x, _line2.x1)) return Vector2.NaN();
        } else {
            if (Generic.between(_line2.x1, intersection.x, _line2.x2)) return Vector2.NaN();
        }

        //check if line interception is within line 2 y
        if (_line2.y1 >= _line2.y2) {
            if (Generic.between(_line2.y2, intersection.y, _line2.y1)) return Vector2.NaN();
        } else {
            if (Generic.between(_line2.y1, intersection.y, _line2.y2)) return Vector2.NaN();
        }

        return intersection;

    }
}