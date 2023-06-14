const { validateTime } = require('../utils/validateTime');

describe("Функция валидации времени", () => {
    test ("Функция добавляет 0 для чисел меньше 10", () => {
        expect(validateTime("5")).toBe("05");
    });
    test ("Функция ничего не делает с числами более или равно 10", () => {
        expect(validateTime("15")).toBe("15");
    })
});