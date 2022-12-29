/*First level: Прочитать следующие темы:
1)  https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/GlobalObjects/Array/forEach 
2)  https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/GlobalObjects/Array/Reduce 
3)  https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/sort */


//Выполнить следующие задачи:

//1)  Превратите массив чисел в длинную строку, состоящую из всех этих чисел.
//Пример: [1,2,3] => "1,2,3"


let array = [2,14,33,4,75,6,];
let string = arr.reduce((acc, item) => `${acc},${item}`); //используем метод reduce и интерпаляцию

console.log(string);





//2)Используя метод reduce, посчитайте сколько людей проголосовали.

const voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];


let counter = 0; //Чтобы проверить каждый элемент нашего массива, обязательно указываем начальное значение 0,чтобы считать с первого элемента
voters.reduce(((accum, elem) => elem.voted === true ? counter++ : counter),0); //сравниваем значение и пишем,что если elem равно true ,то возвращай(?) counter++,если же нет,(:)то counter
console.log(counter);


//3)Получив массив всех товаров из вашего списка желаний, прикиньте, сколько будет стоить купить все сразу.
const wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];
const sumPrice = wishlist.reduce((acc, item) => acc + item.price, 0); //используем метод reduce.Задаем второй аргумент,те начальный аккамулятор= 0 чтобы считать с первого элемента массива


//4) Преобразовать массив из объектов, чтобы в итоге массив состоял из объектов со свойствами id, title, price, avgmark. Avgmark содержит среднеарифметическое значение marks.
//Массив для задачи:

let arr=
[
    {id: 1, title: 'велосипед', price: 45000, marks: [4, 5, 3, 5]},
    {id: 2, title: 'самокат', price: 15000, marks: [4, 4, 5, 4]},
    {id: 3, title: 'сноуборд', price: 20000, marks: [3, 3, 2, 3]},
    {id: 4, title: 'лыжи', price: 22000, marks: [4, 4, 3, 4]},
]


let arr.forEach(element =>{element.avgmark = element.marks.reduce((acc,current)=>(acc+current)/element.marks.lenghs);
    // меняет наш оригинальный массив
    //добавляем элемент avgmark
    delete element.marks; //удаляем элемент
    });



/*Как дополнительное домашнее задание на каникулы, посмотреть все методы массива:
 https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array 
В левой части вы увидите все методы массива. Удачи!*/