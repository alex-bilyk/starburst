import $ from 'jquery'
window.jQuery = $;
window.$ = $;

import 'slick-carousel/slick/slick';

$(document).ready(function() {

    // Settings for sliders
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