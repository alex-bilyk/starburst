import $ from 'jquery'
window.jQuery = $;
window.$ = $;

import 'jquery-ui-slider/jquery-ui.min';
import Swiper from 'swiper/dist/js/swiper.min';

// Settings for sliders

const swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 10,
    navigation: {
        prevEl: '.main__info__slider__arrow-prev',
        nextEl: '.main__info__slider__arrow-next'
    }
});

$(document).ready(function() {
    // Inputs range

    $('.main__info__form .form').find('.range_default').each(function (index, item) {
       $(item).slider({
           range: "min",
           value: 40,
           orientation: "horizontal",
           min: 0,
           max: 100,
           step: 1,
           animate: true
       });
       $(item).attr('name', index);
    });

    // Ban on entering letters

    const inputsPhone = document.querySelectorAll('.inputPhone-js');

    for (let a = 0; a < inputsPhone.length; a++) {
        inputsPhone[a].onkeydown = function(e){
            if((e.which >= 48 && e.which <= 57)
                || (e.which >= 96 && e.which <= 105)
                || e.which == 8
                || e.which == 107
                || (e.which >= 37 && e.which <= 40)
                || e.which == 46)
            {
                return true;
            } else {
                return false;
            }
        }
    }

});