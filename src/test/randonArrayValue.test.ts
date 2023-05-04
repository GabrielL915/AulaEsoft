import { describe, expect, test } from "@jest/globals";
import { getRandomObjects } from "../atividades/randomArrayValue/randomArrayValue";
import { ErrorMessages } from "../atividades/randomArrayValue/errorMessagem.enum";

describe("Random Array Value", () => {
  test("retornar erro se index for maior que o numero do array", () => {
    const array = [
      { name: "John", age: 25 },
      { name: "Jane", age: 30 },
      { name: "Bob", age: 40 },
      { name: "Alice", age: 20 },
    ];
    const indexNumbers = 10;
    const result = getRandomObjects(array, indexNumbers);
    expect(result).toBe(ErrorMessages.INVALID_NUMBER_RANGE);
  });


  test("retornar erro se index for menor que 1", () => {
    const array = [
      { name: "John", age: 25 },
      { name: "Jane", age: 30 },
      { name: "Bob", age: 40 },
      { name: "Alice", age: 20 },
    ];
    const indexNumbers = 0;
    const result = getRandomObjects(array, indexNumbers);
    expect(result).toBe(ErrorMessages.INVALID_NUMBER);
  });

    test("retornar erro se array for vazio", () => {
    const array = [];
    const indexNumbers = 2;
    const result = getRandomObjects(array, indexNumbers);
    expect(result).toBe(ErrorMessages.INVALID_ARRAY);
    });

    
});
