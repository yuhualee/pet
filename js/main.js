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


