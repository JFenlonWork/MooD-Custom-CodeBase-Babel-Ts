import { Vector2 } from "./Vector2";

/** Class representing all position based functions needed for math calculations.
 */
export class Positioning {

    /**
	 * Calculate viewport offset from document origin
	 * @returns {Vector2}
	 */
    static getPageViewportOffsetFromPage(): Vector2 {
        let body: HTMLElement = document.body;
        let docEl: HTMLElement = document.documentElement;

        return new Vector2((window.pageXOffset || docEl.scrollLeft || body.scrollLeft) - (docEl.clientLeft || body.clientLeft || 0),
                            (window.pageYOffset || docEl.scrollTop || body.scrollTop) - (docEl.clientTop || body.clientTop || 0));
    }

    /**
	 * Apply viewport offset to a vector
	 * @param  {Vector2} _vector
	 * @returns {Vector2}
	 */
    static applyPageViewportOffsetFromPage(_vector: Vector2) {
        _vector.Add(Positioning.getPageViewportOffsetFromPage());
    }

    /**
	 * Calculate coordinates of object
	 * @param  {HTMLElement} _object - The object to calculate the coordinates for
	 * @param  {HTMLElement | string} _relative - The object or "screen" to calculate the coordinates relative to
	 * @returns {Vector2}
	 */
    static getCoords(_object: HTMLElement, _relativeTo: Document | HTMLElement = document): Vector2 {
		if (_object == null) { console.error("Error trying to calculate coordinates with invalid object: ", _object); return new Vector2(NaN,NaN) }

        let ret = new Vector2(NaN,NaN);

        if (_relativeTo == null) {
            let box = _object.getBoundingClientRect();

            ret.x = box.left;
            ret.y = box.top;
        } else {
            if (_relativeTo === _object.offsetParent) {
                ret.x = _object.offsetLeft;
                ret.y = _object.offsetTop;
            } else {
                //Calculate position offset from viewport
                let box = _object.getBoundingClientRect();

                ret.x = box.left;
                ret.y = box.top;

                //if relative to exists then calculate offset from that
                if (_relativeTo !== document) {
                    let otherBox = (_relativeTo as HTMLElement).getBoundingClientRect();

                    ret.x -= otherBox.left;
                    ret.y -= otherBox.top;
                }

                this.applyPageViewportOffsetFromPage(ret);
            }
        }

        return ret;
    }

    /**
	 * Calculate sizes of computed style
	 * @param  {HTMLElement} _object - The object to calculate the size on
	 * @param  {string} _css - The CSS attribute 
	 * @returns {number}
	 */
    static translateCssSizes(_object: HTMLElement, _css: string, _computedStyle?: CSSStyleDeclaration): number {
        if (_object == null) { console.error("Error trying to calculate CSS sizing with invalid object: ", _object); return 0; }
        if (_css == null) { console.error("Error trying to calculate CSS sizing with invalid CSS string: ", _css); return 0; }

        let computedStyle: CSSStyleDeclaration = _computedStyle != null ? _computedStyle : window.getComputedStyle(_object);
        let key: keyof CSSStyleDeclaration = _css as keyof CSSStyleDeclaration;

        switch(computedStyle[key]) {
            case "thin":
                return 2;
            case "medium":
                return 4;
            case "thick":
                return 6;
            case "auto":
                return 0;
            case "inherit":
                if (_object.offsetParent != null) {
                    return this.translateCssSizes(_object.offsetParent as HTMLElement, _css, undefined);
                }
                return 0;
            default:
                if (computedStyle[key] == null) return 0;
                return parseInt(computedStyle[key] as string, 10);
        }
    }
}