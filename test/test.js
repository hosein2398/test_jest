var doit = require("../src/index.js");

test('two plus two is four', () => {
  expect(2 + 2).toBe(4);
}); 
test('doit', () => {
  expect(doit()).toBe("hi");
}); 

test('object assignment', () => {
  const data = {one: 1};
  data['two'] = 2;
  expect(data).toEqual({one: 1, two: 2});
});