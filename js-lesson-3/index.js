const MY_NAME = "Valeriia";

// !Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17), дорослим (18-59) або пенсіонером (60 ...), передбач можливість введення невірних даних.
const MAX_CHILD_AGE = 11;
const MAX_TEENAGER_AGE = 17;
const MAX_ADULT_AGE = 59;

const userAge = +prompt('Скільки Вам років?');

if (isNaN(userAge)) {
  throw new Error (`${MY_NAME}: Ви ввели невірне значення`);
} else if (userAge<=0) {
  throw new Error (`${MY_NAME}: Ви ще не народилися, приходьте через ${Math.abs(userAge)} р.`);
} else if (userAge>122) {
  throw new Error (`${MY_NAME}: Жанна Кальман прожила менше, хто Ви, або що?`);
} else if (userAge<=MAX_CHILD_AGE) {
  console.log (`${MY_NAME}: Ви дитина`);
} else if (userAge<=MAX_TEENAGER_AGE) {
  console.log (`${MY_NAME}: Ви підліток`);
} else if (userAge<=MAX_ADULT_AGE) {
  console.log (`${MY_NAME}: Ви дорослий`);
} else {
  console.log (`${MY_NAME}: Ви пенсіонер`);
}

// !Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).
const number = +prompt(
  "Будь ласка, введіть число від 0 до 9, а я виведу Вам спецсимвол, який розташований на цій клавіші."
);
switch (number) {
  case 0: {
    console.log(`${MY_NAME}: Символ )`);
    break;
  }
  case 1: {
    console.log(`${MY_NAME}: Символ !`);
    break;
  }
  case 2: {
    console.log(`${MY_NAME}: Символ @`);
    break;
  }
  case 3: {
    console.log(`${MY_NAME}: Символ #`);
    break;
  }
  case 4: {
    console.log(`${MY_NAME}: Символ $`);
    break;
  }
  case 5: {
    console.log(`${MY_NAME}: Символ %`);
    break;
  }
  case 6: {
    console.log(`${MY_NAME}: Символ ^`);
    break;
  }
  case 7: {
    console.log(`${MY_NAME}: Символ &`);
    break;
  }
  case 8: {
    console.log(`${MY_NAME}: Символ *`);
    break;
  }
  case 9: {
    console.log(`${MY_NAME}: Символ (`);
    break;
  }
  default: {
    throw new Error ("Введіть, будь ласка, число від 1 до 9")
  }
}

// !Підрахуй суму всіх чисел в заданому користувачем діапазоні.
let firstNumber = +prompt('Введіть початок діапазону');
let secondNumber = +prompt('Введіть кінець діапазону');
let sum = 0;

while (firstNumber<=secondNumber) {
  sum+=firstNumber
  firstNumber++
}

console.log (`${MY_NAME}: сума всіх чисел в заданому діапазоні дорівнює ${sum}`);

// !Запитай у користувача 2 числа і знайди найбільший спільний дільник.
firstNumber = +prompt("Введіть перше число");
secondNumber = +prompt("Введіть друге число");
let result;

if (isNaN(firstNumber) && isNaN(secondNumber)) {
  firstNumber = Math.abs(firstNumber);
  secondNumber = Math.abs(secondNumber);

  for (let i = 1; i <= Math.min(firstNumber, secondNumber); i++) {
    if (firstNumber % i === 0 && secondNumber % i === 0) {
      result = i;
    }
  }

  console.log(`${MY_NAME}: найбільший спільний дільник - ${result}`);
} else {
  throw new Error("Будь ласка, введіть числове значення");
}

// !Запитай у користувача число і виведи всі дільники цього числа.
firstNumber = +prompt("Введіть число і я виведу всі дільники цього числа");

for (let i = 1; i <= firstNumber; i++) {
  if (firstNumber % i == 0) {
    console.log(`${MY_NAME}: ${i}`);
  }
}

// !Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
// від 200 до 300 - знижка буде 3%;
// від 300 до 500 - 5%;
// від 500 і вище - 7%.

