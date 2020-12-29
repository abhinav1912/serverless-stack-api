import { calculateCost } from "../libs/billing-lib";

test("Lowest tier", () => {
    const storage = 10;
    const cost = 0;
    const expectedCost = calculateCost(storage);

    expect(cost).toEqual(expectedCost);
});

test("Middle tier", () => {
    const storage = 100;
    const cost = 500;
    const expectedCost = calculateCost(storage);

    expect(cost).toEqual(expectedCost);
});

test("Highest tier", () => {
    const storage = 110;
    const cost = 1100;
    const expectedCost = calculateCost(storage);

    expect(cost).toEqual(expectedCost);
});