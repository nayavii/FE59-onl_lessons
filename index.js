"use strict";

// ООП - объектно-ориентированное программирование

// наследование
// инкапсуляция
// полиморфизм
// абстракция

// SOLID

class FetchApi {
    // static URL = 'https://jsonplaceholder.typicode.com/posts'

    // constructor(id) {
    //     this.id = id;
    // }

    constructor(url) {
        this.url = url;
    }

    getAll() {
        return fetch(this.url)
            .then(res => res.json())
            .then(res => {
                // res === []
                // ...что-то делаем/преобразуем
            })
    }

    getById(id) {
        return fetch(`${this.url}/${id}`)
            .then(res => res.json())
            .then(res => {
                // res === {}
                // ...что-то делаем/преобразуем
            })
    }

    create(data) {
        return fetch(this.url, {method: 'POST', headers: '....', body: data})
            .then(res => res.json())
            .then(res => {
                // res === {}
                // ...информацию о том, сохранили или нет
            })
    }

    put(data) {
        return fetch(this.url, {method: 'PUT', headers: '....', body: data})
            .then(res => res.json())
            .then(res => {
                // res === {}
                // ...информацию о том, изменили или нет
            })
    }

    #delete(id) {
        return fetch(`${this.url}/${id}`)
            .then(res => res.json())
            .then(res => {
                // res === {}
                // ...получаем ответ что удалили
            })
    }
}

console.log(FetchApi.URL); //'https://jsonplaceholder.typicode.com/posts'

export const fetchApiPosts = new FetchApi('https://jsonplaceholder.typicode.com/posts');
// fetchApiInstance.getAll();

// document.body.append(fetchApiPosts);

fetchApiPosts.getAll();
fetchApiPosts.create({});
fetchApiPosts.delete(114);


export const fetchApiTodods = new FetchApi('https://jsonplaceholder.typicode.com/todos');
// fetchApiInstance.getAll();

fetchApiTodods.getAll();
fetchApiTodods.create({});
fetchApiTodods.delete(114);

export const fetchApiUser = new FetchApi('https://jsonplaceholder.typicode.com/user');
// fetchApiInstance.getAll();

fetchApiUser.getAll();
fetchApiUser.create({});
fetchApiUser.delete(114);

class NewClass extends FetchApi {
    getAll() {
        console.log('kkwfklwe')
    }
}

const a = new NewClass();
a.getAll();

//////////////////////////////////////////////////////////////////////////////////////////

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }
}

const user = new User('Jon', 25);

//////////////////////////////////////////////////////////////////////////////////////////

// Object.assign(user1, commonEmplInfo)

const commonUserInfo = {
    addres: 'Minsk',
    company: 'IFuture',
    PC: '12352339273y49181',
}

const user1 = {
    ...commonEmplInfo,
    name: 'Jon',
    position: 'Middle ++',
    age: 30,
}

const user2 = {
    ...commonEmplInfo,
    name: 'Ivan',
    position: 'Junior',
    age: 25,
}

const user4 = {
    ...commonEmplInfo,
    name: 'Bob',
    position: 'Senior',
    age: 15,
}

//////////////////////////////////////////////////////////////////////////////////////////

// SOLID:
// S	- SRP
// Принцип единственной ответственности (single responsibility principle)
// У класса должна быть только одна причина для изменения.
// Или, как подметил Р. Мартин в книге «Чистая архитектура. Искусство разработки программного обеспечения», когда описывал эволюцию данного определения, окончательная версия принципа единственной ответственности выглядит так:
// «Модуль должен отвечать за одного и только за одного актора.»
// O	- OCP
// Принцип открытости/закрытости (open-closed principle)
// «программные сущности … должны быть открыты для расширения, но закрыты для модификации».
// L	- LSP
// Принцип подстановки Лисков (Liskov substitution principle)
// «функции, которые используют базовый тип, должны иметь возможность использовать подтипы базового типа не зная об этом». См. также контрактное программирование.
// I	- ISP
// Принцип разделения интерфейса (interface segregation principle)
// «много интерфейсов, специально предназначенных для клиентов, лучше, чем один интерфейс общего назначения»[9].
// D	-  DIP
// Принцип инверсии зависимостей (dependency inversion principle)
// «Зависимость на Абстракциях. Нет зависимости на что-то конкретное»[9].

//////////////////////////////////////////////////////////////////////////////////////////
// Просто, если задана строка из слов, возвращает длину самого короткого слова (ов).
// Строка никогда не будет пустой, и вам не нужно учитывать разные типы данных.

const len = (words) => {
    const wordsLength = words.map(wordLength => wordLength.length); //[5, 8, 12, 2]

    return Math.min(...wordsLength); //(5, 8, 12, 2);
}

// console.log(len(['fefwefewf', 'wef', '', '23534645754u64565436', '32352'])) // ''
// console.log(len(['1', '2112', '4ger', 'Jon', 'Ivan'])) // '1'
// console.log(len(['Вы', 'молодцы', '!'])) //'!'
// console.log(len(['У', 'Вас', 'все', 'получится', '!'])) //'!'

//////////////////////////////////////////////////////////////////////////////////////////

// !!!!!Это на ДЗ!!!!!!

// При помещении нового элемента в начало массива - все позиции смещаются на одну позицию, кроме тех,
// у которых isFixedPostion в положении true

// const array = [
//     {name: 'кукла', position: 1, isFixedPostion: false}
//     {name: 'дрель', position: 2, isFixedPostion: false},
//     {name: 'сметана', position: 3, isFixedPostion: false},
//     {name: 'штаны', position: 4, isFixedPostion: false},
//     {name: 'колесо', position: 5, isFixedPostion: false},
// ];

// const addIntoStart = (array, newObje) => {

//     return newArra;
// }

// addIntoStart(array, {name: 'торт', position: 1, isFixedPostion: false})

// [
//     {name: 'молоко', position: 1, isFixedPostion: false},
//     {name: 'дрель', position: 2, isFixedPostion: true},
//     {name: 'кукла', position: 3, isFixedPostion: false},
//     {name: 'сметана', position: 4, isFixedPostion: false},
//     {name: 'штаны', position: 5, isFixedPostion: false},
//     {name: 'колесо', position: 6, isFixedPostion: false},
// ];