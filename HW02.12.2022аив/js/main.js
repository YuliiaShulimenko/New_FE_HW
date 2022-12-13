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
        
        if(imgNum === 5){
            imgNum = 4;
        }
        img.setAttribute("src","/image/" + imgNum+".jpg");//конкотинация
    };











// img.setAttribute("src", `/image/${imgNum}.jpg`);// меняем путь




    // button.onclick =()=>{
    //     // console.log(button.classList);
    // if ( button.classList.contains("right") ) {
        
    //     imgNum++;
    //     console.log(imgNum);
    //     console.log(button.classList);
    //     if(imgNum === 5){
    //         imgNum = 4;
    //     }
    //     img.setAttribute("src", `/image/${imgNum}.jpg`);
      

    // }else if( button.classList.contains("left") ) {
    //     imgNum--;
    //     console.log(imgNum);
    //     console.log(button.classList);
    //     if(imgNum === 0){
    //         imgNum = 1;
    //     }
    //     img.setAttribute("src", `/image/${imgNum}.jpg`);
    //     }
    // }



