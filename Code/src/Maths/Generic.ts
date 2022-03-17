/** Class representing all generic based functions needed for math calculations.
 */
 export class Generic {

    public static between(_min: number, _val: number, _max: number, _eps: number = 0.001): boolean {
        if (_min == null) { console.error("Error trying to check if a number is between two numbers using an invalid minimum: ", _min); return false; }
        if (_val == null) { console.error("Error trying to check if a number is between two numbers using an invalid value: ", _val); return false; }
        if (_max == null) { console.error("Error trying to check if a number is between two numbers using an invalid maximum: ", _max); return false; }
        return (_min - _eps < _val && _val < _max + _eps);
    }

 }