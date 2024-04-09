"use strict";

// Глубокое/поверхностное копирование

// let num = 55;
// let newNum = num;

// // console.log(num);
// // console.log(newNum);

// num = 2;


// console.log(num);
// console.log(newNum);

// let shelf = {
//     book: "Polina",
//     age: 345,
//     isMarr: false,
//     addr: {
//         city: 'Minsk',
//         street: 'Mog',
//     }
// };

// const newShelf = shelf; // это просто ссылка на объект shelf
// newShelf.hook = 15;
// const newShelf = Object.assign({}, shelf);

// console.log(shelf)
// console.log(newShelf)

// console.log('!!!!!!!!!!!!!!!!!!!!!!');

// shelf.book = 'Anna';
// shelf.age = 97;
// shelf.addr.city = 'NY';

// console.log(shelf)
// console.log(newShelf)


// if (JSON.stringify(student1) === JSON.stringify(student2)) {
//     console.log("Объекты равны");
// } else {
//     console.log("Объекты не равны");
// }
  
// let student2 = {
//     name: "Polina",
//     age: 27,
// };
  
// console.log(this);

// alert('432');
// const res = prompt('3234'); // то что напишет пользователь или null если скипнет
// const conf = confirm('dedwe'); // true или false

// length
// unshift
// shift
// pop
// push
// splice
// slice
// join
// indexOf
// includes
// fill заполнить массив

// forEach
// map
// every
// some
// find // возвращает превое попавшееся значения соответсвтвующее условию или если не находит то undefined
// filter
// reduce

// // array.splice(1, 2); // удалить из массива значение (первый аргумент - с какого индекса (1), второй аргумент - сколько значений (2))
// console.log(array.slice(0, 3)) // скопировал 0 (включая) и до 3 (не включая)
// userList.join(' ');

// const names = ['Anna', 'Bob', 'Ivan', 'Vlad'];
// const currentIndex = names.indexOf('Ivan');
// console.log(currentIndex); // 2

// // const currentNewIndex = names.indexOf('fewgrwgeriughewniugery');
// // console.log(currentNewIndex); // -1 - ничего не нашли 

// // const currentName = names[currentIndex];
// const currentName = names.includes('Ivan'); // содержиться ли в массиве или нет

// создание динамическоо массива случайны чисел !!!!! могут спросить на собесе
// const array = Array(5).fill(null).map((item, index, array) => +(Math.random() * 100).toFixed());
// console.log(array, array.length);

// виды объявления функций
// function fn () {

// }
// ===
// // const fn = function() {

// // }
// ===
// // // >= // сравнение
// // const arrFn = () => { // у стрелочной функции нет своего контекста вызова this!!!!!!!!!!!!!!!!!

// // }

// function getSum(a, b) {
//     return a + b;
// }
// ===
// const getSum = (a, b) => a + b;

// function name(bool, foo, bar) {
//     if (bool) {
//         return foo();
//     } else {
//         return bar();
//     }
// }

// function arg1Fn() { // функциями обратного вызова
//     console.log('Вызвали функцию "arg1Fn"');
// }

// function arg2Fn() { // функциями обратного вызова
//     console.log('Вызвали функцию "arg2Fn"');
// }

// name(true, arg1Fn, arg2Fn) // в данном случае arg1Fn и arg2Fn будут называться функциями обратного вызова (callback functions)

// const names = ['Anna', 'Bob', 'Ivan', 'Vlad'];
// const numbers = [1, 4, 66, 88, 34, 61];
// const paddings = ['1px', '4px', '66px', '88px', '34px', '61px'];

// const getEmails = (item, index, array) => {
//     console.log(item, index, array); // string
// }

// // for(let i = 0; i < names.length; ++i)  {
// //     getEmails(names[i]);
// // }

// // for(let i = 0; i < numbers.length; ++i)  {
// //     getEmails(numbers[i]);
// // }

// // for(let i = 0; i < paddings.length; ++i)  {
// //     getEmails(paddings[i]);
// // }

// const customLoop = (array, fn) => {
//     for(let i = 0; i < array.length; ++i)  {
//         fn(array[i], i, array);
//     }
// }

// customLoop(names, getEmails);
// customLoop(numbers, getEmails);
// customLoop(paddings, getEmails);

// const names = ['Anna', 'Bob', 'Ivan', 'Vlad'];
// const numbers = [1, 4, 66, 88, 34, 61];
// const paddings = ['1px', '4px', '66px', '88px', '34px', '61px'];

// const getEmails = (item, index, array) => {
//     console.log(item, index, array); // string
// }

// names.forEach((item, index, array) => {
//     // ...что-то делает
// })
// // numbers.forEach(getEmails)
// // paddings.forEach(getEmails)

// const numbers = [1, 4, 66, 88, 34, 61];

// let sum = 0;

// numbers.forEach((item) => {
//     sum += item;
// })

