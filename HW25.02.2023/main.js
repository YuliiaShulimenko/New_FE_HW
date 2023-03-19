// ****😢😢😢*******Тигран,я честно 2 недели каждый день сидела над этим сайтом,у меня то там,то сям вечно что-то ломается,верстка куда-то ползет вечно,сделаю кнопку,не работает точка,сделаю точку,не крутит слайд.В общем у меня просто уже нервов и сил не хватает доделать адаптив,глаз замылен и ошибок не вижу
//ПОэтому сделала столько,на сколько моих сил и нервов хватила,не судите строго

// Не получается:

// -не сделала открывающееся окно меню(мобильное окно меню)_Т.Е. СДЕЛАЛА,НО ПРИШЛОСЬ ЗАКОММЕНТИТЬ,ТК ОНО СРАЗУ ВЫЛАЗИТ И ЧТОБЫ ЕГО УБРАТЬ,МНЕ НУЖНО СУЗИТЬ ЭКРАН ДО МЕДИА ЗАПРОСА С ПОЯВЛЕЕМ БУРГЕРА И УБРАТЬ ЭТО МОДАЛЬНОЕ ОКНО,ХОТЯ ИЗНАЧАЛЬНО ЗАДАЮ ЕМУ ДИСПЛЕЙ НАН
// -Див майкрасофт где*клиенты) по стрелке не листает

//-на последнем слайде с отзывами вроде слайдер работает,но если я влево жму стрелочку и оно пролистывается в обратную сторону дальше 1-й точки,то оно куда-то вылазит и экран белый становится


//я не знаю как исправить эти ошибки и довести до ума,пыталась написать одну универсальную фунцию для трех слайдов,обязательно что-то где-то ломается

// Задана ссылка на figma-макет:
// https://www.figma.com/file/AnxdgZrMkMxfNcDMl13Rhi/Template?node-id=0%3A1&t=zq6TBZXoeVBLObwE-0

// Задача: сверстать страницу, учитывая расположение и позиционирование элементов согласно макету.

// Требования к работе:
// Наличие семантических тегов
// Количество заголовков (H1) на странице не должно превышать единицы
// У каждой используемой картинки должна быть задана ширина/высота
// В макете упоминается слайдер. Его необходимо реализовать на стороне JS. В качестве 2,3,4 элемента слайда необходимо взять 1 картинку (Референс: макет).
// Страница должна быть адаптивной (Референс: макет).
// Для разрешение (ширина - 800px) необходимо реализовать бургер меню с выпадающим модальным окном (Референс: макет).





// 888888b.                                               
// 888  "88b                                              
// 888  .88P                                              
// 8888888K.   8888b.  88888b.  88888b.   .d88b.  888d888 
// 888  "Y88b     "88b 888 "88b 888 "88b d8P  Y8b 888P"   
// 888    888 .d888888 888  888 888  888 88888888 888     
// 888   d88P 888  888 888  888 888  888 Y8b.     888     
// 8888888P"  "Y888888 888  888 888  888  "Y8888  888     

// создаем массив для верхнего слайда,где будут меняться кнопки и текст
let slider_index = 0;

const banner = [
  {
    id: 1,
    title: "Бухгалтерские услуги в вашем городе",
    button_text: "Наша презентация",
    slider_src: "./image/Rectangle00.png",
  },
  {
    id: 2,
    title: "Специальные предложения",
    button_text: "Заказать звонок",
    slider_src: "./image/Rectangle00.png",
  },
  {
    id: 3,
    title: "Корпоративным клиентам",
    button_text: "Оставить заявку",
    slider_src: "./image/Rectangle00.png",
  },
  {
    id: 4,
    title: "Мы предлагаем сотрудничество",
    button_text: "Вакансии",
    slider_src: "./image/Rectangle00.png",
  },
];

let currentWidth = 1920;
let bannerSlider = document.querySelector(".banner_slider");

let bannerText = document.querySelector(".bannerText");
let bannerBtn = document.querySelector(".bannerBtn");

let right_btn = document.querySelector(".banner_arrow_right");               //подключаем кнопку вправо
let left_btn = document.querySelector(".banner_arrow_left");                 //подключаем кнопку влево
let banner_rounds = document.querySelectorAll(".banner_round");              //подключаем кружочки





function slideList(){ 
    right_btn.addEventListener("click", () => {
    if (slider_index < banner.length - 1) {
        slider_index++;
      bannerSlider.style.left = `${-1 * slider_index * currentWidth}px`;
      changeRounds(slider_index)
    } else {
        slider_index = 0
        bannerSlider.style.left = `${-1 * slider_index * currentWidth}px`;
    changeRounds(slider_index)
}})

left_btn.addEventListener("click", () => {
   
    if (slider_index != 0) {
        slider_index--;

      bannerSlider.style.left = `${-1 * slider_index * currentWidth}px`;
   
    } else { 
        slider_index = banner.length - 1;
      bannerSlider.style.left = `${-1 * slider_index * currentWidth}px`;
    }
    changeRounds(slider_index)
})


function changeRounds(slider_index) {
    for (let i = 0; i < banner.length; i++) {
      if (slider_index==i) {
        banner_rounds[i].classList.add("active")
        bannerText.innerHTML = banner[i].title
        bannerBtn.innerHTML = banner[i].button_text
      } else {
        banner_rounds[i].classList.remove("active")
      }
    }
  }


  function roundsActive() {
    for (let i = 0; i < banner.length; i++) {
        banner_rounds[i].onclick = () => {
            changeRounds(i);
            slider_index = i;
            bannerSlider.style.left = `${-1 * slider_index * currentWidth}px`;
      }
    }
  }
  roundsActive()
}
  slideList()







