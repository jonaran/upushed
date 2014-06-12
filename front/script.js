// Front Scripts

$(document).ready(function(){



        $('img.icons').hover(function(){
        	$(this).toggleClass('iconshighlighted');
        });
        $('.blogs').hover(function(){
        	$(this).toggleClass('blogshighlighted');
        	$('.boxB').toggleClass('blogshighlighted');

        });
        $('.gallery').hover(function(){
        	$(this).toggleClass('galleryhighlighted');

        });

	        $('.orangeShade-one').repeat(2000).toggleClass('orangeShade-three');
	        $('.orangeShade-two').repeat(2300).toggleClass('orangeShade-four');
	        $('.orangeShade-four').repeat(4000).toggleClass('orangeShade-six');
	        $('.orangeShade-three').repeat(2500).toggleClass('orangeShade-one');
	        $('.orangeShade-six').repeat(3000).toggleClass('orangeShade-two');

        (function () {
		    var ID = "tooltip", CLS_ON = "tooltip_ON", FOLLOW = true,
		    DATA = "_tooltip", OFFSET_X = 20, OFFSET_Y = 10,
		    showAt = function (e) {
		        var ntop = e.pageY + OFFSET_Y, nleft = e.pageX + OFFSET_X;
		        $("#" + ID).html($(e.target).data(DATA)).css({
		            position: "absolute", top: ntop, left: nleft
		        }).show();
		    };
		    $(document).on("mouseenter", "*[title]", function (e) {
		        $(this).data(DATA, $(this).attr("title"));
		        $(this).removeAttr("title").addClass(CLS_ON);
		        $("<div id='" + ID + "' />").appendTo("body");
		        showAt(e);
		    });
		    $(document).on("mouseleave", "." + CLS_ON, function (e) {
		        $(this).attr("title", $(this).data(DATA)).removeClass(CLS_ON);
		        $("#" + ID).remove();
		    });
		    if (FOLLOW) { $(document).on("mousemove", "." + CLS_ON, showAt); }
	}());


    var menu = $('.nav');
    var origOffsetY = menu.offset().top;
    function scroll() {
        if ($(window).scrollTop() >= origOffsetY) {
            $('.nav').addClass('navbar-fixed-top');
            $('.content').addClass('menu-padding');
        } else {
            $('.nav').removeClass('navbar-fixed-top');
            $('.content').removeClass('menu-padding');
        }


    }

    document.onscroll = scroll;


});