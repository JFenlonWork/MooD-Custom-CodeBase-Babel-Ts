import { CompareTypes } from "../Utilities/CompareTypes";

/** Class that handles any event driven data for event managers.
 */
 export class Event {

    //** The name of this event*/
    private _name: string = "";
    public get name() : string {
        return this._name;
    }

    public set name(name: string) {
        this._name = name;
    }

    //** The name of this event*/
    private _callback: JQuery.Callbacks = jQuery.Callbacks("unique");
    public get callback() : JQuery.Callbacks {
        return this._callback;
    }

    public set callback(callback: JQuery.Callbacks) {
        this._callback = callback;
    }
    
    //** Handles storing subscribers to this Event as JQuery.Callbacks do not expose this*/
    protected _subscribers: Map<Function, JQuery.Callbacks> = new Map(); 
    public get subscribers() :  Map<Function, JQuery.Callbacks> {
        return this._subscribers;
    }


    /**
	 * Create an Event and store it's name and callback if provided
	 */
    constructor(name: string, callback: JQuery.Callbacks = jQuery.Callbacks("unique")) {
        if (typeof(name) != "string" || name == "") { console.error("Trying to create a new event with invalid name: ", name); return; }
        this.name = name;
        if (callback == null || CompareTypes.different(callback, jQuery.Callbacks())) return;
        this.callback = callback;
    }


    /**
	 * Handle setting up this event
	 * @param  {string} settings - The settings to apply to this JQuery.callbacks
	 */
    public setupEvent(settings: string): boolean {
        if (typeof(settings) != "string") { console.error("Trying to setup an Event's settings with invalid settings: ", settings); return false; }
        let jqueryCallback = jQuery.Callbacks(settings);

        if (this.callback != undefined) {
            let keys = Array.from(this.subscribers.keys());
            keys.forEach(element => {
                jqueryCallback.add(element);
                this.subscribers.set(element, jqueryCallback);
            });
        }

        this.callback = jqueryCallback;
        return true;
    }


    /**
	 * Handle subscribing to this event
	 * @param  {Function} callback - The subscriber to be added
	 */
    public subscribe(subscriber: Function): boolean {
        if (typeof(subscriber) != "function") { console.error("Trying to subscribe to an Event using an invalid callback: ", subscriber); return false; }

        if (this._subscribers.get(subscriber) != undefined) { console.error("Trying to subscribe to an event using a callback that is already subscribed: ", subscriber); return false; }
        
        this._subscribers.set(subscriber, this.callback);
        this.callback.add(subscriber);
        return true;
    }

    /**
	 * Handle unsubscribing to this event
	 * @param  {Function} callback - The subscriber to be removed
	 */
     public unsubscribe(subscriber: Function): boolean {
        if (typeof(subscriber) != "function") { console.error("Trying to unsubscribe from an Event using an invalid callback: ", subscriber); return false; }

        if (this._subscribers.get(subscriber) == undefined) return false;

        this._subscribers.delete(subscriber);
        this.callback.remove(subscriber);

        return true;
    }

    /**
	 * Handle clearing this event
	 */
     public clear(): boolean {
        if (this.callback == null) return false;
        this.callback.empty();
        this.subscribers.clear();
        return true;
    }



}