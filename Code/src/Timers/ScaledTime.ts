/** A class that hold information relating to interval timings of a ScaledTimer
 */
 export class ScaledTime {


    _threshold: number = -1;
    public get threshold(): number {
        return this._threshold;
    }

    public set threshold(threshold: number) {
        if (typeof(threshold) != "number") { console.warn("Trying to modify a ScaledTime's threshold with an invalid input: ", threshold); return; }
        this._threshold = threshold;
    }

    _interval: number = -1;
    public get interval(): number {
        return this._interval;
    }

    public set interval(interval: number) {
        if (typeof(interval) != "number") { console.warn("Trying to modify a ScaledTime's interval with an invalid input: ", interval); return; }
        this._interval = interval;
    }

    /**
	 * Create a Scaled Time which stores data for ScaledTimers
	 * @param  {number} threshold - The amount of failed returns for this to become active
	 * @param  {number} interval - The ScaledTimer's timing interval if this is active
	 */
    constructor (threshold: number, interval: number) {
        if (typeof(threshold) != "number") { console.warn("Trying to modify a ScaledTime's threshold with an invalid input: ", threshold); return; }
        if (typeof(interval) != "number") { console.warn("Trying to modify a ScaledTime's interval with an invalid input: ", interval); return; }
        
        this._threshold = threshold;
        this._interval = interval;
    }
}