// JavaScript Document by Ben Ehlers

//BACK TO TOP BUTTON HANDLER
$(window).on('scroll', function() 
{
	"use strict";
	var height1 = $('header').outerHeight();
	var height2 = $('h1').outerHeight();
	var height3 = $('#TOP_INFO').outerHeight();
	var y = height1 + height2 + height3-30;
	if (y <= $(window).scrollTop()) 
	{
		$('nav').addClass('fix');
		$('#TO_TOP').addClass('show');
	} 
	else 
	{
		$('nav').removeClass('fix');
		$('#TO_TOP').removeClass('show');
	}
});



//HEADING SCROLL HANDLER
$(window).on('scroll', function() 
{
	"use strict";
	var height1 = $('header').outerHeight();
	var height2 = 43;
	var y = height1 + height2;
	var $h1 = $('h1>span.title');
	var live = $('nav').find('button.live').length !== 0;
	if (y < $(window).scrollTop() && !live) 
	{
		$h1.addClass('fixed');
		$('#MENU+div').attr('aria-expanded',false);
	} 
	else if (y < $(window).scrollTop() && live) 
	{
		//alert('what');
		$h1.addClass('fixed');
		$('#MENU+div').attr('aria-expanded',true);
	} 
	else
	{
		$h1.removeClass('fixed');
		$('#MENU+div').attr('aria-expanded',false);
	}
});


//BACK TO TOP FUNCTION
$('#TO_TOP').click(function() 
{
	"use strict";
	var width = $(window).width();
	$('html,body').animate({ scrollTop: 0 },1800);
	$('.list>li.open').each(function()
	{
		var LI = $(this);
		LI.removeClass('open').attr('aria-expanded',false).attr('title',LI.data('title-original'));
	});
	$('#MENU+div').removeClass('open').attr('aria-expanded',false);
	$('#MENU>button').removeClass('minus');
	if (width <= 650)
	{
		$('#NAV_MAIN>button').attr('tabindex','-1');
	}
});


//JUMP MENU HANDLER
function jumpTo(section)
{
	"use strict"; 
	var width = $(window).width();
	$('html, body').animate(
	{
		scrollTop: $('#'+section).position().top+130
	}, 1500).focus();
	
	document.getElementById(section).focus();
	$('#MENU+div').removeClass('open').attr('aria-expanded', true);
	$('#MENU>button').removeClass('minus');
	if (width <= 650)
	{
		$('#NAV_MAIN>button').attr('tabindex','-1');
	}
}


function jumpToBullet(id)
{
	"use strict"; 
	$('html, body').animate(
	{
		scrollTop: $('#'+id).offset().top-100
	}, 1200).focus();
	
	document.getElementById(id).focus();
	//$('#MENU+div').removeClass('open').attr('aria-expanded', true);
	//$('#MENU>button').removeClass('minus');
}


//PRINT OPTIONS

var $expContent = $('.miniWrapper');

function printOptions()
{
	"use strict";
	$('#PRINT').addClass('options');
	$('#OPTIONS').addClass('show');
}

function printExp()
{
	"use strict";
	$expContent.removeClass('hidden');
	window.print();
	printCan();
}

function printCon()
{
	"use strict";
	$expContent.addClass('hidden');
	$('.pageBreak').addClass('negate');
	window.print();
	printCan();
}

function printCan()
{
	"use strict";
	$expContent.removeClass('hidden');
	$('.pageBreak').removeClass('negate');
	$('#PRINT').removeClass('options');
	$('#OPTIONS').removeClass('show');
}



//EXPAND SECTION LISTS
$('li[role=button]').click(function()
{
	"use strict";
	var open = $(this).is('.unexpand');
	var variable = $(this).find('.variable').html();
	
	if (!open)
	{
		$(this).switchClass('expand','unexpand').html('Less information on <span class="variable">'+variable+'</span>').parent().next('ol,div').addClass('expanded').find('a,dfn,.expand,.unexpand').attr('tabindex','0');
		//$('.expanded').find('.expand').switchClass('expand','unexpand').html('Less information on <span class="variable">'+variable+'</span>.');
	}
	else
	{
		$(this).switchClass('unexpand','expand').html('More information on <span class="variable">'+variable+'</span>');
		$(this).parent().next('ol,div').removeClass('expanded').find('a,dfn,.expand,.unexpand').attr('tabindex','-1');
	}
});

