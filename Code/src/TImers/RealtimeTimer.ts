import { PubSub } from "../Events/PubSub";
import { Timer } from "./Timer";
import { TimerSkipOffsetType } from "./TimerSkipOffsetType";

/** Class representing a Realtime Timer that implements
 *  custom controls ontop of setTimeout to create a timer that activates as fast as possible.
 */
 export class RealtimeTimer extends Timer {

    //** Handles any custom events required by this Timer*/
    private _realtimeEvents: PubSub = new PubSub();
    public get realtimeEvents(): PubSub {
        return this._realtimeEvents;
    }
    
    private _destroyOnStop: boolean = true;
    public get destroyOnStop(): boolean {
        return this._destroyOnStop;
    }

    public set destroyOnStop(destroyOnStop: boolean) {
        this._destroyOnStop = destroyOnStop;
    }

    /**
	 * Create a RealtimeTimer
	 * @param  {string} name - The name of the timer
	 * @param  {Function[]} callbacks - The callbacks listening to this timer
	 * @param  {number} timerInterval - The time between each loop on this timer
	 * @param  {boolean} startOnCreation - Determines if this timer should start running after creation
	 * @param  {number} timerRunTime - The total time for this timer to run 
	 * @param  {boolean} destroyOnStop - Determines if a timers should destroy itself once it recieves a single stop command
	 */
    constructor (name: string, callbacks: Function[] = [], startOnCreation:boolean = true, timerRunTime:number = Number.MAX_SAFE_INTEGER, destroyOnStop: boolean = true) {
        super(name, 10, [], startOnCreation, timerRunTime, true, TimerSkipOffsetType.NoSkip);
        this.destroyOnStop = destroyOnStop;
        super.events.subscribe("loopCompletion", () => { this.events.publish("loopCompletion"); });
        this.realtimeEvents.subscribe("loopCompletion", callbacks);
        this.realtimeEvents.subscribe("RealtimeResponse", this.listenToResponse);
    }

    private listenToResponse(...args: any[]) {
        if (args.length == 0 || typeof(args[0]) != "boolean") { console.warn("Trying to respond to RealtimeTimer with invalid parameters: ", args); return; }
        if (args[0] == false) {
            if (this.destroyOnStop) {
                this.destroy();
            } else {
               this.stop();
            }
        }        
    }
 }