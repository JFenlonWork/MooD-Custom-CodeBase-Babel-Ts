/** Class that handles simple subscription/publish event manager.
 */
 export class PubSub {

    //** Handles any internal events that this event PubSub has*/
    protected _events: Map<String, JQuery.Callbacks> = new Map();

    /**
	 * Handle subscribing to events
	 */
    public subscribe(event: string, callback: Function): boolean {
        if (typeof(event) != "string") { console.error("Trying to subscribe to a Timer's event with an invalid input: ", event); return false; }
        if (typeof(callback) != "function") { console.error("Trying to subscribe to a Timer's event using an invalid function: ", callback); return false; }

        let eventCallbacks = this._events.get(event);

        if (eventCallbacks == undefined) { 
            let jqueryCallback = jQuery.Callbacks("unique");
            this._events.set(event, jqueryCallback);
            eventCallbacks = jqueryCallback;
        }
        
        eventCallbacks.add(callback);

        return true;
    }

    /**
	 * Handle unsubscribing from events
	 */
    public unsubscribe(event: string, callback: Function): boolean {
        if (typeof(event) != "string") { console.error("Trying to subscribe to a Timer's event with an invalid input: ", event); return false; }
        if (typeof(callback) != "function") { console.error("Trying to subscribe to a Timer's event using an invalid function: ", callback); return false; }

        let eventCallbacks = this._events.get(event);
        if (eventCallbacks == undefined) return true;        
        eventCallbacks.remove(callback);

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
 }