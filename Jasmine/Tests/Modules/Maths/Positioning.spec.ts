import { random } from "../../Helpers/spec_helper";

import { Positioning } from "@code/Maths/Positioning";
import { Vector2 } from "@code/Maths/Vector2";

let parent = document.createElement("div");
parent.style.position = "absolute";
parent.style.left = random(100) + "px";
parent.style.top = random(100) + "px";
parent.style.width = random(100) + "px";
parent.style.height = random(100) + "px";
parent.style.border = "solid thin black";

let child = document.createElement("div");
child.style.position = "relative";
child.style.left = random(100) + "px";
child.style.top = random(100) + "px";
child.style.width = "inherit";

let another = document.createElement("div");
another.style.position = "absolute";
another.style.left = random(100) + "px";
another.style.top = random(100) + "px";

describe("Positioning", () => {

    beforeAll(() => {
        document.body.appendChild(parent);
        parent.appendChild(child)
        document.body.appendChild(another);
    });

    afterAll(() => {
        document.body.removeChild(parent);
        document.body.removeChild(another);
    });

    it("Should return the viewport offset from the page", () => {
        // assert
        expect(Positioning.getPageViewportOffsetFromPage().x).toBe(window.pageXOffset);
        expect(Positioning.getPageViewportOffsetFromPage().y).toBe(window.pageYOffset);
    });

    it("Should apply the viewport offset from the page to a vector2", () => {
        // arrange
        let vectorOriginal = new Vector2(random(100), random(100));
        let vector = vectorOriginal;

        // act
        Positioning.addPageViewportOffsetFromPage(vector);

        // assert
        expect(vector.x).toBe(vectorOriginal.x + (window.pageXOffset - document.documentElement.clientLeft));
        expect(vector.y).toBe(vectorOriginal.y + (window.pageYOffset - document.documentElement.clientTop));
    });

    it("Should subtract the viewport offset from the page to a vector2", () => {
        // arrange
        let vectorOriginal = new Vector2(random(100), random(100));
        let vector = vectorOriginal;

        // act
        Positioning.subtractPageViewportOffsetFromPage(vector);

        // assert
        expect(vector.x).toBe(vectorOriginal.x - (window.pageXOffset - document.documentElement.clientLeft));
        expect(vector.y).toBe(vectorOriginal.y - (window.pageYOffset - document.documentElement.clientTop));
    });

    it("Should return the coordinates of a HTMLElement", () => {
        // act
        let result1 = Positioning.getCoords(parent);
        let result2 = Positioning.getCoords(child, parent);
        let result3 = Positioning.getCoords(child);
        let result4 = Positioning.getCoords(parent, another);

        // assert
        expect(result1.x).toBe(parseFloat(parent.style.left));
        expect(result1.y).toBe(parseFloat(parent.style.top));

        expect(result2.x).toBe(parseFloat(child.style.left));
        expect(result2.y).toBe(parseFloat(child.style.top));
        
        expect(result3.x - (parseFloat(parent.style.left) + parseFloat(child.style.left))).toBeLessThanOrEqual(1);
        expect(result3.y - (parseFloat(parent.style.top) + parseFloat(child.style.top))).toBeLessThanOrEqual(1);

        expect(result4.x).toBe(parseFloat(parent.style.left) - parseFloat(another.style.left));
        expect(result4.y).toBe(parseFloat(parent.style.top) - parseFloat(another.style.top));
    });

    it("Should return the CSS sizes of a HTMLElement", () => {
        // act
        let result1 = Positioning.translateCssSizes(parent, "width");
        let result2 = Positioning.translateCssSizes(parent, "height");
        let result3 = Positioning.translateCssSizes(parent, "borderWidth");
        let result4 = Positioning.translateCssSizes(child, "width");;

        // assert
        expect(result1).toBe(parseFloat(parent.style.width));
        expect(result2).toBe(parseFloat(parent.style.height));
        expect(result3).toBe(1);
        expect(result4).toBe(parseFloat(parent.style.width));
    });

});