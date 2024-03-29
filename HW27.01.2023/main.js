/////////////////////////////////////////
/////////////////////////////////////////
/////////////// ЗАДАЧА 1 ////////////////
/////////////////////////////////////////
/////////////////////////////////////////

// Задан объект someObj с произвольными сво-ми. Напишите функцию getKeys(), 
// которая в качестве аргумента получает объект и возвращает результат работы метода Object.keys() согласно примеру

// Пример:
// let someObj = {
// key1: 'value1',
// key2: 'value2',
// key3: 'value3',
// key4: 'value4',
// }
// Результат: ['key1','key2','key3','key4']

//*************************/ РЕШЕНИЕ 1 /***************************//

let someObj = {
key1: 'value1',
key2: 'value2',
key3: 'value3',
key4: 'value4',
}

function getKeys(obj) {                // пишем функцию,у которой в кач-ве аргумента выступает someObj
    let keysArray = []                     // создаем новый пустой массив
    for (let key in obj) {             // проходимся циклом фор ин по someObj    
        keysArray.push(key)                // пушим в наш новый массив ключи
    }
    return  keysArray;                     // возвращаем массив keysArray
}
console.log(getKeys(someObj));


//*************************/ РЕШЕНИЕ 2 /***************************//

// Воспользуемся метотод Object.keys(obj) , который возвращает массив с ключами объекта

function getKeys(obj){
    return Object.keys(obj)
}
console.log(getKeys(someObj));

/////////////////////////////////////////
/////////////////////////////////////////
/////////////// ЗАДАЧА 2 ////////////////
/////////////////////////////////////////
/////////////////////////////////////////

// Создайте функцию getAvg(), которая получает в качестве аргумента массив и возвращает среднее значение среди всех элементов. 
// Примечание: гарантируется, что все элементы передают числовое значение
// Пример: [1,2,3,4,5]
// Результат: 3


//*************************/ РЕШЕНИЕ /***************************//

let array2 =[1,2,3,4,5];

function getAvg(arr) {
    return arr.reduce((prev , item) => (prev + item)) / arr.length; //это колбек функция,у которой 2 аргумента prev- первый элемент массива и item-второй элемент массива
}
  console.log(getAvg(array2));


  //******** Тигран,прошу на консультации объяснить,у меня трудности с функциями ,где мы в кач-ве аргумента ничего не передаем и где передаем,тк я попробовала прописать с пустыми скобками function getAvg( ),оно тоже отработало и вывело результат 3 .Понимаю ,что аргумент передаем по ТЗ, но в общем разницу не особо понимаю когда это надо делать,когда нет



/////////////////////////////////////////
/////////////////////////////////////////
/////////////// ЗАДАЧА 3 ////////////////
/////////////////////////////////////////
/////////////////////////////////////////

// Создайте функцию countString(), которая получает массив в качестве аргумента.
// Реализуйте функционал, который посчитает и выведет в консоль количество элементов, чей тип равен ‘string’
// Пример: [1,true,'3','value1',9,'key']
// Результат: 3

//*************************/ РЕШЕНИЕ 1 /***************************//

const newArr3 = [1,true,'3','value1',9,'key'];

function countString(array){
    let count = 0;                                    // создаем новую переменную чтобы начать счетчик с 0
  for (let i = 0; i < array.length; i++) {           // проходимся циклом по массиву array
    if (typeof array[i] === 'string')                // указываем проверочные усл-я, что если тип элемента под индексом [i] явл-ся строкой, то считаем его как +1
    count++;
  }
  console.log(`Количество элементов строкового типа: ${count}`);
}
countString(newArr3)            


//*************************/ РЕШЕНИЕ 2 /***************************//

const newArray = [1,true,'3','value1',9,'key'];
function countString3(array) {
    let result = array.filter(el => typeof el == 'string').length; //количество элементов будет равно длине массива
    console.log(`Количество элементов строкового типа: ${result}`);
  }
  countString3(newArray);

  // **** Тигран,проблема номер 2.С осознанием обязательности постановки ретерна.На 110 строке я вызываю эту функцию, но без ретерна. Т.е. у меня всё отрабатывает, но я до конца не понимаю правильно ли я сделала


