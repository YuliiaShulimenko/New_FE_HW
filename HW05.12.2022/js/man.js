/*First level: 1) Прочитать следующие темы:
    1) https://learn.javascript.ru/datetime 
    2) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/GlobalObjects/Math/random 
    3)  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/GlobalObjects/Math/round 
    4)   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/GlobalObjects/Math/floor 
    5)  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/GlobalObjects/Math/ceil 


2) Улучшить игру <<Камень-ножницы-бумага>>:
    1) измените ввод пользователя (сделайте с помощью input, клик на определенные картинки или другим способом на Ваш выбор).
     2) измените вывод победителя (вместо alert используйте картинку, GIF, анимацию или другой способ вывода.
     3) улучшите стиль всего приложения.*/

// const startBtn = document.querySelector("#start");

// function start() {
//   let compMove = Math.floor(Math.random() * 3);
//   let userMove = parseInt(prompt("Камень,бумага или ножницы?"));

//   console.log(userMove);

//   if (isNaN(userMove) || userMove > 2 || userMove < 0) {
//     alert("Введите число 0-2");
//   } else if (compMove === 0 && userMove === 1) {
//     alert("Вы выиграли с помощью бумаги");
//   } else if (compMove === 0 && userMove === 2) {
//     alert("Комп выиграли у Вас с помощью камня");
//   } else if (compMove === 1 && userMove === 0) {
//     alert("Комп выиграли у Вас с помощью бумаги");
//   } else if (compMove === 1 && userMove === 2) {
//     alert("Вы выиграли с помощью ножниц");
//   } else if (compMove === 2 && userMove === 0) {
//     alert("Вы выиграли с помощью камня");
//   } else if (compMove === 2 && userMove === 1) {
//     alert("Комп выиграли у Вас с помощью ножниц");
//   } else {
//     alert("У вас ничья");
//   }
// }
// startBtn.onclick = () => start();

//===================================

// const startBtn = document.querySelector("#start");
// let divGame = document.querySelector(".game");
// let divResult = document.querySelector(".result");
// let gameBody = document.querySelector(".game-body");
// let stepBtn = document.querySelector(".stepBtn");
// let list =document.querySelectorAll("input");
// let compMove ;
// let userMove ;
// let winner= document.querySelector(".winner");
// let looser= document.querySelector(".looser");
// let nichya= document.querySelector(".nichya");


// startBtn.onclick = () => {
//     let par = document.createElement("p");
//     par.innerText = "Выбирите картинку 1-2-3";
//     par.style.fontSize = "30px";
//     par.style.border = "2px solid red";
//     par.style.width = "450px";
//     par.style.margin = "30px auto"
//     par.style.textAlign = "center";

//     divGame.appendChild(par);

//   gameBody.style.display = "none";
//   divGame.style.display = "block";
//   clear();
// };




// stepBtn.onclick =()=> {
//   // divResult.style.display= "none";
//   winner.style.display= "none";
//   looser.style.display= "none";
//   nichya.style.display= "none";
//   stepBtn.style.display="none";
//   clear();
// }

// function clear() {
//   for (let i = 0; i < list.length; i++) {
//     list[i].addEventListener ("click", 
    
//     function foo() {
//       userMove = parseInt(list[i].name);
//     compMove = Math.floor(Math.random() * 3);
//     console.log(userMove, compMove);
    
//     if (compMove === 0 && userMove === 1) {
//       winner.style.display= "block";
//     } else if (compMove === 0 && userMove === 2) {
//       looser.style.display= "block";
//     } else if (compMove === 1 && userMove === 0) {
//       looser.style.display= "block";
//     } else if (compMove === 1 && userMove === 2) {
//       winner.style.display= "block";
//     } else if (compMove === 2 && userMove === 0) {
//       winner.style.display= "block";
//     } else if (compMove === 2 && userMove === 1) {
//       looser.style.display= "block";
//     } else if (compMove === userMove){
//       nichya.style.display= "block";
//       }
      
//       stepBtn.style.display="block";
  
//       for (let i = 0; i < list.length; i++) {
//         list[i].removeEventListener("click", foo);

        
//       }
  
//     })
//   }
//     }   



    const startBtn = document.querySelector("#start");
let divGame = document.querySelector(".game");
let divResult = document.querySelector(".result");
let gameBody = document.querySelector(".game-body");
let stepBtn = document.querySelector(".stepBtn");
let list =document.querySelectorAll("input");
let compMove ;
let userMove ;
let winner= document.querySelector(".winner");
let looser= document.querySelector(".looser");
let nichya= document.querySelector(".nichya");


startBtn.onclick = () => {
    let par = document.createElement("p");
    par.innerText = "Выбирите картинку 1-2-3";
        par.style.fontSize = "30px";
        par.style.border = "2px solid red";
        par.style.width = "450px";
        par.style.margin = "30px auto"
        par.style.textAlign = "center";
    divGame.appendChild(par);

  gameBody.style.display = "none";
  divGame.style.display = "block";
  clear();
};




stepBtn.onclick =()=> {
  winner.style.display= "none";
  looser.style.display= "none";
  nichya.style.display= "none";
  stepBtn.style.display="none";
  clear();
}

function clear() {
  for (let i = 0; i < list.length; i++) {
    list[i].addEventListener ("click", 
    
    function foo() {
      userMove = parseInt(list[i].name);
    compMove = Math.floor(Math.random() * 3);
    console.log(userMove, compMove);
    
    if (compMove === 0 && userMove === 1) {
      winner.style.display= "block";
    } else if (compMove === 0 && userMove === 2) {
      looser.style.display= "block";
    } else if (compMove === 1 && userMove === 0) {
      looser.style.display= "block";
    } else if (compMove === 1 && userMove === 2) {
      winner.style.display= "block";
    } else if (compMove === 2 && userMove === 0) {
      winner.style.display= "block";
    } else if (compMove === 2 && userMove === 1) {
      looser.style.display= "block";
    } else if (compMove === userMove){
      nichya.style.display= "block";
      }
      
      stepBtn.style.display="block";
  
      for (let i = 0; i < list.length; i++) {
        list[i].removeEventListener("click", foo);

        
      }
  
    })
  }
    }


    //ВЫШЕ,ЧТО ЗАКОММНТИРОВАНА ,ТО ПЫТАЛАСЬ ЗАПИХНУТЬ ФУНКЦИЮ В ФУНКЦИЮ,ТК ПРОБЛЕМА ЗАКЛЮЧАЕТСЯ В ТОМ,ЧТО ПРИ НАЖАТИИ КНОПКИ TRY AGAIN, У МЕНЯ ПРИ СЛЕДУЮЩЕМ ВЫБОРЕ КАРТИНКИ "КАМЕНЬ,НОЖНИЦЫ,БУМАГА" ОТОБРАЖАЕТСЯ 2 ИСХОДА,Т.Е ПОДТЯЯГИВАЮТСЯ 2 КАРИНКИ,А ИНОГДА И ВСЕ ТРИ:ПОБЕДА,ПРОИГРЫШЬ,НИЧЬЯ