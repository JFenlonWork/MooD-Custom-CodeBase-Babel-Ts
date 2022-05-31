import { TimerManager } from "@code/Timers/TimerManager";
import { Timer } from "@code/Timers/Timer";

describe("TimerManager", () => {

    //  Arrange
    let t: Timer;

    beforeEach(() => {
        t = new Timer("test", 0);
        TimerManager.Instance.timers.deleteValue(t);
    });

    afterEach(() => {
        t?.destroy();
    });

    afterAll(() => {
        let timers: Timer[] = TimerManager.Instance.timers.valuesAsArray();
        for (let i = 0; i < timers.length; i++) {
            timers[i].destroy();
        }
    });

    it("Should return manager singleton or create one if undefined", () => {
        //  Assert
        expect(TimerManager.Instance).toBeDefined();
    });

    it("Should return timer unique id", () => {
        //  Assert
        expect(TimerManager.Instance.uniqueID).toBeDefined();
    });

    it("Should return timer Multi-KeyReversibleMap", () => {
        //  Assert
        expect(TimerManager.Instance.timers.toString()).toBe("MultiKeyReversibleMap<string | number, Timer>");
    });

    it("Should return performance.now()", () => {
        //  Assert
        expect(TimerManager.Time()).toBeGreaterThan(0);
    });

    it("Should return a timer with a name parameter", () => {
        //  Assert
        expect(TimerManager.getTimer("test")).toBeUndefined();

        //  Act
        TimerManager.addTimer(t);

        //  Assert
        expect(TimerManager.getTimer("test")).toBeDefined();
    });

    it("Should return a timer with a id parameter", () => {
        //  Assert
        expect(TimerManager.getTimerFromID(t.timerID)).toBeUndefined();

        //  Act
        TimerManager.addTimer(t);

        //  Assert
        expect(TimerManager.getTimerFromID(t.timerID)).toBeDefined();
    });

    it("Should return if a timer already exists with a name", () => {
        //  Assert
        expect(TimerManager.testTimerNameIsValid("test")).toBe(true);

        //  Act
        TimerManager.addTimer(t);

        //  Assert
        expect(TimerManager.testTimerNameIsValid("test")).toBe(false);
    });

    it("Should add a timer to TimerManager's timers", () => {
        //  Assert
        expect(TimerManager.getTimer("test")).toBeUndefined();

        //  Act
        TimerManager.addTimer(t);

        //  Assert
        expect(TimerManager.getTimer("test")).toBeDefined();
    });

    it("Should remove a timer from TimerManager's timers", () => {
        //  Assert
        expect(TimerManager.getTimer("test")).toBeUndefined();

        //  Act
        TimerManager.addTimer(t);

        //  Assert
        expect(TimerManager.getTimer("test")).toBeDefined();

        //  Act
        TimerManager.removeTimer(t);

        //  Assert
        expect(TimerManager.getTimer("test")).toBeUndefined();
    });

    it("Should destroy a timer from TimerManager's timers", () => {
        //  Arrange
        let t2: Timer = new Timer("test2", 0);

        //  Assert
        expect(TimerManager.getTimer("test2")).toBeDefined();

        //  Act
        TimerManager.destroyTimer(t2);

        //  Assert
        expect(TimerManager.getTimer("test2")).toBeUndefined();
    });
    
});