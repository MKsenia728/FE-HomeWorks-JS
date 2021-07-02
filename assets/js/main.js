console.log('Sample JavaScript HW#1');

/*
 * #1
 *
 * Создайте переменные со значениями
 */
// имя переменной: myNum, значение: 10
// имя переменной: mStry, значение: 'строка'
// имя переменной: myBool, значение: true
// имя переменной: myArr, значения: 1, 2, 3, 4, 5
// имя переменной myObj, значения: first: 'First Name', last: 'Last Name'
var myNum = 10;
var mStry = 'строка';
var myBool = true;
var myArr = [1, 2, 3, 4, 5];
var myObj = {
  first: 'First Name',
  last: 'Last Name',
};
console.log('Результат задания 1:');
console.log('myNum = ', myNum);
console.log('mStry = ', mStry);
console.log('myBool = ', myBool);
console.log('myArr = ', myArr);
console.log('myObj = ', myObj);
/*
 * #2
 *
 * Отформатируйте целое число, которое хранится в переменной myNum,
 * чтобы получить результат с 2 знаками после запятой.
 * Результат сохраните в переменную decimal2.
 */
// decimal2
var decimal2;
decimal2 = myNum.toFixed(2);
console.log('Результат задания 2:', decimal2);
/*
 * #3
 *
 * Создайте переменную i для которой выполните префиксный
 * и постфиксный инкремент и декремент.
 * Поэкспериментируйте с результатами, выводя их в консоль.
 */
var i = 10;
console.log('Результат задания 3:');
console.log('i   : ', i);
console.log('++i : ', ++i);
console.log('i-- : ', i--);
console.log('i   : ', i);
console.log('i++ : ', i++);
console.log('i   : ', i);
console.log('--i : ', --i);
console.log('i   : ', i);
// i

/*
 * #4
 *
 * Создайте новую переменную myTest и присвойте ей значение 20.
 * Выполните присваивание с операцией, используя операторы: +=, –=, *=, /=, %=.
 * Результаты присваиваются в myTest, затем выводятся в консоль.
 * В вычислениях можно использовать объявленную ранее переменную myNum и/или числа.
 */

// myTest
console.log('Результат задания 4:');
var myTest = 20;
console.log('myTest : ', myTest);
// +=

myTest +=myNum;
console.log('myTest+10 : ', myTest);
// –=
myTest -=myNum * 2;
console.log('myTest-10*2 : ',myTest);
// *=
myTest *=(myNum - 5);
console.log('myTest*(10-5) : ',myTest);
// /=
myTest /=myNum;
console.log('myTest/10 : ',myTest);
// %=
myTest %=2;
console.log('myTest % 2: ',myTest);
/*
 * #5
 *
 * Используя свойства и методы объекта Math, присвойте переменным и отобразите в консоли
 */

// константа Pi → myPi
console.log('Результат задания 5:');
var myPi = Math.PI;
console.log('myPi : ', myPi.toFixed(5));
// округленное значение числа 89.279 → myRound
var myRound = 89.279;
myRound = Math.round(myRound);
console.log('myRound : ', myRound);
// случайное число между 0..10 → myRandom
var myRandom = Math.round(Math.random() * 10);
console.log('myRandom : ', myRandom);
// 3 в 5 степени → myPow
var myPow = Math.pow(3,5);
console.log('myPow : ', myPow);
/*
 * #6
 *
 * Создайте объект с именем strObj.
 * Присвойте ключу str строку текста "Мама мыла раму, рама мыла маму", ключу length установите длину этой строки.
 */
console.log('Результат задания 6:');
var strObj = {
  str: 'Мама мыла раму, рама мыла маму',
};
strObj.length = (strObj.str).length;
console.log('strObj :', strObj);
// strObj

/*
 * #7
 *
 
 * Проверьте наличие текста 'рама' в поле str объекта strObj (см.п.6),
 * результат сохраните в переменную isRamaPos и выведите ее в консоль.
 */

// isRamaPos
console.log('Результат задания 7:');
var isRamaPos = (strObj.str).indexOf('рама');
console.log('isRamaPos :', isRamaPos);

/*
 * #8
 *
 * Выполните переименование подстроки в строке.
 * В качестве исходной строки используйте значение поля str объекта strObj (см.п.6), результат сохраните в переменную strReplace и отобразите в консоли.
 * Исходная строка: 'Мама мыла раму, рама мыла маму'
 *       Результат: 'Мама моет раму, Рама держит маму'
 */

// strReplace
console.log('Результат задания 8:');
var strReplace;
var oldWords = ['мыла', 'рама', 'бегемот', 'мыла'];
var newWords = ['моет', 'Рама', 'крокодил', 'держит'];

if (oldWords.length === newWords.length) {
  var i=0;
  strReplace = (strObj.str);

  while (i < oldWords.length) {
    strReplace = strReplace.replace(oldWords[i], newWords[i++]);
  }
  console.log(strReplace);
}
else {
  trReplace = null;
  console.log('Некорректные условия - trReplace :', trReplace);
};

/*
 * #9
 *
 * Преобразуйте любую строку в верхний, затем в нижний регистры, результат отобразите в консоли.
 */
console.log('Результат задания 9:');
console.log(strReplace.toUpperCase());
console.log(strReplace.toLowerCase());