import { TooltipType } from "@code/Tooltips/TooltipType";

describe("Tooltip Type", () => {

    it("Should create a new Tooltip Type", () => {
            
            //  Arrange
            let creation = () => { return true };
            let deletion = () => { return false };
            let creationName = "test type";
    
            //  Act
            let tooltipType = new TooltipType(creation, deletion, creationName);
    
            //  Assert
            expect(tooltipType.creation()).toBe(true);
            expect(tooltipType.deletion()).toBe(false);
            expect(tooltipType.creationName).toBe(creationName);
    
    });

    it("Should get the creation function of a Tooltip Type", () => {

        //  Arrange
        let creation = () => { return true };
        let deletion = () => { return false };
        let creationName = "test type";
        let tooltipType = new TooltipType(creation, deletion, creationName);

        //  Act
        let creationFunction = tooltipType.creation;

        //  Assert
        expect(creationFunction).toBe(creation);

    });

    it("Should get the deletion function of a Tooltip Type", () => {

        //  Arrange
        let creation = () => { return true };
        let deletion = () => { return false };
        let creationName = "test type";
        let tooltipType = new TooltipType(creation, deletion, creationName);

        //  Act
        let deletionFunction = tooltipType.deletion;

        //  Assert
        expect(deletionFunction).toBe(deletion);

    });

    it("Should get the creation name of a Tooltip Type", () => {

        //  Arrange
        let creation = () => { return true };
        let deletion = () => { return false };
        let creationName = "test type";
        let tooltipType = new TooltipType(creation, deletion, creationName);

        //  Act
        let creationNameString = tooltipType.creationName;

        //  Assert
        expect(creationNameString).toBe(creationName);

    });

});