// // Базовый уровень
// // Задача 1.
// // Выведи все элементы массива в консоль с помощью метода forEach .
// //     const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]
// // Реализуйте решение двумя способами, используя function declaration & arrow
// // function
// const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];
// const allEllements = (numbers) => {
//     return numbers.forEach ((number) => number);
// };
// console.log(allEllements(fibonacci));

// function allEllements1(numbers) {
//     return numbers.forEach ((number) => number);
// };

// console.log(allEllements1(fibonacci));


// // Задача 2.
// // Используя метод map создайте новый массив, на основе массива users , в
// // котором каждый элемент массива будет содержать строку вида:
// //     ['member 1: Darya', 'member 2: Masha', ... etc] .
// //         const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton']
// // Реализуйте решение двумя способами, используя function declaration & arrow
// // function.
// const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton'];
// const newArrayUsers = (names) => {
//     return names.map ((name , index) => (`member ${++index}: ${name}`))
// };
// console.log(newArrayUsers(users));

// function newArrayUsers1(names){
//     return names.map ((name , index) => (`member ${++index}: ${name}`))
// };
// console.log(newArrayUsers1(users));

// // Задача 3.
// // С помощью метода filter создайте новый массив в котором не будет
// // отрицательных чисел.
// //     const numbers = [7, -4, 32, -90, 54, 32, -21]
// // Реализуйте решение двумя способами, используя function declaration & arrow
// // function.
// const numbers = [7, -4, 32, -90, 54, 32, -21];

// const numbersFilter = (numbers) => {
//     return numbers.filter ((number) => (number >= 0))
// };
// console.log(numbersFilter(numbers));

// function numbersFilter1(numbers){
//     return numbers.filter ((number) => (number >= 0))
// };
// console.log(numbersFilter1(numbers));


// // Задача 4.
// // Используя метод reduce получите сумму всех чисел массива.
// //     const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]
// //Реализуйте решение двумя способами, используя function declaration & arrow
// // function.
// const fibonacci1 = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];
// const sumNumbers = (numbers) => {
//   return numbers.reduce ((result, number) =>  result + number, 0 )
// };
// console.log(sumNumbers(fibonacci1));

// function sumNumbers1(numbers){
//     return numbers.reduce ((result, number) =>  result + number, 0 )
// }
// console.log(sumNumbers1(fibonacci1));


// // Задача 5.
// // Используя метод find найдите в массиве первое четное число.
// //     const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5]
// // Реализуйте решение двумя способами, используя function declaration & arrow
// // function.

// const numbers1 = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];
// const findNumbers = (numbers) => {
//    return numbers.find((number) => number % 2 === 0)
// };

// console.log(findNumbers(numbers1));

// function findNumbers1 (numbers){
//     return numbers.find((number) => number % 2 === 0)
// }
// console.log(findNumbers1(numbers1));


// // Продвинутый уровень
// // Задача 1.
// // Написать функцию конструктор Student
// // В каждом объекте студента должны быть поля salary , rate , name
// // Внутри объекта также должен быть метод который на основе рейтинга
// // возвращает сумму возможного кредита.
// //     На основе функции создать минимум 5 студентов и имя каждого студента
// // должно соответствовать имени студента из вашей группы.
// //     Создать массив students и поместить в него студентов.
// //     Написать функцию, которая принимает массив студентов. И вычисляет
// // общую сумму кредитов которую можно выдать группе.
// //     rate имеет 4 категории A B C D:
// //     A - отличный рейтинг и мы можем дать человеку кредит как 12 его зарплат
// // B - хороший рейтинг и мы можем дать человеку кредит как 9 его зарплат
// // C - неплохой рейтинг и мы можем дать человеку кредит как 6 его зарплат
// // D - плохой рейтинг и мы не можем дать кредит


// // Задача 2.
// // Тролли атакуют наш раздел с комментариями!!!
// //     Единственный способ справиться с этой ситуацией - удалить все гласные из
// // комментариев троллей, нейтрализуя угрозу.
// //Ваша задача - написать функцию, которая принимает строку и возвращает
// // новую строку с удаленными гласными.
// //     Например, строка «This website is for losers LOL!» станет «Ths wbst s fr lsrs LL!».
// // Примечание: для этой задачи y не считается гласной.


// const word = "This website is for losers LOL!";
// const againstTrols = (string) => {
//     return string.replace(/[aeiou]/ig, '');
// }
// console.log(againstTrols(word));


// //     Задача 3.
// // Нет истории, нет теории
// // В приведенных ниже примерах показано, как написать функцию:
// //     accum('abcd') // -> 'A-Bb-Ccc-Dddd'
// // accum('RqaEzty') // -> 'R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy'
// // accum('cwAt') // -> 'C-Ww-Aaa-Tttt'
// // Параметр — это строка, которая включает только буквы от a...z и A...Z.
// const someValue = 'abcd';
// const accumFn = ( chars) => {
//     return chars.split('').map((char, index) => {
//         console.log(char.repeat(index));
//         return char.toUpperCase() + char.toLowerCase().repeat(index);

