"use strict";

const bin = [];
const todos = [];

const burgerBtn = document.querySelector('.header__burger');
const modalWindow = document.querySelector('.modal');
const closeModalBtn = document.querySelector('.modal__close');

burgerBtn.addEventListener('click', (event) => {
    const img = event.target;
    const src = img.src;

    // const newImg = document.createElement('img');
    // newImg.src = src;
    // newImg.classList.add('...');
    // const modal = document.querySelector('....');
    // modal.appendChild(newImg)
    const div = document.createElement('div');

    div.innerHTML = `
    <section class="modal">
        <img src="${src}">
        <div class="modal__wrapper">
            <h1 class="modal__title">Это модальное окно!!!</h1>
            <div class="modal__actions">
                <button class="modal__confirm">Confirm</button>
                <button class="modal__cancel">Cancel</button>
            </div>
            <button class="modal__close">X</button>
            <ul class="modal__list"></ul>
        </div>
    </section>
    `

    modalWindow.classList.add('modal_show');
})

closeModalBtn.addEventListener('click', () => {
    modalWindow.classList.remove('modal_show');
})

bin.push({
    id: 42234,
    name: 'efwf',
    price: 10,
})