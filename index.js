"use strict";

// const addButton = document.querySelector('.actions__add');

// // const addButton = {
// //     style,
// //     classList,
// //     onclick,
// // }

// addButton.onclick = () => { // можно только один обработчик на один элемент
//     // ...что-то делаем
//     // console.log('Вы нажали на кнопку');
// }

// addButton.addEventListener('click', (event) => { // можно вешать сколько хотим таких обработчиков событий
//     // ...что-то делаем
//     console.log(event);
//     console.log('Вы нажали на кнопку');
// }); //{once, cature, passive} - третий необязательный аргумент

// once - выполнение функции один раз
// cature - замена всплытия на погружение

// addButton.addEventListener('click', (event) => {
//     console.log('2');
// }) //{options} - третий необязательный аргумент

// СОБЫТИЯ:
// click - нажатие мышкой на элемент
// mouseover - наведение курсора мышки
// mouseout - убираем курсор мышкиъ
// mousemove - движение мыши
// keydown - нажатие на какую-нить кнопку на клаве
// keypress - удержание кнопки
// keyup - отпускание кнопки после удержания
// input - ввод текста в инпуте
// submit - отправка формы га сервак
// focus - попадание в фокус элемента
// scroll - срабатывает при скролинге

// const create = document.querySelector('.actions__create-field');

// create.addEventListener('input', (event) => {
//     // event.target === create
//     console.log(event.target.value);
// })

// // create.addEventListener('mouseover', (event) => {
// //     // event.target === create
// //     console.log('Мы навели курсор');
// // })

// create.addEventListener('mouseout', (event) => {
//     // event.target === create
//     console.log('Мы ублрали курсор');
// })

// const addButton = document.querySelector('.actions__add');

// addButton.addEventListener('click', (event) => {
//     // console.log(event);
//     console.log('Вы нажали на кнопку');
// }, {once: true}); //{once, cature, passive} - третий необязательный аргумент

// addButton.removeEventListener('click', () => {}) // удалить обработчик событий

// const addButton = document.querySelector('.actions__add');

// addButton.addEventListener('click', (event) => {

// });

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const addButton = document.querySelector(".actions__add");
const ul = document.querySelector(".todos");

addButton.addEventListener("click", () => {
  const createField = document.querySelector(".actions__create-field");
  const inputText = createField.value; // ''

  if (inputText) {
    const todoItem = document.createElement("li");
    todoItem.classList.add("todo__item");

    // <button class="todo__close btn btn_small btn_red" onclick="deleteToDo(event)">Х</button>
    todoItem.innerHTML = `
            <div class="todo__wrapper">
                <input type="checkbox" class="todo__completed" />
                <div class="todo__text">${inputText}</div>
                <div class="todo__action">
                    <button class="todo__close btn btn_small btn_red">Х</button>
                    <span class="todo__date">Date</span>
                </div>
            </div>
        `;

    ul.append(todoItem);

    createField.value = "";
  }
});

const closeBtns = document.querySelectorAll(".todo__close"); // []

function deleteToDo(event) {
  // event.target - это сам элемент на который мы кликнули
  const currentLi = event.target.parentElement.parentElement.parentElement;

  ul.removeChild(currentLi);
}

// closeBtns.forEach(item => {
//     item.addEventListener('click', deleteToDo)
// })

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// ВСПЛЫТИЕ И ПОГРУЖЕНИЕ

// const todoList = document.querySelector('.todo-list');
// const search = document.querySelector('.search');
// const showCompletedBtn = document.querySelector('.search__show-completed');

// todoList.addEventListener('click', (event) => {
//     console.log('click on todoList');
// });

// search.addEventListener('click', (event) => {
//     console.log('click on search');
// });

// showCompletedBtn.addEventListener('click', (event) => {
//     console.log('click on showCompletedBtn');

//     event.stopPropagation(); // запрет всплытия и погружения
// });

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// ДЕЛЕГИРОВАНИЕ СОБЫТИЙ

ul.addEventListener("click", (event) => {
  console.log(event.target);
  if (event.target.classList.contains("todo__close")) {
    deleteToDo(event);
    // const currentLi = event.target.parentElement.parentElement.parentElement;
    // ul.removeChild(currentLi);
  }
});

new Date();