//     }).join('-');

// }
// console.log(accumFn(someValue));


// //     Задача 4.
// // Самый высокий и самый низкий
// // В этом небольшом задании вам дается строка чисел, разделенных пробелами,
// //     и вы должны возвращать наибольшее и наименьшее число.
// // highAndLow('1 2 3 4 5') // return '5 1'
// // highAndLow('1 2 -3 4 5') // return '5 -3'
// // highAndLow('1 9 3 4 -5') // return '9 -5'
// // Строка вывода должна состоять из двух чисел, разделенных одним пробелом,
// //     при этом наибольшее число должно быть первым.


// const myString = '1 2 3 4 5';
// const highAndLow = (values) => {
// const numbers = values.split(" ").map(Number)
//     const maxNumber = Math.max(...numbers)
//     const minNumber = Math.min(...numbers)
//     return `${maxNumber} ${minNumber}`
// }
// console.log(highAndLow(myString));


// //     Задача 5.
// // Изограммы
// // Изограмма - это слово, в котором нет повторяющихся букв, последовательных
// // или непоследовательных. Реализуйте функцию, которая определяет, является
// // ли строка, содержащая только буквы, изограммой. Предположим, что пустая
// // строка является изограммой. Регистр букв мы игнорируем.
// // isIsogram("Dermatoglyphics") == true
// // isIsogram("aba") == false
// // isIsogram("moOse") == false // -- ignore letter case

// const isIsogram= (str) => {
//     const lowerCaseStr = str.toLowerCase();
//     const letters = [];

//     for (let char of lowerCaseStr) {
//         if (letters[char]) {
//             return false;
//         }
//         letters[char] = true;
//     }

//     return true;
// };
// console.log(isIsogram("moOse"));
// console.log(isIsogram("Dermatoglyphics"));
// console.log(isIsogram("aba"));

// Альтернативное решение

// function isIsogram(str) {
//     str = str.toLowerCase();

//     return str.split('').every((item, index) => str.indexOf(item) === index && item.match(/[a-z]/));
//   }

//   console.log(isIsogram("Dermatoglyphics"));
//   console.log(isIsogram("aba")); 
//   console.log(isIsogram("moOse")); 


// // Задача 6.
// // Считаем коды символов
// // Учитывая строку, превратите каждый символ в его код символа ASCII и
// // соедините их вместе, чтобы создать число. Поместите результат в
// // переменную total1 .
// //     Затем замените все числа 7 на число 1 и назовите это число total2 .
// //     После верните разницу между суммой цифр total1 и total2 .
// // 'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667
// // const  convertToASCII= (strCodes) =>  {
// //     const result = [];
// //     for (let i = 0; i < strCodes.length; i++) {
// //         const charCode = strCodes.charCodeAt(i)
// //         result.push(charCode);
// //     }
// //     return result;
// // }
// // console.log(convertToASCII('ABC'));

// const calculateDifference = (str) => {
// const splitStr = str.split('');
// const total1 = splitStr.map(char => char.charCodeAt(0)).join('');
// const total2 = total1.replace(/7/g, '1');


// const total1toSplited = total1.split('');
//     console.log(total1toSplited)
// const total2toSplited = total2.split('');


// const sumTotal1 = total1toSplited.reduce((result, item) => result + parseInt(item) ,  0);
//     console.log(sumTotal1)

// const sumTotal2 = total2toSplited.reduce((result, item) => result + parseInt(item),   0);
//     console.log(sumTotal2)

// return sumTotal1 - sumTotal2;
// }

// console.log(calculateDifference('ABC'));


// // Задача 7.
// // Дубликаты
// // Цель этого упражнения — преобразовать строку в новую строку, где каждый
// // символ в новой строке равен ( , если этот символ появляется только один раз в
// // исходной строке, или ) , если этот символ встречается более одного раза в
// // исходной строке. Игнорируйте использование заглавных букв при определении
// // дубликата символа.
// // 'din' // => '((('
// // "recede" // => '()()()'
// // 'Success' // => ')())())'
// // '(( @' // => '))(("'

// function duplicateEncode(word) {
//     const lowerCaseWord = word.toLowerCase();

//     const charCount = lowerCaseWord.split('').reduce((acc, char) => {
//         acc[char] = (acc[char] || 0) + 1;
//         return acc;
//     }, {});

//     let result = '';
//     for (let char of lowerCaseWord) {
//         result += charCount[char] > 1 ? ')' : '(';
//     }

//     return result;
// }

// console.log(duplicateEncode('din'));      // '((('
// console.log(duplicateEncode('recede'));   // '()()()'
// console.log(duplicateEncode('Success'));  // ')())())'
// console.log(duplicateEncode('(( @'));     // '))(("'