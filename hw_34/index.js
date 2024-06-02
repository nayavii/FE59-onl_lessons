const array = new Array(1000).fill(null).map((_, i) => i++);

const testList = [1, 55, 23];
const name = "Anya";
const age = 25;

const getStringsList = (array) => {
  array.toLowerCase();
};

const newTestList = getStringsList(testList, 15, true);
console.log(newTestList);
