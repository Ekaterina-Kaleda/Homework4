/*
Задания

В вёрстку можно вносить любые изменения (добавлять классы, дата-артрибуты, id и так далее) без изменения внешнего вида. Нельзя изменять другие JS файлы, подключаемые к HTML

    1.  На первом экране вы видите 3 блока с class="features-content". Они внутри себя содержат <div class="content-hide" ></div>, который
        содержит необходимую информацию. При наведении курсора на div с class="features-content" сделайте так, чтобы <div class="content-hide" ></div>
        показывался, а когда уводили курор, то блок с class="features-content" становился предыдущих размеров. 

        P.S. Нормально, если при наведении на див с class="features-content" он становится оранжевым - это можно не фиксить

    2.  На втором экране вы видите табы:
        а) Best Education
        б) Top Managemen
        в) Quality Meeting
        При нажатии на каждый из этих табов (квадратик или название) сайтик должен показывать соответствующий блок информации
        с нужной фотографией, описанием и заголовком.

        P.S. Сейчас показаны все блоки с описанием

    3. На третьем экране есть отсчёт обратного времени. Сделайте так, чтобы обратный отсчёт был в режиме реального времени (посекундно).
    В качестве дедлайна (крайней даты) возьмите 31.12.2023

    P.S. Подсказка - в Food_upd папке разбирается, как работать со счётчиком - это моя версия проекта Food

    4.  На 4-ом экране есть 5 карточек, заполненные информацией. Сделайте так, чтобы верстка подтягивалась и вставлялась в HTML документа
        из JS, а именно из массива coursesMass. Это значит, в самом HTML не должно быть верстки (вам нужно будет удалить),
        и она должна вставляться только через JS

*/

// Задание 1
const featuresContent = document.querySelectorAll('.features-content')

featuresContent.forEach((feature) => {
  feature.addEventListener('mouseover', (event) => {
    
    feature.querySelector('.content-hide').style.display='block';
  })
  feature.addEventListener('mouseout', (event) => {
    feature.querySelector('.content-hide').style.display='none';
  })
})

// Задание 2

const tabIcon = document.querySelectorAll('.tab_icon')

let lastClick = document.querySelector('.tab_icon');
let lastIcon = document.getElementById('tabs-1');

tabIcon.forEach((icon) => {
  icon.addEventListener('click', (event) => {
    lastClick.classList.remove('ui-tabs-active');
    lastIcon.style.display='none';
    icon.classList.add('ui-tabs-active');
    const id = icon.getAttribute('data-col');
    const iconBlock = document.getElementById(id)
    iconBlock.style.display='block';
    lastIcon = iconBlock;
    lastClick = icon;
  })
})

// Задание 3

let days = document.querySelector('.days').querySelector('.value'),
hours = document.querySelector('.hours').querySelector('.value'),
minutes = document.querySelector('.minutes').querySelector('.value'),
seconds = document.querySelector('.seconds').querySelector('.value');

let nowDate = new Date();
const deadDate = new Date(2023, 11, 31, 0, 0, 0, 0);

delta = (deadDate - nowDate) / 1000;
  days.innerHTML = Math.floor(delta / (24 * 60 * 60));
  hours.innerHTML = Math.floor((delta % (24 * 60 * 60)) / (60 * 60));
  minutes.innerHTML = Math.floor((delta % (60 * 60)) / 60);
  seconds.innerHTML = Math.floor(delta % 60);

setInterval(() => {
  nowDate = new Date();
  delta = (deadDate - nowDate) / 1000;
  days.innerHTML = Math.floor(delta / (24 * 60 * 60));
  hours.innerHTML = Math.floor((delta % (24 * 60 * 60)) / (60 * 60));
  minutes.innerHTML = Math.floor((delta % (60 * 60)) / 60);
  seconds.innerHTML = Math.floor(delta % 60);
}, 1000)


// Задание 4

const coursesMass = [
  {
    cardImg: {
      src: 'assets/images/courses-01.jpg',
      alt: 'Course #1',
    },
    header: 'Digital Marketing',
    descr:
      'You can get free images and videos for your websites by visiting Unsplash, Pixabay, and Pexels.',
    authorImg: {
      src: 'assets/images/author-01.png',
      alt: 'Author #1',
    },
  },
  {
    cardImg: {
      src: 'assets/images/courses-02.jpg',
      alt: 'Course #2',
    },
    header: 'Business World',
    descr:
      'Quisque cursus augue ut velit dictum, quis volutpat enim blandit. Maecenas a lectus ac ipsum porta.',
    authorImg: {
      src: 'assets/images/author-02.png',
      alt: 'Author #2',
    },
  },
  {
    cardImg: {
      src: 'assets/images/courses-03.jpg',
      alt: 'Course #3',
    },
    header: 'Media Technology',
    descr:
      'Pellentesque ultricies diam magna, auctor cursus lectus pretium nec.',
    authorImg: {
      src: 'assets/images/author-03.png',
      alt: 'Author #3',
    },
  },
  {
    cardImg: {
      src: 'assets/images/courses-04.jpg',
      alt: 'Course #4',
    },
    header: 'Communications',
    descr:
      'Download free images and videos for your websites by visiting Unsplash, Pixabay, and Pexels.',
    authorImg: {
      src: 'assets/images/author-04.png',
      alt: 'Author #4',
    },
  },
  {
    cardImg: {
      src: 'assets/images/courses-05.jpg',
      alt: 'Course #5',
    },
    header: 'Business Ethics',
    descr:
      'Pellentesque ultricies diam magna, auctor cursus lectus pretium nec. Maecenas finibus lobortis enim.',
    authorImg: {
      src: 'assets/images/author-05.png',
      alt: 'Author #5',
    },
  },
]

let place = document.querySelector('.carousel__wrapper')

for (let i in coursesMass) {
  place.innerHTML += `<div class="carousel__item">
            <img src="${coursesMass[i].cardImg.src}" alt="${coursesMass[i].cardImg.alt}">
            <div class="carousel__content">
              <h4>${coursesMass[i].header}</h4>
              <p>${coursesMass[i].descr}</p>
              <div class="item__last-row">
                <img src="${coursesMass[i].authorImg.src}" alt="${coursesMass[i].authorImg.alt}">
                <div class="text-button-pay">
                  <a href="#">Pay <i class="fa fa-angle-double-right"></i></a>
                </div>
              </div>

            </div>
          </div>`
}
