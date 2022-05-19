import { random } from "../../Helpers/spec_helper";

import { Vector2 } from "@code/Maths/Vector2";
import { Vector3 } from "@code/Maths/Vector3";
import { Vector4 } from "@code/Maths/Vector4";

let x = random(100), y = random(100), z = random(100), w = random(100), x2 = random(100), y2 = random(100), z2 = random(100), w2 = random(100);

describe("Vector4", () => {

    beforeEach(() => {
        x = random(100), y = random(100), z = random(100), w = random(100), x2 = random(100), y2 = random(100), z2 = random(100), w2 = random(100);
    });

    it("Should be able to create a new vector", () => {
        // arrange
        var vector = new Vector4(x, y, z, w);
        expect(vector.x).toBe(x);
        expect(vector.y).toBe(y);
        expect(vector.z).toBe(z);
        expect(vector.w).toBe(w);
    });

    it("Should be able to set the X value of a vector", () => {
        //  arrange
        var vector = new Vector4(x, y, z, w);

        //  act
        vector.x = x2;

        //  assert
        expect(vector.x).toBe(x2);
    });

    it("Should be able to get the X value of a vector", () => {
        //  arrange
        var vector = new Vector4(x, y, z, w);

        //  assert
        expect(vector.x).toBe(x);
    });

    it("Should be able to set the Y value of a vector", () => {
        //  arrange
        var vector = new Vector4(x, y, z, w);

        //  act
        vector.y = y2;

        //  assert
        expect(vector.y).toBe(y2);
    });

    it("Should be able to get the Y value of a vector", () => {
        //  arrange
        var vector = new Vector4(x, y, z, w);

        //  assert
        expect(vector.y).toBe(y);
    });

    it("Should be able to set the Z value of a vector", () => {
        //  arrange
        var vector = new Vector4(x, y, z, w);

        //  act
        vector.z = z2;

        //  assert
        expect(vector.z).toBe(z2);
    });

    it("Should be able to get the Z value of a vector", () => {
        //  arrange
        var vector = new Vector4(x, y, z, w);

        //  assert
        expect(vector.z).toBe(z);
    });

    it("Should be able to set the W value of a vector", () => {
        //  arrange
        var vector = new Vector4(x, y, z, w);

        //  act
        vector.w = w2;

        //  assert
        expect(vector.w).toBe(w2);
    });

    it("Should be able to get the W value of a vector", () => {
        //  arrange
        var vector = new Vector4(x, y, z, w);

        //  assert
        expect(vector.w).toBe(w);
    });

    it("Should be able to set the values of a vector", () => {
        //  arrange
        var vector = new Vector4(x, y, z, w);

        //  act
        vector.set(x2, y2, z2, w2);

        //  assert
        expect(vector.x).toBe(x2);
        expect(vector.y).toBe(y2);
        expect(vector.z).toBe(z2);
        expect(vector.w).toBe(w2);
    });

    it("Should be able to set the values of a vector from a vector2", () => {
        //  arrange
        var vector = new Vector4(x, y, z, w);

        //  act
        vector.setVector2(new Vector2(x2, y2));

        //  assert
        expect(vector.x).toBe(x2);
        expect(vector.y).toBe(y2);
    });

    it("Should be able to set the values of a vector from a vector3", () => {
        //  arrange
        var vector = new Vector4(x, y, z, w);

        //  act
        vector.setVector3(new Vector3(x2, y2, z2));

        //  assert
        expect(vector.x).toBe(x2);
        expect(vector.y).toBe(y2);
        expect(vector.z).toBe(z2);
    });

    it("Should be able to set the values of a vector from a vector4", () => {
        //  arrange
        var vector = new Vector4(x, y, z, w);

        //  act
        vector.setVector4(new Vector4(x2, y2, z2, w2));

        //  assert
        expect(vector.x).toBe(x2);
        expect(vector.y).toBe(y2);
        expect(vector.z).toBe(z2);
        expect(vector.w).toBe(w2);
    });

    it("Should be able to return a vector with NaN as values", () => {
        //  arrange
        var vector = Vector4.NaN();

        //  assert
        expect(vector.x).toBeNaN();
        expect(vector.y).toBeNaN();
        expect(vector.z).toBeNaN();
        expect(vector.w).toBeNaN();
    });

    it("Should be able to return a vector with 0 as values", () => {
        //  arrange
        var vector = Vector4.Zero();

        //  assert
        expect(vector.x).toBe(0);
        expect(vector.y).toBe(0);
        expect(vector.z).toBe(0);
        expect(vector.w).toBe(0);
    });

    it("Should be able to return a vector with 1 as values", () => {
        //  arrange
        var vector = Vector4.One();

        //  assert
        expect(vector.x).toBe(1);
        expect(vector.y).toBe(1);
        expect(vector.z).toBe(1);
        expect(vector.w).toBe(1);
    });

    it("Should be able to return if a vector equals another", () => {
        //  arrange
        var vector = Vector4.One();

        //  act
        var result = vector.equals(Vector4.One());

        //  arrange
        expect(result).toBe(true);
    });

    it("Should be able to return if a vector is only NaN values", () => {
        //  arrange
        var vector = new Vector4(NaN, NaN, NaN, NaN);

        //  act
        var result = vector.IsNaN();

        //  assert
        expect(result).toBe(true);
    });

    it("Should be able to return if a vector has any NaN values", () => {
        //  arrange
        var vector = new Vector4(x, NaN, z, w);

        //  act
        var result = vector.HasNaN();

        //  assert
        expect(result).toBe(true);
    });

    it("Should be able to return if a vector is only NaN values using static function", () => {
        //  arrange
        var vector = new Vector4(NaN, NaN, NaN, NaN);

        //  act
        var result = Vector4.isNaN(vector);

        //  assert
        expect(result).toBe(true);
    });

    it("Should be able to return if a vector has any NaN values using static function", () => {
        //  arrange
        var vector = new Vector4(x, NaN, z, w);

        //  act
        var result = Vector4.hasNaN(vector);

        //  assert
        expect(result).toBe(true);
    });

    it("Should be able to return a clone of a vector", () => {
        //  arrange
        var vector = new Vector4(x, y, z, w);

        //  act
        var resultVec = vector.clone();

        //  assert
        expect(resultVec.x).toBe(x);
        expect(resultVec.y).toBe(y);
        expect(resultVec.z).toBe(z);
        expect(resultVec.w).toBe(w);
    });

    it("Should be able to add a vector onto another and return a new vector", () => {
        //  arrange
        var vector = new Vector4(x, y, z, w);

        //  act
        var resultVec = vector.add(new Vector4(x2, y2, z2, w2));

        //  assert
        expect(resultVec.x).toBe(x + x2);
        expect(resultVec.y).toBe(y + y2);
        expect(resultVec.z).toBe(z + z2);
        expect(resultVec.w).toBe(w + w2);
    });

    it("Should be able to add a vector to another", () => {
        //  arrange
        var vector = new Vector4(x, y, z, w)

        //  act
        vector.Add(new Vector4(x2, y2, z2, w2));

        //  assert
        expect(vector.x).toBe(x + x2);
        expect(vector.y).toBe(y + y2);
        expect(vector.z).toBe(z + z2);
        expect(vector.w).toBe(w + w2);
    });

    it("Should be able to subtract a vector from another vector and return a new vector", () => {
        //  arrange
        var vector = new Vector4(x, y, z, w)

        //  act
        var resultVec = vector.subtract(new Vector4(x2, y2, z2, w2));

        //  assert
        expect(resultVec.x).toBe(x - x2);
        expect(resultVec.y).toBe(y - y2);
        expect(resultVec.z).toBe(z - z2);
        expect(resultVec.w).toBe(w - w2);
    });

    it("Should be able to subtract a vector from another", () => {
        //  arrange
        var vector = new Vector4(x, y, z, w);

        //  act
        vector.Subtract(new Vector4(x2, y2, z2, w2));

        //  assert
        expect(vector.x).toBe(x - x2);
        expect(vector.y).toBe(y - y2);
        expect(vector.z).toBe(z - z2);
        expect(vector.w).toBe(w - w2);
    });

    it("Should be able to multiply a vector by a scalar and return a new vector", () => {
        //  arrange
        var vector = new Vector4(x, y, z, w);

        //  act
        var resultVec = vector.multiply(x2);

        //  assert
        expect(resultVec.x).toBe(x * x2);
        expect(resultVec.y).toBe(y * x2);
        expect(resultVec.z).toBe(z * x2);
        expect(resultVec.w).toBe(w * x2);
    });

    it("Should be able to multiply a vector by a scalar", () => {
        //  arrange
        var vector = new Vector4(x, y, z, w);

        //  act
        vector.Multiply(x2);

        //  assert
        expect(vector.x).toBe(x * x2);
        expect(vector.y).toBe(y * x2);
        expect(vector.z).toBe(z * x2);
        expect(vector.w).toBe(w * x2);
    });

    it("Should be able to calcualte the multiplied value of two vectors and return a new vector", () => {
        //  arrange
        var vector = new Vector4(x, y, z, w);

        //  act
        var resultVec = vector.multiplyVector(new Vector4(x2, y2, z2, w2));

        //  assert
        expect(resultVec.x).toBe(x * x2);
        expect(resultVec.y).toBe(y * y2);
        expect(resultVec.z).toBe(z * z2);
        expect(resultVec.w).toBe(w * w2);
    });

    it("Should be able to calcualte the multiplied value of two vectors and apply it to a vector", () => {
        //  arrange
        var vector = new Vector4(x, y, z, w);

        //  act
        vector.MultiplyVector(new Vector4(x2, y2, z2, w2));

        //  assert
        expect(vector.x).toBe(x * x2);
        expect(vector.y).toBe(y * y2);
        expect(vector.z).toBe(z * z2);
        expect(vector.w).toBe(w * w2);
    });

    it("Should be able to divide a vector by a scalar and return a new vector", () => {
        //  arrange
        var vector = new Vector4(x, y, z, w);

        //  act
        var resultVec = vector.divide(x2);

        //  assert
        expect(resultVec.x).toBe(x / x2);
        expect(resultVec.y).toBe(y / x2);
        expect(resultVec.z).toBe(z / x2);
        expect(resultVec.w).toBe(w / x2);
    });

    it("Should be able to divide a vector by a scalar", () => {
        //  arrange
        var vector = new Vector4(x, y, z, w);

        //  act
        vector.Divide(x2);

        //  assert
        expect(vector.x).toBe(x / x2);
        expect(vector.y).toBe(y / x2);
        expect(vector.z).toBe(z / x2);
        expect(vector.w).toBe(w / x2);
    });

    it("Should be able to calcualte the divided value of two vectors and return a new vector", () => {
        //  arrange
        var vector = new Vector4(x, y, z, w);

        //  act
        var resultVec = vector.divideVector(new Vector4(x2, y2, z2, w2));

        //  assert
        expect(resultVec.x).toBe(x / x2);
        expect(resultVec.y).toBe(y / y2);
        expect(resultVec.z).toBe(z / z2);
        expect(resultVec.w).toBe(w / w2);
    });

    it("Should be able to calcualte the divided value of two vectors and apply it to a vector", () => {
        //  arrange
        var vector = new Vector4(x, y, z, w);

        //  act
        vector.DivideVector(new Vector4(x2, y2, z2, w2));

        //  assert
        expect(vector.x).toBe(x / x2);
        expect(vector.y).toBe(y / y2);
        expect(vector.z).toBe(z / z2);
        expect(vector.w).toBe(w / w2);
    });
});