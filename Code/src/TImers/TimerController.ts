import { MultiKeyMap } from "../Utilities/MultiKeyMap";
import { Timer } from "./Timer";

/** Class representing a any utility functions or variables that help Timers.
 */
 export class TimerController {

    //** Store a singleton of TimerController to assure only one exists */
    private static _instance: TimerController;
    public static get Instance(): TimerController {
        return this._instance || (this._instance = new this());
    }

    private constructor() {
        if (TimerController._instance) return TimerController._instance;
        TimerController._instance = this;
    }



    //** Store an incrementing variable to ensure unique IDs*/
    private _uniqueID: number = 0;
    public get uniqueID(): number {
        if (this != TimerController.Instance) return TimerController.Instance.uniqueID;
        return this._uniqueID;
    }

    private set uniqueID(value: number) {
        if (typeof(value) != "number") { console.error("Trying to set TimerController's unique ID with an invalid input: ", value); return; }
        this._uniqueID = value;
    }

    //** Store all references to Timers to allow searching*/
    private _timers: MultiKeyMap<Timer> = new MultiKeyMap();
    public get timers(): MultiKeyMap<Timer> {
        if (this != TimerController.Instance) return TimerController.Instance._timers;
        return this.timers;
    }


    /**
	 * Return the current datetime
	 */
    public static Time(): number {
        return new Date().getTime();
    }

    /**
	 * Return and increment a value to fake uniqueness
	 */
    public static generateUID(): number {
        this.Instance.uniqueID++;
        return this.Instance.uniqueID;
    }

    /**
	 * Searches for and returns a timer with a name parameter
	 * @param  {string} name - The Timer to return
	 */
    public static getTimer(name: string): Timer | undefined {
        if (typeof(name) != "number") { console.error("Trying to get a Timer with an invalid input: ", name); return; }
        return this.Instance.timers.getValue(name);
    }

    /**
	 * Searches for and returns a timer with a id parameter
	 * @param  {number} id - The Timer to return
	 */
    public static getTimerFromID(id: number): Timer | undefined {
        if (typeof(id) != "number") { console.error("Trying to get a Timer with an invalid input: ", id); return; }
        return this.Instance.timers.getValue(id);
    }

    /**
	 * Searches for and returns if a timer already exists with a name
	 * @param  {string} name - The Timer name to test
	 */
    public static testTimerNameIsValid(name: string): boolean {
        return this.getTimer(name) == undefined
    }


    /**
	 * Adds a timer to a singleton map and update references
	 * @param  {Timer} timer - The Timer to add
	 */
    public static addTimer(timer: Timer) {
        this.Instance.timers.setKeys([timer.name, timer.timerID], timer);
    }

    /**
	 * Remove a timer from a singleton map and update references
	 * @param  {Timer} timer - The Timer to remove
	 */
    public static removeTimer(timer: Timer) {
        this.Instance.timers.deleteValue(timer);
    }

 }