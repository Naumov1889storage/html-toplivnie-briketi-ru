document.querySelector(".burger").addEventListener("click", function () {
    document.querySelector(".overlay").classList.add("overlay_active");
    document.querySelector(".nav-section").classList.add("nav-section_active");
    document.querySelector(".pusher").classList.add("pusher_active");
});

document.querySelector(".overlay").addEventListener("click", function () {
    document.querySelector(".overlay").classList.remove("overlay_active");
    document.querySelector(".pusher").classList.remove("pusher_active");
    document.querySelector(".nav-section").classList.remove("nav-section_active");
});

let nav__link = document.querySelectorAll(".nav__link");
for(let i=0; i<nav__link.length; i++) {
    nav__link[i].addEventListener("click", function () {
        document.querySelector(".overlay").classList.remove("overlay_active");
        document.querySelector(".pusher").classList.remove("pusher_active");
        document.querySelector(".nav-section").classList.remove("nav-section_active");
    });
}

if (Boolean(document.querySelector('#feedback-section .slider__content'))) {
    let feedbackSlider = tns({
        "container": "#feedback-section .slider__content",
        "mouseDrag": true,

        // "autoplay": true,
        // "autoplayTimeout": 10000,
        // "autoplayHoverPause": true,
        // "autoplayButtonOutput": false,

        "controlsContainer": "#feedback-section .slider__controls",
        "navPosition": "bottom",
        "loop": true,
        "autoHeight": true,
        "gutter": 30,
    });
}


if (Boolean(document.querySelector('#map-container'))) {
    ymaps.ready(function (e) {
        var myCenter = [58.630025065823255,49.59629799999993];
        if (window.innerWidth < 850) {
            myCenter = [58.630525065823255,49.59800799999993];
        }
        let myMap = new ymaps.Map('map-container', {
                center: myCenter,
                zoom: 17,
                //controls: ['zoomControl', 'typeSelector', 'fullscreenControl', 'routeButtonControl']
                //controls: ['zoomControl', 'typeSelector', 'fullscreenControl', 'routeButtonControl']
            }, {}),

            // Создаём макет содержимого.
            MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
                '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
            ),

            myPlacemark = new ymaps.Placemark([58.629625065823255,49.59809799999993], {
                hintContent: 'Toplivnie-Briketi.ru',
                balloonContent: 'г. Киров, ул. Весенняя 93'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'img/placemark.png',
                // Размеры метки.
                iconImageSize: [140, 149],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-45, -135]
            }),

            myPlacemarkWithContent = new ymaps.Placemark([64.57721363065828, 39.85982436634828], [64.58178329172841, 39.87413663365174], {
                hintContent: '',
                balloonContent: '',
                iconContent: ''
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#imageWithContent',
                // Своё изображение иконки метки.
                iconImageHref: '',
                // Размеры метки.
                iconImageSize: [48, 48],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-24, -24],
                // Смещение слоя с содержимым относительно слоя с картинкой.
                iconContentOffset: [15, 15],
                // Макет содержимого.
                iconContentLayout: MyIconContentLayout
            });

        myMap.geoObjects
            .add(myPlacemark)
            .add(myPlacemarkWithContent);

        // myMap.behaviors.disable('scrollZoom');
        myMap.controls.remove('zoomControl');
        myMap.controls.remove('geolocationControl');
        myMap.controls.remove('searchControl');
        myMap.controls.remove('trafficControl');
        myMap.controls.remove('typeSelector');
        myMap.controls.remove('fullscreenControl');
        myMap.controls.remove('rulerControl');
    });
}

let dateNow = new Date();

let dayOfWeekNow = dateNow.getDay();
let dayOfMonthNow = dateNow.getDate();
let monthNow = dateNow.getMonth();
let yearNow = dateNow.getFullYear();

let daysTillEndOfPromotion = 7 - dayOfWeekNow;
let months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
let promotionDate = new Date(yearNow, monthNow, dayOfMonthNow+daysTillEndOfPromotion);
let promotionDateResult = promotionDate.getDate() + " " +
    months[(promotionDate.getMonth()+1)] + " " +
    promotionDate.getFullYear();

if (Boolean(document.querySelector('.promotionDateHtmlHolder'))) {
    let promotionDateHtmlHolder = document.querySelector(".promotionDateHtmlHolder");
    promotionDateHtmlHolder.innerHTML = promotionDateResult;
}