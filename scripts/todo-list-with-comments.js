// уникальный числовой идентификатор, который будет добавлен в конец id для li (самой тудушки),
// чекбокса и кнопки удаления тудушки
let uniqueIdItem = 1;
// количество тудушек (всего) - будем добавлять 1 при создании и отнимать 1 при удалении
let todoCount = 0;
// количесвто тудушек которые complited - будем добавлять 1 при чекбокса в положение checked и отнимать 1 при снятии checked
let todoCompletedCount = 0;

// ********************
// Функция getData будет получать данные из локального хранилища и
// преобразовывать из строки (JSON) в массив с объектами
// и возвращать данный массив
// ********************
const getData = () => {
  // может содержать массив или null так как при первом посещении сайта
  // в локальном хранилище еще ничего не зраниться и при попытке получить
  // что-нить по ключу 'todos' будем получать null
  const todoList = localStorage.getItem("todos");

  // всегда будет возвращать массив, даже если в todoList был null
  return JSON.parse(todoList) || [];
};

// ********************
// Функция setData будет получть в качестве аргумента массив,
// преобразовывать его в строку (JSON) и помещать в локальное хранилище
// ********************
const setData = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

// ********************
// Функция createToDo будет создавать тег li и добавлять ему
// классы, id, дату, чекбокс и вставлять в конец тега ul
// ********************
const createToDo = ({ id, date, text, isChecked }, receivedId, ul) => {
  // создаем тег li и добавлем ему класс
  const todoItem = document.createElement("li");
  todoItem.classList.add("todo__item");

  if (isChecked) {
    // если в эту функцию придет объект с полем isChecked со значениме true
    // (т.е. эту тудушку отметили как complited) то добавляем класс стилизации как complited
    todoItem.classList.add("todo__item_completed");
  }

  // добавлем id нашему тегу li
  todoItem.id = id;
  // получаем числовое значение (если receivedId есть то это и есть значение самой переменной uniqueIdItem),
  // которое будет для всех id данной тудушки одинаковое,
  // что бы мы в будущем могли динамически формировать id других элементов
  const uniqueLocalId = receivedId || id.split("-").at(-1);

  // добавлем в todoItem верстку со всеми id и состоянием checked (если нужно)
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
  // и вставляем в конец тега ul
  ul.append(todoItem);
};

// ********************
// Функция emptyAll будет очищать содержимое тега ul в верстке при этом не меняя данные в локальном хранилище
// ********************
const emptyAll = (ul) => {
  ul.innerHTML = "";
};

// ********************
// Функция deleteAll будет очищать содержимое тега ul, удалять все данные в локальном хранилище,
// записываю в локальное хранилище пустой массив
// ********************
export const deleteAll = (ul, allTodosCount, completedTodosCount) => {
  // очищаем содержимое тега ul в верстке
  emptyAll(ul);
  // удаляем все данные в локальном хранилище, записывая в локальное хранилище пустой массив
  setData([]);

  // обнуляем счетчкики всех тудушек и выполненных тудушек
  todoCount = 0;
  todoCompletedCount = 0;

  // помещаем в верстку обнуленные значения счетчиков
  allTodosCount.textContent = todoCount;
  completedTodosCount.textContent = todoCompletedCount;
};

// ********************
// Функция deleteLast будет удалять последнюю тудушку
// ********************
export const deleteLast = (ul, allTodosCount, completedTodosCount) => {
  // находим последнюю тудушку
  const lastElement = ul.lastElementChild;

  if (lastElement) {
    // если тудушка есть то удаляем ее из верстки
    ul.removeChild(lastElement);
    // отниамем 1 от счетчика всех тудушек и помещаем результат в верстку
    --todoCount;
    allTodosCount.textContent = todoCount;

    // если удаляемая тудушка была выполнена, то еще отниамем 1 от счетчика всех ВЫПОЛНЕННЫХ тудушек и помещаем результат в верстку
    if (lastElement.classList.contains("todo__item_completed")) {
      --todoCompletedCount;
      completedTodosCount.textContent = todoCompletedCount;
    }

    // получаем список всех тудушек из локального хранилища,
    const todos = getData();
    // удаляем последний элемент в полученном массиве
    todos.pop();
    // записываем новый массив без последнего элемента в локальное хранилище
    setData(todos);
  }
};

