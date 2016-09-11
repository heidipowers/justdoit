$(document).ready(function() {

    let intro1 = $('.intro1');
    let unicrons = $('.unicrons');
    let $intro = $('.intro');
    let $development = $('.development');


    //Controller init
    var controller = new ScrollMagic.Controller();


    // First Scene
   var firstScene = new TimelineLite();

   var scene1 = new ScrollMagic.Scene({
            triggerElement: unicrons,
            // the scene should last for a scroll distance of 100px
            offset: 50 // start this scene after scrolling for 50px
        })
        .addIndicators({
          name: 'first'
        })
        .setTween(
          firstScene
            .fromTo(intro1, 1, { y: -100, opacity: 0 }, { y: 200, opacity: 1, ease: Power1.easeOut, onComplete: changeHeadline })
            .fromTo(unicrons, 2, { opacity: 1 }, { opacity: 0, onComplete: changeAgain })
            .to(unicrons, 3, { width: 0, onUpdate: moveOnUp, ease: Power1.easeOut })
            )
            .addTo(controller); // assign the scenes to the controller


    //Second Scene

    var secondScene = new TimelineLite();



    var scene2 = new ScrollMagic.Scene({
      triggerElement: ".scene2",

      offset: 50
    })
    .addIndicators({
      name: 'second'
    })
    .setTween(
      secondScene
       .to("h3", 1, {autoAlpha:0})
       .fromTo(".fadein", 1, {opacity: 0}, {opacity: 1})
      )
    .addTo(controller);



    //Animation Functions

    //Scene 1
    function changeHeadline() {
        intro1.text("I'm learning to create good things.");
    }

    function changeAgain() {
        intro1.text("Let me tell you my story...")
    }

    function moveOnUp() {
        TweenLite.to(intro1, 1, { y: 0 })

    }





});
