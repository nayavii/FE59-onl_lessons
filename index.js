"use strict";

// 1. Чем отличается margin от padding?
// 2. Как ведут себя margin у двух элементов по соседству?
// 3. Какие подходы в верстке вам известны (float, flex, grid, etc.)?
// 4. Чем отличаются position static, absolute, relative, fixed?
// 5. Как отпозиционировать один элемент относительно другого?
// 6. Какие вы знаете псевдоэлементы? Где их используют?
// 7. Расскажите о принципах Responsive верстки
// 8. Расскажите способы центрирования элементов
// 9. Что такое БЭМ?
// 10. Какие есть принципы семантической верстки?

// 1. В чем разница между ключевыми словами «var», «let» и «const»?
// «var» - глобальная область видимости и изменяемая
// «let» - локальнавя область видимости и изменяемая
// «const» - локальнавя область видимости и НЕизменяемая

// 2. В чем разница между null и undefined?
// let a; // undefined
// let b = null;

// function getName(name) {
//   // undefined
//   console.log(name);
// }

// getName();

// 3.
// 4. Назовите методы массивов и расскажите для чего они нужны.
// const a = [1, 2, 5];
// const b = a.find((item) => item === 74); // undefined

// 5. В чем разница между операторами "==" и "==="?
// "1" == 1; // true
// "1" === 1; // false

// 6. Почему результатом сравнения двух похожих объектов является false?
// const a = {
//   name: "jon",
// };

// const b = {
//   name: "jon",
// };

// a === b; // false

// const c = b;

// c === b; // true

// c.name = "Boris";

// console.log(c);
// console.log(b);

// const d = { ...a };

// const b = structuredClone(d);

// 7. Как определить наличие свойства в объекте?
// 8. Что такое DOM?
// 9. Что такое область видимости (Scope)?

// const a = 5;

// if (1 === 7) {
//   const a = 34;
// }

// console.log(a);

// 10. Что такое замыкание (Closures)?

const a = 5;

function test() {
  const a = 17;

  function newTest() {
    console.log(a);
  }

  newTest();
}

// - способность функции запоминать свою область видимости и обращаться к ней

// 11. Какая разница между декларацией функции (function declaration) и
// функциональным выражением (function expression)?

// function test() {
// }

// const newTest = () => {}

// 12. Что такое стрелочные функции (Arrow Functions)?

// [].forEach(() => {});

// 13. Для чего предназначены методы setTimeout и setInterval

// 14. Что такое AJAX?

// fetch
// XMLHttpRequest - он может отслеживать прогресс загрузки

// 15. Что такое рекурсия?

// 16. Что такое классы (Classes)?

class AbstrUser {
  constructor(city) {
    this.city = city;
  }

  getName() {
    // ...AbstrUser.
    console.log("jekkk");
  }
  // ...AbstrUser.
}

class User extends AbstrUser {
  constructor(name, age) {
    super(); //=== constructor(city)
    this.name = name;
    this.age = age;
  }

  get() {
    // this.name - занчение переданной name в текущем экземпляре
    // this.age
  }

  set() {
    this.get();
  }

  getName() {
    return Math.abs(15, 16);
  }
}

// const newUser = new User("name", 40);

// const a = (name, age) => {
//   // ...
// };

// a("name", 40);

// 17. Расскажите про основные принципы ООП

// 1. Получить средний возраст пользователей.
// 2. Отсортировать массив по возрасту от большего к меньшему.
// 3. Написать функцию, которая бы отвечала булевым значением на вопрос: есть ли
// пользователь соответствующего возраста.
// Например, есть ли пользователь, которому 22 года? Ответ должен быть: true

const users = [
  {
    id: 1,
    username: "Michael Lawson",
    age: 22,
  },
  {
    id: 2,
    username: "Tom Spot",
    age: 32,
  },
  {
    id: 3,
    username: "Kate Ford",
    age: 18,
  },
];

const findAge = (users) => {
  const sumAge = users.reduce((sum, user) => sum + user.age, 0);

  const averageAge = sumAge / users.length;
  return averageAge;
};

const sortAge = (array) => {
  return array.sort((currentEl, nextEl) => currentEl.age - nextEl.age);
};
console.log(sortAge(users));

function ifUser(users, age) {
  return users.some((item) => item.age === age);
}
