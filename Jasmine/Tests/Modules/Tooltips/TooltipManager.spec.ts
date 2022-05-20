import { TooltipManager } from "@code/Tooltips/TooltipManager";
import { Tooltip } from "@code/Tooltips/Tooltip";
import { TooltipType } from "@code/Tooltips/TooltipType";
import { ReversibleMap } from "@code/Utilities/ReversibleMap";
import { CompareTypes } from "@code/Utilities/CompareTypes";

let tooltip: Tooltip = new Tooltip("test tooltip");
let tooltipType: TooltipType = new TooltipType(() => { return true }, () => { return false }, "test type");

describe("Tooltip Manager", () => {

    beforeEach(() => {
        if (TooltipManager.getTooltipType("test type")) TooltipManager.removeTooltipType(new TooltipType(() => { return true; }, () => { return false; }, "test type"));
        if (TooltipManager.getTooltip(tooltip.tooltipID)) TooltipManager.removeTooltip(tooltip);
    });

    it("Should return the singleton instance of Tooltip Manager", () => {
        //  Assert
        expect(TooltipManager.Instance).toBeDefined();
    });
    
    it("Should return the current unique ID", () => {
        //  Assert
        expect(TooltipManager.Instance.uniqueID).toBeDefined();
    });

    it("Should return the current tooltips", () => {
        //  Arrange
        let map = new ReversibleMap<Number, Tooltip>("number", Tooltip.toString());

        // Assert
        expect(CompareTypes.same(TooltipManager.Instance.tooltips, map)).toBe(true);
    });

    it("Should return all the current tooltip types", () => {
        //  Arrange
        let map = new Map<String, TooltipType>();

        //  Assert
        expect(CompareTypes.same(TooltipManager.Instance.tooltipTypes, map)).toBe(true);
    });

    it("Should get a tooltip with the given ID", () => {
        //  Act
        TooltipManager.addTooltip(tooltip);
        let tooltipResult = TooltipManager.getTooltip(tooltip.tooltipID);

        //  Assert
        expect(tooltipResult).toBe(tooltip);
    });

    it("Should add a tooltip to the manager", () => {
        //  Act
        TooltipManager.addTooltip(tooltip);

        //  Assert
        expect(TooltipManager.Instance.tooltips.hasKey(tooltip.tooltipID)).toBe(true);
    });

    it("Should remove a tooltip from the manager", () => {
        //  Act
        TooltipManager.addTooltip(tooltip);
        TooltipManager.removeTooltip(tooltip);

        //  Assert
        expect(TooltipManager.Instance.tooltips.hasKey(tooltip.tooltipID)).toBe(false);
    });
    
    it("Should get a tooltip type with the given name", () => {
        //  Act
        TooltipManager.addTooltipType(tooltipType);
        let tooltipTypeResult = TooltipManager.getTooltipType("test type");

        //  Assert
        expect(tooltipTypeResult).toBe(tooltipType);
    });

    it("Should add a tooltip type to the manager", () => {
        //  Act
        TooltipManager.addTooltipType(tooltipType);

        //  Assert
        expect(TooltipManager.Instance.tooltipTypes.has(tooltipType.creationName)).toBe(true);
    });

    it("Should remove a tooltip type from the manager", () => {
        //  Act
        TooltipManager.addTooltipType(tooltipType);
        TooltipManager.removeTooltipType(tooltipType);

        //  Assert
        expect(TooltipManager.Instance.tooltipTypes.has(tooltipType.creationName)).toBe(false);
    });

});