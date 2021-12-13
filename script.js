 // init controller
 var controller = new ScrollMagic.Controller();

 // sec1换图

 new ScrollMagic.Scene({
         triggerElement: "#sec1",
         offset: -150
     })
     .setTween(".image", {
         opacity: 1
     })
     //.addIndicators()
     .addTo(controller);

 new ScrollMagic.Scene({
         triggerElement: "#sec1",
         offset: -150
     })
     .setTween("header p", {
         opacity: 0
     })
     //.addIndicators()
     .addTo(controller);

 new ScrollMagic.Scene({
         triggerElement: "#sec1",
         offset: -150
     })
     .setTween("#contact-lens", {
         opacity: 1
     })
     //.addIndicators()
     .addTo(controller);

 new ScrollMagic.Scene({
         triggerElement: "#sec1",
         offset: -150
     })
     .setTween("header h3", {
         opacity: 1
     })
     .addIndicators()
     .addTo(controller);

 // sec2换图
 new ScrollMagic.Scene({
         triggerElement: "#sec2",
         offset: -150
     })
     .setTween("#contact-lens", {
         opacity: 0
     })
     //.addIndicators()
     .addTo(controller);

 new ScrollMagic.Scene({
         triggerElement: "#sec2",
         offset: -150
     })
     .setTween("#suicide", {
         opacity: 1
     })
     //.addIndicators()
     .addTo(controller);

 new ScrollMagic.Scene({
         triggerElement: "#sec2",
         offset: -150
     })
     .setTween("#depress", {
         opacity: 1
     })
     // .addIndicators()
     .addTo(controller);

 // sec3换图
 new ScrollMagic.Scene({
         triggerElement: "#sec3",
         offset: -150
     })
     .setTween("#depress", {
         opacity: 0
     })
     // .addIndicators()
     .addTo(controller);

 new ScrollMagic.Scene({
         triggerElement: "#sec3",
         offset: -150
     })
     .setTween("#suicide", {
         opacity: 0
     })
     //.addIndicators()
     .addTo(controller);

 new ScrollMagic.Scene({
         triggerElement: "#sec3",
         offset: -150
     })
     .setTween("#illness", {
         opacity: 1
     })
     //.addIndicators()
     .addTo(controller);

 // sec4换图
 new ScrollMagic.Scene({
         triggerElement: "#sec4",
         offset: -150
     })
     .setTween("#illness", {
         opacity: 0
     })
     // .addIndicators()
     .addTo(controller);

 new ScrollMagic.Scene({
         triggerElement: "#sec4",
         offset: -150
     })
     .setTween("#suicide", {
         opacity: 0
     })
     //.addIndicators()
     .addTo(controller);

 new ScrollMagic.Scene({
         triggerElement: "#sec4",
         offset: -150
     })
     .setTween("#crime", {
         opacity: 1
     })
     //.addIndicators()
     .addTo(controller);

 // sec5换图
 new ScrollMagic.Scene({
         triggerElement: "#sec5",
         offset: -150
     })
     .setTween("#crime", {
         opacity: 0
     })
     // .addIndicators()
     .addTo(controller);

 var top = document.querySelector("h3");
 top.onclick = function() {
     var img1 = document.querySelector(".image");
     img1.style.opacity = "0";
     document.body.scrollTop = document.documentElement.scrollTop = 0;
 }



 //  // init controller
 //  var controller1 = new ScrollMagic.Controller();

 //  // build tween
 //  var tween = TweenMax.from("#top", 0.5, { autoAlpha: 0, scale: 0.7 });
 //  // var tween2 = TweenMax.from("#section2", 0.5, { autoAlpha: 0, scale: 0.7 });

 //  // build scene
 //  var scene = new ScrollMagic.Scene({ triggerElement: "a#top", duration: 2000, triggerHook: "onLeave" })
 //      .setTween(tween)
 //      //.addIndicators() // add indicators (requires plugin)
 //      .addTo(controller1);



 // // change behaviour of controller to animate scroll instead of jump
 //  controller1.scrollTo(function(newpos) {
 //      TweenMax.to(window, 1.5, { scrollTo: { y: newpos } });
 //  });

 //  //  bind scroll to anchor links
 //  $(document).on("click", "a[href^='#']", function(e) {
 //      var id = $(this).attr("href");
 //      if ($(id).length > 0) {
 //          e.preventDefault();

 //          // trigger scroll
 //          controller1.scrollTo(id);

 //          // if supported by the browser we can even update the URL.
 //          if (window.history && window.history.pushState) {
 //              history.pushState("", document.title, id);
 //          }
 //      }
 //  });