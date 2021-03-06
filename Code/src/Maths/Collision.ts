import { Bounds } from "./Bounds";
import { Line } from "./Line";
import { Vector2 } from "./Vector2";

/** Class representing all collision based functions needed for math calculations.
 */
 export class Collision {

    /**
	 * Calculate if a point is within an area bounds
	 * @param  {Bounds} areaBounds
	 * @param  {Vector2} point
	 * @returns {boolean}
	 */
    public static checkPointWithinArea(areaBounds: Bounds, point: Vector2): boolean {
        if (!(areaBounds instanceof Bounds) || areaBounds.HasNaN()) { console.error("Error trying to calculate if a point is within bounds with invalid area bounds: ", areaBounds); return false; }	
        if (!(point instanceof Vector2) || point.HasNaN()) { console.error("Error trying to calculate if a point is within bounds with invalid point: ", point); return false; }	
        if (areaBounds.webFormat) areaBounds = areaBounds.convertFromWeb();

        return (areaBounds.topLeft.x <= point.x &&
                areaBounds.topLeft.y >= point.y &&
                areaBounds.bottomRight.x >= point.x &&
                areaBounds.bottomRight.y <= point.y);
    }

    /**
	 * Calculate if otherBounds is within areaBounds
	 * @param  {Bounds} areaBounds
	 * @param  {Bounds} otherBounds
	 * @returns {boolean}
	 */
    public static checkAreaWithinArea(areaBounds: Bounds, otherBounds: Bounds): boolean {
        if (!(areaBounds instanceof Bounds) || areaBounds.HasNaN()) { console.error("Error trying to calculate if an area is within bounds with invalid area bounds: ", areaBounds); return false; }
        if (!(otherBounds instanceof Bounds) || otherBounds.HasNaN()) { console.error("Error trying to calculate if an area is within bounds with invalid other bounds: ", otherBounds); return false; }	
        if (areaBounds.webFormat) areaBounds = areaBounds.convertFromWeb();
        if (otherBounds.webFormat) otherBounds = otherBounds.convertFromWeb();

        return (this.checkPointWithinArea(areaBounds, otherBounds.topLeft) && 
                this.checkPointWithinArea(areaBounds, otherBounds.topRight) && 
                this.checkPointWithinArea(areaBounds, otherBounds.bottomRight) && 
                this.checkPointWithinArea(areaBounds, otherBounds.bottomLeft));
    }

    /**
	 * Calculate if otherBounds is overlapping areaBounds
	 * @param  {Bounds} areaBounds
	 * @param  {Bounds} otherBounds
	 * @returns {boolean}
	 */
    public static checkAreaOverlapArea(areaBounds: Bounds, otherBounds: Bounds): boolean {
        if (!(areaBounds instanceof Bounds) || areaBounds.HasNaN()) { console.error("Error trying to calculate if an area is within bounds with invalid area bounds: ", areaBounds); return false; }
        if (!(otherBounds instanceof Bounds) || otherBounds.HasNaN()) { console.error("Error trying to calculate if an area is within bounds with invalid other bounds: ", otherBounds); return false; }	
        if (areaBounds.webFormat) areaBounds = areaBounds.convertFromWeb();
        if (otherBounds.webFormat) otherBounds = otherBounds.convertFromWeb();

        return Collision.checkAreaWithinArea(otherBounds, areaBounds);
    }

    /**
	 * Calculate if otherBounds is intersects areaBounds
	 * @param  {Bounds} areaBounds
	 * @param  {Bounds} otherBounds
	 * @returns {boolean}
	 */    
    public static checkAreaIntersectsArea(areaBounds: Bounds, otherBounds: Bounds): boolean {
        if (!(areaBounds instanceof Bounds) || areaBounds.HasNaN()) { console.error("Error trying to calculate if an area is intersecting bounds with invalid area bounds: ", areaBounds); return false; }
        if (!(otherBounds instanceof Bounds) || otherBounds.HasNaN()) { console.error("Error trying to calculate if an area is intersecting bounds with invalid other bounds: ", otherBounds); return false; }	
        if (areaBounds.webFormat) areaBounds = areaBounds.convertFromWeb();
        if (otherBounds.webFormat) otherBounds = otherBounds.convertFromWeb();
        
        //Check if any otherBounds corners are within areaBounds
        if (this.checkPointWithinArea(areaBounds, otherBounds.topLeft) ||  
            this.checkPointWithinArea(areaBounds, otherBounds.topRight) ||  
            this.checkPointWithinArea(areaBounds, otherBounds.bottomRight) || 
            this.checkPointWithinArea(areaBounds, otherBounds.bottomLeft)) {
                return true;
        }

        //Check if any areaBounds corners are within otherBounds
        if (this.checkPointWithinArea(otherBounds, areaBounds.topLeft) ||  
            this.checkPointWithinArea(otherBounds, areaBounds.topRight) ||  
            this.checkPointWithinArea(otherBounds, areaBounds.bottomRight) || 
            this.checkPointWithinArea(otherBounds, areaBounds.bottomLeft)) {
                return true;
        }

        let linesToCheck: Line[] = 
        [
            Line.fromVector2s(otherBounds.topLeft, otherBounds.topRight),
            Line.fromVector2s(otherBounds.topRight, otherBounds.bottomRight),
            Line.fromVector2s(otherBounds.bottomRight, otherBounds.bottomLeft),
            Line.fromVector2s(otherBounds.bottomLeft, otherBounds.topLeft)
        ];

        let linesToCheckAgainst: Line[] = 
        [
            Line.fromVector2s(areaBounds.topLeft, areaBounds.topRight),
            Line.fromVector2s(areaBounds.topRight, areaBounds.bottomRight),
            Line.fromVector2s(areaBounds.bottomRight, areaBounds.bottomLeft),
            Line.fromVector2s(areaBounds.bottomLeft, areaBounds.topLeft)
        ];

        //do line intersect tests between every line
        linesToCheck.forEach(line1 => {
            linesToCheckAgainst.forEach(line2 => {
                if (Line.lineIntersectionWithin(line1, line2)) return true;
            });
        });

        return false;
    }

    /**
	 * Calculate if objects are within areaBounds
	 * @param  {Bounds} areaBounds
	 * @param  {HTMLElement | HTMLElement[]} objects
	 * @returns {object[]}
	 */
    public static returnObjectsWithinArea(areaBounds: Bounds, objects: HTMLElement | HTMLElement[]): object[] {
        if (!(areaBounds instanceof Bounds) || areaBounds.HasNaN()) { console.error("Error trying to calculate if objects are within bounds with invalid area bounds: ", areaBounds); return []; }
        if (!(objects instanceof HTMLElement || Array.isArray(objects))) { console.error("Error trying to calculate if objects are within bounds with invalid objects: ", objects); return []; }	
        if (areaBounds.webFormat) areaBounds = areaBounds.convertFromWeb();
        
        let ret: object[] = [];

        let objectsArray: HTMLElement[] = objects instanceof HTMLElement ? [objects] : objects;
        objectsArray.forEach(dom => {
            let otherBounds: Bounds = Bounds.fromObject(dom, document);

            if (this.checkAreaWithinArea(areaBounds, otherBounds)) {
                ret.push({
                    object: dom,
                    bounds: otherBounds
                });
            }
        });

        return ret;
    }

    /**
	 * Calculate if objects are overlapping areaBounds
	 * @param  {Bounds} areaBounds
	 * @param  {HTMLElement | HTMLElement[]} objects
	 * @returns {object[]}
	 */
    public static returnObjectsOverlapArea(areaBounds: Bounds, objects: HTMLElement | HTMLElement[]): object[] {
        if (!(areaBounds instanceof Bounds) || areaBounds.HasNaN()) { console.error("Error trying to calculate if objects are within bounds with invalid area bounds: ", areaBounds); return []; }
        if (!(objects instanceof HTMLElement || Array.isArray(objects))) { console.error("Error trying to calculate if objects are within bounds with invalid objects: ", objects); return []; }	
        if (areaBounds.webFormat) areaBounds = areaBounds.convertFromWeb();

        let ret: object[] = [];

        let objectsArray: HTMLElement[] = objects instanceof HTMLElement ? [objects] : objects;
        objectsArray.forEach(dom => {
            let otherBounds: Bounds = Bounds.fromObject(dom, document);

            if (this.checkAreaOverlapArea(areaBounds, otherBounds)) {
                ret.push({
                    object: dom,
                    bounds: otherBounds
                });
            }
        });

        return ret;
    }

    /**
	 * Calculate if objects are intersecting areaBounds
	 * @param  {Bounds} areaBounds
	 * @param  {HTMLElement | HTMLElement[]} objects
	 * @returns {object[]}
	 */
    public static returnObjectsIntersectArea(areaBounds: Bounds, objects: HTMLElement | HTMLElement[]): object[] {
        if (!(areaBounds instanceof Bounds) || areaBounds.HasNaN()) { console.error("Error trying to calculate if objects are within bounds with invalid area bounds: ", areaBounds); return []; }
        if (!(objects instanceof HTMLElement || Array.isArray(objects))) { console.error("Error trying to calculate if objects are within bounds with invalid objects: ", objects); return []; }	
        if (areaBounds.webFormat) areaBounds = areaBounds.convertFromWeb();
        
        let ret: object[] = [];

        let objectsArray: HTMLElement[] = objects instanceof HTMLElement ? [objects] : objects;
        objectsArray.forEach(dom => {
            let otherBounds: Bounds = Bounds.fromObject(dom, document);

            if (this.checkAreaIntersectsArea(areaBounds, otherBounds)) {
                ret.push({
                    object: dom,
                    bounds: otherBounds
                });
            }
        });

        return ret;
    }
 }