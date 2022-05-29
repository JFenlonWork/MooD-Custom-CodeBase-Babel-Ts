import { ScaledTime } from "@code/Timers/ScaledTime";

describe("ScaledTime", () => {

    it("Should create a new ScaledTime", () => {
        //  Arrange
        let s: ScaledTime = new ScaledTime(0, 0);

        //  Assert
        expect(s.threshold).toBe(0);
        expect(s.interval).toBe(0);
    });

    it("Should return toString()", () => {
        //  Arrange
        let s: ScaledTime = new ScaledTime(0, 0);

        //  Assert
        expect(s.toString()).toBe("ScaledTime");
    });

    it("Should return static toString()", () => {
        //  Assert
        expect(ScaledTime.toString()).toBe("ScaledTime");
    });

    it("Should return threshold", () => {
        //  Arrange
        let s: ScaledTime = new ScaledTime(0, 0);

        //  Assert
        expect(s.threshold).toBe(0);
    });

    it("Should set threshold", () => {
        //  Arrange
        let s: ScaledTime = new ScaledTime(0, 0);

        //  Act
        s.threshold = 1;

        //  Assert
        expect(s.threshold).toBe(1);
    });

    it("Should return interval", () => {
        //  Arrange
        let s: ScaledTime = new ScaledTime(0, 0);

        //  Assert
        expect(s.interval).toBe(0);
    });

    it("Should set interval", () => {
        //  Arrange
        let s: ScaledTime = new ScaledTime(0, 0);

        //  Act
        s.interval = 1;

        //  Assert
        expect(s.interval).toBe(1);
    });


});