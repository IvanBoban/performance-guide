const stringToInt = () => {
  const str = "1";
  console.time("Number");
  Number(str);
  console.timeEnd("Number");
  console.time("parseInt");
  parseInt(str);
  console.timeEnd("parseInt");
  console.time("Unary");
  +str;
  console.timeEnd("Unary");
};

const number = 15;
const intToString = () => {
  console.time("toString");
  number.toString();
  console.timeEnd("toString");
  console.time("quotes");
  number + "";
  console.timeEnd("quotes");
  console.time("String");
  String(number);
  console.timeEnd("String");
};

const array = Array.from(Array(100000).keys());

const testForEachVsForLoop = () => {
  console.log("\n Test Array.forEach vs for loop");
  console.time("forEach");
  array.forEach(() => {});
  console.timeEnd("forEach");
  console.time("forLoop");
  for (let i = 0; i < array.length; i++) {}
  console.timeEnd("forLoop");
};

const testFilterVsForLoop = () => {
  console.log("\n Test Array.filter vs for loop");
  console.time("filter");
  array.filter(() => {});
  console.timeEnd("filter");
  console.time("forLoop");
  for (let i = 0; i < array.length; i++) {}
  console.timeEnd("forLoop");
};
const testMapVsForLoop = () => {
  console.log("\n Test Array.map vs for loop");
  console.time("map");
  array.map(() => {});
  console.timeEnd("map");
  console.time("forLoop");
  for (let i = 0; i < array.length; i++) {}
  console.timeEnd("forLoop");
};

const testArrayReduceVsForLoop = () => {
  console.log("\n Test Array.reduce vs for loop");
  console.time("reduce");
  array.reduce(() => {});
  console.timeEnd("reduce");
  console.time("forLoop");
  for (let i = 0; i < array.length; i++) {}
  console.timeEnd("forLoop");
};

console.log("\n String to Number testing");
stringToInt();

console.log("\n Number to String testing");
intToString();

console.log("\n  Array Testing:");

testForEachVsForLoop();
testFilterVsForLoop();
testMapVsForLoop();
testArrayReduceVsForLoop();
