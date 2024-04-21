// нэйминг переменных

// стилизация элементов через классы по БЭМу (блок, элемент, модификатор)

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

// Правила форматирования стидей
// https://learn.javascript.ru/css-format

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//Для обработки клика на чекбокс/кнопку достаточно создать только один обработчик.

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//Делегирование событий для новых элементов

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// Если нужно добавить новые стили то лучше всего это делать через классы, а не через инлайновые стили (element.style.background = 'red')
//т.е. при клике не менять стили многих элементов, а поменять один класс, который переопределит все что нужно
