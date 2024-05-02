import {modal} from './modal.js';
import {clock} from './clock.js';
import {trafficLights} from './traffic-lights.js';
import {slider} from './slider.js';

modal();
clock();
trafficLights();
slider();

// console.log('start', new Date().toLocaleTimeString());
// const array = new Array(10000)
//   .fill(null)
//   .map((_, i) => ++i)
//   .map((item, i, array) => {
//     const date = new Date().toLocaleTimeString();
//     date.split('').unshift('dwq');
//     const multItem = item ** item;

//     return array.filter(item => item % 17 === 77);
//   }); // 5s
//   console.log(array)
// console.log('end', new Date().toLocaleTimeString());

// console.log(1);

// const timer = setTimeout(() => {
//   console.log(2);
// }, 10000); //1 секунда === 1000 милисекунд

// console.log(3);

// clearTimeout(timer);

// console.log(1);

// const interval = setInterval(() => {
//   console.log(2);
// }, 1000); //1 секунда === 1000 милисекунд

// console.log(3);

// clearInterval(timer);

// setTimeout(() => {
//   console.log(1);
// }, 1000)

// setTimeout(() => {
//   console.log(2);
// }, 2000)

// setTimeout(() => {
//   console.log(3);
// }, 3000)

// const a = () => {
//   const b = () => {
//     console.log('Hi'); //Call Stack: вдобавок в уже имеющимся функциям "а" и "b" добавляется console.log('Hi')
//   }

//   b(); //Call Stack: вдобавок в уже имеющейся функции "а" в него попадает функция "b"
// }

// a(); //Call Stack: в него попадает функция "а"
