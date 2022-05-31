import { PubSub } from "../Events/PubSub";
import { TimerManager } from "./TimerManager";
import { TimerOffsetType } from "./TimerOffsetType";

/** Class representing a Timer that implements custom controls ontop of setTimeout to create a configurable timer.
 */
export class Timer {

    //** The name of this timer*/ 
    public _name: string = "";
    public get name(): string {
        return this._name;
    }

    public set name(name: string) {
        if (typeof (name) != "string") { console.error("Trying to set a Timer's name with an invalid input: ", name); return; }
        this._name = name;
    }

    //** Boolean representing if this timer is currently running*/ 
    protected _running: boolean = false;
    public get running(): boolean {
        return this._running;
    }

    private set running(isRunning: boolean) {
        if (typeof (isRunning) != "boolean") { console.error("Trying to set a Timer's running status with an invalid input: ", isRunning); return; }
        this._running = isRunning;
    }

    //Callback
    //** The browser setTimeout for this timer*/
    protected _timeout: number = -1;
    public get timeout(): number {
        return this._timeout;
    }

    private set timeout(timeout: number) {
        if (typeof (timeout) != "number") { console.error("Trying to set a Timer's timeout reference with an invalid input: ", timeout); return; }
        this._timeout = timeout;
    }

    //** The ID of this timer*/ 
    public _timerID: number = -1;
    public get timerID(): number {
        return this._timerID;
    }

    private set timerID(timerID: number) {
        if (typeof (timerID) != "number") { console.error("Trying to set a Timer's ID with an invalid input: ", timerID); return; }
        this._timerID = timerID;
    }


    //** The start time of this timer*/ 
    protected _startTime: number = -1;
    public get startTime(): number {
        return this._startTime;
    }

    private set startTime(date: number) {
        if (typeof (date) != "number") { console.error("Trying to set a Timer's start date with an invalid input: ", date); return; }
        this._startTime = date;
    }

    //** The time between loop completion*/ 
    protected _timingInterval: number = -1;
    public get timingInterval(): number {
        return this._timingInterval;
    }

    protected set timingInterval(interval: number) {
        if (typeof (interval) != "number") { console.error("Trying to set a Timer's timing interval with an invalid input: ", interval); return; }
        this._timingInterval = interval;
    }

    //** The current time between loop completion*/ 
    protected _currentTimingInterval: number = -1;
    public get currentTimingInterval(): number {
        return this._currentTimingInterval;
    }

    private set currentTimingInterval(interval: number) {
        if (typeof (interval) != "number") { console.error("Trying to set a Timer's current timing interval with an invalid input: ", interval); return; }
        this._currentTimingInterval = interval;
    }

    //** The last time this timer has completed a loop*/
    protected _lastTickTime: number = -1;
    public get lastTickTime(): number {
        return this._lastTickTime;
    }

    private set lastTickTime(time: number) {
        if (typeof (time) != "number") { console.error("Trying to set a Timer's last tick time with an invalid input: ", time); return; }
        this._lastTickTime = time;
    }

    //** The miliseconds left of this timer*/
    protected _ticksRemaining: number = -1;
    public get ticksRemaining(): number {
        return this._ticksRemaining;
    }

    private set ticksRemaining(ticksRemaining: number) {
        if (typeof (ticksRemaining) != "number") { console.error("Trying to set a Timer's remaining time with an invalid input: ", ticksRemaining); return; }
        this._ticksRemaining = ticksRemaining;
    }

    //** The miliseconds that this timer has been running*/ 
    protected _ticksElapsed: number = -1;
    public get ticksElapsed(): number {
        return this._ticksElapsed;
    }

    private set ticksElapsed(ticksElapsed: number) {
        if (typeof (ticksElapsed) != "number") { console.error("Trying to set a Timer's elapsed time with an invalid input: ", ticksElapsed); return; }
        this._ticksElapsed = ticksElapsed;
    }

    //** The last time this timer was paused*/ 
    protected _pausedAt: number = -1;
    public get pausedAt(): number {
        return this._pausedAt;
    }

    private set pausedAt(date: number) {
        if (typeof (date) != "number") { console.error("Trying to set a Timer's paused time with an invalid input: ", date); return; }
        this._pausedAt = date;
    }

    //** The last time this timer was completed*/ 
    protected _lastCompletion: number = -1;
    public get lastCompletion(): number {
        return this._lastCompletion;
    }

