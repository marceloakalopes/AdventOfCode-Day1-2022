const sumArr = require('./main');

// Test 1
test("Properly sums all items in a list", () => {
    expect(sumArr([1,2,3])).toBe(6);
})

// Test 2
test("Properly sums all items in a list", () => {
    expect(sumArr([1230,3999,2775,2882,4474,2490,5185,3853,6045,1786,3372,3548,2217,1424])).toBe(45280);
})

//Test 3
test("Properly sums all items in a list", () => {
    expect(sumArr([20686,14164,24547])).toBe(59397);
})

// Test 4
test("Properly sums all items in a list", () => {
    expect(sumArr([])).toBe(0);
})

// test("Properly sums all items in a list", () => {
//     expect(sumArr([])).toBe(0);
// })