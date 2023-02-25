///////////////////////////// ЗАДАНИЕ ///////////////////////////////////

// Задана ссылка на источник:
// let url = "https://dummyjson.com/products"

// Цель задачи -  реализовать страницу с переключением товаров. К работе выдвинуты следующие требования:

// 1.Структура страницы должна приблизительно соответствовать макету (см ниже). Стилизация элементов может быть произвольной
// 2.Должны быть реализованы следующие функции: fetch, render, rating и события для кнопок.
// 3.В момент загрузки страницы должен отображаться первый товар (id = 1)
// 4.После наступления события должен формироваться новый запрос, получающий id следующего/предыдущего товара.
// 5.Предусмотрите возможность ограничить переключение на несуществующие товары (id которых меньше 1 или больше 30)

//////////////////// РЕШЕНИЕ /////////////////////////////////////////

// let url = 'https://dummyjson.com/products';

let divRoot = document.querySelector(".root");

const render = ({ title, price, images, rating }) => {
  
  divRoot.innerHTML = ""; // каждый раз очищаем рут чтобы карточки при клике не добавлялись,а каждый раз отображалась по одной

  let productDiv = document.createElement("div"); // создаем див,куда будем помещать  свойства товаров
  productDiv.classList.add("classDiv");

  let productImage = document.createElement("img"); // изображение товара
  productImage.classList.add("classImg");
  productImage.src = images[0];

  let productTitle = document.createElement("h3"); // имя продукта
  productTitle.classList.add("classTitle");
  productTitle.textContent = `Title: ${title}`;

  let productPrice = document.createElement("h3"); // стоимость продукта
  productPrice.classList.add("classPrice");
  productPrice.textContent = `Price: ${price} $`;

  let productRating = document.createElement("div"); // рейтинг продукта, создаем именно див,тк будет размещено 5 иконок
  productRating.classList.add("classRating");

  let string = "";
  for (let i = 1; i <= 5; i++) {
    if (i < Math.round(rating)) {
      string += '<span class="fa fa-star active"></span>';
    } else {
      string += '<span class="fa fa-star "></span>';
    }
    productRating.innerHTML = string;
  }

  productDiv.append(productImage, productTitle, productPrice, productRating);
  divRoot.append(productDiv);
};

let id = 1;
const [left_btn, right_btn] = document.querySelectorAll(".btn");

right_btn.addEventListener("click", () => {
  if (id != 30) {
    getProduct(++id);
  } else {
    id = 1;
    getProduct(id);
  }
});

left_btn.addEventListener("click", () => {
  if (id != 1) {
    getProduct(--id);
  } else {
    id = 30;
    getProduct(id);
  }
});

const getProduct = (id) => {
  fetch(`https://dummyjson.com/products/${id}`)
    .then((res) => res.json())
    .then((json) => render(json));
};

getProduct(id);
