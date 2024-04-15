"use strict";

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// window: - браузерное окружение
// 1
// DOM
// document
// 2
// BOM
// alert
// confirm
// prompt
// setTimeout
// setTimeout(() => {
//   console.log("setTimeout");
// }, 1000);
// navigator
// Объект navigator даёт информацию о самом браузере и операционной системе. Среди множества его свойств самыми известными являются: navigator.userAgent – информация о текущем браузере, и navigator.platform – информация о платформе (может помочь в понимании того, в какой ОС открыт браузер – Windows/Linux/Mac и так далее).
// location
// Объект location позволяет получить текущий URL и перенаправить браузер по новому адресу.

// alert(location.href); // показывает текущий URL
// if (confirm("Перейти на Onliner?")) {
//   location.href = "https://onliner.by"; // перенаправляет браузер на другой URL
// }

// СОЗДАСТЬ ЕЩЕ ОДИН РЕЬД и перейти в него
// console.log(location);

// screen - информация о монике
// XMLHttpRequest
// 3
// JS
// Object
// Array
// Function

// // глобальные функции доступны как методы глобального объекта:
// function sayHi() {
//   alert("Hello");
// }

// window.sayHi();

// console.log(location);
// console.log(screen);

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Поиск на странице

const ul = document.getElementById("navigation_list");

const header = document.getElementsByTagName("header");
const logo = document.getElementsByClassName("logo");
const lastLi = document.getElementsByName("this-is-Sparta");

// console.log(ul);
// console.log(header);
// console.log(logo);
// console.log(lastLi);

// ul.style.background = "red";

const newheader = document.querySelector("header");
const link = document.querySelectorAll("a");
const links = document.querySelectorAll("a[href='about.html']");
const liItems = document.querySelector(".navigation_item");

// console.log(newheader);
// console.log(link);
// console.log(links);
// console.log(liItems);

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Навигация

{
  /* <html> = document.documentElement
Самый верхний узел документа: document.documentElement. В DOM он соответствует тегу <html>.
<body> = document.body
Другой часто используемый DOM-узел – узел тега <body>: document.body.
<head> = document.head
Тег <head> доступен как document.head. */
}

// children – коллекция детей, которые являются элементами.
// firstElementChild, lastElementChild – первый и последний дочерний элемент.

// console.log(ul.firstElementChild);
// console.log(ul.lastElementChild);

// previousElementSibling, nextElementSibling – соседи-элементы.
// console.log(ul.firstElementChild.nextElementSibling);
// console.log(ul.firstElementChild.nextElementSibling.nextElementSibling);

// parentElement – родитель-элемент.
// console.log(newheader.parentElement); // родитель

// const bodyChildren = document.body.childNodes; // дочерние ноды включая текст
// console.log(bodyChildren);

// const bodyChildren = document.body.children; // дочерние ноды включая текст
// console.log(bodyChildren);

// Итог по навигации
// Получив DOM-узел, мы можем перейти к его ближайшим соседям используя навигационные ссылки.
// Есть два основных набора ссылок:
// Для всех узлов: parentNode, childNodes, firstChild, lastChild, previousSibling, nextSibling.
// Только для узлов-элементов: parentElement, children, firstElementChild, lastElementChild, previousElementSibling, nextElementSibling.
// Некоторые виды DOM-элементов, например таблицы, предоставляют дополнительные ссылки и коллекции для доступа к своему содержимому.

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// innerHTML: содержимое элемента

// const lastLiItem = lastLi[0].firstElementChild;
// console.log(lastLiItem.innerHTML); // в том числе и теги
// console.log(lastLiItem.textContent); // только текст

// const isChangeLiInner = confirm("поменять содержимое последней лишки?");
// if (isChangeLiInner) {
//   // lastLiItem.innerHTML = "Новое содержимое!";
//   // lastLiItem.innerHTML = "<span>Hi</span>";
//   // Будьте внимательны: «innerHTML+=» осуществляет перезапись
//   lastLiItem.textContent = "Hello";
// }

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Атрибуты и свойства
// Конечно. Все атрибуты доступны с помощью следующих методов:
// elem.hasAttribute(name) – проверяет наличие атрибута.
// elem.getAttribute(name) – получает значение атрибута.
// elem.setAttribute(name, value) – устанавливает значение атрибута.
// elem.removeAttribute(name) – удаляет атрибут.
// elem.attributes – это коллекция всех атрибутов.

// console.log(newheader.attributes);
// newheader.setAttribute("data-header", "hi-hi");
// console.log(newheader.attributes);
// newheader.removeAttribute("data-header");
// console.log(newheader.attributes);

// добавить класс.
// newheader.classList.add("red-text");
// newheader.classList.remove("red-text");

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// Создание элементов

const div = document.createElement("div");
div.className = "ed-text";
div.innerHTML = "<strong>Всем привет!</strong> Вы прочитали важное сообщение.";

// Вот методы для различных вариантов вставки:

// node.append(...nodes or strings) – добавляет узлы или строки в конец node,
// node.prepend(...nodes or strings) – вставляет узлы или строки в начало node,
// node.before(...nodes or strings) –- вставляет узлы или строки до node,
// node.after(...nodes or strings) –- вставляет узлы или строки после node,
// node.replaceWith(...nodes or strings) –- заменяет node заданными узлами или строками.

// setTimeout(() => {
//   newheader.append(div);
// }, 5000);

// document.createElement(tag) – создаёт элемент с заданным тегом,
// document.createTextNode(value) – создаёт текстовый узел (редко используется),
// elem.cloneNode(deep) – клонирует элемент, если deep==true, то со всеми дочерними элементами.
// Вставка и удаление:

// node.append(...nodes or strings) – вставляет в node в конец,
// node.prepend(...nodes or strings) – вставляет в node в начало,
// node.before(...nodes or strings) – вставляет прямо перед node,
// node.after(...nodes or strings) – вставляет сразу после node,
// node.replaceWith(...nodes or strings) – заменяет node.
// node.remove() – удаляет node.
// Устаревшие методы:

// parent.appendChild(node)
// parent.insertBefore(node, nextSibling)
// parent.removeChild(node)
// parent.replaceChild(newElem, node)
// Все эти методы возвращают node.

// Если нужно вставить фрагмент HTML, то elem.insertAdjacentHTML(where, html) вставляет в зависимости от where:

// "beforebegin" – вставляет html прямо перед elem,
// "afterbegin" – вставляет html в elem в начало,
// "beforeend" – вставляет html в elem в конец,
// "afterend" – вставляет html сразу после elem.

// const linksArray = [
//   {
//     name: "mail",
//     href: "https://mail.ru/",
//   },
//   {
//     name: "onliner",
//     href: "https://www.onliner.by/",
//   },
//   { name: "ted", href: "https://www.ted.com/" },
// ];

// linksArray.forEach((item) => {
//   const link = document.createElement("a");
//   link.textContent = item.name;
//   link.href = item.href;
//   link.style.color = "red";
//   link.style.padding = "25px";
//   link.style.background = "gray";

//   document.body.append(link);
// });
