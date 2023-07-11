
// tasks - (https://github.com/goitacademy/js-instructor-examples/blob/main/lesson-01/ru.md)

// const numbers = [10, 5, 20, 7, 8, 5, 3, 7];
// const uniqueNumbers = numbers.filter((number, index) => {
//     return numbers.indexOf(number) === index;
// });

// console.log(uniqueNumbers)

// Выведи на экран общее количество яблок и винограда. Разницу яблок и винограда.

// const apples = 47;
// const grapes = 135;
// const total = apples + grapes;
// console.log(total)
// const diff = apples - grapes;
// console.log(diff)

//Замени выражение переопределения комбинированным оператором +=.

// let students = 100;
// students += 50;
// console.log(students);

// Разбери приоритет операторов в инструкции присвоения значения переменной result.

// const result = 108 + 223 - 2 * 5;
// console.log(result);

// Напиши скрипт, который выводит в консоль округленные вверх / вниз и т.д.
//  значения переменной value.Используй методы Math.floor(), Math.ceil() и Math.round().Проверь что будет в консоли при значениях 27.3 и 27.9.

// const value = 27.3;
// const upVal = Math.ceil(value);
// console.log(upVal)
// const flVal = Math.floor(value);
// console.log(flVal)
// const riVal = Math.round(value);
// console.log(riVal)

//Составь фразу с помощью шаблонных строк A has B bots in stock, где A, B - переменные вставленные в строку.

// const companyName = 'Cyberdyne Systems';
// const repairBots = 150;
// const defenceBots = 50;
// const message = `${companyName} has ${defenceBots + repairBots} in stock`;
// console.log(message); // "Cyberdyne Systems has 200 bots in stock"

// Напиши скрипт который рассчитывает индекс массы тела человека. Для этого необходимо разделить вес в киллограммах на квадрат высоты человека в метрах.

// Вес и высота хранятся в переменных weight и height, но не как числа, а в виде строк(специально для задачи).
// Нецелые числа могут быть заданы в виде 24.7 или 24, 7, то есть в качестве разделителя дробной части может быть запятая.

// Индекс массы тела необходимо округлить до одной цифры после запятой;

// let weight = '88,3';
// let height = '1.75';

// weight = Number(weight.replace(",", "."));
// height = Number(height.replace(",", "."));


// const bmi = (weight / Math.pow(height, 2)).toFixed(1);
// console.log(bmi); // 28.8

// Отрефактори код так, чтобы в переменную value присваивалось значение переменной incomingValue, если оно не равно undefined или null.
//  В противном случае должно присваиваться значение defaultValue.Проверь работу скрипта для слепдующих значений переменной incomingValue: null, undefined, 0, false.
//  Используй оператор ?? (nullish coalescing operator).

// const incomingValue = 5;
// const defaultValue = 10;
// const value = incomingValue || defaultValue;
// console.log(value);

// Напиши скрипт который переведёт значение totalMinutes (количество минут) в строку в формате часов и минут HH:MM.

// 70 покажет 01:10
// 450 покажет 07:30
// 1441 покажет 24:01

// const totalMinutes = 70;

// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;
// console.log(hours);
// console.log(minutes);

// const doubleDigitHours = String(hours).padStart(2, 0);
// const doubleDigitMinutes = String(minutes).padStart(2, 0);
// console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);

// Используя конструкцию if..else и prompt, напиши код, который будет спрашивать: "Какое официальное название JavaScript?".
//  Если пользователь вводит ECMAScript, то показывай alert со строкой "Верно!", в противном случае - "Не знаете? ECMAScript!"

// const message = prompt("Какое официальное название JavaScript?")

// if (message === "ECMAScript") {
//  alert("Верно!")
// }

// else {
//  alert("Не знаете? ECMAScript!")
// }

// Напиши скрипт для отображения часов и минут в консоли браузера в виде строки формата "14 ч. 26 мин.".
// Если значение переменной minutes равно 0, то выводи строку "14 ч.", без минут.

// const hours = 14;
// const minutes = 0;
// let timestring;

// if (minutes > 0) {
//   timestring = `${hours} ч. ${minutes} мин.`;
// } else {
//   timestring = `${hours} ч.`;
// }
// console.log(timestring);

