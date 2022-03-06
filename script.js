import Swiper from 'https://unpkg.com/swiper@7.3.3/swiper-bundle.esm.browser.min.js';
import anime from './libs/animeJS/anime.es.js';

import { Fancybox } from "https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.esm.js";
/* global ymaps */
$(document).ready(function () {
  $(window).scroll(function () {
    checkScroll();
  });

  checkScroll();

  $('.header__menu-hamburger').click(function(){
    let $elem = $(this);
    $elem.toggleClass(`header__menu-hamburger--active`);
    if(!$elem.hasClass(`header__menu-hamburger--active`) && !window.pageYOffset > 0) {
      $('.header').removeClass(`header--scroll`);
    } else {
      $('.header').addClass(`header--scroll`);
    }
    $('.header__mobile-menu').toggleClass(`active`);

  })

  
  $('.header__mobile-menu-item').click(function(e){
    e.preventDefault();
    let target = $(this).attr('href');
    $('html, body').animate({scrollTop: $(target).offset().top - 150}, 1000);
    return false;
  });

  $('.header__menu-item').click(function(e){
    e.preventDefault();
    let target = $(this).attr('href');
    $('html, body').animate({scrollTop: $(target).offset().top - 150}, 1000);
    return false;
  });

  $('.footer__menu-link').click(function(e){
    e.preventDefault();
    let target = $(this).attr('href');
    $('html, body').animate({scrollTop: $(target).offset().top - 150}, 1000);
    return false;
  });

function checkScroll() {
    var curScroll = $(window).scrollTop();
    var header = $('.header');
  
    if (header) {
      if (curScroll > 1) {
        header.addClass('header--scroll');
      } else {
        header.removeClass('header--scroll');
      }
    }
  }
  animateSliderFirstBanner();
  const firstBannerSlider = new Swiper('.first-banner__slider', {
    speed: 600,
    spaceBetween: 100,
    autoplay: {
      delay: 4000,
    },
  
    pagination: {
      el: `.first-banner__dots`,
      clickable: true,
      renderBullet: function (index, className) {
        return `<span class="${className} first-banner__dot">0${
          index + 1
        }</span>`;
      },
      bulletActiveClass: `first-banner__dot--active`,
    },
    on: {
      slideChange: function () {
        $('.first-banner__tab').removeClass(`first-banner__tab--active`);
        $('.first-banner__tabs')
          .find(`[id='${this.activeIndex}']`)
          .addClass(`first-banner__tab--active`);
        animateSliderFirstBanner();
      },
    },
  });
  
  $('.first-banner__tab').click(function () {
    let $elem = $(this);
    let tabId = $elem.attr('id');
    $('.first-banner__tab').removeClass(`first-banner__tab--active`);
    $('.first-banner__tabs')
      .find(`[id='${tabId}']`)
      .addClass(`first-banner__tab--active`);
    firstBannerSlider.slideTo(tabId);
  });

  new WOW({
    boxClass: "wow1",
    offset: 0,
    mobile: true,
    live: true,
    callback: function() {

      anime({
        targets: `.video-block__content`,
        translateX: ["-200px", 0],
        opacity: [0, 1],
        easing: "linear",
        delay: 600
      });

      anime({
        targets: `.video-block__video`,
        translateX: ["200px", 0],
        opacity: [0, 1],
        easing: "linear",
        delay: 600
      });


    }
  }).init();
  
  function animateSliderFirstBanner() {
    anime({
      targets: `.first-banner__tab--active .first-banner__tab-line`,
      width: [0, '100%'],
      opacity: [0.5, 1],
      easing: 'linear',
      delay: 500,
      duration: 3000,
    });
  
    anime({
      targets: `.first-banner__slide-img`,
      translateY: ['25px', 0],
      opacity: [0, 1],
      easing: 'linear',
      delay: 500,
    });
  
    anime({
      targets: `.first-banner__slide-title`,
      translateY: ['25px', 0],
      opacity: [0, 1],
      easing: 'linear',
      delay: 600,
    });
    anime({
      targets: `.first-banner__slide-subtitle`,
      opacity: [0, 1],
      easing: 'linear',
      delay: 700,
    });
    anime({
      targets: `.first-banner__slide-link--anime`,
      translateY: ['-25px', 0],
      opacity: [0, 1],
      easing: 'linear',
      delay: 500,
    });
  }
  
  new Swiper(`.event-slider__slider`, {
      speed: 800,
      slidesPerView: 'auto',
      spaceBetween: 26,
      breakpoints: {
          // when window width is >= 540px
          1200: {
              slidesPerGroup: 2,
          },
          1600: {
              slidesPerGroup: 3,
          }
      },
      navigation: {
          nextEl: `.event-slider__arrow-next`,
          prevEl: `.event-slider__arrow-prev`,
          disabledClass: `event-slider__arrow--disabled`,
        }
  });
  
  
  Fancybox.bind("[data-fancybox]", {
      // Your options go here
  });
  var parallaxInstance = new Parallax(document.getElementById('scene'));
  parallaxInstance.limit(70, 30)

  new Swiper(`.block-our-astronauts__slider`, {
    speed: 600,
    slidesPerView: 1,
    observer: true,
    breakpoints: {
      // when window width is >= 540px
      540: {
        slidesPerView: 2,
      },
      860: {
        slidesPerView: 3,
      }
    },
    pagination: {
      el: `.block-our-astronauts__lines`,
      clickable: true,
      bulletActiveClass: `block-our-astronauts__line--active`,
      renderBullet: function (index, className) {
        return `<div class="${className} block-our-astronauts__line"></div>`;
      },
    },
  });


  
  $('.btn-top').click(()=>{
    $('body,html').animate({scrollTop: 0}, 1000);
  })

  $(document).scroll(function () {
    if( $(this).scrollTop() > 1000) {
      $('.btn-top').addClass('active');
    } else {
      $('.btn-top').removeClass('active');
    }
  });
// Карта
	ymaps.ready(function() {
			 // Для начала проверим, поддерживает ли плеер браузер пользователя.
       if (!ymaps.panorama.isSupported()) {
        // Если нет, то просто ничего не будем делать.
        return;
    }

    var myMap = new ymaps.Map('map', {
            center: [53.982818736498984, 38.36953763863699],
            zoom: 10,
            controls: []
        }),

        // При клике на метке будет открываться балун,
        // содержащий Яндекс.Панораму в текущей географической точке.
        myPlacemark1 = new ymaps.Placemark([53.982818736498984, 38.36953763863699], {
            // Для данной метки нужно будет открыть воздушную панораму.
            panoLayer: 'yandex#airPanorama',
            balloonContentHeader: '<a href="https://www.dtivt.ru/">ДКИТ</a><br>',
            // Зададим содержимое основной части балуна.
            balloonContentBody: '<img src="./images/common/dkit.jpg" height="150" width="200"> <br/> '
            // Зададим содержимое нижней части балуна.
        }, {
            preset: 'islands#redIcon',
            openEmptyBalloon: true,
            balloonPanelMaxMapArea: 0 
        })


    // Функция, устанавливающая для метки макет содержимого ее балуна.
    function setBalloonContentLayout (placemark, panorama) {
        // Создание макета содержимого балуна.
        var BalloonContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div id="panorama" style="width:256px;height:156px"></div>', {
                // Переопределяем функцию build, чтобы при формировании макета
                // создавать в нем плеер панорам.
                build: function () {
                    // Сначала вызываем метод build родительского класса.
                    BalloonContentLayout.superclass.build.call(this);
                    // Добавляем плеер панорам в содержимое балуна.
                    this._openPanorama();
                },
                // Аналогично переопределяем функцию clear, чтобы удалять
                // плеер панорам при удалении макета с карты.
                clear: function () {
                    this._destroyPanoramaPlayer();
                    BalloonContentLayout.superclass.clear.call(this);
                },
                // Добавление плеера панорам.
                _openPanorama: function () {
                    if (!this._panoramaPlayer) {
                        // Получаем контейнер, в котором будет размещаться наша панорама.
                        var el = this.getParentElement().querySelector('#panorama');
                        this._panoramaPlayer = new ymaps.panorama.Player(el, panorama, {
                            controls: ['panoramaName']
                        });
                    }
                },
                // Удаление плеера панорамы.
                _destroyPanoramaPlayer: function () {
                    if (this._panoramaPlayer) {
                        this._panoramaPlayer.destroy();
                        this._panoramaPlayer = null;
                    }
                }
            });
        // Устанавливаем созданный макет в опции метки.
        placemark.options.set('balloonContentLayout', BalloonContentLayout);
    }

    // В этой функции выполняем проверку на наличие панорамы в данной точке.
    // Если панорама нашлась, то устанавливаем для балуна макет с этой панорамой,
    // в противном случае задаем для балуна простое текстовое содержимое.
    function requestForPanorama (e) {
        var placemark = e.get('target'),
            // Координаты точки, для которой будем запрашивать панораму.
            coords = placemark.geometry.getCoordinates(),
            // Тип панорамы (воздушная или наземная).
            panoLayer = placemark.properties.get('panoLayer');

        placemark.properties.set('balloonContent', "Идет проверка на наличие панорамы...");

        // Запрашиваем объект панорамы.
        ymaps.panorama.locate(coords, {
            layer: panoLayer
        }).then(
            function (panoramas) {
                if (panoramas.length) {
                    // Устанавливаем для балуна макет, содержащий найденную панораму.
                    setBalloonContentLayout(placemark, panoramas[0]);
                } else {
                    // Если панорам не нашлось, задаем
                    // в содержимом балуна простой текст.
                    placemark.properties.set('balloonContent', "ДКИТ");
                }
            },
            function (err) {
                placemark.properties.set('balloonContent',
                    "ДКИТ");
            }
        );
    }

    // Слушаем на метках событие 'balloonopen': как только балун будет впервые открыт,
    // выполняем проверку на наличие панорамы в данной точке и в случае успеха создаем
    // макет с найденной панорамой.
    // Событие открытия балуна будем слушать только один раз.
    myPlacemark1.events.once('balloonopen', requestForPanorama);
   
    myMap.geoObjects.add(myPlacemark1);

    $('.questions__item').click(function(){
			const elem = $(this);
			elem.toggleClass('active');
		})

    new Swiper('.photo-gallery__slider', {
			speed: 600,
			spaceBetween: 20,
			slidesPerView: 1,

			breakpoints: {
				// when window width is >= 540px

				540: {
					slidesPerView: 2,
				},

				1040: {
					slidesPerView: 3,
				},

				1240: {
					slidesPerView: 3,
				}
			},

			navigation: {
				nextEl: `.photo-gallery__arrow-wrapper--next`,
				prevEl: `.photo-gallery__arrow-wrapper--prev`,
				disabledClass: `photo-gallery__arrow-wrapper--disabled`,
			},

			  pagination: {
				el: `.photo-gallery__slider-bullets`,
				type: 'bullets',
				bulletClass: `photo-gallery__slider-bullet`,
				bulletElement: 'span',
				bulletActiveClass: `photo-gallery__slider-bullet--active`,
				clickable: true
			},
		});

		});
});
