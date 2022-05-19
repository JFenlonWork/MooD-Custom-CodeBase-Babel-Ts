import { random } from "../../Helpers/spec_helper";

import { Generic } from "@code/Maths/Generic";

let x = random(100);
let min = random(40);
let max = 20 + random(40);

describe("Generic", () => {

    it("Should test if a value is between two numbers", () => {
        //  assert
        expect(Generic.between(min, x, max)).toBe(x >= min - 0.001 && x <= max + 0.001);
    });

});