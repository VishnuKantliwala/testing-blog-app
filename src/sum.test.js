import sum from "./sum";

test("testing a sum function", () => {
  const a = 10;
  const b = 20;
  const output = 30;

  expect(sum(a, b)).toBe(output);
});

test("testing a sum function 2", () => {
  const a = 100;
  const b = 200;
  const output = 300;

  expect(sum(a, b)).toBe(output);
});