// Напиши скрипт, который выводит в консоль строку "Это положительное число", если в prompt пользователь ввел число больше нуля.
//  Если был введен ноль, выводи в консоль строку "Это ноль".Если передали отрицательное число, в консоли должна быть строка "Это отрицательное число".

// const userInput = prompt('Введите число');

// if (Number(userInput) === 0) {
//     console.log('0')
//   } else if (Number(userInput) > 0) {
//     console.log('++')
//   } else {
//     console.log('Это отрицательное число')
//   }

// Напиши скрипт, который сравнивает числа в переменных a и b.Если оба значения больше 100, то выведи в консоль максимальное из них.
//  В противном случае в консоли должна быть сумма значения b и числа 512.

// const a = 120;
// const b = 180;

// if (a > 100 && b > 100) {
// console.log(Math.max(a, b));
// } else {
//     console.log(b+512)
// }

// Напиши скрипт который проверяет заканчивается ли значение переменной link символом /.
// Если нет, добавь в конец значения link этот символ.Используй конструкцию if...else.

// const link = prompt('Please enter link');

// if (link.includes('/')) {
//     console.log('allright')
// } else {
//     console.log(link + '/')
// }

// Напиши скрипт который проверяет заканчивается ли значение переменной link символом /.
//  Если нет, добавь в конец значения link этот символ, но только в том случае, если в link есть подстрока "my-site".Используй конструкцию if...else.

// // let link = 'https://somesite.com/about';


// // - 2nd task
// let link = prompt('Please enter link');

// // Пиши код ниже этой строки
// let last = link.length - 1;
// // console.log(link[last]);

// if (link[last] === '/') {
//     console.log('allright')
// } else  if (link[last] !== '/' && link.includes('my-site')) {
//     link = link + '/';
// }
// // Пиши код выше этой строки
// console.log(link);


// Выполни рефакторинг кода задачи номер 4 используя тернарный оператор.

// let link = 'https://my-site.com/about';

// const copLink = link = link.includes('my-site') && link.endsWith('/') ? "allright" : link += '/';

// console.log(link);

// Напиши скрипт который будет выводить в консоль браузера строку в зависимости от значения переменной hours.

// Если значение переменной hours:

// меньше 17, выводи строку "Pending"
// больше либо равно 17 и меньше либо равно 24, выводи строку "Expires"
// больше 24 , выводи строку "Overdue"

// const hours = 25;

// if (hours < 17) {
//     console.log('Pending');
// } else if (hours >= 17 && hours <= 24) {
//     console.log('Expires');
// } else if (hours > 24) {
//     console.log('Overdue');
// }

// Напиши скрипт для отображения времени дедлайна сдачи проекта. Используй конструкцию if...else.

// Eсли до дедлайна 0 дней - выведи строку "Сегодня"
// Eсли до дедлайна 1 день - выведи строку "Завтра"
// Eсли до дедлайна 2 дня - выведи строку "Послезавтра"
// Eсли до дедлайна 3+ дней - выведи строку "Дата в будущем"

// const daysUntilDeadline = 2;
// // Пиши код ниже этой строки

// if (daysUntilDeadline === 0) {
//     console.log('Сегодня');
// } else if (daysUntilDeadline === 1) {
//     console.log('Завтра');
// } else if (daysUntilDeadline === 2) {
//     console.log('Послезавтра');
// } else if (daysUntilDeadline >= 3) {
//     console.log('Дата в будущем');
// }


// Выполни рефакторинг кода задачи номер 5 используя switch.

// const daysUntilDeadline = 2;

// switch (daysUntilDeadline) {
//     case 0:
//         console.log('Сегодня');
//         break;
//     case 1:
//         console.log('Завтра');
//         break;
//     case 2:
//         console.log('Послезавтра');
//         break;
//     default:
//         console.log('Дата в будущем');
// }

// Напиши цикл for который выводит в консоль браузера числа по возрастанию от min до max, но только если число кратное 5.

// const max = 100;
// const min = 20;

// for (let i = min; i <= max; i++)
//     if (i % 5 === 0) {
//         console.log(i);
//     }

