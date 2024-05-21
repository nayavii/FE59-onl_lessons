// "use strict";

// // Получакет:
// // ["Begin on Road A","Right on Road B","Right on Road C","Left on Road D"]
// // Возвращает:
// // ['Begin on Road D', 'Right on Road C', 'Left on Road B', 'Left on Road A']

// // Получает:
// // ['Begin on Lua Pkwy', 'Right on Sixth Alley', 'Right on 1st Cr']
// // Возвращает:
// // ['Begin on 1st Cr', 'Left on Sixth Alley', 'Left on Lua Pkwy']

// const direction = (dirArray) => {
//     let currentDir = ''; // На второй итерации он будет равен 'Left'

//     return dirArray
//         .reverse()
//         .map((item, index) => {
//             // Первая итерация
//             // item === "Left on Road D";
//             // index === 0 - это false в булевом представлении
//             const currentItem = item.split(' '); // ['Left', 'on', 'Road', 'D'];

//             const dir = currentDir === 'Left' ? 'Right' : 'Left';
//             let text = '';

//             if (index) { // if (Boolean(index)) {
//                 text = `${dir} ${currentItem.slice(1).join(' ')}`; //['on', 'Road', 'D'].join(' ');
//             } else {
//                 text = `Begin ${currentItem.slice(1).join(' ')}`
//             }

//             // const text = index ? `${dir} ${currentItem.slice(1).join(' ')}` : `Begin ${currentItem.slice(1).join(' ')}`;

//             currentDir = currentItem[0];

//             return text;

//             // const text = index ? `${dir} ${currentItem.slice(1).join(' ')}` : `Begin ${currentItem.slice(1).join(' ')}`;

//             // currentDir = currentItem[0];

//             // return text;
//         });
//   }
  
//   console.log(direction(["Begin on Road A","Right on Road B","Right on Road C","Left on Road D"]));
//   // ['Begin on Road D', 'Right on Road C', 'Left on Road B', 'Left on Road A']
//   console.log(direction(['Begin on Lua Pkwy', 'Right on Sixth Alley', 'Right on 1st Cr']));
//   // ['Begin on 1st Cr', 'Left on Sixth Alley', 'Left on Lua Pkwy']

//////////////////////////////////////////////////////////////////////
// ПРОТОТИПЫ [[Prototype]]
//////////////////////////////////////////////////////////////////////

// прототип - родитель или тот у кого мы наследуем какие-то свойства

// [1, 2].forEach(element => {
    
// });
// const array = [];

// String, Number, Array, Object, Boolean
// []
// 12123
// ''
// false

//////////////////////////////////////////////////////////////////////

// Прототипное наследование через __proto__

// console.log([])

// const animal = {
//     isEat: true, // если его него нет в animal - он пойдет в Object
// };

// const rabbit = {
//     color: 'white',
//     __proto__: animal,
// }
// // rabbit.__proto__ = animal;

// const tiger = {
//     color: 'orange-black',
// }

// const longerEarRabbit = {
//     ear: 'green',
//     __proto__: rabbit,
// }

// console.log(animal, rabbit, tiger);
// console.log(rabbit.isEat, tiger.isEat, longerEarRabbit.isEat);

//////////////////////////////////////////////////////////////////////

// Прототипное наследование через Object.create

// const animal = {
//     isEat: true,
// };

// const rabbit = Object.create(animal);

// console.log(animal, rabbit);
// console.log(animal.isEat, rabbit.isEat);

//////////////////////////////////////////////////////////////////////
// Расширение прототипа

// function TestProto(name) {
//     // в конструкторе у нас неявно создается this  // очень грубо говоря const this = {}
//     this.name = name;

//     //неявно возвращается this
// }

// TestProto.prototype.getName = function() {
//     return this.name;
// }

// const a = new TestProto('Jon');
// const b = new TestProto('Ivan');

// console.log(a, b);

// console.log(a.getName());
// console.log(b.getName());

//////////////////////////////////////////////////////////////////////

// const namesList = ['Jon', 'Ivan', 'Liza'];

// const getEmails = namesList.map(item => `${item.toLowerCase()}@gmail.com`);
// console.log(namesList, getEmails)

