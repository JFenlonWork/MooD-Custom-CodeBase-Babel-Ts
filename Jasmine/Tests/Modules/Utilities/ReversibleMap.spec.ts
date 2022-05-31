import { random } from "@helpers/spec_helper";

import { ReversibleMap } from "@code/Utilities/ReversibleMap";

let mapKey = random(100);

describe("Reversible Map", () => {

    beforeEach(() => {
        mapKey = random(100);
    });

    it("Should create a reversible map", () => {

        //  Arrange
        let map = new ReversibleMap<Number, String>("number", "string", [[mapKey, "value"]]);

        //  Assert
        expect(map.getValue(mapKey)).toBe("value");
        expect(map.getKey("value")).toBe(mapKey);

    });

    it("Should return the values as an iterator", () => {
        //  Arrange
        let map = new ReversibleMap<number, boolean>("number", "boolean", [[mapKey, true]]);

        //  Assert
        expect(map.values()).toBeDefined();
    });

    it("Should return the values as an array", () => {
        //  Arrange
        let map = new ReversibleMap<number, boolean>("number", "boolean", [[mapKey, true]]);

        //  Assert
        expect(map.valuesAsArray()).toBeDefined();
    });

    it("Should get a value from a key", () => {

        //  Arrange
        let map = new ReversibleMap<Number, String>("number", "string", [[mapKey, "value"]]);

        //  Assert
        expect(map.getValue(mapKey)).toBe("value");

    });

    it("Should return the keys", () => {
        //  Arrange
        let map = new ReversibleMap<number, boolean>("number", "boolean", [[mapKey, true]]);

        //  Assert
        expect(map.keys()).toBeDefined();
    });

    it("Should return the keys as an array", () => {
        //  Arrange
        let map = new ReversibleMap<number, boolean>("number", "boolean", [[mapKey, true]]);

        //  Assert
        expect(map.keysAsArray()).toBeDefined();
    });

    it("Should get a key from a value", () => {

        //  Arrange
        let map = new ReversibleMap<Number, String>("number", "string", [[mapKey, "value"]]);

        //  Assert
        expect(map.getKey("value")).toBe(mapKey);

    });

    it("Should test if a key exists", () => {

        //  Arrange
        let map = new ReversibleMap<Number, String>("number", "string", [[mapKey, "one"]]);

        //  Assert
        expect(map.hasKey(mapKey)).toBe(true);
        expect(map.hasKey(101)).toBe(false);

    });

    it("Should test if a value exists", () => {
            
        //  Arrange
        let map = new ReversibleMap<Number, String>("number", "string", [[mapKey, "one"]]);
    
        //  Assert
        expect(map.hasValue("one")).toBe(true);
        expect(map.hasValue("two")).toBe(false);
    
    });

    it("Should set a key and value", () => {

        //  Arrange
        let map = new ReversibleMap<Number, String>("number", "string");

        //  Act
        map.setKey(mapKey, "value");

        //  Assert
        expect(map.getValue(mapKey)).toBe("value");
        expect(map.getKey("value")).toBe(mapKey);

    });

    it("Should delete a key", () => {

        //  Arrange
        let map = new ReversibleMap<Number, String>("number", "string", [[mapKey, "value"]]);

        //  Act
        map.deleteKey(mapKey);

        //  Assert
        expect(map.getValue(mapKey)).toBe(undefined);
        expect(map.getKey("value")).toBe(undefined);

    });

    it("Should delete a value", () => {

        //  Arrange
        let map = new ReversibleMap<Number, String>("number", "string", [[mapKey, "value"]]);

        //  Act
        map.deleteValue("value");

        //  Assert
        expect(map.getValue(mapKey)).toBe(undefined);
        expect(map.getKey("value")).toBe(undefined);

    });

    it("Should clear the map", () => {
            
            //  Arrange
            let map = new ReversibleMap<Number, String>("number", "string", [[mapKey, "value"]]);
    
            //  Act
            map.clear();
    
            //  Assert
            expect(map.getValue(mapKey)).toBe(undefined);
            expect(map.getKey("value")).toBe(undefined);
    
    });

});