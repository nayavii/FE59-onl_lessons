// нэйминг переменных

// стилизация элементов через классы по БЭМу (блок, элемент, модификатор)

// todo__button--show-completed
// banner_bottom__block__container-input
{
  /* <section class="banner">
  <div class="banner__top">
    <div class="banner__top__module">
        <button class="banner__top__module-button">Delete All</button>
        <button class="banner__top__module-button margin-button">Delete Last</button>
        <input class="banner__top__module-input" type="text" id="name" placeholder="Enter todo ...">
        <button class="banner__top__module-button">Add</button>
    </div>
    <div class="banner__bottom__module">
        <p class="banner__bottom__module-cikle">All:2</p>
        <p class="banner__bottom__module-cikle">Complited:1</p>
        <button class="banner__bottom__module-button">Show All</button>
        <button class="banner__bottom__module-button margin-button">Show Completed</button>
        <input class="banner__bottom__module-input" type="text" id="name" placeholder="Search ...">
    </div>
  </div>   
  <div class="banner__bottom">
      <div class="banner__bottom__block__container">
          <input class="banner_bottom__block__container-input" type="checkbox">
          <p class="banner__bottom__block__container-text">Todo text</p>
          <button class="banner__bottom__block__container-button">x</button>
          <p class="banner__bottom__block__container-textDate">Date</p>
      </div>
      <div class="banner__bottom__block__container">
          <input class="banner_bottom__block__container-input" type="checkbox">
          <p class="banner__bottom__block__container-text">Todo text</p>
          <button class="banner__bottom__block__container-button">x</button>
          <p class="banner__bottom__block__container-textDate">Date</p>
      </div>
  </div>
  </section> */
}

// блок
// .header
// .todo-list
// элемент
// .header__logo
// .todo-list__item
// модификатор
// .header__item_black
// .todo-list__item_red

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// .item input[type=checkbox]
// .item .date-btn

// Такие селекторы без реальной неообходимости лучше не юзать
// так как они увеличивают специфичность и их потом может быть тяжелее переопределять
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Говорим инлайновым стиял - НЕТ! 
// todo.style.display = 'flex';

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// DOMContentLoaded - событие 
// браузер полностью загрузил HTML, было построено DOM-дерево, но внешние ресурсы, такие как картинки <img> и стили, могут быть ещё не загружены
// Событие DOMContentLoaded – DOM готов, так что обработчик может искать DOM-узлы и инициализировать интерфейс

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Правила форматирования стидей
// https://learn.javascript.ru/css-format

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// Переопределять лишний раз не нужно и все подряд тоже, чистота кода
// *{
//     padding: 0;
//     margin: 0;
//     box-sizing: border-box;
// text-decoration: none;
// list-style-type: none;
// }

// a {
//     text-decoration: none;
//     color: inherit;
// }

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//Для обработки клика на чекбокс/кнопку достаточно создать только один обработчик.

// два и более раз
// ul.addEventListener('click', (event) => {

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//Делегирование событий для новых элементов

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// Если нужно добавить новые стили то лучше всего это делать через классы, а не через инлайновые стили (element.style.background = 'red')
//т.е. при клике не менять стили многих элементов, а поменять один класс, который переопределит все что нужно

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// удаление всех элементов 

// const todos = document.querySelectorAll('.todo__item');
// if (todos.length > 0) {
//     todos[todos.length - 1].remove();
// }

// или
// while (ul.firstChild) {
//     ul.removeChild(ul.firstChild);
// }

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Даты 
// const date = new Date().toISOString().slice(0,10).split('-').reverse().join('.'); // 23.04.2024
// то же самое new Date().toLocaleDateString().replaceAll('/', '.'); // 23.04.2024

// был такой варик 
// const currentDate = new Date();
// const year = currentDate.getFullYear();
// const month = currentDate.getMonth();
// const day = currentDate.getDate();
// const fullDate = `${day}.${month}.${year}`;