// console.log(sum);

// const numbers = [1, 4, 8, 9, 11, 14];
// // const result = [];
// // numbers.forEach((item) => {
// //     result.push(item ** 2);
// // })
// // console.log(numbers, result);

// const result = numbers.map((item) => {
//     return item ** 2;
// })

// console.log(numbers, result);

// const array = Array(100).fill(null).map((item, index, array) => {
//     return ++index;
// }) // [0, 1, 2 ..... до 100]
// console.log(array);

// const numbers = [1, 4, 8, 9, 11, 14];

// const isEveryItemMoreThenten = numbers.every((item, index, array) => {
//     return item > 10;
// }); // isEveryItemMoreThenten === false

// console.log(isEveryItemMoreThenten)

// const isSomeItemMoreThenten = numbers.some((item, index, array) => {
//     return item > 10;
// }); // isEveryItemMoreThenten === true

// console.log(isSomeItemMoreThenten)

// const names = ['Anna Eliz', 'Bob', 'Ivan', 'Vlad', 'Anna New'];

// const isNamesIncludeAnna = names.includes('Anna'); // true

// const name = names.find((item, inde, array) => {
//     return item === 'Anna';
// }) // 'Anna' или undefined

// console.log(name);

// const name = names.filter((item, inde, array) => {
//     // return item === 'Anna';  // ['Anna', 'Anna'] или []

//     // return item.includes('Anna') ? true : false;

//     // if (item.includes('Anna')) {
//     //     return true;
//     // } else {
//     //     return false;
//     // }
//     return item.includes('Anna'); // ['Anna Eliz', 'Anna New']
// })

// console.log(name);

// const numbers = [1, 4, 8, 9, 11, 14];

// // const sum = 0;

// // numbers.forEach((item, index, array) => {
// //     sum += item;
// // })

// const sum = numbers.reduce((result, item, index, array) => {
//     return result + item;
// }, 0)
// console.log(sum);

// const array = [2, 3, 78, 97, 35, 14, 55];

// Написать функцию которая принимает массив и фильтрует все его числа и:
// 1) возвращает массив только с теми которые больше 20 возведееые в стеень 3


// const resul = [8, 27, ...];

// const array = [14, 15, 78, 97, 35];
// const newArray = array.filter(item => item > 20).map(item => item ** 3);

// console.log(newArray);

// function fn() {
    // console.log('fn')
// }

// fn();

// безымянная самовызывающаяся функция
// (() => console.log('безымянная самовызывающаяся'))();

// const obj = {};
// const obj = new Object();

// ФУНКЦИЯ КОНСТРУКТОР
// const GetUser = function(name, age) {
//     // this = {}; неявное создаение this
//     this.name = name;
//     this.age = age;
//     this.addr = {
//         city: 'Minsk',
//         // ... много одинаковых свойств
//     }
//     // return this; неявное возвращение this
// }

// const user1 = new GetUser('Jon', 33);
// // const user1 = {
// //     name: 'Jon',
// //     age: 33,
// //     // addr: {
// //     //     city: 'Minsk',
// //     //     // ... много одинаковых свойств
// //     // }
// // };
// const user2 = new GetUser('Bill', 22);
// const user3 = new GetUser('Ivan', 124);
// const user4 = new GetUser('Anna', 5);
// const user5 = new GetUser('Bob', 646);
// const user6 = new GetUser('Liza', 60);

// console.log(
//     user1,
//     user2,
//     user3,
//     user4,
//     user5,
//     user6,
// );

// const test = {
//     prop: 42,
//     name: 'Jon',
//     age: 22,
//     func: () => {
//         return this.name;
//     },
// };

// console.log(test.func());

const obj = {
    name: 'Jon',
    ...51
}

const MakeEmpl = function(name, age, rate) {
    // if (name === 'Ivan') {
        // то в this печеньки не добавляем
    // }

    this.itherValues = {
        // ...51 свойство
        // ...51 свойство
        // ...51 свойство
        // ...51 свойство
        // ...51 свойство
        // ...51 свойство
        // ...51 свойство
        // ...51 свойство
        // ...51 свойство
        // ...51 свойство
        // ...51 свойство
        // ...51 свойство
        // ...51 свойство
        // ...51 свойство
        // ...51 свойство
        // ...51 свойство
        // ...51 свойство
        // ...51 свойство
        // ...51 свойство
        // ...51 свойство
        // ...51 свойство
        // ...51 свойство
        // ...51 свойство
    }

    this.name = name;
    this.age = age;
    this.rate = rate;

    // return this === {
        // name
        // age
        // rate
        // ...51 свойство
    // }
};

const names = ['Anna Eliz', 'Bob', 'Ivan', 'Vlad', 'Anna New'];


const newNameusingConstructor = names.map((item, index) => {
    return new MakeEmpl(item, index, 300)
})

console.log(names, newNameusingConstructor)

