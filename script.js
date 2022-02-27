import Swiper from 'https://unpkg.com/swiper@7.3.3/swiper-bundle.esm.browser.min.js';
import anime from '/libs/animeJS/anime.es.js';
import { Fancybox } from "https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.esm.js";

$(document).ready(function () {
  $(window).scroll(function () {
    checkScroll();
  });

  checkScroll();

  $('.header__menu-item').click(function(e){
    e.preventDefault();
    let target = $(this).attr('href');
    console.log($(this).attr('href'));
    console.log($(target).offset());
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
  parallaxInstance.limit(70, 0)

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
});
