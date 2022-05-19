import { random } from "../../Helpers/spec_helper";

import { Positioning } from "@code/Maths/Positioning";
import { Vector2 } from "@code/Maths/Vector2";

describe("Positioning", () => {

    it("Should return the viewport offset from the page", () => {
        expect(Positioning.getPageViewportOffsetFromPage().x).toBe(window.pageXOffset);
        expect(Positioning.getPageViewportOffsetFromPage().y).toBe(window.pageYOffset);
    });

    it("Should apply the viewport offset from the page to a vector2", () => {
        // arrange
        let vectorOriginal = new Vector2(random(100), random(100));
        let vector = vectorOriginal;

        // act
        Positioning.addPageViewportOffsetFromPage(vector);

        // arrange
        expect(vector.x).toBe(vectorOriginal.x + (window.pageXOffset - document.documentElement.clientLeft));
        expect(vector.y).toBe(vectorOriginal.y + (window.pageYOffset - document.documentElement.clientTop));
    });

    it("Should subtract the viewport offset from the page to a vector2", () => {
        // arrange
        let vectorOriginal = new Vector2(random(100), random(100));
        let vector = vectorOriginal;

        // act
        Positioning.subtractPageViewportOffsetFromPage(vector);

        // arrange
        expect(vector.x).toBe(vectorOriginal.x - (window.pageXOffset - document.documentElement.clientLeft));
        expect(vector.y).toBe(vectorOriginal.y - (window.pageYOffset - document.documentElement.clientTop));
    });

    it("Should return the coordinates of a HTMLElement", () => {
        // arrange
        let parent = document.createElement("div");
        document.body.appendChild(parent);
        parent.style.position = "absolute";
        parent.style.left = random(100) + "px";
        parent.style.top = random(100) + "px";

        let child = document.createElement("div");
        parent.appendChild(child);
        child.style.position = "relative";
        child.style.left = random(100) + "px";
        child.style.top = random(100) + "px";

        let another = document.createElement("div");
        document.body.appendChild(another);
        another.style.position = "absolute";
        another.style.left = random(100) + "px";
        another.style.top = random(100) + "px";

        // act
        let result1 = Positioning.getCoords(parent);
        let result2 = Positioning.getCoords(child, parent);
        let result3 = Positioning.getCoords(child);
        let result4 = Positioning.getCoords(parent, another);

        // arrange
        expect(result1.x).toBe(parseInt(parent.style.left));
        expect(result1.y).toBe(parseInt(parent.style.top));

        expect(result2.x).toBe(parseInt(child.style.left));
        expect(result2.y).toBe(parseInt(child.style.top));
        
        expect(result3.x).toBe(parseInt(parent.style.left) + parseInt(child.style.left));
        expect(result3.y).toBe(parseInt(parent.style.top) + parseInt(child.style.top));

        expect(result4.x).toBe(parseInt(parent.style.left) - parseInt(another.style.left));
        expect(result4.y).toBe(parseInt(parent.style.top) - parseInt(another.style.top));
    });

    it("Should return the CSS sizes of a HTMLElement", () => {
        // arrange
        let parent = document.createElement("div");
        document.body.appendChild(parent);
        parent.style.width = random(100) + "px";
        parent.style.height = random(100) + "px";
        parent.style.border = "solid thin black";
        
        let child = document.createElement("div");
        parent.appendChild(child);
        child.style.width = "inherit";

        // act
        let result1 = Positioning.translateCssSizes(parent, "width");
        let result2 = Positioning.translateCssSizes(parent, "height");
        let result3 = Positioning.translateCssSizes(parent, "borderWidth");
        let result4 = Positioning.translateCssSizes(child, "width");;

        // arrange
        expect(result1).toBe(parseInt(parent.style.width));
        expect(result2).toBe(parseInt(parent.style.height));
        expect(result3).toBe(1);
        expect(result4).toBe(parseInt(parent.style.width));

        // cleanup
        parent.removeChild(child);
        document.body.removeChild(parent);
    });

});