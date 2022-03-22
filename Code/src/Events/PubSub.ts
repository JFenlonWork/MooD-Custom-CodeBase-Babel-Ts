/** Class that handles simple subscription/publish event manager.
 */
 export class PubSub {

    //** Handles any internal events that this event PubSub has*/
    protected _events: Map<String, JQuery.Callbacks> = new Map();

    /**
	 * Handle subscribing to events
	 * @param  {string} event - The event to subscribe to
	 * @param  {Function} callback - The callback to add to this event
	 * @param  {any[]} args - Any extra arguments that will be sent to EventSubscribed event
	 */
    public subscribe(event: string, callback: Function, ...args: any[]): boolean {
        if (typeof(event) != "string") { console.error("Trying to subscribe to a Timer's event with an invalid input: ", event); return false; }
        if (typeof(callback) != "function") { console.error("Trying to subscribe to a Timer's event using an invalid function: ", callback); return false; }

        let eventCallbacks = this._events.get(event);

        if (eventCallbacks == undefined) { 
            let jqueryCallback = jQuery.Callbacks("unique");
            this._events.set(event, jqueryCallback);
            eventCallbacks = jqueryCallback;
        }
        
        eventCallbacks.add(callback);

        this.publish("EventSubscribed", event, callback, ...args);

        return true;
    }

    /**
	 * Handle unsubscribing from events
	 * @param  {string} event - The event to unsubscribe from
	 * @param  {Function} callback - The callback to remove to this event
	 * @param  {any[]} args - Any extra arguments that will be sent to EventUnsubscribed event
	 */
    public unsubscribe(event: string, callback: Function, ...args: any[]): boolean {
        if (typeof(event) != "string") { console.error("Trying to subscribe to a Timer's event with an invalid input: ", event); return false; }
        if (typeof(callback) != "function") { console.error("Trying to subscribe to a Timer's event using an invalid function: ", callback); return false; }

        let eventCallbacks = this._events.get(event);
        if (eventCallbacks == undefined) return true;        
        eventCallbacks.remove(callback);

        this.publish("EventUnsubscribed", event, callback, ...args);

        return true;
    }

    /**
	 * Handle publishing events
	 */
    public publish(event: string, ...args: any[]): boolean {
        if (typeof(event) != "string") { console.error("Trying to publish to a Timer's event with an invalid input: ", event); return false; }

        let eventCallbacks = this._events.get(event);
        if (eventCallbacks != undefined) eventCallbacks.fire(...args);

        return true;
    }

    /**
	 * Handle clearing events
	 * @param  {string} event - The event to clear all subscribers from
     * This will need improving to handle event unsubscribing when clearing
	 */
     public clearEvent(event: string): boolean {
        if (typeof(event) != "string") { console.error("Trying to clear to a Timer's event with an invalid input: ", event); return false; }

        let jqueryCallback = jQuery.Callbacks("unique");
        this._events.set(event, jqueryCallback);

        return true;
    }

    /**
	 * Handle clearing all events
	 */
     public clear(): boolean {
        this._events = new Map();
        return true;
    }
 }