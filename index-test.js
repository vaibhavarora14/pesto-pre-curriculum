const {
    describe,
    it,
    expect,
    matchers
} = require('./index')

function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    return number1 / number2;
}

describe('index test', () =>{
    it('testing airthmetic expressions', () => {
        expect(add(2, 4)).toBe(6);
        expect(subtract(100, 200)).toBe(-100);
        expect(multiply(5, 5)).toBe(25);
        expect(
            divide(100, 4)
        ).toBe(25);
    }) 
})