import { Timer } from "@code/Timers/Timer";
import { TimerManager } from "@code/Timers/TimerManager";
import { TimerOffsetType } from "@code/Timers/TimerOffsetType";
import { random } from "@helpers/spec_helper";

let mainTimer: Timer;
let timerInterval: number = random(100);

describe("Timer", () => {

    beforeAll(() => {
        mainTimer = new Timer("Main Timer", timerInterval, undefined, true);
    });

    afterAll(() => {
        let timers: Timer[] = TimerManager.Instance.timers.valuesAsArray();
        for (let i = 0; i < timers.length; i++) {
            timers[i].destroy();
        }
    });

    it("Should be able to create a Timer", () => {
        //  Arrange
        const timer = new Timer("Test Constructor Timer", 0);
        const timer2 = new Timer("Test Constructor Timer 2", 0, undefined, true, Number.MAX_SAFE_INTEGER, TimerOffsetType.NoOffset);

        //  Assert
        expect(timer).toBeDefined();
        expect(timer2).toBeDefined();
    });

    it("Should be able to get the name", () => {
        //  Assert
        expect(mainTimer.name).toBe("Main Timer");
    });

    it("Should be able to get if a timer is running", () => {
        //  Assert
        expect(mainTimer.running).toBeDefined();
    });

    it("Should be able to return the timeout", () => {
        //  Assert
        expect(mainTimer.timeout).toBeDefined();
    });

    it("Should be able to get the ID", () => {
        //  Assert
        expect(mainTimer.timerID).toBeDefined();
    });

    it("Should be able to get the start time", () => {
        //  Assert
        expect(mainTimer.startTime).toBeDefined();
    });

    it("Should be able to get the timing interval", () => {
        //  Assert
        expect(mainTimer.timingInterval).toBe(timerInterval);
    });

    it("Should be able to get the current timing interval", () => {
        //  Assert
        expect(mainTimer.currentTimingInterval).toBeDefined();
    });

    it("Should be able to get the last tick time", () => {
        //  Assert
        expect(mainTimer.lastTickTime).toBeDefined();
    });

    it("Should be able to get the ticks remaining", () => {
        //  Assert
        expect(mainTimer.ticksRemaining).toBeDefined();
    });

    it("Should be able to get the ticks elapsed", () => {
        //  Assert
        expect(mainTimer.ticksElapsed).toBeDefined();
    });

    it("Should be able to get the paused at time", () => {
        //  Assert
        expect(mainTimer.pausedAt).toBeDefined();
    });

    it("Should be able to get the last completion time", () => {
        //  Assert
        expect(mainTimer.lastCompletion).toBeDefined();
    });

    it("Should be able to get the offset type", () => {
        //  Assert
        expect(mainTimer.offsetType).toBe(TimerOffsetType.NoOffset);
    });

    it("Should be able to get the PubSub instance", () => {
        //  Assert
        expect(mainTimer.events).toBeDefined();
    });

    it("Should be able to toString", () => {
        //  Arrange
        const timer = new Timer("Test Constructor Timer", 0);

        //  Assert
        expect(timer.toString()).toBe("Timer");
        expect(Timer.toString()).toBe("Timer");
    });

    it("Should start the timer", () => {
        //  Arrange
        if (mainTimer.running) mainTimer.stop();

        //  Act
        mainTimer.start();

        //  Assert
        expect(mainTimer.running).toBe(true);
    });

    it("Should stop the timer", () => {
        //  Arrange
        if (!mainTimer.running) mainTimer.start();

        //  Act
        mainTimer.stop();

        //  Assert
        expect(mainTimer.running).toBe(false);
    });

    it("Should pause the timer", () => {
        //  Arrange
        if (!mainTimer.running) mainTimer.start();

        //  Act
        mainTimer.pause();

        //  Assert
        expect(mainTimer.running).toBe(false);
    });

    it("Should resume the timer", () => {
        //  Arrange
        if (!mainTimer.running) mainTimer.start();
        if (mainTimer.running) mainTimer.pause();

        //  Act
        mainTimer.resume();

        //  Assert
        expect(mainTimer.running).toBe(true);

        //  Act
        mainTimer.pause();
        mainTimer.unpause();

        //  Assert
        expect(mainTimer.running).toBe(true);
    });

    it("Should restart the timer", () => {
        //  Act
        mainTimer.restart();

        //  Assert
        expect(mainTimer.running).toBe(true);
    });

    it("Should get if the timer is paused", () => {
        //  Arrange
        if (!mainTimer.running) mainTimer.start();

        //  Assert
        expect(mainTimer.isPaused()).toBe(false);
    });

    it("Should test if a timer completes a loop", (done) => {
        //  Arrange
        let timer = new Timer("Test Timer", timerInterval, function() {
            expect(true).toBe(true);
            timer.stop();
            done();
        }, true);
    });

});