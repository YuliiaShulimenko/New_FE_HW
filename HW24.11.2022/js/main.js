// /*First level: Прочитать следующие темы:
// 1) https://www.w3schools.com/jsref/domobjstyle.asp
// 2) https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style
// 3) https://learn.javascript.ru/styles-and-classes
// 4)https://developer.mozilla.org/ru/docs/Web/API/Element/classList
// */



 /*ЗАДАЧИ*/

//1)Создайте параграф и одну кнопку. Добавьте стили для этих элементов используя javascript.Сделайте так, чтобы при клике на кнопку исчезал параграф , а при повторном клике появлялся обратно.

let p = document.createElement("p"); //создаем параграф
let btn = document.createElement("button"); //создаем кнопку
p.classList.add("show"); //подкл к классу из css 
btn.innerText = "Hello"; //текст кнопки
p.innerHTML = "Good morning everybody"; // текст параграфа
btn.style.fontSize= "50px";
btn.style.background = "pink";
p.style.fontSize= "30px";

document.body.append(p,btn);



   btn.addEventListener ( "click" , () => {
    if ( p.classList.contains("show")){
        p.classList.replace("show", "hide");
    }else {
        p.classList.replace("hide", "show");
    }
})





//2)Создайте массив, содержащий названия цветов. На основе этого массива создайте список. При наведении на один из пунктов должен поменяться цвет фона всего документа на данный цвет.


let color = ["white","black","pink","yellow","green"]; //создаем массив цветов

let ul = document.createElement("ul"); // создаем маркированный список

for (let i = 0; i < color.length; i++) {
    let li = document.createElement("li"); // создаем элементы списка
    li.innerText = color[i];
    ul.appendChild(li);

    li.onmouseover= () => {  // onmouseover - команда при наведении мышки
        document.body.style.background = color[i];
}
}
document.body.appendChild(ul);




//3)Создайте массив с Вашими любимыми фильмами. Напишите цикл, который создает заголовки на основе этого массива. При клике на заголовок внизу появляется краткое описание данного фильма.

let movies =
[
    { title:"1+1",
      info:"Комедийная драма об успешном аристократе Филиппе, который в результате несчастного случая оказывается в инвалидном кресле и берёт себе в качестве помощника чернокожего, бывшего мелкого правонарушителя — Дрисса"
    },

    { title: "Тревожный вызов",
      info: "Криминально-психологический триллер.Оператор службы спасения пытается помочь похищенной девушке, которую везут в неизвестном направлении"
    },

    { title: "Законопослушный гражданин",
      info: "Окружной прокурор пошёл на сделку с преступниками и освободил их из тюрьмы. Тогда человек, чьи жена и ребёнок погибли от рук убийц, решает отомстить прокурору, совершив правосудие самостоятельно."
    }
];

//цикл for of

for (let film of movies)
{
    let h = document.createElement("h2"); // создаем заголовок
    h.innerText = film.title;

    let p = document.createElement("p"); // создаем параграф
    p.innerText = film.info;
    p.classList.add("hide");

document.body.append(h, p);


h.addEventListener ( "click" , () => {
    if ( p.classList.contains("show")){
        p.classList.replace("show", "hide");
    }else {
        p.classList.replace("hide", "show");
    }
})
}




//4)Клавиатура на Вашем экране! Создайте кнопки(button) со всеми английскими буквами. Застилизуйте их так, чтобы на экране была копия клавиатуры (только английские буквы, цвета и размеры кнопок выбирайте на свой вкус).

//5)Доработайте предыдущий скрипт так, чтобы при нажатии на кнопку ,сверху видеть буквы, на которые нажимает пользователь(имитация клавиатуры). Подсказка: можете использовать параграф.


let p = document.createElement("p"); 
document.body.appendChild(p);

let keyBoard = ["q","w","e","r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];

for (let i = 0; i < keyBoard.length; i++)
{
    let btn = document.createElement("button"); 
   
    btn.innerText = keyBoard[i];
    btn.style.background = "yellow";
    btn.style.fontSize = "35px";
    btn.style.padding = "10px 15px";
    btn.style.margin = "10px";

    document.body.appendChild(btn);

    btn.onclick = () => 
    {
        p.innerText = btn.textContent
    }
}

