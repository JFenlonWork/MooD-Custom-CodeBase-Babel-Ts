import { Timer } from "@code/Timers/Timer";

describe("Timer", () => {

    it("Should be able to create a Timer", () => {
        const timer = new Timer("Test Timer", 0);
        expect(timer).toBeDefined();
    });

});