/* jshint devel:true */
'use strict';
/*global $:false,  Swipe:false,document:false,window:false */
;(function(){
	var mySwipe = new Swipe(document.getElementById('swipeSlide'), {
	    speed: 400,
	    auto: 3000,
	    continuous:true,
	    callback: function(index) {
	        $($('#point>i').removeClass('active').get(index)).addClass('active');
	    }
	});
	// point
	for(var i = 0; i<$('.slide-ul li').length; i++){
	    var str = $('<i />',{class:'icon-point'});
	    $('.slide-point').append(str);
	}

	$('#point>i').eq(0).addClass('active');
	$('#point>i').each(function(i){
	    $(this).tap(function(){
	        mySwipe.slide(i);
	    });
	});
})();


//image scale
;(function(){
	function imgScale(objs,scale){
		if(typeof objs === 'object' && typeof scale === 'number'){
			$(objs).each(function(){
				var w = parseInt($(this).width());
				$(this).height(parseInt(w*scale));
			});
		}
	}
	// play-story
	function reset(){
		imgScale($('.index .slide .slider-li'),0.5);
		imgScale($('.weekly-star .img'),0.7);
	}

	reset();
	window.onresize = function(){
		reset();
	};
})();

// select-time
;(function(){
	var $len = $('.select-time .slider .item').length;
	var $sliderW = $('.select-time .slider').width();
	console.log($sliderW);
	var $ul = $('.select-time .slider ul');
	var $prev = $('.select-time .prev');
	var $next = $('.select-time .next');
	var $left = 0;
	var $ulW = 65 * $len;
	$ul.width($ulW + 'px');
	$prev.on('tap',function(){
		$left = parseInt($ul.css('left'));
		if($ulW + $left <= $sliderW){
			$prev.addClass('disable');
			return false;
		}else{
			go(-1);
		}
	});
	$next.on('tap',function(){
		$left = parseInt($ul.css('left'));
		if($left >= 0){
			$next.addClass('disable');
		}else{
			go(+1);
		}
	});
	function go(number){
		$left += number * 65;
		if($left >= 0){
			$next.addClass('disable');
		}else if($ulW + $left <= $sliderW){
			$prev.addClass('disable');
		}else{
			$next.removeClass('disable');
			$prev.removeClass('disable');
		}
		$ul.css('left',$left + 'px');
	}
})();


