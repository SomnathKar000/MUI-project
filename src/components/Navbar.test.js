import data from "./TestFile";

let result = data.length;

test("HELLO TESTING", () => {
  expect(result).toBe(7);
});

test("Test failed", () => {
  expect(result).toBe(2);
});
