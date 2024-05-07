let uniqueIdItem = 1;
let todoCount = 0;
let todoCompletedCount = 0;

const getData = () => {
  const todoList = localStorage.getItem("todos");

  return JSON.parse(todoList) || [];
};

const setData = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

const createToDo = ({ id, date, text, isChecked }, receivedId, ul) => {
  const todoItem = document.createElement("li");
  todoItem.classList.add("todo__item");

  if (isChecked) {
    todoItem.classList.add("todo__item_completed");
  }

  todoItem.id = id;
  const uniqueLocalId = receivedId || id.split("-").at(-1);

  todoItem.innerHTML = `
      <div class="todo__wrapper">
          <input type="checkbox" class="todo__completed" id="todo-completed-${uniqueLocalId}" ${
    isChecked ? "checked" : ""
  } />
          <div class="todo__text">${text}</div>
          <div class="todo__action">
              <button class="todo__close btn btn_small btn_red" id="todo-delete-${uniqueLocalId}" >Х</button>
              <span class="todo__date">${date}</span>
          </div>
      </div>
  `;

  ul.append(todoItem);
};

const emptyAll = (ul) => {
  ul.innerHTML = "";
};

export const deleteAll = (ul, allTodosCount, completedTodosCount) => {
  emptyAll(ul);
  setData([]);

  todoCount = 0;
  todoCompletedCount = 0;

  allTodosCount.textContent = todoCount;
  completedTodosCount.textContent = todoCompletedCount;
};

export const deleteLast = (ul, allTodosCount, completedTodosCount) => {
  const lastElement = ul.lastElementChild;

  if (lastElement) {
    ul.removeChild(lastElement);
    --todoCount;
    allTodosCount.textContent = todoCount;

    if (lastElement.classList.contains("todo__item_completed")) {
      --todoCompletedCount;
      completedTodosCount.textContent = todoCompletedCount;
    }

    const todos = getData();
    todos.pop();
    setData(todos);
  }
};

const deleteToDo = (closeBtn, ul, allTodosCount, completedTodosCount) => {
  const id = closeBtn.id;
  const liId = `todo-item-${id.split("-").at(-1)}`;

  const currentLi = ul.querySelector(`#${liId}`);

  --todoCount;
  allTodosCount.textContent = todoCount;

  if (currentLi.classList.contains("todo__item_completed")) {
    --todoCompletedCount;
    completedTodosCount.textContent = todoCompletedCount;
  }
  const todos = getData();

  const filteredTodos = todos.filter((item) => item.id !== liId);

  setData(filteredTodos);

  ul.removeChild(currentLi);
};

export const initTodoList = (ul, allTodosCount, completedTodosCount) => {
  const todoData = getData();

  todoData.forEach((item, index, array) => {
    createToDo(item, null, ul);

    if (index === array.length - 1) {
      const lastNumberId = item.id.split("-").at(-1);

      uniqueIdItem = +lastNumberId + 1;
    }

    ++todoCount;

    if (item.isChecked) {
      ++todoCompletedCount;
    }
  });

  allTodosCount.textContent = todoCount;
  completedTodosCount.textContent = todoCompletedCount;
};

export const handleClickCreate = (createField, ul, allTodosCount) => {
  const text = createField.value;

  if (text) {
    const id = `todo-item-${uniqueIdItem}`;
    const date = new Date().toLocaleString();

    createToDo({ id, date, text, isChecked: false }, uniqueIdItem, ul);

    const todo = {
      id,
      text,
      date,
      isChecked: false,
    };

    const todoData = getData();

    setData(!todoData.length ? [todo] : [...todoData, todo]);

    ++uniqueIdItem;
    ++todoCount;

    createField.value = "";
    allTodosCount.textContent = todoCount;
  }
};

const makeToDoCompleted = (ceckboxElement, ul, completedTodosCount) => {
  const id = ceckboxElement.id;
  const liId = `todo-item-${id.split("-").at(-1)}`;
  const currentLi = ul.querySelector(`#${liId}`);
  const isComplitedItem = currentLi.classList.contains("todo__item_completed");

  if (isComplitedItem) {
    --todoCompletedCount;
  } else {
    ++todoCompletedCount;
  }

  const todoData = getData();

  const updatedtodoData = todoData.map((item) => {
    if (item.id === liId) {
      return {
        ...item,
        isChecked: !isComplitedItem,
      };
    }

    return item;
  });

  setData(updatedtodoData);

  currentLi.classList.toggle("todo__item_completed");
  completedTodosCount.textContent = todoCompletedCount;
};

export const handleInputSearchField = (event, ul) => {
  const searchedText = event.target.value;
  const todoData = getData();

  const searchedToDos = todoData.filter((todo) => {
    return todo.text.includes(searchedText);
  });

  emptyAll(ul);

  searchedToDos.forEach((item) => {
    createToDo(item, null, ul);
  });
};

export const handleClickUl = (
  event,
  ul,
  allTodosCount,
  completedTodosCount
) => {
  const currentElement = event.target;

  if (currentElement.classList.contains("todo__close")) {
    deleteToDo(currentElement, ul, allTodosCount, completedTodosCount);
  }

  if (currentElement.classList.contains("todo__completed")) {
    makeToDoCompleted(currentElement, ul, completedTodosCount);
  }
};

export const handleClickShowAll = (ul) => {
  const todoData = getData();

  emptyAll(ul);

  todoData.forEach((item) => {
    createToDo(item, null, ul);
  });
};

export const handleClickShowComplited = (ul) => {
  const todoData = getData();

  const filterdTodos = todoData.filter((item) => item.isChecked);

  emptyAll(ul);

  filterdTodos.forEach((item) => {
    createToDo(item, null, ul);
  });
};

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json()) // json - преобразование из json, text - преобрахование к тексту, blob - бинарный тип данных
    .then(response => {
        const ul = document.querySelector('.todos');

        response.forEach(item => {
            createToDo({ id: String(item.id), date: item.userId, text: item.body, isChecked: false }, null, ul);
        })
    })