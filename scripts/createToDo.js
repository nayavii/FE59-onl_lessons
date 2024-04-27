import { uniqueIdItem } from "./todo-list";

// ********************
// Функция createToDo будет создавать тег li и добавлять ему
// классы, id, дату, чекбокс и вставлять в конец тега ul
// ********************
export const createToDo = ({ id, date, text, isChecked }, receivedId, ul) => {
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
  получаем;
  числовое;
  значение(
    если,
    receivedId,
    есть,
    то,
    это,
    и,
    есть,
    значение,
    самой,
    переменной,
    uniqueIdItem
  ),
    которое;
  будет;
  для;
  всех;
  id;
  данной;
  тудушки;
  одинаковое, что;
  бы;
  мы;
  в;
  будущем;
  могли;
  динамически;
  формировать;
  id;
  других;
  элементов;
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
