export const trafficLights = () => {
    const lights = document.querySelector('.traffic-lights');

    const childs = lights.children;

    childs[0].classList.add('light_red');

    const setLights = () => { // выполняються 3000 милисекунды
        setTimeout(() => {
            childs[0].classList.remove('light_red');
            childs[1].classList.add('light_yellow');
        }, 6000);
    
        setTimeout(() => {
            childs[1].classList.remove('light_yellow');
            childs[2].classList.add('light_green');
        }, 8000);
    
        setTimeout(() => {
            childs[2].classList.remove('light_green');
            childs[0].classList.add('light_red');
        }, 14000);
    }

    setLights();

    setInterval(setLights, 14000)
}