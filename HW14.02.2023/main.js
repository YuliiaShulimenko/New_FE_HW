// Задана ссылка на api:
// let url = "https://dummyjson.com/products"
// Напишите fetch-запрос, который получит данные от сервера в виде массива и для каждого полученного элемента формирует div элемент с описанием товара.

// В div необходимо указать следующую информацию: 
// Изображение товара
// Имя продукта
// Стоимость продукта
// Рейтинг продукта (*)

// Требования к работе: 
// В работе должна присутствовать небольшая стилизация (grid/flex сетка). Все элементы можно расположить по правилам grid сетки (по 3 элемента)
// Скрипт должен быть разделен на назначенные функции (fetch, render, rating (*) )
// (*) У каждого товара назначен рейтинг (дробное число). Необходимо написать функцию rating(n), которая получает рейтинг и выводит в разметке 5 иконок звезды. В зависимости от n аргумента на разметке должно появиться n активных звезд из 5.
// Внутри функции аргумент необходимо округлить до целого числа по правилам математики


// Иконку можно импортировать сразу на разметку:
 
// <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

// Элемент неактивной звезды:
// <span class="fa fa-star"></span> 

// Активная звезда: 
// <span class="fa fa-star active"></span> 

// (css)
// .active {
// 	color: orange
// }


//////////////////// РЕШЕНИЕ /////////////////////////////////////////

let url = 'https://dummyjson.com/products';


let divRoot = document.querySelector('.root')


const render = products => {
const products_cards = products.map(({images,title,price,rating}) => {

      let productDiv = document.createElement('div');                // создаем див,куда будем помещать циклично свойства товаров
      productDiv.classList.add('classDiv');
      

      let productImage = document.createElement('img');              // изображение товара
      productImage.classList.add('classImg');
      productImage.src = images[0];
      console.log(images)
  

      let productTitle = document.createElement('h3');                 // имя продукта
      productTitle.classList.add('classTitle');
      productTitle.textContent = `Title: ${title}`;
     

      let productPrice = document.createElement('h3');                 // стоимость продукта
      productPrice.classList.add('classPrice');
      productPrice.textContent = `Price: ${price} $`;
     

      let productRating = document.createElement('div');                 // рейтинг продукта, создаем именно див,тк будет размещено 5 иконок
      productRating.classList.add('classRating');
      
      let string = "";
      for (let i = 1; i <= 5; i++) {
       if (i <  Math.round(rating)) {
        string += '<span class="fa fa-star active"></span>'
       }
        else {
            string += '<span class="fa fa-star "></span>'
           }
           productRating.innerHTML = string;
      }


      productDiv.append(productImage, productTitle, productPrice, productRating);
      divRoot.append(productDiv)
    })
};
    const apiUrl = (url) => {
        fetch('https://dummyjson.com/products')
          .then(res => res.json())
          .then(json => render(json.products))
      }


    apiUrl()