/////////////////////////////////////////
/////////////////////////////////////////
/////////////// ЗАДАЧА 4 ////////////////
/////////////////////////////////////////
/////////////////////////////////////////

// Задан объект someObj с произвольными сво-ми. Напишите функцию getEntries(), которая в качестве аргумента получает объект и возвращает результат работы метода Object.entries() согласно примеру:
// Пример:
// let someObj = {
// key1: 'value1',
// key2: 'value2',
// key3: 'value3',
// key4: 'value4',
// }
// Примечание: Использовать класс Object нельзя
// Результат: [['key1', 'value1'],['key2', 'value2'],['key3', 'value3'],['key4', 'value4']]


//*************************/ РЕШЕНИЕ 1 /***************************//

let someObj4 = {
key1: 'value1',
key2: 'value2',
key3: 'value3',
key4: 'value4',
}

// Object.entries(obj) - метод класса Object, который возвращает массив с ключами и значениями объекта (вложенный массив)
// Я так понимаю,что как раз такое решение Вам не подходит ибо слишком просто 😊

//   function getEntries(someObj4){
//     return Object.entries(someObj4)
// }
// console.log(getEntries(someObj4))


//*************************/ РЕШЕНИЕ 2 /***************************//


function getEntries(obj) {
    let newArr4 = [];                        // создаем новую переменную с пустым массивом,куда будем пушить преобразованные элементы
    for (let key in obj) {                // проходимся циклом фор ин по someObj4 
        newArr4.push([key, obj[key]]);    // в новый массив newArr4 пушим ключ, значение объекта под этим ключом
    }
    return newArr4;                            // возвращаем массив newArr4
}
console.log(getEntries(someObj4));             // получаем массив с 4 вложенными массивами

/////////////////////////////////////////
/////////////////////////////////////////
/////////////// ЗАДАЧА 5 ////////////////
/////////////////////////////////////////
/////////////////////////////////////////

// Задан массив array, передающий произвольное количество элементов. 
// реализуйте функционал, который преобразует его в объект по следующему правилу:
// Ключ элемента должен содержать его порядковый номер, в качестве значения взять строку ‘keyN’, где N - это порядковый номер.
// Количество сво-тв должно быть равным количеству элементов массива

	
// Пример: [1,true,'3','value1',9,'key']
// Результат: 
// 	{
// key1: 1,
// key2: true,
// key3: ‘3’,
// key4: ‘value1’
// key5: 9,
// key6: ‘key’
// }
	

//*************************/ РЕШЕНИЕ 1 /***************************//

//*******Тигран, нашла в интернете пару вариантов преобразования массива в объект, но не могу додумать как сделать преобразования ключей чтобы шло key1, key2... */

let arrA = [1,true,'3','value1',9,'key'];
let obj = Object.assign({},arrA);           //Метод assign() может считывать свойства одного или нескольких объектов в целевой объект.Возвращает целевой объект.
console.log(obj)
//ВЫВОДИТ { '0': 1, '1': true, '2': '3', '3': 'value1', '4': 9, '5': 'key' }



//*************************/ РЕШЕНИЕ 2 /***************************//

let arrA2 = [1,true,'3','value1',9,'key'];
let obj2 = {...arrA2};                    // распаковка массива
console.log(obj2)    //............



//*************************/ РЕШЕНИЕ 3 /***************************//
let arr5 = [1,true,'3','value1',9,'key'];
const obj5 = {};

for (let i = 0; i < arr5.length; i++) {
  obj5[i] = arr5[i];
}
console.log(obj5);  //............

//**В общем как доделать задачу так и не додумалась .Предполагаю ,что там должна быть интерпаляция key с индексом,но тк в ТЗ у нас ключи начинаются не с 0,а с 1, то что-то типа индекс+1

let arr6 = [1,true,'3','value1',9,'key'];

function getKey() {
    letnewArr6 = Object.assign({}, arr6)
    for(let key in letnewArr6){
        // key = `key ${}` //............ так и не сообразила как прилепить к кей порядковы й номер начиная с единицы
    }
    return letnewArr6
}
console.log(getKey(arr6));   //............