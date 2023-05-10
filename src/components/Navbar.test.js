import { data, person } from "./TestFile";

let arr = [1, 2, 5, 5, 8];
let result = data.length;
let dataName = data[0];
const person2 = {
  name: "Somnath",
  age: 22,
  city: "West Bengal",
};

describe("Number test", () => {
  test("HELLO TESTING", () => {
    expect(result).toBe(5);
  });

  test("Test failed", () => {
    expect(result).toBe(5);
  });
});
// Strings

describe("String test", () => {
  test("Name Somnath", () => {
    expect(dataName).toMatch("e");
  });

  test("Ok failed", () => {
    expect(dataName).toMatch("apple");
  });
});
// Array
describe("Array ", () => {
  test("Testing arrays", () => {
    expect(data).toEqual(expect.arrayContaining(data));
  });
});

// Objects

describe("Object", () => {
  test("Testing Object's property", () => {
    expect(person).toHaveProperty("age");
  });

  test("Testing Object's value and property", () => {
    expect(person).toHaveProperty("age", 30);
  });
});
