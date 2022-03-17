/** Class representing a any utility functions or variables that help Timers.
 */
 export class TimerUtil {

    private static uniqueID: number;

    public static generateUID(): number {
        this.uniqueID++;
        return this.uniqueID;
    }

    public static Time(): number {
        return new Date().getTime();
    }

 }