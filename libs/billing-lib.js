export function calculateCost(storage){
    const rate = storage <= 10
        ? 0
        : storage <= 100
            ? 0.05
            : 0.1;
    return rate * storage * 100;
}