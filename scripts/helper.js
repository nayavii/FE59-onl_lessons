// export const testImportName = 'Evgen';
// export const testImportage = 30;

// export const getName = () => {
//     console.log('Evgen');
// }

// console.log(testImportName);
// console.log(testImportage);
// console.log(getName());

// export default - может имопртировать только одну сущность

// export default superImportantFuction = () => { // 

// };

// export {testImportName, testImportage, getName};

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// ДЕСТРУКТУРИЗАЦИЯ
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// const student = {
//     age: 30,
//     name: 'Evgen',
//     scores: {
//         html: 8,
//         css: 8,
//         javascript: 8,
//     }
// }

// const calc = (student) => {
//     return (student.scores.html + student.scores.css + student.scores.javascript) / 3;
// }
// Это тоже самое
// const calc = (student) => {
//     const scores = student.scores; // {html: 8, css: 8, javascript: 8};

//     return (scores.html + scores.css + scores.javascript) / 3;
// }
// // Это тоже самое
// const calc = (student) => {
//     const scores = student.scores; // {html: 8, css: 8, javascript: 8};
//     const html = scores.html;
//     const css = scores.css;
//     const javascript = scores.javascript;

//     return (html + css + javascript) / 3;
// }
// Это тоже самое
// const calc = ({scores: {html, css, javascript}}) => {
//     return (html + css + javascript) / 3;
// }

// console.log(calc(student));

// const student = {
//     age: 30,
//     name: 'Evgen',
//     scores: {
//         html: 8,
//         css: 8,
//         javascript: 8,
//     }
// }

// const {age, name, scores: {html, css, javascript}} = student;
// // Это тоже самое
// const age = student.age;
// const name = student.name;
// const scores = student.scores;
// const html = student.scores.html;
// const css = student.scores.css;
// const javascript = student.scores.javascript;

// Alfa-Bank
// USD/EUR
// Покупка/продажа
// const resut = {
//     alfaBank: {
//         USD: {
//             'Покупка': 3,2210,
//             '   ': 3,2210,
//         },
//         EUR: {
//             'Покупка': 3,2210,
//             'продажа': 3,2210,
//         },
//     },
//     btaBank: {
//         USD: {
//             'Покупка': 3,2210,
//             'продажа': 3,2210,
//         },
//         EUR: {
//             'Покупка': 3,2210,
//             'продажа': 3,2210,
//         },
//     }
// }

// const array = ['Ivan', 'Evgen', 'Olga', 'Liza'];

// const [ivan, evgen, olga, liza, jon = 'Jon'] = array;
// // Это тоже самое
// const ivan = array[0];
// const evgen = array[1];
// const olga = array[2];
// const liza = array[3];


// const testFunc = (atrr = 'Evgen') => {
//     console.log(atrr)
// }

// testFunc('hfwe'); //'hfwe'
// testFunc(); //'Evgen'

// const student = {
//     age: 30,
//     name: 'Evgen',
//     scores: {
//         html: 8,
//         css: 8,
//         javascript: 8,
//     }
// }

// const cloneStudent = Object.assign({}, student);
// const cloneStudent = {...student};

