import { ScaledTime } from "@code/Timers/ScaledTime";
import { ScaledTimer } from "@code/Timers/ScaledTimer";
import { Timer } from "@code/Timers/Timer";
import { TimerManager } from "@code/Timers/TimerManager";
import { CompareTypes } from "@code/Utilities/CompareTypes";
import { random } from "@helpers/spec_helper";

let mainTimer: ScaledTimer;
let scaledTimes: ScaledTime[] = [new ScaledTime(1, random(100)), new ScaledTime(2, random(100))];

describe("ScaledTimer", () => {

    beforeAll(() => {
        mainTimer = new ScaledTimer("Main ScaledTimer", scaledTimes);
    });

    afterAll(() => {
        let timers: Timer[] = TimerManager.Instance.timers.valuesAsArray();
        for (let i = 0; i < timers.length; i++) {
            timers[i].destroy();
        }
    });

    it("should be able to create a ScaledTimer", () => {
        const timer = new ScaledTimer("Test Constructor ScaledTimer", [new ScaledTime(0, 100)]);
        expect(timer).toBeDefined();
    });

    it("Should be able to get the PubSub instance", () => {
        //  Assert
        expect(mainTimer.events).toBeDefined();
    });

    it("Should be able to get the failCount", () => {
        //  Assert
        expect(mainTimer.failCount).toBeDefined();
    });

    it("Should be able to set the failCount", () => {
        //  Assert
        expect(mainTimer.failCount).toBeDefined();
    });   

    it("Should be able to get the time scalers of the scaled timer", () => {
        //  Assert
        expect(CompareTypes.arraySame(new ScaledTime(0, 0), mainTimer.timeScalers)).toBe(true);
    });

    it("Should be able to return toString", () => {
        //  Assert
        expect(mainTimer.toString()).toBe("ScaledTimer");
        expect(ScaledTimer.toString()).toBe("ScaledTimer");
    });

    it("Should test if a scaled timer completes a loop", (done) => {
        //  Arrange
        let timer = new ScaledTimer("Test Scaled Timer", [new ScaledTime(0, 100)], function() {
            expect(true).toBe(true);
            timer.stop();
            done();
        }, true);
    });

    it("Should test if a scaled timer updates it's time scalers", (done) => {
        //  Arrange
        let timer = new ScaledTimer("Test Scaled Timer Interval Change", scaledTimes, function() {
            if (timer.timingInterval != scaledTimes[scaledTimes.length - 1].interval) {
                timer.events.publish("response", false);
            } else {
                expect(true).toBe(true);
                timer.stop();
                done();
            }
        }, true);
    });

    
});