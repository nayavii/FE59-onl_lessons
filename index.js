"use strict";

// window - браузерное окружение:

// 1
// DOM - document object model
// document

// 2. BOM - browser object model
// alert
// prompt
// confirm
// location - показывает где мы находимся и путь и менять его
// XMLHttpRequest

// const isRedirect = confirm('Хотите ли вы посетить онлайнер?')

// if (isRedirect) {
//   location.href = 'https://www.onliner.by/';
// }

// navigator - информация о компе
// screen - показывает инфу о монике
// setTimeout - выполнение кода через какое-то время

// console.log(screen);

// setTimeout(() => {
//   // console.log('setTimeout');
  // document.body.style.background = 'green';
// }, 5000);

// setInterval

// 3. JS
// function
// Object
// Array

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// ПОИСК ЭЛЕМЕНТОВ НА СТРАНИЦЕ

// const list = document.getElementById('list'); // сам элемент или null
// const header = document.getElementsByTagName('div'); // []
// const wrapper = document.getElementsByClassName('wrapper');
// const name = document.getElementsByName('This is navigation!!!!');

// console.log(list);
// console.log(header);

// document.querySelector() // сам элемент или null
// document.querySelectorAll() // []

// const a = document.querySelector('header') // тег header
// const a = document.querySelector('.header') // класс header
// const a = document.querySelector('#header') // id header
// const a = document.querySelector('[name = "This is navigation!!!!"]') // по атр name у которого значение This is navigation!!!!"]

// const links = document.querySelectorAll('link') // []
// 
// links[0].style

// const list = document.querySelector('#list');

// children // дочерние элементы
// parentElement // родительский элемент
// nextElementSibling // следующий сосед
// previousElementSibling // предыдущий сосед
// firstElementChild // первый дочерний элемент
// lastElementChild // последний дочерний элемент

// console.log(list);
// console.log(list.children);
// console.log(list.parentElement);
// list.firstElementChild
// list.lastElementChild

// // document.body

// const firstLi = document.querySelector('[name = "first-item"]')

// console.log(firstLi.nextElementSibling);

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// СОДЕРЖИМОЕ ЭЛЕМЕНТОВ

// const items = document.querySelectorAll('.item');
// const links = document.querySelectorAll('.link');

// console.log(links[0].innerHTML); // Home
// console.log(items[0].innerHTML); // <a href="" class="link">Home</a>


// console.log(links[0].textContent); // Home
// console.log(items[0].textContent); // Home

// const shouldChange = confirm('Хотите поменть что-нить на странице?');

// if (shouldChange) {
//   // links[0].textContent = 'Какое-то новое свойсво!'
//   // items[0].innerHTML = '<img src="./logo.svg" style="display: none;" />';
// }

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// СВОЙСТВА И АТР

// const input = document.querySelector('input');
// // console.log(input.hasAttribute('checked', 'true')) // проверить есь ли или нет
// // console.log(input.getAttribute('checked')) //получить значение аттрибута
// // input.setAttribute('checked', 'true'); //установить занчени аттр
// // input.removeAttribute('checked') //удалить аттр

// // input.classList.add('big-input'); //добавить класс
// input.classList.remove('big-input'); // уждалить класс

// setTimeout(() => {
//   input.classList.add('big-input');
//   input.classList.remove('big-input');
//   // if (!input.hasAttribute('checked', 'true')) {
//     // input.setAttribute('checked', 'true');
//   // }
// }, 3000)

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// СОЗДАНИЕ ЭЛЕМЕНТОВ

// const main = document.querySelector('main');
// const title = document.createElement('h1');

// title.classList.add('red-text');
// title.textContent = 'Hello World';

// main.append(element) // вставляет в конец тега main
// main.prepend(element) // вставляет в начало тега main
// main.before(element) // вставляет перед тегом main
// main.after(element) // вставляет после тегом main
// main.remove(element) // удалить элемент

// setTimeout(() => {
//   title.classList.add('red-text');
//   // title.innerHTML = 'Hello World';
//   title.textContent = 'Hello World';
//   main.append(title);
// }, 3000);

// setInterval(() => {
//   // title.innerHTML = 'Hello World';
//   // main.append(title);
//   const isLog = confirm('не хотите ли залогиниться');
// }, 3000);

// const title = document.createElement('h1');
// const block = document.createElement('h2')
// const list = document.createElement('li')

// title.classList.add('text');
// title.textContent = 'Hello';

// title.classList.add('block-main');
// title.textContent = 'main';

// title.classList.add('block-list');
// title.textContent = 'list';

const ul = document.querySelector('#list');
const links = [{
  title: 'Home',
  link: 'home.html'
}, {
  title: 'About',
  link: 'about.html'
}, {
  title: 'Blog',
  link: 'blog.html'
}, {
  title: 'Contact',
  link: 'contact.html'
}];

setTimeout(() => {
  links.forEach(item => {
    const li = document.createElement('li');
    li.classList.add('item');
    li.innerHTML = `<a href="${item.link}" class="link">${item.title}<a>`;

    ul.append(li);

  })
}, 3000);