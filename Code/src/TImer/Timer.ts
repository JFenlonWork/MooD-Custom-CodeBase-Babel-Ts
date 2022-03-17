import { TimerSkipOffsetType } from "./TimerSkipOffsetType";
import { TimerUtil } from "./TimerUtil";

/** Class representing a Timer that implements custom controls ontop of setTimeout to create a configurable timer.
 */
 export class Timer {
    
   	//** The name of this timer*/ 
    public name: string = "";

   	//** Boolean representing if this timer is currently running*/ 
    protected running: boolean = false;

    //Callback
	//** The browser setTimeout for this timer*/
    protected timeout: number = -1;

   	//** The ID of this timer*/ 
    public timerID: number = -1;



    //** The start time of this timer*/ 
    protected startDate: number = -1;

    //** The time between loop completion*/ 
    protected timingInterval: number = -1;
    
    //** The current time between loop completion*/ 
    protected currentTimingInterval: number = -1;

    //** The last time this timer has completed a loop*/
    protected lastTickDate: number = -1;

    //** The miliseconds left of this timer*/
    protected ticksRemaining: number = -1;
    
    //** The miliseconds that this timer has been running*/ 
    protected ticksElapsed: number = -1;

   	//** The last time this timer was paused*/ 
    protected pausedAt: number = -1;

   	//** The last time this timer was completed*/ 
    protected lastCompletion: number = -1;


    
    //** Determines if this timer should take into account timer discrepancies in time*/
    protected enableOffset: boolean = false;

    //** Calculate the difference between loop time and actual time*/
    protected intervalOffset: number = -1;

    //** Determines if this timer should apply offset to current loop time based on discrepancies*/
    protected skipOffset: TimerSkipOffsetType = TimerSkipOffsetType.NoSkip;



    /**
	 * Create a timer
	 * @param  {string} name - The name of the timer
	 * @param  {number} timerInterval - The time between each loop on this timer
	 * @param  {boolean} startOnCreation - Determines if this timer should start running after creation
	 * @param  {number} timerRunTime - The total time for this timer to run 
	 * @param  {boolean} enableOffset - Determines if a timers loop should change based on browser time discrepancies
	 * @param  {TimerSkipOffsetType} skipOffset - Determines if a timers should skip offsets if they are too large
	 */
    constructor (name: string /*, callback*/, timingInterval:number, startOnCreation:boolean = true, timerRunTime:number = Number.MAX_SAFE_INTEGER, enableOffset:boolean = false, skipOffset:TimerSkipOffsetType = TimerSkipOffsetType.NoSkip) {
        if (typeof name != "string" || name == "") { console.error("Trying to create a timer without a valid name: ", name); return; }
        if (typeof timingInterval != "number" || timingInterval <= -1) { console.error("Trying to create a timer without a valid timing interval: ", timingInterval); return; }
        if (typeof startOnCreation != "boolean" || startOnCreation == null) { console.error("Trying to create a timer without a valid start on creation: ", startOnCreation); return; }
        if (typeof enableOffset != "boolean" || enableOffset == null) { console.error("Trying to create a timer without a valid enable offset: ", enableOffset); return; }

        this.name = name;
        this.timerID = TimerUtil.generateUID();
        this.timingInterval = timingInterval;
        this.ticksRemaining = timerRunTime;
        this.enableOffset = enableOffset;

        this.startDate = TimerUtil.Time();
        this.skipOffset = skipOffset;

        if (startOnCreation) {

        }
    }

    /**
	 * Start this timer
	 */
    public start() {
        if (this.timingInterval == -1) { console.error("Trying to start a timer with an invalid timing interval: ", this.timingInterval); return; }
        this.running = true;
        this.lastTickDate = TimerUtil.Time();
        this.loop();
    }

    public isPaused(): boolean {
        return this.pausedAt != -1;
    }

    /**
	 * Handle the looping/countdown of this timer
	 */
    protected loop() {
        if (this.timingInterval == -1) { console.error("Trying to handle a timer's loop with an invalid timing interval: ", this.timingInterval); return; }
        this.currentTimingInterval = this.timingInterval;

        if (this.isPaused()) {
            this.currentTimingInterval = this.currentTimingInterval - (this.pausedAt - this.lastCompletion);
            this.pausedAt = -1;
        }

        let time = TimerUtil.Time();
        
        let timeSinceLastUpdate = time - this.lastTickDate;
        this.lastTickDate = time;
        this.ticksElapsed += timeSinceLastUpdate;
        this.ticksRemaining -= timeSinceLastUpdate;

    }

 }