//EXPAND SECTION LISTS
$('li>button').click(function()
{
	"use strict";
	var open = $(this).is('.unexpand');
	var variable = $(this).find('.variable').html();
	
	if (!open)
	{
		$(this).switchClass('expand','unexpand').html('Less information on <span class="variable">'+variable+'</span>').parent().parent().next('ol,div').addClass('expanded').find('a,dfn,.expand,.unexpand').attr('tabindex','0');
		//$('.expanded').find('.expand').switchClass('expand','unexpand').html('Less information on <span class="variable">'+variable+'</span>.');
	}
	else
	{
		$(this).switchClass('unexpand','expand').html('More information on <span class="variable">'+variable+'</span>');
		$(this).parent().parent().next('ol,div').removeClass('expanded').find('a,dfn,.expand,.unexpand').attr('tabindex','-1');
	}
});


//EXPAND NON LIST
$('p[role=button]').click(function()
{
	"use strict";
	var open = $(this).is('.unexpand');
	
	if (!open)
	{
		$(this).switchClass('expand','unexpand').next('.miniWrapper').addClass('expanded').find('a,dfn,.expand,.unexpand').attr('tabindex','0');
		//$('.expanded').find('.expand').switchClass('expand','unexpand').html('Less information on <span class="variable">'+variable+'</span>.');
	}
	else
	{
		$(this).switchClass('unexpand','expand').next('.miniWrapper').removeClass('expanded').find('a,dfn,.expand,.unexpand').attr('tabindex','-1');
	}
});


//HIGHLIGHT BUTTONS WHEN SCOLLED TO SECTION
$(window).scroll(function() 
{
	"use strict";
	var position = $(this).scrollTop();

	$('section').each(function() 
	{
		var target = $(this).offset().top-200;
		var id = $(this).attr('id');
		var navid = id+'_BUT';
		if (position >= target) 
		{
			$('nav button:not(#'+navid+')').removeClass('live').removeAttr('disabled');
			$('nav button#'+navid).addClass('live').attr('disabled',true);
		}
	});
});



//OPEN THE MOBILE MENU
$('#MENU>button').click(function()
{
	"use strict";
	var opened = $('#MENU+div').is('.open');
	var live = $('nav').find('button.live').length !== 0;
	if (opened && !live)
	{
		$('#MENU+div').removeClass('open',300);
		$('#NAV_MAIN').attr('aria-expanded',false);
		$('#NAV_MAIN>button').attr('tabindex','-1');
		$(this).removeClass('minus');
	}
	else if (opened && live)
	{
		$('#MENU+div').removeClass('open',300);
		$('#NAV_MAIN').attr('aria-expanded',true);
		$('#NAV_MAIN>button').attr('tabindex','-1');
		$(this).removeClass('minus');
	}
	else
	{
		$('#MENU+div').addClass('open',300);
		$('#NAV_MAIN').attr('aria-expanded',true);
		$('#NAV_MAIN>button').attr('tabindex','0');
		$(this).addClass('minus');
	}
});



//ACTIVATE BUTTONS AT SMALLER WINDOW SIZE
$(document).ready(function()
{
	"use strict";
	var width = $(window).width();
	if (width <= 650)
	{
		$('#MENU>button').attr('tabindex','0');
		$('#NAV_MAIN>button').attr('tabindex','-1');
		$('#NAV_MAIN').attr('aria-expanded',false);
	}
	else
	{
		$('#MENU>button').attr('tabindex','-1');
		$('#NAV_MAIN>button:not(#PRINT2)').attr('tabindex','0');
		$('#NAV_MAIN').removeAttr('aria-expanded');
	}
});

$(window).on('resize', function()
{
  "use strict";
	var width = $(window).width();
	if (width <= 650)
	{
		$('#MENU>button').attr('tabindex','0');
		$('#NAV_MAIN>button').attr('tabindex','-1');
		$('#NAV_MAIN').attr('aria-expanded',false);
	}
	else
	{
		$('#MENU>button').attr('tabindex','-1');
		$('#NAV_MAIN>button:not(#PRINT2)').attr('tabindex','0');
		$('#NAV_MAIN').removeAttr('aria-expanded');
	}
});
