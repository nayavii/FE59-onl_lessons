// Стилистика кода

// 1.
// удалить оба ключа

// хорошее решение
// const cat = {
//     name: 'Timofey',
//     age: 5
// }
// for (const key in cat) {
//     delete cat[key];
// }
// console.log(cat);

// 2.
// Хорошее альтернативное решение
// const job = {
//     oklad : 1200,
//     schedule : "five-day"
// }
// console.log(job.hasOwnProperty("oklad"));
// console.log(job.hasOwnProperty("stavka"));



// Рабочее но не очень правильное
// const object = {
//     city: 'Minsk',
//     password: 1234,
//   };
  
//   if(Object.keys(object).includes('password')){
//     console.log('true')
//     } else {
//     console.log('false')
//     }



// 3.
// const student = {
//     name: 'John',
//     age: 19,
//     isHappy: true
//     }
//     for (const cikl in student) {
//         console.log({cikl})
//     };

// 5. вместо этого можно проще salariesArray.length

// let salaries = {
//   andrey: 500,
//   sveta: 413,
//   anton: 987,
//   igor: 664,
//   alexandra: 199,
// };
// let salariesArray = Object.values(salaries);
// let keyInObject = Object.keys(salaries).length; // вместо этого можно проще salariesArray.length
// let sum = 0;
// for (const numberSum of salariesArray) {
//   sum += numberSum;
// }
// let finalZp = sum / keyInObject;
// console.log(finalZp);

// 6.
// Я интерпретировал "Потом попросить пользователя подтвердить данные. Если верно введен логин и пароль, вывести сообщение Добро пожаловать"
// как необходимость повторного запроса данных через промпт и проверка уже вновь введенных данных с теми, что в объекте, но я думаю,
// вы бы справились без проблем

// function registrationValidator() {
//     let login = prompt("Введите логин:");
//     let password = prompt("Введите пароль:");
//     let user = {
//         login: login,
//         password: password
//     };
//     let confirmation = confirm(`Подтвердите данные:\nЛогин: ${user.login}\nПароль: ${user.password}`);
//     if (confirmation) {
//         alert("Добро пожаловать!");
//     } else {
//         alert("Регистрация отменена.");
//     }
// }
// registrationValidator();



// неправильное решение 1!!!!!!!!!!!!!

// const login = prompt('Enter login');
// const password = prompt('Enter password');

// const entryInfo = {
//     login,
//     password,
// }

// const confirmLogin = prompt('Confirm your login');
// const confirmPassword = prompt('Confirm your password');

// const confirmInfo = {
//     login,
//     password,
// }

// function validation(entryInfo, confirmInfo) {
//     if (Object.values(entryInfo) === Object.values(confirmInfo)) {
//         alert('Welcome')
//     } else {
//         alert('Wrong. Try again')
//     }
// }

// validation(entryInfo, confirmInfo);

// здесь нужно было заюзать entryInfo.login === confirmInfo.login && entryInfo.password === confirmInfo.password или типа того




// 7; Продвинутый 1
// !!!!!!!!!!!!!!!!
// НО!!!!!!!!!

// здесь подразумевалось юзать объект

// const texts = {
//     0: 'ноль голов',
//     1: 'один гол',
//     2: 'два гола',
//     ...
// }
// и потом получать текст по ключу



// альтернативное решение через массивы (кто-то делал через switch/case)

// function describeScore(score) {
//   const goals = ['ноль', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'];

//   const [team1, team2] = score.split(':');

//   if (team1 > 9 || team2 > 9) {
//       return 'Число забитых голов не должно превышать 9.';
//   }

//   const description = `Команда 1 забила ${goals[team1]} гола, а команда 2 забила ${goals[team2]} голов.`;

//   return description;
// }

// const score = '2:5';
// const resultDescription = describeScore(score);
// console.log(resultDescription);



// Толковое решение 
// const goals = {
//     0: "ноль",
//     1: "один",
//     2: "два",
//     3: "три",
//     4: "четыре",
//     5: "пять",
//     6: "шесть",
//     7: "семь",
//     8: "восемь",
//     9: "девять",
// }

// const score = '3:6';

// const team_1 = Number(score.at(0));
// const team_2 = Number(score.at(-1));

// console.log(`Матч завершился со счетом ${goals[team_1]} ${goals[team_2]}`);



// 8; Продвинутый 2
// let student1 = {
//   name: "Polina",
//   age: 27,
// };

// let student2 = {
//   name: "Polina",
//   age: 27,
// };

// if (JSON.stringify(student1) === JSON.stringify(student2)) {
//   console.log("Объекты равны");
// } else {
//   console.log("Объекты не равны");
// }

// 9; Продвинутый 2

// Опциональная цепочка но можно и так

// const animals = {
//     cat: {
//     name: 'Енчик',
//     age: 3,
//     },
//     dog: {
//     name: 'Орео',
//     age: 2,
//     }
//   }
  
//   if (animals.bird) {
//     console.log(animals.bird.name);
//   } else {
//     console.log("В объекте animals нет птицы.")
//   }
