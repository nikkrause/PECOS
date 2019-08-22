// JavaScript Document

$('.tip').on('mouseenter focus click', function()
{
	"use strict";
	var tip = $('#CURTAIN').is('.show');
	if (!tip)
	{
		var width = $('#JUMP').outerWidth()-50;
		var offset = width/2;
		var tipNum = $(this).attr('id');
		var header = $('header').outerHeight();
		var h1 = $('h1').outerHeight();
		var shift = header + h1;
		var tipTop = $(this).offset().top - shift;
		var tipText = $('.tipBox[aria-labelledby='+tipNum+']').html();
		var tipHeader = $(this).html();
		$('#CURTAIN').append('<h3>'+tipHeader+'</h3> '+tipText).addClass('show').css({
			'width': width,
			'margin-left': - offset,
			'top': tipTop
		});
	}
	else
	{
		return false;
	}
});

$('.tip').on('mouseleave focusout', function()
{
	"use strict";
	$('#CURTAIN').removeAttr('class').removeAttr('style').empty();
});


$(window).on('scroll', function() 
{
	"use strict";
	var scrollTop = $(this).scrollTop();
	$('.tip:focus').each(function() 
	{
   	var topDistance = $(this).offset().top;
		if ((topDistance-100) < scrollTop) 
		{
      $('#CURTAIN').removeAttr('class').removeAttr('style').empty();
  	}
	});
});