// Напиши скрипт, который будет спрашивать логин с помощью prompt и логировать результат в консоль браузера.

// Если посетитель вводит "Админ", то prompt запрашивает пароль
// Если ничего не введено или нажата клавиша Esc - вывести строку "Отменено"
// В противном случае вывести строку "Я вас не знаю"
// Пароль проверять так:

// Если введён пароль "Я админ", то вывести строку "Здравствуйте!"
// Иначе выводить строку "Неверный пароль"

// const login = prompt('login?');

// if (login === 'admin') {
//     const password = prompt('password?');
//     if (password === 'im true') {
//     alert('ok')
// } else {
//     alert('bye');
//     }
    
// } else {
//     alert('idk');
// }

// через switch не вижу смысла
// switch (login) {
//     case 'admin':
//         const password = prompt('password');
//         switch (password) {
//             case 'im true':
//                 alert('ok');
//                 break;
//             default:
//                 alert('bye');
//                 break;
//         }
//     default:
//         alert("idk");
//         break;
// }

// Создайте массив genres с элементами «Jazz» и «Blues».
// Добавьте «Рок-н-ролл» в конец.
// Выведите в консоль первый элемент массива.
// Выведите в консоль последний элемент массива. Код должен работать для массива произвольной длины.
// Удалите первый элемент и выведите его в консоль.
// Вставьте «Country» и «Reggae» в начало массива.

// const genres = ['Jazz', 'Blues'];
// console.log(genres);
// genres.push('rock');
// console.log(genres);
// console.log(genres[0]);
// console.log(genres[genres.length - 1]);
// const newGenres = genres.slice(0, 1);
// console.log(newGenres);
// newGenres.splice(0, 0, 'country', 'reggae');
// console.log(newGenres);

// Напиши скрипт для вычисления площади прямоугольника со сторонами, значения которых хранятся в переменной values в виде строки. Значения гарантированно разделены пробелом.

// const values = '8 10';

// const lines = values.split(" ");
// console.log(lines);

// const a = lines[0];
// console.log(a);
// const b = lines[lines.length - 1];
// console.log(b);
// const area = a * b;
// console.log(area);

// Напиши скрипт для перебора массива fruits циклом for.Для каждого элемента массива выведи в консоль строку в формате номер_элемента: значение_элемента.
// Нумерация элементов должна начинаться с 1.

// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];

// for (let i = 0; i < fruits.length; i += 1) {
//     const j = i + 1;
//     console.log(fruits[i] + ' ' +  j);
// }

// Напиши скрипт который выводит в консоль имя и телефонный номер пользователя.В переменных names и phones хранятся строки имен и телефонных номеров, разделенные запятыми.
//  Порядковый номер имен и телефонов в строках указывают на соответствие.Количество имен и телефонов гарантированно одинаковое.
// const names = 'Jacob,William,Solomon,Artemis';
// const phones = '89001234567,89001112233,890055566377,890055566300';

// const namesArray = names.split(',');
// const phonesArray = phones.split(',');

// // Создаем цыкл для одновременного перебора 2-х массивов одинаковой длины

// // 1-й вариант решения - с использованием цыкла "for"
// for (let i = 0; i < namesArray.length; i++) {
//     // Задаем условия вывода строки с именем из 1-го массива и телефона из 2-го массива, элементы которых соответствуют друг-другу.
//     console.log(`Имя - ${namesArray[i]} - телефон: ${phonesArray[i]}`);
// }

// Напиши скрипт который выводит в консоль все слова строки кроме первого и последнего.
// Результирующая строка не должна начинаться или заканчиваться пробельным символом.Скрипт должен работать для любой строки.

// const string = 'Welcome to the future';

// const words = string.split(' ');
// console.log(words);
// words.pop();
// console.log(words);
// words.splice(0, 1);
// console.log(words);
// for (const word of words) {
//     console.log(word);
// }

// Напиши скрипт сортировки массива строк в алфавитном порядке по первой букве элемента.

// const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];
// langs.sort();

// console.log(langs);


// Напиши скрипт поиска самого маленького числа в массиве. Код должен работать для любого массива чисел. Используй цикл для решения задачи.

