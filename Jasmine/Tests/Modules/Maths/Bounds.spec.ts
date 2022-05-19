import { random } from "../../Helpers/spec_helper";

import { Bounds } from "@code/Maths/Bounds";
import { Vector2 } from "@code/Maths/Vector2";
import { Vector4 } from "@code/Maths/Vector4";


let x1 = random(100), y1 = random(100), x2 = random(100), y2 = random(100), x3 = random(100), y3 = random(100), x4 = random(100), y4 = random(100);

let objectX1 = 1 + random(100), objectY1 = 1 + random(100), objectX2 = objectX1 + 10 + random(100), objectY2 = objectY1 + 10 + random(100);
let domObject = document.createElement("div");
domObject.style.position = "absolute";
domObject.style.left = objectX1 + "px";
domObject.style.top = objectY1 + "px";
domObject.style.width = objectX2 - objectX1 + "px";
domObject.style.height = objectY2 - objectY1 + "px";

describe("Bounds", () => {

    beforeAll(() => {
        document.body.appendChild(domObject);
    });

    afterAll(() => {
        document.body.removeChild(domObject);
    });

    beforeEach(() => {
        x1 = random(100), y1 = random(100), x2 = random(100), y2 = random(100), x3 = random(100), y3 = random(100), x4 = random(100), y4 = random(100);
    });

    it("Should create a Bound", () => {
        //  arrange
        let bound = new Bounds(x1, y1, x2, y2);

        //  assert
        expect(bound.x1).toBe(x1);
        expect(bound.y1).toBe(y1);
        expect(bound.x2).toBe(x2);
        expect(bound.y2).toBe(y2);

        expect(bound.topLeft).toEqual(new Vector2(x1 < x2 ? x1 : x2, y1 > y2 ? y1 : y2));
        expect(bound.topRight).toEqual(new Vector2(x1 > x2 ? x1 : x2, y1 > y2 ? y1 : y2));
        
        expect(bound.bottomLeft).toEqual(new Vector2(x1 < x2 ? x1 : x2, y1 < y2 ? y1 : y2));
        expect(bound.bottomRight).toEqual(new Vector2(x1 > x2 ? x1 : x2, y1 < y2 ? y1 : y2));
        expect(bound.webFormat).toBe(false);
    });
    
    it("Should be able to return if a bound is in webFormat", () => {
        //  arrange
        let bound = new Bounds(x1, y1, x2, y2, true);

        //  assert
        expect(bound.webFormat).toBe(true);

        //  act
        bound.ConvertFromWeb();

        //  assert
        expect(bound.webFormat).toBe(false);
    });

    it("Should be able to get the X1 value of a bound", () => {
        //  arrange
        let bound = new Bounds(x1, y1, x2, y2);

        //  assert
        expect(bound.x1).toBe(x1);
    });

    it("Should be able to set the X1 value of a bound", () => {
        //  arrange
        let bound = new Bounds(x1, y1, x2, y2);

        //  act
        bound.x1 = x2;

        //  assert
        expect(bound.x1).toBe(x2);
    });

    it("Should be able to get the X2 value of a bound", () => {
        //  arrange
        let bound = new Bounds(x1, y1, x2, y2);

        //  assert
        expect(bound.x2).toBe(x2);
    });

    it("Should be able to set the X2 value of a bound", () => {
        //  arrange
        let bound = new Bounds(x1, y1, x2, y2);

        //  act
        bound.x2 = x1;

        //  assert
        expect(bound.x2).toBe(x1);
    });

    it("Should be able to get the Y1 value of a bound", () => {
        //  arrange
        let bound = new Bounds(x1, y1, x2, y2);
        
        //  assert
        expect(bound.y1).toBe(y1);
    });

    it("Should be able to set the Y1 value of a bound", () => {
        //  arrange
        let bound = new Bounds(x1, y1, x2, y2);

        //  act
        bound.y1 = y2;

        //  assert
        expect(bound.y1).toBe(y2);
    });

    it("Should be able to get the Y2 value of a bound", () => {
        //  arrange
        let bound = new Bounds(x1, y1, x2, y2);

        //  assert
        expect(bound.y2).toBe(y2);
    });

    it("Should be able to set the Y1 value of a bound", () => {
        //  arrange
        let bound = new Bounds(x1, y1, x2, y2);

        //  act
        bound.y2 = y1;

        //  assert
        expect(bound.y2).toBe(y1);
    });

    it("Should be able to return the top left of a bound", () => {
        //  arrange
        let bound = new Bounds(x1, y1, x2, y2);

        //  assert
        expect(bound.topLeft).toEqual(new Vector2(x1 < x2 ? x1 : x2, y1 > y2 ? y1 : y2));
    });

    it("Should be able to return the top right of a bound", () => {
        //  arrange
        let bound = new Bounds(x1, y1, x2, y2);

        //  assert
        expect(bound.topRight).toEqual(new Vector2(x1 > x2 ? x1 : x2, y1 > y2 ? y1 : y2));
    });

    it("Should be able to return the bottom left of a bound", () => {
        //  arrange
        let bound = new Bounds(x1, y1, x2, y2);

        //  assert
        expect(bound.bottomLeft).toEqual(new Vector2(x1 < x2 ? x1 : x2, y1 < y2 ? y1 : y2));
    });

    it("Should be able to return the bottom right of a bound", () => {
        //  arrange
        let bound = new Bounds(x1, y1, x2, y2);

        //  assert
        expect(bound.bottomRight).toEqual(new Vector2(x1 > x2 ? x1 : x2, y1 < y2 ? y1 : y2));
    });

    it("Should be able to set the coordinate values of a bound", () => {
        //  arrange
        let bound = new Bounds(x1, y1, x2, y2);

        //  act
        bound.set(x3, y3, x4, y4);

        //  assert
        expect(bound.x1).toBe(x3);
        expect(bound.y1).toBe(y3);
        expect(bound.x2).toBe(x4);
        expect(bound.y2).toBe(y4);

        expect(bound.topLeft).toEqual(new Vector2(x3 < x4 ? x3 : x4, y3 > y4 ? y3 : y4));
        expect(bound.topRight).toEqual(new Vector2(x3 > x4 ? x3 : x4, y3 > y4 ? y3 : y4));
        
        expect(bound.bottomLeft).toEqual(new Vector2(x3 < x4 ? x3 : x4, y3 < y4 ? y3 : y4));
        expect(bound.bottomRight).toEqual(new Vector2(x3 > x4 ? x3 : x4, y3 < y4 ? y3 : y4));
        expect(bound.webFormat).toBe(false);
    });

    it("Should be able to return a bound with all values as NaN", () => {
        //  arrange
        let bound = Bounds.NaN();

        //  assert
        expect(bound.x1).toBeNaN();
        expect(bound.y1).toBeNaN();
        expect(bound.x2).toBeNaN();
        expect(bound.y2).toBeNaN();
    });

    it("Should be able to return a bound with all values as 0", () => {
        //  arrange
        let bound = Bounds.Zero();

        //  assert
        expect(bound.x1).toBe(0);
        expect(bound.y1).toBe(0);
        expect(bound.x2).toBe(0);
        expect(bound.y2).toBe(0);
    });

    it("Should be able to check if a bound is equal to another", () => {
        //  arrange
        let bound = new Bounds(x1, y1, x2, y2);
        let bound2 = new Bounds(x1, y1, x2, y2);

        //  assert
        expect(bound.equals(bound2)).toBe(true);
    });

    it("Should be able to check if a bound has all NaN values", () => {
        //  arrange
        let bound = new Bounds(x1, y1, x2, NaN);

        //  assert
        expect(bound.IsNaN()).toBe(false);
    });

    it("Should be able to check if a bound has any NaN values", () => {
        //  arrange
        let bound = new Bounds(x1, y1, x2, NaN);

        //  assert
        expect(bound.HasNaN()).toBe(true);
    });

    it("Should be able to check if a bound has any NaN values using the static method hasNaN", () => {
        //  arrange
        let bound = new Bounds(x1, y1, x2, NaN);

        //  assert
        expect(Bounds.hasNaN(bound)).toBe(true);
    });
    
    it("Should be able to check if a bound has all NaN values using the static method isNaN", () => {
        //  arrange
        let bound = new Bounds(x1, y1, x2, NaN);

        //  assert
        expect(Bounds.isNaN(bound)).toBe(false);
    });

    it("Should be able to clone a bound", () => {
        //  arrange
        let bound = new Bounds(x1, y1, x2, y2);
        let bound2 = bound.clone();

        //  assert
        expect(bound.equals(bound2)).toBe(true);
    });

    it("Should be able to add two bounds together and return a new bound", () => {
        //  arrange
        let bound = new Bounds(x1, y1, x2, y2);
        let bound2 = new Bounds(x3, y3, x4, y4);
        let bound3 = new Bounds(x1 + x3, y1 + y3, x2 + x4, y2 + y4);

        //  act
        let result = bound.add(bound2);

        //  assert
        expect(result.equals(bound3)).toBe(true);
    });

    it("Should be able to add a bound's values onto another", () => {
        //  arrange
        let bound = new Bounds(x1, y1, x2, y2);
        let bound2 = new Bounds(x3, y3, x4, y4);
        let bound3 = new Bounds(x1 + x3, y1 + y3, x2 + x4, y2 + y4);

        //  act
        bound.Add(bound2);

        //  assert
        expect(bound.equals(bound3)).toBe(true);
    });

    it("Should be able to subtract two bounds and return a new bound", () => {
        //  arrange
        let bound = new Bounds(x1, y1, x2, y2);
        let bound2 = new Bounds(x3, y3, x4, y4);
        let bound3 = new Bounds(x1 - x3, y1 - y3, x2 - x4, y2 - y4);

        //  act
        let result = bound.subtract(bound2);

        //  assert
        expect(result.equals(bound3)).toBe(true);
    });

    it("Should be able to subtract a bound's values from another", () => {
        //  arrange
        let bound = new Bounds(x1, y1, x2, y2);
        let bound2 = new Bounds(x3, y3, x4, y4);
        let bound3 = new Bounds(x1 - x3, y1 - y3, x2 - x4, y2 - y4);

        //  act
        bound.Subtract(bound2);

        //  assert
        expect(bound.equals(bound3)).toBe(true);
    });

    it("Should be able to multiply a bound's values by a scalar and return a new bound", () => {
        //  arrange
        let bound = new Bounds(x1, y1, x2, y2);
        let bound2 = new Bounds(x1 * 2, y1 * 2, x2 * 2, y2 * 2);

        //  act
        let result = bound.scale(2);

        //  assert
        expect(result.equals(bound2)).toBe(true);
    });

    it("Should be able to multiply a bound's values by a scalar", () => {
        //  arrange
        let bound = new Bounds(x1, y1, x2, y2);
        let bound2 = new Bounds(x1 * 2, y1 * 2, x2 * 2, y2 * 2);

        //  act
        bound.Scale(2);

        //  assert
        expect(bound.equals(bound2)).toBe(true);
    });

    it("Should be able to create a bound from two Vector2s", () => {
        //  arrange
        let bound = Bounds.fromVector2s(new Vector2(x1, y1), new Vector2(x2, y2));
        let bound2 = new Bounds(x1, y1, x2, y2);

        //  assert
        expect(bound.equals(bound2)).toBe(true);
    });

    it("Should be able to create a bound from a Vector4", () => {
        //  arrange
        let bound = Bounds.fromVector4(new Vector4(x1, y1, x2, y2));
        let bound2 = new Bounds(x1, y1, x2, y2);

        //  assert
        expect(bound.equals(bound2)).toBe(true);
    });

    it("Should be able to flip a bound from origin bottom left to origin top left and return it as a new bound", () => {
        //  arrange
        let bound = new Bounds(x1, y1, x2, y2);
        let bound2 = new Bounds(x1, y1, x2, y2, true);

        //  act
        let bound3 = bound.convertToWeb();

        //  assert
        expect(bound3.equals(bound2)).toBe(true);
    });

    it("Should be able to flip a bound from origin bottom left to origin top left", () => {
        //  arrange
        let bound = new Bounds(x1, y1, x2, y2);
        let bound2 = new Bounds(x1, y1, x2, y2, true);

        //  act
        bound.ConvertToWeb();

        //  assert
        expect(bound.equals(bound2)).toBe(true);
    });

    it("Should be able to flip a bound from origin top left to origin bottom left and return it as a new bound", () => {
        //  arrange
        let bound = new Bounds(x1, y1, x2, y2);
        let bound2 = new Bounds(x1, y1, x2, y2, false);

        //  act
        let bound3 = bound.convertFromWeb();

        //  assert
        expect(bound3.equals(bound2)).toBe(true);
    });
    
    it("Should be able to flip a bound from origin top left to origin bottom left and return it as a new bound", () => {
        //  arrange
        let bound = new Bounds(x1, y1, x2, y2);
        let bound2 = new Bounds(x1, y1, x2, y2, false);

        //  act
        bound.ConvertFromWeb();

        //  assert
        expect(bound.equals(bound2)).toBe(true);
    });

    it("Should be able to create a bound from a DOM Object", () => {
        //  arrange
        let bound = Bounds.fromObject(domObject);
        let bound2 = new Bounds(objectX1, objectY1, objectX2, objectY2, true);

        //  assert
        expect(bound.equals(bound2)).toBe(true);
    });


});