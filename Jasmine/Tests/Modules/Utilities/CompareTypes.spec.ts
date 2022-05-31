import { CompareTypes } from "@code/Utilities/CompareTypes";

describe("CompareTypes", () => {

    it("Should return if two object have the same type", () => {

        //  Arrange
        let a = {};
        let b = {};

        //  Act
        let result = CompareTypes.same(a, b);

        //  Assert
        expect(result).toBe(true);

    });

    it("Should return if two object have different types", () => {

        //  Arrange
        let a = {};
        let b = "";

        //  Act
        let result = CompareTypes.different(a, b);
        let result2 = CompareTypes.different(a, a);

        //  Assert
        expect(result).toBe(true);
        expect(result2).toBe(false);

    });

    it("Should return the type of an object", () => {

        //  Arrange
        let a = {};

        //  Act
        let result = CompareTypes.type(a);

        //  Assert
        expect(result).toBe("Object");

    });

    it("Should return if an array has the same type as a parameter", () => {

        //  Arrange
        let a = 1;
        let b = [1, 2, 3];

        //  Act
        let result = CompareTypes.arraySame(a, b);
        let result2 = CompareTypes.arraySame("2", b);

        //  Assert
        expect(result).toBe(true);
        expect(result2).toBe(false);

    });

    it("Should return if an array has a different type as a parameter", () => {

        //  Arrange
        let a = "1";
        let b = [1, 2, 3];

        //  Act
        let result = CompareTypes.arrayDifferent(a, b);
        let result2 = CompareTypes.arrayDifferent(2, b);

        //  Assert
        expect(result).toBe(true);
        expect(result2).toBe(false);

    });

    it("Should return the unique types of an array", () => {

        //  Arrange
        let a = [1, 2, 3];
        let b = [1, "2", 3];

        //  Act
        let result = CompareTypes.arrayType(a);
        let result2 = CompareTypes.arrayType(b);

        //  Assert
        expect(result).toEqual(["Number"]);
        expect(result2).toEqual(["Number", "String"]);

    });

    it("Should return the unique types of an array as a Set", () => {

        //  Arrange
        let a = [1, 2, 3];
        let b = [1, "2", 3];

        //  Act
        let result = CompareTypes.arrayTypeSet(a);
        let result2 = CompareTypes.arrayTypeSet(b);

        //  Assert
        expect(result).toEqual(new Set(["Number"]));
        expect(result2).toEqual(new Set(["Number", "String"]));

    });

    it("Should return if all values in an array have the same type", () => {

        //  Arrange
        let a = [1, 2, 3];
        let b = [1, "2", 3];

        //  Act
        let result = CompareTypes.arrayValuesSame(a);
        let result2 = CompareTypes.arrayValuesSame(b);

        //  Assert
        expect(result).toBe(true);
        expect(result2).toBe(false);

    });

    it("Should return if any values in an array have a different type", () => {

        //  Arrange
        let a = [1, 2, "3"];
        let b = [1, 2, 3];

        //  Act
        let result = CompareTypes.arrayValuesDifferent(a);
        let result2 = CompareTypes.arrayValuesDifferent(b);

        //  Assert
        expect(result).toBe(true);
        expect(result2).toBe(false);

    });

    it("Should return if all values in an array have the same type as another array", () => {

        //  Arrange
        let a = [1, 2, 3];
        let b = [1, "2", 3];

        //  Act
        let result = CompareTypes.arrayTypesCompare(a, [1, 2, 3]);
        let result2 = CompareTypes.arrayTypesCompare(b, [1, 2, 3]);

        //  Assert
        expect(result).toBe(true);
        expect(result2).toBe(false);

    });

});