/** Class representing a utility that compares types.
 */
export class CompareTypes {

    /**
     * Compare two parameters and return if they are the same type
     * @param  {any} a - The value to compare
     * @param  {any} b - The value to compare to
    */
    public static same(a: any, b: any): boolean {
        return Object.prototype.toString.call(a) == Object.prototype.toString.call(b);
    }

    /**
     * Compare two parameters and return if they are not the same type
     * @param  {any} a - The value to compare
     * @param  {any} b - The value to compare to
    */
    public static different(a: any, b: any): boolean {
        return !CompareTypes.same(a, b);
    }

}

