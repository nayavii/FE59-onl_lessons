"use strict";

// События мыши:
// click – происходит, когда кликнули на элемент левой кнопкой мыши (на устройствах с сенсорными экранами оно происходит при касании).
// contextmenu – происходит, когда кликнули на элемент правой кнопкой мыши.
// mouseover / mouseout – когда мышь наводится на / покидает элемент.
// mousedown / mouseup – когда нажали / отжали кнопку мыши на элементе.
// mousemove – при движении мыши.
// События на элементах управления:

// submit – пользователь отправил форму <form>.
// focus – пользователь фокусируется на элементе, например нажимает на <input>.
// Клавиатурные события:

// keydown и keyup – когда пользователь нажимает / отпускает клавишу.
// События документа:

// DOMContentLoaded – когда HTML загружен и обработан, DOM документа полностью построен и доступен.
// CSS events:

// transitionend – когда CSS-анимация завершена.

// options
// Дополнительный объект со свойствами:
// once: если true, тогда обработчик будет автоматически удалён после выполнения.
// capture: фаза, на которой должен сработать обработчик, подробнее об этом будет рассказано в главе Всплытие и погружение. Так исторически сложилось, что options может быть false/true, это то же самое, что {capture: false/true}.
// passive: если true, то указывает, что обработчик никогда не вызовет preventDefault(), подробнее об этом будет рассказано в главе Действия браузера по умолчанию.

const addBtn = document.querySelector(".add");
// addBtn.onclick = () => console.log(event);
addBtn.addEventListener("click", (event) => {
  const createField = document.querySelector(".create-field");
  const text = createField.value;

  const ul = document.querySelector(".list-block");

  const newItem = document.createElement("li");
  newItem.classList.add("todo");

  newItem.innerHTML = `
  <div class="todo__wrapper">
    <input type="checkbox" class="todo__completed" />
    <div class="todo__text">${text}</div>
    <div class="todo__action">
      <button class="todo__close btn btn_small btn_red" onclick="deleteItem(event)">Х</button>
      <span class="todo__date">Date</span>
    </div>
  </div>
  `;

  ul.append(newItem);

  createField.value = "";
});

// element.removeEventListener(event, handler, [options]);

// event.type // Тип события, в данном случае "click".
// event.currentTarget // Элемент, на котором сработал обработчик. Значение – обычно такое же, как и у this, но если обработчик является функцией-стрелкой или при помощи bind привязан другой объект в качестве this, то мы можем получить элемент из event.currentTarget.
// event.clientX / event.clientY // Координаты курсора в момент клика относительно окна, для событий мыши.

const createField = document.querySelector(".create-field");

// createField.addEventListener("input", (event) => {
// console.log(event.target.value);
// });

const closeBtns = document.querySelectorAll(".todo__close");

function deleteItem(event) {
  const ul = document.querySelector(".list-block");

  const currentLi = event.target.parentElement.parentElement.parentElement;
  console.log(ul, currentLi);
  console.log(event.target.parentElement.parentElement.parentElement);

  ul.removeChild(currentLi);
}

closeBtns.forEach((btn) => {
  btn.addEventListener("click", deleteItem);
  // btn.addEventListener("click", (event) => {
  //   const ul = document.querySelector(".list-block");

  //   const currentLi = event.target.parentElement.parentElement.parentElement;

  //   console.log(event.target.parentElement.parentElement.parentElement);

  //   ul.removeChild(currentLi);
  // });
});

const completedInput = document.querySelectorAll(".todo__completed");

completedInput.forEach((input) => {
  input.addEventListener("click", (event) => {
    const li = event.target.parentElement.parentElement;

    li.classList.toggle("completed");
  });
});
