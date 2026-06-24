const { sum, fromEuroToDollar, fromEuroYen, fromEuroToGBP } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
    expect(dollars).toBe(expected); 
});

test("One euro should be 156.5 japan yen", function() {
    const yenes = fromEuroYen(3.5);
    const expected = 3.5 * 156.5;
    expect(yenes).toBe(expected); 
});

test("One euro should be 0.87 british pounds", function() {
    const pounds = fromEuroToGBP(3.5);
    
    const expected = 3.5 * 0.87;

    expect(pounds).toBe(expected); 
});