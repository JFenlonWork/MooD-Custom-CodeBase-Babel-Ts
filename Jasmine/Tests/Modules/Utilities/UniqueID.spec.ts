import { UniqueID } from "@code/Utilities/UniqueID";

describe("UniqueID", () => {

    it("Should return a uniquie ID", () => {

        //  Arrange
        let uid = new UniqueID();

        //  Act
        let id = uid.generateUID();

        //  Assert
        expect(id).toBe(1);

        //  Act
        id = uid.generateUID();

        //  Assert
        expect(id).toBe(2);

        //  Act
        id = uid.generateUID();

        //  Assert
        expect(id).toBe(3);

    });

});