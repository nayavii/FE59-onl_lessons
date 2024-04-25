// import {testImportName, testImportage, getName} from './scripts/helper.js';
// import superImportantFuction from './scripts/helper.js';
// import * as helper from './scripts/helper.js';

// * === {
//   testImportName,
//   testImportage,
//   getName,
// }

// const helper = {
//   testImportName,
//   testImportage,
//   getName,
// }

// helper.getName();


const createField = document.querySelector(".actions__create-field");
const searchField = document.querySelector('.search__text-field');
const addButton = document.querySelector(".actions__add");
const deleteAllButton = document.querySelector('.actions__delete-all');
const deleteLastItem = document.querySelector('.actions__delete-last');
const ul = document.querySelector(".todos");

let uniqueIdItem = 1;

const createToDo = ({id, date, text, isChecked}, uniqueIdItem) => {
  // const {id, date, text, isChecked} = item;
  const todoItem = document.createElement("li");
    todoItem.classList.add("todo__item");
    todoItem.id = id; // todo-item-на первой итерации
    const uniqueLocalId = uniqueIdItem || id.split('-').at(-1)

    todoItem.innerHTML = `
      <div class="todo__wrapper">
          <input type="checkbox" class="todo__completed" id="todo-completed-${uniqueLocalId}" />
          <div class="todo__text">${text}</div>
          <div class="todo__action">
              <button class="todo__close btn btn_small btn_red" id="todo-delete-${uniqueLocalId}" >Х</button>
              <span class="todo__date">${date}</span>
          </div>
      </div>
  `;

    ul.append(todoItem);
}

const handleClickCreate = () => {
  const text = createField.value;

  if (text) {
    const id = `todo-item-${uniqueIdItem}`;
    const date = new Date().toLocaleString();

    createToDo({id, date, text, isChecked: false}, uniqueIdItem);
    
    const todo = {
      id,
      text,
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

  const currentLi = ul.querySelector(`#${liId}`);
  console.log(id, liId);

  ul.removeChild(currentLi);
}

const makeToDoCompleted = (event) => {
  const id = event.target.id;
  const liId = `todo-item-${id.split('-').at(-1)}`;

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

const initTodoList = () => {
  const todoList = localStorage.getItem('todos');

  if (todoList) {
    const result = JSON.parse(todoList);
  
    result.forEach(item => {
      createToDo(item)
    });
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
addButton.addEventListener("click", handleClickCreate);
deleteAllButton.addEventListener('click', deleteAll);
deleteLastItem.addEventListener('click', deleteLast)

initTodoList();

searchField.addEventListener('input', (event) => {
  const searchedText = event.target.value;

  const localStorageData = localStorage.getItem('todos');
  const todos = JSON.parse(localStorageData);

  // const searchedToDos = todos.filter(({text}) => { // пример деструктуризации где мы вытянули сразу текст
  //   return text.includes(searchedText);
  // })

  const searchedToDos = todos.filter(todo => {
    return todo.text.includes(searchedText);
  })

  console.log(todos, searchedToDos);

  ul.innerHTML = '';

  searchedToDos.forEach(item => {
    // createToDo(item.id, item.date. item.text, item.isChecked);
    createToDo(item);
  });
});
