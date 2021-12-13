 // init controller
 var controller = new ScrollMagic.Controller();

 // sec1换图
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
     // .addIndicators()
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