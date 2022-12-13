// let nums = [2, 3, 4, 5, 6];


// function creatP (array) {
//     for (let num of array){
//         let p = document.createElement("p"); 
//         p.innerText= num;

//         document.body.appendChild(p);
//         ponclick = () => {
//             p.innerText = p.innerText ** 2;
//        };
//    }
// }
// creatP(nums);



//   // 3) Доработайте предыдущий скрипт. Добавьте к каждому абзацу 2 кнопки. Одна кнопка при клике уменьшает число на единицу, а другая кнопка увеличивает на единицу.
  
// const decrement =  document.createElement("button");
// decrement.innerTextli = "+1";

// const increment =  document.createElement("button");
// decrement.innerText = "-1";


// decrement.onclick = function () {
//     p.innerText = +p.textContent + 1;
// };

// increment.onclick = function () {
//     p.innerText = +p.textContent - 1;
    
// }

// document.body.append(decrement, increment);


// let div = document.createElement("div"); 




let nums = [2, 3, 4, 5, 6];


function creatP (array) {
    for (let num of array){

        let div = document.createElement("div"); 

        let p = document.createElement("p"); 
        p.innerText= num;

        let increment =  document.createElement("button");
        increment.innerTextli = "+";
        
        let decrement =  document.createElement("button");
        decrement.innerText = "-";

        div.append(decrement, p, increment);
        document.body.appendChild(div);

        div.style.display = "flex";
        div.style.gap = "10px";
        div.style.marginBottom = "20px";


        p.onclick = () => {
            p.innerText = p.innerText ** 2;
       };

        decrement.onclick = function () {
        p.innerText = +p.textContent - 1;
    };
    
        increment.onclick = function () {
        p.innerText = +p.textContent + 1;
      };
    }  
}

    creatP(nums);