let purchaseSum = +prompt('Яка сума вашої покупки?');
const LOW_DISCOUNT_MONEY_LIMIT = 200;
const MEDIUM_DISCOUNT_MONEY_LIMIT = 300;
const HIGH_DISCOUNT_MONEY_LIMIT = 500;
const LOW_DISCOUNT = 0.03;
const MEDIUM_DISCOUNT = 0.05;
const HIGH_DISCOUNT = 0.07;

if (isNaN(purchaseSum) && purchaseSum<=0) {
  throw new Error ('Будь ласка введіть числове додатнє значення');
} else if (purchaseSum<LOW_DISCOUNT_MONEY_LIMIT){
  console.log ('Сума вашої покупки не передбачає знижки.');
} else if (purchaseSum>=LOW_DISCOUNT_MONEY_LIMIT && purchaseSum<MEDIUM_DISCOUNT_MONEY_LIMIT) {
  purchaseSum-=purchaseSum*LOW_DISCOUNT;
  console.log (`Сума до оплати зі знижкою - ${purchaseSum.toFixed(2)}`);
} else if (purchaseSum>=MEDIUM_DISCOUNT_MONEY_LIMIT && purchaseSum<HIGH_DISCOUNT_MONEY_LIMIT) {
  purchaseSum-=purchaseSum*MEDIUM_DISCOUNT;
  console.log (`Сума до оплати зі знижкою - ${purchaseSum.toFixed(2)}`);
} else {
  purchaseSum-=purchaseSum*HIGH_DISCOUNT;
  console.log (`Сума до оплати зі знижкою - ${purchaseSum.toFixed(2)}`);
}

// !Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів. При цьому також порахуй, скільки з них парних і непарних. Виведи статистику на екран. Враховуй, що достатньо однієї змінної (не 10) для введення чисел користувачем.
let anyNum;
let positiveNums = 0;
let negativeNums = 0;
let zeroNums = 0;
let evenNums = 0;
let oddNums = 0;
for (let i=0; i<10; i++) {
  anyNum = +prompt('Введіть число');
  console.log (anyNum);

  if (isNaN(anyNum)) {
    throw new Error ('Ви ввели нечислове значення, перезавантажте сторінку і вводіть, будь ласка, тільки числа');
  } else {
    if (anyNum>0){
    positiveNums++;
      if (anyNum%2==0) {
        evenNums++;
      } else {
        oddNums++;
      }
    } else if (anyNum<0) {
      negativeNums++;
      if (anyNum%2==0) {
        evenNums++;
      } else {
        oddNums++;
      }
    } else if (anyNum==0) {
      zeroNums++;
      evenNums++;
    }
  }
}

console.log (`Додатніх чисел - ${positiveNums}, від'ємних - ${negativeNums}, нулів - ${zeroNums}, парних - ${evenNums}, непарних - ${oddNums}`);

// !Зацикли відображення днів тижня таким чином: «День тижня. Хочеш побачити наступний день? » і так до тих пір, поки користувач натискає OK.
const DAYS = [
  "Неділя",
  "Понеділок",
  "Вівторок",
  "Середа",
  "Четвер",
  "П'ятниця",
  "Субота",
];
let nextDay = true;
let day;

while (nextDay) {
  for (let i = 0; i < DAYS.length; i++) {
    day = DAYS[i];
    nextDay = confirm(`${day}. Хочеш побачити наступний день?`);
    console.log(day);

    if (nextDay == false) {
      i = 8;
    }
  }
}


// !Виведи таблицю множення для всіх чисел від 2 до 9. Кожне число необхідно помножити на числа від 1 до 10.
console.log ("%cТаблиця множення 2-9", "color: blue; font-size: 20px");
let table = "";
for (let x = 2; x<=9; x++) {
  for (let y = 1; y<=10; y++) {
    table+=" " + x * y;
  }
  console.log (table);
  table = "";
}