//   .d8888b.  888 d8b                   888             
//   d88P  Y88b 888 Y8P                   888             
//   888    888 888                       888             
//   888        888 888  .d88b.  88888b.  888888 .d8888b  
//   888        888 888 d8P  Y8b 888 "88b 888    88K      
//   888    888 888 888 88888888 888  888 888    "Y8888b. 
//   Y88b  d88P 888 888 Y8b.     888  888 Y88b.       X88 
//    "Y8888P"  888 888  "Y8888  888  888  "Y888  88888P' 
             




//У меня уже глаза замылились...Тут работает только при нажатии на кружочки


const clients_arrow_left = document.querySelector('.clients_arrow_left');
const clients_arrow_right = document.querySelector('.clients_arrow_right');
const clients_round = document.querySelectorAll('.clients_round');
const clientsList = document.querySelector('.clientsList');
let activePos = 0;

for (let i = 0; i < clients_round.length; i++) {
  clients_round[i].addEventListener('click', function () {
    activePos = i;
    let currentMarginLeft = activePos * -1100;
    clientsList.style.marginLeft = `${currentMarginLeft}px`;
    toggleRoundClass(activePos);
  });
}
clients_arrow_left.addEventListener('click', () => {
  activePos--;
  if (activePos < 0) {
    activePos = 0;
  }
  let currentMarginLeft = activePos * -1100;
  clientsList.style.marginLeft = `${currentMarginLeft}px`;
  toggleRoundClass(activePos);
});
clients_arrow_right.addEventListener('click', () => {
  activePos++;
  if (activePos > clients_round.length - 1) {
    activePos = clients_round.length - 1;
  }
  let currentMarginLeft = activePos * -1100;
  clientsList.style.marginLeft = `${currentMarginLeft}px`;
  toggleRoundClass(activePos);
});
function toggleRoundClass(activePos) {
  clients_round.forEach(function (item, index) {
    item.classList.remove('clients_round_active');
    if (activePos === index) {
      item.classList.add('clients_round_active');
    }
  });
}




// 8888888b.                   d8b                                 
// 888   Y88b                  Y8P                                 
// 888    888                                                      
// 888   d88P .d88b.  888  888 888  .d88b.  888  888  888 .d8888b  
// 8888888P" d8P  Y8b 888  888 888 d8P  Y8b 888  888  888 88K      
// 888 T88b  88888888 Y88  88P 888 88888888 888  888  888 "Y8888b. 
// 888  T88b Y8b.      Y8bd8P  888 Y8b.     Y88b 888 d88P      X88 
// 888   T88b "Y8888    Y88P   888  "Y8888   "Y8888888P"   88888P'



const slides = document.querySelectorAll('.reviews_slide'),
      round  = document.querySelectorAll('.reviews_round'),
      prev   = document.querySelector('.reviews_arrow_left'),
      next   = document.querySelector('.reviews_arrow_right'),
      slider = document.querySelector('.reviews_frame');

let slideIndex = 1;

const activeDot = () => {
  round.forEach(item => item.classList.remove('reviews_round_active'));
  round[slideIndex - 1].classList.add('reviews_round_active');
}

const activeSlide = (n) => {
  slideIndex += n;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  if (slideIndex < 1) {
    slideIndex = slides.length;
  }
  slider.style.transform = `translateX(${-slideIndex * 1110}px)`;
  activeDot();
}

prev.addEventListener('click', function() {
  activeSlide(-1);
});
next.addEventListener('click', function() {
  activeSlide(1);
});

round.forEach((item, index) => {
  item.addEventListener('click', function() {
    slideIndex = index + 1;
    slider.style.transform = `translateX(${-slideIndex * 1110}px)`;
    activeDot();
  });
});



//МОДАЛЬНОЕ ОКНО ПРИШЛОСЬ ЗАКОМЕНТИРОВАТЬ,ТК ХОТЯ Я ЕМУ ВЫСТАВИЛА ИЗНАЧАЛЬНО ДИСПЛЕЙ НАН,ТО ОНО У МЕНЯ ОТОБРАЖАЛОСЬ СРАЗУ
//-----------------

// const burgerBtn =document.querySelector(".burger")
// const modal = document.querySelector(".modal")
// let showModal = false

// burgerBtn.onclick=()=>{
//   showModal = !showModal
//   showModal ? modal.style.display= "flex" : modal.style.display= "none"
//   console.log(showModal)
// }