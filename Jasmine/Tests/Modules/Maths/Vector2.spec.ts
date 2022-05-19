import { random } from "../../Helpers/spec_helper";

import { Vector2 } from "@code/Maths/Vector2";

let x = random(100), y = random(100), x2 = random(100), y2 = random(100);

describe("Vector2", () => {
        
    beforeEach(() => {
        x = random(100), y = random(100), x2 = random(100), y2 = random(100);
    });

    it("Should be able to create a new vector", () => {
        // arrange
        var vector = new Vector2(x, y);

        // assert
        expect(vector.x).toBe(x);
        expect(vector.y).toBe(y);
    });

    it("Should be able to set the X value of a vector", () => {
        //  arrange
        var vector = new Vector2(x, y);

        //  act
        vector.x = x2;

        //  assert
        expect(vector.x).toBe(x2);
    });

    it("Should be able to get the X value of a vector", () => {
        //  arrange
        var vector = new Vector2(x, y);

        //  assert
        expect(vector.x).toBe(x);
    });

    it("Should be able to set the Y value of a vector", () => {
        //  arrange
        var vector = new Vector2(x, y);

        //  act
        vector.y = y2;

        //  assert
        expect(vector.y).toBe(y2);
    });

    it("Should be able to get the Y value of a vector", () => {
        //  arrange
        var vector = new Vector2(x, y);

        //  assert
        expect(vector.y).toBe(y);
    });

    it("Should be able to set the values of a vector", () => {
        //  arrange
        var vector = new Vector2(x, y);

        //  act
        vector.set(x2, y2);

        //  assert
        expect(vector.x).toBe(x2);
        expect(vector.y).toBe(y2);
    });

    it("Should be able to set the values of a vector from a vector2", () => {
        //  arrange
        var vector = new Vector2(x, y);

        //  act
        vector.setVector2(new Vector2(x2, y2));

        //  assert
        expect(vector.x).toBe(x2);
        expect(vector.y).toBe(y2);
    });

    it("Should be able to return a vector with NaN as values", () => {
        //  arrange
        var vector = Vector2.NaN();

        //  assert
        expect(vector.x).toBeNaN();
        expect(vector.y).toBeNaN();
    });

    it("Should be able to return a vector with 0 as values", () => {
        //  arrange
        var vector = Vector2.Zero();

        //  assert
        expect(vector.x).toBe(0);
        expect(vector.y).toBe(0);
    });

    it("Should be able to return a vector with 1 as values", () => {
        //  arrange
        var vector = Vector2.One();

        //  assert
        expect(vector.x).toBe(1);
        expect(vector.y).toBe(1);
    });

    it("Should be able to return if a vector equals another", () => {
        //  arrange
        var vector1 = Vector2.One();

        //  act
        var result = vector1.equals(Vector2.One());

        //  assert
        expect(result).toBe(true);
    });

    it("Should be able to return if a vector is only NaN values", () => {
        //  arrange
        var vector = new Vector2(NaN, NaN);

        //  act
        var result = vector.IsNaN();

        //  assert
        expect(result).toBe(true);
    });

    it("Should be able to return if a vector has any NaN values", () => {
        //  arrange
        var vector = new Vector2(x, NaN);

        //  act
        var result = vector.HasNaN();

        //  assert
        expect(result).toBe(true);
    });

    it("Should be able to return if a vector is only NaN values using static function", () => {
        //  arrange
        var vector = new Vector2(NaN, NaN);

        //  act
        var result = Vector2.isNaN(vector);

        //  assert
        expect(result).toBe(true);
    });

    it("Should be able to return if a vector has any NaN values using static function", () => {
        //  arrange
        var vector = new Vector2(x, NaN);

        //  act
        var result = Vector2.hasNaN(vector);

        //  assert
        expect(result).toBe(true);
    });

    it("Should be able to return a clone of a vector", () => {
        //  arrange
        var vector = new Vector2(x, y);

        //  act
        var resultVec = vector.clone();

        //  assert
        expect(resultVec.x).toBe(x);
        expect(resultVec.y).toBe(y);
    });

    it("Should be able to add a vector onto another and return a new vector", () => {
        //  arrange
        var vector1 = new Vector2(x, y);
        var vector2 = new Vector2(x2, y2);

        //  act
        var resultVec = vector1.add(vector2);

        //  assert
        expect(resultVec.x).toBe(x + x2);
        expect(resultVec.y).toBe(y + y2);
    });

    it("Should be able to add a vector to another", () => {
        //  arrange
        var vector = new Vector2(x, y);

        //  act
        vector.Add(new Vector2(x2, y2));

        //  assert
        expect(vector.x).toBe(x + x2);
        expect(vector.y).toBe(y + y2);
    });

    it("Should be able to subtract a vector from another vector and return a new vector", () => {
        //  arrange
        var vector1 = new Vector2(x, y);
        var vector2 = new Vector2(x2, y2);

        //  act
        var resultVec = vector1.subtract(vector2);

        //  assert
        expect(resultVec.x).toBe(x - x2);
        expect(resultVec.y).toBe(y - y2);
    });

    it("Should be able to subtract a vector from another", () => {
        //  arrange
        var vector = new Vector2(x, y);

        //  act
        vector.Subtract(new Vector2(x2, y2));

        //  assert
        expect(vector.x).toBe(x - x2);
        expect(vector.y).toBe(y - y2);
    });

    it("Should be able to multiply a vector by a scalar and return a new vector", () => {
        //  arrange
        var vector = new Vector2(x, y);

        //  act
        var resultVec = vector.multiply(x2);

        //  assert
        expect(resultVec.x).toBe(x * x2);
        expect(resultVec.y).toBe(y * x2);
    });

    it("Should be able to multiply a vector by a scalar", () => {
        //  arrange
        var vector = new Vector2(x, y);

        //  act
        vector.Multiply(x2);

        //  assert
        expect(vector.x).toBe(x * x2);
        expect(vector.y).toBe(y * x2);
    });

    it("Should be able to calcualte the multiplied value of two vectors and return a new vector", () => {
        //  arrange
        var vector = new Vector2(x, y);

        //  act
        var resultVec = vector.multiplyVector(new Vector2(x2, y2));

        //  assert
        expect(resultVec.x).toBe(x * x2);
        expect(resultVec.y).toBe(y * y2);
    });

    it("Should be able to calcualte the multiplied value of two vectors and apply it to a vector", () => {
        //  arrange
        var vector = new Vector2(x, y);

        //  act
        vector.MultiplyVector(new Vector2(x2, y2));

        //  assert
        expect(vector.x).toBe(x * x2);
        expect(vector.y).toBe(y * y2);
    });

    it("Should be able to divide a vector by a scalar and return a new vector", () => {
        //  arrange
        var vector = new Vector2(x, y);

        //  act
        var resultVec = vector.divide(x2);

        //  assert
        expect(resultVec.x).toBe(x / x2);
        expect(resultVec.y).toBe(y / x2);
    });

    it("Should be able to divide a vector by a scalar", () => {
        //  arrange
        var vector = new Vector2(x, y);

        //  act
        vector.Divide(x2);

        //  assert
        expect(vector.x).toBe(x / x2);
        expect(vector.y).toBe(y / x2);
    });

    it("Should be able to calcualte the divided value of two vectors and return a new vector", () => {
        //  arrange
        var vector = new Vector2(x, y);

        //  act
        var resultVec = vector.divideVector(new Vector2(x2, y2));

        //  assert
        expect(resultVec.x).toBe(x / x2);
        expect(resultVec.y).toBe(y / y2);
    });

    it("Should be able to calcualte the divided value of two vectors and apply it to a vector", () => {
        //  arrange
        var vector = new Vector2(x, y);

        //  act
        vector.DivideVector(new Vector2(x2, y2));

        //  assert
        expect(vector.x).toBe(x / x2);
        expect(vector.y).toBe(y / y2);
    });


    it("Should be able to get the distance squared between two vectors", () => {
        //  arrange
        var vector1 = new Vector2(x, y);

        //  act
        var distance = vector1.distanceSqr(new Vector2(x2, y2));

        //  assert
        expect(distance).toBe(Math.pow(x - x2, 2) + Math.pow(y - y2, 2));
    });

    it("Should be able to get the distance between two vectors", () => {
        //  arrange
        var vector1 = new Vector2(x, y);

        //  act
        var distance = vector1.distance(new Vector2(x2, y2));

        //  assert
        expect(distance).toBe(Math.sqrt(Math.pow(x - x2, 2) + Math.pow(y - y2, 2)));
    });
});