$(document).ready(function() {

	var first = $('#line-1'),
        second = $('#line-2'),
        third = $('#line-3'),
        fourth = $('#line-4'),
        fifth = $('#line-5');

	TweenMax.staggerTo([first, third, fifth, second, fourth], 2,  {width:300}, 0.15);

	$('#accordion').accordion({
      collapsible: true
    });

    var box1 = $('#clip1'),
    	box2 = $('#clip2'),
    	box3 = $('#clip3'),
    	box4 = $('#clip4');

 	clipTween1 = TweenLite.from(box1, .2, {clip:"rect(100px 100px 100px 100px)", paused:true});
 	clipTween2 = TweenLite.from(box2, .2, {clip:"rect(100px 100px 100px 100px)", paused:true});
 	clipTween3 = TweenLite.from(box3, .2, {clip:"rect(100px 100px 100px 100px)", paused:true});
 	clipTween4 = TweenLite.from(box4, .2, {clip:"rect(100px 100px 100px 100px)", paused:true});

 	box1.parent().mouseenter(function() {
    	clipTween1.play();
    });  

	box1.parent().mouseleave(function() {
    	clipTween1.reverse();  
    });

    box2.parent().mouseenter(function() {
    	clipTween2.play();
    });  

	box2.parent().mouseleave(function() {
    	clipTween2.reverse();  
    });

    box3.parent().mouseenter(function() {
    	clipTween3.play();
    });  

	box3.parent().mouseleave(function() {
    	clipTween3.reverse();  
    });

    box4.parent().mouseenter(function() {
    	clipTween4.play();
    });  

	box4.parent().mouseleave(function() {
    	clipTween4.reverse();  
    });

	CSSPlugin.defaultTransformPerspective = 400;

    tween1 = TweenMax.to('#box', .5, {rotationY:180, paused:true});

    var box = $('.box-hit');


	box.mouseenter(function() {
    	tween1.play();
    }); 

    box.mouseleave(function() {
    	tween1.reverse();
    });

    $('.text-effect').hover(function() {
    	TweenMax.to('.text-effect', 0.5, {
    		textShadow:'0px 0px 15px black',
    		color:'none'
    	});
    }, function(){
    	TweenMax.to('.text-effect', 0.5, {
    		textShadow:'0px 0px 0px black',
    		color:'none'
    	});
    });
});