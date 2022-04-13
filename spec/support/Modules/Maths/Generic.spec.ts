import "jasmine";
import { random } from "../../helpers/spec helpers";
import { Generic } from "../../../../Code/src/Maths/Generic";

let x = random(100);

describe("Generic", () => {

    it("Should test if a value is between two numbers", () => {
        expect(Generic.between(-1, x, 101)).toBe(true);
    });

});