/*First level: 1) Повторение всех тем!
2)С помощью javascript создать простой слайдер(карусель) из изображений.
Использовать только html,css и javascript (никаких сторонних плагинов).*/

let btnRight = document.querySelector(".right");
let btnLeft = document.querySelector(".left");
let img = document.querySelector(".picture");

let imgNum = 1;


btnLeft.onclick =()=>{
    imgNum--;
        if(imgNum === 0){
            imgNum = 1;
        }
        img.setAttribute("src", `/image/${imgNum}.jpg`);//интерпаляция
    };


btnRight.onclick =()=>{
    imgNum++;
        
        if(imgNum === 7){
            imgNum = 6;
        }
        img.setAttribute("src","/image/" + imgNum+".jpg");//конкотинация
    };

//Хотела в сиэсэс добавить плавный переход "транзишн", не понимаю к какому классу прилепить чтобы плавных переход картинок был.Повесила на кнопку с классом райт и лэфт,ничего не происходит









