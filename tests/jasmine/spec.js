/*
const path = '../../dest/',		// путь до файла
      testFile = require(`${path}index`);	// импортируем модуль
*/

describe("Jasmine", function() {
  it("makes testing JavaScript awesome!", function() {
    const count = 1;				// экземпляр модуля для этого теста
    expect(count).toBe(1); 				  // сам тест
  });
});