import { Event } from "@code/Events/Event";
import { map } from "jquery";

describe("Event", () => {

    it("Should be able to create an event", () => {
        //  Arrange
        const event = new Event("Test Event Constructor");

        //  Assert
        expect(event).toBeDefined();
    });

    it("Should be able to get the name of an event", () => {
        //  Arrange
        const event = new Event("Test Event Constructor");

        //  Assert
        expect(event.name).toBe("Test Event Constructor");
    });

    it("Should be able to get the callback of an event", () => {
        //  Arrange
        const event = new Event("Test Event Constructor");

        //  Assert
        expect(event.callback).toBeDefined();
    });

    it("Should be able to get the subscribers of an event", () => {
        //  Arrange
        const event = new Event("Test Event Constructor");

        //  Assert
        expect(event.subscribers).toBeDefined();
    });

    it("Should be able to return toString", () => {
        //  Arrange
        const event = new Event("Test Event Constructor");

        //  Assert
        expect(event.toString()).toBe("Event");
        expect(Event.toString()).toBe("Event");
    });

    it("Should be able to setup an event", () => {
        //  Arrange
        const event = new Event("Test Event Constructor");

        //  Act
        event.setupEvent("unique");

        //  Assert
        expect(event.callback).toBeDefined();
    });

    it("Should be able to subscribe to an event", () => {
        //  Arrange
        const event = new Event("Test Event Constructor");
        const callback = jasmine.createSpy("callback");

        //  Act
        event.subscribe(callback);

        //  Assert
        expect(event.subscribers.size).toBe(1);
    });

    it("Should be able to unsubscribe to an event", () => {
        //  Arrange
        const event = new Event("Test Event Constructor");
        const callback = jasmine.createSpy("callback");

        //  Act
        event.subscribe(callback);
        event.unsubscribe(callback);

        //  Assert
        expect(event.subscribers.keys.length).toBe(0);
    });

    it("Should be able to clear an event", () => {
        //  Arrange
        const event = new Event("Test Event Constructor");
        const callback = jasmine.createSpy("callback");

        //  Act
        event.subscribe(callback);
        event.clear();

        //  Assert
        expect(event.subscribers.keys.length).toBe(0);
    });

});