// ********************
// Функция deleteToDo будет удалять тудушку, на крестик которой нажал пользователь
// ********************
const deleteToDo = (closeBtn, ul, allTodosCount, completedTodosCount) => {
  // получаем id кнопки, на которую кликнул пользователь, например, todo-delete-1
  const id = closeBtn.id;
  // формируем id тега li на основе начальной неизменяемй части всех id тегов li
  // и числового значения которое будет одинаковое в рамках одной тудушки
  const liId = `todo-item-${id.split("-").at(-1)}`;

  // ищем в тэге ul данную лишку по сформированному id
  const currentLi = ul.querySelector(`#${liId}`);

  // отниамем 1 от счетчика всех тудушек и помещаем результат в верстку
  --todoCount;
  allTodosCount.textContent = todoCount;

  // если удаляемая тудушка была выполнена, то еще отниамем 1 от счетчика всех ВЫПОЛНЕННЫХ тудушек и помещаем результат в верстку
  if (currentLi.classList.contains("todo__item_completed")) {
    --todoCompletedCount;
    completedTodosCount.textContent = todoCompletedCount;
  }
  // получаем список всех тудушек из локального хранилища,
  const todos = getData();

  // фильтруем этот список и убираем тудушку, на крестик которой нажал пользователь
  const filteredTodos = todos.filter((item) => item.id !== liId);
  // записываем новый массив без тудушки, на крестик которой нажал пользователь в локальное хранилище
  setData(filteredTodos);

  // удалем тег li (нашу тудушк) со всем содержимым из верстеки
  ul.removeChild(currentLi);
};

// ********************
// Функция initTodoList будет запускаться/вызываться только один раз и будет динамически создавать тудушки
// при первом посещении страницы или после перезагрузки влкадки/браузера/компа
// ********************
export const initTodoList = (ul, allTodosCount, completedTodosCount) => {
  // получаем список всех тудушек из локального хранилища,
  const todoData = getData();

  // пробеагем по списку циклом
  todoData.forEach((item, index, array) => {
    // на каждой итерации цикла создаем новую тудушку
    createToDo(item, null, ul);

    if (index === array.length - 1) {
      // если это последний элемент в списке то на его основе получем его id, вытягиваем из него числовое значение
      const lastNumberId = item.id.split("-").at(-1);

      // записываем данное числовое значение в нашу уникальный идентификатор,
      // для того что бы отсчет начинался не с 1, а с последней созданной тудушки
      uniqueIdItem = +lastNumberId + 1;
    }

    // добавляем 1 к счетчику всех тудушек и помещаем результат в верстку
    ++todoCount;
    allTodosCount.textContent = todoCount;

    // если создаваемая тудушка была выполнена, то еще добавляем 1 к счетчику всех ВЫПОЛНЕННЫХ тудушек и помещаем результат в верстку
    if (item.isChecked) {
      ++todoCompletedCount;
      completedTodosCount.textContent = todoCompletedCount;
    }
  });
};

// ********************
// Функция handleClickCreate будет срабатывать каждый раз, когда пользователь будет нажимать на кнопку Add (добавить новую тудушку)
// ********************
export const handleClickCreate = (createField, ul, allTodosCount) => {
  // получаем текст из инпута, введенный пользователем
  const text = createField.value;

  if (text) {
    // если текст ввели то формируем новый id на основе текущего уникальной числового идентификатора
    const id = `todo-item-${uniqueIdItem}`;
    // соднаем текущую дату и время
    const date = new Date().toLocaleString();

    // создаем новую тудушку вызовом функции createToDo
    createToDo({ id, date, text, isChecked: false }, uniqueIdItem, ul);

    // формируем объект todo для помещения в локальное хранилище
    const todo = {
      id,
      text,
      date,
      isChecked: false,
    };

    // получаем список всех тудушек из локального хранилища,
    const todoData = getData();
    // записываем новый массив в локальное хранилище
    // если в локальном хранилище ничего не было до этого (первое посещение пользователм нашего сайта) то записываем массив с одной тудушкой
    // если же что-то было то записываем в массив все что было раньше и в конец добавляем еще и нашу тудушку
    setData(!todoData.length ? [todo] : [...todoData, todo]);

    // добавляем 1 к уникальному идентификатору на будущее
    ++uniqueIdItem;
    // добавлем 1 к счетчику всех тудушек
    ++todoCount;

    // обнуляем значение нашего инпута
    createField.value = "";
    // записываем значение счетчика всех тудушек в верстку
    allTodosCount.textContent = todoCount;
  }
};

