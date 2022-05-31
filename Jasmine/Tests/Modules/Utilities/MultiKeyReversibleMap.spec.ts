import { random } from "@helpers/spec_helper";

import { MultiKeyReversibleMap } from "@code/Utilities/MultiKeyReversibleMap";

let mapKeys: number[] = [];

describe("Multi-Key Reversible Map", () => {

    beforeEach(() => {
        mapKeys = [];
        for (let i = 0; i < random(10) + 2; i++) {
            mapKeys.push(i);
        }
    });

    it("Should create a multi-key reversible map", () => {
        //  Arrange
        let map = new MultiKeyReversibleMap<number, boolean>("number", "boolean", [[mapKeys, true]]);

        //  Assert
        expect(map.getValue(mapKeys[0])).toBe(true);
        expect(map.getKeys(true)).toBeDefined();
        expect(map.getKeysArray(true)).toEqual(mapKeys);
    });

    it("Should return toString", () => {
        //  Arrange
        let map = new MultiKeyReversibleMap<number, boolean>("number", "boolean");

        //  Assert
        expect(map.toString()).toBe("MultiKeyReversibleMap<number, boolean>");
        expect(MultiKeyReversibleMap.toString()).toBe("MultiKeyReversibleMap");
    });

    it("Should return the values as an iterator", () => {
        //  Arrange
        let map = new MultiKeyReversibleMap<number, boolean>("number", "boolean", [[mapKeys, true]]);

        //  Assert
        expect(map.values()).toBeDefined();
    });

    it("Should return the values as an array", () => {
        //  Arrange
        let map = new MultiKeyReversibleMap<number, boolean>("number", "boolean", [[mapKeys, true]]);

        //  Assert
        expect(map.valuesAsArray()).toBeDefined();
    });

    it("Should be able to get a value from a key", () => {
        //  Arrange
        let map = new MultiKeyReversibleMap<number, boolean>("number", "boolean", [[mapKeys, true]]);

        //  Assert
        expect(map.getValue(mapKeys[0])).toBe(true);
    });

    it("Should be able to check if a value exists", () => {
        //  Arrange
        let map = new MultiKeyReversibleMap<number, boolean>("number", "boolean", [[mapKeys, true]]);

        //  Assert
        expect(map.hasValue(true)).toBe(true);
    });

    it("Should return the keys as an iterator", () => {
        //  Arrange
        let map = new MultiKeyReversibleMap<number, boolean>("number", "boolean", [[mapKeys, true]]);

        //  Assert
        expect(map.keys()).toBeDefined();
    });

    it("Should return the keys as an array", () => {
        //  Arrange
        let map = new MultiKeyReversibleMap<number, boolean>("number", "boolean", [[mapKeys, true]]);

        //  Assert
        expect(map.keysAsArray()).toBeDefined();
    });

    it("Should be able to get a keys map for a value", () => {
        //  Arrange
        let map = new MultiKeyReversibleMap<number, boolean>("number", "boolean", [[mapKeys, true]]);

        let keys = new Map<Number, void>(mapKeys.map(key => [key, undefined]));

        //  Assert
        expect(map.getKeys(true)).toBeDefined();
        expect(map.getKeys(true)).toEqual(keys);
    });

    it("Should be able to get the keys for a value in array format", () => {
        //  Arrange
        let map = new MultiKeyReversibleMap<number, boolean>("number", "boolean", [[mapKeys, true]]);

        //  Assert
        expect(map.getKeys(true)).toBeDefined();
        expect(map.getKeysArray(true)).toEqual(mapKeys);
    });

    it("Should be able to check if a key exists", () => {
        //  Arrange
        let map = new MultiKeyReversibleMap<number, boolean>("number", "boolean", [[mapKeys, true]]);

        //  Assert
        expect(map.hasKey(mapKeys[0])).toBe(true);
    });

    it("Should be able to set a key/value pair", () => {
        //  Arrange
        let map = new MultiKeyReversibleMap<number, boolean>("number", "boolean", [[mapKeys, true]]);

        //  Act
        map.setKey(mapKeys[0], false);

        //  Assert
        expect(map.getValue(mapKeys[0])).toBe(false);
    });

    it("Should be able to set a key/value pair with multiple keys", () => {
        //  Arrange
        let map = new MultiKeyReversibleMap<number, boolean>("number", "boolean", [[mapKeys, true]]);

        //  Act
        map.setKeys([mapKeys[0], mapKeys[1]], false);

        //  Assert
        expect(map.getValue(mapKeys[0])).toBe(false);
        expect(map.getValue(mapKeys[1])).toBe(false);
    });

    it("Should be able to remap keys from one value to another", () => {
        //  Arrange
        let map = new MultiKeyReversibleMap<number, boolean>("number", "boolean", [[mapKeys, true]]);

        //  Act
        map.remapValue(true, false);

        //  Assert
        expect(map.getValue(mapKeys[0])).toBe(false);
    });

    it("Should be able to remap keys from one value to another using a key", () => {
        //  Arrange
        let map = new MultiKeyReversibleMap<number, boolean>("number", "boolean", [[mapKeys, true]]);

        //  Act
        map.remapValueFromKey(mapKeys[0], false);

        //  Assert
        expect(map.getValue(mapKeys[0])).toBe(false);
    });

    it("Should be able to remap a key to a new value", () => {
        //  Arrange
        let map = new MultiKeyReversibleMap<number, boolean>("number", "boolean", [[mapKeys, true]]);

        //  Act
        map.remapKey(mapKeys[0], false);

        //  Assert
        expect(map.getKeysArray(false)[0]).toBe(mapKeys[0]);
    });

    it("Should be able to delete a key", () => {
        //  Arrange
        let map = new MultiKeyReversibleMap<number, boolean>("number", "boolean", [[mapKeys, true]]);

        //  Act
        map.deleteKey(mapKeys[0]);

        //  Assert
        expect(map.hasKey(mapKeys[0])).toBe(false);
    });

    it("Should be able to delete multiple keys", () => {
        //  Arrange
        let map = new MultiKeyReversibleMap<number, boolean>("number", "boolean", [[mapKeys, true]]);

        //  Act
        map.deleteKeys([mapKeys[0], mapKeys[1]]);

        //  Assert
        expect(map.hasKey(mapKeys[0])).toBe(false);
        expect(map.hasKey(mapKeys[1])).toBe(false);
    });

    it("Should be able to delete a value", () => {
        //  Arrange
        let map = new MultiKeyReversibleMap<number, boolean>("number", "boolean", [[mapKeys, true]]);

        //  Act
        map.deleteValue(true);

        //  Assert
        expect(map.hasValue(true)).toBe(false);
    });

    it("Should be able to clear all key/value pairs", () => {
        //  Arrange
        let map = new MultiKeyReversibleMap<number, boolean>("number", "boolean", [[mapKeys, true]]);

        //  Act
        map.clear();

        //  Assert
        expect(map.hasValue(true)).toBe(false);
        expect(map.hasKey(mapKeys[0])).toBe(false);
    });

});