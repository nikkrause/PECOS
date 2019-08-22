// JavaScript Document

var tip = $('#CURTAIN').is('.show');
var tip2 = $('#CURTAIN').is('.show2');

$('.tip').click(function()
{
	"use strict";
	if (tip || tip2)
	{
		$(this).blur();
		return false;
	}
});

$('.tip').on('mouseenter', function()
{
	"use strict";
	var focus = $(this).is(':focus');
	if (!tip && !focus)
	{
		var width = $('#JUMP').outerWidth()-50;
		var offset = width/2;
		var tipNum = $(this).attr('id');
		var tipText = $('.tipBox[aria-labelledby='+tipNum+']').html();
		var tipHeader = $(this).html();
		$('#CURTAIN').append('<h3>'+tipHeader+'</h3> '+tipText).addClass('show').css({
			'width': width,
			'margin-left': - offset
		});
	}
	else
	{
		return false;
	}
});

$('.tip').on('mouseleave', function()
{
	"use strict";
	$('#CURTAIN').removeAttr('class').removeAttr('style').empty();
});

$('.tip').on('focus', function()
{
	"use strict";
	var alreadyTip = $('#CURTAIN').html();
	if (!tip || !tip2)
	{
		if (alreadyTip !== '')
		{
			return false;
		}
		else
		{
			var width = $('#JUMP').outerWidth()-50;
			var offset = width/2;
			var tipNum = $(this).attr('id');
			var tipText = $('.tipBox[aria-labelledby='+tipNum+']').html();
			var tipHeader = $(this).html();
			$('#CURTAIN').append('<h3>'+tipHeader+'</h3> '+tipText).addClass('show2').css({
				'width': width,
				'margin-left': - offset
			});
		}
	}
	else
	{
		return false;
	}
});

$('.tip').on('focusout', function()
{
	"use strict";
	$('#CURTAIN').removeAttr('class').removeAttr('style').empty();
});


$(window).on('scroll', function() 
{
	"use strict";
	//var focus = $('.tip').is(':focus');
	if (tip2)
	{
		$('#CURTAIN').removeAttr('class').removeAttr('style').empty();
	}
});



$(document).mousemove(function(e)
{
	"use strict";
	var windowCenter = Math.floor(window.innerHeight/2);
	var tipHeight = $('#CURTAIN.show').outerHeight()+20;
	var parTipHeight = parseInt(tipHeight);
	if(e.clientY>windowCenter)
	{
		$('#CURTAIN.show').css({top:e.clientY-parTipHeight});
	}
	else
	{
		$('#CURTAIN.show').css({top:e.clientY+20});
	}
});     