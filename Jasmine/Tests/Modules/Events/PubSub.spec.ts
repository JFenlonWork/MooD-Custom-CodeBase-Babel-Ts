import { PubSub } from "@code/Events/PubSub";

let pubSub: PubSub;
const event = "testEvent";

describe("PubSub", () => {

    beforeAll(() => {
        pubSub = new PubSub();
    });

    it("Should be able to create a PubSub", () => {
        //  Arrange
        const pubSub = new PubSub();

        //  Assert
        expect(pubSub).toBeDefined();
    });

    it("Should be able to create an event", () => {
        //  Act
        pubSub.setupEvent(event);

        //  Assert
        expect(pubSub.events.get(event)).toBeDefined();
    });

    it("Should be able to publish and subscribe to events", () => {
        //  Arrange
        const callback = jasmine.createSpy("callback");

        //  Act
        pubSub.subscribe(event, callback);
        pubSub.publish(event);

        //  Assert
        expect(callback).toHaveBeenCalled();
    });

    it("Should be able to unsubscribe to events", () => {
        //  Arrange
        const callback = jasmine.createSpy("callback");

        //  Act
        pubSub.subscribe(event, callback);
        pubSub.unsubscribe(event, callback);
        pubSub.publish(event);

        //  Assert
        expect(callback).not.toHaveBeenCalled();
    });

    it("Should be able to publish an event with arguments", () => {
        //  Arrange
        const callback = jasmine.createSpy("callback");

        //  Act
        pubSub.subscribe(event, callback);
        pubSub.publish(event, "test", 1);

        //  Assert
        expect(callback).toHaveBeenCalledWith(event, "test", 1);
    });

    it("Clear an event", () => {
        //  Act
        pubSub.setupEvent(event);
        pubSub.clearEvent(event);

        //  Assert
        expect(pubSub.events.get(event)?.subscribers.size).toBe(0);
    });

    it("Clear all events", () => {
        //  Act
        pubSub.clear();

        //  Assert
        expect(pubSub.events.size).toBe(0);
    });

});