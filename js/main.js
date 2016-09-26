
$(document).ready(function() {

    let intro1 = $('.intro1');
    let unicrons = $('.unicrons');
    let $intro = $('.intro');
    let $development = $('.development');


    //Controller init
    var controller = new ScrollMagic.Controller();


    // First Scene
   var firstScene = new TimelineLite();
    firstScene
            .fromTo(intro1, 1, { y: -100, opacity: 0 }, { y: 200, opacity: 1, ease: Power1.easeOut, onComplete: changeHeadline })
            .fromTo(unicrons, 2, { opacity: 1 }, { opacity: 0, onComplete: changeAgain })
            .to(unicrons, 2.5, { width: 0, onUpdate: moveOnUp, ease: Power1.easeOut })



   var scene1 = new ScrollMagic.Scene({
            triggerElement: unicrons,
            // the scene should last for a scroll distance of 100px
            offset: 50 // start this scene after scrolling for 50px
        })
        .addIndicators({
          name: 'first'
        })
        .setTween(firstScene)
        .reverse(false);
        //.addTo(controller); // assign the scenes to the controller



    //Second Scene

    var secondScene = new TimelineLite();
    secondScene
       .to("h3", 1, {autoAlpha:0})
       .fromTo(".fadein", 1, {opacity: 0}, {opacity: 1})


    var scene2 = new ScrollMagic.Scene({
      triggerElement: ".scene2",
      triggerHook: 'onCenter'
    })
    .addIndicators({
      name: 'second'
    })
    .setTween(secondScene)
    .addTo(controller);



    //Animation Functions

    //Scene 1
    function changeHeadline() {
        intro1.text("I create things.");
    }

    function changeAgain() {
        intro1.text("Tell The Story")
    }

    function moveOnUp() {
        TweenLite.to(intro1, 1, { y: 0 })

    }

    function pathPrepare ($el) {
    var lineLength = $el[0].getTotalLength();
    $el.css("stroke-dasharray", lineLength);
    $el.css("stroke-dashoffset", lineLength);
  }

  var $word = $(".word");
  var $first = $(".firstdot");
  var $second = $(".seconddot");

  pathPrepare($word);
  pathPrepare($first);
  pathPrepare($second);

    var drawSVG = new TimelineMax()
    .add(TweenMax.to($word, 0.9, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.9
    .add(TweenMax.to($first, 0.1, {strokeDashoffset: 0, ease:Linear.easeNone}))
    .add(TweenMax.to($second, 0.1, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw dot for 0.1
    .add(TweenMax.to("path", 1, {stroke: "#33629c", fill: "#efefef", ease:Linear.easeNone}), 0);     // change color during the whole thing

  var scene3 = new ScrollMagic.Scene({
    triggerElement: "#namedraw",
    duration: 200,
    offset:400,
    tweenChanges: true
  })
  .addIndicators({
    name: 'third'
  })
  .setTween(drawSVG)
  .addTo(controller);








});
