const clock = document.querySelector(".header__clock");

export function handleClock() {
  setDate();

  setInterval(setDate, 1000);
}

function setDate() {
  const date = new Date().toLocaleTimeString();
  clock.textContent = date;
}
