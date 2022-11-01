/*Задача 1: Написать программу, которая получает через prompt одно число и выводит одну из строк “число чётнoe”, “число нечётнoe”, “число равно нулю”.
*/
let num = prompt("Enter a number:");
if (num === "0") {
  alert("This number is equal 0");
} else if (num % 2 == 0) {
  alert("This number is even");
} else {
  alert("this number is odd");
}


/*Написать программу, которая получает значение из prompt и выводит фразу “Это значение можно преобразовать в число” или “Это значение преобразовать в число не получится. Получится NaN”.
*/
let string = prompt("Enter a number:");
if (isNaN(string)){
  alert("This number can't be converted to a number. It become a NaN.");
} else alert("This number can be converted");