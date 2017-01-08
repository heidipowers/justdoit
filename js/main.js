$(document).ready(function() {

    let unicorns = $('.unicorns path');


    function changeUnicorns(unicorn, newColor) {
        TweenMax.to(unicorn, 2, { fill: newColor, opacity: Math.random() });
    }

    function changeColor(newColor, $this) {
        for (let i = 0; i < unicorns.length; i++) {
            setTimeout(function(x) {
                return function() {
                    changeUnicorns(unicorns[x], newColor)
                };
            }(i), 100 * i)

        }
    }

    //https://github.com/davidmerfield/randomColor

    unicorns.on('click', function() {
        let newColor =
            randomColor({
                luminosity: 'random',
                hue: 'random'
            });
        console.log(newColor)
        let $this = $(this);
        $this.css("fill", newColor);
        changeColor(newColor, $this);
    });


    let intro1 = $('.intro1');
    let unicrons = $('.unicrons');
    console.log(unicrons + " unicrons")
    let $intro = $('.intro');
    let $development = $('.development');


    //Controller init
    var controller = new ScrollMagic.Controller();


    // First Scene
    var firstScene = new TimelineLite();
    firstScene
        .fromTo(intro1, 2, { y: -100, opacity: 0 }, { y: 200, opacity: 1, ease: Power1.easeOut, onComplete: changeHeadline, delay: .5 })
        .fromTo(unicrons, 2, { opacity: 1 }, { opacity: 0, onComplete: changeAgain})
        .to(unicrons, 3, { width: 0, onUpdate: moveOnUp, ease: Power1.easeOut, onComplete: changeLast})



    var scene1 = new ScrollMagic.Scene({
            triggerElement: unicrons,
            // the scene should last for a scroll distance of 100px
            offset: 50 // start this scene after scrolling for 50px
        })
        .addIndicators({
            name: 'first'
        })
        .setTween(firstScene)
        .reverse(false)
        .addTo(controller); // assign the scenes to the controller



    //Second Scene

    var secondScene = new TimelineLite();
    secondScene
        .to("h3", 1, { autoAlpha: 0 })
        .fromTo(".fadein", 1, { opacity: 0 }, { opacity: 1 })
    console.log(secondScene)

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
        intro1.text("I create things in many mediums...");
    }

    function changeAgain() {
        intro1.text("..to tell stories...")
    }

    function changeLast() {
        intro1.text("(go ahead...click one)")
    }

    function moveOnUp() {
        TweenLite.to(intro1, 1, { y: 0 })

    }

    function pathPrepare($el) {
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
        .add(TweenMax.to($word, 0.9, { strokeDashoffset: 0, ease: Linear.easeNone })) // draw word for 0.9
        .add(TweenMax.to($first, 0.1, { strokeDashoffset: 0, ease: Linear.easeNone }))
        .add(TweenMax.to($second, 0.1, { strokeDashoffset: 0, ease: Linear.easeNone })) // draw dot for 0.1
        .add(TweenMax.to("path", 1, { stroke: "#33629c", fill: "#efefef", ease: Linear.easeNone }), 0); // change color during the whole thing

    var scene3 = new ScrollMagic.Scene({
            triggerElement: "#namedraw",
            duration: 200,
            offset: 400,
            tweenChanges: true
        })
        .addIndicators({
            name: 'third'
        })
        .setTween(drawSVG)
        .addTo(controller);








});
