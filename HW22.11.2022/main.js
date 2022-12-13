/*Отправить ссылку на Ваш репозиторий, где есть решение на следующую задачу:
Создайте массив с ссылками на картинки. На основе этого массива формируется множество маленьких картинок в верхней части интерфейса. При нажатии на одну из картинок забирается ссылка на эту картинку и в нижней части интерфейса отображается в большем размере.*/

//сoздаем массив 
let links = [
{ link :"https://www.instagram.com/",
  link :"https://www.facebook.com/",
  link :"https://www.google.com/",
}
]

for (let i = 0; i < links.length; i++) {
   //создаем элементы
   let image = document.createElement("img");
   image.setAttribute("src", links[i].link)
    image.style.width = "100px";
    document.body.append(image);
}




//ИЛИ

let mageS = ["https://www.instagram.com/", "https://www.facebook.com/", "https://www.google.com/"];
let divUp= document.createElement("div");
let divCenter= document.createElement("div");

for (let picture of mageS) {
    //создаем элемент 
    let image = document.createElement("img");
    image.setAttribute("src", picture);
     image.style.width = "100px";
     divUp.appendChild(image);
     image.onclick = () => {
        bigImg.setAttribute("src", picture );
        divCenter.append(bigImg);
     }
     document.body.append(divUp);
 }
 
let bigImg= document.createElement("img");
bigImg.style.width="200px";

let divDown= document.createElement("div");
divDown.appendChild(bigImg);
// divDown.style.margin = "0 auto";

// divUp.style.margin = "0 auto";

divCenter.appendChild(divDown);
divCenter.style.display = "flex";
divCenter.style.flexDirection = "column";
divCenter.style.alignItems = "center";

document.body.appendChild(divCenter);


//24/11/2022 ДОМАШКА РОЗА

//1)Создайте параграф и одну кнопку. Добавьте стили для этих элементов используя javascript.Сделайте так, чтобы при клике на кнопку исчезал параграф , а при повторном клике появлялся обратно.

let p = document.createElement("p");
let btn = document.createElement("button");
p.classList.add("show");
btn.innerText = "Hello";
p.innerHTML = "Good morning everybody";
btn.style.fontSize= "20px";
btn.style.background = "pink";
p.style.fontSize= "30px";


//добавить стили в индекс

document.body.append(p,btn);

btn.addEventListener("click" , () => {

   btn.addEventListener ( "click" , () => {
    if ( p.classList.contains("show")){
        p.classList.replace("show", "hide");
    }else {
        p.classList.replace("hide", "show");
    }
    })
})






//2)Создайте массив, содержащий названия цветов. На основе этого массива создайте список. При наведении на один из пунктов должен поменяться цвет фона всего документа на данный цвет.

let color = ["white","black","pink","yellow","green"];

let ul = document.createElement("ul");

for (let i = 0; i < color.length; i++) {
    let li = document.createElement("li");
    li.innerText = color[i];
    ul.appendChild(li);

    li.onmouseover= () => {
        document.body.style.background = color[i];
}
}
document.body.appendChild(ul);




//3)Создайте массив с Вашими любимыми фильмами. Напишите цикл, который создает заголовки на основе этого массива. При клике на заголовок внизу появляется краткое описание данного фильма.

let movies= [
    { title:"AAAA",
      info:"ydrhfdjtfj",
},

{ title:"BBBB",
info:"arhahgm",
},

{ title:"CCCC",
info:"trsjtz",
}

];

for (let film of movies){
    let h = document.createElement("h2"); 
h.innerText = movies.title;

let p = document.createElement("p"); 
p.classList.add("hide");

document.body.append(h, p);


    h.addEventListener("click" , () => {
     if (p.classList.contains("show")){
         p.classList.replace("show", "hide");
     }else {
         p.classList.replace("hide", "show");
     }
 
 })
 
}






//4)Клавиатура на Вашем экране! Создайте кнопки(button) со всеми английскими буквами. Застилизуйте их так, чтобы на экране была копия клавиатуры (только английские буквы, цвета и размеры кнопок выбирайте на свой вкус).



let keyBoard = ["q","w","e","r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];

let p = document.createElement("p"); 
document.body.appendChild(p);


for (let i = 0; i < keyBoard.length; i++) {
    let btn = document.createElement("button"); 
   
    btn.innerText = keyBoard[i];
    btn.style.background = "yellow";
    btn.style.fontSize = "35px";
    btn.style.padding = "10px 15px";
    btn.style.margin = "10px";

    document.body.appendChild(btn);
}


//5 Доработайте предыдущий скрипт так, чтобы при нажатии на кнопку ,сверху видеть буквы, на которые нажимает пользователь(имитация клавиатуры). Подсказка: можете использовать параграф.