// ********************
// Функция makeToDoCompleted делает нашу тудушку выделенной/выполненной/complited по нажатию на чекбокс
// ********************
const makeToDoCompleted = (ceckboxElement, ul, completedTodosCount) => {
  // получаем id чекбокса, на который кликнул пользователь, например, todo-completed-1
  const id = ceckboxElement.id;
  // формируем id тега li на основе начальной неизменяемй части всех id тегов li
  // и числового значения которое будет одинаковое в рамках одной тудушки
  const liId = `todo-item-${id.split("-").at(-1)}`;
  // ищем в тэге ul данную лишку по сформированному id
  const currentLi = ul.querySelector(`#${liId}`);
  // записываем в isComplitedItem есть ли у тега li класс, отвечающий за выделение (выполнена ли она или нет) - true или false
  const isComplitedItem = currentLi.classList.contains("todo__item_completed");

  // если тудушка была выполнена, то еще отниамем 1 от счетчика всех ВЫПОЛНЕННЫХ тудушек, если нет - то добавляем 1
  if (isComplitedItem) {
    --todoCompletedCount;
  } else {
    ++todoCompletedCount;
  }
  // получаем список всех тудушек из локального хранилища
  const todoData = getData();

  // создаем новый список тудушено но в той, на чекбокс котороый кликнули - изменяем поле isChecked на противоположное
  const updatedtodoData = todoData.map((item) => {
    if (item.id === liId) {
      return {
        ...item,
        isChecked: !isComplitedItem,
      };
    }

    return item;
  });
  // записываем новый список в локальное хранилище
  setData(updatedtodoData);

  // добавляем класс выделения в верстку
  currentLi.classList.toggle("todo__item_completed");
  // записываем значение счетчика всех выполненных тудушек в верстку
  completedTodosCount.textContent = todoCompletedCount;
};

// ********************
// Функция handleInputSearchField ищет среди созданных тудушек подходящее значение по тексту
// ********************
export const handleInputSearchField = (event, ul) => {
  // определяем текст введенный в поиск
  const searchedText = event.target.value;
  // получаем список всех тудушек из локального хранилища
  const todoData = getData();
  // формируем новый массив тудушек в которых в тексте встречается поисковый текст
  const searchedToDos = todoData.filter((todo) => {
    return todo.text.includes(searchedText);
  });

  // очищаем в верстке список всех тудушек
  emptyAll(ul);

  // формируем в верстве новый списко тудушек на основе рещультатов поиска
  searchedToDos.forEach((item) => {
    createToDo(item, null, ul);
  });
};

// ********************
// Функция handleClickUl общий обработчик событий для всего списка (делегирование событий)
// для удаления конкретных тудушек и выделения как выполненных
// ********************
export const handleClickUl = (
  event,
  ul,
  allTodosCount,
  completedTodosCount
) => {
  // получаем конкретный элемент на который кликнули (или крестик для удаления или чекбокс для выделения)
  const currentElement = event.target;

  if (currentElement.classList.contains("todo__close")) {
    // если нажали на крестик - то выполняем функцию удаления
    deleteToDo(currentElement, ul, allTodosCount, completedTodosCount);
  }

  if (currentElement.classList.contains("todo__completed")) {
    // если нажали на чекбокс - то выполняем функцию выделения как выполненной
    makeToDoCompleted(currentElement, ul, completedTodosCount);
  }
};

// ********************
// Функция handleClickShowAll показывает в верстке все созданные на данный момент тудушки
// ********************
export const handleClickShowAll = (ul) => {
  // получаем список всех тудушек из локального хранилища
  const todoData = getData();
  // очищаем в верстке список всех тудушек
  emptyAll(ul);

  // пробеагем по списку циклом и на каждой итерации цикла создаем новую тудушку
  todoData.forEach((item) => {
    createToDo(item, null, ul);
  });
};

// ********************
// Функция handleClickShowComplited показывает все имеющиеся тудушки, которые выделены/выполнены/complited
// ********************
export const handleClickShowComplited = (ul) => {
  // получаем список всех тудушек из локального хранилища
  const todoData = getData();

  // формируем новый массив тудушек в которых в isChecked стоит true, т.е. выполнены
  const filterdTodos = todoData.filter((item) => item.isChecked);
  // очищаем в верстке список всех тудушек
  emptyAll(ul);
  // формируем в верстве новый списко тудушек на основе рещультатов поиска
  filterdTodos.forEach((item) => {
    createToDo(item, null, ul);
  });
};