// const numbers = [2, 17, 94, 3, 23, 37];
// let min = Infinity;
// for (const element of numbers) {
//     if (element < min) {
//         min = element;
//    }
// }
// console.log(min); // 1

// Напиши функцию calcBMI(weight, height) которая рассчитывает и возвращает индекс массы тела человека. Для этого необходимо разделить вес в киллограммах на квадрат высоты человека в метрах.

// Вес и высота будут специально переданы как строки. Нецелые числа могут быть заданы в виде 24.7 или 24,7, то есть в качестве разделителя дробной части может быть запятая.

// Индекс массы тела необходимо округлить до одной цифры после запятой;

// function calcBMI(weight, height) {
//     const weightKg = parseFloat(weight.replace(',', '.'));
//     const heightCm = parseFloat(height.replace(',', '.'));
 
//     const bmi = weightKg / (heightCm * heightCm);

//     return bmi.toFixed(1);
// }

// const bmi = calcBMI('88,3', '1.75');
// console.log(bmi); // 28.8


// Напиши функцию min(a,b), которая возвращает меньшее из чисел a и b.

// function min(a, b) {
//     return a < b? a : b;
// }

// console.log(min(2, 5)); // 2
// console.log(min(3, -1)); // -1
// console.log(min(1, 1)); // 1

// Напиши функцию getRectArea(dimensions) для вычисления площади прямоугольника со сторонами, значения которых будут переданы в параметр dimensions в виде строки.
// //  Значения гарантированно разделены пробелом.

// function getRectArea(dimensions) {
//     const newMassive = dimensions.split(' ');
//     for (const element of newMassive) {
//         const a = newMassive[0]
//         const b = newMassive.pop();
//         return a * b;
//     }
// }

// console.log(getRectArea('8 11'));

// Напиши функцию logItems(items), которая получает массив и использует цикл for, который для каждого элемента массива будет выводить в консоль сообщение в формате
//     < номер элемента > - <значение элемента>. Нумерация элементов должна начинаться с 1.

// Например для первого элемента массива ['Mango', 'Poly', 'Ajax'] с индексом 0 будет выведено 1 - Mango, а для индекса 2 выведет 3 - Ajax.

// function logItems(items) {
//     // for (let i = 0; i < items.length; i++) {
//     //     const num = i + 1;
//     //     console.log(items[i], num);
//     // }
//     // --------------------- second try
//     // for (const item of items) {

//     //     console.log(items.indexOf(item) + 1,  item);
//     // }
// }

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

// Напиши функцию printContactsInfo(names, phones) которая выводит в консоль имя и телефонный номер пользователя.
// В параметры names и phones будут переданы строки имен и телефонных номеров, разделенные запятыми.
// Порядковый номер имен и телефонов в строках указывают на соответствие.Количество имен и телефонов гарантированно одинаковое.

// function printContactsInfo(names, phones) {
//     const namesArr = names.split(',');
//     const phonesArr = phones.split(',');
//     for (let i = 0; i < namesArr.length; i++) {
//         console.log(`${namesArr[i]} - ${phonesArr[i]}`);
//     }
// }
// printContactsInfo(
//   'Jacob,William,Solomon,Artemis',
//   '89001234567,89001112233,890055566377,890055566300',
// );

// Напиши функцию findLargestNumber(numbers)которая ищет самое большое число в массиве.

// function findLargestNumber(numbers) {
//     let number = Math.max(...numbers);
//     console.log(number);
// }

// console.log(findLargestNumber([2, 17, 94, 1, 23, 37])); // 94
// console.log(findLargestNumber([49, 4, 7, 83, 12])); // 83

// Напишите функцию calAverage() которая принимает произвольное кол-во аргументов и возвращает их среднее значение. Все аругменты будут только числами.

// function calAverage() {
//     let sum = 1;
//     for (const argument of arguments) {
//         sum += argument;
//     }
//     return sum / arguments.length;
// }
// console.log(calAverage(1, 2, 3, 4)); // 2.5
// console.log(calAverage(14, 8, 2)); // 8
// console.log(calAverage(27, 43, 2, 8, 36)); // 23.2

