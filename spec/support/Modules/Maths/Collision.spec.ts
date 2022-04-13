import "jasmine";
import { random } from "../../helpers/spec helpers";

import { Collision } from "../../../../Code/src/Maths/Collision";
import { Bounds } from "../../../../Code/src/Maths/Bounds";
import { Vector2 } from "../../../../Code/src/Maths/Vector2";

let x1 = random(100), y1 = random(100), x2 = x1 + 10 + random(100), y2 = y1 + 10 + random(100);
let areaBounds = new Bounds(x1, y1, x2, y2);
let insideBounds = new Bounds(x1 + 5, y1 + 5, x2 - 5, y2 - 5);
let outsideBounds = new Bounds(x1 - 5, y1 - 5, x2 + 5, y2 + 5);
let intersectBounds = new Bounds(x1 - 5, (y1 + y2) / 2, x1 + 5, (y1 + y2) / 2);

let insideObject: HTMLElement = document.createElement("div");
insideObject.style.left = insideBounds.x1 + "px";
insideObject.style.top = insideBounds.y1 + "px";
insideObject.style.right = insideBounds.x2 + "px";
insideObject.style.bottom = insideBounds.y2 + "px";

let outsideObject: HTMLElement = document.createElement("div");
outsideObject.style.left = outsideBounds.x1 + "px";
outsideObject.style.top = outsideBounds.y1 + "px";
outsideObject.style.right = outsideBounds.x2 + "px";
outsideObject.style.bottom = outsideBounds.y2 + "px";

let intersectObject: HTMLElement = document.createElement("div");
outsideObject.style.left = outsideBounds.x1 + "px";
outsideObject.style.top = outsideBounds.y1 + "px";
outsideObject.style.right = outsideBounds.x2 + "px";
outsideObject.style.bottom = outsideBounds.y2 + "px";

describe("Collision", () => {

    it("Should test if a vector2 point is within a bounds", () => {
        //  act
        let result = Collision.checkPointWithinArea(areaBounds, new Vector2(50, 50));

        //  arrange
        expect(result).toBe(true);
    });

    it("Should test if an area is within another area", () => {
        //  act
        let result = Collision.checkAreaWithinArea(areaBounds, insideBounds);
        let result2 = Collision.checkAreaWithinArea(insideBounds, areaBounds);

        //  arrange
        expect(result).toBe(true);
        expect(result2).toBe(false);
    });

    it("Should test if an area is overlapping another area", () => {
        //  act
        let result = Collision.checkAreaOverlapArea(areaBounds, insideBounds);
        let result2 = Collision.checkAreaOverlapArea(areaBounds, outsideBounds);

        //  arrange
        expect(result).toBe(false);
        expect(result2).toBe(true);
    });

    it("Should test if an area intersects another area", () => {
        //  act
        let result = Collision.checkAreaIntersectsArea(areaBounds, intersectBounds);
        let result2 = Collision.checkAreaIntersectsArea(areaBounds, outsideBounds);

        //  arrange
        expect(result).toBe(true);
        expect(result2).toBe(true);
    });

    it("Should test if objects are within an area", () => {
        //  act
        let result = Collision.returnObjectsWithinArea(areaBounds, insideObject);
        let result2 = Collision.returnObjectsWithinArea(areaBounds, [insideObject, intersectObject]);
        let result3 = Collision.returnObjectsWithinArea(areaBounds, outsideObject);

        //  arrange
        expect(result.length).toBe(1);
        expect(result2.length).toBe(1);
        expect(result3.length).toBe(0);
    });

    it("Should test if objects are overlapping an area", () => {
        //  act
        let result = Collision.returnObjectsOverlapArea(areaBounds, insideObject);
        let result2 = Collision.returnObjectsOverlapArea(areaBounds, [insideObject, intersectObject]);
        let result3 = Collision.returnObjectsOverlapArea(areaBounds, outsideObject);

        //  arrange
        expect(result.length).toBe(0);
        expect(result2.length).toBe(0);
        expect(result3.length).toBe(1);
    });

    it("Should test if objects intersect an area", () => {
        //  act
        let result = Collision.returnObjectsIntersectArea(areaBounds, insideObject);
        let result2 = Collision.returnObjectsIntersectArea(areaBounds, [insideObject, outsideObject]);

        //  arrange
        expect(result.length).toBe(1);
        expect(result2.length).toBe(2);
    });

});