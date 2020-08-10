import "gsap";
import $ from "jquery";
import { TweenMax } from "gsap";

TweenMax.to('.box' , 1 , {
    x: 100,
    y: 200
});

$('.box').css( "background-color","green" );

console.log('ok');

