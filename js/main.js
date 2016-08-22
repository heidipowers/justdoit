$(document).ready(function() {

var intro1 = $('.intro1');
var unicrons = $('.unicrons');
var $intro = $('.intro');
var $development = $('.development');

 //TweenLite.fromTo(intro1, 3, {y:-100, opacity: 0}, {y:200, opacity: 1, ease:Elastic.easeOut})
 //TweenLite.fromTo(unicrons, 3, {x: 500, opacity: 1},{x:-2000, ease:Power1.easeIn, opacity: 0, onComplete:changeHeadline})

 tl = new TimelineLite();

 tl
    .fromTo(intro1, 1, {y:-100, opacity: 0}, {y:200, opacity: 1, ease:Power1.easeOut, onComplete:changeHeadline})
    .fromTo(unicrons, 2, {opacity: 1},{opacity: 0, onComplete:changeAgain})
    .to(unicrons, 3, {width: 0, onUpdate:moveOnUp, ease:Power1.easeOut});


 function changeHeadline(){
  intro1.text("I create Things.");
 }

 function changeAgain(){
  intro1.text("Let's tell the Story")
 }

 function moveOnUp(){
  TweenLite.to(intro1, 1, {y:0})

 }



});



