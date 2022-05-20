import { Tooltip } from "@code/Tooltips/Tooltip";
import { TooltipManager } from "@code/Tooltips/TooltipManager";

let tooltip: Tooltip | null;

describe("Tooltip", () => {

    afterEach(() => {
        if (tooltip != null) TooltipManager.removeTooltip(tooltip);
        tooltip = null;
    });


    it("Should create a new Tooltip", () => {

        //  Arrange
        let tooltipText = "test tooltip";

        //  Act
        tooltip = new Tooltip(tooltipText);

        //  Assert
        expect(tooltip.tooltipText).toBe(tooltipText);
        expect(TooltipManager.getTooltip(tooltip.tooltipID)).toBe(tooltip);

    });

    it("Should get the tooltip ID of a Tooltip", () => {

        //  Arrange
        let tooltipText = "test tooltip";
        tooltip = new Tooltip(tooltipText);

        //  Act
        let tooltipID = tooltip.tooltipID;

        //  Assert
        expect(tooltipID).toBe(tooltip.tooltipID);

    });

    it("Should get the tooltip object of a Tooltip", () => {

        //  Arrange
        let tooltipText = "test tooltip";
        tooltip = new Tooltip(tooltipText);

        //  Act
        let tooltipObject = tooltip.tooltipObject;

        //  Assert
        expect(tooltipObject).toBe(null);

    });
    
    it("Should get the tooltip creation type of a Tooltip", () => {

        //  Arrange
        let tooltipText = "test tooltip";
        tooltip = new Tooltip(tooltipText);

        //  Act
        let tooltipCreationType = tooltip.TooltipTypeName;

        //  Assert
        expect(tooltipCreationType).toBe("GenericTooltipSetup");

    });

    it("Should get the tooltip CSS class of a Tooltip", () => {

        //  Arrange
        let tooltipText = "test tooltip";
        tooltip = new Tooltip(tooltipText);

        //  Act
        let tooltipCSSClass = tooltip.tooltipCSS;

        //  Assert
        expect(tooltipCSSClass).toBe("GenericTooltip");

    });

    it("Should get the tooltip parent CSS class of a Tooltip", () => {

        //  Arrange
        let tooltipText = "test tooltip";
        tooltip = new Tooltip(tooltipText);

        //  Act
        let tooltipParentCSSClass = tooltip.tooltipParentCSS;

        //  Assert
        expect(tooltipParentCSSClass).toBe("GenericTooltipParent");

    });

    it("Should get the tooltip text of a Tooltip", () => {

        //  Arrange
        let tooltipText = "test tooltip";
        tooltip = new Tooltip(tooltipText);

        //  Act
        let tooltipTextValue = tooltip.tooltipText;

        //  Assert
        expect(tooltipTextValue).toBe(tooltipText);

    });

});