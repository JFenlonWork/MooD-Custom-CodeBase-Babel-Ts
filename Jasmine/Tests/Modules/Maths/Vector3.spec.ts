import { random } from "../../Helpers/spec_helper";

import { Vector2 } from "@code/Maths/Vector2";
import { Vector3 } from "@code/Maths/Vector3";

let x = random(100), y = random(100), z = random(100), x2 = random(100), y2 = random(100), z2 = random(100);

describe("Vector3", () => {
    
    beforeEach(() => {
        x = random(100), y = random(100), z = random(100), x2 = random(100), y2 = random(100), z2 = random(100);
    });

    it("Should be able to create a new vector", () => {
        // arrange
        var vector = new Vector3(x, y, z);

        // assert
        expect(vector.x).toBe(x);
        expect(vector.y).toBe(y);
        expect(vector.z).toBe(z);
    });

    it("Should be able to set the Z value of a vector", () => {
        //  arrange
        var vector = new Vector3(x, y, z);

        //  act
        vector.z = z2;

        //  assert
        expect(vector.z).toBe(z2);
    });

    it("Should be able to get the Z value of a vector", () => {
        //  arrange
        var vector = new Vector3(x, y, z);

        //  assert
        expect(vector.z).toBe(z);
    });

    it("Should be able to set the values of a vector", () => {
        //  arrange
        var vector = new Vector3(x, y, z);

        //  act
        vector.set(x2, y2, z2);

        //  assert
        expect(vector.x).toBe(x2);
        expect(vector.y).toBe(y2);
        expect(vector.z).toBe(z2);
    });

    it("Should be able to set the values of a vector from a vector2", () => {
        //  arrange
        var vector = new Vector3(x, y, z);

        //  act
        vector.setVector2(new Vector2(x2, y2));

        //  assert
        expect(vector.x).toBe(x2);
        expect(vector.y).toBe(y2);
    });

    it("Should be able to set the values of a vector from a vector3", () => {
        //  arrange
        var vector = new Vector3(x, y, z);

        //  act
        vector.setVector3(new Vector3(x2, y2, z2));

        //  assert
        expect(vector.x).toBe(x2);
        expect(vector.y).toBe(y2);
        expect(vector.z).toBe(z2);
    });

    it("Should be able to return a vector with NaN as values", () => {
        //  arrange
        var vector = Vector3.NaN();

        //  assert
        expect(vector.x).toBeNaN();
        expect(vector.y).toBeNaN();
        expect(vector.z).toBeNaN();
    });

    it("Should be able to return a vector with 0 as values", () => {
        //  arrange
        var vector = Vector3.Zero();

        //  assert
        expect(vector.x).toBe(0);
        expect(vector.y).toBe(0);
        expect(vector.z).toBe(0);
    });

    it("Should be able to return a vector with 1 as values", () => {
        //  arrange
        var vector = Vector3.One();

        //  assert
        expect(vector.x).toBe(1);
        expect(vector.y).toBe(1);
        expect(vector.z).toBe(1);
    });

    it("Should be able to return if a vector equals another", () => {
        //  arrange
        var vector = Vector3.One();

        //  act
        var result = vector.equals(Vector3.One());

        //  assert
        expect(result).toBe(true);
    });

    it("Should be able to return if a vector is only NaN values", () => {
        //  arrange
        var vector = new Vector3(NaN, NaN, NaN);

        //  act
        var result = vector.IsNaN();

        //  assert
        expect(result).toBe(true);
    });

    it("Should be able to return if a vector has any NaN values", () => {
        //  arrange
        var vector = new Vector3(x, NaN, z);

        //  act
        var result = vector.HasNaN();

        //  assert
        expect(result).toBe(true);
    });

    it("Should be able to return if a vector is only NaN values using static function", () => {
        //  arrange
        var vector = new Vector3(NaN, NaN, NaN);

        //  act
        var result = Vector3.isNaN(vector);

        //  assert
        expect(result).toBe(true);
    });

    it("Should be able to return if a vector has any NaN values using static function", () => {
        //  arrange
        var vector = new Vector3(x, NaN, z);

        //  act
        var result = Vector3.hasNaN(vector);

        //  assert
        expect(result).toBe(true);
    });

    it("Should be able to return a clone of a vector", () => {
        //  arrange
        var vector = new Vector3(x, y, z);

        //  act
        var resultVec = vector.clone();

        //  assert
        expect(resultVec.x).toBe(x);
        expect(resultVec.y).toBe(y);
        expect(resultVec.z).toBe(z);
    });

    it("Should be able to add a vector onto another and return a new vector", () => {
        //  arrange
        var vector = new Vector3(x, y, z);

        //  act
        var resultVec = vector.add(new Vector3(x2, y2, z2));

        //  assert
        expect(resultVec.x).toBe(x + x2);
        expect(resultVec.y).toBe(y + y2);
        expect(resultVec.z).toBe(z + z2);
    });

    it("Should be able to add a vector to another", () => {
        //  arrange
        var vector = new Vector3(x, y, z)

        //  act
        vector.Add(new Vector3(x2, y2, z2));

        //  assert
        expect(vector.x).toBe(x + x2);
        expect(vector.y).toBe(y + y2);
        expect(vector.z).toBe(z + z2);
    });

    it("Should be able to subtract a vector from another vector and return a new vector", () => {
        //  arrange
        var vector = new Vector3(x, y, z)

        //  act
        var resultVec = vector.subtract(new Vector3(x2, y2, z2));

        //  assert
        expect(resultVec.x).toBe(x - x2);
        expect(resultVec.y).toBe(y - y2);
        expect(resultVec.z).toBe(z - z2);
    });

    it("Should be able to subtract a vector from another", () => {
        //  arrange
        var vector = new Vector3(x, y, z);

        //  act
        vector.Subtract(new Vector3(x2, y2, z2));

        //  assert
        expect(vector.x).toBe(x - x2);
        expect(vector.y).toBe(y - y2);
        expect(vector.z).toBe(z - z2);
    });

    it("Should be able to multiply a vector by a scalar and return a new vector", () => {
        //  arrange
        var vector = new Vector3(x, y, z);

        //  act
        var resultVec = vector.multiply(x2);

        //  assert
        expect(resultVec.x).toBe(x * x2);
        expect(resultVec.y).toBe(y * x2);
        expect(resultVec.z).toBe(z * x2);
    });

    it("Should be able to multiply a vector by a scalar", () => {
        //  arrange
        var vector = new Vector3(x, y, z);

        //  act
        vector.Multiply(x2);

        //  assert
        expect(vector.x).toBe(x * x2);
        expect(vector.y).toBe(y * x2);
        expect(vector.z).toBe(z * x2);
    });

    it("Should be able to calcualte the multiplied value of two vectors and return a new vector", () => {
        //  arrange
        var vector = new Vector3(x, y, z);

        //  act
        var resultVec = vector.multiplyVector(new Vector3(x2, y2, z2));

        //  assert
        expect(resultVec.x).toBe(x * x2);
        expect(resultVec.y).toBe(y * y2);
        expect(resultVec.z).toBe(z * z2);
    });

    it("Should be able to calcualte the multiplied value of two vectors and apply it to a vector", () => {
        //  arrange
        var vector = new Vector3(x, y, z);

        //  act
        vector.MultiplyVector(new Vector3(x2, y2, z2));

        //  assert
        expect(vector.x).toBe(x * x2);
        expect(vector.y).toBe(y * y2);
        expect(vector.z).toBe(z * z2);
    });

    it("Should be able to divide a vector by a scalar and return a new vector", () => {
        //  arrange
        var vector = new Vector3(x, y, z);

        //  act
        var resultVec = vector.divide(x2);

        //  assert
        expect(resultVec.x).toBe(x / x2);
        expect(resultVec.y).toBe(y / x2);
        expect(resultVec.z).toBe(z / x2);
    });

    it("Should be able to divide a vector by a scalar", () => {
        //  arrange
        var vector = new Vector3(x, y, z);

        //  act
        vector.Divide(x2);

        //  assert
        expect(vector.x).toBe(x / x2);
        expect(vector.y).toBe(y / x2);
        expect(vector.z).toBe(z / x2);
    });

    it("Should be able to calcualte the divided value of two vectors and return a new vector", () => {
        //  arrange
        var vector = new Vector3(x, y, z);

        //  act
        var resultVec = vector.divideVector(new Vector3(x2, y2, z2));

        //  assert
        expect(resultVec.x).toBe(x / x2);
        expect(resultVec.y).toBe(y / y2);
        expect(resultVec.z).toBe(z / z2);
    });

    it("Should be able to calcualte the divided value of two vectors and apply it to a vector", () => {
        //  arrange
        var vector = new Vector3(x, y, z);

        //  act
        vector.DivideVector(new Vector3(x2, y2, z2));

        //  assert
        expect(vector.x).toBe(x / x2);
        expect(vector.y).toBe(y / y2);
        expect(vector.z).toBe(z / z2);
    });


    it("Should be able to get the distance squared between two vectors", () => {
        //  arrange
        var vector = new Vector3(x, y, z);

        //  act
        var result = vector.distanceSqr(new Vector3(x2, y2, z2));

        //  assert
        expect(result).toBe(Math.pow(x - x2, 2) + Math.pow(y - y2, 2) + Math.pow(z - z2, 2));
    });

    it("Should be able to get the distance between two vectors", () => {
        //  arrange
        var vector = new Vector3(x, y, z);

        //  act
        var result = vector.distance(new Vector3(x2, y2, z2));

        //  assert
        expect(result).toBe(Math.sqrt(Math.pow(x - x2, 2) + Math.pow(y - y2, 2) + Math.pow(z - z2, 2)));
    });
});