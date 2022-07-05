import UniqueEntityId from "../unique-entity-id.vo";
import InvalidUuidError from "../../errors/invalid-uuid-error";
import {validate as uuidValidate } from 'uuid';

function spyValidateMethod() {
    return jest.spyOn( UniqueEntityId.prototype as any, 'validate');
}

describe("UniqueEntityId Unit Tests",() => {
    /**
    beforeEach(() => {
        jest.clearAllMocks();
    });
    */

    it("should throw error when uuid id invalid", () => {
        const validateSpy = spyValidateMethod();
        expect(() => new UniqueEntityId('fake id')).toThrow(new InvalidUuidError());
        expect(validateSpy).toHaveBeenCalled();
    });

    it("shold accept a uuid passed in constructor", () => {
        const validateSpy = spyValidateMethod();
        const uuid = "de80bff2-9b29-44bf-ad3e-17af1093caff";
        const vo = new UniqueEntityId(uuid);
        expect(vo.value).toBe(uuid);
        expect(validateSpy).toHaveBeenCalled();
        expect(uuidValidate(vo.value)).toBeTruthy();
    });
});