/** Class representing a utility that compares types.
 */
export class CompareTypes {

    /**
     * Compare two parameters and return if they are the same type
     * @param  {any} a - The value to compare
     * @param  {any} b - The value to compare to
    */
    public static same(a: any, b: any): boolean {
        return CompareTypes.type(a) == CompareTypes.type(b);
    }

    /**
     * Compare two parameters and return if they are not the same type
     * @param  {any} a - The value to compare
     * @param  {any} b - The value to compare to
    */
    public static different(a: any, b: any): boolean {
        return !CompareTypes.same(a, b);
    }

    /**
     * Return the type of a parameter
     * @param  {any} a - The value to get the type of
     */
    public static type(a: any): string {
        return Object.prototype.toString.call(a).slice(8, -1);
    }

    /**
     * Compare all values of an array with a parameter and return if they are the same type
     * @param  {any} a - The value to compare to
     * @param  {any[]} bArray - The values to compare
    */
    public static arraySame(a: any, bArray: any[]): boolean {
        for (const b of bArray) {
            if (CompareTypes.different(a, b)) return false;
        }
        return true;
    }

    /**
     * Compare all values of an array with a parameter and return if they are a different same type
     * @param  {any} a - The value to compare to
     * @param  {any[]} bArray - The values to compare
    */
    public static arrayDifferent(a: any, bArray: any[]): boolean {
        for (const b of bArray) {
            if (CompareTypes.same(a, b)) return false;
        }
        return true;
    }

    /**
     * Return the unique types of values in an array
     * @param  {any[]} a - The array to get the type of
     */
    public static arrayType(a: any[]): string[] {
        return Array.from(CompareTypes.arrayTypeSet(a));
    }

    /**
     * Return the unique types of values in an array as a Set
     * @param  {any[]} a - The array to get the type of
     */
     public static arrayTypeSet(a: any[]): Set<string> {
        return new Set(a.map((a) => { return CompareTypes.type(a); }));
    }

    /**
     * Compare all values of an array and return if they are the same types
     * @param  {any[]} array - The array to compare
    */
    public static arrayValuesSame(array: any[]): boolean {
        return CompareTypes.arrayType(array).length <= 1;
    }

    /**
     * Compare all values of an array and return if they are different types
     * @param  {any[]} array - The array to compare
    */
    public static arrayValuesDifferent(array: any[]): boolean {
        return CompareTypes.arrayType(array).length > 1;
    }

    /**
     * Compare all values of an array with the values of another and return if any are not the same type
     * @param  {any[]} aArray - The array to compare
     * @param  {any[]} bArray - The array to compare to
    */
    public static arrayTypesCompare(aArray: any[], bArray: any[]): boolean {
        let aTypes = CompareTypes.arrayTypeSet(aArray);
        let bTypes = CompareTypes.arrayTypeSet(bArray);

        for (const a of aArray) {
            if (!bTypes.has(CompareTypes.type(a))) return false;
        }

        for (const b of bArray) {
            if (!aTypes.has(CompareTypes.type(b))) return false;
        }

        return true;
    }

}

