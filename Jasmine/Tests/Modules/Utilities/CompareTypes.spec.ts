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
    
        //  Assert
        expect(result).toBe(true);
    
    });

    it("Should return the type of an object", () => {
            
        //  Arrange
        let a = {};
    
        //  Act
        let result = CompareTypes.type(a);
    
        //  Assert
        expect(result).toBe("Object");
    
    });

});