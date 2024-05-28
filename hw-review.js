// При помещении нового элемента в начало массива - все позиции смещаются на одну позицию, кроме тех,
// у которых isFixedPostion в положении true

// const array = [
//     {name: 'кукла', position: 1, isFixedPostion: false}
//     {name: 'дрель', position: 2, isFixedPostion: false},
//     {name: 'сметана', position: 3, isFixedPostion: false},
//     {name: 'штаны', position: 4, isFixedPostion: false},
//     {name: 'колесо', position: 5, isFixedPostion: false},
// ];

// const addIntoStart = (array, newObje) => {

//     return newArra;
// }

// addIntoStart(array, {name: 'торт', position: 1, isFixedPostion: false})

// [
//     {name: 'молоко', position: 1, isFixedPostion: false},
//     {name: 'дрель', position: 2, isFixedPostion: true},
//     {name: 'кукла', position: 3, isFixedPostion: false},
//     {name: 'сметана', position: 4, isFixedPostion: false},
//     {name: 'штаны', position: 5, isFixedPostion: false},
//     {name: 'колесо', position: 6, isFixedPostion: false},
// ];
////////////////////////////////////////////////////////////////////////////////////////////////
// const array = [
//     {name: 'кукла', position: 1, isFixedPostion: false},
//     {name: 'дрель', position: 2, isFixedPostion: true},
//     {name: 'сметана', position: 3, isFixedPostion: false},
//     {name: 'штаны', position: 4, isFixedPostion: false},
//     {name: 'колесо', position: 5, isFixedPostion: false},
//     {name: 'колесо', position: 6, isFixedPostion: false},
//     {name: 'зонт', position: 7, isFixedPostion: true},
//     {name: 'мармелад', position: 8, isFixedPostion: false},
// ];

// const addIntoStart = (array, newObject) => {
//     array.forEach(item => {
//         if (!item.isFixedPostion) {
//             item.position += 1;
//         }
//     });

//     array.unshift(newObject);

//     return array;
// }

// console.log(addIntoStart(array, {name: 'торт', position: 1, isFixedPostion: false}));
////////////////////////////////////////////////////////////////////////////////////////////////
// function addIntoStart(array, newObject) {
//     array.unshift(newObject);

//     for (let i = 1; i < array.length; i++) {
//       if (!array[i].isFixedPostion) {
//         array[i].position++;
//       }
//     }

//     return array;
//   }

//   const array = [
//     { name: 'кукла', position: 1, isFixedPostion: false },
//     { name: 'дрель', position: 2, isFixedPostion: true },
//     { name: 'сметана', position: 3, isFixedPostion: false },
//     { name: 'штаны', position: 4, isFixedPostion: false },
//     { name: 'колесо', position: 5, isFixedPostion: false },
//   ];

//   const newArray = addIntoStart(array, { name: 'торт', position: 1, isFixedPostion: false });
//   console.log(newArray);

////////////////////////////////////////////////////////////////////////////////////////////////
// const array = [
//     {name: 'кукла', position: 1, isFixedPosition: false},
//     {name: 'дрель', position: 2, isFixedPosition: true},
//     {name: 'сметана', position: 3, isFixedPosition: false},
//     {name: 'штаны', position: 4, isFixedPosition: true},
//     {name: 'колесо', position: 5, isFixedPosition: false},
// ];

// function addIntoStart(array, newObj) {
//     const fixedObj = array.find(item => item.isFixedPosition == true);
//     const fixedPositionIndex = fixedObj.position - 1;

//     array.unshift(newObj);
//     array.splice(fixedPositionIndex, 2, fixedObj, array[fixedPositionIndex]);
//     array.forEach(item => {
//         item.position = array.indexOf(item) + 1;
//     })
// }

// addIntoStart(array, {name: 'торт', position: 1, isFixedPosition: false});
// console.log(array)

////////////////////////////////////////////////////////////////////////////////////////////////
// Одно из решений:
const array = [
  { name: "духи", position: 1, isFixedPostion: false },
  { name: "дрель", position: 2, isFixedPostion: true },
  { name: "зефир", position: 3, isFixedPostion: true },
  { name: "кукла", position: 4, isFixedPostion: false },
  { name: "сметана", position: 5, isFixedPostion: true },
];

const addIntoStart = (array, newObje) => {
  // создаем объект, в котором в качестве ключа будет позиция элемента,
  // а в качестве знаени - сам элемент
  // это будет промежуточный объект
  // console.log(array, newObje)
  const initialPositionsObj = array.reduce((result, item, index) => {
    if (item.isFixedPostion) {
      result[index] = item;

      return result;
    }

    return result;
  }, {});
  //===
  // const initialPositionsObj = {
  //   2: { name: "дрель", position: 2, isFixedPostion: true },
  //   3: { name: "зефир", position: 3, isFixedPostion: true },
  // };

  let position = 0;
  const preparedCardsList = [newObje, ...array];

  const cards = preparedCardsList.reduce((result, item) => {
    if (item.isFixedPostion) {
      return result;
    }

    // const initialPositionsObj === result = {
    //   2: { name: "дрель", position: 2, isFixedPostion: true },
    //   3: { name: "зефир", position: 3, isFixedPostion: true },
    // };

    // const newArra = [
    //   { name: "дрель", position: 2, isFixedPostion: true },
    //   { name: "зефир", position: 3, isFixedPostion: true },
    // ]

    // Object.values(initialPositionsObj) = []

    while (result[position]) {
      ++position;
      // position = position + 1;
      // position += 1;
    }

    // const newItem = Object.assign(item);
    // newItem.position = ++position

    result[position] = { ...item, position: ++position };

    // const a = {
    //   name: "Jon",
    //   age: 30,
    // };

    // const b = {
    //   ...a,
    //   // name: 'Jon',
    //   // age: 30,
    //   position: 2,
    // };

    return result;
  }, initialPositionsObj);

  return Object.values(cards);
};

const newArray = addIntoStart(array, {
  name: "торт",
  position: 1,
  isFixedPostion: false,
});
// const array = [
//   { name: "духи", position: 1, isFixedPostion: false },
//   { name: "дрель", position: 2, isFixedPostion: true },
//   { name: "зефир", position: 3, isFixedPostion: true },
//   { name: "кукла", position: 4, isFixedPostion: false },
//   { name: "сметана", position: 5, isFixedPostion: false },
// ];
// ===
// const newArray = [
//   { name: "торт", position: 1, isFixedPostion: false }
//   { name: "дрель", position: 2, isFixedPostion: true },
//   { name: "зефир", position: 3, isFixedPostion: true },
//   { name: "духи", position: 4, isFixedPostion: false },
//   { name: "кукла", position: 5, isFixedPostion: false },
//   { name: "сметана", position: 6, isFixedPostion: false },
// ];
console.log(array);
console.log(newArray);

const resultArray = addIntoStart(newArray, {
  name: "леска",
  position: 1,
  isFixedPostion: false,
});

console.log(resultArray);
