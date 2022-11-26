/*First level: Прочитать следующие темы:
1) https://learn.javascript.ru/function-expressions
2) https://habr.com/ru/company/ruvds/blog/428566 
3) https://learn.javascript.ru/arrow-functions-basics 
4)https://htmlacademy.ru/blog/js/callback-functions 
5) https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Strictmode
6) https://www.w3schools.com/jsref/objevent.asp
7) https://learn.javascript.ru/introduction-browser-events
Отправить ссылку на Ваш репозиторий, где есть решение на следующую задачу:*/



/*ЗАДАЧА
Создайте массив с ссылками на картинки. На основе этого массива формируется множество маленьких картинок в верхней части интерфейса. При нажатии на одну из картинок забирается ссылка на эту картинку и в нижней части интерфейса отображается в большем размере.*/

let mageS = ["https://bykvu.com/wp-content/uploads/2015/11/21/9f3c27a5f40194259a75097706de0786-846x1100.jpg", "https://art-assorty.ru/uploads/posts/2012-03/1332058674_mona_liza_gioconda-leonardo-da-vinchi.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfYu-FFklSbOwrH_mIfwpfvZ2y69ZrPteIaCVhHQ_AeqtmtZSML42Np5FdY-n7yjJFTLo&usqp=CAU"];


let divUp= document.createElement("div");
let divCenter= document.createElement("div");

for (let picture of mageS) {
    //создаем элемент 
    let image = document.createElement("img");
    image.setAttribute("src", picture);
     image.style.width = "150px";
     image.style.height = "200px";
     divUp.appendChild(image);
     image.onclick = () => {
        bigImg.setAttribute("src", picture );
        divCenter.append(bigImg);
     }
     document.body.append(divUp);
 };
 
let bigImg= document.createElement("img");
bigImg.style.width="400px";

let divDown= document.createElement("div");
divDown.appendChild(bigImg);

divCenter.appendChild(divDown);

divCenter.style.display = "flex";
divCenter.style.flexDirection = "column";
divCenter.style.alignItems = "center";

document.body.appendChild(divCenter);

//Хотела 3 маленьких картинки разместить сверху по центру,не получается