// function highAndLow(numbers){
//   const newArr = numbers.split(" ").map(Number);
//   let highNum = Math.max(...newArr);
//   let minNum = Math.min(...newArr);
//   console.log(`${highNum}  ${minNum}`)
// }

// highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4");
// highAndLow("1 2 3");


// //! Напиши функцию formatTime(minutes) которая переведёт значение minutes (количество минут) в строку в формате часов и минут HH:MM.

// function formatTime(minutes) {
//     const hours = Math.floor(minutes / 60);
//         const minutesLeft = minutes % 60;
//         return `${hours < 10? `0${hours}` : hours}:${minutesLeft < 10? `0${minutesLeft}` : minutesLeft}`;
// }

// console.log(formatTime(70)); // "01:10"
// console.log(formatTime(450)); // "07:30"
// console.log(formatTime(1441)); // "24:01"

// !Коллекция курсов (includes, indexOf, push и т. д.)
// Напишите функции для работы с коллекцией обучающих курсов courses:

// addCourse(name) - добавляет курс в конец коллекции
// removeCourse(name) - удаляет курс из коллекции
// updateCourse(oldName, newName) - изменяет имя на новое

// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

// function addCourse(name) {
//     const addArr = courses.indexOf(name);
//     if (addArr === -1) {
//         courses.push(name);
//     }
// }
// function removeCourse(name) {
//     const remArr = courses.indexOf(name);
//     if (remArr!== -1) {
//         courses.splice(remArr, 1);
//     }
// }
// function updateCourse(oldName, newName) {
//     const updArr = courses.indexOf(oldName);
//     if (updArr !== -1) {
//         courses.splice(updArr, 1, newName);
//     }
// }

// addCourse('Express');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// addCourse('CSS'); // 'У вас уже есть такой курс'

// removeCourse('React');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// removeCourse('Vue'); // 'Курс с таким имененем не найден'

// updateCourse('Express', 'NestJS');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']

// ! Напиши скрипт, который, для объекта user, последовательно:

// добавляет поле mood со значением 'happy'
// заменяет значение hobby на 'skydiving'
// заменяет значение premium на false
// выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of

// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;

// const keys = Object.keys(user);
// for (const key of keys) {
//     console.log(`${key}: ${user[key]}`);
// }

// ! У нас есть объект, в котором хранятся зарплаты нашей команды.
// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum.
// Должно получиться 390. Если объект salaries пуст, то результат должен быть 0.


// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// const values = Object.values(salaries);

// let total = 0;

// for (const value of values) {
//     total += value;
// }
// console.log(total);

// ! Напишите ф - цию calcTotalPrice(stones, stoneName), которая принимает массив обьектов и строку с названием камня.
//     Ф - ция считает и возвращает общую стоимость камней с таким именем, ценой и количеством из обьекта




// function calcTotalPrice(stones, stoneName) {
//     let total = 0;
//     for (const stone of stones) {
//         if (stone.name === stoneName) {
//             total += stone.price * stone.quantity;
//         }
//     }
//     return total;
// }

// const stones = [
//   { name: 'Изумруд', price: 1300, quantity: 4 },
//   { name: 'Бриллиант', price: 2700, quantity: 3 },
//   { name: 'Сапфир', price: 400, quantity: 7 },
//   { name: 'Щебень', price: 200, quantity: 2 },
// ];
// const stoneName = 'Изумруд';
// const totalPrice = calcTotalPrice(stones, stoneName);
// console.log(`Общая стоимость камней "${stoneName}" равна ${totalPrice}`);

// ! Напиши скрипт управления личным кабинетом интернет банка. Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.


// //  * Типов транзацкий всего два.
// //  * Можно положить либо снять деньги со счета.

// const Transaction = {
//     DEPOSIT: 'deposit',
//     WITHDRAW: 'withdraw',
//   };
  
  
// //    * Каждая транзакция это объект со свойствами: id, type и amount
   
  
//   const account = {
//     //* Текущий баланс счета
//     balance: 0,
  
//     // *История транзакций
//     transactions: [],
  
    
//     //  * Метод создает и возвращает объект транзакции.
//     //  * Принимает сумму и тип транзакции.
     
