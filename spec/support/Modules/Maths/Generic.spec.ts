import { random } from "../../Helpers/spec_helper";

import { Generic } from "@code/Maths/Generic";

let x = random(100);

describe("Generic", () => {

    it("Should test if a value is between two numbers", () => {
        expect(Generic.between(-1, x, 101)).toBe(true);
    });

});