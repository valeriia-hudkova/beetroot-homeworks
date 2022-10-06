const MY_NAME = 'Valeriia';
// * додавання 0,1 і 0,2, добийся математично правильної відповіді
let num1 = 0.1;
let num2 = 0.2;
let sum = num1 + num2;
// использую метод .toFixed(1), чтобы округлить поученную сумму до 1 знака после запятой
console.log(`${MY_NAME}: ${num1} + ${num2} = ${sum.toFixed(1)}`);

// *додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних), добийся математично правильної відповіді
num1 = '1';
num2 = 2;
// добавляю унарный оператор "+"" перед переменной, которая содержит в себе строку, чтобы превратить ее в число и соверить действие прибавления
console.log(`${MY_NAME}: '1' (${typeof num1}) + 2 (${typeof num2}) = ${+num1 + num2}`);

// *Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.
let memory = +prompt('Вкажіть, будь ласка, обсяг флешки в Гб');
let file = memory*1024/820;
// округляю до меньшего значения с помощью функции Math.floor
console.log(`${MY_NAME}: ${Math.floor(file)} - стільки файлів поміститься на Вашій флешці.`);

// *Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.
let money = +prompt('Введіть, будь ласка, суму грошей, яка є у Вас на руках.');
let chocoPrice = +prompt('Скільки коштує одна шоколадка?');
// округляю до меньшего значения с помощью функции Math.floor
let chocoAmount = Math.floor(money/chocoPrice);
// узнаю остаток от деления, чтобы узнать сдачу
let change = money%chocoPrice;
console.log(`${MY_NAME}: ${chocoAmount} - стільки шоколадок Ви зможете купити, у Вас залишиться здача ${change.toFixed(2)}`);

// *Запитай у користувача тризначне число і виведи його задом наперед. Для вирішення завдання тобі знадобиться оператор % (залишок від ділення).
num1 = +prompt('Введіть, будь ласка, тризначне число');
let x1 = num1%10;
num1 -= x1;
let x2 = (num1/10)%10;
num1 -= (x2*10);
let x3 = (num1/10)%10;
console.log(`${MY_NAME}: ${x1}${x2},${x3}`);



// *Користувач вводить суму вкладу в банк на 2 місяці, з процентною ставкою депозиту 5% річних. Вивести суму нарахованих відсотків.
let deposit = +prompt('Введіть, будь ласка, суму вкладу');


// *Що повернуть вирази:
// 2 && 0 && 3
// 2 || 0 || 3
// 2 && 0 || 3