//     createTransaction(amount, type) {
//       const transaction = {
//         id: this.transactions.length + 1,
//         amount: amount,
//         type: type,
//       };
//       return transaction;
//     },
  
    
//     //  * Метод отвечающий за добавление суммы к балансу.
//     //  * Принимает сумму танзакции.
//     //  * Вызывает createTransaction для создания объекта транзакции
//     //  * после чего добавляет его в историю транзакций
     
//     deposit(amount) {
//       const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
//       this.transactions.push (transaction);
//       this.balance += amount;
//       return this;
//     },
  
    
//     //  * Метод отвечающий за снятие суммы с баланса.
//     //  * Принимает сумму танзакции.
//     //  * Вызывает createTransaction для создания объекта транзакции
//     //  * после чего добавляет его в историю транзакций.
//     //  *
//     //  * Если amount больше чем текущий баланс, выводи сообщение
//     //  * о том, что снятие такой суммы не возможно, недостаточно средств.
     
//     withdraw(amount) {
//       if (amount > this.balance) {
//         throw new Error('Недостаточно средств');
//       }
//       const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
//       this.transactions.push(transaction);
//       this.balance -= amount;
//       return this;
//     },
  
   
//     //  * Метод возвращает текущий баланс
    
//     getBalance() {
//       return this.balance;
//     },
  
   
//     //  * Метод ищет и возвращает объект транзации по id
    
//     getTransactionDetails(id) {
//       return this.transactions.find(transaction => transaction.id === id);
//     },
  
   
//     //  * Метод возвращает количество средств
//     //  * определенного типа транзакции из всей истории транзакций
    
//     getTransactionTotal(type) {
//       let total = 0;
//       for (const transaction of this.transactions) {
//         if (transaction.type === type) {
//           total += transaction.amount;
//         }
//       }
//       return total;

//     },
//   };


// const numbers = [1, 2, 3, 4, 5];

// function calculateAverage(numbers) {
//     const nums = [...numbers];
//     const ave = nums.reduce((a, b) => (a + b)) / numbers.length;
//     return ave;

// }
// const average = calculateAverage(numbers);


// console.log(average); // Выводит: 3

//!  стрелочные функции

// const number = 5;
// const square = calculateSquare(number);
// function calculateSquare(number) {
//     return Math.pow(number, 2)
// }
// console.log(square); // Выводит: 25


// const calculateCube = (number) => {
//     return Math.pow(number, 3);
// }
// const cube = calculateCube(number);
// console.log(cube); // Выводит: 125

// const width = 10;
// const height = 5;
// const calculateArea = (width, height) => {
//     return width * height;
//  }
// const area = calculateArea(width, height);
// console.log(area); // Выводит: 50

// const percent = 20;
// const calculatePercentage = (number, percent) => {
//     return number * percent / 100;
// }
// const percentage = calculatePercentage(number, percent);
// console.log(percentage); // Выводит: 1


// const numbers = [1, 2, 3, 4, 5, 6];  
// // !
// const filterEvenNumbers = (numbers) => {
//     const newNums = [...numbers];
//     // //console.log(newNums); 
//     return newNums.filter(num => num % 2 === 0);
// }
// const evenNumbers = filterEvenNumbers(numbers);
// console.log(evenNumbers); // Выводит: [2, 4, 6]
// // !
// const doubleNumbers = (numbers) => { 
//     const newNums = [...numbers]; 
//    // // console.log(newNums);
//     return newNums.map(num => num * 2);
// }
// const doubledNumbers = doubleNumbers(numbers);
// console.log(doubledNumbers); // Выводит: [2, 4, 6, 8, 10, 12]
// // !
// const calculateSum = (numbers) => {
//     const newNums = numbers.reduce((prevVal, num) => {
//         return prevVal + num;
//     }, 0); 
//     return newNums;
//  }
// const sum = calculateSum(numbers);
// console.log(sum); // Выводит: 21
// // !

// const getPositiveNumbers = (numbers) => {
//     const newNums = numbers.filter(num => num > 0);
//     return newNums;
// }
// const positiveNumbers = getPositiveNumbers(numbers);
// console.log(positiveNumbers); // Выводит: [1, 2, 3, 4, 5, 6]
