export const modal = () => {
    const showModalBtn = document.querySelector(".header__show-modal");
    const modal = document.querySelector(".modal");
    const modalCloseBtn = document.querySelector(".modal__close");

    showModalBtn.addEventListener("click", (event) => {
        modal.classList.add("modal_show");
    });

    modalCloseBtn.addEventListener("click", (event) => {
        modal.classList.remove("modal_show");
    });
}