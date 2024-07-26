function makeChange(totalAmount, denominations) {
    
    denominations.sort((a, b) => b - a);

    const changeCount = {};

    for (const denomination of denominations) {
        while (totalAmount >= denomination) {
            totalAmount -= denomination;
            changeCount[denomination] = (changeCount[denomination] || 0) + 1;
        }
    }

    return changeCount;
}

const totalChange = 47;
const availableDenominations = [1, 5, 10, 20];
const result = makeChange(totalChange, availableDenominations);
console.log(result);
