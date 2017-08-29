// Lesson One - Selectors

// var header = document.getElementById('header'),
// h1 = document.getElementsByTagName('h1'),
// intro = document.getElementsByClassName('intro'),
// firstItem = document.getElementsByClassName('list')[0].firstElementChild,
// secondItem = document.getElementsByClassName("list")[0].children[1],
// lastItem = document.getElementsByClassName('list')[0].lastElementChild;
//
// TweenLite.to(secondItem, 1, {opacity: 0, x: 50});

// Lesson Two - TweenLite - Simple Tween

// (function($) {
//
//   var img = $('img'),
// h2 = $('h2'),
// i = 0;
//
//   // Simple Tween
//
// TweenLite.fromTo(img, 2, {x: -600}, {x: 0, ease: Bounce.easeOut, onStart: onStart, onUpdate: onUpdate, onComplete: onComplete});
//
// function onStart(){
// console.log('animation started');
// }
//
// function onUpdate(){
// //console.log('animation in progress');
// h2.text(i++);
// 	}
//
// 	function onComplete(){
// 	console.log('animation completed');
// 	}
//
// })(jQuery);

// Lesson Three - Timelines - Multiple objects

(function ($) {

  var img = $('img'),
			h2 = $('h2'),
			h1 = $('h1'),
			intro = $('.intro'),
			listItem = $('ul li'),
      buttons = $('button')
			tl = new TimelineLite({paused: true}),
      dot = $('.dot'),
      loader = $('#loader'),
      tlLoader = new TimelineMax({repeat: 2, onComplete: loadContent});


tl.set(header, {autoAlpha: 1})
.from(h1, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut})
.from(intro, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut}, "-=0.2")
.from(img, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut}, "-=0.2")
.from(h2, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut}, "-=0.2")
.from(listItem, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut},"-=0.2")
.staggerFrom(buttons, 0.2, {y: 100, autoAlpha: 0, ease:Power1.easeOut}, 0.1);


// Loader timeline

tlLoader.staggerFromTo(dot, 0.3,
  {y: 0, autoAlpha: 0},
  {y: 20, autoAlpha: 1, ease:Back.easeInOut},
   0.05
 )
 .fromTo(loader, 0.3,
 {autoAlpha :1, scale: 1.3},
 {autoAlpha: 0, scale: 1, ease:Power0.easeNone},
 0.9
)
.fromTo(loader, 0.3, {autoAlpha: 1, scale : 1.3}, {autoAlpha: 0, scale : 1, ease:Power0.easeNone}, 0.9);

function loadContent(){
  var tlLoaderOut = new TimelineLite({onComplete: contentIn});
  tlLoaderOut
  .set(dot, {backgroundColor: '#2b4d66'})
  .to(loader, 0.3, {autoAlpha: 1, scale: 1.3, ease:Power0.easeNone})
  .staggerFromTo(dot, 0.3,
    {y: 0, autoAlpha: 0},
    {y: 20, autoAlpha: 1, ease:Back.easeInOut},
     0.05, 0
   )
   .to(loader, 0.5, {y: -200, autoAlpha: 0, ease:Back.easeIn}, '-=0.2')
   ;
}

function contentIn(){
  tl.play();
}

// $('#btnPlay').on('click',function(){
// tl.play();
// })
//
// $('#btnPause').on('click',function(){
// 	tl.pause();
// });
//
// $('#btnResume').on('click',function(){
// 	tl.resume();
// });
//
// $('#btnReverse').on('click',function(){
// 	tl.reverse();
// });
//
// $('#btnSpeedUp').on('click',function(){
// 	tl.timeScale(8);
// });
//
// $('#btnSlowDown').on('click',function(){
// 	tl.timeScale(0.5);
// });
//
// $('#btnSeek').on('click',function(){
// 	tl.seek(1);
// });
//
// $('#btnProgress').on('click',function(){
// 	tl.progress(0.5);
// });
//
// $('#btnRestart').on('click',function(){
// 	tl.restart();
// });


})(jQuery);
