import { PubSub } from "../Events/PubSub";
import { TimerManager } from "./TimerManager";
import { TimerSkipOffsetType } from "./TimerSkipOffsetType";

/** Class representing a Timer that implements custom controls ontop of setTimeout to create a configurable timer.
 */
 export class Timer {
    
   	//** The name of this timer*/ 
    public _name: string = "";
    public get name(): string {
        return this._name;
    }

    public set name(name: string) {
        if (typeof(name) != "string") { console.error("Trying to set a Timer's name with an invalid input: ", name); return; }
        this._name = name;
    }

   	//** Boolean representing if this timer is currently running*/ 
    protected _running: boolean = false;
    public get running(): boolean {
        return this._running;
    }

    private set running(isRunning: boolean) {
        if (typeof(isRunning) != "boolean") { console.error("Trying to set a Timer's running status with an invalid input: ", isRunning); return; }
        this._running = isRunning;
    }

    //Callback
	//** The browser setTimeout for this timer*/
    protected _timeout: number = -1;
    public get timeout(): number {
        return this._timeout;
    }

    private set timeout(timeout: number) {
        if (typeof(timeout) != "number") { console.error("Trying to set a Timer's timeout reference with an invalid input: ", timeout); return; }
        this._timeout = timeout;
    }

   	//** The ID of this timer*/ 
    public _timerID: number = -1;
    public get timerID(): number {
        return this._timerID;
    }

    private set timerID(timerID: number) {
        if (typeof(timerID) != "number") { console.error("Trying to set a Timer's ID with an invalid input: ", timerID); return; }
        this._timerID = timerID;
    }


    //** The start time of this timer*/ 
    protected _startDate: number = -1;
    public get startDate(): number {
        return this._startDate;
    }

    private set startDate(date: number) {
        if (typeof(date) != "number") { console.error("Trying to set a Timer's start date with an invalid input: ", date); return; }
        this._startDate = date;
    }

    //** The time between loop completion*/ 
    protected _timingInterval: number = -1;
    public get timingInterval(): number {
        return this._timingInterval;
    }

    private set timingInterval(interval: number) {
        if (typeof(interval) != "number") { console.error("Trying to set a Timer's timing interval with an invalid input: ", interval); return; }
        this._timingInterval = interval;
    }
    
    //** The current time between loop completion*/ 
    protected _currentTimingInterval: number = -1;
    public get currentTimingInterval(): number {
        return this._currentTimingInterval;
    }

    private set currentTimingInterval(interval: number) {
        if (typeof(interval) != "number") { console.error("Trying to set a Timer's current timing interval with an invalid input: ", interval); return; }
        this._currentTimingInterval = interval;
    }

    //** The last time this timer has completed a loop*/
    protected _lastTickDate: number = -1;
    public get lastTickDate(): number {
        return this._lastTickDate;
    }

    private set lastTickDate(date: number) {
        if (typeof(date) != "number") { console.error("Trying to set a Timer's last tick date with an invalid input: ", date); return; }
        this._lastTickDate = date;
    }

    //** The miliseconds left of this timer*/
    protected _ticksRemaining: number = -1;
    public get ticksRemaining(): number {
        return this._ticksRemaining;
    }

    private set ticksRemaining(ticksRemaining: number) {
        if (typeof(ticksRemaining) != "number") { console.error("Trying to set a Timer's remaining time with an invalid input: ", ticksRemaining); return; }
        this._ticksRemaining = ticksRemaining;
    }
    
    //** The miliseconds that this timer has been running*/ 
    protected _ticksElapsed: number = -1;
    public get ticksElapsed(): number {
        return this._ticksElapsed;
    }

    private set ticksElapsed(ticksElapsed: number) {
        if (typeof(ticksElapsed) != "number") { console.error("Trying to set a Timer's elapsed time with an invalid input: ", ticksElapsed); return; }
        this._ticksElapsed = ticksElapsed;
    }

   	//** The last time this timer was paused*/ 
    protected _pausedAt: number = -1;
    public get pausedAt(): number {
        return this._pausedAt;
    }

    private set pausedAt(date: number) {
        if (typeof(date) != "number") { console.error("Trying to set a Timer's paused time with an invalid input: ", date); return; }
        this._pausedAt = date;
    }

   	//** The last time this timer was completed*/ 
    protected _lastCompletion: number = -1;
    public get lastCompletion(): number {
        return this._lastCompletion;
    }

    private set lastCompletion(date: number) {
        if (typeof(date) != "number") { console.error("Trying to set a Timer's last completion date with an invalid input: ", date); return; }
        this._lastCompletion = date;
    }


    
    //** Determines if this timer should take into account timer discrepancies in time*/
    protected _enableOffset: boolean = false;
    public get enableOffset(): boolean {
        return this._enableOffset;
    }

    private set enableOffset(enabled: boolean) {
        if (typeof(enabled) != "boolean") { console.error("Trying to set a Timer's offset enabled with an invalid input: ", enabled); return; }
        this._enableOffset = enabled;
    }

    //** Calculate the difference between loop time and actual time*/
    protected _intervalOffset: number = -1;
    public get intervalOffset(): number {
        return this._intervalOffset;
    }

    private set intervalOffset(interval: number) {
        if (typeof(interval) != "number") { console.error("Trying to set a Timer's offset value with an invalid input: ", interval); return; }
        this._intervalOffset = interval;
    }

    //** Determines if this timer should apply offset to current loop time based on discrepancies*/
    protected _skipOffset: TimerSkipOffsetType = TimerSkipOffsetType.NoSkip;
    public get skipOffset(): TimerSkipOffsetType {
        return this._skipOffset;
    }

    private set skipOffset(skipType: TimerSkipOffsetType) {
        if (!(skipType in TimerSkipOffsetType)) { console.error("Trying to set a Timer's offset skip type with an invalid input: ", skipType); return; }
        this._skipOffset = skipType;
    }

    //** Handles if the timer is currently skipping a loop*/
    protected _skipOffsetCalculation: boolean = false;
    public get skipOffsetCalculation(): boolean {
        return this._skipOffsetCalculation;
    }

    private set skipOffsetCalculation(skipOffsetCalculation: boolean) {
        if (typeof(skipOffsetCalculation) != "boolean") { console.error("Trying to set a Timer's skip loop value with an invalid input: ", skipOffsetCalculation); return; }
        this._skipOffsetCalculation = skipOffsetCalculation;
    }

    //** Handles any custom events required by this Timer*/
    private _events: PubSub = new PubSub();
    public get events(): PubSub {
        return this._events;
    }

    /**
	 * Create a timer
	 * @param  {string} name - The name of the timer
	 * @param  {number} timerInterval - The time between each loop on this timer
	 * @param  {boolean} startOnCreation - Determines if this timer should start running after creation
	 * @param  {number} timerRunTime - The total time for this timer to run 
	 * @param  {boolean} enableOffset - Determines if a timers loop should change based on browser time discrepancies
	 * @param  {TimerSkipOffsetType} skipOffset - Determines if a timers should skip offsets if they are too large
	 */
    constructor (name: string, timingInterval:number, callbacks: Function[] = [], startOnCreation:boolean = true, timerRunTime:number = Number.MAX_SAFE_INTEGER, enableOffset:boolean = false, skipOffset:TimerSkipOffsetType = TimerSkipOffsetType.NoSkip) {
        if (typeof name != "string" || name == "") { console.error("Trying to create a timer without a valid name: ", name); return; }
        if (typeof timingInterval != "number" || timingInterval <= -1) { console.error("Trying to create a timer without a valid timing interval: ", timingInterval); return; }
        if (typeof startOnCreation != "boolean" || startOnCreation == null) { console.error("Trying to create a timer without a valid start on creation: ", startOnCreation); return; }
        if (typeof enableOffset != "boolean" || enableOffset == null) { console.error("Trying to create a timer without a valid enable offset: ", enableOffset); return; }

        this.name = name;
        this.timerID = TimerManager.Instance.uniqueID.generateUID();
        this.timingInterval = timingInterval;
        this.ticksRemaining = timerRunTime;
        this.enableOffset = enableOffset;

        this.startDate = TimerManager.Time();
        this.skipOffset = skipOffset;

        if (Array.isArray(callbacks)) {
            callbacks.forEach(element => {
                this.events.subscribe("loopCompletion", element);
            });
        } else {
            this.events.subscribe("loopCompletion", callbacks);
        }

        TimerManager.addTimer(this);

        if (startOnCreation) {
            this.start();
        }
    }

    /**
	 * Start this Timer
	 */
    public start() {
        if (this.timingInterval == -1) { console.error("Trying to start a timer with an invalid timing interval: ", this.timingInterval); return; }
        this.running = true;
        this.lastTickDate = TimerManager.Time();
        this.loop();
    }

    /**
	 * Stop this Timer
	 */  
    public stop() {
        this.running = false;
        this.pausedAt = 0;
        window.clearTimeout(this.timeout);
        this.timeout = NaN;
    }

    /**
	 * Restart this Timer
	 */  
    public restart() {
        this.stop();
        this.start();
    }

    /**
	 * Pause this Timer
	 */  
    public pause() {
        if (this.running)
        {
            this.stop();
            this.pausedAt = TimerManager.Time();
        }
    }

    /**
	 * Resume this Timer
	 */  
    public resume()
    {
        if (this.isPaused()) this.start();
    }

    /**
	 * Resume this Timer
	 */  
    public unpause()
    {
        this.resume();
    }

    /**
	 * Test if this Timer is currently pause
	 */  
    public isPaused(): boolean {
        return this.pausedAt != -1;
    }

    /**
	 * Handle the looping/countdown calculation of this timer
	 */
    protected loop() {
        if (this.timingInterval == -1) { console.error("Trying to handle a timer's loop with an invalid timing interval: ", this.timingInterval); return; }
        this.currentTimingInterval = this.timingInterval;

        if (this.isPaused()) {
            this.currentTimingInterval = this.currentTimingInterval - (this.pausedAt - this.lastCompletion);
            this.pausedAt = -1;
        }

        let time = TimerManager.Time();
        
        let timeSinceLastUpdate = time - this.lastTickDate;
        this.lastTickDate = time;
        this.ticksElapsed += timeSinceLastUpdate;
        this.ticksRemaining -= timeSinceLastUpdate;

        if (this.enableOffset &&
            timeSinceLastUpdate != this.currentTimingInterval &&
            this.skipOffsetCalculation == false) {
                
                if (this.skipOffset != TimerSkipOffsetType.NoSkip) {
                    this.intervalOffset = this.currentTimingInterval - timeSinceLastUpdate;

                    if (this.intervalOffset < -this.currentTimingInterval) {
                        switch (this.skipOffset) {
                            case TimerSkipOffsetType.SkipAnyIncludingInstantLoops:
                                this.intervalOffset = -(this.currentTimingInterval & this.intervalOffset);
                                break;
                            case TimerSkipOffsetType.SkipExcludingInstantLoops:
                                this.intervalOffset = -this.currentTimingInterval;
                                break;
                        }
                    }
                } else {
                    this.intervalOffset = 0;
                }

        } else {
            this.intervalOffset = 0;
            this.skipOffsetCalculation = false;
        }

        let _this = this;
        this.timeout = window.setTimeout(() => _this.runLoop(), this.currentTimingInterval + this.intervalOffset);
    }

    /**
	 * Handle the looping of this timer
	 */
    protected runLoop() {
        let timer = this;
        this.events.publish("loopCompletion");

        this.lastCompletion = TimerManager.Time();

        if (this.running) {
            if (this.ticksRemaining - this.currentTimingInterval < 0) {
                this.destroy();
                return;
            }
            this.loop();
        }
    }

    /**
	 * Handle the destruction of this timer
	 */
    public destroy() {
        this.stop();
        this.events.publish("TimerDestroyed", this);
        this.events.clear();
        TimerManager.removeTimer(this);
    }

 }