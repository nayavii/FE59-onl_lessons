// Если вы ответвились от ветки lesson_17 то и пул реквест делаем в lesson_17

// Корректные названия переменных
// Внимательно читайте задания

// многие забыли, что числа могут быть равны
// if (height > width) {
//     console.log("Наибольшее число:", height);
// } else if (width > height) { //все ок но лучше не // } else if (width > height) {, а // } else if (height < width) {, что бы везде было "height ... width"
//     console.log("Наибольшее число:", width);
// } else {
//     console.log("Числа равны");
// }

// 3:
// for (let index = 0; index < 20; ++index) { // должен стартануть от 1 let index = 1;
//     if (index % 3 === 0) {
//         console.log(index);
//     }
// }

// 4: const shouldGoToWork = (key && documents && pen) && (apple || orange);
// скобки можно убрать в первой части (аналог как сложение) key && documents && pen && (apple || orange);

// 5: 
// Так не надо так как будет два сообщения при num % 5 === 0 или num % 3 === 0
// if (num % 5 === 0) {
//     console.log('Fiz');
// }
// if (num % 3 === 0) {
//     console.log('Buz');
//   }
// if (num % 3 === 0 && num % 5 === 0) {
//     console.log('FizBuz');
// }

// здесь нужно было if - else if - else

// 6.  if (yourAge == 16 || yourAge == 17 || yourAge == 18 ) {
// как бы ок но что ты будем, если возраст будет от 16 до 55 или будет 16.2? Было бы лучше yourAge >= 16 && yourAge <= 18

// 7. Здесь нужно было юзать switch.
// в конструкции switch - case в default не нужно писать break; так как это и так конец итерации

// Продвинутый:
// 1.

// Было такое решение 
// let userName = 'пОлИнА';
// let userSurname ='нАбЕрЕжНаЯ'
// let correctedName = userName.toLowerCase().replace("п", "П"); // суть - привязаться не к конкретному символу, а к первому символу
// let correctedSurname = userSurname.toLowerCase().replace("н", "Н") // суть - привязаться не к конкретному символу, а к первому символу
// alert('Привет, ' + correctedName + '!');

// Были разные подходы - сложные и не очень, с функциями и массиами но вот одно из наиболле лаконичных и соответсвивующих теме
// let userName = "пОлИнА нАбЕрЕжНаЯ";
// let correctName = userName.charAt(0).toUpperCase() + userName.slice(1).toLowerCase();
// alert("Привет, " + correctName + "!" );

// 2. Формула в виде строки, грубо говоря чтоб в консли было так '(((6 - 10) + 5) * 20) / 2 = 10', как мы делали вывод составных строк

// 3. Можно проще 
// let result = '';

// for (let i = 0; i < 6; i++) {
//     result += '#'
//     console.log(result);
// }

// let symbol = "#";
// for (let i = 1; i <= 6; ++i) {
    // console.log(symbol.repeat(i));
// };