    private set lastCompletion(date: number) {
        if (typeof (date) != "number") { console.error("Trying to set a Timer's last completion date with an invalid input: ", date); return; }
        this._lastCompletion = date;
    }

    //** Determines if this timer should take into account timer discrepancies in time*/
    protected _offsetType: TimerOffsetType = TimerOffsetType.NoOffset;
    public get offsetType(): TimerOffsetType {
        return this._offsetType;
    }

    private set offsetType(type: TimerOffsetType) {
        if (!(type in TimerOffsetType)) { console.error("Trying to set a Timer's offset type with an invalid input: ", type); return; }
        this._offsetType = type;
    }


    //** Handles any custom events required by this Timer*/
    private _events: PubSub = new PubSub();
    public get events(): PubSub {
        return this._events;
    }

    /**
     * Create a timer
     * @param  {string} name - The name of the timer
     * @param  {number} timingInterval - The time between each loop on this timer
     * @param  {Function | Function[]} callbacks - The callback/s to be called on each loop completion
     * @param  {boolean} startOnCreation - Determines if this timer should start running after creation
     * @param  {number} timerRunTime - The total time for this timer to run 
     * @param  {TimerOffsetType} offsetType - Determines if a timer should apply an offset to loop timing to correct browser time discrepencies and skip offsets if they are too large
     */
    constructor(name: string, timingInterval: number, callbacks: Function | Function[] = [], startOnCreation: boolean = true, timerRunTime: number = Number.MAX_SAFE_INTEGER, offsetType: TimerOffsetType = TimerOffsetType.NoOffset) {
        if (typeof name != "string" || name == "") { console.error("Trying to create a timer without a valid name: ", name); return; }
        if (typeof timingInterval != "number" || timingInterval < 0) { console.error("Trying to create a timer without a valid timing interval: ", timingInterval); return; }
        if (typeof startOnCreation != "boolean" || startOnCreation == null) { console.error("Trying to create a timer without a valid start on creation: ", startOnCreation); return; }
        if (!(offsetType in TimerOffsetType)) { console.error("Trying to create a timer without a valid offset type: ", offsetType); return; }

        this.name = name;
        this.timerID = TimerManager.Instance.uniqueID.generateUID();
        this.timingInterval = timingInterval;
        this.ticksRemaining = timerRunTime;
        this.offsetType = offsetType;

        this.startTime = TimerManager.Time();

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
     * Returns the class type of this object
     * @returns {string}
     */
    public toString(): string {
        return "Timer";
    }

    /** 
     * Returns the type of this class
     */
    public static toString(): string {
        return "Timer";
    }

    /**
     * Start this Timer
     */
    public start() {
        if (this.timingInterval == -1) { console.error("Trying to start a timer with an invalid timing interval: ", this.timingInterval); return; }
        this.running = true;
        this.lastTickTime = TimerManager.Time();
        this.loop();
    }

    /**
     * Stop this Timer
     */
    public stop() {
        this.running = false;
        this.pausedAt = -1;
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
        if (this.running) {
            this.stop();
            this.pausedAt = TimerManager.Time();
        }
    }

    /**
     * Resume this Timer
     */
    public resume() {
        if (this.isPaused()) this.start();
    }

    /**
     * Resume this Timer
     */
    public unpause() {
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

        const time = TimerManager.Time();

        this.lastTickTime = time;
        this.ticksElapsed += time - this.lastTickTime;
        this.ticksRemaining -= time - this.lastTickTime;

        if (this.offsetType != TimerOffsetType.NoOffset &&
            this.currentTimingInterval == this.timingInterval) {

            const roundedElapsed = Math.round((time - this.startTime) / this.timingInterval) * this.timingInterval;
            const targetTime = this.startTime + roundedElapsed + this.timingInterval;
            const delay = targetTime - TimerManager.Time();

            if (this.offsetType == TimerOffsetType.OffsetIncludeSkipOffset) {

                const lastUpdateRounded = Math.round((this.lastTickTime - this.startTime) / this.timingInterval) * this.timingInterval;
                for (let i = lastUpdateRounded; i < roundedElapsed; i++) {
                    this.events.publish("loopCompletion");
                }

            }

            this.timeout = window.setTimeout(function (this: Timer) { requestAnimationFrame(this.scheduleLoop.bind(this)); }.bind(this), delay);
            return;

        }

        this.timeout = window.setTimeout(function (this: Timer) { this.scheduleLoop(); }.bind(this), this.currentTimingInterval);
    }

    /**
     * Handle the looping of this timer
     */
    protected scheduleLoop() {
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