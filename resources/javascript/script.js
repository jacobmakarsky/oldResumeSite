$(document).ready(function()
{
	//FADING HELLO LOOP CALLBACK FUNCTION
	function fader()
	{
		$("#helloText").text("Hello");
		$("#helloText").fadeIn(1500, function()
		{
			$("#helloText").fadeOut(1500, function()
			{
				$("#helloText").text("你好");
				$("#helloText").fadeIn(1500, function()
				{
					$("#helloText").fadeOut(1500, function()
					{
						$("#helloText").text("Hola");
						$("#helloText").fadeIn(1500, function()
						{
							$("#helloText").fadeOut(1500, function()
							{
								//fading cycle complete
								fader();
							});
						});
					});
				});
			});
		});
	}
	fader();

	//TAB BAR UNDER HERO IMAGE
	// var tabs = $('.tabs');
	// var selector = $('.tabs').find('a').length;
	// //var selector = $(".tabs").find(".selector");
	// var activeItem = tabs.find('.active');
	// var activeWidth = activeItem.innerWidth();
	// $(".selector").css
	// ({
	//   "left": activeItem.position.left + "px", 
	//   "width": activeWidth + "px"
	// });

	// $(".tabs").on("click","a",function(e)
	// {
	//   e.preventDefault();
	//   $('.tabs a').removeClass("active");
	//   $(this).addClass('active');
	//   var activeWidth = $(this).innerWidth();
	//   var itemPos = $(this).position();
	//   $(".selector").css({
	//     "left":itemPos.left + "px", 
	//     "width": activeWidth + "px"
	//   });
	// });
});