// Array.prototype.getCustomEmail = function(callback) {
// Array.prototype.getCustomEmail = function() {
//     const newArray = [];
//     for(let i = 0; i < this.length; i++) {
//         // newArray.push(callback(this[i], i, this));
//         newArray.push(`${this[i].toLowerCase()}@gmail.com`);
//     }
//     return newArray;
// }

// const newArray = namesList.getCustomEmail();

// console.log(namesList, newArray);


// const a = ['flewkmfw', 'fwegmwg', 'true'].getCustomEmail();
// console.log(a);


// const sequence = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Array.prototype.myMap = function(callback) {
//     const resultArray = [];
    
//     for (let index = 0; index < this.length; index++) {
//         resultArray.push(callback(this[index], index, this));
//     }

//     return resultArray;
// }

// sequence.myMap((el, i, arr) => {
//     console.log(`Item: ${el} have index ${i} on array: ${arr}`);
// })

//////////////////////////////////////////////////////////////////////
// КЛАССЫ
//////////////////////////////////////////////////////////////////////

// class Animal {
//     // "use strict";
//     static currentId = 15;
//     // в конструкторе у нас неявно создается this  // очень грубо говоря const this = {}
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     get name() {
//         return this._name;
//     }

//     set name(value) {
//         this._name = value;
//     }

//     // setName(value) {

//     // }

//     //неявно возвращается this
// }

// const rabbit = new Animal('Jon'); // экземпляр
// const tiger = new Animal('Ivan'); // экземпляр
// const rabbit = {
//     currentId: 15,
//     name: '',
//     age: undefined,
//     getName: () ...
//     getAge
// }

// console.log(rabbit.name);
// rabbit.name = 'Ivan';
// console.log(rabbit.name);
// console.log(Animal.currentId)
// console.log(rabbit.getAge());
// console.log(rabbit.currentId);

//////////////////////////////////////////////////////////////////////
// Наследование классов

// class Animal {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     get name() {
//         return this._name;
//     }

//     set name(value) {
//         this._name = value;
//     }

//     #getBalance() {
//         console.log('3')
//     }
// }

// class Rabbit extends Animal {
//     constructor(name, age) {
//         super(name, age); // по сути конструктор Animal
//     }

//     // get age() {
//     //     return this._age;
//     // }
// }

// const a = new Rabbit('Jon', 3);
// const b = new Rabbit('Ivan', 5);

// console.log(a, b)

class CreateToDo {
    // constructor(id, title, isChecked) {
    //     this.id = id;
    //     this.title = title;
    //     this.isChecked = isChecked;
    // }

    // create() {
    //     const ul = document.querySelector('ul');

    //     const li = document.createElement('li');
    //     li.classList.add('todo');

    //     li.innerHTML = `
    //         <div class="todo__wrapper">
    //             <input type="checkbox" class="todo__completed" id="todo-completed-${this.id}" ${this.isChecked ? 'checked' : ''} />
    //             <div class="todo__text">${this.title}</div>
    //             <div class="todo__action">
    //                 <button class="todo__close btn btn_small btn_red" id="todo-delete-${this.id}" >Х</button>
    //                 <span class="todo__date">-</span>
    //             </div>
    //         </div>
    //     `;

    //     ul.append(li);
    // }

    create(id, title, isChecked) {
        const ul = document.querySelector('ul');

        const li = document.createElement('li');
        li.classList.add('todo');

        li.innerHTML = `
            <div class="todo__wrapper">
                <input type="checkbox" class="todo__completed" id="todo-completed-${id}" ${isChecked ? 'checked' : ''} />
                <div class="todo__text">${title}</div>
                <div class="todo__action">
                    <button class="todo__close btn btn_small btn_red" id="todo-delete-${id}" >Х</button>
                    <span class="todo__date">-</span>
                </div>
            </div>
        `;

        ul.append(li);
    }

    delete() {

    }

    clear() {
        
    }
}

const createNewTodo = new CreateToDo();
createNewTodo.create(1, 'Helo', true);
createNewTodo.create(2, 'Hi', false);
createNewTodo.create(3, 'Ghbdtn', false);
createNewTodo.delete(3, 'Ghbdtn', false);
createNewTodo.clear(3, 'Ghbdtn', false);