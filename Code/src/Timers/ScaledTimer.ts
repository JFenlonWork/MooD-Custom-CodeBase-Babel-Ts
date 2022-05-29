import { PubSub } from "../Events/PubSub";
import { ScaledTime } from "./ScaledTime";
import { Timer } from "./Timer";
import { TimerOffsetType } from "./TimerOffsetType";

/** A ScaledTimer that builds upon default Timer to change have
 *  variable interval times based on a pass/fail return value
 */
export class ScaledTimer extends Timer {

    //** Handles any custom events required by this ScaledTimer*/
    private _scaledEvents: PubSub = new PubSub();
    public override get events(): PubSub {
        return this._scaledEvents;
    }

    //** Counter for how many times this ScaledTimer's callbacks have returned false*/
    _failCount: number = 0;
    public get failCount(): number {
        return this._failCount;
    }

    public set failCount(failCount: number) {
        if (typeof(failCount) != "number") { console.warn("Trying to modify a ScaledTimer's failCount with an invalid input: ", failCount); return; }
        this._failCount = failCount;
    }

    //** Stores any data needed for determining the current ScaledTimer's timing interval*/
    _timeScalers: Array<ScaledTime> = [];
    public get timeScalers(): Array<ScaledTime> {
        return this._timeScalers;
    }

    private set timeScalers(timeScalers: Array<ScaledTime> | ScaledTime) {
        if (timeScalers == null) { console.warn("Trying to modify a ScaledTimer's timeScalers with an invalid input: ", timeScalers); return; }
        if (Array.isArray(timeScalers)) {
            this._timeScalers = timeScalers;
        } else {
            this._timeScalers = [timeScalers];
        }
    }

    /**
	 * Create a RealtimeTimer
	 * @param  {string} name - The name of the timer
	 * @param  {Array<ScaledTime>} timeScalers - An array of ScaledTimes that control this ScaledTimer's timing interval
	 * @param  {Array<Function>} callbacks - The callbacks listening to this timer
	 * @param  {boolean} startOnCreation - Determines if this timer should start running after creation
	 * @param  {number} timerRunTime - The total time for this timer to run 
	 * @param  {boolean} enableOffset - Determines if a timers loop should change based on browser time discrepancies
	 */
    constructor (name: string, timeScalers: Array<ScaledTime>, callbacks: Array<Function> = [], startOnCreation:boolean = true, timerRunTime:number = Number.MAX_SAFE_INTEGER, offsetType: TimerOffsetType = TimerOffsetType.NoOffset) {
        super(name, timeScalers[0].interval, [], startOnCreation, timerRunTime, offsetType)
        super.events.subscribe("loopCompletion", function(this: ScaledTimer) { this.events.publish("loopCompletion"); }.bind(this));
        this.events.subscribe("loopCompletion", callbacks);

        this.timeScalers = timeScalers;

        this.events.subscribe("response", function(this: ScaledTimer, ...args: any[]) { return this.listenToResponse.call(this, ...args) }.bind(this));
    }

	/**
	 * Returns the class type of this object
	 * @returns {string}
	 */
    public toString(): string {
		return "ScaledTimer";
	}

    /** 
     * Returns the type of this class
     */
    public static toString(): string {
        return "ScaledTimer";
    }


    /** Handles listening to responses from callbacks to see if this ScaledTimer
     *   should change it's timing interval
    */
    private listenToResponse(...args: any[]) {
        if (args.length != 2 || typeof(args[1]) != "boolean") { console.warn("Trying to respond to ScaledTimer with invalid parameters: ", args); return; }

        if (args[1] == false) {
           this.failCount++;
        } else if (args[1] == true) {
            this.failCount = 0;
        }

        let intervalChange = this.updateCurrentTimeScaler().interval;

        if (this.timingInterval < intervalChange) {
            this.timingInterval = intervalChange;
            this.restart();
        } else {
            this.timingInterval = intervalChange;
            this.pause();
            this.unpause();
        }
    }

    /** Handles finding the correct ScaledTime for the current fail rate
    */
    private updateCurrentTimeScaler(): ScaledTime {
        if (!Array.isArray(this.timeScalers) || this.timeScalers.length == 0) throw "Trying to find a new ScaledTime when none exist: " + this.toString();

        let ret: ScaledTime | null = null;
        for (const scalar of this.timeScalers) {
            if (scalar.threshold >= this.failCount) {
                return scalar;
            }
        }

        if (ret == null) ret = this.timeScalers[this.timeScalers.length - 1];
        return ret;
    }

}