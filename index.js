// импортирую функции из другого модуля, который находится по относительному пути "./scripts/todo-list.js"
import {
  deleteAll,
  deleteLast,
  initTodoList,
  handleClickCreate,
  handleClickUl,
  handleInputSearchField,
  handleClickShowAll,
  handleClickShowComplited,
} from "./scripts/todo-list.js";

// ищу все нужные элементы на странице (кнопки, инпуты и т.д.), с которыми будем работать
const createField = document.querySelector(".actions__create-field");
const searchField = document.querySelector(".search__text-field");
const addButton = document.querySelector(".actions__add");
const deleteAllButton = document.querySelector(".actions__delete-all");
const deleteLastItemButton = document.querySelector(".actions__delete-last");
const showAllButton = document.querySelector(".search__show-all");
const showComplitedButton = document.querySelector(".search__show-completed");
const allTodosCount = document.querySelector(".search__all-value");
const completedTodosCount = document.querySelector(".search__completed-value");
const ul = document.querySelector(".todos");

// добавляю обработчики событий на элементы (кнопки, инпуты и т.д.) и передаю в качестве функции колбэка
// импортированные функции в которые передаю нужные параметры (event или сами элементы, с которыми нужно работать)
ul.addEventListener("click", (event) =>
  handleClickUl(event, ul, allTodosCount, completedTodosCount)
);
addButton.addEventListener("click", () =>
  handleClickCreate(createField, ul, allTodosCount)
);
deleteAllButton.addEventListener("click", () =>
  deleteAll(ul, allTodosCount, completedTodosCount)
);
deleteLastItemButton.addEventListener("click", () =>
  deleteLast(ul, allTodosCount, completedTodosCount)
);
searchField.addEventListener("input", (event) =>
  handleInputSearchField(event, ul)
);
showAllButton.addEventListener("click", () => handleClickShowAll(ul));
showComplitedButton.addEventListener("click", () =>
  handleClickShowComplited(ul)
);

// запускаю/вызываю функцию, которая динамически создаст тудушки при первом посещении страницы
// или после перезагрузки влкадки/браузера/компа
initTodoList(ul, allTodosCount, completedTodosCount);
