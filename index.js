"use strict";

const createField = document.querySelector(".actions__create-field");
const addButton = document.querySelector(".actions__add");
const deleteAllButton = document.querySelector('.actions__delete-all');
const deleteLastItem = document.querySelector('.actions__delete-last');
const ul = document.querySelector(".todos");

let uniqueIdItem = 1;

const createToDoItem = () => {
  const inputText = createField.value;

  if (inputText) {
    const todoItem = document.createElement("li");
    todoItem.classList.add("todo__item");
    todoItem.id = `todo-item-${uniqueIdItem}`;
    const date = new Date().toLocaleString();

    todoItem.innerHTML = `
            <div class="todo__wrapper">
                <input type="checkbox" class="todo__completed" id="todo-completed-${uniqueIdItem}" />
                <div class="todo__text">${inputText}</div>
                <div class="todo__action">
                    <button class="todo__close btn btn_small btn_red" id="todo-delete-${uniqueIdItem}" >Х</button>
                    <span class="todo__date">${date}</span>
                </div>
            </div>
        `;

    ul.append(todoItem);

    const todo = {
      id: `todo-item-${uniqueIdItem}`,
      text: inputText,
      date,
      isChecked: false,
    };

    const data = localStorage.getItem('todos');

    if (!data) {
      localStorage.setItem('todos', JSON.stringify([todo]));
    } else {
      const result = JSON.parse(data);
      result.push(todo);

      localStorage.setItem('todos', JSON.stringify(result));
    }

    createField.value = "";
    ++uniqueIdItem;
  }
};

const deleteToDo = (event) => {
  const id = event.target.id;
  const liId = `todo-item-${id.split('-').at(-1)}`

  // const currentLi = document.querySelector(`#${liId}`);
  const currentLi = ul.querySelector(`#${liId}`);
  console.log(id, liId);

  // const currentLi = event.target.parentElement.parentElement.parentElement;
  ul.removeChild(currentLi);
}

const makeToDoCompleted = (event) => {
  const id = event.target.id; //todo-completed-1
  const liId = `todo-item-${id.split('-').at(-1)}`; // todo-item-1

  // const currentLi = event.target.parentElement.parentElement;
  const currentLi = ul.querySelector(`#${liId}`);
  currentLi.classList.toggle('todo__item_completed')
}

const deleteAll = () => {
  ul.innerHTML = '';
}

const deleteLast = () => {
  const lastElement = ul.lastElementChild;

  if (lastElement) {
    ul.removeChild(lastElement);
  }
}

ul.addEventListener("click", (event) => {
  if (event.target.classList.contains("todo__close")) {
    deleteToDo(event);
  }

  if (event.target.classList.contains("todo__completed")) {
    makeToDoCompleted(event);
  }
});
addButton.addEventListener("click", createToDoItem);
deleteAllButton.addEventListener('click', deleteAll);
deleteLastItem.addEventListener('click', deleteLast)

const todoList = localStorage.getItem('todos');

if (todoList) {
  const result = JSON.parse(todoList);

  result.forEach(item => {
      // const item = {
    //   id: `todo-item-${uniqueIdItem}`,
    //   text: inputText,
    //   date,
    //   isChecked: false,
    // };
    
    const todoItem = document.createElement("li");
    todoItem.classList.add("todo__item");
    todoItem.id = item.id;
    const date = item.date;

    todoItem.innerHTML = `
      <div class="todo__wrapper">
          <input type="checkbox" class="todo__completed" id="todo-completed-${uniqueIdItem}" />
          <div class="todo__text">${item.text}</div>
          <div class="todo__action">
              <button class="todo__close btn btn_small btn_red" id="todo-delete-${uniqueIdItem}" >Х</button>
              <span class="todo__date">${date}</span>
          </div>
      </div>
  `;

    ul.append(todoItem);
  });
}


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// НОВАЯ ТЕМА 25 ХРАНИЛИЩА
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// const user = localStorage.getItem('userName');

// if (!user) {
//   const login = prompt('Введите ваш логин');
//   localStorage.setItem('userName', login);
  
//   alert(`Добро пожаловать ${login}`);
// } else {
//   alert(`С возвращением ${user}!!!`);
// }

// createField.addEventListener('input', (event) => {
//   localStorage.setItem('text', event.target.value)
//   // console.log(event.target.value);
// })

// const text = localStorage.getItem('text');
// createField.value = text;

// Все методы для localStorage
// localStorage.getItem('key');
// localStorage.setItem('key', 'value');
// localStorage.removeItem('key');
// localStorage.clear();
// localStorage.key(0);
// localStorage.length;

// Все методы для sessionStorage
// sessionStorage.getItem('key');
// sessionStorage.setItem('key', 'value');
// sessionStorage.removeItem('key');
// sessionStorage.clear();
// sessionStorage.key(0);
// sessionStorage.length;

// const localStorageBtn = document.querySelector('.local-storage');

// localStorageBtn.addEventListener('click', () => {
//   const obj = {
//     user: 'Jon',
//     age: 23,
//     isAdmin: true,
//   }

//   const string = JSON.stringify(obj)

//   localStorage.setItem('user', string);


//   // setTimeout(() => {
//   //   const user = localStorage.getItem('user');
//   //   const parsedData = JSON.parse(user);

//   //   console.log(user, typeof user);
//   //   console.log(parsedData, typeof parsedData);
//   // }, 1000)
// })

// window.addEventListener('storage', (event) => {
//   console.log(event)
// });

// window.addEventListener("storage", (event) => {
//   console.log(event);
// });
// const cookie = document.querySelector('.cookie');
// cookie.addEventListener('click', () => {
//   document.cookie="user=admin"
// })