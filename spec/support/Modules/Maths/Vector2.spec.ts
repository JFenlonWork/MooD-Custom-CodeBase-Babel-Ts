import { random } from "../../Helpers/spec_helper";

import { Vector2 } from "@code/Maths/Vector2";

let x = random(100), y = random(100), x2 = random(100), y2 = random(100);

describe("Vector2", () => {
        
    beforeEach(() => {
        x = random(100), y = random(100), x2 = random(100), y2 = random(100);
    });

    it("should be able to create a new vector", () => {
        // arrange
        var vector = new Vector2(x, y);
        expect(vector.x).toBe(x);
        expect(vector.y).toBe(y);
    });

    it("should be able to set the X value of a vector", () => {
        //  arrange
        var vector = new Vector2(x, y);

        //  act
        vector.x = x2;

        //  arrange
        expect(vector.x).toBe(x2);
    });

    it("should be able to get the X value of a vector", () => {
        //  arrange
        var vector = new Vector2(x, y);
        expect(vector.x).toBe(x);
    });

    it("should be able to set the Y value of a vector", () => {
        //  arrange
        var vector = new Vector2(x, y);

        //  act
        vector.y = y2;

        //  arrange
        expect(vector.y).toBe(y2);
    });

    it("should be able to get the Y value of a vector", () => {
        //  arrange
        var vector = new Vector2(x, y);
        expect(vector.y).toBe(y);
    });

    it("should be able to set the values of a vector", () => {
        //  arrange
        var vector = new Vector2(x, y);

        //  act
        vector.set(x2, y2);

        //  arrange
        expect(vector.x).toBe(x2);
        expect(vector.y).toBe(y2);
    });

    it("should be able to set the values of a vector from a vector2", () => {
        //  arrange
        var vector = new Vector2(x, y);

        //  act
        vector.setVector2(new Vector2(x2, y2));

        //  arrange
        expect(vector.x).toBe(x2);
        expect(vector.y).toBe(y2);
    });

    it("should be able to return a vector with NaN as values", () => {
        //  arrange
        var vector = Vector2.NaN();

        //  arrange
        expect(vector.x).toBeNaN();
        expect(vector.y).toBeNaN();
    });

    it("should be able to return a vector with 0 as values", () => {
        //  arrange
        var vector = Vector2.Zero();

        //  arrange
        expect(vector.x).toBe(0);
        expect(vector.y).toBe(0);
    });

    it("should be able to return a vector with 1 as values", () => {
        //  arrange
        var vector = Vector2.One();

        //  arrange
        expect(vector.x).toBe(1);
        expect(vector.y).toBe(1);
    });

    it("should be able to return if a vector equals another", () => {
        //  arrange
        var vector1 = Vector2.One();

        var result = vector1.equals(Vector2.One());

        //  arrange
        expect(result).toBe(true);
    });

    it("should be able to return if a vector is only NaN values", () => {
        //  arrange
        var vector = new Vector2(NaN, NaN);

        //  act
        var result = vector.IsNaN();

        //  arrange
        expect(result).toBe(true);
    });

    it("should be able to return if a vector has any NaN values", () => {
        //  arrange
        var vector = new Vector2(x, NaN);

        //  act
        var result = vector.HasNaN();

        //  arrange
        expect(result).toBe(true);
    });

    it("should be able to return if a vector is only NaN values using static function", () => {
        //  arrange
        var vector = new Vector2(NaN, NaN);

        //  act
        var result = Vector2.isNaN(vector);

        //  arrange
        expect(result).toBe(true);
    });

    it("should be able to return if a vector has any NaN values using static function", () => {
        //  arrange
        var vector = new Vector2(x, NaN);

        //  act
        var result = Vector2.hasNaN(vector);

        //  arrange
        expect(result).toBe(true);
    });

    it("should be able to return a clone of a vector", () => {
        //  arrange
        var vector = new Vector2(x, y);

        //  act
        var resultVec = vector.clone();

        //  arrange
        expect(resultVec.x).toBe(x);
        expect(resultVec.y).toBe(y);
    });

    it("should be able to add a vector onto another and return a new vector", () => {
        //  arrange
        var vector1 = new Vector2(x, y);
        var vector2 = new Vector2(x2, y2);

        //  act
        var resultVec = vector1.add(vector2);

        //  arrange
        expect(resultVec.x).toBe(x + x2);
        expect(resultVec.y).toBe(y + y2);
    });

    it("should be able to add a vector to another", () => {
        //  arrange
        var vector = new Vector2(x, y);

        //  act
        vector.Add(new Vector2(x2, y2));

        //  arrange
        expect(vector.x).toBe(x + x2);
        expect(vector.y).toBe(y + y2);
    });

    it("should be able to subtract a vector from another vector and return a new vector", () => {
        //  arrange
        var vector1 = new Vector2(x, y);
        var vector2 = new Vector2(x2, y2);

        //  act
        var resultVec = vector1.subtract(vector2);

        //  arrange
        expect(resultVec.x).toBe(x - x2);
        expect(resultVec.y).toBe(y - y2);
    });

    it("should be able to subtract a vector from another", () => {
        //  arrange
        var vector = new Vector2(x, y);

        //  act
        vector.Subtract(new Vector2(x2, y2));

        //  arrange
        expect(vector.x).toBe(x - x2);
        expect(vector.y).toBe(y - y2);
    });

    it("should be able to multiply a vector by a scalar and return a new vector", () => {
        //  arrange
        var vector = new Vector2(x, y);

        //  act
        var resultVec = vector.multiply(x2);

        //  arrange
        expect(resultVec.x).toBe(x * x2);
        expect(resultVec.y).toBe(y * x2);
    });

    it("should be able to multiply a vector by a scalar", () => {
        //  arrange
        var vector = new Vector2(x, y);

        //  act
        vector.Multiply(x2);

        //  arrange
        expect(vector.x).toBe(x * x2);
        expect(vector.y).toBe(y * x2);
    });

    it("should be able to divide a vector by a scalar and return a new vector", () => {
        //  arrange
        var vector = new Vector2(x, y);

        //  act
        var resultVec = vector.divide(x2);

        //  arrange
        expect(resultVec.x).toBe(x / x2);
        expect(resultVec.y).toBe(y / x2);
    });

    it("should be able to divide a vector by a scalar", () => {
        //  arrange
        var vector = new Vector2(x, y);

        //  act
        vector.Divide(x2);

        //  arrange
        expect(vector.x).toBe(x / x2);
        expect(vector.y).toBe(y / x2);
    });

    it("should be able to calculate the dot product of two vectors and return a new vector", () => {
        //  arrange
        var vector = new Vector2(x, y);

        //  act
        var resultVec = vector.dot(new Vector2(x2, y2));

        //  arrange
        expect(resultVec.x).toBe(x * x2);
        expect(resultVec.y).toBe(y * y2);
    });

    it("should be able to calculate the dot product of two vectors and apply it to a vector", () => {
        //  arrange
        var vector = new Vector2(x, y);

        //  act
        vector.Dot(new Vector2(x2, y2));

        //  arrange
        expect(vector.x).toBe(x * x2);
        expect(vector.y).toBe(y * y2);
    });


    it("should be able to get the distance squared between two vectors", () => {
        //  arrange
        var vector1 = new Vector2(x, y);

        //  act
        var distance = vector1.distanceSqr(new Vector2(x2, y2));

        //  arrange
        expect(distance).toBe(Math.pow(x - x2, 2) + Math.pow(y - y2, 2));
    });

    it("should be able to get the distance between two vectors", () => {
        //  arrange
        var vector1 = new Vector2(x, y);

        //  act
        var distance = vector1.distance(new Vector2(x2, y2));

        //  arrange
        expect(distance).toBe(Math.sqrt(Math.pow(x - x2, 2) + Math.pow(y - y2, 2)));
    });
});