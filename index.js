"use strict";

// const DNC = {
//     'https://www.onliner.by/' : '123.124.5436.65765.856',
//     '24gp.by': 'http://178.124.154.210:21310/',
// }

// const url = 'https://jsonplaceholder.typicode.com/posts'; // путь к списоку всех постов он же ЭНДПОИНТ

// МЕТОДЫ ЗАПРОСОВ
// 'GET' - просто получить данные
// 'POST' - отправка данных на сервер
// 'DELETE' - удалть данные
// 'PUT' - отредактировать данные
// 'PATCH' - изменить конкретное значение в данных (более редко)

// CRUD - базовые функции, используемые при работе с базами данных[1]: создание (англ. create), чтение (read), модификация (update), удаление (delete)


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// XMLHttpRequest
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// 1 Создать новый экземпляр XMLHttpRequest - он же по сути оЪект
// const xhr = new XMLHttpRequest(); // object

// // 2 сформировать запрос
// xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');

// // 3 Отправка запроса
// xhr.send();

// // 4 Функция, которая будет выполнятся по окончании запроса
// xhr.onload = () => {
//     if (xhr.status === 200) {
//         console.log('Мы получили данные', xhr.response);
//     } else {
//         console.log('Что-то пошло не так');
//     }
// }

// xhr.onerror = () => {
//     console.log('Запрос даже не дошел до сервера');
// }

// xhr.onprogress = () => {
//     // будет выполняться по результатм загрузки
// }

// xhr.setRequestHeader('Content-Type', 'application/json;charset=utf-8')

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// JSON
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// [], {}, string, number, boolean, null

// const obj = {
//     "name": 'Jon',
// }

// Сериализация данных

// JSON.stringify() - преобразовать в JSON
// JSON.parse() - преобразовать из JSON

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Коды состояния ответа HTTP
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// Информационные ответы (100 – 199)
// Успешные ответы (200 – 299)
// Сообщения о перенаправлении (300 – 399)
// Ошибки клиента (400 – 499)
// Ошибки сервера (500 – 599)

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// fetch
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// [1, 3]
// .map(item => item + 1)
// .filter(item => item)
// .every()

// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(response => response.json()) // json - преобразование из json, text - преобрахование к тексту, blob - бинарный тип данных
// .then(response => console.log(response))

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json()) // json - преобразование из json, text - преобрахование к тексту, blob - бинарный тип данных
//     .then(response => {
//         console.log(response)
//     })


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// fetch POST
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// const addBtn = document.querySelector('.actions__add');

// addBtn.addEventListener('click', () => {
// const obj = {
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
// };

// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: JSON.stringify(obj),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     },
// })
//     .then((response) => response.json())
//     .then((json) => console.log(json));
// })

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// const login = document.querySelector('.login');
// const pass = document.querySelector('.pass');
// const submit = document.querySelector('.submit');

// submit.addEventListener('click', () => {
//     const loginText = login.value;
//     const passtext = pass.value;

//     //FormData
//     // const data = new FormData();
//     // data.append('title', loginText);
//     // data.append('body', passtext);
//     //headers ('Content-type': 'application/json; charset=UTF-8',) для FormData не нужен

//     //JSON
//     const data = JSON.stringify({
//         title: loginText,
//         body: passtext,
//     });

//     if (loginText && passtext) {
//         fetch('https://jsonplaceholder.typicode.com/posts', {
//             method: 'POST',
//             body: data,
//             headers: {
//                 'Content-type': 'application/json; charset=UTF-8',
//             },
//         })
//             .then((response) => response.json())
//             .then((json) => console.log(json));
//     }
// })


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// fetch ЗАГРУЗКА ИЗОБРАЖЕНИЙ
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// const showAva = document.querySelector('.show-ava');

// showAva.addEventListener('click', () => {
//     fetch('https://avatars.githubusercontent.com/u/71278131?v=4')
//         .then((response) => response.blob())
//         .then((blobData) => {
//             const img = document.createElement('img');

//             document.body.append(img);

//             img.src = URL.createObjectURL(blobData);
//         });
// })

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Promise
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// fetch('urlForUser')
//     .then(res => res.json())
//     .then(res => {
//     })