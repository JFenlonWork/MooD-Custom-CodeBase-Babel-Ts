import { MultiKeyReversibleMap } from "../Utilities/MultiKeyReversibleMap";
import { Event } from "./Event";

/** Class that handles simple subscription/publish event manager.
 */
 export class PubSub {

    //** Handles any internal events that this event PubSub has*/
    private _events: Map<String, Event> = new Map();
    public get events(): Map<String, Event> {
        return this._events;
    }

    //** Handles storing subscribers to events that this PubSub has as JQuery.Callbacks do not expose this*/
    protected _subscribers: MultiKeyReversibleMap<Event, Function> = new MultiKeyReversibleMap(Event.toString(), "function"); 
    public get subscribers(): MultiKeyReversibleMap<Event, Function> {
        return this._subscribers;
    }

	/**
	 * Returns the class type of this object
	 * @returns {string}
	 */
    public toString(): string {
		return "PubSub";
	}

    /** 
     * Returns the type of this class
     */
    public static toString(): string {
        return "PubSub";
    }

    /**
	 * Handle modifiy/creating event with specific settings
     * @link https://api.jquery.com/jquery.callbacks/
	 * @param  {string} event - The event to subscribe to
	 * @param  {string} settings - The JQuery.Callbacks settings to apply to this event
	 * @param  {any[]} args - Any extra arguments that will be sent to EventSetup event
	 */
    public setupEvent(event: string, settings: string = "", ...args: any[]): boolean {
        if (typeof(event) != "string" || event == "") { console.error("Trying to setup an event with an invalid event: ", event); return false; }
        if (typeof(settings) != "string") { console.error("Trying to setup an event's settings with invalid settings: ", settings); return false; }

        let eventCallbacks = this._events.get(event);

        if (eventCallbacks == undefined) {
            eventCallbacks = new Event(event);
            this._events.set(event, eventCallbacks);
        }

        this.subscribers.deleteKey(eventCallbacks);
        if (!eventCallbacks.setupEvent(settings)) return false;
        this.publish("EventSetup", event, ...args);

        return true;
    }

    /**
	 * Handle subscribing to events
	 * @param  {string} event - The event to subscribe to
	 * @param  {Function | Functionp[]} callbacks - The callbacks to add to this event
	 * @param  {any[]} args - Any extra arguments that will be sent to EventSubscribed event
	 */
    public subscribe(event: string, callbacks: Function[] | Function, ...args: any[]): boolean {
        if (typeof(event) != "string" || event == "") { console.error("Trying to subscribe to a PubSub's event with an invalid input: ", event); return false; }

        if (Array.isArray(callbacks)) 
        {
            callbacks.forEach(element => {
                this.subscribe(event, element, ...args);
            });
        } else if (typeof(callbacks) == "function") {

            let _event = this._events.get(event);

            if (_event == undefined) { 
                this.setupEvent(event);
                _event = this._events.get(event);
            }

            if (!_event?.subscribe(callbacks)) return false;
            this._subscribers.setKey(_event, callbacks);

            this.publish("EventSubscribed", event, callbacks, ...args);

            return true;
        }

        console.error("Trying to subscribe to a PubSub's event using an invalid function: ", callbacks);
        return false;
    }

    /**
	 * Handle unsubscribing from events
	 * @param  {string} event - The event to unsubscribe from
	 * @param  {Array<Function> | Function} callbacks - The callbacks to remove from this event
	 * @param  {any[]} args - Any extra arguments that will be sent to EventUnsubscribed event
	 */
    public unsubscribe(event: string, callbacks: Array<Function> | Function, ...args: any[]): boolean {
        if (typeof(event) != "string") { console.error("Trying to subscribe to a PubSub's event with an invalid input: ", event); return false; }

        if (Array.isArray(callbacks)) 
        {
            callbacks.forEach(element => {
                this.unsubscribe(event, element, ...args);
            });
        } else if (typeof(callbacks) == "function") {

            let _event = this._events.get(event);
            if (_event == undefined) return false;
            if (!_event?.unsubscribe(callbacks)) return false;

            this._subscribers.deleteKey(_event, callbacks);
            this.publish("EventUnsubscribed", event, callbacks, ...args);

            return true;
        }

        console.error("Trying to unsubscribe to a PubSub's event using an invalid function: ", callbacks);
        return false;
    }

    /**
	 * Handle publishing events
	 */
    public publish(event: string, ...args: any[]): boolean {
        if (typeof(event) != "string") { console.error("Trying to publish to a PubSub's event with an invalid input: ", event); return false; }

        let _event = this._events.get(event);
        if (_event == undefined) return false;

        _event.callback.fire(event, ...args);

        if (event != "EventPublished") this.publish("EventPublished", event, ...args);

        return true;
    }

    /**
	 * Handle clearing specific event
	 * @param  {string} event - The event to clear all subscribers from
     * This will need improving to handle event unsubscribing when clearing
	 */
     public clearEvent(event: string, ...args: any[]): boolean {
        if (typeof(event) != "string") { console.error("Trying to clear to a PubSub's event with an invalid input: ", event); return false; }

        let _event = this._events.get(event);
        if (_event == undefined) return false;

        _event.clear();

        this.publish("EventCleared", event, ...args);
        return true;
    }

    /**
	 * Handle clearing all events
	 */
     public clear(...args: any[]): boolean {
        this.events.clear();
        this.publish("AllEventsCleared", ...args);
        return true;
    }
 }