export const clock = () => {
    const clock = document.querySelector('.header__clock');

    const setTime = () => {
        const time = new Date().toLocaleTimeString();
        clock.textContent = time;
    }

    // setTime('name', 26); // как передаем аргументы
    setTime();

    // setInterval(setTime, 1000, 'name', 26); // как передаем аргументы (последовательно после указания времени)
    setInterval(setTime, 1000);
}