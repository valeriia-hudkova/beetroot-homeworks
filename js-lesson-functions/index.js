// !Створи функцію, яка буде виводити кількість переданих їй аргументів.
function countArgsNumber () {
  return (arguments.length);
}

// !Напиши функцію, яка приймає 2 числа і повертає :
// -1, якщо перше число менше, ніж друге; 
// 1 - якщо перше число більше, ніж друге; 
// 0 - якщо числа рівні.
const checkTwoNums = (firstNum, secondNum) => {
  if (firstNum<secondNum) {
    return -1;
  } else if (firstNum>secondNum) {
    return 1;
  } else {
    return 0;
  }
}

// !Напиши функцію, яка обчислює факторіал переданого їй числа.
function factorial (n) {
  let answer=1;
    if (n==0) {
      return 1;
    } else {
      for (let i = n; i >= 1; i--) {
        answer*=i;
      }
    }
    return answer;
  }

// !Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149.
const threeNumsInOne = (num1, num2, num3) => {
  let connection = '' + num1 + num2 + num3;
  return connection;
};

// !Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.
const rectangleArea = (length, width) => (width ? length*width : length*length);


// !Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. Досконале число - це число, яке дорівнює сумі всіх своїх дільників.
const perfectNumber = (x) => {
  let result = 0;
  for (let i = 1; i<x; i++) {
    if (x%i == 0) {
      result+=i;
    }
  }

  if (x == result) {
    return true;
  } else {
    return false;
  }
}

// !Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону, і виводить тільки ті числа з діапазону, які є досконалими. Використовуй написану раніше функцію, щоб дізнатися, чи є це число досконалим.

const perfectNumberRange = (minValue, maxValue) => {
  const range = [];
  let positionInArray = 0;
  for (let i = minValue; i<=maxValue; i++) {
    if (perfectNumber(i)){
      range[positionInArray] = i;
      positionInArray++;
    }
  }
  return range.toString();
}
