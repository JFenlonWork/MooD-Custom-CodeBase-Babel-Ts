import "jasmine";
import { Vector2 } from "../../../../Code/src/Maths/Vector2";
import { Vector4 } from "../../../../Code/src/Maths/Vector4";
import { Line } from "../../../../Code/src/Maths/Line";
import { random } from "../../helpers/spec helpers";
import { Generic } from "../../../../Code/src/Maths/Generic";

let x1 = random(100), y1 = random(100), x2 = random(100), y2 = random(100), x3 = random(100), y3 = random(100), x4 = random(100), y4 = random(100);

describe("Line", () => {

    beforeEach(() => {
        x1 = random(100), y1 = random(100), x2 = random(100), y2 = random(100), x3 = random(100), y3 = random(100), x4 = random(100), y4 = random(100);
    });

    it("should create a Line", () => {
        let line = new Line(x1, y1, x2, y2);
        expect(line.x1).toBe(x1);
        expect(line.y1).toBe(y1);
        expect(line.x2).toBe(x2);
        expect(line.y2).toBe(y2);
    });

    it("should have a x1 property", () => {
        expect(new Line(x1, y1, x2, y2).x1).toBe(x1);
    });

    it("should set a x1 property", () => {
        //  arrange
        let line = new Line(x1, y1, x2, y2);

        //  act
        line.x1 = x3;

        //  arrange
        expect(line.x1).toBe(x3);
    });

    it("should have a y1 property", () => {
        expect(new Line(x1, y1, x2, y2).y1).toBe(y1);
    });

    it("should set a y1 property", () => {
        //  arrange
        let line = new Line(x1, y1, x2, y2);

        //  act
        line.y1 = y3;

        //  arrange
        expect(line.y1).toBe(y3);
    });

    it("should have a x2 property", () => {
        expect(new Line(x1, y1, x2, y2).x2).toBe(x2);
    });

    it("should set a x2 property", () => {
        //  arrange
        let line = new Line(x1, y1, x2, y2);

        //  act
        line.x2 = x4;

        //  arrange
        expect(line.x2).toBe(x4);
    });

    it("should have a y2 property", () => {
        expect(new Line(x1, y1, x2, y2).y2).toBe(y2);
    });

    it("should set a y2 property", () => {
        //  arrange
        let line = new Line(x1, y1, x2, y2);

        //  act
        line.y2 = y4;

        //  arrange
        expect(line.y2).toBe(y4);
    });

    it("should set all properties", () => {
        //  arrange
        let line = new Line(x1, y1, x2, y2);

        //act
        line.set(x3, y3, x4, y4);

        //  arrange
        expect(line.x1).toBe(x3);
        expect(line.y1).toBe(y3);
        expect(line.x2).toBe(x4);
        expect(line.y2).toBe(y4);
    });

    it("Should return a line with all NaN values using static method", () => {
        //  arrange
        let line = Line.NaN();
        
        expect(line.x1).toBeNaN();
        expect(line.y1).toBeNaN();
        expect(line.x2).toBeNaN();
        expect(line.y2).toBeNaN();
    });

    it("Should return a line with all zero values using static method", () => {
        //  arrange
        let line = Line.Zero();
        
        expect(line.x1).toBe(0);
        expect(line.y1).toBe(0);
        expect(line.x2).toBe(0);
        expect(line.y2).toBe(0);
    });

    it("Should compare two lines using equals method", () => {
        //  arrange
        let line1 = new Line(x1, y1, x2, y2);
        let line2 = new Line(x1, y1, x2, y2);

        //  act
        let result = line1.equals(line2);

        //  arrange
        expect(result).toBe(true);
    });

    it("Should test if a line is full of NaN values", () => {
        //  arrange
        let line = new Line(x1, y1, x2, y2);

        //  act
        let result = line.IsNaN();

        //  arrange
        expect(result).toBe(false);
    });

    it("Should test if a line has any NaN values", () => {
        //  arrange
        let line = new Line(x1, y1, x2, y2);

        //  act
        let result = line.HasNaN();

        //  arrange
        expect(result).toBe(false);
    });

    it("Should test if a line is full of NaN values using static method", () => {
        //  arrange
        let line = Line.NaN();

        //  act
        let result = Line.isNaN(line);

        //  arrange
        expect(result).toBe(true);
    });

    it("Should test if a line has any NaN values using static method", () => {
        //  arrange
        let line = Line.NaN();

        //  act
        let result = Line.hasNaN(line);

        //  arrange
        expect(result).toBe(true);
    });

    it("Should clone a line", () => {
        //  arrange
        let line = new Line(x1, y1, x2, y2);

        //  act
        let result = line.clone();

        //  arrange
        expect(result.x1).toBe(x1);
        expect(result.y1).toBe(y1);
        expect(result.x2).toBe(x2);
        expect(result.y2).toBe(y2);
    });

    it("Should create a line from two vector2s", () => {
        //  arrange
        let vector1 = new Vector2(x1, y1);
        let vector2 = new Vector2(x2, y2);

        //  act
        let result = Line.fromVector2s(vector1, vector2);

        //  arrange
        expect(result.x1).toBe(x1);
        expect(result.y1).toBe(y1);
        expect(result.x2).toBe(x2);
        expect(result.y2).toBe(y2);
    });

    it("Should create a line from a vector4", () => {
        //  arrange
        let vector = new Vector4(x1, y1, x2, y2);

        //  act
        let result = Line.fromVector4(vector);

        //  arrange
        expect(result.x1).toBe(x1);
        expect(result.y1).toBe(y1);
        expect(result.x2).toBe(x2);
        expect(result.y2).toBe(y2);
    });

    it("Should calculate the distance of this line", () => {
        //  arrange
        let line = new Line(x1, y1, x2, y2);

        //  act
        let result = line.distance();

        //  arrange
        expect(result).toBe(Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)));
    });

    it("Should calculate the distance squared of this line", () => {
        //  arrange
        let line = new Line(x1, y1, x2, y2);

        //  act
        let result = line.distanceSqr();

        //  arrange
        expect(result).toBe(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    });
    
    it("Should calculate the intersection point of two lines", () => {
        //  arrange
        let line1 = new Line(x1, y1, x2, y2);
        let line2 = new Line(x3, y3, x4, y4);

        //  act
        let result = Line.lineIntersection(line1, line2);

        let lineIntersect: Vector2 = new Vector2(NaN, NaN);

        let div = (line1.x1 - line1.x2) * (line2.y1 - line2.y2) -
                (line1.y1 - line1.y2) * (line2.x1 - line2.x2);

        lineIntersect.x = ((line1.x1 * line1.y2 - line1.y1 * line1.x2) * (line2.x1 - line2.x2) -
            (line1.x1 - line1.x2) * (line2.x1 * line2.y2 - line2.y1 * line2.x2));
        lineIntersect.x /= div;

        lineIntersect.y = ((line1.x1 * line1.y2 - line1.y1 * line1.x2) * (line2.y1 - line2.y2) -
            (line1.y1 - line1.y2) * (line2.x1 * line2.y2 - line2.y1 * line2.x2));
        lineIntersect.y /= div;

        //  arrange
        expect(result.x).toBe(lineIntersect.x);
        expect(result.y).toBe(lineIntersect.y);
    });

    it("Should calculate if a line intersection is within two points", () => {
        //  arrange
        let line1 = new Line(x1, y1, x2, y2);
        let line2 = new Line(x3, y3, x4, y4);

        //  act
        let intersection = Line.lineIntersection(line1, line2);
        let result = Line.lineIntersectionWithin(line1, line2);
        let intersectionResult = intersection;

        if (intersection.HasNaN()) intersectionResult = new Vector2(NaN, NaN);

        //check if line interception is within line 1 x
        if (line1.x1 >= line1.x2) {
            if (Generic.between(line1.x2, intersection.x, line1.x1)) intersectionResult = Vector2.NaN();
        } else {
            if (Generic.between(line1.x1, intersection.x, line1.x2)) intersectionResult = Vector2.NaN();
        }

        //check if line interception is within line 1 y
        if (line1.y1 >= line1.y2) {
            if (Generic.between(line1.y2, intersection.y, line1.y1)) intersectionResult = Vector2.NaN();
        } else {
            if (Generic.between(line1.y1, intersection.y, line1.y2)) intersectionResult = Vector2.NaN();
        }

        //check if line interception is within line 2 x
        if (line2.x1 >= line2.x2) {
            if (Generic.between(line2.x2, intersection.x, line2.x1)) intersectionResult = Vector2.NaN();
        } else {
            if (Generic.between(line2.x1, intersection.x, line2.x2)) intersectionResult = Vector2.NaN();
        }

        //check if line interception is within line 2 y
        if (line2.y1 >= line2.y2) {
            if (Generic.between(line2.y2, intersection.y, line2.y1)) intersectionResult = Vector2.NaN();
        } else {
            if (Generic.between(line2.y1, intersection.y, line2.y2)) intersectionResult = Vector2.NaN();
        }

        //  arrange
        if (isNaN(intersectionResult.x)) {
            expect(result.x).toBeNaN();
        } else {
            expect(result.x).toBe(intersectionResult.x);
        }

        if (isNaN(intersectionResult.y)) {
            expect(result.y).toBeNaN();
        } else {
            expect(result.y).toBe(intersectionResult.y);
        }
    });
});