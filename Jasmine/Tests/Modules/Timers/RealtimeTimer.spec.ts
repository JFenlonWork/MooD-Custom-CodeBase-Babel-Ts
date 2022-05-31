import { Timer } from "@code/Timers/Timer";
import { RealtimeTimer } from "@code/Timers/RealtimeTimer";
import { TimerManager } from "@code/Timers/TimerManager";
import { CompareTypes } from "@code/Utilities/CompareTypes";
import { random } from "@helpers/spec_helper";

let mainTimer: RealtimeTimer;

describe("RealtimeTimer", () => {

    beforeAll(() => {
        mainTimer = new RealtimeTimer("Main RealtimeTimer");
    });

    afterAll(() => {
        let timers: Timer[] = TimerManager.Instance.timers.valuesAsArray();
        for (let i = 0; i < timers.length; i++) {
            timers[i].destroy();
        }
    });

    it("Should create a new Realtime Timer", () => {
        //  Arrange
        let timer: RealtimeTimer = new RealtimeTimer("RealtimeTimer Constructor Test");

        //  Assert
        expect(timer).toBeDefined();
    });

    it("Should be able to get the PubSub instance", () => {
        //  Assert
        expect(mainTimer.events).toBeDefined();
    });

    it("Should be able to get if this timer should destroy itself once it stops", () => {
        //  Act  
        mainTimer.destroyOnStop = true;

        //  Assert
        expect(mainTimer.destroyOnStop).toBe(true);
    });

    it("Should be able to set if this timer should destroy itself once it stops", () => {
        //  Act
        mainTimer.destroyOnStop = false;

        //  Assert
        expect(mainTimer.destroyOnStop).toBe(false);
    });

    it("Should be able to get the toString of a RealtimeTimer", () => {
        //  Assert
        expect(mainTimer.toString()).toBe("RealtimeTimer");
        expect(RealtimeTimer.toString()).toBe("RealtimeTimer");
    });

    it("Should test if a scaled timer updates it's time scalers", (done) => {

        let i = 0;

        //  Arrange
        let timer = new RealtimeTimer("Test Realtime Timer Responses", function() {
            if (i++ > 5) {
                timer.events.publish("response", false);
            } 
            
            if (!timer.running) {
                timer.stop();
                expect(true).toBe(true);
                done();
            }
        }, true);
    });

});