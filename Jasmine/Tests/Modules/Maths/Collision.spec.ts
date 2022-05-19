import { random } from "../../Helpers/spec_helper";

import { Collision } from "@code/Maths/Collision";
import { Bounds } from "@code/Maths/Bounds";
import { Vector2 } from "@code/Maths/Vector2";

let x1 = 1 + random(100), y1 = 1 + random(100), x2 = x1 + 10 + random(100), y2 = y1 + 10 + random(100);
let areaBounds = new Bounds(x1, y1, x2, y2);
let insideBounds = new Bounds(x1 + 5, y1 + 5, x2 - 5, y2 - 5);
let outsideBounds = new Bounds(x1 - 5, y1 - 5, x2 + 5, y2 + 5);
let intersectBounds = new Bounds(x1 - 5, (y1 + y2) / 2 - 1, x1 + 5, (y1 + y2) / 2 + 1);

let insideObject = document.createElement("div");
insideObject.style.position = "absolute";
insideObject.style.left = insideBounds.x1 + "px";
insideObject.style.top = insideBounds.y1 + "px";
insideObject.style.width = insideBounds.x2 - insideBounds.x1 + "px";
insideObject.style.height = insideBounds.y2 - insideBounds.y1 + "px";

let outsideObject = document.createElement("div");
outsideObject.style.position = "absolute";
outsideObject.style.left = outsideBounds.x1 + "px";
outsideObject.style.top = outsideBounds.y1 + "px";
outsideObject.style.width = outsideBounds.x2 - outsideBounds.x1 + "px";
outsideObject.style.height = outsideBounds.y2 - outsideBounds.y1 + "px";

let intersectObject = document.createElement("div");
intersectObject.style.position = "absolute";
intersectObject.style.left = intersectBounds.x1 + "px";
intersectObject.style.top = intersectBounds.y1 + "px";
intersectObject.style.width = intersectBounds.x2 - intersectBounds.x1 + "px";
intersectObject.style.height = intersectBounds.y2 - intersectBounds.y1 + "px";

describe("Collision", () => {

    beforeAll(() => {
        document.body.appendChild(insideObject);
        document.body.appendChild(outsideObject);
        document.body.appendChild(intersectObject);
    });

    afterAll(() => {
        document.body.removeChild(insideObject);
        document.body.removeChild(outsideObject);
        document.body.removeChild(intersectObject);
    });

    it("Should test if a vector2 point is within a bounds", () => {
        //  act
        let result = Collision.checkPointWithinArea(areaBounds, new Vector2((x1 + x2) / 2, (y1 + y2) / 2));

        //  assert
        expect(result).toBe(true);
    });

    it("Should test if an area is within another area", () => {
        //  act
        let result = Collision.checkAreaWithinArea(areaBounds, insideBounds);
        let result2 = Collision.checkAreaWithinArea(insideBounds, areaBounds);

        //  assert
        expect(result).toBe(true);
        expect(result2).toBe(false);
    });

    it("Should test if an area is overlapping another area", () => {
        //  act
        let result = Collision.checkAreaOverlapArea(areaBounds, insideBounds);
        let result2 = Collision.checkAreaOverlapArea(areaBounds, outsideBounds);

        //  assert
        expect(result).toBe(false);
        expect(result2).toBe(true);
    });

    it("Should test if an area intersects another area", () => {
        //  act
        let result = Collision.checkAreaIntersectsArea(areaBounds, intersectBounds);
        let result2 = Collision.checkAreaIntersectsArea(areaBounds, outsideBounds);

        //  assert
        expect(result).toBe(true);
        expect(result2).toBe(true);
    });

    it("Should test if objects are within an area", () => {
        //  act
        let result = Collision.returnObjectsWithinArea(areaBounds, insideObject);
        let result2 = Collision.returnObjectsWithinArea(areaBounds, [insideObject, intersectObject]);
        let result3 = Collision.returnObjectsWithinArea(areaBounds, outsideObject);

        //  assert
        expect(result.length).toBe(1);
        expect(result2.length).toBe(1);
        expect(result3.length).toBe(0);
    });

    it("Should test if objects are overlapping an area", () => {
        //  act
        let result = Collision.returnObjectsOverlapArea(areaBounds, insideObject);
        let result2 = Collision.returnObjectsOverlapArea(areaBounds, [insideObject, intersectObject]);
        let result3 = Collision.returnObjectsOverlapArea(areaBounds, outsideObject);

        //  assert
        expect(result.length).toBe(0);
        expect(result2.length).toBe(0);
        expect(result3.length).toBe(1);
    });

    it("Should test if objects intersect an area", () => {
        //  act
        let result = Collision.returnObjectsIntersectArea(areaBounds, insideObject);
        let result2 = Collision.returnObjectsIntersectArea(areaBounds, [insideObject, outsideObject]);

        //  assert
        expect(result.length).toBe(1);
        expect(result2.length).toBe(2);
    });

});