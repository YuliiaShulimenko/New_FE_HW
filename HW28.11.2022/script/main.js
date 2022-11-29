// First level: Прочитать следующие темы:
// 1)  https://learn.javascript.ru/default-browser-action
// 2) https://htmlacademy.ru/blog/js/prevent-default
// 3) https://learn.javascript.ru/forms-controls


// Отправить ссылку на Ваш репозиторий, где есть решение на следующие задачи:


//1)К сегодняшней форме добавьте кнопку. При клике на кнопку с помощью alert выводите итоговую сумму всех товаров.

const form = document.querySelector("#form");
const titleInput = document.querySelector("#title");
const priceInput = document.querySelector("#price");
const sectionProducts =document.querySelector("#products");

let products =[];

titleInput.setAttribute("required", "true");
priceInput.setAttribute("required", "true");

form.onsubmit = (e) => {
    e.preventDefault();
   // console.log(titleInput.value,priceInput.value);

   products.push({
    title:titleInput.value,
    price:priceInput.value,
   });

   //creatNode(titleInput.value,priceInput.value);
    newProducts();
    titleInput.value ="";
    priceInput.value="";

    console.log(products);
};


function creatNode(title,price) {
    let div = document.createElement("div");
    div.classList.add("products");

    let titleP = document.createElement("p");
    let priceP = document.createElement("p");

    titleP.innerText= title;
    priceP.innerText= price;

    div.append(titleP,priceP);
    div.ondblclick = () => {
        alert(title)
    };
    sectionProducts.append(div);
}


function newProducts() {
    sectionProducts.innerHTML = "";
    for (let i = 0; i < products.length; i++) {
        creatNode(products[i].title,products[i].price);
    }
}

//==========================


const calculator= document.querySelector(".result")


calculator.onclick = () => {
let sum_price = 0;
for (let i = 0; i <products.length; i++) {
    sum_price = sum_price + +products[i].price;
    }
    alert("Full price = " + sum_price); //конкатинация
}


//2)Создайте input для ввода пароля. Рядом с input-ом добавьте так же кнопку. При первом клике на кнопку текст должен скрыться, а при повторном нажатии должен появиться обратно.


let divPass = document.createElement("div");
divPass.style.display = "flex";


let inputPass = document.createElement("input");
inputPass.setAttribute("type", "text");
inputPass.style.border = "1px solid black";
inputPass.style.width= "250px";
inputPass.style.fontSize = "20px";
inputPass.style.height = "70px";
inputPass.style.background = "#fdcb6e";


let btnPass = document.createElement("button");
btnPass.innerText = "Нажать";
btnPass.style.border = "1px solid black";
btnPass.style.background = "#6c5ce7";
btnPass.style.fontSize = "20px";
btnPass.style.width = "250px";
btnPass.style.height = "70px";
btnPass.style.color = "black";




divPass.append(inputPass, btnPass);
document.body.appendChild(divPass);



btnPass.addEventListener('click', () => {
    inputPass.type = inputPass.type === 'password' ? 'text' : 'password'
});

