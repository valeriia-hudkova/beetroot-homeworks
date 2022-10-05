// // * user name
// let userName = prompt('Хей! Як тебе звати?');
// alert(`Приємно познайомитись, ${userName}ツ`);

// // *user age
// let birthYear = prompt('Коли ти народився?');
// let date = new Date();
// let todayYear = date.getFullYear();
// let age = todayYear-birthYear;
// if (0<=age && age<18) {
//   alert(`Всього лиш ${age}. Сподіваюсь у тебе не ввімкнено батьківський контроль:)`);
// } else if (age>=18) {
//   alert(`Тобі ${age}. Так ти вже доросла людинка.`);
// } else {
//   alert(`Будь ласка, введи корректне значення`);
// }

// // *perimeter and area of a square
// let squareSide = prompt('А тепер можеш написати довжину сторони квадрата, а я порахую його периметр и площу.');
// let squareArea = Math.pow(squareSide, 2);
// let squarePerimeter = squareSide*4;
// alert(`Площа дорівнює ${squareArea}, а периметр - ${squarePerimeter}`);

// // *circle
// let radius = prompt('Хочеш ще дізнатись площу окружності? Не проблема, пиши радіус кола і я порахую.');
// alert(`Площа кола дорівнює ${Math.pow(radius, 2)*Math.PI.toFixed(2)}`);

// // *distance
// let distance = prompt('Зібрався у відпустку? Яка відстань до місця, куди плануєш поїхати?');
// let time = prompt('Скільки часу думаєш витратити на дорогу?');
// let speed = distance/time;
// alert(`Доведеться рухатися зі швидкістю ${speed.toFixed(2)} км/год.`);

// // *currency exchange
// const baks = 37;
// let moneyAmount = prompt('Наразі непоганий курс. Хочеш купити кілька баксів? Напиши скільки гривень хочеш обміняти.');
// let exchangedMoney = moneyAmount/baks;
// alert(`Отримаєш ${exchangedMoney.toFixed(2)} баксів. На крихту хліба вистачить.`);

// !typeof

// *my name
const myName = 'Valeriia';

//- typeof string
let someText = 'dfghuikl';
console.log(`${myName}: typeof: ${someText}, ${typeof someText}`); 

//- typeof number
let someNumber = 0;
console.log(`${myName}: typeof: ${someNumber}, ${typeof someNumber}`); 

// num to string
let num = 345678;
let numToString = num.toString(16);
console.log(`${myName}: num: ${num}, num to string: ${numToString}, typeof after toString method: ${typeof numToString}`); 

//-typeof BigInt
let someBigInt = 54n;
console.log(`${myName}: typeof: 54n, ${typeof someBigInt}`); 

//- typeof boolean
let someBoolean = true;
console.log(`${myName}: typeof: ${someBoolean}, ${typeof someBoolean}`); 

// typeof undefined
let someUndefined;
console.log(`${myName}: typeof: ${someUndefined}, ${typeof someUndefined}`); 

//- typeof null
let someNull = null;
console.log(`${myName}: typeof: ${someNull}, ${typeof someNull}`); 

// typeof Symbol
let someSymbol = Symbol();
console.log(`${myName}: typeof: symbol, ${typeof someSymbol}`); 

//- typeof object
let someObject = Math;
console.log(`${myName}: typeof: Math, ${typeof someObject}`); 

//- typeof function
let someFunction = prompt;
console.log(`${myName}: typeof: prompt, ${typeof someFunction}`); 

// typeof array
let someArr = ["chair", , "table"];
console.log(`${myName}: typeof: ${someArr}, ${typeof someArr}`); 

// typeof empty array
let someEmptyArr = [];
console.log(`${myName}: typeof: emptyArr, ${typeof someEmptyArr}`); 

// isArray
let notArr = {};
console.log(`${myName}: isArray: ${someArr}, ${Array.isArray(someArr)}`); 
console.log(`${myName}: isArray: ${notArr}, ${Array.isArray(notArr)}`);

// array to string
let arr = ["chair", , "table"];
let arrString = arr.toString();
console.log(`${myName}: arr: ${arr}, array to string: ${arrString}, typeof after toString method: ${typeof arrString}`); 


