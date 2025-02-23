import { QueryFunc } from "@jin-qu/jinqu";
import "../index";

describe("Array extensions", () => {

    it("should create range", () => {
        expect(Array.from(Array.range(1, 5))).toEqual([1, 2, 3, 4, 5]);
        expect(Array.from(Array.range(5))).toEqual([0, 1, 2, 3, 4]);

        expect(() => Array.from(Array.range(1, -1))).toThrow();
        expect(() => Array.from(Array.range(-1))).toThrow();
    });

    it("should repeat given item", () => {
        expect(Array.from(Array.repeat("JS", 3))).toEqual(["JS", "JS", "JS"]);
        expect(() => Array.from(Array.repeat("JS", -1))).toThrow();
    });

    it("should create all query functions on Array", () => {
        const arr = [];
        const haveItAll = Object.getOwnPropertyNames(QueryFunc).every(f => f in arr)
            && "joinWith" in arr
            && "concatWith" in arr
            && "reverseTo" in arr;

        expect(haveItAll).toBe(true);
    });

    it("should work for a sample function", () => {
        const arr = [1, 2, 3, 4, 5];
        const query = arr.q();

        expect(query.where(i => i > 3).count()).toBe(2);
        expect(arr.where(i => i > 3).count()).toBe(2);
    });
});
