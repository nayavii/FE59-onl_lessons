"use strict";

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => {
//         console.log(response);
//         return response.json();
//       })
//       .then(json => console.log(json))
// Это один и тот же запрос 
// const result = fetch('https://jsonplaceholder.typicode.com/todos/1');

// const imagesList = ['http://netgeek.biz/funnycat1.jpg', 'http://netgeek.biz/funnycat2.jpg', 'http://netgeek.biz/funnycat3.jpg']; // 25 штук

// const result = new Promise((resolve, reject) => {}).then(() => {}).catch(() => {}).finally(() => {});

// const resultQuery = new Promise((resolve, reject) => {
//     // делаем запрос на сервер и получаем результат и записываем его в переменную result
//     const result = fetch('http://netgeek.biz/funnycat1.jpg');
//     // const result = {
//     //     body: (...)
//     //     bodyUsed: true
//     //     headers: Headers {}
//     //     ok: true
//     //     redirected: false
//     //     status: 200
//     //     statusText: ""
//     //     type: "cors"
//     //     url: "https://jsonplaceholder.typicode.com/todos/1"
//     // }

//     if (result.status === 200) {
//         // то выолняется функция resolve в которую мы передаем сам результат
//         resolve(result);
//     } else {
//         // если запрос выполниться c ошибкой
//         // то выполняется функци reject в которую передается информация об ошибке
//         reject('Запрос не выполнился');
//     }
// })

// resultQuery
//     .then(response => {
//         // "then" выполняется только если вые прошло успешно
//         console.log(response);
//         return response.json();
//     })
//     .catch(error => {
//         // "catch" выполняется только если была ошибка

//         console.log(error)
//     })
//     .finally(() => {
//         // "finally" выполняется всегда, независимо от того была ошика или нет
//         // выполняется всегда в конце
//     })

//////////////////////////////////////////////////////////////////////////////

// new Promise((resolve, reject) => {
//     const request = fetch('https://jsonplaceholder.typicode.com/todos');

//     if (request.status === 200) {
//         resolve(request);
//     } else {
//         reject('error');
//     }
// })

//////////////////////////////////////////////////////////////////////////////

// перед самым началом запроса показываем пользователю спиннер!!!!!!

// const loadingDiv = document.getElementById('loading');

loadingDiv.style.visibility = 'visible';

fetch('https://jsonplaceholder.typicode.com/todos') // [{}, ...] получаем массив, который содержит 100 объектов
    .then(response => response.json()) // преобразовываем его в читаемый для JS вид
    .then(response => {
        // Если запрос прошел и мы получили response, то на основе этого респонса 
        // мы создадим на странице много элементов верстки
        const ul = document.querySelector('.todos');

        response.forEach(item => {
            // item === {
            //     completed: false,
            //     id: 1,
            //     title: "delectus aut autem",
            //     userId: 1,
            // }
            const todoItem = document.createElement("li");

            todoItem.classList.add("todo__item");

            if (item.completed) {
              todoItem.classList.add("todo__item_completed");
            }

            todoItem.innerHTML = `
                <div class="todo__wrapper">
                    <input type="checkbox" class="todo__completed" id="todo-completed-${item.id}" ${item.completed ? 'checked' : ''} />
                    <div class="todo__text">${item.title}</div>
                    <div class="todo__action">
                        <button class="todo__close btn btn_small btn_red" id="todo-delete-${item.id}" >Х</button>
                        <span class="todo__date">-</span>
                    </div>
                </div>
            `;
      
            ul.append(todoItem);            
        });

        return 77;
    })
    // .then(res => {
    //     const request = fetch('https://jsonplaceholder.typicode.com/posts');

    //     console.log(request);
    // })
    .catch(error => {
        // выводим на странице красивое сообщение об ошибке
        const ul = document.querySelector('.todos');

        const errorMessage = document.createElement("li");

        errorMessage.innerHTML = `<div class="todo__wrapper todo__error">Что-то пошло не так и запрос не выполнился</div>`;
    
        ul.append(errorMessage);      
    })
    .finally(() => {
        // console.log('Я выполняюсь в любом случае');
        loadingDiv.style.visibility = 'hidden';
        // удалем спиннер со страницы
    })

// const result = new Promise((resolve, reject) => {
//     // в данном примере setTimeout - это запрос на сервер за данными
//     setTimeout(() => {
//         resolve([15]); // в resolve передается успешный результат
//         reject('[15]'); // в reject передается какое-то сообщение об ошибке
//     }, 2000);
// })
//     .then(result => console.log(result))
//     .catch((error) => console.log(error))
//     .finally(() => console.log('finally'))

const getData = async () => {
    const request = await fetch('https://jsonplaceholder.typicode.com/posts');

    // console.log не будет выполняться до тех пор, пока не выполниться запрос
    console.log(request);

    // const result = await request.json();
    // console.log(result);
}

getData();