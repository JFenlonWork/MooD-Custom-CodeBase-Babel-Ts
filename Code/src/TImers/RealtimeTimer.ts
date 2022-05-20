import { PubSub } from "../Events/PubSub";
import { Timer } from "./Timer";
import { TimerSkipOffsetType } from "./TimerSkipOffsetType";

/** Class representing a Realtime Timer that implements
 *  custom controls ontop of setTimeout to create a timer that activates as fast as possible.
 */
 export class RealtimeTimer extends Timer {

    //** Handles any custom events required by this RealtimeTimer*/
    private _realtimeEvents: PubSub = new PubSub();
    public override get events(): PubSub {
        return this._realtimeEvents;
    }

    //** Handles if this Timer should destroy itself once it stops*/
    private _destroyOnStop: boolean = true;
    public get destroyOnStop(): boolean {
        return this._destroyOnStop;
    }

    public set destroyOnStop(destroyOnStop: boolean) {
        if (typeof(destroyOnStop) != "boolean") { console.warn("Trying to modify a RealtimeTimer's destroyOnStop with an invalid input: ", destroyOnStop); return; }
        this._destroyOnStop = destroyOnStop;
    }

    /**
	 * Create a RealtimeTimer
	 * @param  {string} name - The name of the timer
	 * @param  {Array<Function>} callbacks - The callbacks listening to this timer
	 * @param  {boolean} startOnCreation - Determines if this timer should start running after creation
	 * @param  {number} timerRunTime - The total time for this timer to run 
	 * @param  {boolean} destroyOnStop - Determines if a timers should destroy itself once it recieves a single stop command
	 */
    constructor (name: string, callbacks: Array<Function> = [], startOnCreation:boolean = true, timerRunTime:number = Number.MAX_SAFE_INTEGER, destroyOnStop: boolean = true) {
        super(name, 10, [], startOnCreation, timerRunTime, true, TimerSkipOffsetType.NoSkip);
        this.destroyOnStop = destroyOnStop;
        super.events.subscribe("loopCompletion", () => { this.events.publish("loopCompletion"); });
        this.events.subscribe("loopCompletion", callbacks);

        this.events.subscribe("response", (...args: any[]) => { return this.listenToResponse.call(this, ...args) });
    }

	/**
	 * Returns the class type of this object
	 * @returns {string}
	 */
     public toString(): string {
		return "RealitimeTimer";
	}

    /** 
     * Returns the type of this class
     */
    public static toString(): string {
        return "RealtimeTimer";
    }

    //** Handles listening to responses from callbacks to see if this timer should stop*/
    private listenToResponse(...args: any[]) {
        if (args.length != 2 || typeof(args[1]) != "boolean") { console.warn("Trying to respond to RealtimeTimer with invalid parameters: ", args); return; }

        if (args[1] == false) {
            if (this.destroyOnStop) {
                this.destroy();
            } else {
                this.stop();
            }
        }        
    }
 }