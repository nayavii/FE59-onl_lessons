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

// Одно из решений:
  const array = [
    { name: 'кукла', position: 1, isFixedPostion: false },
    { name: 'дрель', position: 2, isFixedPostion: true },
    { name: 'сметана', position: 3, isFixedPostion: false },
    { name: 'штаны', position: 4, isFixedPostion: false },
    { name: 'колесо', position: 5, isFixedPostion: true },
  ];

  const setCardIntoOrderedCardsList = (card, currentCardsList) => {
    const initialFixedPositionCards = currentCardsList.reduce(
        (result, item, index) => (item.isFixedPostion ? {...result, [index]: item} : result),
        {},
    );

    let position = 0;

    const preparedCardsList = [card, ...currentCardsList];

    const cards = preparedCardsList.reduce(
        (result, item) => {
            if (item?.isFixedPostion) return result;

            while (result[position]) {
                ++position;
            }

            result[position] = {...item, position: ++position};

            return result;
        },
        initialFixedPositionCards,
    );

    return Object.values(cards);
};

// console.log(setCardIntoOrderedCardsList({ name: 'цветы', position: 1, isFixedPostion: false }, array))
// console.log(setCardIntoOrderedCardsList({ name: 'игрушка', position: 1, isFixedPostion: false }, array))