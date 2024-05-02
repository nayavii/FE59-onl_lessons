const lights = document.querySelector('.traffic-lights');

export const trafficLights = () => {
    const [first, second, third] = lights.children;

    const loopItem = () => {
        setTimeout(() => {
            first.classList.remove('red');
            second.classList.add('yellow');
        }, 6000);
    
        setTimeout(() => {
            second.classList.remove('yellow');
            third.classList.add('green');
        }, 7000)
    
        setTimeout(() => {
            third.classList.remove('green');
            first.classList.add('red');
        }, 13000)
    }
    
    first.classList.add('red');
    loopItem()

    setInterval(loopItem, 21000)
}